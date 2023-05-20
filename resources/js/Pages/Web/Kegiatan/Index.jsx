//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component pagination
import Pagination from "../../../Shared/Pagination";

import Search from "../../../Shared/Search";

export default function KegiatanIndex() {
    const { kegiatans } = usePage().props;

    return (
        <>
            <Head>
                <title>IKATWI Kegiatan - Ikatan Terapis Wicara</title>
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
                                    <div className="col-md-12">
                                        <div className="alert alert-warning border-0 shadow-sm rounded-3">
                                            <strong>All Agenda Kegiatan</strong>
                                        </div>
                                    </div>
                                    <div className="card bg-gray border-0 rounded shadow-sm mb-5">
                                        <div className="card-header">
                                            <div className="col-sm-12 text-center col-md-12 order-sm-0 order-md-0 py-5">
                                                <div className="text-center">
                                                    <h4 className="font-weight-bold text-dark">
                                                        Agenda Kegiatan
                                                    </h4>
                                                    <p
                                                        className="text-dark"
                                                        style={{
                                                            fontSize: "1.1rem",
                                                        }}
                                                    ></p>
                                                    <div className="divider-custom mx-auto"></div>
                                                </div>
                                            </div>

                                            {/* <div className="col-md-12 mb-3">
                                                <Search URL={"/kegiatan"} />
                                            </div> */}

                                            <div className="col-md-12">
                                                <div className="row">
                                                    {kegiatans.data.map(
                                                        (kegiatan, index) => (
                                                            <div
                                                                key={index}
                                                                className="col-12 col-md-6 col-lg-6 mb-4"
                                                            >
                                                                <div className="card border-0 rounded shadow-custom h-100">
                                                                    {/* image */}
                                                                    <img
                                                                        src={
                                                                            kegiatan.image
                                                                        }
                                                                        className="w-100 rounded-top"
                                                                    />
                                                                    <div className="card-body">
                                                                        <div className="text-center">
                                                                            <br />

                                                                            <br />

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
                                                                                {
                                                                                    kegiatan.name
                                                                                }

                                                                                :{" "}
                                                                                <a
                                                                                    href={
                                                                                        kegiatan.link
                                                                                    }
                                                                                    target="_blank"
                                                                                >
                                                                                    {" "}
                                                                                    LINK{" "}
                                                                                </a>
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
                                                        links={kegiatans.links}
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
            </LayoutWeb>
        </>
    );
}
