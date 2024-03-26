// Parent
import React from 'react';
import Propsdrilling3 from './Propsdrilling3';

const Propsdrilling2 = ({ message }) => {
  return (
    <div>
      <h2>Parent Component</h2>
      <Propsdrilling3 message={message} />
    </div>
  );
};

export default Propsdrilling2;

