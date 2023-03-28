//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component delete
import Delete from "../../../Shared/Delete";


export default function DocumentShowstr() {
    const { users } = usePage().props;  
    const currentDate = new Date();

    return (
        <>
            <Head>
                <title>Detail Document - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div class="row mt-3">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-3 col-12 mb-2">
                                <Link
                                    href={`/account/documents/createstr/${users.id}`}
                                    class="btn btn-md btn-admin border-0 shadow w-100"
                                    type="button"
                                >
                                    <i class="fa fa-plus-circle me-2"></i>
                                    Tambah
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-folder"></i> STR File
                                </span>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped table-hovered">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    style={{ width: "3%" }}
                                                >
                                                    No.
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "5%" }}
                                                >
                                                    No STR
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "7%" }}
                                                >
                                                    Tanggal STR
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "8%" }}
                                                >
                                                    Tanggal Awal
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "8%" }}
                                                >
                                                    Tanggal Akhir
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "3%" }}
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "30%" }}
                                                >
                                                    File
                                                </th>
                                               
                                                <th
                                                    scope="col"
                                                    style={{ width: "5%" }}
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.surat_strs.data.map(
                                                (strs, index) => (
                                                    <tr key={index}>
                                                        <td className="text-center">
                                                            {++index +
                                                                (users
                                                                    .surat_strs
                                                                    .current_page -
                                                                    1) *
                                                                    users
                                                                        .surat_strs
                                                                        .per_page}
                                                        </td>
                                                        <td className="text-center">
                                                            {strs.no_str}
                                                        </td>
                                                        <td className="text-center">
                                                            {strs.date_str}
                                                        </td>
                                                        <td className="text-center">
                                                            {strs.date_start}
                                                        </td>
                                                        <td className="text-center">
                                                            {strs.date_end}
                                                        </td>
                                                        <td>
                                                            {new Date(
                                                                strs.date_end
                                                            ) >= currentDate
                                                                ? "Aktif"
                                                                : "Tidak Aktif"}
                                                        </td>
                                                        <td className="text-center">
                                                            <iframe
                                                                src={strs.image}
                                                                style={{
                                                                    width: "100%",
                                                                    height: "200px",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></iframe>
                                                        </td>
                                                        <td className="text-center">
                                                             <Delete URL={"/account/documents/hapus_str"} id={strs.id} />
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
