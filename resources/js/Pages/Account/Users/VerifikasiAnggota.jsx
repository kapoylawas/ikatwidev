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

            <div className="container-fluid py-4 user-verifikasi-anggota-page">
                {/* Header Banner */}
                <div className="header-banner-box p-4 rounded-4 mb-4 shadow-sm">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                        <div className="d-flex align-items-center">
                            <div className="header-icon-wrap me-3 shadow">
                                <i className="fa fa-user-check fa-2x text-white"></i>
                            </div>
                            <div>
                                <h4 className="mb-0 fw-bold header-main-title">
                                    Verifikasi No. Anggota
                                </h4>
                                <p className="header-subtitle mb-0 mt-1">
                                    Konfirmasi pendaftaran pendaftar baru dan terbitkan Nomor Anggota resmi IKATWI.
                                </p>
                            </div>
                        </div>

                        <div>
                            <Link
                                href="/account/verifikasi-users"
                                className="btn btn-all-users rounded-pill px-4 py-2 fw-bold shadow-sm"
                            >
                                <i className="fa fa-arrow-left me-1.5 text-primary"></i>
                                <span>Kembali ke Daftar Verifikasi</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Form Card */}
                <div className="card form-verif-card rounded-4 shadow-sm overflow-hidden mb-4">
                    <div className="card-header form-card-header py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <div className="d-flex align-items-center gap-2">
                            <i className="fa fa-id-card text-emerald-600 fs-5"></i>
                            <span className="fw-bold text-slate-900" style={{ fontSize: '1rem' }}>
                                Data Pendaftar: {user.name}
                            </span>
                        </div>
                        {confirm ? (
                            <span className="badge-verified-pill shadow-sm">
                                <i className="fa fa-check-circle me-1"></i> Terverifikasi (No: {user.no_anggota})
                            </span>
                        ) : (
                            <span className="badge-waiting-pill shadow-sm">
                                <i className="fa fa-clock me-1"></i> Menunggu Verifikasi &amp; Penerbitan No. Anggota
                            </span>
                        )}
                    </div>

                    <div className="card-body p-4">
                        <form onSubmit={updateUser}>
                            <div className="row g-3">
                                {/* NIK */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-fingerprint me-1.5 text-primary"></i> Nomor Induk Kependudukan (NIK)
                                    </label>
                                    <input
                                        type="number"
                                        disabled
                                        className="form-control form-control-custom-disabled"
                                        value={nik || ""}
                                    />
                                </div>

                                {/* Full Name */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-user me-1.5 text-primary"></i> Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        className="form-control form-control-custom-disabled"
                                        value={name || ""}
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-envelope me-1.5 text-primary"></i> Alamat Email
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        className="form-control form-control-custom-disabled"
                                        value={email || ""}
                                    />
                                </div>

                                {/* DPW */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-landmark me-1.5 text-emerald-600"></i> DPW (Provinsi)
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        className="form-control form-control-custom-disabled"
                                        value={user.province?.name || "-"}
                                    />
                                </div>

                                {/* DPC */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-city me-1.5 text-indigo-600"></i> DPC (Kota/Kab)
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        className="form-control form-control-custom-disabled"
                                        value={user.city?.name || "-"}
                                    />
                                </div>

                                {/* Status Anggota */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-user-tag me-1.5 text-primary"></i> Status Anggota
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        className="form-control form-control-custom-disabled"
                                        value={statusAnggota || "Anggota Biasa"}
                                    />
                                </div>

                                {/* Alamat */}
                                <div className="col-12">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-map-marker-alt me-1.5 text-danger"></i> Alamat Lengkap
                                    </label>
                                    <textarea
                                        disabled
                                        rows={2}
                                        className="form-control form-control-custom-disabled"
                                        value={alamat || "-"}
                                    />
                                </div>

                                {/* Pakta Integritas File */}
                                {user.filepakta && (
                                    <div className="col-12">
                                        <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase d-block">
                                            <i className="fa fa-file-pdf me-1.5 text-danger"></i> Berkas Pakta Integritas
                                        </label>
                                        <a
                                            href={user.filepakta}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-pakta-pdf shadow-sm"
                                        >
                                            <i className="fa fa-file-pdf me-1.5"></i>
                                            <span>Buka &amp; Periksa Berkas Pakta Integritas (PDF)</span>
                                            <i className="fa fa-external-link-alt ms-2" style={{ fontSize: '0.75rem' }}></i>
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="d-flex gap-2 mt-4 pt-3 border-top" style={{ borderColor: '#cbd5e1' }}>
                                {confirm ? (
                                    <button
                                        type="button"
                                        disabled
                                        className="btn btn-already-verified shadow-sm"
                                    >
                                        <i className="fa fa-check-circle text-success"></i>
                                        <span>Sudah Diverifikasi &amp; Terbit No. Anggota</span>
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn btn-submit-verif shadow"
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                <span>Sedang Memproses &amp; Menerbitkan...</span>
                                            </>
                                        ) : (
                                            <>
                                                <i className="fa fa-check-circle"></i>
                                                <span>Setujui &amp; Terbitkan No. Anggota</span>
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                .user-verifikasi-anggota-page {
                    color: #1e293b;
                }

                /* Header Banner */
                .header-banner-box {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-left: 6px solid #059669 !important;
                    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
                }
                .header-icon-wrap {
                    width: 54px;
                    height: 54px;
                    border-radius: 14px;
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                    flex-shrink: 0;
                }
                .header-main-title {
                    color: #0f172a;
                    font-size: 1.35rem;
                    letter-spacing: -0.02em;
                }
                .header-subtitle {
                    color: #475569;
                    font-size: 0.88rem;
                    font-weight: 500;
                }
                .btn-all-users {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    color: #1e293b;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-all-users:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
                }

                /* Form Card */
                .form-verif-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-top: 4px solid #059669 !important;
                    box-shadow: 0 6px 20px -2px rgba(15, 23, 42, 0.08);
                }
                .form-card-header {
                    background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
                    border-bottom: 1.5px solid #e2e8f0;
                }
                .badge-verified-pill {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    font-size: 0.78rem;
                    font-weight: 700;
                }
                .badge-waiting-pill {
                    background-color: #fffbeb;
                    color: #b45309;
                    border: 1.5px solid #fde68a;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    font-size: 0.78rem;
                    font-weight: 700;
                }
                .form-control-custom-disabled {
                    border-radius: 10px;
                    border: 1.5px solid #cbd5e1;
                    background-color: #f8fafc;
                    font-size: 0.86rem;
                    color: #1e293b !important;
                    font-weight: 600;
                    padding: 9px 14px;
                }
                .btn-pakta-pdf {
                    display: inline-flex;
                    align-items: center;
                    background-color: #fef2f2;
                    color: #dc2626;
                    border: 1.5px solid #fca5a5;
                    border-radius: 10px;
                    padding: 10px 18px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .btn-pakta-pdf:hover {
                    background-color: #fee2e2;
                    color: #b91c1c;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.15);
                }
                .btn-already-verified {
                    background-color: #f1f5f9;
                    border: 1.5px solid #cbd5e1;
                    color: #475569;
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 0.88rem;
                    padding: 10px 22px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }
                .btn-submit-verif {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border: none;
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 0.88rem;
                    padding: 10px 24px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.2s ease;
                }
                .btn-submit-verif:hover {
                    background: linear-gradient(135deg, #047857 0%, #065f46 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                }
            `}</style>
        </LayoutAccount>
    );
}
