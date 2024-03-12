import Swal from 'sweetalert2';
import React from 'react';
import { Link } from 'react-router-dom';

function SweetAlert2(){
    const showAlert= () => {
        Swal.fire("SweetAlert2 is working!");
    }

    const showAlert2 = () => {
          Swal.fire({
            title: "Hey there",
            text: "Whats up?",
            icon: "question"
          });
    }

    const showAlert3 = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }

    const showAlert4 = () => {
        Swal.fire({
            imageUrl: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
            imageHeight: 400,
            imageWidth: 400,
            imageAlt: "image"
          });
    }

    const showAlert5 = () => {
        Swal.fire({
            title: 'Success',
            text: 'Completed successfully',
            icon: 'success',
        });
    }

    const showAlert6 = () => {
        Swal.fire({
            title: "Custom Title",
            text: "Custom message here",
            icon: "info",
            confirmButtonText: "OK",
          });
    }

    const showAlert7 = () => {
        Swal.fire({
            title: 'Auto close alert!',
            text: 'I will close in 2 seconds.',
            timer: 2000,
            icon: "warning"
          })
    }

    return(
        <div>
            <button onClick={showAlert}>show1</button>
            <button onClick={showAlert2}>show2</button>
            <button onClick={showAlert3}>show3</button>
            <button onClick={showAlert4}>show4</button>
            <button onClick={showAlert5}>show5</button>
            <button onClick={showAlert6}>show6</button>
            <button onClick={showAlert7}>show7</button>
            <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
        </div>
    )
}

export default SweetAlert2;
