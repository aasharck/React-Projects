import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { changeColor } from '../features/theme';

const ThemeColor = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState('');
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button onClick={() => dispatch(changeColor(color))}>Change Color</button>
    </div>
  );
};

export default ThemeColor;
