import React, { useState } from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

export default function WilayahCabangCreate() {
    const { wilayah, errors } = usePage().props;

    const [provinceid, setProvinceid] = useState("");
    const [alamat, setAlamat] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [instagram, setInstagram] = useState("");
    const [nameketua, setNameketua] = useState("");
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const storeWilayah = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        Inertia.post(
            "/account/wilayah",
            {
                province_id: provinceid,
                alamat: alamat,
                phone: phone,
                email: email,
                instagram: instagram,
                name_ketua: nameketua,
                lat: lat,
                long: long,
            },
            {
                onSuccess: () => {
                    Swal.fire({
                        title: "Berhasil Disimpan!",
                        text: "Data Wilayah DPW berhasil ditambahkan ke sistem.",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                },
                onFinish: () => setIsSubmitting(false),
            }
        );
    };

    return (
        <>
            <Head>
                <title>Tambah Wilayah DPW - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="container-fluid py-4 form-page-container">
                    {/* Header Banner */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm border-0 header-banner-box">
                        <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="header-icon-square me-3 shadow">
                                <i className="fa fa-plus-circle fa-2x text-white"></i>
                            </div>
                            <div>
                                <h4 className="mb-1 fw-bold text-dark-title" style={{ letterSpacing: "-0.02em" }}>
                                    Tambah Wilayah DPW Baru
                                </h4>
                                <p className="mb-0 text-slate-muted small">
                                    Lengkapi data sekretariat, pimpinan pengurus wilayah, kontak, dan koordinat peta.
                                </p>
                            </div>
                        </div>

                        <div>
                            <Link
                                href="/account/wilayah"
                                className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-semibold shadow-sm"
                            >
                                <i className="fa fa-arrow-left me-2"></i>
                                Kembali ke Daftar
                            </Link>
                        </div>
                    </div>

                    {/* Main Form Card */}
                    <div className="card border-0 rounded-4 shadow-sm bg-white overflow-hidden form-card-box">
                        <div className="card-header bg-white py-3 px-4 border-bottom d-flex align-items-center gap-2">
                            <span className="form-icon-pill shadow-sm">
                                <i className="fa fa-landmark text-emerald-700"></i>
                            </span>
                            <h5 className="mb-0 fw-bold text-slate-900 fs-6">Formulir Data Wilayah DPW</h5>
                        </div>

                        <div className="card-body p-4 p-md-5">
                            <form onSubmit={storeWilayah}>
                                <div className="row g-4">
                                    {/* Province Selection */}
                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-bold text-slate-800 small mb-1">
                                            Wilayah DPW (Provinsi) <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            className={`form-select form-select-custom ${errors.province_id ? "is-invalid" : ""}`}
                                            value={provinceid}
                                            onChange={(e) => setProvinceid(e.target.value)}
                                        >
                                            <option value="">-- Pilih Provinsi DPW --</option>
                                            {wilayah &&
                                                wilayah.map((w) => (
                                                    <option value={w.id} key={w.id}>
                                                        {w.name}
                                                    </option>
                                                ))}
                                        </select>
                                        {errors.province_id && (
                                            <div className="invalid-feedback">{errors.province_id}</div>
                                        )}
                                    </div>

                                    {/* Name Ketua */}
                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-bold text-slate-800 small mb-1">
                                            Nama Ketua DPW <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control form-control-custom ${errors.name_ketua ? "is-invalid" : ""}`}
                                            value={nameketua}
                                            onChange={(e) => setNameketua(e.target.value)}
                                            placeholder="Contoh: Wasis Juni Ardhi, A.Md.TW"
                                        />
                                        {errors.name_ketua && (
                                            <div className="invalid-feedback">{errors.name_ketua}</div>
                                        )}
                                    </div>

                                    {/* Alamat */}
                                    <div className="col-12">
                                        <label className="form-label fw-bold text-slate-800 small mb-1">
                                            Alamat Lengkap Sekretariat <span className="text-danger">*</span>
                                        </label>
                                        <textarea
                                            rows="3"
                                            className={`form-control form-control-custom ${errors.alamat ? "is-invalid" : ""}`}
                                            value={alamat}
                                            onChange={(e) => setAlamat(e.target.value)}
                                            placeholder="Masukkan alamat lengkap sekretariat kantor DPW..."
                                        ></textarea>
                                        {errors.alamat && (
                                            <div className="invalid-feedback">{errors.alamat}</div>
                                        )}
                                    </div>

                                    {/* Phone / WhatsApp */}
                                    <div className="col-12 col-md-4">
                                        <label className="form-label fw-bold text-slate-800 small mb-1">
                                            No. Telepon / WhatsApp <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light text-slate-500 border-end-0">
                                                <i className="fa fa-phone"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className={`form-control form-control-custom border-start-0 ${errors.phone ? "is-invalid" : ""}`}
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Contoh: 081234567890"
                                            />
                                        </div>
                                        {errors.phone && (
                                            <div className="text-danger small mt-1">{errors.phone}</div>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div className="col-12 col-md-4">
                                        <label className="form-label fw-bold text-slate-800 small mb-1">
                                            Email Resmi DPW <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light text-slate-500 border-end-0">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                            <input
                                                type="email"
                                                className={`form-control form-control-custom border-start-0 ${errors.email ? "is-invalid" : ""}`}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Contoh: ikatwidpwjatim@gmail.com"
                                            />
                                        </div>
                                        {errors.email && (
                                            <div className="text-danger small mt-1">{errors.email}</div>
                                        )}
                                    </div>

                                    {/* Instagram */}
                                    <div className="col-12 col-md-4">
                                        <label className="form-label fw-bold text-slate-800 small mb-1">
                                            Akun Instagram <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light text-slate-500 border-end-0">
                                                <i className="fab fa-instagram"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className={`form-control form-control-custom border-start-0 ${errors.instagram ? "is-invalid" : ""}`}
                                                value={instagram}
                                                onChange={(e) => setInstagram(e.target.value)}
                                                placeholder="Contoh: @ikatwidpwjatim atau link URL"
                                            />
                                        </div>
                                        {errors.instagram && (
                                            <div className="text-danger small mt-1">{errors.instagram}</div>
                                        )}
                                    </div>

                                    {/* Coordinates: Latitude & Longitude */}
                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-bold text-slate-800 small mb-1">
                                            Latitude (Garis Lintang)
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-custom"
                                            value={lat}
                                            onChange={(e) => setLat(e.target.value)}
                                            placeholder="Contoh: -7.308627"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-bold text-slate-800 small mb-1">
                                            Longitude (Garis Bujur)
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-custom"
                                            value={long}
                                            onChange={(e) => setLong(e.target.value)}
                                            placeholder="Contoh: 112.739561"
                                        />
                                    </div>
                                </div>

                                {/* Submit Buttons */}
                                <div className="d-flex justify-content-end gap-2 mt-5 pt-3 border-top">
                                    <Link
                                        href="/account/wilayah"
                                        className="btn btn-light rounded-pill px-4 py-2 fw-semibold"
                                    >
                                        Batal
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-save-action rounded-pill px-5 py-2 fw-bold text-white shadow"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2"></span>
                                                Menyimpan...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fa fa-save me-2"></i>
                                                Simpan Data Wilayah
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <style>{`
                    .form-page-container {
                        animation: fadeIn 0.25s ease-in-out;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(6px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    .header-banner-box {
                        background: #ffffff;
                        border: 1.5px solid #cbd5e1 !important;
                    }
                    .header-icon-square {
                        width: 52px;
                        height: 52px;
                        border-radius: 14px;
                        background: linear-gradient(135deg, #065f46 0%, #059669 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                    }
                    .form-card-box {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #059669 !important;
                    }
                    .form-icon-pill {
                        width: 32px;
                        height: 32px;
                        border-radius: 8px;
                        background-color: #ecfdf5;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                    }
                    .form-control-custom, .form-select-custom {
                        border-radius: 10px;
                        border: 1.5px solid #cbd5e1;
                        padding: 10px 14px;
                        font-size: 0.9rem;
                        color: #0f172a;
                    }
                    .form-control-custom:focus, .form-select-custom:focus {
                        border-color: #059669;
                        box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);
                    }
                    .btn-save-action {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        border: none;
                        transition: all 0.2s ease;
                    }
                    .btn-save-action:hover {
                        background: linear-gradient(135deg, #047857 0%, #064e3b 100%);
                        transform: translateY(-2px);
                    }
                `}</style>
            </LayoutAccount>
        </>
    );
}
