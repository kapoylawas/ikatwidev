import React, { useState } from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

export default function WilayahdpcCreate() {
    const { wilayah, errors } = usePage().props;

    const [cityid, setCityid] = useState("");
    const [alamat, setAlamat] = useState("");
    const [link, setLink] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [instagram, setInstagram] = useState("");
    const [nameketua, setNameketua] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const storeWilayah = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        Inertia.post(
            "/account/areadpc",
            {
                city_id: cityid,
                alamat: alamat,
                link: link,
                phone: phone,
                email: email,
                instagram: instagram,
                name_ketua: nameketua,
            },
            {
                onSuccess: () => {
                    Swal.fire({
                        title: "Berhasil Disimpan!",
                        text: "Data Wilayah DPC berhasil ditambahkan ke sistem.",
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
                <title>Tambah Wilayah DPC - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="container-fluid py-4 form-page-container">
                    {/* Header Banner */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm border-0 header-banner-box">
                        <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="header-icon-square-dpc me-3 shadow">
                                <i className="fa fa-plus-circle fa-2x text-white"></i>
                            </div>
                            <div>
                                <h4 className="mb-1 fw-bold text-dark-title" style={{ letterSpacing: "-0.02em" }}>
                                    Tambah Wilayah DPC Baru
                                </h4>
                                <p className="mb-0 text-slate-muted small">
                                    Lengkapi data cabang kota/kabupaten, ketua pengurus, kontak, dan link Google Maps.
                                </p>
                            </div>
                        </div>

                        <div>
                            <Link
                                href="/account/areadpc"
                                className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-semibold shadow-sm"
                            >
                                <i className="fa fa-arrow-left me-2"></i>
                                Kembali ke Daftar
                            </Link>
                        </div>
                    </div>

                    {/* Main Form Card */}
                    <div className="card border-0 rounded-4 shadow-sm bg-white overflow-hidden form-card-box-dpc">
                        <div className="card-header bg-white py-3 px-4 border-bottom d-flex align-items-center gap-2">
                            <span className="form-icon-pill-dpc shadow-sm">
                                <i className="fa fa-city text-blue-700"></i>
                            </span>
                            <h5 className="mb-0 fw-bold text-slate-900 fs-6">Formulir Data Wilayah DPC</h5>
                        </div>

                        <div className="card-body p-4 p-md-5">
                            <form onSubmit={storeWilayah}>
                                <div className="row g-4">
                                    {/* City / DPC Selection */}
                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-bold text-slate-800 small mb-1">
                                            Cabang DPC (Kota / Kabupaten) <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            className={`form-select form-select-custom ${errors.city_id ? "is-invalid" : ""}`}
                                            value={cityid}
                                            onChange={(e) => setCityid(e.target.value)}
                                        >
                                            <option value="">-- Pilih Kota / Kabupaten DPC --</option>
                                            {wilayah &&
                                                wilayah.map((w) => (
                                                    <option value={w.id} key={w.id}>
                                                        {w.name}
                                                    </option>
                                                ))}
                                        </select>
                                        {errors.city_id && (
                                            <div className="invalid-feedback">{errors.city_id}</div>
                                        )}
                                    </div>

                                    {/* Name Ketua */}
                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-bold text-slate-800 small mb-1">
                                            Nama Ketua DPC <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control form-control-custom ${errors.name_ketua ? "is-invalid" : ""}`}
                                            value={nameketua}
                                            onChange={(e) => setNameketua(e.target.value)}
                                            placeholder="Contoh: Mutiaradewi Kusumawardani, AMd.TW"
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
                                            placeholder="Masukkan alamat lengkap sekretariat kantor DPC..."
                                        ></textarea>
                                        {errors.alamat && (
                                            <div className="invalid-feedback">{errors.alamat}</div>
                                        )}
                                    </div>

                                    {/* Link Google Maps */}
                                    <div className="col-12">
                                        <label className="form-label fw-bold text-slate-800 small mb-1">
                                            Link Embed / URL Google Maps <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control form-control-custom ${errors.link ? "is-invalid" : ""}`}
                                            value={link}
                                            onChange={(e) => setLink(e.target.value)}
                                            placeholder="Contoh: https://maps.google.com/maps?q=-6.760282,111.014769&hl=id&output=embed"
                                        />
                                        <small className="text-slate-500 d-block mt-1">
                                            Tips: Masukkan URL embed Google Maps atau link share koordinat lokasi.
                                        </small>
                                        {errors.link && (
                                            <div className="invalid-feedback">{errors.link}</div>
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
                                            Email Resmi DPC <span className="text-danger">*</span>
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
                                                placeholder="Contoh: ikatwi.pati@gmail.com"
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
                                                placeholder="Contoh: @ikatwipati atau link URL"
                                            />
                                        </div>
                                        {errors.instagram && (
                                            <div className="text-danger small mt-1">{errors.instagram}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Submit Buttons */}
                                <div className="d-flex justify-content-end gap-2 mt-5 pt-3 border-top">
                                    <Link
                                        href="/account/areadpc"
                                        className="btn btn-light rounded-pill px-4 py-2 fw-semibold"
                                    >
                                        Batal
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-save-action-dpc rounded-pill px-5 py-2 fw-bold text-white shadow"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2"></span>
                                                Menyimpan...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fa fa-save me-2"></i>
                                                Simpan Data Wilayah DPC
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
                    .header-icon-square-dpc {
                        width: 52px;
                        height: 52px;
                        border-radius: 14px;
                        background: linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
                    }
                    .form-card-box-dpc {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #0284c7 !important;
                    }
                    .form-icon-pill-dpc {
                        width: 32px;
                        height: 32px;
                        border-radius: 8px;
                        background-color: #eff6ff;
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
                        border-color: #0284c7;
                        box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
                    }
                    .btn-save-action-dpc {
                        background: linear-gradient(135deg, #0284c7 0%, #1d4ed8 100%);
                        border: none;
                        transition: all 0.2s ease;
                    }
                    .btn-save-action-dpc:hover {
                        background: linear-gradient(135deg, #0369a1 0%, #1e40af 100%);
                        transform: translateY(-2px);
                    }
                `}</style>
            </LayoutAccount>
        </>
    );
}
