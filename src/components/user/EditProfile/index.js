import React from 'react';
import { useSession } from 'hooks';
import ProfileContainer from 'assets/profile-container.png';
import Profile from 'assets/profile-icon.png';
import { editProfile } from 'state/actions/userActions';
import EditProfileForm from './EditProfileForm';

const EditProfile = () => {
  const { user } = useSession();

  return (
    <div className="edit-profile-container">
      <div className="profile-container">
        <div className="profile-icon-container">
          <img className="profile-icon-bg" src={ProfileContainer} alt="Profile Container" />
          <img className="profile-icon" src={Profile} alt="Profile Icon" />
        </div>
        <p className="username">{user.email}</p>
      </div>

      <EditProfileForm onSubmit={editProfile} user={user} />

      <div>
        <p>Delete my TARGET account</p>
      </div>
    </div>
  );
};

export default EditProfile;
