//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component pagination
import Pagination from "../../../Shared/Pagination";

import Search from "../../../Shared/Search";

export default function VerifPengajuanDpwIndex() {
    const { verif, biodata } = usePage().props;

    // Debug data
    console.log("=== DEBUG DATA ===");
    console.log("Biodata:", biodata);
    console.log("Biodata role:", biodata?.role);
    console.log("Verif data:", verif.data);
    console.log("===================");

    const getStatusBadge = (status) => {
        switch (status) {
            case "setujui":
                return (
                    <span className="badge bg-success px-3 py-2">
                        <i className="fas fa-check-circle me-1"></i>
                        Disetujui
                    </span>
                );
            case "tolak":
            case "ditolak": // Menambahkan case untuk status 'ditolak'
                return (
                    <span className="badge bg-danger px-3 py-2">
                        <i className="fas fa-times me-1"></i>
                        Ditolak
                    </span>
                );
            case "revisi":
                return (
                    <span className="badge bg-warning text-dark px-3 py-2">
                        <i className="fas fa-edit me-1"></i>
                        Perlu Revisi
                    </span>
                );
            case "ditunda":
                return (
                    <span className="badge bg-secondary px-3 py-2">
                        <i className="fas fa-clock me-1"></i>
                        Ditunda
                    </span>
                );
            case "dikirim":
                return (
                    <span className="badge bg-info px-3 py-2">
                        <i className="fas fa-paper-plane me-1"></i>
                        Terkirim
                    </span>
                );
            case "selesai":
                return (
                    <span className="badge bg-success px-3 py-2">
                        <i className="fas fa-check-double me-1"></i>
                        Selesai
                    </span>
                );
            case "belum":
            default:
                return (
                    <span className="badge bg-primary px-3 py-2">
                        <i className="fas fa-hourglass-half me-1"></i>
                        Menunggu Verifikasi
                    </span>
                );
        }
    };

    const getStatusDescription = (status) => {
        switch (status) {
            case "setujui":
                return "Pengajuan telah disetujui";
            case "tolak":
            case "ditolak": // Menambahkan case untuk status 'ditolak'
                return "Pengajuan ditolak";
            case "revisi":
                return "Perlu perbaikan data";
            case "ditunda":
                return "Ditunda untuk perbaikan";
            case "dikirim":
                return "Disetujui dan dikirim ke tujuan";
            case "selesai":
                return "Mutasi telah selesai";
            case "belum":
            default:
                return "Menunggu proses verifikasi";
        }
    };

    const getTipePindahBadge = (tipePindah) => {
        switch (tipePindah) {
            case "dpw":
                return (
                    <span className="badge bg-primary px-3 py-2">
                        <i className="fas fa-map-marker-alt me-1"></i>
                        Mutasi DPW
                    </span>
                );
            case "dpc":
                return (
                    <span className="badge bg-info px-3 py-2">
                        <i className="fas fa-building me-1"></i>
                        Mutasi DPC
                    </span>
                );
            default:
                return (
                    <span className="badge bg-secondary px-3 py-2">
                        <i className="fas fa-question me-1"></i>
                        Tidak Diketahui
                    </span>
                );
        }
    };

    const getTipePindahDescription = (tipePindah) => {
        switch (tipePindah) {
            case "dpw":
                return "Mutasi antar Daerah Provinsi";
            case "dpc":
                return "Mutasi antar Daerah Kabupaten/Kota";
            default:
                return "Tipe mutasi tidak diketahui";
        }
    };

    // Fungsi untuk menentukan apakah tombol verifikasi harus ditampilkan - DIPERBAIKI
    const shouldShowVerifikasiButton = (vrf) => {
        console.log("shouldShowVerifikasiButton check:", {
            id: vrf.id,
            name: vrf.name,
            role: biodata?.role,
            tipe_pindah: vrf.tipe_pindah,
            province_id: vrf.province_id,
            biodata_province_id: biodata?.province_id
        });

        // Jika role undefined, coba ambil dari props lain atau default ke dpw
        const userRole = biodata?.role || "dpw"; // Default ke dpw jika undefined

        console.log("User role used:", userRole);

        // Jika admin adalah DPW, tampilkan untuk semua mutasi DPW
        if (userRole === "dpw") {
            const shouldShow = vrf.tipe_pindah === "dpw";
            console.log("DPW check - shouldShow:", shouldShow);
            return shouldShow;
        }
        // Jika admin adalah DPC, tampilkan untuk mutasi DPC di wilayahnya
        else if (userRole === "dpc") {
            const shouldShow = vrf.tipe_pindah === "dpc" && parseInt(vrf.province_id) === parseInt(biodata?.province_id);
            console.log("DPC check - shouldShow:", shouldShow);
            return shouldShow;
        }

        console.log("No role matched - returning false");
        return false;
    };

    const renderRuteMutasi = (vrf) => {
        if (vrf.tipe_pindah === "dpw") {
            return (
                <div className="text-center">
                    <div className="d-flex align-items-center justify-content-center mb-2">
                        <div className="text-start">
                            <small className="text-muted d-block">DPW Asal</small>
                            <div className="fw-bold text-danger">
                                <i className="fas fa-map-marker-alt me-1"></i>
                                {vrf.province?.name || 'N/A'}
                            </div>
                            <small className="text-muted">
                                <i className="fas fa-building me-1"></i>
                                {vrf.city?.name || 'N/A'}
                            </small>
                        </div>
                        <div className="mx-3">
                            <i className="fas fa-arrow-right text-primary fa-lg"></i>
                        </div>
                        <div className="text-end">
                            <small className="text-muted d-block">DPW Tujuan</small>
                            <div className="fw-bold text-success">
                                <i className="fas fa-map-marker-alt me-1"></i>
                                {vrf.tujuan?.name || 'N/A'}
                            </div>
                            <small className="text-muted">
                                <i className="fas fa-building me-1"></i>
                                {vrf.tujuan_dpc?.name || 'N/A'}
                            </small>
                        </div>
                    </div>
                    <small className="text-primary fw-semibold">
                        <i className="fas fa-sync-alt me-1"></i>
                        Mutasi Antar Provinsi
                    </small>
                </div>
            );
        } else {
            return (
                <div className="text-center">
                    <div className="d-flex align-items-center justify-content-center mb-2">
                        <div className="text-start">
                            <small className="text-muted d-block">DPC Asal</small>
                            <div className="fw-bold text-danger">
                                <i className="fas fa-building me-1"></i>
                                {vrf.city?.name || 'N/A'}
                            </div>
                            <small className="text-muted">
                                <i className="fas fa-map-marker-alt me-1"></i>
                                {vrf.province?.name || 'N/A'}
                            </small>
                        </div>
                        <div className="mx-3">
                            <i className="fas fa-arrow-right text-primary fa-lg"></i>
                        </div>
                        <div className="text-end">
                            <small className="text-muted d-block">DPC Tujuan</small>
                            <div className="fw-bold text-success">
                                <i className="fas fa-building me-1"></i>
                                {vrf.tujuan_dpc?.name || 'N/A'}
                            </div>
                            <small className="text-muted">
                                <i className="fas fa-map-marker-alt me-1"></i>
                                {vrf.tujuan?.name || 'N/A'}
                            </small>
                        </div>
                    </div>
                    <small className="text-info fw-semibold">
                        <i className="fas fa-exchange-alt me-1"></i>
                        Mutasi Antar Kabupaten/Kota
                    </small>
                </div>
            );
        }
    };

    const renderRuteMutasiMobile = (vrf) => {
        if (vrf.tipe_pindah === "dpw") {
            return (
                <div className="mb-3 p-3 bg-light rounded">
                    <h6 className="fw-bold mb-3 text-center">
                        <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                        Mutasi DPW (Antar Provinsi)
                    </h6>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="text-center">
                            <div className="fw-bold text-danger small">DPW ASAL</div>
                            <div className="fw-semibold">{vrf.province?.name || 'N/A'}</div>
                            <small className="text-muted">{vrf.city?.name || 'N/A'}</small>
                        </div>
                        <div className="mx-2">
                            <i className="fas fa-arrow-right text-primary"></i>
                        </div>
                        <div className="text-center">
                            <div className="fw-bold text-success small">DPW TUJUAN</div>
                            <div className="fw-semibold">{vrf.tujuan?.name || 'N/A'}</div>
                            <small className="text-muted">{vrf.tujuan_dpc?.name || 'N/A'}</small>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="mb-3 p-3 bg-light rounded">
                    <h6 className="fw-bold mb-3 text-center">
                        <i className="fas fa-building me-2 text-info"></i>
                        Mutasi DPC (Antar Kabupaten/Kota)
                    </h6>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="text-center">
                            <div className="fw-bold text-danger small">DPC ASAL</div>
                            <div className="fw-semibold">{vrf.city?.name || 'N/A'}</div>
                            <small className="text-muted">DPW: {vrf.province?.name || 'N/A'}</small>
                        </div>
                        <div className="mx-2">
                            <i className="fas fa-arrow-right text-primary"></i>
                        </div>
                        <div className="text-center">
                            <div className="fw-bold text-success small">DPC TUJUAN</div>
                            <div className="fw-semibold">{vrf.tujuan_dpc?.name || 'N/A'}</div>
                            <small className="text-muted">DPW: {vrf.tujuan?.name || 'N/A'}</small>
                        </div>
                    </div>
                </div>
            );
        }
    };

    // Fungsi untuk mendapatkan pesan ketika tombol tidak ditampilkan
    const getDisabledMessage = (vrf) => {
        const userRole = biodata?.role || "dpw";

        if (userRole === "dpw" && vrf.tipe_pindah === "dpc") {
            return "Verifikasi oleh DPC";
        } else if (userRole === "dpc" && vrf.tipe_pindah === "dpw") {
            return "Verifikasi oleh DPW";
        } else if (userRole === "dpc" && vrf.tipe_pindah === "dpc" && parseInt(vrf.province_id) !== parseInt(biodata?.province_id)) {
            return "Bukan wilayah Anda";
        }
        return "Tidak dapat diverifikasi";
    };

    // Dapatkan role user dengan fallback
    const userRole = biodata?.role || "dpw";

    return (
        <>
            <Head>
                <title>Verifikasi Pengajuan Mutasi - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="container-fluid py-4">
                    {/* Header dengan info role */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-body py-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-8">
                                            <h4 className="mb-1 text-primary fw-bold">
                                                <i className="fas fa-exchange-alt me-2"></i>
                                                Verifikasi Pengajuan Mutasi
                                                {userRole === "dpw" && " - DPW"}
                                                {userRole === "dpc" && " - DPC"}
                                            </h4>
                                            <p className="text-muted mb-0">
                                                {userRole === "dpw" && "Kelola verifikasi mutasi antar provinsi (DPW)"}
                                                {userRole === "dpc" && "Kelola verifikasi mutasi antar kabupaten/kota (DPC)"}
                                            </p>
                                            <small className="text-info">
                                                <i className="fas fa-info-circle me-1"></i>
                                                Role: {userRole} | Province ID: {biodata?.province_id}
                                            </small>
                                        </div>
                                        <div className="col-md-4 text-md-end">
                                            <div className="bg-success rounded p-3 d-inline-block">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-chart-bar text-white me-2"></i>
                                                    <div>
                                                        <small className="text-white d-block">Total Pengajuan</small>
                                                        <span className="fw-bold text-white h5 mb-0">{verif.total}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <Search URL={"/account/verifPengajuanDpw"} />
                        </div>
                    </div>

                    {/* Cards View for Mobile & Table for Desktop */}
                    <div className="row">
                        <div className="col-12">
                            {/* Desktop Table */}
                            <div className="card shadow-sm border-0 d-none d-lg-block">
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-hover align-middle mb-0">
                                            <thead className="bg-primary text-white">
                                                <tr>
                                                    <th className="ps-4 py-3 text-center" style={{ width: "5%" }}>
                                                        No.
                                                    </th>
                                                    <th className="py-3" style={{ width: "18%" }}>
                                                        <i className="fas fa-user me-2"></i>
                                                        Anggota
                                                    </th>
                                                    <th className="py-3 text-center" style={{ width: "15%" }}>
                                                        <i className="fas fa-tag me-2"></i>
                                                        Tipe Mutasi
                                                    </th>
                                                    <th className="py-3 text-center" style={{ width: "25%" }}>
                                                        <i className="fas fa-route me-2"></i>
                                                        Rute Mutasi
                                                    </th>
                                                    <th className="py-3 text-center" style={{ width: "15%" }}>
                                                        <i className="fas fa-info-circle me-2"></i>
                                                        Status
                                                    </th>
                                                    <th className="py-3 text-center" style={{ width: "12%" }}>
                                                        <i className="fas fa-calendar me-2"></i>
                                                        Tanggal
                                                    </th>
                                                    <th className="pe-4 py-3 text-center" style={{ width: "10%" }}>
                                                        <i className="fas fa-cogs me-2"></i>
                                                        Aksi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {verif.data.length > 0 ? (
                                                    verif.data.map((vrf, index) => {
                                                        const showButton = shouldShowVerifikasiButton(vrf);

                                                        return (
                                                            <tr key={vrf.id} className="border-bottom">
                                                                <td className="ps-4 text-center fw-bold text-primary">
                                                                    {++index +
                                                                        (verif.current_page - 1) *
                                                                        verif.per_page}
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                            style={{ width: '45px', height: '45px' }}>
                                                                            <i className="fas fa-user text-white"></i>
                                                                        </div>
                                                                        <div>
                                                                            <h6 className="mb-1 fw-semibold">{vrf.name}</h6>
                                                                            <small className="text-muted">
                                                                                <i className="fas fa-id-card me-1"></i>
                                                                                {vrf.kta}
                                                                            </small>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="d-flex flex-column align-items-center">
                                                                        {getTipePindahBadge(vrf.tipe_pindah)}
                                                                        <small className="text-muted mt-1">
                                                                            {getTipePindahDescription(vrf.tipe_pindah)}
                                                                        </small>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {renderRuteMutasi(vrf)}
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="d-flex flex-column align-items-center">
                                                                        {getStatusBadge(vrf.status)}
                                                                        <small className="text-muted mt-1">
                                                                            {getStatusDescription(vrf.status)}
                                                                        </small>
                                                                        {vrf.keterangan_revisi && (
                                                                            <small className="text-warning mt-1">
                                                                                <i className="fas fa-exclamation-triangle me-1"></i>
                                                                                {vrf.keterangan_revisi}
                                                                            </small>
                                                                        )}
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="fw-medium">
                                                                        {new Date(vrf.tgl_mutasi).toLocaleDateString('id-ID', {
                                                                            day: '2-digit',
                                                                            month: 'short',
                                                                            year: 'numeric'
                                                                        })}
                                                                    </div>
                                                                    <small className="text-muted">
                                                                        Diajukan
                                                                    </small>
                                                                </td>
                                                                <td className="pe-4 text-center">
                                                                    {showButton ? (
                                                                        <Link
                                                                            href={`/account/verifPengajuanDpw/${vrf.id}/edit`}
                                                                            className="btn btn-primary btn-sm rounded-pill px-3 py-2"
                                                                            title="Proses Verifikasi"
                                                                        >
                                                                            <i className="fas fa-edit me-1"></i>
                                                                            Proses
                                                                        </Link>
                                                                    ) : (
                                                                        <span className="text-muted small">
                                                                            {getDisabledMessage(vrf)}
                                                                        </span>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                ) : (
                                                    <tr>
                                                        <td colSpan="7" className="text-center py-5">
                                                            <div className="py-4">
                                                                <i className="fas fa-inbox fa-3x text-muted mb-3"></i>
                                                                <h5 className="text-muted">Tidak ada data pengajuan</h5>
                                                                <p className="text-muted mb-0">Belum ada pengajuan mutasi yang perlu diverifikasi</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Cards */}
                            <div className="d-block d-lg-none">
                                {verif.data.length > 0 ? (
                                    verif.data.map((vrf, index) => {
                                        const showButton = shouldShowVerifikasiButton(vrf);
                                        return (
                                            <div key={vrf.id} className="card shadow-sm border-0 mb-3">
                                                <div className="card-body">
                                                    {/* Header Card */}
                                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                                        <div className="d-flex align-items-center">
                                                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                style={{ width: '40px', height: '40px' }}>
                                                                <i className="fas fa-user text-white"></i>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-0 fw-bold">{vrf.name}</h6>
                                                                <small className="text-muted">KTA: {vrf.kta}</small>
                                                            </div>
                                                        </div>
                                                        <span className="badge bg-primary">
                                                            #{++index + (verif.current_page - 1) * verif.per_page}
                                                        </span>
                                                    </div>

                                                    {/* Tipe Mutasi */}
                                                    <div className="mb-3 text-center">
                                                        {getTipePindahBadge(vrf.tipe_pindah)}
                                                        <p className="text-muted small mt-1 mb-0">
                                                            {getTipePindahDescription(vrf.tipe_pindah)}
                                                        </p>
                                                    </div>

                                                    {/* Rute Mutasi */}
                                                    {renderRuteMutasiMobile(vrf)}

                                                    {/* Status Info */}
                                                    <div className="mb-3">
                                                        <div className="text-center mb-2">
                                                            {getStatusBadge(vrf.status)}
                                                        </div>
                                                        <p className="text-center text-muted small mb-2">
                                                            {getStatusDescription(vrf.status)}
                                                        </p>
                                                        {vrf.keterangan_revisi && (
                                                            <div className="alert alert-warning py-2 small mb-0">
                                                                <i className="fas fa-exclamation-triangle me-1"></i>
                                                                {vrf.keterangan_revisi}
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Footer Card */}
                                                    <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                                                        <small className="text-muted">
                                                            <i className="fas fa-calendar me-1"></i>
                                                            {new Date(vrf.tgl_mutasi).toLocaleDateString('id-ID')}
                                                        </small>
                                                        {showButton ? (
                                                            <Link
                                                                href={`/account/verifPengajuanDpw/${vrf.id}/edit`}
                                                                className="btn btn-primary btn-sm rounded-pill px-3"
                                                            >
                                                                <i className="fas fa-edit me-1"></i>
                                                                Proses
                                                            </Link>
                                                        ) : (
                                                            <span className="text-muted small text-end">
                                                                {getDisabledMessage(vrf)}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="card shadow-sm border-0 text-center py-5">
                                        <div className="card-body">
                                            <i className="fas fa-inbox fa-3x text-muted mb-3"></i>
                                            <h5 className="text-muted">Tidak ada data pengajuan</h5>
                                            <p className="text-muted">Belum ada pengajuan mutasi yang perlu diverifikasi</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    {verif.data.length > 0 && (
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
                    )}
                </div>
            </LayoutAccount>
        </>
    );
}