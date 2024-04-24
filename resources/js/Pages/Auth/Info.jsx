//import hook react
import React from "react";

//import Head, usePage and Link
import { Head, Link } from "@inertiajs/inertia-react";

export default function Info() {
    return (
        <>
            <Head>
                <title>Info Register - IKATWI</title>
            </Head>
            <div className="row justify-content-center">
                <div className="col-md-4 mt-80">
                    <div className="text-center text-black mb-4">
                        <Link href="/">
                            <img src="/assets/images/logo.png" width={"60"} />
                        </Link>
                        <h4>
                            <strong className="text-black">IKATWI</strong>
                        </h4>
                    </div>
                    <div className="col-md-12">
                        <div className="card border-0 rounded-3 shadow-sm border-top-success ">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="fw-bold">
                                        INFO REGISTER AKUN ANGGOTA
                                    </h6>
                                    <hr />
                                    <div>
                                        <ol>
                                            <li>
                                                Untuk Tutorial Pengisian Data
                                                Bisa Didownload  <i className="fa fa-long-arrow-alt-right"></i> {" "}
                                                <a href="#">(Turorial PDF)</a>
                                            </li>
                                            <li>
                                                Untuk Pakta Integritas Dapat Di
                                                Download  <i className="fa fa-long-arrow-alt-right"></i> {" "}
                                                <a
                                                    target="_blank"
                                                    href="/assets/files/pakta_integritas.pdf"
                                                >
                                                    (Pakta Integrita PDF)
                                                </a>
                                            </li>
                                        </ol>
                                    </div>
                                    <Link href="/register">
                                        <button
                                            className="btn btn-success shadow-sm rounded-sm px-4 w-100"
                                            type="submit"
                                        >
                                            MASUK REGISTER
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
