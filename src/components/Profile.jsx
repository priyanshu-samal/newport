import React from 'react';
import './Profile.scss';
import { useTheme } from '../context/ThemeContext';

const Profile = () => {
  const { theme } = useTheme();
  const profileClassName = theme === 'light' ? 'profile light-theme-border' : 'profile';

  return (
    <div className={profileClassName}>
      <div className="profile-image-container">
        <img src="/priyanshusamal-png.jpg" alt="Priyanshu Samal" />
      </div>
    </div>
  );
};

export default Profile;