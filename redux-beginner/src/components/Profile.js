import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);

  return (
    <div style={{color: theme}}>
      <h3>Profile</h3>
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
      <div>Email: {user.email}</div>
    </div>
  );
};

export default Profile;
