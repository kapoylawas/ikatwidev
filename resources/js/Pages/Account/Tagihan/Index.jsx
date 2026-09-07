import React, { useState, useEffect } from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import FormatPrice from "../../../Utils/FormatPrice";

export default function TagihanIndex() {
    const { activeDue, carts, transactions = [], user } = usePage().props;

    // Countdown state for UNPAID_PENDING active invoice
    const [secondsLeft, setSecondsLeft] = useState(
        activeDue?.activeInvoice?.seconds_remaining || 0
    );

    useEffect(() => {
        if (!secondsLeft || secondsLeft <= 0) return;

        const interval = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [secondsLeft]);

    const formatCountdown = (totalSeconds) => {
        if (totalSeconds <= 0) return "Waktu Habis (Kadaluarsa)";
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours} Jam ${minutes} Menit ${seconds} Detik`;
    };

    const handleCreateDueCart = (tahun) => {
        Inertia.post("/account/tagihan/create-due-cart", { tahun });
    };

    return (
        <>
            <Head title="Pusat Tagihan & Iuran - IKATWI" />
            <LayoutAccount>
                <div className="container-fluid py-4">
                    {/* Header Banner */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm border" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                        <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="bg-primary bg-gradient p-3 rounded-4 me-3 text-white shadow-sm">
                                <i className="fa fa-credit-card fa-2x"></i>
                            </div>
                            <div>
                                <h4 className="mb-1 fw-bold text-dark">
                                    Pusat Tagihan & Iuran Anggota
                                </h4>
                                <p className="text-secondary mb-0">
                                    Kelola pembayaran iuran tahunan dan pantau status keanggotaan IKATWI Anda.
                                </p>
                            </div>
                        </div>
                        <div>
                            <span className="px-3 py-2 rounded-pill fw-bold text-dark border shadow-sm d-inline-flex align-items-center" style={{ backgroundColor: '#f8fafc', borderColor: '#cbd5e1' }}>
                                <i className="fa fa-calendar-alt text-primary me-2"></i>
                                Periode {activeDue?.tahun || new Date().getFullYear()}
                            </span>
                        </div>
                    </div>

                    {/* Interactive Step Guide */}
                    <div className="card border-0 rounded-4 shadow-sm mb-4" style={{ backgroundColor: '#ffffff' }}>
                        <div className="card-body p-4">
                            <h6 className="fw-bold text-secondary text-uppercase mb-3 small">
                                <i className="fa fa-route text-primary me-2"></i>
                                Alur Pembayaran Cepat & Otomatis
                            </h6>
                            <div className="row g-3 text-center">
                                <div className="col-6 col-md-3">
                                    <div className="p-3 rounded-4 border h-100 position-relative shadow-sm" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                        <div className="badge bg-primary text-white rounded-circle p-2 mb-2" style={{ width: '28px', height: '28px', lineHeight: '14px' }}>1</div>
                                        <h6 className="fw-bold mb-1 text-dark">Tagihan Iuran</h6>
                                        <small className="text-muted d-block">Cek tagihan tahun berjalan</small>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="p-3 rounded-4 border h-100 position-relative shadow-sm" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                        <div className="badge bg-primary text-white rounded-circle p-2 mb-2" style={{ width: '28px', height: '28px', lineHeight: '14px' }}>2</div>
                                        <h6 className="fw-bold mb-1 text-dark">Keranjang</h6>
                                        <small className="text-muted d-block">Review item & nominal</small>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="p-3 rounded-4 border h-100 position-relative shadow-sm" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                        <div className="badge bg-primary text-white rounded-circle p-2 mb-2" style={{ width: '28px', height: '28px', lineHeight: '14px' }}>3</div>
                                        <h6 className="fw-bold mb-1 text-dark">Checkout</h6>
                                        <small className="text-muted d-block">Konfirmasi data anggota</small>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="p-3 rounded-4 border h-100 position-relative shadow-sm" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                        <div className="badge bg-primary text-white rounded-circle p-2 mb-2" style={{ width: '28px', height: '28px', lineHeight: '14px' }}>4</div>
                                        <h6 className="fw-bold mb-1 text-dark">Bayar (Duitku)</h6>
                                        <small className="text-muted d-block">Pilih VA / QRIS / Bank</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Multi-Year Dues & Arrears Section (Jika ada lebih dari 1 tahun belum lunas) */}
                    {activeDue?.hasMultipleDues && (
                        <div className="card border-0 rounded-4 shadow-sm mb-4" style={{ backgroundColor: '#ffffff' }}>
                            <div className="card-header bg-white border-0 py-3 ps-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                                <div className="mb-2 mb-md-0">
                                    <h5 className="mb-1 fw-bold text-dark">
                                        <i className="fa fa-layer-group text-primary me-2"></i>
                                        Rincian Tagihan & Tunggakan Iuran ({activeDue.unpaidYearsList?.length} Tahun)
                                    </h5>
                                    <small className="text-secondary">
                                        Anda memiliki akumulasi tagihan iuran yang belum lunas. Anda dapat membayar semua tahun sekaligus atau per tahun.
                                    </small>
                                </div>
                                <button
                                    onClick={() => handleCreateDueCart("all")}
                                    className="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow-sm"
                                >
                                    <i className="fa fa-bolt me-2"></i>
                                    Bayar Semua Sekaligus (Rp {FormatPrice(activeDue.totalArrears)})
                                </button>
                            </div>
                            <div className="card-body p-4 pt-0">
                                <div className="row g-3">
                                    {activeDue.unpaidYearsList?.map((item, idx) => (
                                        <div key={idx} className="col-12 col-md-6">
                                            <div className="p-3 rounded-3 border d-flex justify-content-between align-items-center" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                                <div>
                                                    <div className="d-flex align-items-center gap-2 mb-1">
                                                        <span className="badge bg-dark text-white px-3 py-1 rounded-pill">Tahun {item.tahun}</span>
                                                        {item.isCurrentYear ? (
                                                            <span className="badge bg-primary text-white">Tahun Berjalan</span>
                                                        ) : (
                                                            <span className="badge bg-danger text-white">Tunggakan</span>
                                                        )}
                                                    </div>
                                                    <strong className="text-dark fs-5">Rp {FormatPrice(item.amount)}</strong>
                                                </div>
                                                <div>
                                                    {item.status === 'IN_CART' ? (
                                                        <Link href="/carts" className="btn btn-sm btn-outline-primary rounded-pill px-3">
                                                            Di Keranjang <i className="fa fa-arrow-right ms-1"></i>
                                                        </Link>
                                                    ) : item.status === 'UNPAID_PENDING' ? (
                                                        <Link href={`/account/transactions/${item.activeInvoice}`} className="btn btn-sm btn-warning rounded-pill px-3 fw-bold">
                                                            Bayar Invoice <i className="fa fa-external-link-alt ms-1"></i>
                                                        </Link>
                                                    ) : (
                                                        <button onClick={() => handleCreateDueCart(item.tahun)} className="btn btn-sm btn-primary rounded-pill px-3 shadow-sm">
                                                            + Keranjang
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Hero Status Card for Current Year Dues */}
                    <div className="row g-4 mb-4">
                        <div className="col-12 col-lg-8">
                            {/* State 1: PAID */}
                            {activeDue?.status === "PAID" && (
                                <div className="card border-0 rounded-4 shadow-sm text-white h-100" style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }}>
                                    <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <span className="badge bg-white text-success px-3 py-2 rounded-pill fw-bold shadow-sm">
                                                    <i className="fa fa-check-circle me-1"></i> SUDAH LUNAS
                                                </span>
                                                <i className="fa fa-shield-alt fa-3x text-white opacity-25"></i>
                                            </div>
                                            <h3 className="fw-bold mb-2">Iuran Tahun {activeDue.tahun} Telah Lunas</h3>
                                            <p className="mb-4 opacity-90">
                                                Terima kasih atas partisipasi aktif Anda. Hak keanggotaan dan akses fitur eksklusif IKATWI Anda aktif sampai 31 Desember {activeDue.tahun}.
                                            </p>
                                        </div>
                                        <div className="d-flex flex-wrap gap-2">
                                            <Link href="/account/ekta" className="btn btn-light rounded-pill px-4 py-2 fw-bold text-success shadow-sm">
                                                <i className="fa fa-id-card me-2"></i> Lihat E-KTA
                                            </Link>
                                            <Link href="/account/materi" className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold">
                                                <i className="fa fa-play-circle me-2"></i> Akses Materi Video
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* State 2: UNPAID_PENDING (Active Invoice waiting payment) */}
                            {activeDue?.status === "UNPAID_PENDING" && (
                                <div className="card border-0 rounded-4 shadow-sm text-white h-100" style={{ background: "linear-gradient(135deg, #d97706 0%, #b45309 100%)" }}>
                                    <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <span className="badge bg-white text-dark px-3 py-2 rounded-pill fw-bold shadow-sm">
                                                    <i className="fa fa-clock text-warning me-1"></i> MENUNGGU PEMBAYARAN
                                                </span>
                                                <i className="fa fa-receipt fa-3x text-white opacity-25"></i>
                                            </div>
                                            <h3 className="fw-bold mb-1">Invoice: {activeDue.activeInvoice?.invoice}</h3>
                                            <p className="mb-3 opacity-90">
                                                Tagihan iuran Anda sedang menunggu pembayaran. Selesaikan pembayaran sebelum batas waktu 24 jam berakhir.
                                            </p>

                                            {/* Countdown Timer */}
                                            <div className="p-3 rounded-3 mb-4 d-inline-flex align-items-center border" style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                                <i className="fa fa-hourglass-half me-2 fs-5 text-warning"></i>
                                                <div>
                                                    <small className="d-block text-white opacity-90">Sisa Waktu Pembayaran (1x24 Jam):</small>
                                                    <strong className="fs-6 font-monospace text-white">
                                                        {formatCountdown(secondsLeft)}
                                                    </strong>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-wrap gap-3 align-items-center">
                                            <Link
                                                href={`/account/transactions/${activeDue.activeInvoice?.invoice}`}
                                                className="btn btn-light btn-lg rounded-pill px-4 py-2 fw-bold shadow"
                                                style={{ color: '#0f172a' }}
                                            >
                                                <i className="fa fa-credit-card me-2 text-primary"></i>
                                                Bayar Sekarang (Rp {FormatPrice(activeDue.activeInvoice?.grand_total || activeDue.amount)})
                                            </Link>
                                            <Link
                                                href={`/account/transactions/${activeDue.activeInvoice?.invoice}`}
                                                className="btn btn-outline-light rounded-pill px-3 py-2 small"
                                            >
                                                <i className="fa fa-receipt me-1"></i> Detail Invoice & Batalkan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* State 3: IN_CART (Dues in Cart, ready to checkout) */}
                            {activeDue?.status === "IN_CART" && (
                                <div className="card border-0 rounded-4 shadow-sm text-white h-100" style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)" }}>
                                    <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <span className="badge bg-white text-primary px-3 py-2 rounded-pill fw-bold shadow-sm">
                                                    <i className="fa fa-shopping-cart me-1"></i> SUDAH DI KERANJANG
                                                </span>
                                                <i className="fa fa-shopping-bag fa-3x text-white opacity-25"></i>
                                            </div>
                                            <h3 className="fw-bold mb-2">Tagihan Iuran {activeDue.tahun} Tersedia</h3>
                                            <p className="mb-4 opacity-90">
                                                Tagihan iuran anggota Anda sudah berada di dalam keranjang belanja. Silakan lanjutkan ke checkout untuk menyelesaikan pembayaran via Duitku Gateway.
                                            </p>
                                        </div>
                                        <Link
                                            href="/carts"
                                            className="btn btn-light btn-lg rounded-pill px-5 py-2 fw-bold text-primary shadow-sm"
                                        >
                                            <i className="fa fa-arrow-right me-2"></i>
                                            Buka Keranjang & Bayar (Rp {FormatPrice(activeDue.amount)})
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* State 4: UNPAID_NO_CART (Not yet created in cart) */}
                            {activeDue?.status === "UNPAID_NO_CART" && (
                                <div className="card border-0 rounded-4 shadow-sm text-white h-100" style={{ background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)" }}>
                                    <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <span className="badge bg-white text-primary px-3 py-2 rounded-pill fw-bold shadow-sm">
                                                    <i className="fa fa-exclamation-circle me-1"></i> BELUM DIBAYAR
                                                </span>
                                                <i className="fa fa-money-check-alt fa-3x text-white opacity-25"></i>
                                            </div>
                                            <h3 className="fw-bold mb-2">Iuran Anggota Tahun {activeDue.tahun}</h3>
                                            <p className="mb-4 opacity-90">
                                                Kewajiban iuran anggota sebesar <strong>Rp {FormatPrice(activeDue.amount)}</strong> untuk periode tahun {activeDue.tahun}. Klik tombol di bawah untuk langsung memproses pembayaran secara otomatis.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleCreateDueCart(activeDue.tahun)}
                                            className="btn btn-warning btn-lg rounded-pill px-5 py-3 fw-bold text-dark shadow-sm"
                                        >
                                            <i className="fa fa-bolt me-2"></i>
                                            Bayar Tagihan Sekarang
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* State 5: EXPIRED */}
                            {activeDue?.status === "EXPIRED" && (
                                <div className="card border-0 rounded-4 shadow-sm text-white h-100" style={{ background: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)" }}>
                                    <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <span className="badge bg-white text-danger px-3 py-2 rounded-pill fw-bold shadow-sm">
                                                    <i className="fa fa-times-circle me-1"></i> INVOICE KADALUARSA
                                                </span>
                                                <i className="fa fa-history fa-3x text-white opacity-25"></i>
                                            </div>
                                            <h3 className="fw-bold mb-2">Invoice Melewati Batas 24 Jam</h3>
                                            <p className="mb-4 opacity-90">
                                                Invoice sebelumnya telah kadaluarsa karena tidak dibayar dalam 1x24 jam. Anda dapat langsung membuat tagihan baru sekarang.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleCreateDueCart(activeDue.tahun)}
                                            className="btn btn-light btn-lg rounded-pill px-5 py-2 fw-bold text-danger shadow-sm"
                                        >
                                            <i className="fa fa-redo me-2"></i>
                                            Buat Tagihan Baru & Bayar
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* State 6: EXEMPT (Anggota Kehormatan) */}
                            {activeDue?.status === "EXEMPT" && (
                                <div className="card border-0 rounded-4 shadow-sm text-white h-100" style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)" }}>
                                    <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <span className="badge bg-white text-purple px-3 py-2 rounded-pill fw-bold shadow-sm">
                                                    <i className="fa fa-crown me-1 text-warning"></i> ANGGOTA KEHORMATAN
                                                </span>
                                                <i className="fa fa-award fa-3x text-white opacity-25"></i>
                                            </div>
                                            <h3 className="fw-bold mb-2">Bebas Biaya Iuran Tahunan</h3>
                                            <p className="mb-4 opacity-90">
                                                Sebagai Anggota Kehormatan IKATWI, Anda dibebaskan dari kewajiban iuran tahunan dan seluruh akses fitur telah aktif.
                                            </p>
                                        </div>
                                        <Link href="/account/ekta" className="btn btn-light rounded-pill px-4 py-2 fw-bold text-dark shadow-sm">
                                            <i className="fa fa-id-card me-2"></i> Akses E-KTA
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Member & Dues Info Card */}
                        <div className="col-12 col-lg-4">
                            <div className="card border-0 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#ffffff' }}>
                                <div className="card-header bg-white border-0 py-3">
                                    <h5 className="mb-0 fw-bold text-dark">
                                        <i className="fa fa-info-circle text-primary me-2"></i>
                                        Rincian Iuran Anggota
                                    </h5>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="p-3 rounded-3 mb-3 border" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="text-secondary small fw-semibold">Nama Anggota:</span>
                                            <strong className="text-dark fs-6">{user?.name || "-"}</strong>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="text-secondary small fw-semibold">No. Anggota:</span>
                                            <span className="badge bg-secondary text-white px-2 py-1">{user?.no_anggota || "-"}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-0">
                                            <span className="text-secondary small fw-semibold">Kategori:</span>
                                            <span className="badge bg-primary text-white px-2 py-1">{user?.status_anggota || "Anggota Biasa"}</span>
                                        </div>
                                    </div>

                                    <div className="rounded-3 p-3 mb-3 border" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                                        <h6 className="fw-bold small text-secondary text-uppercase mb-2">Kewajiban Tahunan:</h6>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="text-secondary">Iuran Pokok Tahunan</span>
                                            <span className="fw-bold text-dark fs-6">Rp {FormatPrice(activeDue?.amount || 300000)}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center text-muted small">
                                            <span>Batas Waktu Bayar</span>
                                            <span className="text-dark fw-semibold">1x24 Jam per invoice</span>
                                        </div>
                                    </div>

                                    <div className="p-3 border rounded-3 mb-0 small" style={{ backgroundColor: '#eff6ff', borderColor: '#bfdbfe', color: '#1e40af' }}>
                                        <i className="fa fa-shield-alt me-1 text-primary"></i>
                                        Pembayaran otomatis diverifikasi via <strong>Duitku Payment Gateway</strong> (BCA, Mandiri, BNI, BRI, QRIS).
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Historical Dues Transactions Table */}
                    <div className="card border-0 rounded-4 shadow-sm" style={{ backgroundColor: '#ffffff' }}>
                        <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center">
                            <h5 className="mb-0 fw-bold text-dark">
                                <i className="fa fa-history text-primary me-2"></i>
                                Riwayat Pembayaran Iuran
                            </h5>
                            <Link href="/account/transactions" className="btn btn-outline-primary btn-sm rounded-pill px-3">
                                Lihat Semua Transaksi
                            </Link>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead style={{ backgroundColor: '#f1f5f9', color: '#334155' }}>
                                        <tr>
                                            <th className="ps-4 py-3">Invoice</th>
                                            <th className="py-3">Tahun Iuran</th>
                                            <th className="py-3">Nominal</th>
                                            <th className="py-3">Tanggal</th>
                                            <th className="py-3">Status</th>
                                            <th className="text-end pe-4 py-3">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.length > 0 ? (
                                            transactions.map((tx, index) => (
                                                <tr key={index}>
                                                    <td className="ps-4">
                                                        <span className="fw-bold text-primary font-monospace">
                                                            {tx.invoice}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-dark text-white px-3 py-1 rounded-pill">
                                                            {tx.tahun || "-"}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-bold text-dark">
                                                            Rp {FormatPrice(tx.grand_total)}
                                                        </span>
                                                    </td>
                                                    <td className="text-secondary small">
                                                        {tx.created_at}
                                                    </td>
                                                    <td>
                                                        {tx.status === "PAID" && (
                                                            <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                                                                <i className="fa fa-check-circle me-1"></i> LUNAS
                                                            </span>
                                                        )}
                                                        {tx.status === "UNPAID" && (
                                                            <span className="badge bg-warning bg-opacity-10 text-warning px-3 py-2 rounded-pill">
                                                                <i className="fa fa-clock me-1"></i> MENUNGGU BAYAR
                                                            </span>
                                                        )}
                                                        {tx.status === "EXPIRED" && (
                                                            <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill">
                                                                <i className="fa fa-times-circle me-1"></i> KADALUARSA
                                                            </span>
                                                        )}
                                                        {tx.status === "CANCELLED" && (
                                                            <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 rounded-pill">
                                                                <i className="fa fa-ban me-1"></i> DIBATALKAN
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="text-end pe-4">
                                                        <Link
                                                            href={`/account/transactions/${tx.invoice}`}
                                                            className="btn btn-outline-primary btn-sm rounded-pill px-3 shadow-sm"
                                                        >
                                                            <i className="fa fa-eye me-1"></i> Detail
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="text-center py-5 text-secondary">
                                                    <i className="fa fa-folder-open fa-3x mb-3 text-secondary opacity-50 d-block"></i>
                                                    Belum ada riwayat pembayaran iuran tercatat.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}