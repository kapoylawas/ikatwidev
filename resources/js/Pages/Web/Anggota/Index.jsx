//import React
import React, { useState } from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head } from "@inertiajs/inertia-react";

//import axios
import axios from "axios";
import Pagination from "../../../Shared/Pagination";

export default function AnggotaIndex({ provinces, cities }) {
    //define state
    const [anggotas, setAnggota] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const currentDate = new Date();

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
    };

    // Fungsi untuk mendapatkan status iuran terbaru
    const getLatestPaymentStatus = (transactions) => {
        if (transactions.length === 0) {
            return { status: 'Belum Bayar', tahun: '', isPaid: false };
        }

        // Urutkan berdasarkan tahun terbaru
        const sortedTransactions = transactions.sort((a, b) => b.tahun - a.tahun);
        const latestTransaction = sortedTransactions[0];

        return {
            status: latestTransaction.status,
            tahun: latestTransaction.tahun,
            isPaid: true
        };
    };

    return (
        <>
            <Head>
                <title>IKATWI - Daftar Anggota</title>
            </Head>
            <LayoutWeb>
                <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>
                    <div className="fade-in">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
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
                                <div className="card border-0 rounded-lg shadow-sm mb-4">
                                    <div className="card-body p-4">
                                        <div className="row g-3">
                                            <div className="col-md-6">
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
                                            <div className="col-md-3">
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
                                            <div className="col-md-3">
                                                <select
                                                    className="form-select"
                                                    onChange={handleCityChange}
                                                    value={selectedCity}
                                                >
                                                    <option value="">Semua DPC</option>
                                                    {cities.map((city) => (
                                                        <option key={city.id} value={city.id}>
                                                            {city.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
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
                                    <div className="alert alert-info mb-3">
                                        <i className="fas fa-info-circle me-2"></i>
                                        Menampilkan {anggotas.length} anggota
                                    </div>
                                )}

                                {/* Members Table */}
                                <div className="card border-0 rounded-lg shadow-sm">
                                    <div className="card-header bg-primary text-white py-3">
                                        <h5 className="mb-0">
                                            <i className="fas fa-list me-2"></i>
                                            Data Anggota
                                        </h5>
                                    </div>
                                    <div className="card-body p-0">
                                        {isLoading ? (
                                            <div className="text-center py-5">
                                                <div className="spinner-border text-primary mb-3" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                                <p className="text-muted">Memuat data anggota...</p>
                                            </div>
                                        ) : anggotas.length > 0 ? (
                                            <div className="table-responsive">
                                                <table className="table table-hover mb-0">
                                                    <thead className="bg-light">
                                                        <tr>
                                                            <th scope="col" style={{ width: "5%" }}>No</th>
                                                            <th scope="col" style={{ width: "10%" }}>Foto</th>
                                                            <th scope="col" style={{ width: "15%" }}>No Anggota</th>
                                                            <th scope="col" style={{ width: "18%" }}>Nama</th>
                                                            <th scope="col" style={{ width: "15%" }}>DPW</th>
                                                            <th scope="col" style={{ width: "15%" }}>DPC</th>
                                                            <th scope="col" style={{ width: "12%" }}>Status SIP</th>
                                                            <th scope="col" style={{ width: "10%" }}>Status Iuran</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {anggotas.map((anggota, index) => {
                                                            const paymentStatus = getLatestPaymentStatus(anggota.transaction);

                                                            return (
                                                                <tr key={index} className="align-middle">
                                                                    <td className="text-center fw-bold text-muted">
                                                                        {index + 1}
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <img
                                                                            src={anggota.image}
                                                                            className="rounded-circle border"
                                                                            width="50"
                                                                            height="50"
                                                                            alt={anggota.name}
                                                                            onError={(e) => {
                                                                                e.target.onerror = null;
                                                                                e.target.src = "/assets/images/user.png";
                                                                            }}
                                                                            style={{ objectFit: 'cover' }}
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <span className="badge bg-primary text-white fw-normal fs-6">
                                                                            {anggota.no_anggota}
                                                                        </span>
                                                                    </td>
                                                                    <td className="fw-semibold text-dark">
                                                                        {anggota.name}
                                                                    </td>
                                                                    <td>
                                                                        <span className="badge bg-info text-dark">
                                                                            {anggota.province.name}
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        {anggota.city === 0 ? (
                                                                            <span className="badge bg-warning text-dark">
                                                                                <i className="fas fa-exclamation-triangle me-1"></i>
                                                                                DPC tidak ada
                                                                            </span>
                                                                        ) : (
                                                                            <span className="badge bg-success">
                                                                                {anggota.city.name}
                                                                            </span>
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        {new Date(anggota.surat_sip.map(str => str.date_end)) >= currentDate ? (
                                                                            <span className="badge bg-success">
                                                                                <i className="fas fa-check me-1"></i>
                                                                                Aktif
                                                                            </span>
                                                                        ) : (
                                                                            <span className="badge bg-danger">
                                                                                <i className="fas fa-times me-1"></i>
                                                                                Non Aktif
                                                                            </span>
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        {!paymentStatus.isPaid ? (
                                                                            <span className="badge bg-warning text-dark">
                                                                                <i className="fas fa-clock me-1"></i>
                                                                                Belum Bayar
                                                                            </span>
                                                                        ) : (
                                                                            <span className="badge bg-success">
                                                                                <i className="fas fa-check me-1"></i>
                                                                                {paymentStatus.tahun}
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
                                            <div className="text-center py-5">
                                                <i className="fas fa-users fa-3x text-muted mb-3"></i>
                                                <h5 className="text-muted">Tidak ada data anggota</h5>
                                                <p className="text-muted">
                                                    {searchTerm || selectedProvince || selectedCity
                                                        ? "Coba ubah kata kunci atau filter pencarian"
                                                        : "Gunakan form pencarian di atas untuk menemukan anggota"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Legend */}
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <div className="card border-0 bg-light rounded-lg">
                                            <div className="card-body py-3">
                                                <h6 className="mb-3">
                                                    <i className="fas fa-info-circle me-2 text-primary"></i>
                                                    Keterangan Status:
                                                </h6>
                                                <div className="row">
                                                    <div className="col-md-3 mb-2">
                                                        <span className="badge bg-success me-2">●</span>
                                                        <small>Aktif</small>
                                                    </div>
                                                    <div className="col-md-3 mb-2">
                                                        <span className="badge bg-danger me-2">●</span>
                                                        <small>Non Aktif</small>
                                                    </div>
                                                    <div className="col-md-3 mb-2">
                                                        <span className="badge bg-warning text-dark me-2">●</span>
                                                        <small>Belum Bayar</small>
                                                    </div>
                                                    <div className="col-md-3 mb-2">
                                                        <span className="badge bg-primary me-2">●</span>
                                                        <small>No Anggota</small>
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