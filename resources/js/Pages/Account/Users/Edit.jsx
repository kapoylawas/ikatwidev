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

    //define method "handleCheckboxChange"
    const handleCheckboxChange = (e) => {
        //define data
        let data = rolesData;

        //check item already exists, if so, remove with filter
        if (data.some((name) => name === e.target.value)) {
            data = data.filter((name) => name !== e.target.value);
        } else {
            //push new item to array
            data.push(e.target.value);
        }

        //set data to state
        setRolesData(data);
    };

    //method "updateUser"
    const updateUser = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            `/account/users/${user.id}`,
            {
                //data
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
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data updated successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            }
        );
    };

    return (
        <LayoutAccount>
            <Head title={`Edit User: ${user.name} - IKATWI`} />

            <div className="user-edit-page">
                {/* Header Section */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
                    <div>
                        <h1 className="h4 text-dark fw-bold mb-1 d-flex align-items-center gap-2">
                            <i className="fa fa-user-edit text-dark"></i>
                            <span>Edit Data Pengguna</span>
                        </h1>
                        <p className="text-muted small mb-0">
                            Perbarui informasi akun, data STR, hak akses, dan wilayah keanggotaan pengguna.
                        </p>
                    </div>

                    <div>
                        <Link
                            href="/account/users"
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
                            <span>Kembali ke Daftar</span>
                        </Link>
                    </div>
                </div>

                {/* Form Card */}
                <div className="card border-0 shadow-sm" style={{ borderRadius: '12px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>
                    <div className="card-header bg-white border-bottom py-3 px-4 d-flex justify-content-between align-items-center" style={{ borderColor: '#e2e8f0' }}>
                        <span className="fw-bold text-dark">
                            <i className="fa fa-id-badge text-dark me-2"></i> Formulir Perubahan Data: {user.name}
                        </span>
                        {user.no_anggota && (
                            <span className="badge font-monospace px-2 py-1" style={{ backgroundColor: '#f1f5f9', color: '#0f172a', border: '1px solid #e2e8f0', fontSize: '0.8rem', fontWeight: 700 }}>
                                No. Anggota: {user.no_anggota}
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
                                        className={`form-control form-control-sm ${errors.nik ? 'is-invalid' : ''}`}
                                        value={nik}
                                        onChange={(e) => setNik(e.target.value)}
                                        placeholder="No Induk Kependudukan"
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem' }}
                                    />
                                    {errors.nik && (
                                        <div className="invalid-feedback small mt-1">{errors.nik}</div>
                                    )}
                                </div>

                                {/* No STR */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Nomor STR
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${errors.no_str ? 'is-invalid' : ''}`}
                                        value={nostr || ""}
                                        onChange={(e) => setNostr(e.target.value)}
                                        placeholder="Nomor Surat Tanda Registrasi"
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem' }}
                                    />
                                </div>

                                {/* Tanggal Expired STR */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Tanggal Kedaluwarsa STR
                                    </label>
                                    <input
                                        type="date"
                                        className={`form-control form-control-sm ${errors.date_exprd ? 'is-invalid' : ''}`}
                                        value={dateexprd || ""}
                                        onChange={(e) => setDateExprd(e.target.value)}
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem' }}
                                    />
                                    {errors.date_exprd && (
                                        <div className="invalid-feedback small mt-1">{errors.date_exprd}</div>
                                    )}
                                </div>

                                {/* Foto Profil */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Foto Profil Baru (Opsional)
                                    </label>
                                    <input
                                        type="file"
                                        className={`form-control form-control-sm ${errors.image ? 'is-invalid' : ''}`}
                                        onChange={(e) => setImage(e.target.files[0])}
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem', paddingTop: '7px' }}
                                    />
                                    {errors.image && (
                                        <div className="invalid-feedback small mt-1">{errors.image}</div>
                                    )}
                                </div>

                                {/* Full Name */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Nama Lengkap & Gelar <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${errors.name ? 'is-invalid' : ''}`}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Masukkan Nama Lengkap"
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem' }}
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback small mt-1">{errors.name}</div>
                                    )}
                                </div>

                                {/* Email Address */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Alamat Email <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className={`form-control form-control-sm ${errors.email ? 'is-invalid' : ''}`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="nama@email.com"
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem' }}
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback small mt-1">{errors.email}</div>
                                    )}
                                </div>

                                {/* DPW (Provinsi) */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        DPW (Provinsi)
                                    </label>
                                    <select
                                        className={`form-select form-select-sm ${errors.province_id ? 'is-invalid' : ''}`}
                                        value={provinceID}
                                        onChange={(e) => {
                                            setProvinceID(e.target.value);
                                            setCityID("");
                                        }}
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem' }}
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
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        DPC (Kota/Kab)
                                    </label>
                                    <select
                                        className={`form-select form-select-sm ${errors.city_id ? 'is-invalid' : ''}`}
                                        value={cityID}
                                        onChange={(e) => setCityID(e.target.value)}
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem' }}
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
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Status Keanggotaan
                                    </label>
                                    <select
                                        className={`form-select form-select-sm ${errors.status_anggota ? 'is-invalid' : ''}`}
                                        value={statusAnggota || ""}
                                        onChange={(e) => setStatusAnggota(e.target.value)}
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem' }}
                                    >
                                        <option value="">-- Pilih Status Keanggotaan --</option>
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
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Alamat Lengkap
                                    </label>
                                    <textarea
                                        className={`form-control ${errors.alamat ? 'is-invalid' : ''}`}
                                        rows={3}
                                        value={alamat || ""}
                                        onChange={(e) => setAlamat(e.target.value)}
                                        placeholder="Alamat Lengkap"
                                        style={{ borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem' }}
                                    />
                                    {errors.alamat && (
                                        <div className="invalid-feedback small mt-1">{errors.alamat}</div>
                                    )}
                                </div>

                                {/* Password Baru (Opsional) */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Ganti Password <span className="text-muted fw-normal">(Kosongkan jika tidak diubah)</span>
                                    </label>
                                    <input
                                        type="password"
                                        className={`form-control form-control-sm ${errors.password ? 'is-invalid' : ''}`}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Masukkan password baru"
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem' }}
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback small mt-1">{errors.password}</div>
                                    )}
                                </div>

                                {/* Password Confirmation */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        Konfirmasi Password Baru
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control form-control-sm"
                                        value={passwordConfirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        placeholder="Ulangi password baru"
                                        style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem' }}
                                    />
                                </div>

                                {/* Roles */}
                                <div className="col-12">
                                    <label className="form-label small fw-bold text-dark mb-2">
                                        Hak Akses (Role)
                                    </label>
                                    <div className="p-3 rounded" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                        <div className="d-flex flex-wrap gap-3">
                                            {(roles || []).map((role, index) => (
                                                <div className="form-check" key={index}>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value={role.name}
                                                        defaultChecked={rolesData.some((name) => name === role.name)}
                                                        onChange={handleCheckboxChange}
                                                        id={`check-${role.id}`}
                                                    />
                                                    <label
                                                        className="form-check-label small fw-semibold text-dark"
                                                        htmlFor={`check-${role.id}`}
                                                    >
                                                        {role.name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {errors.roles && (
                                        <div className="text-danger small mt-1">{errors.roles}</div>
                                    )}
                                </div>
                            </div>

                            {/* Submit & Reset Buttons */}
                            <div className="d-flex gap-2 mt-4 pt-3 border-top" style={{ borderColor: '#e2e8f0' }}>
                                <button
                                    type="submit"
                                    className="btn btn-sm d-inline-flex align-items-center gap-2 px-4 py-2 text-white border-0 shadow-sm"
                                    style={{
                                        backgroundColor: '#0f172a',
                                        borderRadius: '8px',
                                        fontWeight: 600,
                                        fontSize: '0.85rem'
                                    }}
                                >
                                    <i className="fa fa-save"></i>
                                    <span>Simpan Perubahan</span>
                                </button>
                                <button
                                    type="reset"
                                    className="btn btn-sm d-inline-flex align-items-center gap-2 px-3 py-2 shadow-sm"
                                    style={{
                                        backgroundColor: '#ffffff',
                                        border: '1px solid #cbd5e1',
                                        color: '#64748b',
                                        borderRadius: '8px',
                                        fontWeight: 600,
                                        fontSize: '0.85rem'
                                    }}
                                >
                                    <i className="fa fa-undo"></i>
                                    <span>Reset</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LayoutAccount>
    );
}
