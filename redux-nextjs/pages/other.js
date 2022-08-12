import React from 'react';
import Page from '../components/Page';
import { increment } from '../slices/counterSlice';
import { addUser } from '../slices/userSlice';
import { wrapper } from '../store';

const other = (props) => {
  return (
    <div>
      <Page title='Other page' linkTo='/other' />
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const response = await fetch(
      `https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`
    );
    const { data } = await response.json();
    store.dispatch(addUser(`${data.first_name} ${data.last_name}`));
    store.dispatch(increment());
  }
);

export default other;
