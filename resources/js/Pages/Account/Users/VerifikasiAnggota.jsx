//import react
import React, { useEffect, useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function UserVerifikasiAnggota() {
    const { errors, provinces, cities, user } = usePage().props;
    const status = user.confirm;

    // state user
    const [name, setName] = useState(user.name);
    const [nik, setNik] = useState(user.nik);
    const [email, setEmail] = useState(user.email);
    const [alamat, setAlamat] = useState(user.alamat);
    const [provinceID, setProvinceID] = useState(user.province_id);
    const [cityID, setCityID] = useState(user.city_id);
    const [statusAnggota, setStatusAnggota] = useState(user.status_anggota);
    const [confirm, setConfirm] = useState(user.confirm);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setConfirm(status === "true");
    }, [status]);

    //method "updateUser"
    const updateUser = (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);

        //sending data
        Inertia.post(
            `/account/users/verifNoAnggota/${user.id}`,
            {
                name: name,
                _method: "PUT",
            },
            {
                onStart: () => setLoading(true),
                onFinish: () => setLoading(false),
                onSuccess: () => {
                    setLoading(false);
                    Swal.fire({
                        title: "Berhasil!",
                        text: "Nomor Anggota berhasil diterbitkan dan anggota telah aktif!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1800,
                    });
                },
                onError: (err) => {
                    setLoading(false);
                    Swal.fire({
                        title: "Terjadi Kendala",
                        text: "Gagal memproses verifikasi anggota. Silakan coba kembali.",
                        icon: "error",
                    });
                }
            }
        );
    };

    return (
        <LayoutAccount>
            <Head title={`Verifikasi Anggota: ${user.name} - IKATWI`} />

            <div className="user-verifikasi-anggota-page">
                {/* Header Section */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
                    <div>
                        <h1 className="h4 text-dark fw-bold mb-1 d-flex align-items-center gap-2">
                            <i className="fa fa-user-check text-dark"></i>
                            <span>Verifikasi No. Anggota</span>
                        </h1>
                        <p className="text-muted small mb-0">
                            Konfirmasi pendaftaran anggota dan terbitkan Nomor Anggota resmi IKATWI.
                        </p>
                    </div>

                    <div>
                        <Link
                            href="/account/verifikasi-users"
                            className="btn btn-sm d-inline-flex align-items-center gap-2 px-3 py-2 text-decoration-none shadow-sm"
                            style={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #cbd5e1',
                                color: '#334155',
                                borderRadius: '8px',
                                fontWeight: 600,
                                fontSize: '0.84rem'
                            }}
                        >
                            <i className="fa fa-arrow-left"></i>
                            <span>Kembali ke Verifikasi</span>
                        </Link>
                    </div>
                </div>

                {/* Form Card */}
                <div className="card border-0 shadow-sm" style={{ borderRadius: '12px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>
                    <div className="card-header bg-white border-bottom py-3 px-4 d-flex justify-content-between align-items-center" style={{ borderColor: '#e2e8f0' }}>
                        <span className="fw-bold text-dark">
                            <i className="fa fa-id-badge text-dark me-2"></i> Data Pendaftar: {user.name}
                        </span>
                        {confirm ? (
                            <span className="badge rounded-pill" style={{ backgroundColor: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', fontSize: '0.75rem', fontWeight: 600 }}>
                                <i className="fa fa-check-circle me-1" style={{ color: '#10b981' }}></i> Terverifikasi (No: {user.no_anggota})
                            </span>
                        ) : (
                            <span className="badge rounded-pill" style={{ backgroundColor: '#fef3c7', color: '#b45309', border: '1px solid #fde68a', fontSize: '0.75rem', fontWeight: 600 }}>
                                <i className="fa fa-clock me-1"></i> Menunggu Verifikasi
                            </span>
                        )}
                    </div>

                    <div className="card-body p-4">
                        <form onSubmit={updateUser}>
                            <div className="row g-3">
                                {/* NIK */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Nomor Induk Kependudukan (NIK)
                                    </label>
                                    <input
                                        type="number"
                                        disabled
                                        className="form-control form-control-sm"
                                        value={nik || ""}
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#e2e8f0', backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.85rem' }}
                                    />
                                </div>

                                {/* Full Name */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        className="form-control form-control-sm"
                                        value={name || ""}
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#e2e8f0', backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.85rem' }}
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Alamat Email
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        className="form-control form-control-sm"
                                        value={email || ""}
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#e2e8f0', backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.85rem' }}
                                    />
                                </div>

                                {/* DPW */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        DPW (Provinsi)
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        className="form-control form-control-sm"
                                        value={user.province?.name || "-"}
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#e2e8f0', backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.85rem' }}
                                    />
                                </div>

                                {/* DPC */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        DPC (Kota/Kab)
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        className="form-control form-control-sm"
                                        value={user.city?.name || "-"}
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#e2e8f0', backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.85rem' }}
                                    />
                                </div>

                                {/* Status Anggota */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Status Anggota
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        className="form-control form-control-sm"
                                        value={statusAnggota || "Anggota Biasa"}
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#e2e8f0', backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.85rem' }}
                                    />
                                </div>

                                {/* Alamat */}
                                <div className="col-12">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Alamat Lengkap
                                    </label>
                                    <textarea
                                        disabled
                                        rows={2}
                                        className="form-control"
                                        value={alamat || "-"}
                                        style={{ borderRadius: '8px', borderColor: '#e2e8f0', backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.85rem' }}
                                    />
                                </div>

                                {/* Pakta Integritas File */}
                                {user.filepakta && (
                                    <div className="col-12">
                                        <label className="form-label small fw-bold text-dark mb-1 d-block">
                                            Berkas Pakta Integritas
                                        </label>
                                        <a
                                            href={user.filepakta}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm d-inline-flex align-items-center gap-2 px-3 py-2 shadow-sm"
                                            style={{
                                                backgroundColor: '#fef2f2',
                                                border: '1px solid #fecaca',
                                                color: '#dc2626',
                                                borderRadius: '8px',
                                                fontWeight: 600,
                                                fontSize: '0.84rem'
                                            }}
                                        >
                                            <i className="fa fa-file-pdf"></i>
                                            <span>Buka & Periksa Berkas Pakta Integritas (PDF)</span>
                                            <i className="fa fa-external-link-alt ms-1" style={{ fontSize: '0.75rem' }}></i>
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="d-flex gap-2 mt-4 pt-3 border-top" style={{ borderColor: '#e2e8f0' }}>
                                {confirm ? (
                                    <button
                                        type="button"
                                        disabled
                                        className="btn btn-sm d-inline-flex align-items-center gap-2 px-4 py-2 border-0"
                                        style={{
                                            backgroundColor: '#e2e8f0',
                                            color: '#64748b',
                                            borderRadius: '8px',
                                            fontWeight: 600,
                                            fontSize: '0.85rem'
                                        }}
                                    >
                                        <i className="fa fa-check-circle text-success"></i>
                                        <span>Sudah Diverifikasi</span>
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn btn-sm d-inline-flex align-items-center gap-2 px-4 py-2 text-white border-0 shadow-sm"
                                        style={{
                                            backgroundColor: '#059669',
                                            borderRadius: '8px',
                                            fontWeight: 600,
                                            fontSize: '0.85rem',
                                            opacity: loading ? 0.75 : 1,
                                            cursor: loading ? 'not-allowed' : 'pointer',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                <span>Sedang Memproses & Menerbitkan...</span>
                                            </>
                                        ) : (
                                            <>
                                                <i className="fa fa-check-circle"></i>
                                                <span>Setujui & Terbitkan No. Anggota</span>
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LayoutAccount>
    );
}
