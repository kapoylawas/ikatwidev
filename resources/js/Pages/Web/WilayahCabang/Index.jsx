import React, { useState } from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, usePage } from "@inertiajs/inertia-react";

//import component pagination
import Pagination from "../../../Shared/Pagination";

import Search from "../../../Shared/Search";

export default function WilayahCabangIndex() {
    const { wilayah } = usePage().props;

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
                                                                Wilayah DPW
                                                                IKATWI
                                                            </h4>
                                                            <p
                                                                className="text-dark"
                                                                style={{
                                                                    fontSize:
                                                                        "1.1rem",
                                                                }}
                                                            ></p>
                                                            <div className="divider-custom mx-auto"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <Search
                                                            URL={"/wilayah"}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className="row">
                                                            {wilayah.data.map(
                                                                (
                                                                    wilaya,
                                                                    index
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="col-12 col-md-6 col-lg-6 mb-4"
                                                                    >
                                                                        <div className="card border-0 rounded shadow-custom h-100">
                                                                            <button class="btn btn-sm btn-danger border-0 mt-1 mb-2">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="16"
                                                                                    height="16"
                                                                                    fill="currentColor"
                                                                                    class="bi bi-building me-2"
                                                                                    viewBox="0 0 16 16"
                                                                                >
                                                                                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                                                                                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                                                                                </svg>
                                                                                <strong style={{ color: "black" }}>
                                                                                <h5>
                                                                                {
                                                                                    wilaya
                                                                                        .province
                                                                                        .name
                                                                                }
                                                                                </h5>
                                                                                </strong>
                                                                            </button>
                                                                            <iframe
                                                                                src={`https://maps.google.com/maps?q=${wilaya.lat},${wilaya.long}&hl=es;&output=embed`}
                                                                                style={{
                                                                                    width: "100%",
                                                                                    height: "200px",
                                                                                    objectFit:
                                                                                        "cover",
                                                                                }}
                                                                            ></iframe>
                                                                            <div className="card-body">
                                                                                <div className="text-center">
                                                                                    <button class="btn btn-sm btn-danger border-0">
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            width="16"
                                                                                            height="16"
                                                                                            fill="currentColor"
                                                                                            class="bi bi-telephone me-2"
                                                                                            viewBox="0 0 16 16"
                                                                                        >
                                                                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                                                        </svg>
                                                                                        {
                                                                                            wilaya.phone
                                                                                        }
                                                                                    </button>
                                                                                    <br />
                                                                                    <button class="btn btn-sm btn-danger border-0 mt-1">
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            width="16"
                                                                                            height="16"
                                                                                            fill="currentColor"
                                                                                            class="bi bi-envelope-at-fill me-2"
                                                                                            viewBox="0 0 16 16"
                                                                                        >
                                                                                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                                                                                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                                                                                        </svg>
                                                                                        {
                                                                                            wilaya.email
                                                                                        }
                                                                                    </button>
                                                                                    <br />
                                                                                    <button class="btn btn-sm btn-danger border-0 mt-1">
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            width="16"
                                                                                            height="16"
                                                                                            fill="currentColor"
                                                                                            class="bi bi-geo-alt-fill"
                                                                                            viewBox="0 0 16 16"
                                                                                        >
                                                                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                                                        </svg>
                                                                                        {
                                                                                            wilaya.alamat
                                                                                        }
                                                                                    </button>
                                                                                    <br />
                                                                                </div>
                                                                                <a
                                                                                    className="link-article text-decoration-none"
                                                                                    href="https://santrikoding.com/tutorial-nuxt-3-dan-laravel-10-6-delete-data-dengan-rest-api-di-nuxt-3"
                                                                                >
                                                                                    <h6
                                                                                        className="card-title font-weight-bold text-dark"
                                                                                        style={{
                                                                                            lineHeight:
                                                                                                "30px",
                                                                                        }}
                                                                                    ></h6>
                                                                                </a>
                                                                            </div>
                                                                            <div className="card-footer">
                                                                                <a
                                                                                    href="https://santrikoding.com/profile/@maulayyacyber"
                                                                                    className="text-decoration-none"
                                                                                >
                                                                                    <span className="text-black-50 ml-2">
                                                                                        Ketua :
                                                                                        
                                                                                        {" "}
                                                                                        <strong>
                                                                                            {
                                                                                                wilaya.name_ketua
                                                                                            }
                                                                                        </strong>
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                        <div className="col-md-12 mt-4 mb-5">
                                                            <Pagination
                                                                links={
                                                                    wilayah.links
                                                                }
                                                                align={"center"}
                                                            />
                                                        </div>
                                                    </div>
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
