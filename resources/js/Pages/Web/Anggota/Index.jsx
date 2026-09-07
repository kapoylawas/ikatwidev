//import React
import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, Link } from "@inertiajs/inertia-react";

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
                <div className="anggota-page-wrapper" style={{ paddingTop: '80px', paddingBottom: '70px', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
                    <div className="container" style={{ maxWidth: '960px' }}>
                        
                        {/* 1. Header Hero Banner */}
                        <div
                            className="hero-anggota-banner p-4 text-white mb-4 position-relative overflow-hidden shadow-lg"
                            style={{
                                borderRadius: '20px',
                                background: 'linear-gradient(135deg, #064e3b 0%, #047857 45%, #059669 100%)',
                                boxShadow: '0 16px 36px -8px rgba(6, 78, 59, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15) inset',
                            }}
                        >
                            <div
                                className="position-absolute end-0 top-50 translate-middle-y opacity-10 pointer-events-none me-3"
                                style={{ pointerEvents: 'none' }}
                            >
                                <img src="/assets/images/logo.png" alt="IKATWI" style={{ width: '130px', height: 'auto' }} />
                            </div>

                            <div className="position-relative z-1">
                                <div
                                    className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2.5"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.16)',
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(255, 255, 255, 0.25)',
                                    }}
                                >
                                    <i className="fas fa-id-card-alt text-warning"></i>
                                    <span className="fw-bold" style={{ fontSize: '0.72rem', letterSpacing: '0.02em' }}>
                                        Direktori Resmi Organisasi
                                    </span>
                                </div>
                                <h4 className="fw-bold mb-1.5 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.25)', letterSpacing: '-0.01em' }}>
                                    Database Anggota IKATWI
                                </h4>
                                <p className="mb-0 text-white-50 small" style={{ maxWidth: '600px', lineHeight: 1.45, fontSize: '0.8rem' }}>
                                    Pencarian dan verifikasi data anggota resmi Ikatan Terapis Wicara Indonesia yang terdaftar di seluruh wilayah dan cabang.
                                </p>
                            </div>
                        </div>

                        {/* 2. Search and Filter Card */}
                        <div
                            className="card border-0 shadow-sm p-3.5 p-md-4 mb-4"
                            style={{
                                borderRadius: '20px',
                                backgroundColor: '#ffffff',
                                border: '1px solid #e2e8f0',
                            }}
                        >
                            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="rounded-circle bg-success bg-opacity-10 p-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                                        <i className="fas fa-filter text-success" style={{ fontSize: '0.85rem' }}></i>
                                    </div>
                                    <span className="fw-bold text-dark" style={{ fontSize: '0.92rem' }}>Filter & Pencarian Anggota</span>
                                </div>
                                {(searchTerm || selectedProvince || selectedCity) && (
                                    <button
                                        onClick={clearFilters}
                                        className="btn btn-sm btn-outline-danger rounded-pill px-3 py-1 d-inline-flex align-items-center gap-1.5"
                                        style={{ fontSize: '0.74rem', fontWeight: 600 }}
                                    >
                                        <i className="fas fa-undo"></i>
                                        <span>Reset Filter</span>
                                    </button>
                                )}
                            </div>

                            <div className="row g-2.5">
                                {/* Keyword Input */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label text-muted small fw-semibold mb-1" style={{ fontSize: '0.74rem' }}>
                                        Kata Kunci Pencarian
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-end-0" style={{ borderColor: '#cbd5e1' }}>
                                            <i className="fas fa-search text-muted" style={{ fontSize: '0.85rem' }}></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control border-start-0 py-2"
                                            value={searchTerm}
                                            onChange={handleInputChange}
                                            placeholder="Nama lengkap, No. Anggota, No. STR..."
                                            style={{ borderColor: '#cbd5e1', fontSize: '0.85rem' }}
                                        />
                                    </div>
                                </div>

                                {/* Province / DPW Filter */}
                                <div className="col-6 col-md-3">
                                    <label className="form-label text-muted small fw-semibold mb-1" style={{ fontSize: '0.74rem' }}>
                                        Pengurus Wilayah (DPW)
                                    </label>
                                    <select
                                        className="form-select py-2"
                                        onChange={handleProvinceChange}
                                        value={selectedProvince}
                                        style={{ borderColor: '#cbd5e1', fontSize: '0.85rem' }}
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
                                    <label className="form-label text-muted small fw-semibold mb-1" style={{ fontSize: '0.74rem' }}>
                                        Pengurus Cabang (DPC)
                                    </label>
                                    <select
                                        className="form-select py-2"
                                        onChange={handleCityChange}
                                        value={selectedCity}
                                        disabled={!selectedProvince && filteredCities.length === 0}
                                        style={{ borderColor: '#cbd5e1', fontSize: '0.85rem' }}
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

                        {/* 3. Result Banner */}
                        {hasSearched && (
                            <div
                                className="d-flex align-items-center justify-content-between p-3 rounded-3 mb-3 shadow-sm"
                                style={{
                                    backgroundColor: anggotas.length > 0 ? '#ecfdf5' : '#fffbeb',
                                    border: `1px solid ${anggotas.length > 0 ? '#a7f3d0' : '#fde68a'}`,
                                }}
                            >
                                <div className="d-flex align-items-center gap-2">
                                    <i className={`fas ${anggotas.length > 0 ? 'fa-check-circle text-success' : 'fa-info-circle text-warning'}`}></i>
                                    <span className="fw-bold" style={{ fontSize: '0.82rem', color: anggotas.length > 0 ? '#065f46' : '#92400e' }}>
                                        {anggotas.length > 0
                                            ? `Ditemukan ${anggotas.length} anggota yang sesuai`
                                            : 'Tidak ditemukan anggota dengan kriteria tersebut'}
                                    </span>
                                </div>
                                <span className="badge rounded-pill" style={{ backgroundColor: anggotas.length > 0 ? '#059669' : '#d97706', color: '#ffffff', fontSize: '0.72rem' }}>
                                    {anggotas.length} Hasil
                                </span>
                            </div>
                        )}

                        {/* 4. Table Data Card */}
                        <div
                            className="card border-0 shadow-lg overflow-hidden mb-4"
                            style={{
                                borderRadius: '20px',
                                border: '1px solid #e2e8f0',
                                backgroundColor: '#ffffff',
                            }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-between px-3.5 py-3"
                                style={{
                                    backgroundColor: '#0f172a',
                                    borderBottom: '2px solid #059669',
                                }}
                            >
                                <div className="d-flex align-items-center gap-2">
                                    <i className="fas fa-users text-success"></i>
                                    <span className="fw-bold text-white" style={{ fontSize: '0.92rem', letterSpacing: '0.01em' }}>
                                        Daftar Anggota Terdaftar
                                    </span>
                                </div>
                                <span className="text-white-50 small" style={{ fontSize: '0.72rem' }}>
                                    IKATWI Member Directory
                                </span>
                            </div>

                            <div className="card-body p-0">
                                {isLoading ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-success mb-2" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <p className="text-muted small mb-0">Sedang mencari data anggota...</p>
                                    </div>
                                ) : anggotas.length > 0 ? (
                                    <div className="table-responsive">
                                        <table className="table table-hover table-custom mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style={{ width: "50px", textAlign: "center" }}>No</th>
                                                    <th scope="col" style={{ width: "65px", textAlign: "center" }}>Foto</th>
                                                    <th scope="col" style={{ width: "130px" }}>No. Anggota</th>
                                                    <th scope="col">Nama Lengkap</th>
                                                    <th scope="col">Wilayah (DPW)</th>
                                                    <th scope="col">Cabang (DPC)</th>
                                                    <th scope="col" style={{ width: "130px", textAlign: "center" }}>Status SIP</th>
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
                                                                        width: '42px',
                                                                        height: '42px',
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
                                                                <span className="badge-no-anggota">
                                                                    {anggota.no_anggota || "-"}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div className="fw-bold text-dark" style={{ fontSize: '0.88rem' }}>
                                                                    {anggota.name}
                                                                </div>
                                                                {anggota.no_str && (
                                                                    <div className="text-muted small font-monospace" style={{ fontSize: '0.7rem' }}>
                                                                        STR: {anggota.no_str}
                                                                    </div>
                                                                )}
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center gap-1.5" style={{ fontSize: '0.82rem' }}>
                                                                    <i className="fas fa-map-marker-alt text-danger opacity-75" style={{ fontSize: '0.75rem' }}></i>
                                                                    <span>{anggota.province?.name || "-"}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center gap-1.5" style={{ fontSize: '0.82rem' }}>
                                                                    <i className="fas fa-building text-info opacity-75" style={{ fontSize: '0.75rem' }}></i>
                                                                    <span>
                                                                        {!anggota.city || anggota.city === 0
                                                                            ? "-"
                                                                            : anggota.city.name}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                {sipStatus.isActive ? (
                                                                    <span
                                                                        className="badge px-2.5 py-1.5 rounded-pill d-inline-flex align-items-center gap-1 shadow-sm"
                                                                        style={{
                                                                            backgroundColor: '#ecfdf5',
                                                                            color: '#047857',
                                                                            border: '1px solid #a7f3d0',
                                                                            fontSize: '0.72rem',
                                                                            fontWeight: 700,
                                                                        }}
                                                                    >
                                                                        <i className="fas fa-check-circle text-success"></i>
                                                                        <span>Aktif</span>
                                                                    </span>
                                                                ) : (
                                                                    <span
                                                                        className="badge px-2.5 py-1.5 rounded-pill d-inline-flex align-items-center gap-1 shadow-sm"
                                                                        style={{
                                                                            backgroundColor: '#fef2f2',
                                                                            color: '#b91c1c',
                                                                            border: '1px solid #fecaca',
                                                                            fontSize: '0.72rem',
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
                                    <div className="text-center py-5 px-3">
                                        <div
                                            className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center shadow-sm"
                                            style={{ width: '64px', height: '64px', backgroundColor: '#f1f5f9' }}
                                        >
                                            <i className="fas fa-users text-muted" style={{ fontSize: '1.75rem' }}></i>
                                        </div>
                                        <h6 className="fw-bold text-dark mb-1">
                                            {hasSearched ? "Data Tidak Ditemukan" : "Silakan Cari Data Anggota"}
                                        </h6>
                                        <p className="text-muted small mb-0" style={{ maxWidth: '420px', margin: '0 auto' }}>
                                            {hasSearched
                                                ? "Tidak ada data anggota yang cocok dengan kata kunci atau filter yang Anda pilih. Coba sesuaikan kata kunci."
                                                : "Ketik nama, nomor anggota, atau pilih wilayah DPW/DPC pada form filter di atas untuk menampilkan data anggota."}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 5. Status SIP Information Card */}
                        <div
                            className="card border-0 p-3 shadow-sm"
                            style={{
                                borderRadius: '16px',
                                backgroundColor: '#ffffff',
                                border: '1px solid #e2e8f0',
                            }}
                        >
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <i className="fas fa-info-circle text-success"></i>
                                <span className="fw-bold text-dark small" style={{ fontSize: '0.8rem' }}>
                                    Keterangan Status Surat Izin Praktik (SIP):
                                </span>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                <div className="d-flex align-items-center gap-1.5">
                                    <span
                                        className="badge px-2 py-1 rounded-pill"
                                        style={{ backgroundColor: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', fontSize: '0.68rem', fontWeight: 700 }}
                                    >
                                        <i className="fas fa-check-circle me-1"></i> Aktif
                                    </span>
                                    <span className="text-muted small" style={{ fontSize: '0.74rem' }}>
                                        Masa berlaku SIP masih aktif sesuai data KTKI/Dinkes.
                                    </span>
                                </div>
                                <div className="d-flex align-items-center gap-1.5">
                                    <span
                                        className="badge px-2 py-1 rounded-pill"
                                        style={{ backgroundColor: '#fef2f2', color: '#b91c1c', border: '1px solid #fecaca', fontSize: '0.68rem', fontWeight: 700 }}
                                    >
                                        <i className="fas fa-times-circle me-1"></i> Non Aktif SIP
                                    </span>
                                    <span className="text-muted small" style={{ fontSize: '0.74rem' }}>
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