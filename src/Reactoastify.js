import React from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Reactoastify() {
    const notify = () => 
    {
        toast("Hello"); //toast('Hello', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, });
        toast.success("success");
        toast.error("error");
        toast.warning("warning");
        toast.info("info")
    }

  return (
    <div>
      <button onClick={notify}>Notify</button>
      {/* <ToastContainer /> */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} 
      pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce}/>
      <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
    </div>
  );
}

export default Reactoastify;
