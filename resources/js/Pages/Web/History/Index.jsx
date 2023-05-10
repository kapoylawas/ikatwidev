//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

export default function HistoryIndex() {
    return (
        <>
            <Head>
                <title>IKATWI - Ikatan Terapis Wicara</title>
            </Head>
            <LayoutWeb>
                <div
                    className="container"
                    style={{ marginTop: "105px", marginBottom: "50px" }}
                >
                    <div className="fade-in">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="font-weight-bold text-center text-dark">
                                        Sejarah
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutWeb>
        </>
    );
}
