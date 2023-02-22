//import hook react
import React, { useState } from "react";

//import Head, usePage and Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function Login() {
    const { errors } = usePage().props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //function "loginHandler"
    const loginHandler = async (e) => {
        e.preventDefault();

        //register
        Inertia.post("/login", {
            email: email,
            password: password,
        });
    };

    return (
        <>
            <Head>
                <title>Login Account - IKATWI</title>
            </Head>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mt-80">
                        <div className="text-center mb-4">
                            <Link href="/">
                                <img
                                    src="/assets/images/logo.png"
                                    width={"60"}
                                />
                            </Link>
                            <h4>
                                <strong>IKATWI</strong>
                            </h4>
                        </div>
                        <div className="card border-0 rounded-3 shadow-sm border-top-success">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="fw-bold">LOGIN ACCOUNT</h6>
                                    <hr />
                                </div>
                                <form onSubmit={loginHandler}>
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
                                            placeholder="Alamat Email"
                                        />
                                    </div>
                                    {errors.email && (
                                        <div className="alert alert-danger">
                                            {errors.email}
                                        </div>
                                    )}

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
                                    {errors.password && (
                                        <div className="alert alert-danger">
                                            {errors.password}
                                        </div>
                                    )}
                                    <button
                                        className="btn btn-success shadow-sm rounded-sm px-4 w-100"
                                        type="submit"
                                    >
                                        LOGIN
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="register text-center mt-3">
                            Belum Punya Akun?{" "}
                            <Link href="/register">Register!</Link>
                        </div>
                        <div className="register text-center mt-3">
                            <Link href="/forgot-password">Lupa Password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
