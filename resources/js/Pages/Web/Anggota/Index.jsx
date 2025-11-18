//import React
import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head } from "@inertiajs/inertia-react";

//import axios
import axios from "axios";
import Pagination from "../../../Shared/Pagination";

export default function AnggotaIndex({ provinces, cities: allCities }) {
    //define state
    const [anggotas, setAnggota] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCities, setFilteredCities] = useState(allCities);

    const currentDate = new Date();

    // Filter cities berdasarkan province yang dipilih
    useEffect(() => {
        if (selectedProvince) {
            const filtered = allCities.filter(city => city.province_id == selectedProvince);
            setFilteredCities(filtered);
        } else {
            setFilteredCities(allCities);
        }
        // Reset selected city ketika province berubah
        setSelectedCity("");
    }, [selectedProvince, allCities]);

    const searchHandler = (q, dpc, dpw) => {
        setIsLoading(true);
        setAnggota([]);

        axios
            .post(`/searchAnggota`, {
                q,
                dpc,
                dpw,
            })
            .then((response) => {
                console.log("data", response);
                setIsLoading(false);
                setAnggota(response.data.anggota.data);
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
        setFilteredCities(allCities);
    };

    // Fungsi untuk mendapatkan semua status iuran
    const getPaymentStatuses = (transactions) => {
        if (!transactions || transactions.length === 0) {
            return [{ status: 'Belum Bayar', isPaid: false, tahun: null }];
        }

        // Urutkan berdasarkan tahun terbaru
        const sortedTransactions = transactions.sort((a, b) => b.tahun - a.tahun);

        return sortedTransactions.map(transaction => ({
            status: transaction.status,
            isPaid: true,
            tahun: transaction.tahun
        }));
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
                <title>IKATWI - Daftar Anggota</title>
                <style>
                    {`
                    .custom-badge-lunas {
                        background: #28a745 !important;
                        color: white !important;
                        border: none !important;
                        padding: 0.35em 0.65em !important;
                        font-size: 0.75em !important;
                        font-weight: 700 !important;
                        line-height: 1 !important;
                        text-align: center !important;
                        white-space: nowrap !important;
                        vertical-align: baseline !important;
                        border-radius: 0.25rem !important;
                    }
                    .custom-badge-nonaktif {
                        background: #dc3545 !important;
                        color: white !important;
                        border: none !important;
                        padding: 0.35em 0.65em !important;
                        font-size: 0.75em !important;
                        font-weight: 700 !important;
                        line-height: 1 !important;
                        text-align: center !important;
                        white-space: nowrap !important;
                        vertical-align: baseline !important;
                        border-radius: 0.25rem !important;
                    }
                    .custom-badge-belumbayar {
                        background: #ffc107 !important;
                        color: #212529 !important;
                        border: none !important;
                        padding: 0.35em 0.65em !important;
                        font-size: 0.75em !important;
                        font-weight: 700 !important;
                        line-height: 1 !important;
                        text-align: center !important;
                        white-space: nowrap !important;
                        vertical-align: baseline !important;
                        border-radius: 0.25rem !important;
                    }
                    .custom-badge-aktif {
                        background: #28a745 !important;
                        color: white !important;
                        border: none !important;
                        padding: 0.35em 0.65em !important;
                        font-size: 0.75em !important;
                        font-weight: 700 !important;
                        line-height: 1 !important;
                        text-align: center !important;
                        white-space: nowrap !important;
                        vertical-align: baseline !important;
                        border-radius: 0.25rem !important;
                    }
                    `}
                </style>
            </Head>
            <LayoutWeb>
                <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>
                    <div className="fade-in">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                {/* Header Section */}
                                <div className="text-center mb-4">
                                    <h4 className="font-weight-bold text-primary mb-2">
                                        <i className="fas fa-users me-2"></i>
                                        Daftar Anggota IKATWI
                                    </h4>
                                    <p className="text-muted">
                                        Temukan informasi anggota Ikatan Terapis Wicara Indonesia
                                    </p>
                                </div>

                                {/* Search and Filter Section */}
                                <div className="card border-0 rounded shadow-sm mb-4">
                                    <div className="card-body p-3">
                                        <div className="row g-2">
                                            <div className="col-md-12 mb-2">
                                                <div className="input-group">
                                                    <span className="input-group-text bg-light border-end-0">
                                                        <i className="fas fa-search text-muted"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control border-start-0"
                                                        value={searchTerm}
                                                        onChange={handleInputChange}
                                                        placeholder="Cari berdasarkan nama atau nomor anggota..."
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <select
                                                    className="form-select"
                                                    onChange={handleProvinceChange}
                                                    value={selectedProvince}
                                                >
                                                    <option value="">Semua DPW</option>
                                                    {provinces.map((province) => (
                                                        <option key={province.id} value={province.id}>
                                                            {province.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <select
                                                    className="form-select"
                                                    onChange={handleCityChange}
                                                    value={selectedCity}
                                                    disabled={!selectedProvince && filteredCities.length === 0}
                                                >
                                                    <option value="">Semua DPC</option>
                                                    {filteredCities.map((city) => (
                                                        <option key={city.id} value={city.id}>
                                                            {city.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {!selectedProvince && (
                                                    <small className="text-muted">
                                                        Pilih DPW terlebih dahulu untuk melihat DPC
                                                    </small>
                                                )}
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-12">
                                                <button
                                                    onClick={clearFilters}
                                                    className="btn btn-outline-secondary btn-sm"
                                                >
                                                    <i className="fas fa-times me-1"></i>
                                                    Hapus Filter
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Results Count */}
                                {anggotas.length > 0 && (
                                    <div className="alert alert-info mb-3 py-2">
                                        <i className="fas fa-info-circle me-2"></i>
                                        Menampilkan {anggotas.length} anggota
                                        {(selectedProvince || selectedCity || searchTerm) && (
                                            <span>
                                                {' '}dengan filter:
                                                {selectedProvince && ` DPW: ${provinces.find(p => p.id == selectedProvince)?.name}`}
                                                {selectedCity && ` DPC: ${allCities.find(c => c.id == selectedCity)?.name}`}
                                                {searchTerm && ` Pencarian: "${searchTerm}"`}
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* Members Table */}
                                <div className="card border-0 rounded shadow-sm">
                                    <div className="card-header bg-primary text-white py-2">
                                        <h5 className="mb-0">
                                            <i className="fas fa-list me-2"></i>
                                            Data Anggota
                                        </h5>
                                    </div>
                                    <div className="card-body p-0">
                                        {isLoading ? (
                                            <div className="text-center py-4">
                                                <div className="spinner-border text-primary mb-2" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                                <p className="text-muted">Memuat data anggota...</p>
                                            </div>
                                        ) : anggotas.length > 0 ? (
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-striped table-hovered mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" style={{ width: "3%" }}>No</th>
                                                            <th scope="col" style={{ width: "8%" }}>Foto</th>
                                                            <th scope="col" style={{ width: "10%" }}>No Anggota</th>
                                                            <th scope="col" style={{ width: "15%" }}>Nama</th>
                                                            <th scope="col" style={{ width: "15%" }}>DPW</th>
                                                            <th scope="col" style={{ width: "15%" }}>DPC</th>
                                                            <th scope="col" style={{ width: "14%" }}>Status SIP</th>
                                                            <th scope="col" style={{ width: "10%" }}>Status Iuran</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {anggotas.map((anggota, index) => {
                                                            const paymentStatuses = getPaymentStatuses(anggota.transaction);
                                                            const sipStatus = getSipStatus(anggota.surat_sip);

                                                            return (
                                                                <tr key={index} className="align-middle">
                                                                    <td className="text-center">
                                                                        {index + 1}
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <img
                                                                            src={anggota.image}
                                                                            className="rounded-3"
                                                                            width={"50"}
                                                                            alt={anggota.name}
                                                                            onError={(e) => {
                                                                                e.target.onerror = null;
                                                                                e.target.src = "/assets/images/user.png";
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <span className="fw-bold text-dark">
                                                                            {anggota.no_anggota}
                                                                        </span>
                                                                    </td>
                                                                    <td className="fw-semibold text-dark">
                                                                        {anggota.name}
                                                                    </td>
                                                                    <td>
                                                                        {anggota.province?.name || '-'}
                                                                    </td>
                                                                    <td>
                                                                        {!anggota.city || anggota.city === 0 ? (
                                                                            <span className="text-muted">
                                                                                DPC tidak ada
                                                                            </span>
                                                                        ) : (
                                                                            anggota.city.name
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        {sipStatus.isActive ? (
                                                                            <span className="custom-badge-aktif">
                                                                                <i className="fas fa-check-circle me-1"></i>
                                                                                Aktif
                                                                            </span>
                                                                        ) : (
                                                                            <span className="custom-badge-nonaktif">
                                                                                <i className="fas fa-times-circle me-1"></i>
                                                                                Non Aktif SIP
                                                                            </span>
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        {!paymentStatuses[0].isPaid ? (
                                                                            <span className="custom-badge-belumbayar">
                                                                                <i className="fas fa-exclamation-triangle me-1"></i>
                                                                                Belum Bayar
                                                                            </span>
                                                                        ) : (
                                                                            <div className="d-flex flex-wrap gap-1 justify-content-center">
                                                                                {paymentStatuses.map((payment, idx) => (
                                                                                    <span
                                                                                        key={idx}
                                                                                        className="custom-badge-lunas"
                                                                                        title={`Tahun ${payment.tahun}`}
                                                                                    >
                                                                                        <i className="fas fa-check me-1"></i>
                                                                                        {payment.tahun}
                                                                                    </span>
                                                                                ))}
                                                                            </div>
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        ) : (
                                            <div className="text-center py-4">
                                                <i className="fas fa-users fa-2x text-muted mb-2"></i>
                                                <h6 className="text-muted">Tidak ada data anggota</h6>
                                                <p className="text-muted small">
                                                    {searchTerm || selectedProvince || selectedCity
                                                        ? "Coba ubah kata kunci atau filter pencarian"
                                                        : "Gunakan form pencarian di atas untuk menemukan anggota"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Legend */}
                                <div className="row mt-3 mb-5">
                                    <div className="col-md-12">
                                        <div className="card border-0 bg-light rounded">
                                            <div className="card-body py-2">
                                                <h6 className="mb-2">
                                                    <i className="fas fa-info-circle me-2 text-primary"></i>
                                                    Keterangan Status:
                                                </h6>
                                                <div className="row">
                                                    <div className="col-md-4 mb-1">
                                                        <span className="custom-badge-lunas me-1">
                                                            <i className="fas fa-check"></i>
                                                        </span>
                                                        <small className="fw-semibold">Lunas (Tahun)</small>
                                                    </div>
                                                    <div className="col-md-4 mb-1">
                                                        <span className="custom-badge-nonaktif me-1">
                                                            <i className="fas fa-times"></i>
                                                        </span>
                                                        <small className="fw-semibold">Non Aktif SIP</small>
                                                    </div>
                                                    <div className="col-md-4 mb-1">
                                                        <span className="custom-badge-belumbayar me-1">
                                                            <i className="fas fa-exclamation"></i>
                                                        </span>
                                                        <small className="fw-semibold">Belum Bayar</small>
                                                    </div>
                                                </div>
                                                <div className="row mt-1">
                                                    <div className="col-12">
                                                        <small className="text-muted">
                                                            <i>Angka pada badge hijau menunjukkan tahun iuran yang sudah dibayar</i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutWeb>
        </>
    );
}