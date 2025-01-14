//import hook react
import React, { useState } from "react";

//import Head, usePage and Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function Login() {
    const { errors } = usePage().props;

    // const [email, setEmail] = useState("");
    const [noanggota, setNoanggota] = useState("");
    const [password, setPassword] = useState("");

    // set loading
    const [isLoading, setIsLoading] = useState(false);

    //function "loginHandler"
    const loginHandlerLama = async (e) => {
        e.preventDefault();

        //set state isLoading
        setIsLoading(true);

        //register
        Inertia.post("/loginAnggotaLama", {
            no_anggota: noanggota,
            password: password,
        })
            .then((response) => {
                //set state isLoading to false
                setIsLoading(false);
            })
            .catch((error) => {
                //set state isLoading to "false"
                setIsLoading(false);
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
                                <strong className="text-black">IKATWI</strong>
                            </h4>
                        </div>
                        <div className="card border-0 rounded-3 shadow-sm border-top-success">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="fw-bold">LOGIN ACCOUNT</h6>
                                    <hr />
                                </div>

                                <div>
                                    <form onSubmit={loginHandlerLama}>
                                        <label className="mb-1">
                                            No Anggota
                                        </label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={noanggota}
                                                onChange={(e) =>
                                                    setNoanggota(e.target.value)
                                                }
                                                placeholder="No anggota"
                                            />
                                        </div>
                                        {errors.no_anggota && (
                                            <div className="alert alert-danger">
                                                {errors.no_anggota}
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
                                            {isLoading ? "LOADING..." : "LOGIN"}{" "}
                                        </button>

                                        <Link href="/">
                                            <button
                                                className="btn btn-success shadow-sm rounded-sm mt-3 px-4 w-100"
                                                type="submit"
                                            >
                                                <i className="fa fa-arrow-left me-2"></i>
                                                Home
                                            </button>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="register text-center mt-3">
                            Belum Punya Akun?{" "}
                            <Link href="/info">Register!</Link>
                        </div>
                        <div className="register text-center mt-3">
                            <Link href="/reset-password">Lupa Password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
