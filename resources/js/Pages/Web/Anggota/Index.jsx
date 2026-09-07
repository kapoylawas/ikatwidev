//import React
import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head } from "@inertiajs/inertia-react";

//import axios
import axios from "axios";

export default function AnggotaIndex({ provinces, cities: allCities }) {
    //define state
    const [anggotas, setAnggota] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCities, setFilteredCities] = useState(allCities || []);

    const currentDate = new Date();

    // Filter cities berdasarkan province yang dipilih
    useEffect(() => {
        if (selectedProvince) {
            const filtered = (allCities || []).filter(city => city.province_id == selectedProvince);
            setFilteredCities(filtered);
        } else {
            setFilteredCities(allCities || []);
        }
        setSelectedCity("");
    }, [selectedProvince, allCities]);

    const searchHandler = (q, dpc, dpw) => {
        setIsLoading(true);
        setHasSearched(true);
        setAnggota([]);

        axios
            .post(`/searchAnggota`, {
                q,
                dpc,
                dpw,
            })
            .then((response) => {
                setIsLoading(false);
                if (response.data && response.data.anggota && response.data.anggota.data) {
                    setAnggota(response.data.anggota.data);
                } else {
                    setAnggota([]);
                }
            })
            .catch(() => {
                setIsLoading(false);
                setAnggota([]);
            });
    };

    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        searchHandler(term, selectedCity, selectedProvince);
    };

    const handleProvinceChange = (e) => {
        const selectedProvinceValue = e.target.value;
        setSelectedProvince(selectedProvinceValue);
        searchHandler(searchTerm, selectedCity, selectedProvinceValue);
    };

    const handleCityChange = (e) => {
        const selectedCityValue = e.target.value;
        setSelectedCity(selectedCityValue);
        searchHandler(searchTerm, selectedCityValue, selectedProvince);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedProvince("");
        setSelectedCity("");
        setAnggota([]);
        setHasSearched(false);
        setFilteredCities(allCities || []);
    };

    // Fungsi untuk memeriksa status SIP
    const getSipStatus = (suratSip) => {
        if (!suratSip || suratSip.length === 0) {
            return { isActive: false, status: 'Non Aktif SIP' };
        }

        // Ambil SIP terbaru
        const latestSip = suratSip.reduce((latest, current) => {
            return new Date(current.date_end) > new Date(latest.date_end) ? current : latest;
        });

        const isActive = new Date(latestSip.date_end) >= currentDate;

        return {
            isActive,
            status: isActive ? 'Aktif' : 'Non Aktif SIP'
        };
    };

    return (
        <>
            <Head>
                <title>IKATWI - Direktori Data Anggota</title>
            </Head>
            <LayoutWeb>
                <div className="anggota-page-wrapper" style={{ paddingTop: '82px', paddingBottom: '70px', minHeight: '100vh', backgroundColor: '#f1f5f9' }}>
                    <div className="container" style={{ maxWidth: '960px' }}>
                        
                        {/* 1. Header Hero Banner */}
                        <div
                            className="hero-anggota-banner p-4 text-white mb-4 position-relative overflow-hidden shadow-lg"
                            style={{
                                borderRadius: '22px',
                                background: 'linear-gradient(135deg, #064e3b 0%, #047857 45%, #059669 100%)',
                                boxShadow: '0 16px 36px -8px rgba(6, 78, 59, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.18) inset',
                            }}
                        >
                            <div
                                className="position-absolute end-0 top-50 translate-middle-y opacity-10 pointer-events-none me-3"
                                style={{ pointerEvents: 'none' }}
                            >
                                <img src="/assets/images/logo.png" alt="IKATWI" style={{ width: '140px', height: 'auto' }} />
                            </div>

                            <div className="position-relative z-1">
                                <div
                                    className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2.5"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.18)',
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(255, 255, 255, 0.28)',
                                    }}
                                >
                                    <i className="fas fa-id-card-alt text-warning"></i>
                                    <span className="fw-bold" style={{ fontSize: '0.74rem', letterSpacing: '0.02em' }}>
                                        Direktori Resmi Organisasi
                                    </span>
                                </div>
                                <h4 className="fw-bold mb-1.5 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)', letterSpacing: '-0.01em' }}>
                                    Database Anggota IKATWI
                                </h4>
                                <p className="mb-0 text-white-50 small" style={{ maxWidth: '600px', lineHeight: 1.5, fontSize: '0.82rem' }}>
                                    Pencarian dan verifikasi data anggota resmi Ikatan Terapis Wicara Indonesia yang terdaftar di seluruh wilayah dan cabang.
                                </p>
                            </div>
                        </div>

                        {/* 2. Search and Filter Card */}
                        <div
                            className="card border-0 shadow-md p-3.5 p-md-4 mb-4"
                            style={{
                                borderRadius: '22px',
                                backgroundColor: '#ffffff',
                                border: '1.5px solid #cbd5e1',
                                borderTop: '5px solid #059669',
                                boxShadow: '0 10px 25px -4px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.9) inset',
                            }}
                        >
                            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom" style={{ borderColor: '#e2e8f0' }}>
                                <div className="d-flex align-items-center gap-2.5">
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                                        style={{ width: '36px', height: '36px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }}
                                    >
                                        <i className="fas fa-filter text-success" style={{ fontSize: '0.9rem' }}></i>
                                    </div>
                                    <div>
                                        <div className="fw-bold text-dark" style={{ fontSize: '0.96rem', letterSpacing: '-0.01em' }}>
                                            Filter & Pencarian Anggota
                                        </div>
                                        <div className="text-muted" style={{ fontSize: '0.72rem' }}>
                                            Gunakan kolom pencarian atau filter wilayah untuk mempersempit data
                                        </div>
                                    </div>
                                </div>
                                {(searchTerm || selectedProvince || selectedCity) && (
                                    <button
                                        onClick={clearFilters}
                                        className="btn btn-sm btn-outline-danger rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-1.5 shadow-sm"
                                        style={{ fontSize: '0.76rem', fontWeight: 600 }}
                                    >
                                        <i className="fas fa-undo"></i>
                                        <span>Reset Filter</span>
                                    </button>
                                )}
                            </div>

                            <div className="row g-3">
                                {/* Keyword Input */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label fw-bold text-dark mb-1" style={{ fontSize: '0.78rem' }}>
                                        <i className="fas fa-search text-success me-1.5"></i>
                                        Kata Kunci Pencarian
                                    </label>
                                    <div className="input-group">
                                        <span
                                            className="input-group-text border-end-0"
                                            style={{
                                                backgroundColor: '#ecfdf5',
                                                borderColor: '#94a3b8',
                                                color: '#059669',
                                                borderRadius: '12px 0 0 12px',
                                            }}
                                        >
                                            <i className="fas fa-search" style={{ fontSize: '0.9rem' }}></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control border-start-0 py-2.5 ps-1"
                                            value={searchTerm}
                                            onChange={handleInputChange}
                                            placeholder="Ketik nama, No. Anggota, No. STR..."
                                            style={{
                                                borderColor: '#94a3b8',
                                                fontSize: '0.86rem',
                                                backgroundColor: '#ffffff',
                                                borderRadius: '0 12px 12px 0',
                                                fontWeight: 500,
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Province / DPW Filter */}
                                <div className="col-6 col-md-3">
                                    <label className="form-label fw-bold text-dark mb-1" style={{ fontSize: '0.78rem' }}>
                                        <i className="fas fa-map-marked-alt text-danger me-1.5"></i>
                                        Wilayah (DPW)
                                    </label>
                                    <select
                                        className="form-select py-2.5"
                                        onChange={handleProvinceChange}
                                        value={selectedProvince}
                                        style={{
                                            borderColor: '#94a3b8',
                                            fontSize: '0.86rem',
                                            backgroundColor: '#ffffff',
                                            borderRadius: '12px',
                                            fontWeight: 500,
                                        }}
                                    >
                                        <option value="">Semua DPW</option>
                                        {(provinces || []).map((province) => (
                                            <option key={province.id} value={province.id}>
                                                {province.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* City / DPC Filter */}
                                <div className="col-6 col-md-3">
                                    <label className="form-label fw-bold text-dark mb-1" style={{ fontSize: '0.78rem' }}>
                                        <i className="fas fa-building text-info me-1.5"></i>
                                        Cabang (DPC)
                                    </label>
                                    <select
                                        className="form-select py-2.5"
                                        onChange={handleCityChange}
                                        value={selectedCity}
                                        disabled={!selectedProvince && filteredCities.length === 0}
                                        style={{
                                            borderColor: '#94a3b8',
                                            fontSize: '0.86rem',
                                            backgroundColor: !selectedProvince ? '#f8fafc' : '#ffffff',
                                            borderRadius: '12px',
                                            fontWeight: 500,
                                        }}
                                    >
                                        <option value="">Semua DPC</option>
                                        {(filteredCities || []).map((city) => (
                                            <option key={city.id} value={city.id}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* 3. Result Summary Banner */}
                        {hasSearched && (
                            <div
                                className="d-flex align-items-center justify-content-between p-3 rounded-4 mb-3 shadow-sm"
                                style={{
                                    backgroundColor: anggotas.length > 0 ? '#ecfdf5' : '#fffbeb',
                                    border: `1.5px solid ${anggotas.length > 0 ? '#a7f3d0' : '#fde68a'}`,
                                }}
                            >
                                <div className="d-flex align-items-center gap-2">
                                    <i className={`fas ${anggotas.length > 0 ? 'fa-check-circle text-success' : 'fa-info-circle text-warning'}`} style={{ fontSize: '1.1rem' }}></i>
                                    <span className="fw-bold" style={{ fontSize: '0.86rem', color: anggotas.length > 0 ? '#065f46' : '#92400e' }}>
                                        {anggotas.length > 0
                                            ? `Ditemukan ${anggotas.length} data anggota yang sesuai`
                                            : 'Tidak ada data anggota yang cocok dengan kriteria tersebut'}
                                    </span>
                                </div>
                                <span
                                    className="badge px-3 py-1.5 rounded-pill shadow-sm"
                                    style={{ backgroundColor: anggotas.length > 0 ? '#059669' : '#d97706', color: '#ffffff', fontSize: '0.76rem', fontWeight: 700 }}
                                >
                                    {anggotas.length} Hasil
                                </span>
                            </div>
                        )}

                        {/* 4. Table / Results Card */}
                        <div
                            className="card border-0 shadow-lg overflow-hidden mb-4"
                            style={{
                                borderRadius: '22px',
                                border: '1.5px solid #cbd5e1',
                                backgroundColor: '#ffffff',
                                boxShadow: '0 16px 36px -8px rgba(6, 78, 59, 0.15), 0 4px 12px rgba(0, 0, 0, 0.05)',
                            }}
                        >
                            {/* Card Header */}
                            <div
                                className="d-flex align-items-center justify-content-between px-4 py-3.5"
                                style={{
                                    background: 'linear-gradient(135deg, #064e3b 0%, #047857 60%, #059669 100%)',
                                    borderBottom: '3px solid #10b981',
                                }}
                            >
                                <div className="d-flex align-items-center gap-2.5">
                                    <div className="rounded-circle p-1.5 bg-white bg-opacity-20 d-flex align-items-center justify-content-center">
                                        <i className="fas fa-users text-white" style={{ fontSize: '0.95rem' }}></i>
                                    </div>
                                    <div>
                                        <div className="fw-bold text-white mb-0" style={{ fontSize: '0.98rem', letterSpacing: '-0.01em' }}>
                                            Daftar Anggota Terdaftar
                                        </div>
                                        <div className="text-emerald-200 small" style={{ fontSize: '0.7rem', color: '#a7f3d0' }}>
                                            IKATWI Official Member Directory
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-2">
                                    <span
                                        className="badge px-3 py-1.5 rounded-pill text-white shadow-sm"
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.3)', fontSize: '0.74rem', fontWeight: 600 }}
                                    >
                                        <i className="fas fa-database me-1 text-warning"></i>
                                        {anggotas.length > 0 ? `${anggotas.length} Anggota` : 'Data Anggota'}
                                    </span>
                                </div>
                            </div>

                            <div className="card-body p-0">
                                {isLoading ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-success mb-2" style={{ width: '2.5rem', height: '2.5rem' }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <p className="text-muted fw-semibold small mb-0">Sedang mencari data anggota...</p>
                                    </div>
                                ) : anggotas.length > 0 ? (
                                    <div className="table-responsive">
                                        <table className="table table-hover table-custom mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style={{ width: "55px", textAlign: "center" }}>No</th>
                                                    <th scope="col" style={{ width: "70px", textAlign: "center" }}>Foto</th>
                                                    <th scope="col" style={{ width: "140px" }}>No. Anggota</th>
                                                    <th scope="col">Nama Lengkap</th>
                                                    <th scope="col">Wilayah (DPW)</th>
                                                    <th scope="col">Cabang (DPC)</th>
                                                    <th scope="col" style={{ width: "140px", textAlign: "center" }}>Status SIP</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {anggotas.map((anggota, index) => {
                                                    const sipStatus = getSipStatus(anggota.surat_sip);

                                                    return (
                                                        <tr key={index} className="align-middle">
                                                            <td className="text-center">
                                                                <span className="table-num-pill">{index + 1}</span>
                                                            </td>
                                                            <td className="text-center">
                                                                <div
                                                                    className="rounded-circle p-0.5 mx-auto shadow-sm"
                                                                    style={{
                                                                        width: '44px',
                                                                        height: '44px',
                                                                        background: 'linear-gradient(135deg, #10b981, #059669)',
                                                                    }}
                                                                >
                                                                    <img
                                                                        src={anggota.image || "/assets/images/user.png"}
                                                                        className="rounded-circle object-fit-cover w-100 h-100"
                                                                        alt={anggota.name}
                                                                        style={{ backgroundColor: '#ffffff', display: 'block' }}
                                                                        onError={(e) => {
                                                                            e.target.onerror = null;
                                                                            e.target.src = "/assets/images/user.png";
                                                                        }}
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="badge-no-anggota shadow-sm">
                                                                    {anggota.no_anggota || "-"}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div className="fw-bold text-dark" style={{ fontSize: '0.9rem' }}>
                                                                    {anggota.name}
                                                                </div>
                                                                {anggota.no_str && (
                                                                    <div className="text-muted small font-monospace mt-0.5" style={{ fontSize: '0.72rem' }}>
                                                                        <span className="badge bg-light text-dark border px-1.5 py-0.5 me-1">STR</span>
                                                                        {anggota.no_str}
                                                                    </div>
                                                                )}
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center gap-1.5" style={{ fontSize: '0.84rem' }}>
                                                                    <i className="fas fa-map-marked-alt text-danger opacity-75" style={{ fontSize: '0.8rem' }}></i>
                                                                    <span className="fw-semibold text-dark">{anggota.province?.name || "-"}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center gap-1.5" style={{ fontSize: '0.84rem' }}>
                                                                    <i className="fas fa-building text-info opacity-75" style={{ fontSize: '0.8rem' }}></i>
                                                                    <span className="text-dark">
                                                                        {!anggota.city || anggota.city === 0
                                                                            ? "-"
                                                                            : anggota.city.name}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                {sipStatus.isActive ? (
                                                                    <span
                                                                        className="badge px-3 py-1.5 rounded-pill d-inline-flex align-items-center gap-1.5 shadow-sm"
                                                                        style={{
                                                                            backgroundColor: '#ecfdf5',
                                                                            color: '#047857',
                                                                            border: '1.5px solid #a7f3d0',
                                                                            fontSize: '0.74rem',
                                                                            fontWeight: 700,
                                                                        }}
                                                                    >
                                                                        <i className="fas fa-check-circle text-success"></i>
                                                                        <span>Aktif</span>
                                                                    </span>
                                                                ) : (
                                                                    <span
                                                                        className="badge px-3 py-1.5 rounded-pill d-inline-flex align-items-center gap-1.5 shadow-sm"
                                                                        style={{
                                                                            backgroundColor: '#fef2f2',
                                                                            color: '#b91c1c',
                                                                            border: '1.5px solid #fecaca',
                                                                            fontSize: '0.74rem',
                                                                            fontWeight: 700,
                                                                        }}
                                                                    >
                                                                        <i className="fas fa-times-circle text-danger"></i>
                                                                        <span>Non Aktif SIP</span>
                                                                    </span>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    /* Empty State Card */
                                    <div className="text-center py-5 px-4" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
                                        <div
                                            className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center shadow-sm"
                                            style={{
                                                width: '72px',
                                                height: '72px',
                                                background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
                                                border: '2px solid #a7f3d0',
                                                color: '#059669',
                                            }}
                                        >
                                            <i className="fas fa-users" style={{ fontSize: '2rem' }}></i>
                                        </div>
                                        <h5 className="fw-bold text-dark mb-1" style={{ letterSpacing: '-0.01em' }}>
                                            {hasSearched ? "Data Anggota Tidak Ditemukan" : "Silakan Cari Data Anggota"}
                                        </h5>
                                        <p className="text-muted small mb-0" style={{ maxWidth: '460px', margin: '0 auto', lineHeight: 1.5 }}>
                                            {hasSearched
                                                ? "Tidak ada data anggota yang cocok dengan kata kunci atau filter wilayah yang Anda pilih. Silakan coba sesuaikan kata kunci."
                                                : "Ketik nama, nomor anggota, atau pilih wilayah DPW/DPC pada formulir filter di atas untuk menampilkan daftar anggota."}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 5. Status SIP Information Card */}
                        <div
                            className="card border-0 p-3.5 shadow-sm"
                            style={{
                                borderRadius: '18px',
                                backgroundColor: '#ffffff',
                                border: '1.5px solid #cbd5e1',
                                borderLeft: '5px solid #059669',
                                boxShadow: '0 6px 18px -2px rgba(0, 0, 0, 0.06)',
                            }}
                        >
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <i className="fas fa-info-circle text-success" style={{ fontSize: '1rem' }}></i>
                                <span className="fw-bold text-dark" style={{ fontSize: '0.84rem' }}>
                                    Keterangan Status Surat Izin Praktik (SIP):
                                </span>
                            </div>
                            <div className="d-flex flex-column flex-md-row gap-2.5 gap-md-4">
                                <div className="d-flex align-items-center gap-2">
                                    <span
                                        className="badge px-2.5 py-1 rounded-pill flex-shrink-0"
                                        style={{ backgroundColor: '#ecfdf5', color: '#047857', border: '1.5px solid #a7f3d0', fontSize: '0.72rem', fontWeight: 700 }}
                                    >
                                        <i className="fas fa-check-circle me-1 text-success"></i> Aktif
                                    </span>
                                    <span className="text-muted small" style={{ fontSize: '0.76rem' }}>
                                        Masa berlaku SIP masih aktif dan terdaftar resmi di KTKI/Dinkes.
                                    </span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <span
                                        className="badge px-2.5 py-1 rounded-pill flex-shrink-0"
                                        style={{ backgroundColor: '#fef2f2', color: '#b91c1c', border: '1.5px solid #fecaca', fontSize: '0.72rem', fontWeight: 700 }}
                                    >
                                        <i className="fas fa-times-circle me-1 text-danger"></i> Non Aktif SIP
                                    </span>
                                    <span className="text-muted small" style={{ fontSize: '0.76rem' }}>
                                        Masa berlaku SIP telah berakhir atau belum terdata.
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </LayoutWeb>
        </>
    );
}