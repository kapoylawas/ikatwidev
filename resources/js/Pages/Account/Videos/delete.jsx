// File: Shared/Delete.jsx
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';

export default function Delete({ URL, id, className = '' }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteHandler = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            reverseButtons: true,
            backdrop: true,
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                setIsDeleting(true);
                
                Inertia.delete(`${URL}/${id}`, {
                    onStart: () => {
                        setIsDeleting(true);
                    },
                    onSuccess: () => {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Video has been deleted successfully.',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    },
                    onError: () => {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Failed to delete video.',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    },
                    onFinish: () => {
                        setIsDeleting(false);
                    }
                });
            }
        });
    };

    return (
        <button
            onClick={deleteHandler}
            className={`btn btn-danger btn-action ${className} ${isDeleting ? 'disabled' : ''}`}
            title="Delete"
            disabled={isDeleting}
        >
            {isDeleting ? (
                <i className="fa fa-spinner fa-spin"></i>
            ) : (
                <i className="fa fa-trash-alt"></i>
            )}
        </button>
    );
}