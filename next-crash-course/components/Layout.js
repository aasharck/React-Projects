import React, { Fragment } from 'react';
import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';
import Header from './Header';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <Fragment>
    <Meta />
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
            <Header />
            {children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
