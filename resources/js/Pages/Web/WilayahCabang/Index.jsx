import React, { useState } from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head } from "@inertiajs/inertia-react";

export default function WilayahCabangIndex() {
    return (
        <>
            <Head>
                <title>IKATWI - Wiliyah Anggota Ikatan Terapis Wicara</title>
            </Head>
            <LayoutWeb>
                <div
                    className="container"
                    style={{ marginTop: "20px", marginBottom: "50px" }}
                >
                    <div className="fade-in">
                        <div className="row justify-content-center">
                            <div
                                className="container"
                                style={{ marginTop: "20px" }}
                            >
                                <div
                                    className="container"
                                    style={{
                                        marginTop: "55px",
                                        marginBottom: "50px",
                                    }}
                                >
                                    <div className="row justify-content-center">
                                        <div className="col-md-8">
                                            <div className="card bg-gray border-0 rounded shadow-sm">
                                                <div className="card-header">
                                                    <div className="col-sm-12 text-center col-md-12 order-sm-0 order-md-0 py-5">
                                                        <div className="text-center">
                                                            <h4 className="font-weight-bold text-dark">
                                                                Wilayah DPW IKATWI
                                                            </h4>
                                                            <p
                                                                className="text-dark"
                                                                style={{fontSize: "1.1rem"}}
                                                            >
                                                            </p>
                                                            <div className="divider-custom mx-auto"></div>
                                                        </div>
                                                        
                                                    </div>
                                                    ASDA
                                                </div>
                                            </div>
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
