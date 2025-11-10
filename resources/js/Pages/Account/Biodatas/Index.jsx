//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, Link, usePage } from "@inertiajs/inertia-react";

import { QRCodeSVG } from "qrcode.react";

export default function EktaIndex() {
    const { biodata, transactions, statusAnggota } = usePage().props;

    const status = transactions.map((ts) => ts.status);
    const [name] = useState(statusAnggota.status_anggota);

    const filePakta = biodata.filepakta;

    const filter = status
        .toString()
        .replace("[", "")
        .replace("]", "")
        .replace('"', "")
        .replace('"', "");

    // Format date jika diperlukan
    const formatDate = (dateString) => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <>
            <Head>
                <title>User E-KTA - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
                                <h5 className="mb-0 text-primary">
                                    <i className="fa fa-id-card me-2"></i> Biodata Anggota
                                </h5>
                                <Link
                                    href={`/account/biodatas/${biodata.id}/edit`}
                                    className="btn btn-primary btn-sm"
                                >
                                    <i className="fa fa-edit me-1"></i> Edit Biodata
                                </Link>
                            </div>
                            <div className="card-body p-4">
                                {/* Profile Header */}
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <div className="d-flex align-items-center">
                                            <div className="me-4">
                                                <img
                                                    src={biodata.image}
                                                    className="rounded-circle border"
                                                    width={"100"}
                                                    height={"100"}
                                                    alt="Foto Profil"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = "/assets/images/user.png";
                                                    }}
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div>
                                                <h4 className="mb-1 text-dark">{biodata.name}</h4>
                                                <p className="text-muted mb-1">
                                                    <i className="fa fa-id-card me-2"></i>
                                                    No. Anggota: {biodata.no_anggota || '-'}
                                                </p>
                                                <span className={`badge ${biodata.status_anggota === 'Anggota Biasa' ? 'bg-success' : 'bg-warning'} fs-6`}>
                                                    {biodata.status_anggota}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Informasi Pribadi */}
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 border-0 shadow-sm">
                                            <div className="card-header bg-light">
                                                <h6 className="mb-0 text-primary">
                                                    <i className="fa fa-user me-2"></i> Informasi Pribadi
                                                </h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">NIK</label>
                                                    <p className="mb-0 fw-semibold">{biodata.nik || '-'}</p>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">Email</label>
                                                    <p className="mb-0 fw-semibold">{biodata.email || '-'}</p>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">Tempat, Tanggal Lahir</label>
                                                    <p className="mb-0 fw-semibold">
                                                        {biodata.tempat_lahir || '-'}, {formatDate(biodata.tgl_lahir)}
                                                    </p>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">No. Telepon/HP</label>
                                                    <p className="mb-0 fw-semibold">{biodata.phone || '-'}</p>
                                                </div>
                                                <div>
                                                    <label className="form-label text-muted small mb-1">Alamat (KTP)</label>
                                                    <p className="mb-0 fw-semibold">{biodata.alamat || '-'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Riwayat Pendidikan */}
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 border-0 shadow-sm">
                                            <div className="card-header bg-light">
                                                <h6 className="mb-0 text-primary">
                                                    <i className="fa fa-graduation-cap me-2"></i> Riwayat Pendidikan
                                                </h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">Pendidikan Terapi Wicara</label>
                                                    <p className="mb-0 fw-semibold">{biodata.pendidikan || '-'}</p>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">Perguruan Tinggi</label>
                                                    <p className="mb-0 fw-semibold">{biodata.istitusi || '-'}</p>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">Alamat Perguruan Tinggi</label>
                                                    <p className="mb-0 fw-semibold">{biodata.almtistitusi || '-'}</p>
                                                </div>
                                                <div>
                                                    <label className="form-label text-muted small mb-1">Pendidikan Non Terapi Wicara</label>
                                                    <p className="mb-0 fw-semibold">{biodata.nonlinear || '-'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Informasi Pekerjaan */}
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 border-0 shadow-sm">
                                            <div className="card-header bg-light">
                                                <h6 className="mb-0 text-primary">
                                                    <i className="fa fa-briefcase me-2"></i> Informasi Pekerjaan
                                                </h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">Status Kepegawaian</label>
                                                    <p className="mb-0 fw-semibold">{biodata.kepegawaian || '-'}</p>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">Tempat Bekerja</label>
                                                    <p className="mb-0 fw-semibold">{biodata.bekerja || '-'}</p>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">Nama Institusi</label>
                                                    <p className="mb-0 fw-semibold">{biodata.lokasi_pekerjaan || '-'}</p>
                                                </div>
                                                <div>
                                                    <label className="form-label text-muted small mb-1">Alamat Institusi</label>
                                                    <p className="mb-0 fw-semibold">{biodata.alamat_tempat_bekerja || '-'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status Keanggotaan & QR Code */}
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 border-0 shadow-sm">
                                            <div className="card-header bg-light">
                                                <h6 className="mb-0 text-primary">
                                                    <i className="fa fa-users me-2"></i> Status Keanggotaan
                                                </h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">DPW</label>
                                                    <p className="mb-0 fw-semibold">{biodata.province?.name || '-'}</p>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">DPC</label>
                                                    <p className="mb-0 fw-semibold">{biodata.city?.name || '-'}</p>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">No. Anggota</label>
                                                    <p className="mb-0 fw-semibold">{biodata.no_anggota || '-'}</p>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label text-muted small mb-1">Status Anggota</label>
                                                    <p className="mb-0 fw-semibold">{biodata.status_anggota || '-'}</p>
                                                </div>

                                                {/* QR Code Section */}
                                                <div className="mt-4 text-center">
                                                    <label className="form-label text-muted small mb-2">E-KTA QR Code</label>
                                                    <div className="border rounded p-3 bg-light">
                                                        {filter === "PAID" || name === "Anggota Kehormatan" ? (
                                                            <div className="text-center">
                                                                <QRCodeSVG
                                                                    value={biodata.name}
                                                                    size={120}
                                                                    level="M"
                                                                    includeMargin={true}
                                                                />
                                                                <p className="small text-muted mt-2 mb-0">Scan untuk verifikasi keanggotaan</p>
                                                            </div>
                                                        ) : (
                                                            <div className="alert alert-warning border-0 mb-0 py-2">
                                                                <i className="fa fa-exclamation-triangle me-2"></i>
                                                                <span className="small">
                                                                    Anda belum membayar tagihan IURAN
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}