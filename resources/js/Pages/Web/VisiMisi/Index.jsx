//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

export default function VisiMisiIndex() {
    return (
        <>
            <Head>
                <title>IKATWI Visi & Misi - Ikatan Terapis Wicara</title>
            </Head>
            <LayoutWeb>
                <div
                    className="container"
                    style={{ marginTop: "130px", marginBottom: "50px" }}
                >
                    <div className="fade-in mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="font-weight-bold text-center text-dark">
                                        Visi Misi
                                    </h4>
                                </div>
                                <div className="card bg-footer border-0 rounded shadow-sm">
                                    <div className="card-header">
                                        <div className="col-sm-8 text-center col-md-12 order-sm-0 order-md-0 py-5">
                                            <strong>
                                                <h5
                                                    style={{ color: "white" }}
                                                    className="mt-2"
                                                >
                                                    VISI : MEWUJUDKAN IKATWI
                                                    SEBAGAI WADAH ORGANISASI
                                                    YANG BERORIENTASKAN PADA
                                                    TRANSPARANSI, AKUNTABILITAS,
                                                    KUALITAS DAN KEILMUAN TERAPI
                                                    WICARA
                                                </h5>
                                            </strong>
                                            <br></br>
                                            <h4 style={{ color: "white" }}>
                                                MISI : MELAKUKAN TRANSFORMASI TATA KELOLA ORGANISASI, MENGUATKAN  ASPEK LEGAL ORGANISASI
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutWeb>
        </>
    );
}
