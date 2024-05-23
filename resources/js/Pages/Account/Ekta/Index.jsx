//import react
import React, { useState, useRef } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

import { QRCodeSVG } from "qrcode.react";

import ReactToPrint from 'react-to-print';

export default function EktaIndex() {
    const { biodata, transactions, statusAnggota } = usePage().props;

    const [name] = useState(statusAnggota.status_anggota);


    const status = transactions.map((ts) => ts.status);

    const componentRef = useRef()

    const handlePrint = () =>{
        window.print()
    }

    const filter = status
        .toString()
        .replace("[", "")
        .replace("]", "")
        .replace('"', "")
        .replace('"', "");


    return (
        
        <>
            <Head>
                <title>User E-KTA - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="col-md-12 mt-5">
                    {filter === "PAID" || name === "Anggota Kehormatan" ? (
                        <div className="card border-0 shadow-custom rounded">
                            <div className="card-header text-dark">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-certificate mb-1"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                    <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
                                    <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
                                    <path d="M6 9l12 0"></path>
                                    <path d="M6 12l3 0"></path>
                                    <path d="M6 15l2 0"></path>
                                </svg>
                                E-KTA
                                <span>
                             {/* <ReactToPrint trigger={() => <button className="btn btn-primary btn-sm me-2">print / download</button>} content={() => componentRef.current} /> */}
                            </span>
                            </div>
                            
                            <div ref={componentRef} className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 mt-3">
                                        <div className="col-md-6 col-lg-4">
                                            <div className="kartu">
                                                <div
                                                    style={{
                                                        marginTop: "90px",
                                                    }}
                                                    className="tex"
                                                >
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-3">
                                                            <table
                                                                className="table-responsive"
                                                                width="150%"
                                                            >
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            width: "20%",
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                biodata.image
                                                                            }
                                                                            className="rounded-3 mt-1"
                                                                            style={{
                                                                                marginLeft:
                                                                                    "20%",
                                                                            }}
                                                                            width={
                                                                                "103"
                                                                            }
                                                                            alt="Deskripsi gambar"
                                                                            onError={(
                                                                                e
                                                                            ) => {
                                                                                e.target.onerror =
                                                                                    null; // menghindari infinite loop jika terjadi kesalahan lagi
                                                                                e.target.src =
                                                                                    "/assets/images/user.png"; // mengganti gambar dengan gambar "tidak ditemukan"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                </tr>
                                                               
                                                              
                                                    
                                                    
                                                                <tr>
                                                                    <td>
                                                                        <strong
                                                                            style={{
                                                                                fontSize:
                                                                                    "0.875em",
                                                                            }}
                                                                        >
                                                                        <div
                                                                            style={{
                                                                                fontSize:
                                                                                    "0.775em",
                                                                            }}
                                                                        >
                                                                            Berlaku
                                                                            Sampai
                                                                            : 31
                                                                            DESEMBER
                                                                            2024
                                                                        </div>
                                                                        </strong>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <table
                                                                className="table-responsive "
                                                                width="1300%"
                                                            >
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            width: "81%",
                                                                            marginLeft:
                                                                                "50%",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                fontSize:
                                                                                    "0.875em",
                                                                            }}
                                                                        >
                                                                            Nama
                                                                            :{" "}
                                                                            {
                                                                                biodata.name
                                                                            }
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            width: "51%",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="mt-1"
                                                                            style={{
                                                                                fontSize:
                                                                                    "0.755em",
                                                                            }}
                                                                        >
                                                                            Alamat
                                                                            :{" "}
                                                                            {
                                                                                biodata.alamat
                                                                            }
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            width: "51%",
                                                                        }}
                                                                    >
                                                                        <p className="hidden">
                                                                            {
                                                                                biodata.name
                                                                            }
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            width: "51%",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                fontSize:
                                                                                    "0.875em",
                                                                            }}
                                                                        >
                                                                            No :{" "}
                                                                            {
                                                                                biodata.no_anggota
                                                                            }
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            width: "51%",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="mt-1"
                                                                            style={{
                                                                                fontSize:
                                                                                    "0.875em",
                                                                            }}
                                                                        >
                                                                            Status
                                                                            :{" "}
                                                                            {
                                                                                biodata.status_anggota
                                                                            }
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br></br>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-6 mt-4">
                                        <div className="col-md-6 col-lg-4">
                                            <div className="kartubelakang">
                                                <div
                                                    style={{
                                                        marginTop: "78px",
                                                    }}
                                                    className="tex"
                                                >
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-6">
                                                            <table
                                                                className="table-responsive mt-5"
                                                                width="100%"
                                                            >
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            width: "41%",
                                                                        }}
                                                                    ></td>
                                                                    <td
                                                                        style={{
                                                                            width: "100%",
                                                                        }}
                                                                    >
                                                                        <strong
                                                                            style={{
                                                                                fontSize:
                                                                                    "0.875em",
                                                                            }}
                                                                        ></strong>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <table
                                                                className="table-responsive mt-3"
                                                                width="100%"
                                                            >
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            width: "50%",
                                                                        }}
                                                                    ></td>
                                                                    <td
                                                                        style={{
                                                                            width: "100%",
                                                                        }}
                                                                    >
                                                                        <strong
                                                                            style={{
                                                                                fontSize:
                                                                                    "0.875em",
                                                                            }}
                                                                        >
                                                                            <QRCodeSVG
                                                                                value={
                                                                                    biodata.name
                                                                                }
                                                                                style={{
                                                                                    marginLeft:
                                                                                        "-10%",
                                                                                }}
                                                                                size={
                                                                                    121
                                                                                }
                                                                                renderAs="canvas"
                                                                            />
                                                                        </strong>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row mt-5">
                            <div className="col-12 col-md-12 col-lg-12 mb-4">
                                <div className="alert text-center alert-danger border-0 shadow-sm mb-0">
                                    <h5>Anda belum membayar tagihan IURAN.</h5>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </LayoutAccount>
        </>
    );
}
