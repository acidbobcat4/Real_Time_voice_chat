const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');
const userService = require('../services/user-service');
const UserDto = require('../dtos/user-dto');

class ActivateController {
    async activate(req, res) {
        const { name, avatar } = req.body;

        console.log('Name:', name);  // Log incoming data
        console.log('Avatar:', avatar);

        // Ensure the user is authenticated
        if (!req.user) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Check if name and avatar are provided
        if (!name || !avatar) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        // Image Base64: remove the data URL part of the base64 encoded image
        const buffer = Buffer.from(avatar.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''), 'base64');
        const imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

        // Ensure the 'storage' folder exists
        const storagePath = path.resolve(__dirname, '../storage');
        if (!fs.existsSync(storagePath)) {
            fs.mkdirSync(storagePath, { recursive: true });  // Create the folder if it doesn't exist
        }

        // Compress and save the image using Jimp
        try {
            const jimResp = await Jimp.read(buffer);
            jimResp.resize(150, Jimp.AUTO)  // Resize the image to 150px width, keeping aspect ratio
                .write(path.resolve(__dirname, `../storage/${imagePath}`));  // Save the image to the storage folder
            console.log('Image processed and saved:', imagePath);  // Log success
        } catch (err) {
            console.error('Error processing image:', err);  // Log the error
            return res.status(500).json({ message: 'Could not process the image', error: err.message });
        }

        const userId = req.user._id;

        // Find and update the user in the database
        try {
            const user = await userService.findUser({ _id: userId });
            console.log('User found:', user);  // Log user data
            if (!user) {
                return res.status(404).json({ message: 'User not found!' });
            }

            user.activated = true;  // Set the user as activated
            user.name = name;  // Update the user's name
            user.avatar = `http://localhost:5500/storage/${imagePath}`;  // Set the avatar path

            // Save the user to the database (await the save operation)
            await user.save();
            console.log('User saved successfully');  // Log success

            // Respond with the updated user info
            return res.json({ user: new UserDto(user), auth: true });
        } catch (err) {
            console.error('Error saving user:', err);  // Log the error
            return res.status(500).json({ message: 'Something went wrong!', error: err.message });
        }
    }
}

module.exports = new ActivateController();
