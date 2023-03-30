//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

export default function EktaIndex() {
    const { biodata, transactions } = usePage().props;

    console.log(biodata);

    return (
        <>
            <Head>
                <title>User E-KTA - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="col-md-12 mt-5">
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
                        </div>
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="col-md-6 mt-3">
                                        <div className="col-md-6 col-lg-4">
                                            <div className="kartu">
                                                <div
                                                    style={{
                                                        marginTop: "78px",
                                                    }}
                                                    className="tex"
                                                >
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
                                                                <strong>
                                                                    {
                                                                        biodata.name
                                                                    }
                                                                </strong>
                                                            </td>
                                                        </tr>
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
                                                                <strong>
                                                                    {
                                                                        biodata.alamat
                                                                    }
                                                                </strong>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <br></br>
                                                <div
                                                    style={{
                                                        marginTop: "-5px",
                                                    }}
                                                    className="tex"
                                                >
                                                    <table width="100%">
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
                                                                <strong>
                                                                    {
                                                                        biodata.no_anggota
                                                                    }
                                                                </strong>
                                                            </td>
                                                        </tr>
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
                                                                <strong>
                                                                    Aktiv
                                                                </strong>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-md-6 mt-3">
                                        <div className="col-md-6 col-lg-4">
                                            <div className="kartubelakang">
                                                <div
                                                    style={{
                                                        marginTop: "78px",
                                                    }}
                                                    className="tex"
                                                >
                                                    
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-kartu mt-5"></div>
            </LayoutAccount>
        </>
    );
}
