import React from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

function Sweetalert() {
  const showAlert = () => {
    swal({
      title: "Hello world!",
      text: "This is a SweetAlert popup!",
      icon: "success",
    });
  };

  const showAlert2 = () => {
    swal({
        title: "Custom Title",
        text: "Custom message here",
        icon: "info",
        button: "OK",
      });
  }

  return (
    <div>
      <button onClick={showAlert}>Show</button>
      <button onClick={showAlert2}>Show2</button>
      <Link to="/" style={{ display: 'block', marginTop: '10px' }}><button>Back to Menu</button></Link>
    </div>
  );
}

export default Sweetalert;


