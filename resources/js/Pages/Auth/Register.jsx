//import hook react
import React, { useState } from "react";

//import Head, usePage and Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

//import axios
import axios from "axios";

export default function Register() {
    const { errors, provinces } = usePage().props;

    // state user
    const [name, setName] = useState("");
    const [nik, setNik] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [provinceID, setProvinceID] = useState("");
    const [cityID, setCityID] = useState("");
    const [filePaktaIntegritas, setFilePaktaIntegritas] = useState("");
    const [cities, setCities] = useState([]);

    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // State untuk loading

    const adminAlan = `https://wa.me/6285752145518`;

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    //method getCityByProvince
    const getCityByProvince = async (province_id) => {
        //set state province ID
        setProvinceID(province_id);

        //get cities by province id
        axios
            .get(`/register/cities?province_id=${province_id}`)
            .then((response) => {
                setCities(response.data);
            });
    };

    const showCity = (city_id) => {
        //set state cityID
        setCityID(city_id);
    };

    //function "registerHandler"
    const registerHandler = async (e) => {
        e.preventDefault();
        
        // Set loading state to true
        setIsLoading(true);

        //register
        Inertia.post(
            "/register",
            {
                name: name,
                nik: nik,
                province_id: provinceID,
                city_id: cityID,
                email: email,
                alamat: alamat,
                filepakta: filePaktaIntegritas,
                password: password,
                password_confirmation: passwordConfirmation,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Register saved successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    // Reset loading state
                    setIsLoading(false);
                },
                onError: () => {
                    // Reset loading state jika ada error
                    setIsLoading(false);
                },
            }
        );
    };

    return (
        <>
            <Head>
                <title>Register Akun - IKATWI</title>
            </Head>
            
            <div className="min-vh-100 d-flex align-items-center justify-content-center background-ikatwi">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            {/* Header */}
                            <div className="text-center mb-4">
                                <Link href="/" className="text-decoration-none">
                                    <div className="d-flex align-items-center justify-content-center mb-3">
                                        <img 
                                            src="/assets/images/logo.png" 
                                            width="70" 
                                            alt="IKATWI Logo"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <h2 className="text-white fw-bold">IKATWI</h2>
                                </Link>
                                <p className="text-white-50">Daftar Akun Anggota Baru</p>
                            </div>

                            {/* Card Content */}
                            <div className="card shadow-lg border-0 rounded-3 glass-effect">
                                <div className="card-header ikatwi-header text-white text-center py-3 border-0 rounded-top-3">
                                    <h5 className="mb-0 fw-bold">
                                        📝 REGISTER AKUN ANGGOTA
                                    </h5>
                                </div>
                                
                                <div className="card-body p-4">
                                    {/* Alert Info */}
                                    <div className="alert alert-info border-0 shadow-sm mb-4">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <i className="fas fa-info-circle fa-lg"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <small>
                                                    Setelah Register harap konfirmasi{" "}<br></br>
                                                    <a target="_blank" href={adminAlan} className="alert-link fw-bold">
                                                        ke DPC/DPC setempat lokasi daftar
                                                    </a>{" "}
                                                    untuk verifikasi akun
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                    <form onSubmit={registerHandler}>
                                        {/* NIK */}
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold text-dark">
                                                <i className="fas fa-id-card me-2"></i>
                                                NIK (Nomor Induk Kependudukan)
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control form-control-lg ${errors.nik ? 'is-invalid' : ''}`}
                                                value={nik}
                                                onChange={(e) => setNik(e.target.value)}
                                                placeholder="Masukkan 16 digit NIK"
                                                maxLength={16}
                                            />
                                            {errors.nik && (
                                                <div className="invalid-feedback">
                                                    {errors.nik}
                                                </div>
                                            )}
                                        </div>

                                        {/* Name & Email */}
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label fw-semibold text-dark">
                                                    <i className="fas fa-user me-2"></i>
                                                    Nama Lengkap
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Nama lengkap sesuai KTP"
                                                />
                                                {errors.name && (
                                                    <div className="invalid-feedback">
                                                        {errors.name}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label fw-semibold text-dark">
                                                    <i className="fas fa-envelope me-2"></i>
                                                    Alamat Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="email@example.com"
                                                />
                                                {errors.email && (
                                                    <div className="invalid-feedback">
                                                        {errors.email}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* DPW & DPC */}
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label fw-semibold text-dark">
                                                    <i className="fas fa-map-marker-alt me-2"></i>
                                                    DPW (Provinsi)
                                                </label>
                                                <select
                                                    className={`form-select ${errors.province_id ? 'is-invalid' : ''}`}
                                                    value={provinceID}
                                                    onChange={(e) => getCityByProvince(e.target.value)}
                                                >
                                                    <option value="">-- Pilih DPW --</option>
                                                    {provinces.map((province) => (
                                                        <option value={province.id} key={province.id}>
                                                            {province.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.province_id && (
                                                    <div className="invalid-feedback">
                                                        {errors.province_id}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label fw-semibold text-dark">
                                                    <i className="fas fa-map-marker me-2"></i>
                                                    DPC (Kota/Kabupaten)
                                                </label>
                                                <select
                                                    className={`form-select ${errors.city_id ? 'is-invalid' : ''}`}
                                                    onChange={(e) => showCity(e.target.value)}
                                                >
                                                    <option value="">-- Pilih DPC --</option>
                                                    {cities.map((city, index) => (
                                                        <option key={index} value={city.id}>
                                                            {city.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.city_id && (
                                                    <div className="invalid-feedback">
                                                        {errors.city_id}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Alamat */}
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold text-dark">
                                                <i className="fas fa-home me-2"></i>
                                                Alamat Lengkap
                                            </label>
                                            <textarea
                                                className={`form-control ${errors.alamat ? 'is-invalid' : ''}`}
                                                value={alamat}
                                                onChange={(e) => setAlamat(e.target.value)}
                                                placeholder="Alamat lengkap tempat tinggal"
                                                rows="3"
                                            />
                                            {errors.alamat && (
                                                <div className="invalid-feedback">
                                                    {errors.alamat}
                                                </div>
                                            )}
                                        </div>

                                        {/* File Upload */}
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold text-dark">
                                                <i className="fas fa-file-pdf me-2"></i>
                                                Upload Pakta Integritas
                                            </label>
                                            <div className="file-upload-wrapper">
                                                <input
                                                    type="file"
                                                    className={`form-control ${errors.filepakta ? 'is-invalid' : ''}`}
                                                    accept=".pdf"
                                                    onChange={(e) => setFilePaktaIntegritas(e.target.files[0])}
                                                />
                                                <small className="form-text text-muted">
                                                    Format: PDF | Maksimal: 2MB
                                                </small>
                                            </div>
                                            {errors.filepakta && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.filepakta}
                                                </div>
                                            )}
                                        </div>

                                        {/* Password */}
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label fw-semibold text-dark">
                                                    <i className="fas fa-lock me-2"></i>
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Minimal 8 karakter"
                                                />
                                                {errors.password && (
                                                    <div className="invalid-feedback">
                                                        {errors.password}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label fw-semibold text-dark">
                                                    <i className="fas fa-lock me-2"></i>
                                                    Konfirmasi Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={passwordConfirmation}
                                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                                                    placeholder="Ulangi password"
                                                />
                                            </div>
                                        </div>

                                        {/* Checkbox Agreement */}
                                        <div className="mb-4">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={handleCheckboxChange}
                                                    id="agreementCheck"
                                                />
                                                <label className="form-check-label text-muted" htmlFor="agreementCheck">
                                                    Saya menyatakan bahwa data yang diisi adalah benar dan siap 
                                                    bertanggung jawab atas keabsahan data tersebut
                                                </label>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            className={`btn btn-ikatwi btn-lg rounded-2 px-5 w-100 fw-semibold shadow-sm ${!isChecked ? 'disabled' : ''} ${isLoading ? 'loading' : ''}`}
                                            type="submit"
                                            disabled={!isChecked || isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <div className="spinner-border spinner-border-sm me-2" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                    PROSES DAFTAR...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fas fa-user-plus me-2"></i>
                                                    DAFTAR SEKARANG
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    {/* Login Link */}
                                    <div className="text-center mt-4">
                                        <p className="text-muted mb-0">
                                            Sudah punya akun?{" "}
                                            <Link href="/login" className="text-ikatwi fw-semibold text-decoration-none">
                                                Login di sini!
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .background-ikatwi {
                    background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
                    position: relative;
                    overflow: hidden;
                    padding: 2rem 0;
                }
                
                .background-ikatwi::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
                }
                
                .glass-effect {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                .ikatwi-header {
                    background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
                }
                
                .btn-ikatwi {
                    background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
                    border: none;
                    color: white;
                    transition: all 0.3s ease;
                    padding: 12px 24px;
                    position: relative;
                    overflow: hidden;
                }
                
                .btn-ikatwi:hover:not(:disabled) {
                    background: linear-gradient(135deg, #234325 0%, #3d6a4a 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(44, 85, 48, 0.4);
                    color: white;
                }
                
                .btn-ikatwi:disabled {
                    background: #6c757d;
                    cursor: not-allowed;
                    transform: none;
                }
                
                .btn-ikatwi.loading {
                    background: linear-gradient(135deg, #234325 0%, #3d6a4a 100%);
                    cursor: wait;
                }
                
                .text-ikatwi {
                    color: #2c5530 !important;
                }
                
                .text-ikatwi:hover {
                    color: #234325 !important;
                }
                
                .form-control, .form-select {
                    border: 1px solid #e2e8f0;
                    padding: 12px 16px;
                    transition: all 0.3s ease;
                }
                
                .form-control:focus, .form-select:focus {
                    border-color: #2c5530;
                    box-shadow: 0 0 0 0.2rem rgba(44, 85, 48, 0.25);
                }
                
                .form-control-lg {
                    padding: 16px;
                }
                
                .file-upload-wrapper {
                    position: relative;
                }
                
                .alert-info {
                    background: rgba(13, 202, 240, 0.1);
                    border: 1px solid rgba(13, 202, 240, 0.2);
                }
                
                .spinner-border-sm {
                    width: 1rem;
                    height: 1rem;
                }
            `}</style>
        </>
    );
}