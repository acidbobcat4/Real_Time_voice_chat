import React, { useState } from 'react';
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';
import { sendOtp } from '../../../../http/index';
import { useDispatch } from 'react-redux';
import { setOtp } from '../../../../store/authSlice';

const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    async function submit() {
    if (!phoneNumber) {
        alert('Please enter a phone number.');
        return;
    }

    // Basic phone number validation (you can customize this regex)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid phone number.');
        return;
    }

    setIsLoading(true);  // Start loading indicator
    try {
        const { data } = await sendOtp({ phone: phoneNumber });  // Make API call
        console.log(data);  // Log the response to the console for debugging
        dispatch(setOtp({ phone: data.phone, hash: data.hash }));  // Dispatch OTP data to Redux
        onNext();  // Move to the next step
    } catch (error) {
        // Improved error handling
        console.error('Error sending OTP:', error);

        if (error.response) {
            // If error.response exists, handle server response errors
            console.error('Error response:', error.response);  // Log full response
            console.error('Response status:', error.response.status);  // Log status code
            console.error('Response data:', error.response.data);  // Log error message or details from server

            alert(`Error: ${error.response.data.message || 'An error occurred'}`);  // Show error message to user
        } else if (error.message) {
            // If no response, it could be a network error (e.g., server down, timeout, CORS issue)
            console.error('Error message:', error.message);
            alert(`Error: ${error.message || 'Network error. Please check your connection.'}`);
        } else {
            // Generic fallback for unexpected errors
            console.error('Unexpected error:', error);
            alert('An unexpected error occurred. Please try again later.');
        }
    } finally {
        setIsLoading(false);  // Hide loading indicator
    }
}


    return (
        <Card title="Enter your phone number" icon="phone">
            <TextInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button
                        text={isLoading ? 'Sending OTP...' : 'Next'}
                        onClick={submit}
                        disabled={isLoading}
                    />
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    );
};

export default Phone;
