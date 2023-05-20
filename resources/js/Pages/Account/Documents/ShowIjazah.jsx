//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component delete
import Delete from "../../../Shared/Delete";

export default function DocumentShowIjazah() {
    const { users } = usePage().props;

    return (
        <>
            <Head>
                <title>Detail Document Ijazah - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-3">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 col-12 mb-2">
                                <Link
                                    href={`/account/documents/createIjazah/${users.id}`}
                                    className="btn btn-md btn-admin border-0 shadow w-100"
                                    type="button"
                                >
                                    <i className="fa fa-plus-circle me-2"></i>
                                    Tambah
                                </Link>
                            </div>
                            <div className="col-md-3 col-12 mb-2">
                                <Link
                                    href={`/account/documents`}
                                    className="btn btn-md btn-admin border-0 shadow w-100"
                                    type="button"
                                >
                                    <i className="fa fa-arrow-left me-2"></i>
                                    KEMBALI
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
                                    <i className="fa fa-folder"></i> SIP File
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
                                                    style={{ width: "9%" }}
                                                >
                                                    Ijzah Terakhir
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "7%" }}
                                                >
                                                    Universitas
                                                </th>
                                               
                                                <th
                                                    scope="col"
                                                    style={{ width: "6%" }}
                                                >
                                                    Jurusan
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "3%" }}
                                                >
                                                    Akredetasi
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "8%" }}
                                                >
                                                    Tahun lulus
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "10%" }}
                                                >
                                                    No ijazah
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "8%" }}
                                                >
                                                    Tanggal Ijazah
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "5%" }}
                                                >
                                                    IPK
                                                </th>
                                               
                                                <th
                                                    scope="col"
                                                    style={{ width: "6%" }}
                                                >
                                                    Transkip
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "5%" }}
                                                >
                                                    Ijazah
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
                                            {users.dokumen_ijazah.data.map(
                                                (ijazah, index) => (
                                                    <tr key={index}>
                                                        <td className="text-center">
                                                            {++index +
                                                                (users
                                                                    .dokumen_ijazah
                                                                    .current_page -
                                                                    1) *
                                                                    users
                                                                        .dokumen_ijazah
                                                                        .per_page}
                                                        </td>
                                                        <td className="text-center">
                                                            {
                                                                ijazah.ijazah_akhir
                                                            }
                                                        </td>
                                                        <td className="text-center">
                                                            {
                                                                ijazah.name_universitas
                                                            }
                                                        </td>
                                                        
                                                        <td className="text-center">
                                                            {ijazah.jurusan}
                                                        </td>
                                                        <td>
                                                            {ijazah.akredetasi}
                                                        </td>
                                                        <td className="text-center">
                                                            {ijazah.tahun_lulus}
                                                        </td>
                                                        <td className="text-center">
                                                            {ijazah.no_ijazah}
                                                        </td>
                                                        <td className="text-center">
                                                            {ijazah.date_ijazah}
                                                        </td>
                                                        <td className="text-center">
                                                            {ijazah.ipk}
                                                        </td>
                                                        <td className="text-center">
                                                            <a
                                                                className="btn btn-admin"
                                                                target="_blank"
                                                                href={
                                                                    ijazah.transkip
                                                                }
                                                            >
                                                                <i className="fa fa-pdf">
                                                                    {" "}
                                                                    Lihat
                                                                </i>{" "}
                                                            </a>
                                                        </td>
                                                        <td className="text-center">
                                                            <a
                                                                className="btn btn-admin"
                                                                target="_blank"
                                                                href={
                                                                    ijazah.ijazah
                                                                }
                                                            >
                                                                <i className="fa fa-pdf">
                                                                    {" "}
                                                                    Lihat
                                                                </i>{" "}
                                                            </a>
                                                        </td>
                                                        <td className="text-center">
                                                            <Delete
                                                                URL={
                                                                    "/account/documents/hapus_ijazah"
                                                                }
                                                                id={ijazah.id}
                                                            />
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
