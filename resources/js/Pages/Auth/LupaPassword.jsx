//import hook react
import React, { useState } from "react";

//import Head, usePage and Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function LupaPassword() {
    const { errors } = usePage().props;

    console.log(errors);

    const [nik, setNik] = useState("");
    const [noAnggota, setNoAnggota] = useState("");

    const resetHandler = async (e) => {
        e.preventDefault();

        //register
        Inertia.post(
            "/resetPassword",
            {
                no_anggota: noAnggota,
                nik: nik,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Register saved successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
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
                                <strong className="text-black">IKATWI</strong>
                            </h4>
                        </div>
                        <div className="alert alert-success">
                            <div className="card-body">
                                <div className="text-center">
                                    <div>
                                        <ol>
                                            <li>
                                                Masukkan data nik dan no
                                                anggota/KTA dengan benar
                                            </li>
                                            <li>
                                                PASSWORD akan di reset menjadi
                                                nik anda
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0 rounded-3 shadow-sm border-top-success">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="fw-bold">
                                        RESET PASSWORD ANGGOTA
                                    </h6>
                                </div>
                                {errors.meta && (
                                    <div className="alert alert-danger mt-2">
                                        {errors.meta}
                                    </div>
                                )}
                                <form onSubmit={resetHandler}>
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                NIK
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={nik}
                                                    onChange={(e) =>
                                                        setNik(e.target.value)
                                                    }
                                                    placeholder="No Induk Kependudukan"
                                                    maxLength={16}
                                                />
                                            </div>
                                            {errors.nik && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.nik}
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-1">
                                            <label className="form-label">
                                                No Anggota
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={noAnggota}
                                                    onChange={(e) =>
                                                        setNoAnggota(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="No Aggota / No KTA"
                                                    maxLength={7}
                                                />
                                            </div>
                                            {errors.no_anggota && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.no_anggota}
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            className="btn btn-success shadow-sm rounded-sm px-4 w-100"
                                            type="submit"
                                        >
                                            RESET PASSWORD
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="register text-center mt-3">
                        <Link href="/login">Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
