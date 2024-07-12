import Swal from 'sweetalert2';
import React from 'react';

const SuccessAlert = () => {
    const handleClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Student added successfully!',
            confirmButtonText: 'OK'
        });
    };

    return (
        <div>
            <button onClick={handleClick}>Show SweetAlert</button>
        </div>
    );
};

export default SuccessAlert;
