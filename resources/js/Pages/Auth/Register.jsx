//import hook react
import React, { useState } from "react";

//import Head, usePage and Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function Register() {
    const { errors } = usePage().props;

    // state user
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    //function "registerHandler"
    const registerHandler = async (e) => {
        e.preventDefault();

        //register
        Inertia.post("/register", {
            name: name,
            email: email,
            alamat: alamat,
            password: password,
            password_confirmation: passwordConfirmation,
        });
    };

    return (
        <>
             <Head>
                <title>Register Akun - IKATWI</title>
            </Head>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 mt-80">
                        <div className="text-center mb-4">
                            <img src="/assets/images/logo.png" width={'60'} />
                            <h4><strong>IKATWI</strong></h4>
                        </div>
                        <div className="card border-0 rounded-3 shadow-sm border-top-success">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="fw-bold">REGISTER AKUN ANGGOTA</h6>
                                    <hr />
                                </div>
                                <form onSubmit={registerHandler}>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="mb-1">Nama Lengkap</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Lengkap" />
                                            </div>
                                            {errors.name && (
                                                <div className="alert alert-danger">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <label className="mb-1">Alamat Email</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                                <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Alamat Email" />
                                            </div>
                                            {errors.email && (
                                                <div className="alert alert-danger">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12">
                                            <label className="mb-1">Alamat</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text"><i className="fa fa-folder"></i></span>
                                                <textarea type="text" className="form-control" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat Lengkap Anda" />
                                            </div>
                                            {errors.alamat && (
                                                <div className="alert alert-danger">
                                                    {errors.alamat}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="mb-1">Password</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                            </div>
                                            {errors.password && (
                                                <div className="alert alert-danger">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <label className="mb-1">Password Confirmation</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                                <input type="password" className="form-control" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Password Confirmation" />
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <button className="btn btn-success shadow-sm rounded-sm px-4 w-100" type="submit">REGISTER</button>
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
