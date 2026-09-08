import React, { useState } from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Pagination from "../../../Shared/Pagination";
import FormatPrice from "../../../Utils/FormatPrice";

export default function MonitoringIuranIndex() {
    const { users, stats, availableYears, provinces, cities, filters, roleScope } = usePage().props;

    const [tahun, setTahun] = useState(filters?.tahun || new Date().getFullYear());
    const [statusBayar, setStatusBayar] = useState(filters?.status_bayar || "all");
    const [statusAnggota, setStatusAnggota] = useState(filters?.status_anggota || "all");
    const [search, setSearch] = useState(filters?.q || "");
    const [selectedDpw, setSelectedDpw] = useState(filters?.province_id || "");
    const [selectedDpc, setSelectedDpc] = useState(filters?.city_id || "");
    const [copiedText, setCopiedText] = useState(null);

    // Filter cities based on selected DPW
    const filteredCities = selectedDpw
        ? (cities || []).filter((city) => String(city.province_id) === String(selectedDpw))
        : (cities || []);

    const handleDpwChange = (e) => {
        const dpwId = e.target.value;
        setSelectedDpw(dpwId);
        setSelectedDpc("");
    };

    const handleFilterSubmit = (e) => {
        if (e) e.preventDefault();
        Inertia.get(
            "/account/monitoring-iuran",
            {
                tahun: tahun,
                status_bayar: statusBayar,
                status_anggota: statusAnggota,
                q: search,
                province_id: selectedDpw,
                city_id: selectedDpc,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const handleYearChange = (newYear) => {
        setTahun(newYear);
        Inertia.get(
            "/account/monitoring-iuran",
            {
                tahun: newYear,
                status_bayar: statusBayar,
                status_anggota: statusAnggota,
                q: search,
                province_id: selectedDpw,
                city_id: selectedDpc,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const handleStatusBayarChange = (newStatus) => {
        setStatusBayar(newStatus);
        Inertia.get(
            "/account/monitoring-iuran",
            {
                tahun: tahun,
                status_bayar: newStatus,
                status_anggota: statusAnggota,
                q: search,
                province_id: selectedDpw,
                city_id: selectedDpc,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const handleReset = () => {
        const defaultYear = new Date().getFullYear();
        setTahun(defaultYear);
        setStatusBayar("all");
        setStatusAnggota("all");
        setSearch("");
        setSelectedDpw("");
        setSelectedDpc("");
        Inertia.get(
            "/account/monitoring-iuran",
            { tahun: defaultYear },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopiedText(type);
        setTimeout(() => setCopiedText(null), 1800);
    };

    const exportUrl = `/account/monitoring-iuran/export?tahun=${tahun}&status_bayar=${statusBayar}&status_anggota=${statusAnggota}&q=${encodeURIComponent(search || "")}&province_id=${selectedDpw || ""}&city_id=${selectedDpc || ""}`;

    return (
        <LayoutAccount>
            <Head title={`Monitoring Iuran Tahun ${tahun} - IKATWI`} />

            <div className="monitoring-iuran-page">
                {/* Header Section */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
                    <div>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                            <h1 className="h4 text-dark fw-bold mb-0 d-flex align-items-center gap-2">
                                <i className="fa fa-chart-line text-success"></i>
                                <span>Monitoring Iuran Anggota</span>
                            </h1>
                            <span
                                className="badge rounded-pill px-3 py-1.5 fw-bold"
                                style={{
                                    backgroundColor: '#ecfdf5',
                                    color: '#059669',
                                    border: '1px solid #a7f3d0',
                                    fontSize: '0.82rem'
                                }}
                            >
                                <i className="fa fa-calendar-alt me-1"></i> Tahun {tahun}
                            </span>
                        </div>
                        <p className="text-muted small mb-0 mt-1">
                            Pantau status pelunasan iuran tahunan anggota IKATWI secara transparan dan akurat.
                        </p>
                    </div>

                    <div className="d-flex gap-2 align-items-center flex-wrap">
                        <a
                            href={exportUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm d-inline-flex align-items-center gap-2 px-3 py-2 text-white shadow-sm border-0"
                            style={{
                                backgroundColor: '#16a34a',
                                borderRadius: '8px',
                                fontWeight: 600,
                                fontSize: '0.84rem'
                            }}
                        >
                            <i className="fa fa-file-excel"></i>
                            <span>Export Excel</span>
                        </a>

                        <Link
                            href="/account/tagihan"
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
                            <i className="fa fa-receipt text-muted"></i>
                            <span>Pusat Tagihan</span>
                        </Link>
                    </div>
                </div>

                {/* Quick Year Selector Chips */}
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '14px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>
                    <div className="card-body p-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                            <span className="small fw-bold text-muted me-1">
                                <i className="fa fa-history me-1"></i>Pilih Tahun:
                            </span>
                            {availableYears.map((yr) => (
                                <button
                                    key={yr}
                                    type="button"
                                    onClick={() => handleYearChange(yr)}
                                    className={`btn btn-sm px-3 py-1.5 rounded-pill fw-semibold border transition-all ${
                                        Number(tahun) === Number(yr)
                                            ? "btn-success text-white shadow-sm"
                                            : "btn-light text-dark"
                                    }`}
                                    style={{
                                        fontSize: '0.82rem',
                                        borderColor: Number(tahun) === Number(yr) ? '#059669' : '#e2e8f0'
                                    }}
                                >
                                    {Number(yr) === new Date().getFullYear() ? `${yr} (Berjalan)` : yr}
                                </button>
                            ))}
                        </div>

                        <div className="d-flex align-items-center gap-1.5 flex-wrap">
                            <span className="small fw-bold text-muted me-1">Status:</span>
                            <button
                                type="button"
                                onClick={() => handleStatusBayarChange("all")}
                                className={`btn btn-sm px-2.5 py-1 rounded-pill ${statusBayar === "all" ? "btn-dark text-white" : "btn-light text-muted"}`}
                                style={{ fontSize: '0.78rem' }}
                            >
                                Semua ({stats.total_anggota})
                            </button>
                            <button
                                type="button"
                                onClick={() => handleStatusBayarChange("paid")}
                                className={`btn btn-sm px-2.5 py-1 rounded-pill ${statusBayar === "paid" ? "btn-success text-white" : "btn-light text-success"}`}
                                style={{ fontSize: '0.78rem', border: statusBayar === "paid" ? 'none' : '1px solid #a7f3d0' }}
                            >
                                <i className="fa fa-check-circle me-1"></i>Lunas ({stats.total_lunas})
                            </button>
                            <button
                                type="button"
                                onClick={() => handleStatusBayarChange("unpaid")}
                                className={`btn btn-sm px-2.5 py-1 rounded-pill ${statusBayar === "unpaid" ? "btn-danger text-white" : "btn-light text-danger"}`}
                                style={{ fontSize: '0.78rem', border: statusBayar === "unpaid" ? 'none' : '1px solid #fecaca' }}
                            >
                                <i className="fa fa-times-circle me-1"></i>Belum Bayar ({stats.total_belum_bayar})
                            </button>
                            {stats.total_bebas_iuran > 0 && (
                                <button
                                    type="button"
                                    onClick={() => handleStatusBayarChange("exempt")}
                                    className={`btn btn-sm px-2.5 py-1 rounded-pill ${statusBayar === "exempt" ? "btn-warning text-dark" : "btn-light text-warning"}`}
                                    style={{ fontSize: '0.78rem', border: statusBayar === "exempt" ? 'none' : '1px solid #fde68a' }}
                                >
                                    <i className="fa fa-star me-1"></i>Kehormatan ({stats.total_bebas_iuran})
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* 4 KPI Summary Cards */}
                <div className="row g-3 mb-4">
                    {/* Card 1: Total Anggota Terverifikasi */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="card border-0 shadow-sm h-100 kpi-card kpi-blue">
                            <div className="card-body p-3.5 d-flex align-items-center justify-content-between">
                                <div>
                                    <span className="kpi-label text-blue-label">Total Anggota</span>
                                    <h3 className="kpi-value text-blue-dark mb-0">{stats.total_anggota.toLocaleString('id-ID')}</h3>
                                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>Anggota resmi terverifikasi</small>
                                </div>
                                <div className="kpi-icon-wrap bg-blue-icon text-white">
                                    <i className="fa fa-users"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Sudah Bayar (Lunas) */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="card border-0 shadow-sm h-100 kpi-card kpi-emerald">
                            <div className="card-body p-3.5">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div>
                                        <span className="kpi-label text-emerald-label">Sudah Bayar ({tahun})</span>
                                        <h3 className="kpi-value text-emerald-dark mb-0">{stats.total_lunas.toLocaleString('id-ID')}</h3>
                                    </div>
                                    <div className="kpi-icon-wrap bg-emerald-icon text-white">
                                        <i className="fa fa-check-double"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="progress flex-grow-1 me-2" style={{ height: '6px', backgroundColor: '#e2e8f0', borderRadius: '4px' }}>
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{ width: `${Math.min(100, stats.persentase_lunas)}%` }}
                                        ></div>
                                    </div>
                                    <span className="badge bg-success bg-opacity-10 text-success fw-bold" style={{ fontSize: '0.72rem' }}>
                                        {stats.persentase_lunas}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Belum Membayar */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="card border-0 shadow-sm h-100 kpi-card kpi-rose">
                            <div className="card-body p-3.5 d-flex align-items-center justify-content-between">
                                <div>
                                    <span className="kpi-label text-rose-label">Belum Bayar ({tahun})</span>
                                    <h3 className="kpi-value text-rose-dark mb-0">{stats.total_belum_bayar.toLocaleString('id-ID')}</h3>
                                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>
                                        {stats.total_anggota > 0 ? `${(100 - stats.persentase_lunas).toFixed(1)}% belum lunas` : '0%'}
                                    </small>
                                </div>
                                <div className="kpi-icon-wrap bg-rose-icon text-white">
                                    <i className="fa fa-exclamation-circle"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Total Dana Iuran Terkumpul */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="card border-0 shadow-sm h-100 kpi-card kpi-amber">
                            <div className="card-body p-3.5 d-flex align-items-center justify-content-between">
                                <div>
                                    <span className="kpi-label text-amber-label">Dana Terkumpul ({tahun})</span>
                                    <h4 className="kpi-value text-amber-dark mb-0" style={{ fontSize: '1.25rem' }}>
                                        {FormatPrice(stats.total_nominal || 0)}
                                    </h4>
                                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>Total penerimaan iuran</small>
                                </div>
                                <div className="kpi-icon-wrap bg-amber-icon text-white">
                                    <i className="fa fa-hand-holding-usd"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter & Search Bar */}
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '14px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>
                    <div className="card-body p-3.5">
                        <form onSubmit={handleFilterSubmit} className="row g-3 align-items-end">
                            {/* Search Keyword */}
                            <div className="col-12 col-md-4 col-lg-3">
                                <label className="form-label small fw-bold text-dark mb-1">
                                    <i className="fa fa-search me-1 text-muted"></i>Pencarian
                                </label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Nama, No. KTA, NIK, Email..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    style={{ height: '38px', borderRadius: '8px', borderColor: '#cbd5e1', fontSize: '0.84rem' }}
                                />
                            </div>

                            {/* Status Bayar Dropdown */}
                            <div className="col-6 col-md-4 col-lg-2">
                                <label className="form-label small fw-bold text-dark mb-1">
                                    <i className="fa fa-filter me-1 text-muted"></i>Status Iuran
                                </label>
                                <select
                                    className="form-select form-select-sm"
                                    value={statusBayar}
                                    onChange={(e) => setStatusBayar(e.target.value)}
                                    style={{ height: '38px', borderRadius: '8px', borderColor: '#cbd5e1', fontSize: '0.84rem' }}
                                >
                                    <option value="all">Semua Status</option>
                                    <option value="paid">LUNAS (Sudah Bayar)</option>
                                    <option value="unpaid">BELUM BAYAR</option>
                                    <option value="exempt">Bebas Iuran (Kehormatan)</option>
                                </select>
                            </div>

                            {/* Status Anggota Dropdown */}
                            <div className="col-6 col-md-4 col-lg-2">
                                <label className="form-label small fw-bold text-dark mb-1">
                                    <i className="fa fa-user-tag me-1 text-muted"></i>Tipe Anggota
                                </label>
                                <select
                                    className="form-select form-select-sm"
                                    value={statusAnggota}
                                    onChange={(e) => setStatusAnggota(e.target.value)}
                                    style={{ height: '38px', borderRadius: '8px', borderColor: '#cbd5e1', fontSize: '0.84rem' }}
                                >
                                    <option value="all">Semua Tipe</option>
                                    <option value="Anggota Biasa">Anggota Biasa</option>
                                    <option value="Anggota Baru">Anggota Baru</option>
                                    <option value="Anggota Muda">Anggota Muda</option>
                                    <option value="Anggota Kehormatan">Anggota Kehormatan</option>
                                </select>
                            </div>

                            {/* DPW Selector (if Superadmin) */}
                            {roleScope.isSuperAdmin && (
                                <div className="col-6 col-md-4 col-lg-2">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        <i className="fa fa-map me-1 text-muted"></i>DPW (Provinsi)
                                    </label>
                                    <select
                                        className="form-select form-select-sm"
                                        value={selectedDpw}
                                        onChange={handleDpwChange}
                                        style={{ height: '38px', borderRadius: '8px', borderColor: '#cbd5e1', fontSize: '0.84rem' }}
                                    >
                                        <option value="">Semua DPW</option>
                                        {provinces.map((prov) => (
                                            <option key={prov.id} value={prov.id}>
                                                {prov.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {/* DPC Selector (if Superadmin or Admin Wilayah) */}
                            {(roleScope.isSuperAdmin || roleScope.isAdminWilayah) && (
                                <div className="col-6 col-md-4 col-lg-2">
                                    <label className="form-label small fw-bold text-dark mb-1">
                                        <i className="fa fa-city me-1 text-muted"></i>DPC (Kota/Kab)
                                    </label>
                                    <select
                                        className="form-select form-select-sm"
                                        value={selectedDpc}
                                        onChange={(e) => setSelectedDpc(e.target.value)}
                                        style={{ height: '38px', borderRadius: '8px', borderColor: '#cbd5e1', fontSize: '0.84rem' }}
                                    >
                                        <option value="">Semua DPC</option>
                                        {filteredCities.map((city) => (
                                            <option key={city.id} value={city.id}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="col-12 col-md-4 col-lg-auto ms-auto d-flex gap-2">
                                <button
                                    type="submit"
                                    className="btn btn-sm btn-success px-3 d-inline-flex align-items-center gap-1.5 shadow-sm flex-grow-1 flex-md-grow-0"
                                    style={{ height: '38px', borderRadius: '8px', fontWeight: 600, fontSize: '0.84rem' }}
                                >
                                    <i className="fa fa-filter"></i>
                                    <span>Terapkan Filter</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="btn btn-sm btn-light border px-3 d-inline-flex align-items-center gap-1.5"
                                    style={{ height: '38px', borderRadius: '8px', fontWeight: 600, fontSize: '0.84rem' }}
                                    title="Reset Semua Filter"
                                >
                                    <i className="fa fa-redo"></i>
                                    <span>Reset</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Table Data Card */}
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '14px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                    <div className="card-header bg-white border-bottom py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2" style={{ borderColor: '#e2e8f0' }}>
                        <div className="d-flex align-items-center gap-2">
                            <i className="fa fa-list text-muted"></i>
                            <span className="fw-bold text-dark">
                                Daftar Pembayaran Iuran Anggota — Tahun {tahun}
                            </span>
                            <span
                                className="px-2.5 py-0.5 rounded-pill fw-semibold ms-1"
                                style={{ backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0', fontSize: '0.75rem' }}
                            >
                                {users.total} Data Ditemukan
                            </span>
                        </div>

                        <div className="small text-muted">
                            Halaman {users.current_page} dari {users.last_page}
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0" style={{ fontSize: '0.85rem' }}>
                            <thead className="table-light" style={{ borderColor: '#e2e8f0', color: '#475569', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                                <tr>
                                    <th className="px-3 py-3 text-center" style={{ width: '50px' }}>No</th>
                                    <th className="py-3">Anggota</th>
                                    <th className="py-3">Wilayah (DPW & DPC)</th>
                                    <th className="py-3">Kontak</th>
                                    <th className="py-3">Status Iuran {tahun}</th>
                                    <th className="px-3 py-3 text-center" style={{ width: '120px' }}>Rincian</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.data.length > 0 ? (
                                    users.data.map((item, index) => (
                                        <tr key={item.id} style={{ borderColor: '#f1f5f9' }}>
                                            {/* No */}
                                            <td className="px-3 py-3 text-center text-muted fw-semibold">
                                                {users.from + index}
                                            </td>

                                            {/* Anggota Info */}
                                            <td className="py-3">
                                                <div className="d-flex align-items-center gap-2.5">
                                                    <img
                                                        src={item.image ? `/storage/users/${item.image}` : "/assets/images/user.png"}
                                                        alt={item.name}
                                                        className="rounded-circle border"
                                                        style={{ width: '38px', height: '38px', objectFit: 'cover', flexShrink: 0 }}
                                                        onError={(e) => { e.target.src = "/assets/images/user.png"; }}
                                                    />
                                                    <div>
                                                        <div className="fw-bold text-dark" style={{ fontSize: '0.88rem' }}>
                                                            {item.name}
                                                        </div>
                                                        <div className="d-flex align-items-center gap-2 mt-1 flex-wrap">
                                                            {item.no_anggota ? (
                                                                <span
                                                                    className="d-inline-flex align-items-center gap-1 px-2.5 py-0.5 rounded-pill shadow-2xs"
                                                                    style={{
                                                                        backgroundColor: '#f8fafc',
                                                                        border: '1px solid #cbd5e1',
                                                                        color: '#1e293b',
                                                                        fontSize: '0.73rem',
                                                                        fontWeight: 600
                                                                    }}
                                                                >
                                                                    <i className="fa fa-id-badge" style={{ color: '#059669', fontSize: '0.72rem' }}></i>
                                                                    <span>KTA: {item.no_anggota}</span>
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-link p-0 ms-0.5"
                                                                        style={{ color: '#64748b' }}
                                                                        onClick={() => handleCopy(item.no_anggota, `kta-${item.id}`)}
                                                                        title="Salin No KTA"
                                                                    >
                                                                        <i className={`fa ${copiedText === `kta-${item.id}` ? 'fa-check text-success' : 'fa-copy'}`} style={{ fontSize: '0.7rem' }}></i>
                                                                    </button>
                                                                </span>
                                                            ) : (
                                                                <span
                                                                    className="d-inline-flex align-items-center px-2 py-0.5 rounded-pill"
                                                                    style={{
                                                                        backgroundColor: '#f1f5f9',
                                                                        border: '1px solid #e2e8f0',
                                                                        color: '#64748b',
                                                                        fontSize: '0.72rem',
                                                                        fontWeight: 500
                                                                    }}
                                                                >
                                                                    KTA: -
                                                                </span>
                                                            )}

                                                            <span
                                                                className="d-inline-flex align-items-center px-2.5 py-0.5 rounded-pill fw-semibold"
                                                                style={{
                                                                    backgroundColor:
                                                                        item.status_anggota === "Anggota Baru" ? "#eff6ff" :
                                                                        item.status_anggota === "Anggota Muda" ? "#faf5ff" :
                                                                        item.status_anggota === "Anggota Kehormatan" ? "#fffbeb" :
                                                                        "#f0fdf4",
                                                                    color:
                                                                        item.status_anggota === "Anggota Baru" ? "#1d4ed8" :
                                                                        item.status_anggota === "Anggota Muda" ? "#7e22ce" :
                                                                        item.status_anggota === "Anggota Kehormatan" ? "#b45309" :
                                                                        "#15803d",
                                                                    border:
                                                                        item.status_anggota === "Anggota Baru" ? "1px solid #bfdbfe" :
                                                                        item.status_anggota === "Anggota Muda" ? "1px solid #e9d5ff" :
                                                                        item.status_anggota === "Anggota Kehormatan" ? "1px solid #fde68a" :
                                                                        "1px solid #bbf7d0",
                                                                    fontSize: '0.71rem'
                                                                }}
                                                            >
                                                                {item.status_anggota}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Wilayah */}
                                            <td className="py-3">
                                                <div className="fw-semibold text-dark" style={{ fontSize: '0.82rem' }}>
                                                    {item.province?.name ? `DPW ${item.province.name}` : '-'}
                                                </div>
                                                <small className="text-muted d-block">
                                                    {item.city?.name ? `DPC ${item.city.name}` : '-'}
                                                </small>
                                            </td>

                                            {/* Kontak */}
                                            <td className="py-3">
                                                {item.email && (
                                                    <div className="text-truncate" style={{ maxWidth: '180px' }} title={item.email}>
                                                        <a href={`mailto:${item.email}`} className="text-decoration-none text-dark small">
                                                            <i className="fa fa-envelope text-muted me-1"></i>{item.email}
                                                        </a>
                                                    </div>
                                                )}
                                                {item.phone && (
                                                    <div className="mt-0.5">
                                                        <a
                                                            href={`https://wa.me/${item.phone.replace(/^0/, '62').replace(/\D/g, '')}`}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-decoration-none text-success small fw-semibold d-inline-flex align-items-center gap-1"
                                                            title="Chat WhatsApp"
                                                        >
                                                            <i className="fab fa-whatsapp"></i>
                                                            <span>{item.phone}</span>
                                                        </a>
                                                    </div>
                                                )}
                                                {!item.email && !item.phone && <span className="text-muted small">-</span>}
                                            </td>

                                            {/* Status Iuran */}
                                            <td className="py-3">
                                                {item.is_exempt ? (
                                                    <span className="badge rounded-pill px-2.5 py-1.5" style={{ backgroundColor: '#fef3c7', color: '#b45309', border: '1px solid #fde68a', fontSize: '0.75rem', fontWeight: 600 }}>
                                                        <i className="fa fa-star me-1 text-warning"></i> Bebas Iuran (Kehormatan)
                                                    </span>
                                                ) : item.is_paid ? (
                                                    <div>
                                                        <span className="badge rounded-pill px-2.5 py-1.5" style={{ backgroundColor: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', fontSize: '0.75rem', fontWeight: 600 }}>
                                                            <i className="fa fa-check-circle me-1" style={{ color: '#10b981' }}></i> LUNAS ({FormatPrice(item.paid_amount || item.expected_amount)})
                                                        </span>
                                                        {item.paid_at && (
                                                            <div className="text-muted mt-1" style={{ fontSize: '0.72rem' }}>
                                                                <i className="fa fa-clock me-1"></i>{item.paid_at}
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : item.payment_status === "UNPAID_PENDING" ? (
                                                    <div>
                                                        <span className="badge rounded-pill px-2.5 py-1.5" style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe', fontSize: '0.75rem', fontWeight: 600 }}>
                                                            <i className="fa fa-hourglass-half me-1 text-primary"></i> Menunggu Bayar
                                                        </span>
                                                        <div className="text-muted mt-1" style={{ fontSize: '0.72rem' }}>
                                                            Tagihan: {FormatPrice(item.expected_amount)}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <span className="badge rounded-pill px-2.5 py-1.5" style={{ backgroundColor: '#fef2f2', color: '#b91c1c', border: '1px solid #fecaca', fontSize: '0.75rem', fontWeight: 600 }}>
                                                            <i className="fa fa-times-circle me-1 text-danger"></i> BELUM BAYAR
                                                        </span>
                                                        <div className="text-muted mt-1" style={{ fontSize: '0.72rem' }}>
                                                            Tagihan: {FormatPrice(item.expected_amount)}
                                                        </div>
                                                    </div>
                                                )}
                                            </td>

                                            {/* Rincian / Action */}
                                            <td className="px-3 py-3 text-center">
                                                {item.invoice ? (
                                                    <Link
                                                        href={`/account/transactions/${item.invoice}`}
                                                        className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1 px-2.5 py-1 rounded-pill"
                                                        style={{ fontSize: '0.75rem' }}
                                                        title="Lihat Invoice Transaksi"
                                                    >
                                                        <i className="fa fa-eye"></i>
                                                        <span>Invoice</span>
                                                    </Link>
                                                ) : (
                                                    <span className="text-muted small">-</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="text-center py-5">
                                            <div className="d-flex flex-column align-items-center justify-content-center">
                                                <div className="mb-3 p-3 rounded-circle" style={{ backgroundColor: '#f1f5f9' }}>
                                                    <i className="fa fa-search text-muted" style={{ fontSize: '2rem' }}></i>
                                                </div>
                                                <h6 className="fw-bold text-dark mb-1">Tidak Ada Data Ditemukan</h6>
                                                <p className="text-muted small mb-3">
                                                    Tidak ada anggota yang sesuai dengan kriteria filter tahun {tahun} atau kata kunci pencarian.
                                                </p>
                                                <button
                                                    type="button"
                                                    onClick={handleReset}
                                                    className="btn btn-sm btn-outline-secondary px-3"
                                                    style={{ borderRadius: '8px', fontSize: '0.82rem' }}
                                                >
                                                    <i className="fa fa-redo me-1"></i> Reset Semua Filter
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {users.data.length > 0 && (
                        <div className="card-footer bg-white border-top py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2" style={{ borderColor: '#e2e8f0' }}>
                            <div className="small text-muted">
                                Menampilkan <span className="fw-bold text-dark">{users.from || 0}</span> sampai <span className="fw-bold text-dark">{users.to || 0}</span> dari <span className="fw-bold text-dark">{users.total}</span> anggota
                            </div>
                            <Pagination links={users.links} align="end" />
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .monitoring-iuran-page {
                    animation: fadeIn 0.25s ease-in-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(6px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .kpi-card {
                    border-radius: 14px;
                    transition: transform 0.15s ease, box-shadow 0.15s ease;
                }
                .kpi-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 18px rgba(0,0,0,0.06) !important;
                }
                .kpi-label {
                    display: block;
                    font-size: 0.74rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    margin-bottom: 2px;
                }
                .kpi-value {
                    font-weight: 800;
                    letter-spacing: -0.02em;
                }
                .kpi-icon-wrap {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    flex-shrink: 0;
                }

                /* Blue KPI */
                .kpi-blue { border: 1.5px solid #bfdbfe !important; background: #ffffff; }
                .text-blue-label { color: #1d4ed8; }
                .text-blue-dark { color: #1e3a8a; }
                .bg-blue-icon { background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25); }

                /* Emerald KPI */
                .kpi-emerald { border: 1.5px solid #a7f3d0 !important; background: #ffffff; }
                .text-emerald-label { color: #047857; }
                .text-emerald-dark { color: #064e3b; }
                .bg-emerald-icon { background: linear-gradient(135deg, #059669 0%, #047857 100%); box-shadow: 0 4px 10px rgba(5, 150, 105, 0.25); }

                /* Rose KPI */
                .kpi-rose { border: 1.5px solid #fecaca !important; background: #ffffff; }
                .text-rose-label { color: #be123c; }
                .text-rose-dark { color: #881337; }
                .bg-rose-icon { background: linear-gradient(135deg, #e11d48 0%, #be123c 100%); box-shadow: 0 4px 10px rgba(225, 29, 72, 0.25); }

                /* Amber KPI */
                .kpi-amber { border: 1.5px solid #fde68a !important; background: #ffffff; }
                .text-amber-label { color: #b45309; }
                .text-amber-dark { color: #78350f; }
                .bg-amber-icon { background: linear-gradient(135deg, #d97706 0%, #b45309 100%); box-shadow: 0 4px 10px rgba(217, 119, 6, 0.25); }
            `}</style>
        </LayoutAccount>
    );
}
