//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component pagination
import Pagination from "../../../Shared/Pagination";

import Search from "../../../Shared/Search";

//import component delete
import Delete from "../../../Shared/Delete";

export default function VerifPengajuanIndex() {
    const { verif } = usePage().props;
    console.log(verif);

    // State untuk modal preview dokumen
    const [showDocumentModal, setShowDocumentModal] = useState(false);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [selectedDocumentType, setSelectedDocumentType] = useState("");

    // Fungsi untuk membuka modal preview dokumen
    const openDocumentModal = (document) => {
        setSelectedDocument(document);
        setShowDocumentModal(true);
    };

    // Fungsi untuk menutup modal preview dokumen
    const closeDocumentModal = () => {
        setShowDocumentModal(false);
        setSelectedDocument(null);
    };

    // Fungsi untuk render informasi dokumen (desktop)
    const renderDocumentInfo = (vrf) => {
        if (!vrf.document) {
            return (
                <div className="text-center">
                    <div className="alert alert-warning py-1 mb-0">
                        <i className="fas fa-exclamation-triangle me-1"></i>
                        Dokumen tidak tersedia
                    </div>
                </div>
            );
        }

        const fileName = vrf.document.split("/").pop();
        const fileExtension = fileName.split(".").pop().toUpperCase();

        return (
            <div className="text-center">
                <div
                    className="card border-light shadow-sm hover-shadow"
                    style={{ cursor: "pointer" }}
                    onClick={() => openDocumentModal(vrf.document)}
                >
                    <div className="card-body py-2">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="bg-light rounded-circle p-2 me-2">
                                <i className="fas fa-file-pdf text-danger"></i>
                            </div>
                            <div className="text-start flex-grow-1">
                                <small className="text-muted d-block">
                                    Dokumen Mutasi
                                </small>
                                <div
                                    className="fw-semibold text-truncate"
                                    style={{ maxWidth: "150px" }}
                                >
                                    {fileName}
                                </div>
                            </div>
                            <div>
                                <small className="badge bg-danger text-white">
                                    {fileExtension}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <small className="text-muted mt-1 d-block">
                    <i className="fas fa-eye me-1"></i>
                    Klik untuk melihat dokumen
                </small>
                {vrf.checklist_status && (
                    <div className="mt-2">
                        <small className="badge bg-info text-white">
                            <i className="fas fa-clipboard-check me-1"></i>
                            Ceklist Lengkap
                        </small>
                    </div>
                )}
            </div>
        );
    };

    // Fungsi untuk render informasi dokumen (mobile)
    const renderDocumentInfoMobile = (vrf) => {
        if (!vrf.document) {
            return (
                <div className="alert alert-warning py-2 mb-3">
                    <i className="fas fa-exclamation-triangle me-1"></i>
                    Dokumen tidak tersedia
                </div>
            );
        }

        const fileName = vrf.document.split("/").pop();
        const fileExtension = fileName.split(".").pop().toUpperCase();

        return (
            <div className="mb-3">
                <div
                    className="card border-light shadow-sm hover-shadow"
                    style={{ cursor: "pointer" }}
                    onClick={() => openDocumentModal(vrf.document)}
                >
                    <div className="card-body py-2">
                        <div className="d-flex align-items-center">
                            <div className="bg-light rounded-circle p-2 me-3">
                                <i className="fas fa-file-pdf text-danger fa-lg"></i>
                            </div>
                            <div className="flex-grow-1">
                                <small className="text-muted d-block">
                                    Dokumen Mutasi
                                </small>
                                <div className="fw-semibold text-truncate">
                                    {fileName}
                                </div>
                            </div>
                            <div>
                                <small className="badge bg-danger text-white me-2">
                                    {fileExtension}
                                </small>
                                <i className="fas fa-external-link-alt text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <small className="text-muted mt-2 d-block text-center">
                    <i className="fas fa-hand-pointer me-1"></i>
                    Sentuh untuk melihat dokumen
                </small>
                {vrf.checklist_status && (
                    <div className="text-center mt-2">
                        <small className="badge bg-info text-white">
                            <i className="fas fa-clipboard-check me-1"></i>
                            Persyaratan Lengkap
                        </small>
                    </div>
                )}
            </div>
        );
    };

    // Fungsi untuk render checklist status jika ada
    const renderChecklistStatus = (vrf) => {
        if (!vrf.checklist_status) return null;
        
        try {
            const checklist = JSON.parse(vrf.checklist_status);
            if (!Array.isArray(checklist)) return null;
            
            const completed = checklist.filter(item => item.checked).length;
            const total = checklist.length;
            
            return (
                <div className="d-flex align-items-center mt-1">
                    <small className="text-muted me-2">
                        <i className="fas fa-clipboard-list me-1"></i>
                        Ceklist: {completed}/{total}
                    </small>
                    <div className="progress flex-grow-1" style={{ height: "4px", width: "60px" }}>
                        <div 
                            className="progress-bar bg-success" 
                            style={{ width: `${(completed/total) * 100}%` }}
                        ></div>
                    </div>
                </div>
            );
        } catch (error) {
            return null;
        }
    };

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
            case "ditolak":
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
            case "ditolak":
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

    const renderRuteMutasi = (vrf) => {
        const provinceName = vrf.province?.name || "Tidak tersedia";
        const cityName = vrf.city?.name || "Tidak tersedia";
        const tujuanName = vrf.tujuan?.name || "Tidak tersedia";
        const tujuanDpcName = vrf.tujuan_dpc?.name || "Tidak tersedia";

        if (vrf.tipe_pindah === "dpw") {
            return (
                <div className="text-center">
                    <div className="d-flex align-items-center justify-content-center mb-2">
                        <div className="text-start">
                            <small className="text-muted d-block">
                                DPW Asal
                            </small>
                            <div className="fw-bold text-danger">
                                <i className="fas fa-map-marker-alt me-1"></i>
                                {provinceName}
                            </div>
                            <small className="text-muted">
                                <i className="fas fa-building me-1"></i>
                                {cityName}
                            </small>
                        </div>
                        <div className="mx-3">
                            <i className="fas fa-arrow-right text-primary fa-lg"></i>
                        </div>
                        <div className="text-end">
                            <small className="text-muted d-block">
                                DPW Tujuan
                            </small>
                            <div className="fw-bold text-success">
                                <i className="fas fa-map-marker-alt me-1"></i>
                                {tujuanName}
                            </div>
                            <small className="text-muted">
                                <i className="fas fa-building me-1"></i>
                                {tujuanDpcName}
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
                            <small className="text-muted d-block">
                                DPC Asal
                            </small>
                            <div className="fw-bold text-danger">
                                <i className="fas fa-building me-1"></i>
                                {cityName}
                            </div>
                            <small className="text-muted">
                                <i className="fas fa-map-marker-alt me-1"></i>
                                {provinceName}
                            </small>
                        </div>
                        <div className="mx-3">
                            <i className="fas fa-arrow-right text-primary fa-lg"></i>
                        </div>
                        <div className="text-end">
                            <small className="text-muted d-block">
                                DPC Tujuan
                            </small>
                            <div className="fw-bold text-success">
                                <i className="fas fa-building me-1"></i>
                                {tujuanDpcName}
                            </div>
                            <small className="text-muted">
                                <i className="fas fa-map-marker-alt me-1"></i>
                                {tujuanName}
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
        const provinceName = vrf.province?.name || "Tidak tersedia";
        const cityName = vrf.city?.name || "Tidak tersedia";
        const tujuanName = vrf.tujuan?.name || "Tidak tersedia";
        const tujuanDpcName = vrf.tujuan_dpc?.name || "Tidak tersedia";

        if (vrf.tipe_pindah === "dpw") {
            return (
                <div className="mb-3 p-3 bg-light rounded">
                    <h6 className="fw-bold mb-3 text-center">
                        <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                        Mutasi DPW (Antar Provinsi)
                    </h6>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="text-center">
                            <div className="fw-bold text-danger small">
                                DPW ASAL
                            </div>
                            <div className="fw-semibold">{provinceName}</div>
                            <small className="text-muted">{cityName}</small>
                        </div>
                        <div className="mx-2">
                            <i className="fas fa-arrow-right text-primary"></i>
                        </div>
                        <div className="text-center">
                            <div className="fw-bold text-success small">
                                DPW TUJUAN
                            </div>
                            <div className="fw-semibold">{tujuanName}</div>
                            <small className="text-muted">
                                {tujuanDpcName}
                            </small>
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
                            <div className="fw-bold text-danger small">
                                DPC ASAL
                            </div>
                            <div className="fw-semibold">{cityName}</div>
                            <small className="text-muted">
                                DPW: {provinceName}
                            </small>
                        </div>
                        <div className="mx-2">
                            <i className="fas fa-arrow-right text-primary"></i>
                        </div>
                        <div className="text-center">
                            <div className="fw-bold text-success small">
                                DPC TUJUAN
                            </div>
                            <div className="fw-semibold">{tujuanDpcName}</div>
                            <small className="text-muted">
                                DPW: {tujuanName}
                            </small>
                        </div>
                    </div>
                </div>
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
                                <div className="card-body py-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-8">
                                            <h4 className="mb-1 text-primary fw-bold">
                                                <i className="fas fa-exchange-alt me-2"></i>
                                                Verifikasi Pengajuan Mutasi
                                            </h4>
                                            <p className="text-muted mb-0">
                                                Kelola dan verifikasi pengajuan
                                                mutasi anggota antar DPW/DPC
                                            </p>
                                        </div>
                                        <div className="col-md-4 text-md-end">
                                            <div className="bg-success rounded p-3 d-inline-block">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-chart-bar text-dark me-2"></i>
                                                    <div>
                                                        <small className="text-dark d-block">
                                                            Total Pengajuan
                                                        </small>
                                                        <span className="fw-bold text-dark h5 mb-0">
                                                            {verif.total}
                                                        </span>
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
                            <Search URL={"/account/verifPengajuan"} />
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
                                                    <th
                                                        className="ps-4 py-3 text-center"
                                                        style={{ width: "4%" }}
                                                    >
                                                        No.
                                                    </th>
                                                    <th
                                                        className="py-3"
                                                        style={{ width: "16%" }}
                                                    >
                                                        <i className="fas fa-user me-2"></i>
                                                        Anggota
                                                    </th>
                                                    <th
                                                        className="py-3 text-center"
                                                        style={{ width: "12%" }}
                                                    >
                                                        <i className="fas fa-tag me-2"></i>
                                                        Tipe Mutasi
                                                    </th>
                                                    <th
                                                        className="py-3 text-center"
                                                        style={{ width: "22%" }}
                                                    >
                                                        <i className="fas fa-route me-2"></i>
                                                        Rute Mutasi
                                                    </th>
                                                    <th
                                                        className="py-3 text-center"
                                                        style={{ width: "18%" }}
                                                    >
                                                        <i className="fas fa-file me-2"></i>
                                                        Dokumen
                                                    </th>
                                                    <th
                                                        className="py-3 text-center"
                                                        style={{ width: "12%" }}
                                                    >
                                                        <i className="fas fa-info-circle me-2"></i>
                                                        Status
                                                    </th>
                                                    <th
                                                        className="py-3 text-center"
                                                        style={{ width: "10%" }}
                                                    >
                                                        <i className="fas fa-calendar me-2"></i>
                                                        Tanggal
                                                    </th>
                                                    <th
                                                        className="pe-4 py-3 text-center"
                                                        style={{ width: "6%" }}
                                                    >
                                                        <i className="fas fa-cogs me-2"></i>
                                                        Aksi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {verif.data &&
                                                verif.data.length > 0 ? (
                                                    verif.data.map(
                                                        (vrf, index) => (
                                                            <tr
                                                                key={vrf.id}
                                                                className="border-bottom"
                                                            >
                                                                <td className="ps-4 text-center fw-bold text-primary">
                                                                    {++index +
                                                                        (verif.current_page -
                                                                            1) *
                                                                            verif.per_page}
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div
                                                                            className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                            style={{
                                                                                width: "45px",
                                                                                height: "45px",
                                                                            }}
                                                                        >
                                                                            <i className="fas fa-user text-white"></i>
                                                                        </div>
                                                                        <div>
                                                                            <h6 className="mb-1 fw-semibold">
                                                                                {vrf.name ||
                                                                                    "Nama tidak tersedia"}
                                                                            </h6>
                                                                            <small className="text-muted">
                                                                                <i className="fas fa-id-card me-1"></i>
                                                                                {vrf.kta ||
                                                                                    "KTA tidak tersedia"}
                                                                            </small>
                                                                            {renderChecklistStatus(vrf)}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="d-flex flex-column align-items-center">
                                                                        {getTipePindahBadge(
                                                                            vrf.tipe_pindah,
                                                                        )}
                                                                        <small className="text-muted mt-1">
                                                                            {getTipePindahDescription(
                                                                                vrf.tipe_pindah,
                                                                            )}
                                                                        </small>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {renderRuteMutasi(
                                                                        vrf,
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    {renderDocumentInfo(
                                                                        vrf,
                                                                    )}
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="d-flex flex-column align-items-center">
                                                                        {getStatusBadge(
                                                                            vrf.status,
                                                                        )}
                                                                        <small className="text-muted mt-1">
                                                                            {getStatusDescription(
                                                                                vrf.status,
                                                                            )}
                                                                        </small>
                                                                        {vrf.keterangan_revisi && (
                                                                            <small className="text-warning mt-1">
                                                                                <i className="fas fa-exclamation-triangle me-1"></i>
                                                                                {
                                                                                    vrf.keterangan_revisi
                                                                                }
                                                                            </small>
                                                                        )}
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="fw-medium">
                                                                        {vrf.tgl_mutasi
                                                                            ? new Date(
                                                                                  vrf.tgl_mutasi,
                                                                              ).toLocaleDateString(
                                                                                  "id-ID",
                                                                                  {
                                                                                      day: "2-digit",
                                                                                      month: "short",
                                                                                      year: "numeric",
                                                                                  },
                                                                              )
                                                                            : "Tanggal tidak tersedia"}
                                                                    </div>
                                                                    <small className="text-muted">
                                                                        Diajukan
                                                                    </small>
                                                                </td>
                                                                <td className="pe-4 text-center">
                                                                    <Link
                                                                        href={`/account/verifPengajuan/${vrf.id}/edit`}
                                                                        className="btn btn-primary btn-sm rounded-pill px-3 py-2"
                                                                        title="Proses Verifikasi"
                                                                    >
                                                                        <i className="fas fa-edit me-1"></i>
                                                                        Proses
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        ),
                                                    )
                                                ) : (
                                                    <tr>
                                                        <td
                                                            colSpan="8"
                                                            className="text-center py-5"
                                                        >
                                                            <div className="py-4">
                                                                <i className="fas fa-inbox fa-3x text-muted mb-3"></i>
                                                                <h5 className="text-muted">
                                                                    Tidak ada
                                                                    data
                                                                    pengajuan
                                                                </h5>
                                                                <p className="text-muted mb-0">
                                                                    Belum ada
                                                                    pengajuan
                                                                    mutasi yang
                                                                    perlu
                                                                    diverifikasi
                                                                </p>
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
                                {verif.data && verif.data.length > 0 ? (
                                    verif.data.map((vrf, index) => (
                                        <div
                                            key={vrf.id}
                                            className="card shadow-sm border-0 mb-3"
                                        >
                                            <div className="card-body">
                                                {/* Header Card */}
                                                <div className="d-flex justify-content-between align-items-start mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <div
                                                            className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                                            style={{
                                                                width: "40px",
                                                                height: "40px",
                                                            }}
                                                        >
                                                            <i className="fas fa-user text-white"></i>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0 fw-bold">
                                                                {vrf.name ||
                                                                    "Nama tidak tersedia"}
                                                            </h6>
                                                            <small className="text-muted">
                                                                KTA:{" "}
                                                                {vrf.kta ||
                                                                    "KTA tidak tersedia"}
                                                            </small>
                                                            {renderChecklistStatus(vrf)}
                                                        </div>
                                                    </div>
                                                    <span className="badge bg-primary">
                                                        #
                                                        {++index +
                                                            (verif.current_page -
                                                                1) *
                                                                verif.per_page}
                                                    </span>
                                                </div>

                                                {/* Tipe Mutasi */}
                                                <div className="mb-3 text-center">
                                                    {getTipePindahBadge(
                                                        vrf.tipe_pindah,
                                                    )}
                                                    <p className="text-muted small mt-1 mb-0">
                                                        {getTipePindahDescription(
                                                            vrf.tipe_pindah,
                                                        )}
                                                    </p>
                                                </div>

                                                {/* Rute Mutasi */}
                                                {renderRuteMutasiMobile(vrf)}

                                                {/* Dokumen Info */}
                                                {renderDocumentInfoMobile(vrf)}

                                                {/* Status Info */}
                                                <div className="mb-3">
                                                    <div className="text-center mb-2">
                                                        {getStatusBadge(
                                                            vrf.status,
                                                        )}
                                                    </div>
                                                    <p className="text-center text-muted small mb-2">
                                                        {getStatusDescription(
                                                            vrf.status,
                                                        )}
                                                    </p>
                                                    {vrf.keterangan_revisi && (
                                                        <div className="alert alert-warning py-2 small mb-0">
                                                            <i className="fas fa-exclamation-triangle me-1"></i>
                                                            {
                                                                vrf.keterangan_revisi
                                                            }
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Footer Card */}
                                                <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                                                    <small className="text-muted">
                                                        <i className="fas fa-calendar me-1"></i>
                                                        {vrf.tgl_mutasi
                                                            ? new Date(
                                                                  vrf.tgl_mutasi,
                                                              ).toLocaleDateString(
                                                                  "id-ID",
                                                              )
                                                            : "Tanggal tidak tersedia"}
                                                    </small>
                                                    <Link
                                                        href={`/account/verifPengajuan/${vrf.id}/edit`}
                                                        className="btn btn-primary btn-sm rounded-pill px-3"
                                                    >
                                                        <i className="fas fa-edit me-1"></i>
                                                        Proses
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="card shadow-sm border-0 text-center py-5">
                                        <div className="card-body">
                                            <i className="fas fa-inbox fa-3x text-muted mb-3"></i>
                                            <h5 className="text-muted">
                                                Tidak ada data pengajuan
                                            </h5>
                                            <p className="text-muted">
                                                Belum ada pengajuan mutasi yang
                                                perlu diverifikasi
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    {verif.data && verif.data.length > 0 && (
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

                    {/* Modal Preview Dokumen */}
                    {showDocumentModal && selectedDocument && (
                        <div
                            className="modal fade show"
                            style={{
                                display: "block",
                                backgroundColor: "rgba(0,0,0,0.5)",
                            }}
                        >
                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header bg-primary text-white">
                                        <h5 className="modal-title">
                                            <i className="fas fa-file-pdf me-2"></i>
                                            Dokumen Mutasi
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close btn-close-white"
                                            onClick={closeDocumentModal}
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="text-center mb-4">
                                            <div className="alert alert-info">
                                                <i className="fas fa-info-circle me-2"></i>
                                                Dokumen berisi semua persyaratan mutasi dalam satu file PDF
                                            </div>
                                        </div>

                                        {/* PDF Viewer */}
                                        <div
                                            className="border rounded"
                                            style={{ height: "500px" }}
                                        >
                                            <iframe
                                                src={selectedDocument}
                                                title="Document Preview"
                                                width="100%"
                                                height="100%"
                                                frameBorder="0"
                                            />
                                        </div>

                                        <div className="mt-3 text-center">
                                            <a
                                                href={selectedDocument}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-success me-2"
                                            >
                                                <i className="fas fa-external-link-alt me-1"></i>
                                                Buka di Tab Baru
                                            </a>
                                            <a
                                                href={selectedDocument}
                                                download
                                                className="btn btn-primary"
                                            >
                                                <i className="fas fa-download me-1"></i>
                                                Unduh Dokumen
                                            </a>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={closeDocumentModal}
                                        >
                                            <i className="fas fa-times me-1"></i>
                                            Tutup
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </LayoutAccount>

            {/* Tambahkan CSS untuk hover effect */}
            <style jsx>{`
                .hover-shadow {
                    transition: all 0.3s ease;
                }
                .hover-shadow:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
                }
                .badge {
                    font-size: 0.85em;
                }
            `}</style>
        </>
    );
}