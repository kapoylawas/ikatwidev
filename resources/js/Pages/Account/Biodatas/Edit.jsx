//import react
import React, { useState, useEffect } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function UserEdit() {
    const { errors, biodata, cities, provinces } = usePage().props;

    // state user
    const [name, setName] = useState(biodata.name || "");
    const [nik, setNik] = useState(biodata.nik || "");
    const [email, setEmail] = useState(biodata.email || "");
    const [phone, setPhone] = useState(biodata.phone || "");
    const [alamat, setAlamat] = useState(biodata.alamat || "");
    const [tempatlahir, setTempatlahir] = useState(biodata.tempat_lahir || "");
    const [tgllahir, setTgllahir] = useState(biodata.tgl_lahir || "");
    const [lokasipekerjaan, setLokasipekerjaan] = useState(biodata.lokasi_pekerjaan || "");
    const [alamatTempatBekerja, setAlamatTempatBekerja] = useState(biodata.alamat_tempat_bekerja || "");
    const [provinceID, setProvinceID] = useState(biodata.province_id || "");
    const [cityID, setCityID] = useState(biodata.city_id || "");
    const [statusAnggota, setStatusAnggota] = useState(biodata.status_anggota || "Anggota Biasa");
    const [pendidikan, setPendidikan] = useState(biodata.pendidikan || "");
    const [nonlinear, setNonlinear] = useState(biodata.nonlinear || "");
    const [kepegawaian, setKepegawaian] = useState(biodata.kepegawaian || "");
    const [bekerja, setBekerja] = useState(biodata.bekerja || "");
    const [istitusi, setIstitusi] = useState(biodata.istitusi || "");
    const [almtistitusi, setAlmtistitusi] = useState(biodata.almtistitusi || "");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(biodata.image || "/assets/images/user.png");
    const [isLoading, setIsLoading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    //method updateUser
    const updateUser = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = {
            name: name,
            email: email,
            nik: nik,
            phone: phone,
            alamat: alamat,
            tempat_lahir: tempatlahir,
            tgl_lahir: tgllahir,
            lokasi_pekerjaan: lokasipekerjaan,
            status_anggota: statusAnggota,
            province_id: provinceID,
            city_id: cityID,
            pendidikan: pendidikan,
            nonlinear: nonlinear,
            kepegawaian: kepegawaian,
            bekerja: bekerja,
            istitusi: istitusi,
            almtistitusi: almtistitusi,
            alamat_tempat_bekerja: alamatTempatBekerja,
            password: password,
            password_confirmation: passwordConfirmation,
            _method: "PUT",
        };

        if (image) {
            formData.image = image;
        }

        Inertia.post(`/account/biodatas/${biodata.id}`, formData, {
            onSuccess: () => {
                Swal.fire({
                    title: "Berhasil!",
                    text: "Biodata anggota berhasil diperbarui.",
                    icon: "success",
                    confirmButtonColor: "#059669",
                }).then(() => {
                    Inertia.visit("/account/biodatas");
                });
                setIsLoading(false);
            },
            onError: () => {
                setIsLoading(false);
            },
        });
    };

    useEffect(() => {
        const unsubscribe = Inertia.on("finish", () => {
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            <Head>
                <title>Edit Biodata Anggota - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="container-fluid px-0 py-2">
                    
                    {/* Header Bar */}
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                        <div className="d-flex align-items-center gap-3">
                            <Link
                                href="/account/biodatas"
                                className="btn btn-light border d-inline-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-semibold"
                                style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                            >
                                <i className="fa fa-arrow-left"></i>
                                <span>Kembali</span>
                            </Link>
                            <div>
                                <h4 className="mb-0 fw-bold" style={{ color: '#0f172a' }}>Edit Biodata Anggota</h4>
                                <small style={{ color: '#64748b' }}>Perbarui data profil, pendidikan, dan institusi kerja</small>
                            </div>
                        </div>

                        <div className="d-flex gap-2">
                            <button
                                type="button"
                                onClick={updateUser}
                                disabled={isLoading}
                                className="btn btn-success fw-bold d-inline-flex align-items-center gap-2 px-4 py-2 rounded-3 shadow-sm"
                                style={{ backgroundColor: '#059669', borderColor: '#059669', color: '#ffffff' }}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm text-light" role="status"></span>
                                        <span>Menyimpan...</span>
                                    </>
                                ) : (
                                    <>
                                        <i className="fa fa-save"></i>
                                        <span>Simpan Perubahan</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <form onSubmit={updateUser}>
                        <div className="row g-4">
                            
                            {/* 1. Data Pribadi & Kontak */}
                            <div className="col-12 col-lg-6">
                                <div className="card border-0 shadow-sm rounded-4 h-100" style={{ backgroundColor: '#ffffff' }}>
                                    <div className="card-header bg-white py-3 border-bottom d-flex align-items-center gap-2.5">
                                        <div className="p-2 rounded-3" style={{ backgroundColor: '#ecfdf5', color: '#059669' }}>
                                            <i className="fa fa-user"></i>
                                        </div>
                                        <h6 className="mb-0 fw-bold" style={{ color: '#0f172a' }}>Data Pribadi & Kontak</h6>
                                    </div>
                                    <div className="card-body p-3.5">
                                        
                                        {/* Avatar preview & upload */}
                                        <div 
                                            className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3"
                                            style={{ backgroundColor: '#f8fafc', border: '1.5px dashed #cbd5e1' }}
                                        >
                                            <img
                                                src={imagePreview}
                                                alt="Preview Foto"
                                                className="rounded-circle"
                                                style={{ width: "64px", height: "64px", objectFit: "cover", border: '2px solid #059669', backgroundColor: '#ffffff' }}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "/assets/images/user.png";
                                                }}
                                            />
                                            <div className="flex-grow-1">
                                                <label className="form-label small fw-bold mb-1 d-block" style={{ color: '#0f172a' }}>
                                                    <i className="fa fa-camera text-success me-1.5"></i> Ganti Pas Foto (Opsional)
                                                </label>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="form-control form-control-sm"
                                                    onChange={handleImageChange}
                                                    style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                                />
                                                <small className="d-block mt-1" style={{ fontSize: "0.75rem", color: '#64748b' }}>
                                                    Format: JPG, JPEG, PNG. Maksimal 2MB.
                                                </small>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                Nama Lengkap & Gelar <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Contoh: Dobe Darmawan Ricci Yuliarna, A.Md.TW"
                                                style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                                required
                                            />
                                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                        </div>

                                        <div className="row g-2 mb-3">
                                            <div className="col-sm-6">
                                                <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                    NIK (16 Digit) <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.nik ? 'is-invalid' : ''}`}
                                                    value={nik}
                                                    onChange={(e) => setNik(e.target.value)}
                                                    maxLength={16}
                                                    placeholder="16 digit NIK KTP"
                                                    style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                                    required
                                                />
                                                {errors.nik && <div className="invalid-feedback">{errors.nik}</div>}
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                    Email Terdaftar <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="nama@email.com"
                                                    style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                                    required
                                                />
                                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                            </div>
                                        </div>

                                        <div className="row g-2 mb-3">
                                            <div className="col-sm-6">
                                                <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                    Tempat Lahir
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={tempatlahir}
                                                    onChange={(e) => setTempatlahir(e.target.value)}
                                                    placeholder="Kota / Tempat Kelahiran"
                                                    style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                    Tanggal Lahir
                                                </label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={tgllahir}
                                                    onChange={(e) => setTgllahir(e.target.value)}
                                                    style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                Nomor Telepon / WhatsApp <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Contoh: 08123456789"
                                                style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                                required
                                            />
                                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                        </div>

                                        <div className="mb-0">
                                            <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                Alamat Sesuai KTP
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                value={alamat}
                                                onChange={(e) => setAlamat(e.target.value)}
                                                placeholder="Alamat lengkap sesuai KTP"
                                                style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                            ></textarea>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* 2. Riwayat Pendidikan */}
                            <div className="col-12 col-lg-6">
                                <div className="card border-0 shadow-sm rounded-4 h-100" style={{ backgroundColor: '#ffffff' }}>
                                    <div className="card-header bg-white py-3 border-bottom d-flex align-items-center gap-2.5">
                                        <div className="p-2 rounded-3" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
                                            <i className="fa fa-graduation-cap"></i>
                                        </div>
                                        <h6 className="mb-0 fw-bold" style={{ color: '#0f172a' }}>Riwayat Pendidikan</h6>
                                    </div>
                                    <div className="card-body p-3.5">
                                        
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                Jenjang Pendidikan Terapi Wicara
                                            </label>
                                            <select
                                                className="form-select"
                                                value={pendidikan}
                                                onChange={(e) => setPendidikan(e.target.value)}
                                                style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                            >
                                                <option value="">-- Pilih Jenjang Pendidikan --</option>
                                                <option value="D3">D3 (Diploma Tiga)</option>
                                                <option value="D4">D4 (Diploma Empat)</option>
                                                <option value="S2 (Magister Terapi Wicara)">S2 (Magister Terapi Wicara)</option>
                                                <option value="S3 (Doktor Terapi Wicara)">S3 (Doktor Terapi Wicara)</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                Nama Perguruan Tinggi Terapi Wicara
                                            </label>
                                            <select
                                                className="form-select"
                                                value={istitusi}
                                                onChange={(e) => setIstitusi(e.target.value)}
                                                style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                            >
                                                <option value="">-- Pilih Perguruan Tinggi --</option>
                                                <option value="Poltekes Kemenkes Surakarta">Poltekes Kemenkes Surakarta</option>
                                                <option value="Akademi Terapi Wicara Yayasan Bina Wicara Jakarta">
                                                    Akademi Terapi Wicara Yayasan Bina Wicara Jakarta
                                                </option>
                                                <option value="Politeknik AL Islam Bandung">Politeknik AL Islam Bandung</option>
                                                <option value="Stikes Mercubaktijaya Padang">Stikes Mercubaktijaya Padang</option>
                                                <option value="Lain-Lain">Lain-Lain</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                Alamat Perguruan Tinggi Terapi Wicara
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows="2"
                                                value={almtistitusi}
                                                onChange={(e) => setAlmtistitusi(e.target.value)}
                                                placeholder="Alamat lengkap kampus almamater"
                                                style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                            ></textarea>
                                        </div>

                                        <div className="mb-0">
                                            <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                Pendidikan Non Terapi Wicara
                                            </label>
                                            <select
                                                className="form-select"
                                                value={nonlinear}
                                                onChange={(e) => setNonlinear(e.target.value)}
                                                style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                            >
                                                <option value="">-- Pilih Jenjang Non-TW --</option>
                                                <option value="Sarjana">Sarjana (S1)</option>
                                                <option value="Magister">Magister (S2)</option>
                                                <option value="Doktor">Doktor (S3)</option>
                                                <option value="Tidak">Tidak Ada</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* 3. Informasi Pekerjaan */}
                            <div className="col-12 col-lg-6">
                                <div className="card border-0 shadow-sm rounded-4 h-100" style={{ backgroundColor: '#ffffff' }}>
                                    <div className="card-header bg-white py-3 border-bottom d-flex align-items-center gap-2.5">
                                        <div className="p-2 rounded-3" style={{ color: '#7c3aed', backgroundColor: '#faf5ff' }}>
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <h6 className="mb-0 fw-bold" style={{ color: '#0f172a' }}>Informasi Pekerjaan</h6>
                                    </div>
                                    <div className="card-body p-3.5">
                                        
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                Status Kepegawaian
                                            </label>
                                            <select
                                                className="form-select"
                                                value={kepegawaian}
                                                onChange={(e) => setKepegawaian(e.target.value)}
                                                style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                            >
                                                <option value="">-- Pilih Status Kepegawaian --</option>
                                                <option value="PNS">PNS / ASN</option>
                                                <option value="PPPK">PPPK</option>
                                                <option value="Swasta">Pegawai Swasta</option>
                                                <option value="Honorer">Honorer / Kontrak</option>
                                                <option value="Mandiri">Praktik Mandiri</option>
                                                <option value="Belum Bekerja">Belum Bekerja</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                Tempat / Jenis Unit Bekerja
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={bekerja}
                                                onChange={(e) => setBekerja(e.target.value)}
                                                placeholder="Contoh: Rumah Sakit, Klinik, Sekolah, dll"
                                                style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                Nama Institusi / Faskes Tempat Bekerja
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={lokasipekerjaan}
                                                onChange={(e) => setLokasipekerjaan(e.target.value)}
                                                placeholder="Nama Rumah Sakit / Klinik / Instansi"
                                                style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                            />
                                        </div>

                                        <div className="mb-0">
                                            <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                Alamat Institusi Tempat Bekerja
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows="2"
                                                value={alamatTempatBekerja}
                                                onChange={(e) => setAlamatTempatBekerja(e.target.value)}
                                                placeholder="Alamat lengkap tempat bekerja"
                                                style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                            ></textarea>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* 4. Organisasi & Keamanan Akun */}
                            <div className="col-12 col-lg-6">
                                <div className="card border-0 shadow-sm rounded-4 h-100" style={{ backgroundColor: '#ffffff' }}>
                                    <div className="card-header bg-white py-3 border-bottom d-flex align-items-center gap-2.5">
                                        <div className="p-2 rounded-3" style={{ backgroundColor: '#fffbeb', color: '#d97706' }}>
                                            <i className="fa fa-lock"></i>
                                        </div>
                                        <h6 className="mb-0 fw-bold" style={{ color: '#0f172a' }}>Organisasi & Keamanan Akun</h6>
                                    </div>
                                    <div className="card-body p-3.5">
                                        
                                        <div className="row g-2 mb-3">
                                            <div className="col-sm-6">
                                                <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                    DPW Terdaftar
                                                </label>
                                                <select 
                                                    className="form-select" 
                                                    disabled 
                                                    value={provinceID}
                                                    style={{ backgroundColor: '#f1f5f9', color: '#334155', borderColor: '#cbd5e1' }}
                                                >
                                                    <option value="">-- DPW --</option>
                                                    {provinces.map((prov) => (
                                                        <option key={prov.id} value={prov.id}>{prov.name}</option>
                                                    ))}
                                                </select>
                                                <small className="d-block mt-1" style={{ fontSize: "0.72rem", color: '#64748b' }}>
                                                    Hubungi Admin jika ingin mutasi wilayah.
                                                </small>
                                            </div>

                                            <div className="col-sm-6">
                                                <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                                                    DPC Terdaftar
                                                </label>
                                                <select 
                                                    className="form-select" 
                                                    disabled 
                                                    value={cityID}
                                                    style={{ backgroundColor: '#f1f5f9', color: '#334155', borderColor: '#cbd5e1' }}
                                                >
                                                    <option value="">-- DPC --</option>
                                                    {cities.map((ct) => (
                                                        <option key={ct.id} value={ct.id}>{ct.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div 
                                            className="p-3 rounded-3 mb-3"
                                            style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
                                        >
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <i className="fa fa-key text-success"></i>
                                                <span className="small fw-bold" style={{ color: '#0f172a' }}>Ubah Password Akun (Opsional)</span>
                                            </div>
                                            <p className="small mb-2" style={{ fontSize: "0.76rem", color: '#64748b' }}>
                                                Biarkan kosong jika tidak ingin mengubah password akun Anda saat ini.
                                            </p>

                                            <div className="row g-2">
                                                <div className="col-sm-6">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-sm"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        placeholder="Password Baru"
                                                        autoComplete="new-password"
                                                        style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-sm"
                                                        value={passwordConfirmation}
                                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                                        placeholder="Konfirmasi Password"
                                                        autoComplete="new-password"
                                                        style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action buttons */}
                                        <div className="d-flex justify-content-end gap-2 pt-2">
                                            <Link 
                                                href="/account/biodatas" 
                                                className="btn btn-light border px-4 py-2 rounded-3 fw-semibold"
                                                style={{ backgroundColor: '#ffffff', color: '#0f172a', borderColor: '#cbd5e1' }}
                                            >
                                                Batal
                                            </Link>
                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="btn btn-success fw-bold px-4 py-2 rounded-3 shadow-sm"
                                                style={{ backgroundColor: '#059669', borderColor: '#059669', color: '#ffffff' }}
                                            >
                                                {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>
            </LayoutAccount>
        </>
    );
}
