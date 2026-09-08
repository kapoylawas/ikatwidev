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
    const [search, setSearch] = useState(filters?.q || "");
    const [selectedDpw, setSelectedDpw] = useState(filters?.province_id || "");
    const [selectedDpc, setSelectedDpc] = useState(filters?.city_id || "");

    // Filter cities based on selected DPW
    const filteredCities = selectedDpw
        ? (cities || []).filter((city) => String(city.province_id) === String(selectedDpw))
        : (cities || []);

    const executeFilter = (overrides = {}) => {
        const queryParams = {
            tahun: overrides.tahun !== undefined ? overrides.tahun : tahun,
            status_bayar: overrides.status_bayar !== undefined ? overrides.status_bayar : statusBayar,
            q: overrides.q !== undefined ? overrides.q : search,
            province_id: overrides.province_id !== undefined ? overrides.province_id : selectedDpw,
            city_id: overrides.city_id !== undefined ? overrides.city_id : selectedDpc,
        };

        Inertia.get("/account/monitoring-iuran", queryParams, {
            preserveState: true,
            replace: true,
        });
    };

    const handleDpwChange = (e) => {
        const dpwId = e.target.value;
        setSelectedDpw(dpwId);
        setSelectedDpc("");
        executeFilter({ province_id: dpwId, city_id: "" });
    };

    const handleDpcChange = (e) => {
        const dpcId = e.target.value;
        setSelectedDpc(dpcId);
        executeFilter({ city_id: dpcId });
    };

    const handleStatusBayarChange = (newStatus) => {
        setStatusBayar(newStatus);
        executeFilter({ status_bayar: newStatus });
    };

    const handleYearChange = (newYear) => {
        setTahun(newYear);
        executeFilter({ tahun: newYear });
    };

    const handleSearchSubmit = (e) => {
        if (e) e.preventDefault();
        executeFilter();
    };

    const handleReset = () => {
        const defaultYear = new Date().getFullYear();
        setTahun(defaultYear);
        setStatusBayar("all");
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

    const exportUrl = `/account/monitoring-iuran/export?tahun=${tahun}&status_bayar=${statusBayar}&q=${encodeURIComponent(search || "")}&province_id=${selectedDpw || ""}&city_id=${selectedDpc || ""}`;

    return (
        <LayoutAccount>
            <Head title={`Monitoring Iuran Tahun ${tahun} - IKATWI`} />

            <div className="monitoring-iuran-page">
                {/* Header Section */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
                    <div>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                            <h1 className="h4 text-dark fw-bold mb-0 d-flex align-items-center gap-2">
                                <span className="header-icon-box">
                                    <i className="fa fa-chart-line text-white"></i>
                                </span>
                                <span>Monitoring Iuran Anggota</span>
                            </h1>
                            <span className="badge-tahun-pill">
                                <i className="fa fa-calendar-alt me-1.5"></i> Tahun {tahun}
                            </span>
                        </div>
                        <p className="text-muted small mb-0 mt-1">
                            Pantau status pelunasan iuran tahunan anggota IKATWI secara transparan, akurat, dan real-time.
                        </p>
                    </div>

                    <div className="d-flex gap-2 align-items-center flex-wrap">
                        <a
                            href={exportUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-export-excel"
                        >
                            <i className="fa fa-file-excel"></i>
                            <span>Export Excel</span>
                        </a>

                        <Link
                            href="/account/tagihan"
                            className="btn btn-sm btn-pusat-tagihan"
                        >
                            <i className="fa fa-receipt text-muted"></i>
                            <span>Pusat Tagihan</span>
                        </Link>
                    </div>
                </div>

                {/* Quick Year Selector Card */}
                <div className="card border-0 shadow-sm mb-4 section-card year-selector-card">
                    <div className="card-body p-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                            <span className="small fw-bold text-dark me-1 d-inline-flex align-items-center gap-1">
                                <i className="fa fa-history text-success"></i>
                                <span>Pilih Tahun:</span>
                            </span>
                            {availableYears.map((yr) => (
                                <button
                                    key={yr}
                                    type="button"
                                    onClick={() => handleYearChange(yr)}
                                    className={`btn btn-sm year-chip ${
                                        Number(tahun) === Number(yr) ? "active" : ""
                                    }`}
                                >
                                    {Number(yr) === new Date().getFullYear() ? `${yr} (Berjalan)` : yr}
                                </button>
                            ))}
                        </div>

                        <div className="d-flex align-items-center gap-1.5 flex-wrap">
                            <span className="small fw-bold text-dark me-1">Status:</span>
                            <button
                                type="button"
                                onClick={() => handleStatusBayarChange("all")}
                                className={`btn btn-sm status-chip chip-all ${statusBayar === "all" ? "active" : ""}`}
                            >
                                Semua ({stats.total_anggota})
                            </button>
                            <button
                                type="button"
                                onClick={() => handleStatusBayarChange("paid")}
                                className={`btn btn-sm status-chip chip-paid ${statusBayar === "paid" ? "active" : ""}`}
                            >
                                <i className="fa fa-check-circle me-1"></i>Lunas ({stats.total_lunas})
                            </button>
                            <button
                                type="button"
                                onClick={() => handleStatusBayarChange("unpaid")}
                                className={`btn btn-sm status-chip chip-unpaid ${statusBayar === "unpaid" ? "active" : ""}`}
                            >
                                <i className="fa fa-times-circle me-1"></i>Belum Bayar ({stats.total_belum_bayar})
                            </button>
                        </div>
                    </div>
                </div>

                {/* 4 KPI Summary Cards */}
                <div className="row g-3 mb-4">
                    {/* Card 1: Total Anggota */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="card border-0 shadow-sm h-100 kpi-card kpi-blue">
                            <div className="card-body p-3.5 d-flex align-items-center justify-content-between">
                                <div>
                                    <span className="kpi-label text-blue-label">Total Anggota</span>
                                    <h3 className="kpi-value text-blue-dark mb-0">{stats.total_anggota.toLocaleString('id-ID')}</h3>
                                    <small className="kpi-subtext text-blue-muted">Anggota resmi terverifikasi</small>
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
                                    <div className="progress flex-grow-1 me-2 kpi-progress-bg">
                                        <div
                                            className="progress-bar bg-emerald-bar"
                                            role="progressbar"
                                            style={{ width: `${Math.min(100, stats.persentase_lunas)}%` }}
                                        ></div>
                                    </div>
                                    <span className="badge kpi-rate-badge text-emerald-dark fw-bold">
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
                                    <small className="kpi-subtext text-rose-muted">
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
                                    <small className="kpi-subtext text-amber-muted">Penerimaan iuran tahun {tahun}</small>
                                </div>
                                <div className="kpi-icon-wrap bg-amber-icon text-white">
                                    <i className="fa fa-hand-holding-usd"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter & Search Bar Card */}
                <div className="card border-0 shadow-sm mb-4 filter-control-card">
                    <div className="card-header filter-card-header py-2.5 px-4 d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-2">
                            <i className="fa fa-sliders-h text-primary"></i>
                            <span className="fw-bold text-dark" style={{ fontSize: '0.88rem' }}>
                                Filter & Pencarian Anggota
                            </span>
                        </div>
                        {(search || statusBayar !== "all" || selectedDpw || selectedDpc) && (
                            <button
                                type="button"
                                onClick={handleReset}
                                className="btn btn-sm btn-reset-filter"
                                title="Reset Semua Filter"
                            >
                                <i className="fa fa-undo me-1"></i>
                                <span>Reset Filter</span>
                            </button>
                        )}
                    </div>

                    <div className="card-body p-3.5">
                        <form onSubmit={handleSearchSubmit} className="row g-3 align-items-end">
                            {/* Search Keyword */}
                            <div className="col-12 col-md-4">
                                <label className="form-label filter-label">
                                    <i className="fa fa-search text-primary me-1"></i>
                                    <span>Pencarian Anggota</span>
                                </label>
                                <div className="input-group input-group-sm">
                                    <input
                                        type="text"
                                        className="form-control filter-input"
                                        placeholder="Ketik Nama, No. Anggota, NIK, Email..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-search-submit px-3"
                                        title="Cari Anggota"
                                    >
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Status Bayar Dropdown */}
                            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                                <label className="form-label filter-label">
                                    <i className="fa fa-filter text-success me-1"></i>
                                    <span>Status Iuran</span>
                                </label>
                                <select
                                    className="form-select form-select-sm filter-select"
                                    value={statusBayar}
                                    onChange={(e) => handleStatusBayarChange(e.target.value)}
                                >
                                    <option value="all">Semua Status</option>
                                    <option value="paid">LUNAS (Sudah Bayar)</option>
                                    <option value="unpaid">BELUM BAYAR</option>
                                </select>
                            </div>

                            {/* DPW Selector (if Superadmin) */}
                            {roleScope.isSuperAdmin && (
                                <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                                    <label className="form-label filter-label">
                                        <i className="fa fa-landmark text-info me-1"></i>
                                        <span>DPW (Provinsi)</span>
                                    </label>
                                    <select
                                        className="form-select form-select-sm filter-select"
                                        value={selectedDpw}
                                        onChange={handleDpwChange}
                                    >
                                        <option value="">Semua DPW (Provinsi)</option>
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
                                <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                                    <label className="form-label filter-label">
                                        <i className="fa fa-city text-warning me-1"></i>
                                        <span>DPC (Kota / Kab)</span>
                                    </label>
                                    <select
                                        className="form-select form-select-sm filter-select"
                                        value={selectedDpc}
                                        onChange={handleDpcChange}
                                    >
                                        <option value="">Semua Cabang DPC</option>
                                        {filteredCities.map((city) => (
                                            <option key={city.id} value={city.id}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Table Data Card */}
                <div className="card border-0 shadow-sm mb-4 table-main-card">
                    <div className="card-header table-card-header py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <div className="d-flex align-items-center gap-2">
                            <span className="table-header-icon-wrap">
                                <i className="fa fa-table text-success"></i>
                            </span>
                            <div>
                                <span className="fw-bold text-dark" style={{ fontSize: '0.96rem' }}>
                                    Daftar Pembayaran Iuran Anggota — Tahun {tahun}
                                </span>
                                <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>
                                    Data diperbarui secara otomatis berdasarkan transaksi sistem
                                </small>
                            </div>
                        </div>

                        <div className="total-members-pill">
                            <span className="text-muted fw-normal">Total:</span> <strong className="text-dark">{users.total}</strong> anggota
                        </div>
                    </div>

                    <div className="card-body p-0">
                        {users.data.length > 0 ? (
                            <div className="table-responsive">
                                <table className="table table-custom align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th className="ps-4 text-center" style={{ width: '5%' }}>NO</th>
                                            <th className="text-center" style={{ width: '6%' }}>FOTO</th>
                                            <th style={{ width: '14%' }}>NO. ANGGOTA</th>
                                            <th style={{ width: '32%' }}>NAMA LENGKAP & KONTAK</th>
                                            <th style={{ width: '23%' }}>WILAYAH (DPW / DPC)</th>
                                            <th style={{ width: '14%' }}>STATUS IURAN {tahun}</th>
                                            <th className="pe-4 text-center" style={{ width: '6%' }}>AKSI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.data.map((item, index) => {
                                            const rowNumber = (users.from || 1) + index;
                                            return (
                                                <tr key={item.id}>
                                                    {/* No */}
                                                    <td className="ps-4 text-center">
                                                        <span className="table-num-pill">{rowNumber}</span>
                                                    </td>

                                                    {/* Foto */}
                                                    <td className="text-center">
                                                        <img
                                                            src={item.image ? `/storage/users/${item.image}` : "/assets/images/user.png"}
                                                            alt={item.name}
                                                            className="rounded-circle table-avatar"
                                                            onError={(e) => {
                                                                e.target.onerror = null;
                                                                e.target.src = "/assets/images/user.png";
                                                            }}
                                                        />
                                                    </td>

                                                    {/* No. Anggota */}
                                                    <td>
                                                        <span className="badge-no-anggota">
                                                            <i className="fa fa-id-card me-1 text-primary"></i>
                                                            {item.no_anggota || "-"}
                                                        </span>
                                                    </td>

                                                    {/* Nama Lengkap & Kontak */}
                                                    <td>
                                                        <div className="member-name-text">
                                                            {item.name}
                                                        </div>
                                                        {item.email && (
                                                            <div className="d-flex align-items-center gap-1.5 mt-0.5 member-email-text">
                                                                <i className="fa fa-envelope text-muted"></i>
                                                                <span>{item.email}</span>
                                                            </div>
                                                        )}
                                                        {item.phone && (
                                                            <div className="d-flex align-items-center gap-1 mt-0.5">
                                                                <a
                                                                    href={`https://wa.me/${item.phone.replace(/^0/, '62').replace(/\D/g, '')}`}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="member-phone-link"
                                                                    title="Chat WhatsApp"
                                                                >
                                                                    <i className="fab fa-whatsapp"></i>
                                                                    <span>{item.phone}</span>
                                                                </a>
                                                            </div>
                                                        )}
                                                    </td>

                                                    {/* Wilayah */}
                                                    <td>
                                                        <div className="dpw-badge">
                                                            <i className="fa fa-landmark text-success"></i>
                                                            <span>{item.province?.name ? `DPW ${item.province.name}` : "Belum diatur"}</span>
                                                        </div>
                                                        <div className="dpc-text">
                                                            <i className="fa fa-city text-secondary"></i>
                                                            <span>{item.city?.name ? `DPC ${item.city.name}` : "Belum diatur"}</span>
                                                        </div>
                                                    </td>

                                                    {/* Status Iuran */}
                                                    <td>
                                                        {item.is_paid ? (
                                                            <div>
                                                                <span className="status-badge-paid">
                                                                    <i className="fa fa-check-circle"></i>
                                                                    <span>LUNAS</span>
                                                                </span>
                                                                <div className="paid-amount-text">
                                                                    {FormatPrice(item.paid_amount || item.expected_amount)}
                                                                </div>
                                                                {item.paid_at && (
                                                                    <div className="paid-date-text">
                                                                        {item.paid_at}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ) : item.payment_status === "UNPAID_PENDING" ? (
                                                            <div>
                                                                <span className="status-badge-pending">
                                                                    <i className="fa fa-hourglass-half"></i>
                                                                    <span>Menunggu Bayar</span>
                                                                </span>
                                                                <div className="unpaid-tagihan-text">
                                                                    Tagihan: {FormatPrice(item.expected_amount)}
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <span className="status-badge-unpaid">
                                                                    <i className="fa fa-times-circle"></i>
                                                                    <span>BELUM BAYAR</span>
                                                                </span>
                                                                <div className="unpaid-tagihan-text">
                                                                    Tagihan: {FormatPrice(item.expected_amount)}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </td>

                                                    {/* Aksi / Rincian */}
                                                    <td className="pe-4 text-center">
                                                        {item.invoice ? (
                                                            <Link
                                                                href={`/account/transactions/${item.invoice}`}
                                                                className="btn btn-sm btn-view-invoice"
                                                                title="Lihat Invoice Transaksi"
                                                            >
                                                                <i className="fa fa-receipt"></i>
                                                                <span>Invoice</span>
                                                            </Link>
                                                        ) : (
                                                            <span className="text-muted small">-</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="p-5 text-center empty-state-box">
                                <div className="empty-icon-wrap mb-3">
                                    <i className="fa fa-users"></i>
                                </div>
                                <h5 className="fw-bold text-dark mb-1">Tidak Ada Data Ditemukan</h5>
                                <p className="text-muted small mb-3">
                                    Tidak ada anggota yang sesuai dengan kriteria filter tahun {tahun} atau kata kunci pencarian.
                                </p>
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                                >
                                    <i className="fa fa-redo me-1"></i> Reset Semua Filter
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {users.data.length > 0 && (
                        <div className="card-footer table-footer py-3 px-4 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
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

                /* Header Components */
                .header-icon-box {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    border-radius: 8px;
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    box-shadow: 0 2px 6px rgba(5, 150, 105, 0.3);
                }

                .badge-tahun-pill {
                    display: inline-flex;
                    align-items: center;
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
                    border-radius: 20px;
                    padding: 4px 12px;
                    font-size: 0.82rem;
                    font-weight: 700;
                }

                .btn-export-excel {
                    background-color: #16a34a;
                    color: #ffffff;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.84rem;
                    padding: 8px 14px;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border: none;
                    box-shadow: 0 2px 6px rgba(22, 163, 74, 0.25);
                    transition: all 0.2s ease;
                }
                .btn-export-excel:hover {
                    background-color: #15803d;
                    color: #ffffff;
                    transform: translateY(-1px);
                }

                .btn-pusat-tagihan {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    color: #334155;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.84rem;
                    padding: 8px 14px;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    text-decoration: none;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                    transition: all 0.2s ease;
                }
                .btn-pusat-tagihan:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                }

                /* Section Card Styling */
                .section-card {
                    border-radius: 12px;
                    background-color: #f8fafc;
                    border: 1.5px solid #e2e8f0 !important;
                }

                .year-chip {
                    font-size: 0.82rem;
                    font-weight: 600;
                    padding: 5px 14px;
                    border-radius: 20px;
                    background-color: #ffffff;
                    color: #334155;
                    border: 1.5px solid #cbd5e1;
                    transition: all 0.15s ease;
                }
                .year-chip:hover {
                    background-color: #f1f5f9;
                    border-color: #94a3b8;
                }
                .year-chip.active {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border-color: #059669;
                    box-shadow: 0 2px 6px rgba(5, 150, 105, 0.3);
                }

                .status-chip {
                    font-size: 0.78rem;
                    font-weight: 600;
                    padding: 4px 12px;
                    border-radius: 20px;
                    transition: all 0.15s ease;
                }
                .chip-all {
                    background-color: #ffffff;
                    color: #475569;
                    border: 1.5px solid #cbd5e1;
                }
                .chip-all.active {
                    background-color: #0f172a;
                    color: #ffffff;
                    border-color: #0f172a;
                }

                .chip-paid {
                    background-color: #ffffff;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
                }
                .chip-paid.active {
                    background-color: #059669;
                    color: #ffffff;
                    border-color: #059669;
                }

                .chip-unpaid {
                    background-color: #ffffff;
                    color: #dc2626;
                    border: 1.5px solid #fecaca;
                }
                .chip-unpaid.active {
                    background-color: #dc2626;
                    color: #ffffff;
                    border-color: #dc2626;
                }

                /* KPI Cards - Rich Color Contrast */
                .kpi-card {
                    border-radius: 12px;
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
                .kpi-subtext {
                    font-size: 0.75rem;
                    font-weight: 500;
                }
                .kpi-icon-wrap {
                    width: 44px;
                    height: 44px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    flex-shrink: 0;
                }
                .kpi-progress-bg {
                    height: 6px;
                    background-color: #e2e8f0;
                    border-radius: 4px;
                }
                .bg-emerald-bar {
                    background-color: #059669;
                }
                .kpi-rate-badge {
                    background-color: #ecfdf5;
                    border: 1px solid #a7f3d0;
                    font-size: 0.72rem;
                    border-radius: 6px;
                    padding: 2px 6px;
                }

                /* Blue KPI */
                .kpi-blue {
                    border: 1.5px solid #93c5fd !important;
                    border-left: 5px solid #2563eb !important;
                    background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
                }
                .text-blue-label { color: #1d4ed8; }
                .text-blue-dark { color: #1e3a8a; }
                .text-blue-muted { color: #60a5fa; }
                .bg-blue-icon {
                    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                    box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
                }

                /* Emerald KPI */
                .kpi-emerald {
                    border: 1.5px solid #86efac !important;
                    border-left: 5px solid #059669 !important;
                    background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%);
                }
                .text-emerald-label { color: #047857; }
                .text-emerald-dark { color: #064e3b; }
                .bg-emerald-icon {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    box-shadow: 0 4px 10px rgba(5, 150, 105, 0.3);
                }

                /* Rose KPI */
                .kpi-rose {
                    border: 1.5px solid #fca5a5 !important;
                    border-left: 5px solid #e11d48 !important;
                    background: linear-gradient(135deg, #fff1f2 0%, #ffffff 100%);
                }
                .text-rose-label { color: #be123c; }
                .text-rose-dark { color: #881337; }
                .text-rose-muted { color: #f43f5e; }
                .bg-rose-icon {
                    background: linear-gradient(135deg, #e11d48 0%, #be123c 100%);
                    box-shadow: 0 4px 10px rgba(225, 29, 72, 0.3);
                }

                /* Amber KPI */
                .kpi-amber {
                    border: 1.5px solid #fde68a !important;
                    border-left: 5px solid #d97706 !important;
                    background: linear-gradient(135deg, #fffbeb 0%, #ffffff 100%);
                }
                .text-amber-label { color: #b45309; }
                .text-amber-dark { color: #78350f; }
                .text-amber-muted { color: #d97706; }
                .bg-amber-icon {
                    background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
                    box-shadow: 0 4px 10px rgba(217, 119, 6, 0.3);
                }

                /* Filter Controls Card */
                .filter-control-card {
                    border-radius: 12px;
                    background-color: #f8fafc;
                    border: 1.5px solid #cbd5e1 !important;
                    overflow: hidden;
                }
                .filter-card-header {
                    background-color: #f1f5f9;
                    border-bottom: 1.5px solid #cbd5e1;
                }
                .filter-label {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 5px;
                    display: flex;
                    align-items: center;
                }
                .filter-input, .filter-select {
                    height: 40px;
                    border-radius: 8px;
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    font-size: 0.85rem;
                    color: #0f172a;
                    font-weight: 500;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.03);
                }
                .filter-input:focus, .filter-select:focus {
                    border-color: #059669;
                    box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);
                }
                .btn-search-submit {
                    background-color: #0f172a;
                    color: #ffffff;
                    border-radius: 0 8px 8px 0;
                    border: 1.5px solid #0f172a;
                }
                .btn-search-submit:hover {
                    background-color: #1e293b;
                    color: #ffffff;
                }
                .btn-reset-filter {
                    background-color: #ffffff;
                    border: 1px solid #cbd5e1;
                    color: #475569;
                    border-radius: 6px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    padding: 3px 10px;
                }
                .btn-reset-filter:hover {
                    background-color: #f1f5f9;
                    color: #0f172a;
                }

                /* Table Styling */
                .table-main-card {
                    border-radius: 12px;
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    overflow: hidden;
                }
                .table-card-header {
                    background-color: #f8fafc;
                    border-bottom: 1.5px solid #cbd5e1;
                }
                .table-header-icon-wrap {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    background-color: #ecfdf5;
                    border: 1px solid #a7f3d0;
                    font-size: 15px;
                }
                .total-members-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    padding: 4px 12px;
                    border-radius: 20px;
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    color: #0f172a;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                .table-custom {
                    border-collapse: separate;
                    border-spacing: 0;
                    width: 100%;
                }
                .table-custom thead th {
                    background: #064e3b;
                    color: #ffffff;
                    font-size: 0.78rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    padding: 13px 14px;
                    border-bottom: 2px solid #047857;
                    white-space: nowrap;
                }
                .table-custom tbody tr {
                    transition: background-color 0.15s ease;
                }
                .table-custom tbody tr:hover {
                    background-color: #f0fdf4;
                }
                .table-custom tbody td {
                    padding: 12px 14px;
                    vertical-align: middle;
                    border-bottom: 1px solid #e2e8f0;
                }

                .table-num-pill {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 28px;
                    height: 28px;
                    border-radius: 6px;
                    background-color: #f1f5f9;
                    color: #475569;
                    font-weight: 700;
                    font-size: 0.78rem;
                    border: 1px solid #e2e8f0;
                }

                .table-avatar {
                    width: 38px;
                    height: 38px;
                    object-fit: cover;
                    border: 2px solid #cbd5e1;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
                }

                .badge-no-anggota {
                    display: inline-flex;
                    align-items: center;
                    padding: 4px 8px;
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    border: 1px solid #bfdbfe;
                    border-radius: 6px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    font-family: monospace;
                }

                .member-name-text {
                    font-weight: 700;
                    font-size: 0.9rem;
                    color: #0f172a;
                    letter-spacing: -0.01em;
                }
                .member-email-text {
                    color: #475569;
                    font-size: 0.8rem;
                    font-weight: 500;
                }
                .member-phone-link {
                    color: #059669;
                    font-size: 0.78rem;
                    font-weight: 600;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                }
                .member-phone-link:hover {
                    color: #047857;
                    text-decoration: underline;
                }

                .dpw-badge {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1px solid #a7f3d0;
                    font-size: 0.78rem;
                    font-weight: 700;
                    border-radius: 6px;
                    padding: 3px 8px;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                }
                .dpc-text {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    margin-top: 4px;
                    color: #334155;
                    font-size: 0.78rem;
                    font-weight: 500;
                }

                /* Payment Status Badges */
                .status-badge-paid {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #6ee7b7;
                    font-size: 0.75rem;
                    font-weight: 700;
                    border-radius: 6px;
                    padding: 3px 8px;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                }
                .paid-amount-text {
                    font-weight: 700;
                    font-size: 0.78rem;
                    color: #0f172a;
                    margin-top: 3px;
                }
                .paid-date-text {
                    color: #64748b;
                    font-size: 0.7rem;
                }

                .status-badge-pending {
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    border: 1.5px solid #93c5fd;
                    font-size: 0.75rem;
                    font-weight: 700;
                    border-radius: 6px;
                    padding: 3px 8px;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                }

                .status-badge-unpaid {
                    background-color: #fef2f2;
                    color: #b91c1c;
                    border: 1.5px solid #fca5a5;
                    font-size: 0.75rem;
                    font-weight: 700;
                    border-radius: 6px;
                    padding: 3px 8px;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                }
                .unpaid-tagihan-text {
                    color: #64748b;
                    font-size: 0.72rem;
                    margin-top: 3px;
                }

                .btn-view-invoice {
                    background-color: #ffffff;
                    color: #2563eb;
                    border: 1.5px solid #93c5fd;
                    font-size: 0.75rem;
                    font-weight: 600;
                    border-radius: 6px;
                    padding: 3px 9px;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    transition: all 0.15s ease;
                }
                .btn-view-invoice:hover {
                    background-color: #2563eb;
                    color: #ffffff;
                    border-color: #2563eb;
                }

                .table-footer {
                    background-color: #f8fafc;
                    border-top: 1.5px solid #cbd5e1;
                }
            `}</style>
        </LayoutAccount>
    );
}
