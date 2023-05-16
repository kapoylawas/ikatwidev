//import react
import React, {useState} from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

export default function DocumentsIndex() {
    //destruct props "users"
    const { transactions, biodata, statusAnggota } = usePage().props;

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
                <title>User Document Kelengkapan - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        {/* {filter === "PAID" || name === "Anggota Kehormatan" ? ( */}
                            <div className="card border-0 rounded shadow-sm border-top-admin">
                                <div className="card-header">
                                    <span className="font-weight-bold">
                                        <i className="fa fa-users"></i> Berkas
                                        Document
                                    </span>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <tr>
                                            <td>FULL NAME</td>
                                            <td>:</td>
                                            <td className="p-2">
                                                {biodata.name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>:</td>
                                            <td className="p-2">
                                                {biodata.email}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ijazah</td>
                                            <td>:</td>
                                            <td>
                                                <Link
                                                    href={`/account/documents/showIjazah/${biodata.id}`}
                                                    className="btn"
                                                >
                                                    <i className="fa fa-plus-circle">
                                                        {" "}
                                                        Lihat
                                                    </i>{" "}
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SIP</td>
                                            <td>:</td>
                                            <td>
                                                <Link
                                                    href={`/account/documents/showsip/${biodata.id}`}
                                                    className="btn"
                                                >
                                                    <i className="fa fa-plus-circle">
                                                        {" "}
                                                        Lihat
                                                    </i>{" "}
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>STR</td>
                                            <td>:</td>
                                            <td>
                                                <Link
                                                    href={`/account/documents/showstr/${biodata.id}`}
                                                    className="btn"
                                                >
                                                    <i className="fa fa-plus-circle">
                                                        {" "}
                                                        Lihat
                                                    </i>{" "}
                                                </Link>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        {/* ) : (
                            <div className="row mt-5">
                                <div className="col-12 col-md-12 col-lg-12 mb-4">
                                    <div className="alert text-center alert-danger border-0 shadow-sm mb-0">
                                        <h5>
                                            Anda belum membayar tagihan IURAN.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        )} */}
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
