//import react
import React from "react";

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
                <title>Detail Document SIP - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-3">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 col-12 mb-2">
                                <Link
                                    href={`/account/documents/createsip/${users.id}`}
                                    className="btn btn-md btn-admin border-0 shadow w-100"
                                    type="button"
                                >
                                    <i className="fa fa-plus-circle me-2"></i>
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
                                                    style={{ width: "5%" }}
                                                >
                                                    No SIP
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "7%" }}
                                                >
                                                    Tanggal SIP
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
                                            {users.surat_sip.data.map(
                                                (sip, index) => (
                                                    <tr key={index}>
                                                        <td className="text-center">
                                                            {++index +
                                                                (users
                                                                    .surat_sip
                                                                    .current_page -
                                                                    1) *
                                                                    users
                                                                        .surat_sip
                                                                        .per_page}
                                                        </td>
                                                        <td className="text-center">
                                                            {sip.no_sip}
                                                        </td>
                                                        <td className="text-center">
                                                            {sip.date_sip}
                                                        </td>
                                                        <td className="text-center">
                                                            {sip.date_start}
                                                        </td>
                                                        <td className="text-center">
                                                            {sip.date_end}
                                                        </td>
                                                        <td>
                                                            {new Date(
                                                                sip.date_end
                                                            ) >= currentDate
                                                                ? "Aktif"
                                                                : "Tidak Aktif"}
                                                        </td>
                                                        <td className="text-center">
                                                            <iframe
                                                                src={sip.image}
                                                                style={{
                                                                    width: "100%",
                                                                    height: "200px",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></iframe>
                                                        </td>
                                                        <td className="text-center">
                                                             <Delete URL={"/account/documents/hapus_sip"} id={sip.id} />
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
