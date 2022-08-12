import React from 'react';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addAmount, decrement, increment } from '../slices/counterSlice';
import { useState } from 'react';

const Counter = () => {
  const count = useSelector((state) => state.masterReducer.counterReducer.value);
  const dispatch = useDispatch();
  const [amt, setAmt] = useState(0);
  return (
    <div>
      <p className={styles.code}>{count}</p>

      <div>
        <button className={styles.btn} onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className={styles.btn} onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <input
          className={styles.inputBox}
          type='number'
          value={amt}
          onChange={(e) => setAmt(e.target.value)}
        />
        <button
          className={styles.btn}
          onClick={() => dispatch(addAmount(Number(amt) || 0))}
        >
          Add By
        </button>
      </div>
    </div>
  );
};

export default Counter;
