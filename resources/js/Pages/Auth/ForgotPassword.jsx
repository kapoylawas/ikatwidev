//import hook react
import React, { useState } from "react";

//import Head, usePage and Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from 'sweetalert2';

export default function ForgotPassword() {
    const { errors } = usePage().props;

    const [email, setEmail] = useState("");

    //function "loginHandler"
    const resetpasswordHandler = async (e) => {
        e.preventDefault();

        //register
        Inertia.post(
            "/forgot-password",
            {
                email: email,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "SILAHKAN CEK EMAIL ANDA!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 3500,
                    });
                },
            }
        );
    };

    return (
        <>
            <Head>
                <title>Forgot Password - IKATWI</title>
            </Head>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mt-80">
                        <div className="text-center mb-4">
                            <img src="/assets/images/logo.png" width={"60"} />
                            <h4>
                                <strong>IKATWI</strong>
                            </h4>
                        </div>
                        <div className="card border-0 rounded-3 shadow-sm border-top-success">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="fw-bold">FORGOT PASSWORD</h6>
                                    <hr />
                                </div>
                                <form onSubmit={resetpasswordHandler}>
                                    <label className="mb-1">Email</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            placeholder="Alamat Email Terdaftar"
                                        />
                                    </div>
                                    {errors.email && (
                                        <div className="alert alert-danger">
                                            {errors.email}
                                        </div>
                                    )}
                                    <button
                                        className="btn btn-success shadow-sm rounded-sm px-4 w-100"
                                        type="submit"
                                    >
                                        RESET PASSWORD
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="register text-center mt-3">
                            Sudah Punya Akun? <Link href="/login">Login!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
