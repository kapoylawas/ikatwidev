//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component pagination
import Pagination from "../../../Shared/Pagination";

//import component delete
import Delete from "../../../Shared/Delete";

export default function ArsipPrintPengajuanIndex() {
    const { verif } = usePage().props;

    return (
        <>
            <Head>
                <title>Arsip Pengajuan Mutasi - IKATWI</title>
            </Head>
            <LayoutAccount>
                <>
                    <div className="row mt-2 mb-4">
                        <div className="col-12">
                            <div className="card border-0 rounded shadow-sm border-top-admin">
                                <div className="card-header">
                                    <span className="font-weight-bold">
                                        <i className="fa fa-folder"></i>{" "}
                                        Arsip Berkas Pindah
                                    </span>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-hovered">
                                            <thead>
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        style={{
                                                            width: "5%",
                                                        }}
                                                    >
                                                        No.
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{
                                                            width: "15%",
                                                        }}
                                                    >
                                                        Nama
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{
                                                            width: "15%",
                                                        }}
                                                    >
                                                        DPW
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{
                                                            width: "15%",
                                                        }}
                                                    >
                                                        DPC
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{
                                                            width: "15%",
                                                        }}
                                                    >
                                                        Tujuan DPW
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{
                                                            width: "15%",
                                                        }}
                                                    >
                                                        Tujuan DPC
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{
                                                            width: "15%",
                                                        }}
                                                    >
                                                        Status
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{
                                                            width: "15%",
                                                        }}
                                                    >
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {verif.data.map(
                                                    (vrf, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                {++index +
                                                                    (verif.current_page -
                                                                        1) *
                                                                    verif.per_page}
                                                            </td>
                                                            <td>
                                                                {vrf.name}
                                                            </td>
                                                            <td>
                                                                {vrf.province.name}
                                                            </td>
                                                            <td>
                                                                {vrf.city.name}
                                                            </td>
                                                            <td>
                                                                {vrf.tujuan.name}
                                                            </td>
                                                            <td>
                                                                {vrf.tujuan_dpc.name}
                                                            </td>
                                                            <td>
                                                                {vrf.status ==
                                                                    "setujui" && (
                                                                        <button className="btn btn-sm btn-success">
                                                                            <i className="fa fa-check-circle"></i>{" "}
                                                                            Sudah
                                                                            disetujui
                                                                        </button>
                                                                    )}
                                                                {vrf.status ==
                                                                    "belum" && (
                                                                        <button className="btn btn-sm btn-danger">
                                                                            <i className="fa fa-times"></i>{" "}
                                                                            Belum
                                                                            disetujui
                                                                        </button>
                                                                    )}
                                                                {vrf.status ==
                                                                    "tolak" && (
                                                                        <button className="btn btn-sm btn-danger">
                                                                            <i className="fa fa-times"></i>{" "}
                                                                            Di tolak
                                                                        </button>
                                                                    )}
                                                                {vrf.status ==
                                                                    "revisi" && (
                                                                        <button className="btn btn-sm btn-info">
                                                                            <i className="fa fa-times"></i>{" "}
                                                                            Di revisi
                                                                        </button>
                                                                    )}
                                                            </td>
                                                            <td className="text-center">
                                                                <Link
                                                                    href={`/account/arsips/${vrf.id}/edit`}
                                                                    className="btn btn-primary btn-sm me-2"
                                                                >
                                                                    lihat
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    <Pagination
                                        links={verif.links}
                                        align={"end"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </LayoutAccount>
        </>
    );
}
