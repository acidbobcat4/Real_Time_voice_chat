Real-Time Voice Chat Application

This project is a real-time voice chat application built using modern web technologies. It allows users to create and join chat rooms, interact via voice, and manage their profiles. The application is designed with a sleek UI and focuses on delivering seamless communication.

Table of Contents

Features

Technologies Used

Project Structure

Setup Instructions

Environment Variables

API Endpoints

Frontend Overview

Backend Overview

Troubleshooting

Features

User authentication with OTP-based login.

Profile activation with avatar upload and image processing.

Real-time voice communication using WebSockets.

Dynamic room creation and management.

Responsive UI with modern design principles.

Technologies Used

Frontend

React.js

Redux (State Management)

Socket.IO Client

CSS Modules (Styling)

Backend

Node.js

Express.js

Socket.IO

MongoDB (Database)

JWT (Authentication)

Jimp (Image Processing)

Twilio (OTP Services)

Project Structure

Real-Time-Voice-Chat/
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── storage/  # For storing processed avatars
│   ├── actions.js
│   ├── database.js
│   ├── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── styles/
│   │   ├── App.js
│   │   ├── index.js
├── .env
├── package.json
├── README.md

Setup Instructions

Prerequisites

Node.js installed

MongoDB installed and running

Twilio account for OTP services

Steps

Clone the repository:

git clone https://github.com/your-repo-url.git
cd Real-Time-Voice-Chat

Set up the backend:

cd backend
npm install

Create a .env file in the backend directory with the required environment variables (see below).

Set up the frontend:

cd ../frontend
npm install

Run the application:

Start the backend:

cd backend
npm start

Start the frontend:

cd ../frontend
npm start

Access the application:
Open http://localhost:3000 in your browser.

Environment Variables

Create a .env file in the backend/ directory with the following:

PORT=5500
DB_URL=mongodb://127.0.0.1:27017/VoiceChat
JWT_ACCESS_TOKEN_SECRET=your_access_token_secret
JWT_REFRESH_TOKEN_SECRET=your_refresh_token_secret
HASH_SECRET=your_hash_secret
SMS_SID=your_twilio_sid
SMS_AUTH_TOKEN=your_twilio_auth_token
SMS_FROM_NUMBER=your_twilio_phone_number

API Endpoints

Authentication

POST /api/send-otp: Send OTP to the user.

POST /api/verify-otp: Verify OTP and authenticate the user.

POST /api/activate: Activate user profile with name and avatar.

POST /api/logout: Log out the user.

Rooms

POST /api/rooms: Create a new room.

GET /api/rooms: Get all available rooms.

GET /api/rooms/:roomId: Get details of a specific room.

Frontend Overview

Components: Reusable UI elements such as buttons, inputs, and cards.

Pages:

Home: Landing page for the application.

Authenticate: Handles OTP-based login.

Activate: Profile activation with avatar upload.

Rooms: List of available rooms.

Room: Specific chat room interface.

State Management:

Redux is used to manage authentication and application state.

Backend Overview

Authentication:

OTP-based login using Twilio.

JWT tokens for session management.

Real-Time Communication:

Socket.IO handles real-time voice communication.

Image Processing:

Jimp processes user-uploaded avatars (resizing, compressing).

Database:

MongoDB stores user and room data.

Troubleshooting

Common Issues

WebSocket Connection Failing:

Ensure the backend server is running on http://localhost:5500.

Check CORS configuration in server.js.

Twilio Errors:

Verify your Twilio credentials and ensure the phone number is verified for trial accounts.

500 Internal Server Errors:

Check the backend logs for detailed error messages.

Ensure .env file has all the required environment variables.

MongoDB Connection Issues:

Verify the database is running and the DB_URL is correct.
