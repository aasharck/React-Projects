import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../slices/userSlice';
import styles from '../styles/Home.module.css';


const Users = () => {
  const [name, setName] = useState('');
  const users = useSelector((state) => state.masterReducer.userReducer.users);
  const dispatch = useDispatch();

  return (
    <div>
      <input
      className={styles.inputBox}
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className={styles.btn} onClick={() => dispatch(addUser(name))}>Add User</button>
      <ol>
        {users.length > 0 && users.map((user,i) => (
          <li key={i}>{user}</li>
        ))}
      </ol>
    </div>
  );
};

export default Users;
