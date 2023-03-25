//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component pagination
import Pagination from "../../../Shared/Pagination";

export default function DocumentsIndex() {
    //destruct props "users"
    const { transactions, biodata } = usePage().props;

    console.log(biodata);

    const status = transactions.map((ts) => ts.status);

    const filter = status
        .toString()
        .replace("[", "")
        .replace("]", "")
        .replace('"', "")
        .replace('"', "");

    return (
        <>
            <Head>
                <title>User - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        {filter === "PAID" ? (
                            <div className="card border-0 rounded shadow-sm border-top-admin">
                                <div className="card-header">
                                    <span className="font-weight-bold">
                                        <i className="fa fa-users"></i> Berkas
                                        Document
                                    </span>
                                    <Link
                                        href={`/account/documents/${biodata.id}/edit`}
                                        className="btn btn-primary me-5"
                                        style={{ marginLeft: "1%" }}
                                    >
                                        <i className="fa fa-pencil-alt"></i>
                                    </Link>
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
                                            <td>DPW</td>
                                            <td>:</td>
                                            <td className="p-2">
                                                {biodata.province.name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>DPC</td>
                                            <td>:</td>
                                            <td className="p-2">
                                                {biodata.city.name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tanggal expired STR</td>
                                            <td>:</td>
                                            <td className="p-2">
                                                {biodata.date_exprd}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ijazah</td>
                                            <td>:</td>
                                            <td>
                                                <a
                                                    href={biodata.ijazah}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn"
                                                >
                                                    <i className="fa fa-link">
                                                        {" "}
                                                        Lihat
                                                    </i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SIP</td>
                                            <td>:</td>
                                            <td>
                                                <a
                                                    href={biodata.sip}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn"
                                                >
                                                    <i className="fa fa-link">
                                                        {" "}
                                                        Lihat
                                                    </i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>STR</td>
                                            <td>:</td>
                                            <td>
                                                <a
                                                    href={biodata.str}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn"
                                                >
                                                    <i className="fa fa-link">
                                                        {" "}
                                                        Lihat
                                                    </i>
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                {/* <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-hovered">
                                            <thead>
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        style={{ width: "10%" }}
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{ width: "10%" }}
                                                    >
                                                        Ijazah
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{ width: "10%" }}
                                                    >
                                                        SIP
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{ width: "10%" }}
                                                    >
                                                        STR
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{ width: "10%" }}
                                                    >
                                                        Tanggal Expired STR
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{ width: "4%" }}
                                                    >
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.data.map(
                                                    (user, index) => (
                                                        <tr key={index}>
                                                            <td>{user.name}</td>
                                                            <td>
                                                                <a
                                                                    href={
                                                                        user.ijazah
                                                                    }
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="btn btn-primary btn-sm me-2"
                                                                >
                                                                    <i className="fa fa-link">
                                                                        {" "}
                                                                        Lihat
                                                                    </i>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a
                                                                    target="_blank"
                                                                    href={
                                                                        user.sip
                                                                    }
                                                                    className="btn btn-primary btn-sm me-2"
                                                                >
                                                                    <i className="fa fa-link">
                                                                        {" "}
                                                                        Lihat
                                                                    </i>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a
                                                                    target="_blank"
                                                                    href={
                                                                        user.str
                                                                    }
                                                                    className="btn btn-primary btn-sm me-2"
                                                                >
                                                                    <i className="fa fa-link">
                                                                        {" "}
                                                                        Lihat
                                                                    </i>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                {
                                                                    user.date_exprd
                                                                }
                                                            </td>
                                                            <td className="text-center">
                                                                <Link
                                                                    href={`/account/documents/${user.id}/edit`}
                                                                    className="btn btn-primary btn-sm me-2"
                                                                >
                                                                    <i className="fa fa-upload"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    <Pagination
                                        links={users.links}
                                        align={"end"}
                                    />
                                </div> */}
                            </div>
                        ) : (
                            <div className="row mt-5">
                                <div className="col-12 col-md-12 col-lg-12 mb-4">
                                    <div className="alert text-center alert-danger border-0 shadow-sm mb-0">
                                        <h5>
                                            Anda belum membayar tagihan IURAN.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
