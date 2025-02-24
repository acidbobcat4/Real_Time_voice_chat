import React, { useState, useEffect } from 'react';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import styles from './StepAvatar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setAvatar } from '../../../store/activateSlice';
import { activate } from '../../../http/index.js';
import { setAuth } from '../../../store/authSlice';
import Loader from '../../../components/shared/Loader/Loader';

const StepAvatar = ({ onNext }) => {
    const dispatch = useDispatch();
    const { name, avatar } = useSelector((state) => state.activate);
    const [image, setImage] = useState('/images/monkey-avatar.png');
    const [loading, setLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(true);

    // Capture the image file and convert it to a base64 URL
    function captureImage(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setImage(reader.result);
            dispatch(setAvatar(reader.result));  // Store the base64 image in Redux
        };
    }

    // Submit the avatar and name for activation
    async function submit() {
        if (!name || !avatar) return;
        setLoading(true);

        try {
            const { data } = await activate({ name, avatar });

            if (data.auth && isMounted) {
                dispatch(setAuth(data));  // Update auth state only if the component is still mounted
            }
        } catch (err) {
            console.log(err);  // Add better error handling in the future
        } finally {
            setLoading(false);
        }
    }

    // Cleanup on unmount to avoid memory leaks
    useEffect(() => {
        return () => {
            setIsMounted(false);
        };
    }, []);

    // Show loading spinner during the submission
    if (loading) return <Loader message="Activation in progress..." />;

    return (
        <>
            <Card title={`Okay, ${name}`} icon="monkey-emoji">
                <p className={styles.subHeading}>How’s this photo?</p>
                <div className={styles.avatarWrapper}>
                    <img
                        className={styles.avatarImage}
                        src={image}
                        alt="avatar"
                    />
                </div>
                <div>
                    <input
                        onChange={captureImage}
                        id="avatarInput"
                        type="file"
                        className={styles.avatarInput}
                    />
                    <label className={styles.avatarLabel} htmlFor="avatarInput">
                        Choose a different photo
                    </label>
                </div>
                <div>
                    <Button onClick={submit} text="Next" />
                </div>
            </Card>
        </>
    );
};

export default StepAvatar;
