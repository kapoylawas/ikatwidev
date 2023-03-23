//import hook react
import React, { useState } from "react";

//import Head, usePage and Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function ResetPassword() {
    const { search } = location;
    const searchParams = new URLSearchParams(search);
    const email = searchParams.get("email");

    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordconfirm] = useState("");

    const url = window.location.href;
    var arr = url.split("/");
    var parameter = arr[arr.length - 1].split("?");
    const token = parameter[0].split("=")[0];

    const resetpasswordHandler = async (e) => {
        e.preventDefault();

        //reset password
        Inertia.post(
            "/reset-password",
            {
                email: email,
                password: password,
                password_confirmation: password_confirmation,
                token: token,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "PASSWORD ANDA BERHASIL DI UBAH!",
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
                <title>Reset Password - IKATWI</title>
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
                                            readOnly
                                        />
                                    </div>
                                    <label className="mb-1">Password</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            placeholder="Password"
                                        />
                                    </div>
                                    <label className="mb-1">
                                        Password Confirmation
                                    </label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={password_confirmation}
                                            onChange={(e) =>
                                                setPasswordconfirm(
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Password"
                                        />
                                    </div>

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
