//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

export default function EjurnalIndex() {
    const { transactions, statusAnggota } = usePage().props;

    const status = transactions.map((ts) => ts.status);
    const [name] = useState(statusAnggota.status_anggota);

    const filter = status
        .toString()
        .replace("[", "")
        .replace("]", "")
        .replace('"', "")
        .replace('"', "");

    return (
        <>
            <Head>
                <title>User E-Jurnal - IKATWI</title>
            </Head>
            <LayoutAccount>
                {/* <div className="col-md-12 mt-5">
                    {filter === "PAID" || name === "Anggota Kehormatan" ? (
                        <></>
                    ) : (
                        <div className="row mt-5">
                            <div className="col-12 col-md-12 col-lg-12 mb-4">
                                <div className="alert text-center alert-danger border-0 shadow-sm mb-0">
                                    <h5>Anda belum membayar tagihan IURAN.</h5>
                                </div>
                            </div>
                        </div>
                    )}
                </div> */}
                <iframe
                    title="Contoh Iframe"
                    width="1030"
                    height="600"
                    src="https://www.asha.org/"
                    // frameBorder="0"
                    allowFullScreen
                />
            </LayoutAccount>
        </>
    );
}
