//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component pagination
import Pagination from "../../../Shared/Pagination";

export default function HistoryIndex() {
    const { pengurus } = usePage().props;

    return (
        <>
            <Head>
                <title>IKATWI - Ikatan Terapis Wicara</title>
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
                                            <strong>Susunan Pengurus IKATWI</strong>
                                        </div>
                                    </div>
                                    <div className="card bg-gray border-0 rounded shadow-sm mb-5">
                                        <div className="card-header">
                                            <div className="col-sm-12 text-center col-md-12 order-sm-0 order-md-0 py-5">
                                                <div className="text-center">
                                                    <h4 className="font-weight-bold text-dark">
                                                    Susunan Pengurus
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
                                                    {pengurus.data.map(
                                                        (pgrs, index) => (
                                                            <div
                                                                key={index}
                                                                className="col-12 col-md-6 col-lg-6 mb-4"
                                                            >
                                                                <div className="card border-0 rounded shadow-custom h-100">
                                                                    {/* image */}
                                                                    <img
                                                                        src={
                                                                            pgrs.image
                                                                        }
                                                                        className="w-100 rounded-top"
                                                                    />
                                                                    <div className="card-body">
                                                                        <div className="text-center">
                                                                            <br />

                                                                            <br />

                                                                            <br />
                                                                        </div>
                                                                      
                                                                    </div>
                                                                    <div className="card-footer">
                                                                            <span className="text-black-50 ml-2">
                                                                                {
                                                                                    pgrs.name
                                                                                }
                                                                            </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                <div className="col-md-12 mt-4 mb-5">
                                                    <Pagination
                                                        links={pengurus.links}
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
