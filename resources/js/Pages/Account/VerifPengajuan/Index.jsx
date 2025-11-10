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

export default function VerifPengajuanIndex() {
    const { verif } = usePage().props;

    const getStatusBadge = (status) => {
        switch (status) {
            case "setujui":
                return (
                    <span className="badge bg-success">
                        <i className="fa fa-check-circle me-1"></i>
                        Disetujui
                    </span>
                );
            case "tolak":
                return (
                    <span className="badge bg-danger">
                        <i className="fa fa-times me-1"></i>
                        Ditolak
                    </span>
                );
            case "revisi":
                return (
                    <span className="badge bg-warning text-dark">
                        <i className="fa fa-edit me-1"></i>
                        Revisi
                    </span>
                );
            case "belum":
            default:
                return (
                    <span className="badge bg-secondary">
                        <i className="fa fa-clock me-1"></i>
                        Menunggu
                    </span>
                );
        }
    };

    return (
        <>
            <Head>
                <title>Verifikasi Pengajuan Mutasi - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="container-fluid py-4">
                    {/* Header */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-body py-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h5 className="mb-0 text-primary">
                                                <i className="fa fa-folder-open me-2"></i>
                                                Verifikasi Pengajuan Pindah
                                            </h5>
                                            <p className="text-muted mb-0">
                                                Kelola pengajuan mutasi anggota
                                            </p>
                                        </div>
                                        <div className="col-auto">
                                            <div className="bg-light rounded p-2">
                                                <small className="text-muted">
                                                    Total: {verif.total} pengajuan
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-hover align-middle mb-0">
                                            <thead className="bg-light">
                                                <tr>
                                                    <th className="ps-4 py-3 text-center" style={{ width: "5%" }}>
                                                        No.
                                                    </th>
                                                    <th className="py-3" style={{ width: "15%" }}>
                                                        Nama Anggota
                                                    </th>
                                                    <th className="py-3" style={{ width: "12%" }}>
                                                        Asal DPW
                                                    </th>
                                                    <th className="py-3" style={{ width: "12%" }}>
                                                        Asal DPC
                                                    </th>
                                                    <th className="py-3" style={{ width: "12%" }}>
                                                        Tujuan DPW
                                                    </th>
                                                    <th className="py-3" style={{ width: "12%" }}>
                                                        Tujuan DPC
                                                    </th>
                                                    <th className="py-3 text-center" style={{ width: "12%" }}>
                                                        Status
                                                    </th>
                                                    <th className="pe-4 py-3 text-center" style={{ width: "10%" }}>
                                                        Aksi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {verif.data.length > 0 ? (
                                                    verif.data.map((vrf, index) => (
                                                        <tr key={vrf.id} className="border-bottom">
                                                            <td className="ps-4 text-center fw-semibold text-muted">
                                                                {++index +
                                                                    (verif.current_page - 1) *
                                                                    verif.per_page}
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                                        <i className="fa fa-user text-white"></i>
                                                                    </div>
                                                                    <div>
                                                                        <h6 className="mb-0 fw-semibold">{vrf.name}</h6>
                                                                        <small className="text-muted">ID: {vrf.id}</small>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="fw-medium">{vrf.province.name}</span>
                                                            </td>
                                                            <td>
                                                                <span className="fw-medium">{vrf.city.name}</span>
                                                            </td>
                                                            <td>
                                                                <span className="fw-medium text-success">{vrf.tujuan.name}</span>
                                                            </td>
                                                            <td>
                                                                <span className="fw-medium text-success">{vrf.tujuan_dpc.name}</span>
                                                            </td>
                                                            <td className="text-center">
                                                                {getStatusBadge(vrf.status)}
                                                            </td>
                                                            <td className="pe-4 text-center">
                                                                <Link
                                                                    href={`/account/verifPengajuan/${vrf.id}/edit`}
                                                                    className="btn btn-sm btn-outline-primary rounded-pill px-3"
                                                                    title="Edit Verifikasi"
                                                                >
                                                                    <i className="fa fa-edit me-1"></i>
                                                                    Verifikasi
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="8" className="text-center py-5">
                                                            <div className="py-4">
                                                                <i className="fa fa-inbox fa-3x text-muted mb-3"></i>
                                                                <p className="text-muted mb-0">Tidak ada data pengajuan</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <Pagination
                                    links={verif.links}
                                    align={"center"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}