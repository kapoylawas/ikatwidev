//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function UserEdit() {
    const { errors, roles, provinces, cities, user } = usePage().props;

    // state user
    const [name, setName] = useState(user.name);
    const [nik, setNik] = useState(user.nik);
    const [email, setEmail] = useState(user.email);
    const [alamat, setAlamat] = useState(user.alamat);
    const [provinceID, setProvinceID] = useState(user.province_id);
    const [cityID, setCityID] = useState(user.city_id);
    const [statusAnggota, setStatusAnggota] = useState(user.status_anggota);
    const [rolesData, setRolesData] = useState(
        user.roles.map((obj) => obj.name)
    );
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [image, setImage] = useState("");
    const [nostr, setNostr] = useState(user.no_str);
    const [dateexprd, setDateExprd] = useState(user.date_exprd);
    const [isSubmitting, setIsSubmitting] = useState(false);

    //define method "handleCheckboxChange"
    const handleCheckboxChange = (roleName) => {
        let data = [...rolesData];
        if (data.includes(roleName)) {
            data = data.filter((name) => name !== roleName);
        } else {
            data.push(roleName);
        }
        setRolesData(data);
    };

    //method "updateUser"
    const updateUser = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);

        //sending data
        Inertia.post(
            `/account/users/${user.id}`,
            {
                name: name,
                email: email,
                nik: nik,
                province_id: provinceID,
                city_id: cityID,
                alamat: alamat,
                image: image,
                status_anggota: statusAnggota,
                no_str: nostr,
                date_exprd: dateexprd,
                password: password,
                password_confirmation: passwordConfirmation,
                roles: rolesData,
                _method: "PUT",
            },
            {
                onFinish: () => setIsSubmitting(false),
                onSuccess: () => {
                    Swal.fire({
                        title: "Berhasil!",
                        text: "Data pengguna berhasil diperbarui.",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
                onError: () => {
                    Swal.fire({
                        title: "Gagal!",
                        text: "Periksa kembali isian formulir Anda.",
                        icon: "error",
                    });
                }
            }
        );
    };

    return (
        <LayoutAccount>
            <Head title={`Edit User: ${user.name} - IKATWI`} />

            <div className="container-fluid py-4 user-edit-container">
                {/* Header Banner */}
                <div className="header-banner-box p-4 rounded-4 mb-4 shadow-sm">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                        <div className="d-flex align-items-center">
                            <div className="header-icon-wrap me-3 shadow">
                                <i className="fa fa-user-edit fa-2x text-white"></i>
                            </div>
                            <div>
                                <h4 className="mb-0 fw-bold header-main-title">
                                    Edit Data Pengguna
                                </h4>
                                <p className="header-subtitle mb-0 mt-1">
                                    Perbarui informasi profil akun, data STR, penempatan wilayah (DPW/DPC), dan hak akses sistem.
                                </p>
                            </div>
                        </div>

                        <div>
                            <Link
                                href="/account/users"
                                className="btn btn-back-users rounded-pill px-4 py-2 fw-bold shadow-sm"
                            >
                                <i className="fa fa-arrow-left me-1.5 text-primary"></i>
                                <span>Kembali ke Daftar</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main Form Card */}
                <div className="card edit-form-card rounded-4 shadow-sm overflow-hidden mb-4">
                    <div className="card-header form-card-header py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <div className="d-flex align-items-center gap-3">
                            <span className="card-icon-pill bg-blue-icon-pill shadow-sm">
                                <i className="fa fa-id-card text-white"></i>
                            </span>
                            <div>
                                <h5 className="mb-0 fw-bold form-header-title">
                                    Formulir Perubahan Data Pengguna
                                </h5>
                                <span className="form-header-sub">
                                    {user.name}
                                </span>
                            </div>
                        </div>
                        {user.no_anggota && (
                            <span className="badge-no-anggota-pill shadow-sm">
                                <i className="fa fa-award me-1 text-emerald-600"></i>
                                No. Anggota: <strong>{user.no_anggota}</strong>
                            </span>
                        )}
                    </div>

                    <div className="card-body p-4 p-lg-5">
                        <form onSubmit={updateUser}>
                            {/* SECTION 1: Identitas & STR */}
                            <div className="form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                                <span className="section-dot bg-primary"></span>
                                <h6 className="fw-bold mb-0 text-slate-800 text-uppercase" style={{ letterSpacing: '0.04em', fontSize: '0.85rem' }}>
                                    1. Data Identitas &amp; STR
                                </h6>
                            </div>

                            <div className="row g-3 mb-4">
                                {/* NIK */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-fingerprint me-1.5 text-primary"></i> Nomor Induk Kependudukan (NIK)
                                    </label>
                                    <input
                                        type="number"
                                        className={`form-control form-control-custom ${errors.nik ? 'is-invalid' : ''}`}
                                        value={nik || ""}
                                        onChange={(e) => setNik(e.target.value)}
                                        placeholder="Ketik 16 digit NIK..."
                                    />
                                    {errors.nik && (
                                        <div className="invalid-feedback small mt-1">{errors.nik}</div>
                                    )}
                                </div>

                                {/* No STR */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-certificate me-1.5 text-emerald-600"></i> Nomor STR
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-custom ${errors.no_str ? 'is-invalid' : ''}`}
                                        value={nostr || ""}
                                        onChange={(e) => setNostr(e.target.value)}
                                        placeholder="Nomor Surat Tanda Registrasi..."
                                    />
                                    {errors.no_str && (
                                        <div className="invalid-feedback small mt-1">{errors.no_str}</div>
                                    )}
                                </div>

                                {/* Tanggal Expired STR */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-calendar-alt me-1.5 text-amber-600"></i> Tanggal Kedaluwarsa STR
                                    </label>
                                    <input
                                        type="date"
                                        className={`form-control form-control-custom ${errors.date_exprd ? 'is-invalid' : ''}`}
                                        value={dateexprd || ""}
                                        onChange={(e) => setDateExprd(e.target.value)}
                                    />
                                    {errors.date_exprd && (
                                        <div className="invalid-feedback small mt-1">{errors.date_exprd}</div>
                                    )}
                                </div>

                                {/* Foto Profil */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-image me-1.5 text-indigo-600"></i> Foto Profil Baru <span className="text-slate-500 fw-normal text-lowercase">(opsional)</span>
                                    </label>
                                    <input
                                        type="file"
                                        className={`form-control form-control-custom ${errors.image ? 'is-invalid' : ''}`}
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />
                                    {errors.image && (
                                        <div className="invalid-feedback small mt-1">{errors.image}</div>
                                    )}
                                </div>
                            </div>

                            {/* SECTION 2: Data Profil & Kontak */}
                            <div className="form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                                <span className="section-dot bg-emerald-500"></span>
                                <h6 className="fw-bold mb-0 text-slate-800 text-uppercase" style={{ letterSpacing: '0.04em', fontSize: '0.85rem' }}>
                                    2. Profil Pengguna &amp; Kontak
                                </h6>
                            </div>

                            <div className="row g-3 mb-4">
                                {/* Full Name */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-user me-1.5 text-primary"></i> Nama Lengkap &amp; Gelar <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-custom ${errors.name ? 'is-invalid' : ''}`}
                                        value={name || ""}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Nama lengkap beserta gelar..."
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback small mt-1">{errors.name}</div>
                                    )}
                                </div>

                                {/* Email Address */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-envelope me-1.5 text-primary"></i> Alamat Email <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className={`form-control form-control-custom ${errors.email ? 'is-invalid' : ''}`}
                                        value={email || ""}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="contoh@email.com"
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback small mt-1">{errors.email}</div>
                                    )}
                                </div>
                            </div>

                            {/* SECTION 3: Wilayah & Status Keanggotaan */}
                            <div className="form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                                <span className="section-dot bg-indigo-500"></span>
                                <h6 className="fw-bold mb-0 text-slate-800 text-uppercase" style={{ letterSpacing: '0.04em', fontSize: '0.85rem' }}>
                                    3. Wilayah Organisasi &amp; Status
                                </h6>
                            </div>

                            <div className="row g-3 mb-4">
                                {/* DPW (Provinsi) */}
                                <div className="col-12 col-md-4">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-landmark me-1.5 text-emerald-600"></i> DPW (Provinsi)
                                    </label>
                                    <select
                                        className={`form-select form-control-custom ${errors.province_id ? 'is-invalid' : ''}`}
                                        value={provinceID || ""}
                                        onChange={(e) => {
                                            setProvinceID(e.target.value);
                                            setCityID("");
                                        }}
                                    >
                                        <option value="">-- Pilih Wilayah DPW --</option>
                                        {(provinces || []).map((province) => (
                                             <option value={province.id} key={province.id}>
                                                 {province.name}
                                             </option>
                                        ))}
                                    </select>
                                    {errors.province_id && (
                                        <div className="invalid-feedback small mt-1">{errors.province_id}</div>
                                    )}
                                </div>

                                {/* DPC (Kota/Kab) */}
                                <div className="col-12 col-md-4">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-city me-1.5 text-indigo-600"></i> DPC (Kota/Kab)
                                    </label>
                                    <select
                                        className={`form-select form-control-custom ${errors.city_id ? 'is-invalid' : ''}`}
                                        value={cityID || ""}
                                        onChange={(e) => setCityID(e.target.value)}
                                    >
                                        <option value="">-- Pilih Cabang DPC --</option>
                                        {(cities || [])
                                            .filter((c) => !provinceID || String(c.province_id) === String(provinceID))
                                            .map((city) => (
                                                <option value={city.id} key={city.id}>
                                                    {city.name}
                                                </option>
                                            ))}
                                    </select>
                                    {errors.city_id && (
                                        <div className="invalid-feedback small mt-1">{errors.city_id}</div>
                                    )}
                                </div>

                                {/* Status Anggota */}
                                <div className="col-12 col-md-4">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-user-tag me-1.5 text-primary"></i> Status Keanggotaan
                                    </label>
                                    <select
                                        className={`form-select form-control-custom ${errors.status_anggota ? 'is-invalid' : ''}`}
                                        value={statusAnggota || ""}
                                        onChange={(e) => setStatusAnggota(e.target.value)}
                                    >
                                        <option value="">-- Pilih Status --</option>
                                        <option value="Anggota Biasa">Anggota Biasa</option>
                                        <option value="Anggota Luar Biasa">Anggota Luar Biasa</option>
                                        <option value="Anggota Kehormatan">Anggota Kehormatan</option>
                                    </select>
                                    {errors.status_anggota && (
                                        <div className="invalid-feedback small mt-1">{errors.status_anggota}</div>
                                    )}
                                </div>

                                {/* Alamat Lengkap */}
                                <div className="col-12">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-map-marker-alt me-1.5 text-danger"></i> Alamat Lengkap
                                    </label>
                                    <textarea
                                        className={`form-control form-control-custom-textarea ${errors.alamat ? 'is-invalid' : ''}`}
                                        rows={3}
                                        value={alamat || ""}
                                        onChange={(e) => setAlamat(e.target.value)}
                                        placeholder="Ketik alamat lengkap domisili / tempat tinggal..."
                                    />
                                    {errors.alamat && (
                                        <div className="invalid-feedback small mt-1">{errors.alamat}</div>
                                    )}
                                </div>
                            </div>

                            {/* SECTION 4: Keamanan Password */}
                            <div className="form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                                <span className="section-dot bg-amber-500"></span>
                                <h6 className="fw-bold mb-0 text-slate-800 text-uppercase" style={{ letterSpacing: '0.04em', fontSize: '0.85rem' }}>
                                    4. Keamanan Akun &amp; Kata Sandi <span className="text-slate-500 fw-normal text-lowercase">(opsional)</span>
                                </h6>
                            </div>

                            <div className="row g-3 mb-4">
                                {/* Password Baru (Opsional) */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-key me-1.5 text-amber-600"></i> Ganti Password <span className="text-slate-500 fw-normal text-lowercase">(kosongkan jika tidak diubah)</span>
                                    </label>
                                    <input
                                        type="password"
                                        className={`form-control form-control-custom ${errors.password ? 'is-invalid' : ''}`}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Ketik password baru jika ingin mengubah..."
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback small mt-1">{errors.password}</div>
                                    )}
                                </div>

                                {/* Password Confirmation */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                        <i className="fa fa-lock me-1.5 text-amber-600"></i> Konfirmasi Password Baru
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control form-control-custom"
                                        value={passwordConfirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        placeholder="Ketik ulang password baru..."
                                    />
                                </div>
                            </div>

                            {/* SECTION 5: Hak Akses (Role) */}
                            <div className="form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                                <span className="section-dot bg-violet-600"></span>
                                <h6 className="fw-bold mb-0 text-slate-800 text-uppercase" style={{ letterSpacing: '0.04em', fontSize: '0.85rem' }}>
                                    5. Hak Akses &amp; Peran Sistem (Roles)
                                </h6>
                            </div>

                            <div className="mb-4">
                                <div className="p-3.5 rounded-4 role-selection-box">
                                    <div className="row g-2.5">
                                        {(roles || []).map((role) => {
                                            const isChecked = rolesData.includes(role.name);
                                            return (
                                                <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={role.id}>
                                                    <div
                                                        onClick={() => handleCheckboxChange(role.name)}
                                                        className={`role-chip-card ${isChecked ? 'role-chip-active' : ''} shadow-sm`}
                                                    >
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className={`role-checkbox-circle ${isChecked ? 'circle-active' : ''}`}>
                                                                {isChecked && <i className="fa fa-check text-white"></i>}
                                                            </div>
                                                            <span className="role-chip-label text-truncate">
                                                                {role.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                {errors.roles && (
                                    <div className="text-danger small mt-2 fw-semibold">
                                        <i className="fa fa-exclamation-circle me-1"></i>
                                        {errors.roles}
                                    </div>
                                )}
                            </div>

                            {/* Submit & Reset Buttons */}
                            <div className="d-flex align-items-center gap-2.5 pt-4 border-top">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-save-action shadow-sm"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            <span>Menyimpan...</span>
                                        </>
                                    ) : (
                                        <>
                                            <i className="fa fa-save me-1.5"></i>
                                            <span>Simpan Perubahan</span>
                                        </>
                                    )}
                                </button>
                                <button
                                    type="reset"
                                    onClick={() => {
                                        setName(user.name);
                                        setNik(user.nik);
                                        setEmail(user.email);
                                        setAlamat(user.alamat);
                                        setProvinceID(user.province_id);
                                        setCityID(user.city_id);
                                        setStatusAnggota(user.status_anggota);
                                        setRolesData(user.roles.map((obj) => obj.name));
                                        setPassword("");
                                        setPasswordConfirmation("");
                                        setNostr(user.no_str);
                                        setDateExprd(user.date_exprd);
                                    }}
                                    className="btn btn-reset-custom shadow-sm"
                                >
                                    <i className="fa fa-undo me-1.5"></i>
                                    <span>Reset Formulir</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                .user-edit-container {
                    color: #1e293b;
                }

                /* Header Banner */
                .header-banner-box {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-left: 6px solid #2563eb !important;
                    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
                }
                .header-icon-wrap {
                    width: 54px;
                    height: 54px;
                    border-radius: 14px;
                    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
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
                .btn-back-users {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    color: #1e293b;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-back-users:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
                }

                /* Main Form Card */
                .edit-form-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-top: 4px solid #2563eb !important;
                    box-shadow: 0 6px 20px -2px rgba(15, 23, 42, 0.08);
                }
                .form-card-header {
                    background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
                    border-bottom: 1.5px solid #e2e8f0;
                }
                .card-icon-pill {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    flex-shrink: 0;
                }
                .bg-blue-icon-pill {
                    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                }
                .form-header-title {
                    color: #0f172a;
                    font-size: 1.05rem;
                }
                .form-header-sub {
                    color: #475569;
                    font-size: 0.78rem;
                    font-weight: 600;
                    display: block;
                }
                .badge-no-anggota-pill {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }

                /* Form Sections */
                .section-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    display: inline-block;
                }
                .form-control-custom {
                    height: 42px;
                    border-radius: 10px;
                    border: 1.5px solid #cbd5e1;
                    background-color: #ffffff;
                    font-size: 0.86rem;
                    color: #0f172a;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }
                .form-control-custom:focus {
                    background-color: #ffffff;
                    border-color: #2563eb;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
                    color: #0f172a;
                }
                .form-control-custom-textarea {
                    border-radius: 10px;
                    border: 1.5px solid #cbd5e1;
                    background-color: #ffffff;
                    font-size: 0.86rem;
                    color: #0f172a;
                    font-weight: 500;
                    padding: 10px 14px;
                    transition: all 0.2s ease;
                }
                .form-control-custom-textarea:focus {
                    background-color: #ffffff;
                    border-color: #2563eb;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
                    color: #0f172a;
                }

                /* Roles Selection Box */
                .role-selection-box {
                    background-color: #f8fafc;
                    border: 1.5px solid #e2e8f0;
                    padding: 16px;
                }
                .role-chip-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    border-radius: 10px;
                    padding: 10px 12px;
                    cursor: pointer;
                    user-select: none;
                    transition: all 0.18s ease;
                }
                .role-chip-card:hover {
                    border-color: #94a3b8;
                    background-color: #ffffff;
                    transform: translateY(-1px);
                }
                .role-chip-active {
                    background-color: #eff6ff !important;
                    border-color: #3b82f6 !important;
                    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15) !important;
                }
                .role-checkbox-circle {
                    width: 20px;
                    height: 20px;
                    border-radius: 6px;
                    border: 1.5px solid #cbd5e1;
                    background-color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 10px;
                    flex-shrink: 0;
                    transition: all 0.18s ease;
                }
                .circle-active {
                    background-color: #2563eb;
                    border-color: #2563eb;
                }
                .role-chip-label {
                    font-size: 0.82rem;
                    font-weight: 700;
                    color: #1e293b;
                }
                .role-chip-active .role-chip-label {
                    color: #1d4ed8;
                }

                /* Action buttons */
                .btn-save-action {
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    color: #ffffff;
                    border: none;
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 0.88rem;
                    padding: 10px 24px;
                    display: inline-flex;
                    align-items: center;
                    transition: all 0.2s ease;
                }
                .btn-save-action:hover {
                    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.25);
                }
                .btn-reset-custom {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    color: #475569;
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 0.88rem;
                    padding: 10px 20px;
                    display: inline-flex;
                    align-items: center;
                    transition: all 0.2s ease;
                }
                .btn-reset-custom:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                    transform: translateY(-1px);
                }
            `}</style>
        </LayoutAccount>
    );
}
