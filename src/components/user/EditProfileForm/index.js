import React from 'react';
import useSession from 'hooks/';

const EditProfileForm = () => {
  const { user } = useSession();
  console.log(user);

  return <div />;
};

export default EditProfileForm;
