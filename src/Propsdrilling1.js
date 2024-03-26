// GrandParent
import React from 'react';
import Propsdrilling2 from './Propsdrilling2';

const Propsdrilling1 = () => {
  const message = "Hello from GrandParent!";
  
  return (
    <div>
      <h1>GrandParent Component</h1>
      <Propsdrilling2 message={message} />
    </div>
  );
};

export default Propsdrilling1;




