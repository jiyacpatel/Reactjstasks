// Child
import React from 'react';
import { Link } from 'react-router-dom';

const Propsdrilling3 = ({ message }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>{message}</p>
      <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
    </div>
  );
};

export default Propsdrilling3;

