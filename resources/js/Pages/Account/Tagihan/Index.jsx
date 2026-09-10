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

    const formatTransactionYears = (tx) => {
        if (!tx) return "-";
        const detailYears = (tx.transaction_details || tx.transactionDetails || [])
            .map((d) => d.tahun)
            .filter(Boolean);
        const allYears = Array.from(new Set([...detailYears, tx.tahun].filter(Boolean))).sort();
        return allYears.length > 0 ? allYears.join(", ") : (tx.tahun || "-");
    };

    const formatTransactionDate = (tx) => {
        if (!tx) return "-";
        if (tx.raw_created_at) {
            const d = new Date(tx.raw_created_at);
            if (!isNaN(d.getTime())) {
                return d.toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                });
            }
        }
        return tx.created_at || "-";
    };

    return (
        <>
            <Head title="Pusat Tagihan & Iuran - IKATWI" />
            <LayoutAccount>
                <div className="container-fluid py-4 tagihan-page-container">
                    {/* Header Banner */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm border-0 header-banner-box">
                        <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="header-icon-square me-3 shadow">
                                <i className="fa fa-credit-card fa-2x text-white"></i>
                            </div>
                            <div>
                                <h4 className="mb-1 fw-bold text-dark-title" style={{ letterSpacing: '-0.02em' }}>
                                    Pusat Tagihan &amp; Iuran Anggota
                                </h4>
                                <p className="mb-0 text-slate-muted small">
                                    Kelola pembayaran iuran tahunan dan pantau status keanggotaan IKATWI Anda secara resmi.
                                </p>
                            </div>
                        </div>
                        <div>
                            <span className="periode-badge-pill shadow-sm">
                                <i className="fa fa-calendar-alt text-warning me-2"></i>
                                Periode {activeDue?.tahun || new Date().getFullYear()}
                            </span>
                        </div>
                    </div>

                    {/* Interactive Step Guide (Vibrant Roadmap) */}
                    <div className="card border-0 rounded-4 shadow-sm mb-4 bg-white overflow-hidden roadmap-card">
                        <div className="card-body p-4">
                            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mb-4 pb-2 border-bottom">
                                <h6 className="fw-bold text-slate-800 text-uppercase mb-0 small d-flex align-items-center gap-2">
                                    <span className="step-guide-icon-pill shadow-sm">
                                        <i className="fa fa-route text-emerald-700"></i>
                                    </span>
                                    <span style={{ color: '#0f172a', fontWeight: 800 }}>ALUR PEMBAYARAN CEPAT &amp; OTOMATIS</span>
                                </h6>
                                <span className="badge-auto-verify shadow-sm">
                                    <i className="fa fa-shield-alt text-emerald-600 me-2"></i>
                                    <span>Verifikasi Otomatis 24 Jam via Payment Gateway</span>
                                </span>
                            </div>

                            <div className="row g-3 text-center pt-1">
                                {/* Step 1 */}
                                <div className="col-6 col-md-3">
                                    <div className="rounded-4 h-100 position-relative step-card step-card-blue shadow-sm">
                                        <div className="step-number-circle step-circle-blue mb-2">1</div>
                                        <h6 className="fw-bold mb-1 text-slate-900 fs-6">Tagihan Iuran</h6>
                                        <small className="text-slate-600 d-block" style={{ fontSize: '0.78rem', fontWeight: 500 }}>
                                            Cek status tahun berjalan
                                        </small>
                                    </div>
                                </div>
                                {/* Step 2 */}
                                <div className="col-6 col-md-3">
                                    <div className="rounded-4 h-100 position-relative step-card step-card-amber shadow-sm">
                                        <div className="step-number-circle step-circle-amber mb-2">2</div>
                                        <h6 className="fw-bold mb-1 text-slate-900 fs-6">Keranjang</h6>
                                        <small className="text-slate-600 d-block" style={{ fontSize: '0.78rem', fontWeight: 500 }}>
                                            Review item &amp; nominal
                                        </small>
                                    </div>
                                </div>
                                {/* Step 3 */}
                                <div className="col-6 col-md-3">
                                    <div className="rounded-4 h-100 position-relative step-card step-card-indigo shadow-sm">
                                        <div className="step-number-circle step-circle-indigo mb-2">3</div>
                                        <h6 className="fw-bold mb-1 text-slate-900 fs-6">Checkout</h6>
                                        <small className="text-slate-600 d-block" style={{ fontSize: '0.78rem', fontWeight: 500 }}>
                                            Konfirmasi data anggota
                                        </small>
                                    </div>
                                </div>
                                {/* Step 4 */}
                                <div className="col-6 col-md-3">
                                    <div className="rounded-4 h-100 position-relative step-card step-card-emerald shadow-sm">
                                        <div className="step-number-circle step-circle-emerald mb-2">4</div>
                                        <h6 className="fw-bold mb-1 text-slate-900 fs-6">Bayar (Duitku)</h6>
                                        <small className="text-slate-600 d-block" style={{ fontSize: '0.78rem', fontWeight: 500 }}>
                                            Pilih VA / QRIS / Bank
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Deferred Years Notice (Kebijakan Penangguhan Tunggakan ke 2027) */}
                    {activeDue?.deferredYears && activeDue.deferredYears.length > 0 && (
                        <div className="card border-0 rounded-4 shadow-sm mb-4 bg-white overflow-hidden" style={{ borderLeft: '5px solid #0284c7' }}>
                            <div className="card-body p-3.5 px-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="d-flex align-items-center gap-3">
                                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <i className="fa fa-calendar-check text-sky-600 fs-5"></i>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold text-slate-900 mb-0.5" style={{ fontSize: '0.95rem' }}>
                                            Kebijakan Relaksasi: Tunggakan Tahun {activeDue.deferredYears.join(' & ')} Ditangguhkan
                                        </h6>
                                        <small className="text-slate-600">
                                            Sesuai kebijakan pengurus, tunggakan iuran sebelum 2026 ditangguhkan dan akan ditagihkan pada tahun <strong>2027</strong>. Anda hanya diwajibkan melunasi iuran tahun <strong>{activeDue.tahun}</strong> agar status dan E-KTA langsung aktif.
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Multi-Year Dues & Arrears Section (Jika ada lebih dari 1 tahun belum lunas) */}
                    {activeDue?.hasMultipleDues && (
                        <div className="card border-0 rounded-4 shadow-sm mb-4 bg-white overflow-hidden multi-year-card">
                            <div className="card-header bg-white border-0 py-3 ps-4 pe-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                                <div className="mb-2 mb-md-0">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="badge-warning-tunggakan">
                                            <i className="fa fa-exclamation-triangle me-1"></i> Perhatian
                                        </span>
                                        <h5 className="mb-0 fw-bold text-slate-900">
                                            Rincian Tagihan &amp; Tunggakan Iuran ({activeDue.unpaidYearsList?.length} Tahun)
                                        </h5>
                                    </div>
                                    <small className="text-slate-600 d-block mt-1">
                                        Anda memiliki akumulasi tagihan iuran yang belum lunas. Anda dapat membayar semua tahun sekaligus atau per tahun.
                                    </small>
                                </div>
                                <button
                                    onClick={() => handleCreateDueCart("all")}
                                    className="btn btn-pay-all rounded-pill px-4 py-2 fw-bold shadow"
                                >
                                    <i className="fa fa-bolt me-2 text-warning"></i>
                                    Bayar Semua Sekaligus (Rp {FormatPrice(activeDue.totalArrears)})
                                </button>
                            </div>
                            <div className="card-body p-4 pt-0">
                                <div className="row g-3">
                                    {activeDue.unpaidYearsList?.map((item, idx) => (
                                        <div key={idx} className="col-12 col-md-6">
                                            <div className="p-3 rounded-3 border d-flex justify-content-between align-items-center arrear-item-box">
                                                <div>
                                                    <div className="d-flex align-items-center gap-2 mb-2">
                                                        <span className="badge-tahun-dark">Tahun {item.tahun}</span>
                                                        {item.isCurrentYear ? (
                                                            <span className="badge-status-current">
                                                                Tahun Berjalan
                                                            </span>
                                                        ) : (
                                                            <span className="badge-status-tunggakan">
                                                                Tunggakan
                                                            </span>
                                                        )}
                                                    </div>
                                                    <strong className="text-emerald-700 fs-5 fw-extrabold">
                                                        Rp {FormatPrice(item.amount)}
                                                    </strong>
                                                </div>
                                                <div>
                                                    {item.status === 'IN_CART' ? (
                                                        <Link href="/carts" className="btn btn-sm btn-outline-primary rounded-pill px-3 py-1 fw-semibold shadow-sm">
                                                            Di Keranjang <i className="fa fa-arrow-right ms-1"></i>
                                                        </Link>
                                                    ) : item.status === 'UNPAID_PENDING' ? (
                                                        <Link href={`/account/transactions/${item.activeInvoice}`} className="btn btn-sm btn-warning rounded-pill px-3 py-1 fw-bold shadow-sm text-dark">
                                                            Bayar Invoice <i className="fa fa-external-link-alt ms-1"></i>
                                                        </Link>
                                                    ) : (
                                                        <button onClick={() => handleCreateDueCart(item.tahun)} className="btn btn-sm btn-primary rounded-pill px-3 py-1 fw-semibold shadow-sm">
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

                    {/* Main Content Row: Left Hero Status + Right Member Info */}
                    <div className="row g-4 mb-4">
                        <div className="col-12 col-lg-8">
                            {/* State 1: PAID */}
                            {activeDue?.status === "PAID" && (
                                <div className="card border-0 rounded-4 shadow hero-due-card hero-card-paid h-100">
                                    <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between position-relative z-1">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <span className="hero-status-pill hero-status-paid shadow-sm">
                                                    <i className="fa fa-check-circle fs-6"></i>
                                                    <span>SUDAH LUNAS &amp; AKTIF</span>
                                                </span>
                                                <i className="fa fa-shield-alt fa-3x text-white opacity-25"></i>
                                            </div>
                                            <h3 className="fw-extrabold mb-2 text-white" style={{ letterSpacing: '-0.02em' }}>
                                                Iuran Tahun {activeDue.tahun} Telah Lunas
                                            </h3>
                                            <p className="mb-4 hero-card-desc-paid">
                                                Terima kasih atas partisipasi aktif Anda. Hak keanggotaan dan akses fitur eksklusif IKATWI Anda aktif sampai 31 Desember {activeDue.tahun}.
                                            </p>
                                        </div>
                                        <div className="d-flex flex-wrap gap-2">
                                            <Link href="/account/ekta" className="btn btn-light rounded-pill px-4 py-2 fw-bold text-emerald-800 shadow">
                                                <i className="fa fa-id-card me-2 fs-6"></i> Lihat E-KTA Digital
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
                                <div className="card border-0 rounded-4 shadow hero-due-card hero-card-pending h-100">
                                    <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between position-relative z-1">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <span className="hero-status-pill hero-status-pending shadow-sm">
                                                    <i className="fa fa-clock fs-6"></i>
                                                    <span>MENUNGGU PEMBAYARAN</span>
                                                </span>
                                                <i className="fa fa-receipt fa-3x text-white opacity-25"></i>
                                            </div>
                                            <h3 className="fw-extrabold mb-1 text-white" style={{ letterSpacing: '-0.02em' }}>
                                                Invoice: {activeDue.activeInvoice?.invoice}
                                            </h3>
                                            <p className="mb-3 hero-card-desc-pending">
                                                Tagihan iuran Anda sedang menunggu pembayaran. Selesaikan pembayaran sebelum batas waktu 24 jam berakhir.
                                            </p>

                                            {/* Countdown Timer Box */}
                                            <div className="p-3 rounded-3 mb-4 d-inline-flex align-items-center hero-countdown-box">
                                                <i className="fa fa-hourglass-half me-2 fs-5 text-warning"></i>
                                                <div>
                                                    <small className="d-block text-amber-100 fw-medium">Sisa Waktu Pembayaran (1x24 Jam):</small>
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
                                                <i className="fa fa-credit-card me-2 text-amber-600"></i>
                                                Bayar Sekarang (Rp {FormatPrice(activeDue.activeInvoice?.grand_total || activeDue.amount)})
                                            </Link>
                                            <Link
                                                href={`/account/transactions/${activeDue.activeInvoice?.invoice}`}
                                                className="btn btn-outline-light rounded-pill px-3 py-2 fw-semibold small"
                                            >
                                                <i className="fa fa-receipt me-1"></i> Detail &amp; Batalkan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* State 3: IN_CART (Dues in Cart, ready to checkout) */}
                            {activeDue?.status === "IN_CART" && (
                                <div className="card border-0 rounded-4 shadow hero-due-card hero-card-incart h-100">
                                    <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between position-relative z-1">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <span className="hero-status-pill hero-status-incart shadow-sm">
                                                    <i className="fa fa-shopping-cart fs-6"></i>
                                                    <span>SUDAH DI KERANJANG</span>
                                                </span>
                                                <i className="fa fa-shopping-bag fa-3x text-white opacity-25"></i>
                                            </div>
                                            <h3 className="fw-extrabold mb-2 text-white" style={{ letterSpacing: '-0.02em' }}>
                                                Tagihan Iuran {activeDue.tahun} Tersedia
                                            </h3>
                                            <p className="mb-4 hero-card-desc-blue">
                                                Tagihan iuran anggota Anda sudah berada di dalam keranjang belanja. Silakan lanjutkan ke checkout untuk menyelesaikan pembayaran via Duitku Gateway.
                                            </p>
                                        </div>
                                        <div>
                                            <Link
                                                href="/carts"
                                                className="btn btn-cart-cta btn-lg rounded-pill px-5 py-3 fw-bold shadow"
                                            >
                                                <span>Buka Keranjang &amp; Bayar (Rp {FormatPrice(activeDue.amount)})</span>
                                                <i className="fa fa-arrow-right ms-2.5"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* State 4: UNPAID_NO_CART (Not yet created in cart) */}
                            {activeDue?.status === "UNPAID_NO_CART" && (
                                <div className="card border-0 rounded-4 shadow hero-due-card hero-card-unpaid h-100">
                                    <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between position-relative z-1">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <span className="hero-status-pill hero-status-unpaid shadow-sm">
                                                    <i className="fa fa-exclamation-circle fs-6"></i>
                                                    <span>BELUM DIBAYAR</span>
                                                </span>
                                                <i className="fa fa-money-check-alt fa-3x text-white opacity-25"></i>
                                            </div>
                                            <h3 className="fw-extrabold mb-2 text-white" style={{ letterSpacing: '-0.02em' }}>
                                                Iuran Anggota Tahun {activeDue.tahun}
                                            </h3>
                                            <p className="mb-4 hero-card-desc-blue">
                                                Kewajiban iuran anggota sebesar <strong>Rp {FormatPrice(activeDue.amount)}</strong> untuk periode tahun {activeDue.tahun}. Klik tombol di bawah untuk langsung memproses pembayaran secara otomatis.
                                            </p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => handleCreateDueCart(activeDue.tahun)}
                                                className="btn btn-pay-now-cta btn-lg rounded-pill px-5 py-3 fw-bold shadow"
                                            >
                                                <i className="fa fa-bolt me-2"></i>
                                                Bayar Tagihan Sekarang
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* State 5: EXPIRED */}
                            {activeDue?.status === "EXPIRED" && (
                                <div className="card border-0 rounded-4 shadow hero-due-card hero-card-expired h-100">
                                    <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between position-relative z-1">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <span className="hero-status-pill hero-status-expired shadow-sm">
                                                    <i className="fa fa-times-circle fs-6"></i>
                                                    <span>INVOICE KADALUARSA</span>
                                                </span>
                                                <i className="fa fa-history fa-3x text-white opacity-25"></i>
                                            </div>
                                            <h3 className="fw-extrabold mb-2 text-white" style={{ letterSpacing: '-0.02em' }}>
                                                Invoice Melewati Batas 24 Jam
                                            </h3>
                                            <p className="mb-4 hero-card-desc-rose">
                                                Invoice sebelumnya telah kadaluarsa karena tidak dibayar dalam 1x24 jam. Anda dapat langsung membuat tagihan baru sekarang.
                                            </p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => handleCreateDueCart(activeDue.tahun)}
                                                className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold text-rose-700 shadow"
                                            >
                                                <i className="fa fa-redo me-2"></i>
                                                Buat Tagihan Baru &amp; Bayar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* State 6: EXEMPT (Anggota Kehormatan) */}
                            {activeDue?.status === "EXEMPT" && (
                                <div className="card border-0 rounded-4 shadow hero-due-card hero-card-exempt h-100">
                                    <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between position-relative z-1">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <span className="hero-status-pill hero-status-exempt shadow-sm">
                                                    <i className="fa fa-crown text-amber-500 fs-6"></i>
                                                    <span>ANGGOTA KEHORMATAN</span>
                                                </span>
                                                <i className="fa fa-award fa-3x text-white opacity-25"></i>
                                            </div>
                                            <h3 className="fw-extrabold mb-2 text-white" style={{ letterSpacing: '-0.02em' }}>
                                                Bebas Biaya Iuran Tahunan
                                            </h3>
                                            <p className="mb-4 hero-card-desc-purple">
                                                Sebagai Anggota Kehormatan IKATWI, Anda dibebaskan dari kewajiban iuran tahunan dan seluruh akses fitur telah aktif.
                                            </p>
                                        </div>
                                        <div>
                                            <Link href="/account/ekta" className="btn btn-light rounded-pill px-4 py-2 fw-bold text-purple-900 shadow">
                                                <i className="fa fa-id-card me-2"></i> Akses E-KTA
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Member & Dues Info Card (Right Side) */}
                        <div className="col-12 col-lg-4">
                            <div className="card border-0 rounded-4 shadow-sm h-100 member-summary-card">
                                <div className="card-header member-summary-header py-3 px-4 d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="summary-icon-pill shadow-sm">
                                            <i className="fa fa-info-circle text-white"></i>
                                        </span>
                                        <div>
                                            <h5 className="mb-0 fw-bold summary-header-title">
                                                Rincian Iuran Anggota
                                            </h5>
                                            <span className="summary-header-sub">Status &amp; kewajiban resmi</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 d-flex flex-column gap-3">
                                    {/* Identitas Anggota Box */}
                                    <div className="p-3 rounded-3 info-box-soft-blue">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="info-item-label">NAMA ANGGOTA:</span>
                                            <strong className="text-slate-900 fs-6 text-uppercase">{user?.name || "-"}</strong>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="info-item-label">NO. ANGGOTA:</span>
                                            <span className="badge-member-kta font-monospace">{user?.no_anggota || "-"}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-0">
                                            <span className="info-item-label">KATEGORI:</span>
                                            <span className="badge-member-kategori">{user?.status_anggota || "Anggota Biasa"}</span>
                                        </div>
                                    </div>

                                    {/* Kewajiban Tahunan Box */}
                                    <div className="p-3 rounded-3 info-box-soft-emerald">
                                        <h6 className="kewajiban-box-title">
                                            KEWAJIBAN IURAN TAHUNAN
                                        </h6>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="text-slate-700 small fw-semibold">Iuran Pokok Tahunan</span>
                                            <span className="fw-extrabold text-emerald-800 fs-5">
                                                Rp {FormatPrice(activeDue?.amount || 300000)}
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center text-muted small">
                                            <span className="text-slate-600">Batas Waktu Bayar</span>
                                            <span className="badge-expiry-pill font-monospace">
                                                1x24 Jam per invoice
                                            </span>
                                        </div>
                                    </div>

                                    {/* Duitku Verified Notice Box */}
                                    <div className="p-3 rounded-3 duitku-notice-box small">
                                        <i className="fa fa-shield-alt me-2 text-primary fs-6"></i>
                                        <span>Pembayaran otomatis diverifikasi via <strong>Duitku Payment Gateway</strong> (BCA, Mandiri, BNI, BRI, QRIS).</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Historical Dues Transactions Table Card */}
                    <div className="card border-0 rounded-4 shadow-sm bg-white overflow-hidden history-table-card">
                        <div className="card-header history-table-header py-3 px-4 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-2">
                                <span className="history-icon-pill shadow-sm">
                                    <i className="fa fa-history text-white"></i>
                                </span>
                                <div>
                                    <h5 className="mb-0 fw-bold history-header-title">
                                        Riwayat Pembayaran Iuran
                                    </h5>
                                    <span className="text-slate-500 small" style={{ fontSize: '0.74rem', fontWeight: 600 }}>Log transaksi iuran yang tercatat di sistem</span>
                                </div>
                            </div>
                            <Link href="/account/transactions" className="btn btn-outline-slate-history btn-sm rounded-pill px-3 py-1 fw-semibold">
                                Lihat Semua Transaksi <i className="fa fa-arrow-right ms-1"></i>
                            </Link>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="history-thead">
                                        <tr>
                                            <th className="ps-4 py-3">INVOICE</th>
                                            <th className="py-3">TAHUN IURAN</th>
                                            <th className="py-3">NOMINAL</th>
                                            <th className="py-3">TANGGAL</th>
                                            <th className="py-3">STATUS</th>
                                            <th className="pe-4 py-3 text-end">AKSI</th>
                                        </tr>
                                    </thead>
                                    <tbody className="history-tbody">
                                        {transactions && transactions.length > 0 ? (
                                            transactions.map((tx, idx) => (
                                                <tr key={idx} className="history-row">
                                                    <td className="ps-4">
                                                        <Link
                                                            href={`/account/transactions/${tx.invoice}`}
                                                            className="fw-bold font-monospace text-primary text-decoration-none d-flex align-items-center gap-1"
                                                        >
                                                            <i className="fa fa-receipt text-slate-400"></i>
                                                            <span>{tx.invoice}</span>
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <span className="badge-tahun-history">
                                                            {formatTransactionYears(tx)}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-bold text-slate-800">
                                                            Rp {FormatPrice(tx.grand_total)}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="text-slate-600 small">
                                                            {formatTransactionDate(tx)}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        {tx.status === "UNPAID" && (
                                                            <span className="badge-status-pill-table bg-pending-pill">
                                                                <i className="fa fa-clock me-1"></i> MENUNGGU
                                                            </span>
                                                        )}
                                                        {tx.status === "PAID" && (
                                                            <span className="badge-status-pill-table bg-paid-pill">
                                                                <i className="fa fa-check-circle me-1"></i> LUNAS
                                                            </span>
                                                        )}
                                                        {tx.status === "EXPIRED" && (
                                                            <span className="badge-status-pill-table bg-expired-pill">
                                                                <i className="fa fa-times-circle me-1"></i> KADALUARSA
                                                            </span>
                                                        )}
                                                        {tx.status === "CANCELLED" && (
                                                            <span className="badge-status-pill-table bg-cancelled-pill">
                                                                <i className="fa fa-ban me-1"></i> DIBATALKAN
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="text-end pe-4">
                                                        <Link
                                                            href={`/account/transactions/${tx.invoice}`}
                                                            className="btn btn-detail-action btn-sm rounded-pill px-3 py-1 fw-semibold shadow-sm"
                                                        >
                                                            <i className="fa fa-eye me-1"></i> Detail
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="text-center py-5 text-secondary">
                                                    <i className="fa fa-folder-open fa-3x mb-3 text-slate-300 d-block"></i>
                                                    <span className="fw-medium">Belum ada riwayat pembayaran iuran tercatat.</span>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    .tagihan-page-container {
                        animation: fadeIn 0.25s ease-in-out;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(6px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    .text-slate-900 {
                        color: #0f172a;
                    }
                    .text-slate-600 {
                        color: #475569;
                    }
                    .text-slate-500 {
                        color: #64748b;
                    }
                    .text-slate-muted {
                        color: #64748b;
                    }
                    .text-dark-title {
                        color: #0f172a;
                    }

                    /* Header Banner */
                    .header-banner-box {
                        background: #ffffff;
                        border: 1.5px solid #cbd5e1 !important;
                    }
                    .header-icon-square {
                        width: 52px;
                        height: 52px;
                        border-radius: 14px;
                        background: linear-gradient(135deg, #064e3b 0%, #059669 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                    }
                    .periode-badge-pill {
                        background-color: #0f172a;
                        color: #ffffff;
                        padding: 7px 16px;
                        border-radius: 9999px;
                        font-weight: 700;
                        font-size: 0.88rem;
                        display: inline-flex;
                        align-items: center;
                    }

                    /* Roadmap Card */
                    .roadmap-card {
                        border: 1.5px solid #e2e8f0 !important;
                    }
                    .step-guide-icon-pill {
                        width: 28px;
                        height: 28px;
                        border-radius: 8px;
                        background-color: #ecfdf5;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                    }
                    .badge-auto-verify {
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1.5px solid #a7f3d0;
                        padding: 6px 14px;
                        border-radius: 9999px;
                        font-size: 0.78rem;
                        font-weight: 700;
                        display: inline-flex;
                        align-items: center;
                    }

                    .step-card {
                        border: 1.5px solid;
                        padding: 20px 14px;
                        border-radius: 16px;
                        transition: all 0.2s ease;
                    }
                    .step-card:hover {
                        transform: translateY(-2px);
                    }
                    .step-card-blue {
                        background-color: #f8fbff;
                        border-color: #bfdbfe;
                    }
                    .step-card-amber {
                        background-color: #fffdf5;
                        border-color: #fde68a;
                    }
                    .step-card-indigo {
                        background-color: #faf5ff;
                        border-color: #ddd6fe;
                    }
                    .step-card-emerald {
                        background-color: #f0fdf4;
                        border-color: #a7f3d0;
                    }

                    .step-number-circle {
                        width: 34px;
                        height: 34px;
                        border-radius: 50%;
                        margin: 0 auto 10px auto;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 800;
                        font-size: 0.9rem;
                        color: #ffffff;
                    }
                    .step-circle-blue {
                        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                        box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);
                    }
                    .step-circle-amber {
                        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                        box-shadow: 0 2px 8px rgba(217, 119, 6, 0.35);
                    }
                    .step-circle-indigo {
                        background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
                        box-shadow: 0 2px 8px rgba(109, 40, 217, 0.35);
                    }
                    .step-circle-emerald {
                        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                        box-shadow: 0 2px 8px rgba(5, 150, 105, 0.35);
                    }

                    /* Multi Year Arrears */
                    .multi-year-card {
                        border: 1.5px solid #fecdd3 !important;
                        border-top: 4px solid #e11d48 !important;
                    }
                    .badge-warning-tunggakan {
                        background-color: #fef2f2;
                        color: #dc2626;
                        border: 1px solid #fca5a5;
                        padding: 3px 10px;
                        border-radius: 9999px;
                        font-weight: 700;
                        font-size: 0.76rem;
                    }
                    .btn-pay-all {
                        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                        color: #ffffff;
                        border: 1.5px solid #0f172a;
                        transition: all 0.2s ease;
                    }
                    .btn-pay-all:hover {
                        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                        color: #ffffff;
                        transform: translateY(-1px);
                    }
                    .arrear-item-box {
                        background-color: #f8fafc;
                        border-color: #e2e8f0;
                        transition: all 0.2s ease;
                    }
                    .arrear-item-box:hover {
                        background-color: #f1f5f9;
                        border-color: #cbd5e1;
                    }
                    .badge-status-current {
                        background-color: #eff6ff;
                        color: #1d4ed8;
                        border: 1px solid #bfdbfe;
                        padding: 2px 8px;
                        border-radius: 9999px;
                        font-size: 0.75rem;
                        font-weight: 700;
                    }
                    .badge-status-tunggakan {
                        background-color: #fef2f2;
                        color: #dc2626;
                        border: 1px solid #fca5a5;
                        padding: 2px 8px;
                        border-radius: 9999px;
                        font-size: 0.75rem;
                        font-weight: 700;
                    }

                    /* Hero Due Cards */
                    .hero-due-card {
                        overflow: hidden;
                        transition: all 0.2s ease;
                    }
                    .hero-card-paid {
                        background: linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%);
                    }
                    .hero-card-pending {
                        background: linear-gradient(135deg, #92400e 0%, #b45309 50%, #d97706 100%);
                    }
                    .hero-card-incart {
                        background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%);
                    }
                    .hero-card-unpaid {
                        background: linear-gradient(135deg, #0f172a 0%, #1e40af 60%, #2563eb 100%);
                    }
                    .hero-card-expired {
                        background: linear-gradient(135deg, #881337 0%, #be123c 50%, #e11d48 100%);
                    }
                    .hero-card-exempt {
                        background: linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #7c3aed 100%);
                    }

                    /* Hero Status Badges (Always Dark Text on White Pill) */
                    .hero-status-pill {
                        background-color: #ffffff !important;
                        padding: 7px 16px;
                        border-radius: 9999px;
                        font-weight: 800;
                        font-size: 0.82rem;
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        letter-spacing: 0.03em;
                    }
                    .hero-status-paid {
                        color: #065f46 !important;
                    }
                    .hero-status-pending {
                        color: #b45309 !important;
                    }
                    .hero-status-incart {
                        color: #1e40af !important;
                    }
                    .hero-status-unpaid {
                        color: #1e3a8a !important;
                    }
                    .hero-status-expired {
                        color: #9f1239 !important;
                    }
                    .hero-status-exempt {
                        color: #5b21b6 !important;
                    }

                    .hero-card-desc-paid {
                        color: #d1fae5;
                        font-size: 0.95rem;
                        line-height: 1.55;
                    }
                    .hero-card-desc-pending {
                        color: #fef3c7;
                        font-size: 0.95rem;
                        line-height: 1.55;
                    }
                    .hero-card-desc-blue {
                        color: #e0e7ff;
                        font-size: 0.95rem;
                        line-height: 1.55;
                    }
                    .hero-card-desc-rose {
                        color: #ffe4e6;
                        font-size: 0.95rem;
                        line-height: 1.55;
                    }
                    .hero-card-desc-purple {
                        color: #ede9fe;
                        font-size: 0.95rem;
                        line-height: 1.55;
                    }

                    .hero-countdown-box {
                        background-color: rgba(0, 0, 0, 0.32);
                        border: 1px solid rgba(255, 255, 255, 0.28);
                        backdrop-filter: blur(4px);
                    }
                    .btn-cart-cta {
                        background-color: #ffffff;
                        color: #1d4ed8;
                        border: none;
                        transition: all 0.2s ease;
                    }
                    .btn-cart-cta:hover {
                        background-color: #eff6ff;
                        color: #1e40af;
                        transform: translateY(-2px);
                    }
                    .btn-pay-now-cta {
                        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                        color: #ffffff;
                        border: none;
                        transition: all 0.2s ease;
                    }
                    .btn-pay-now-cta:hover {
                        background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
                        color: #ffffff;
                        transform: translateY(-2px);
                    }

                    /* Member Summary Card (Right) */
                    .member-summary-card {
                        background-color: #ffffff;
                        border: 1.5px solid #bfdbfe !important;
                        border-top: 4px solid #2563eb !important;
                    }
                    .member-summary-header {
                        background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                        border-bottom: 1.5px solid #bfdbfe;
                    }
                    .summary-header-title {
                        color: #1e3a8a;
                        font-size: 1.05rem;
                    }
                    .summary-header-sub {
                        color: #475569;
                        font-size: 0.74rem;
                        font-weight: 600;
                    }
                    .summary-icon-pill {
                        width: 36px;
                        height: 36px;
                        border-radius: 10px;
                        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 16px;
                    }

                    .info-box-soft-blue {
                        background-color: #f8fbff;
                        border: 1.5px solid #dbeafe;
                    }
                    .info-box-soft-emerald {
                        background-color: #f9fdfa;
                        border: 1.5px solid #d1fae5;
                    }
                    .info-item-label {
                        color: #475569;
                        font-size: 0.72rem;
                        font-weight: 700;
                        letter-spacing: 0.04em;
                    }
                    .kewajiban-box-title {
                        color: #065f46;
                        font-weight: 800;
                        font-size: 0.74rem;
                        letter-spacing: 0.05em;
                        text-transform: uppercase;
                        margin-bottom: 8px;
                    }
                    .badge-expiry-pill {
                        background-color: #ffffff;
                        color: #0f172a;
                        border: 1px solid #cbd5e1;
                        padding: 3px 10px;
                        border-radius: 9999px;
                        font-size: 0.78rem;
                        font-weight: 700;
                    }
                    .duitku-notice-box {
                        background-color: #eff6ff;
                        border: 1.5px solid #bfdbfe;
                        color: #1e40af;
                        line-height: 1.45;
                    }

                    .badge-member-kta {
                        background-color: #eff6ff;
                        color: #1e40af;
                        border: 1px solid #bfdbfe;
                        padding: 3px 10px;
                        border-radius: 6px;
                        font-weight: 700;
                        font-size: 0.84rem;
                    }
                    .badge-member-kategori {
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1px solid #a7f3d0;
                        padding: 3px 10px;
                        border-radius: 6px;
                        font-weight: 700;
                        font-size: 0.8rem;
                    }
                    .badge-tahun-dark {
                        background-color: #0f172a;
                        color: #ffffff;
                        padding: 3px 10px;
                        border-radius: 6px;
                        font-weight: 700;
                        font-size: 0.8rem;
                    }
                    .badge-tahun-history {
                        background-color: #f1f5f9;
                        color: #0f172a;
                        border: 1px solid #cbd5e1;
                        padding: 3px 10px;
                        border-radius: 6px;
                        font-weight: 700;
                        font-size: 0.82rem;
                        display: inline-block;
                    }

                    /* History Table */
                    .history-table-card {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #334155 !important;
                    }
                    .history-table-header {
                        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                        border-bottom: 1.5px solid #cbd5e1;
                    }
                    .history-header-title {
                        color: #0f172a;
                        font-size: 1.05rem;
                    }
                    .history-icon-pill {
                        width: 36px;
                        height: 36px;
                        border-radius: 10px;
                        background: linear-gradient(135deg, #475569 0%, #1e293b 100%);
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 16px;
                    }
                    .btn-outline-slate-history {
                        background-color: #ffffff;
                        color: #334155;
                        border: 1.5px solid #cbd5e1;
                        transition: all 0.2s ease;
                    }
                    .btn-outline-slate-history:hover {
                        background-color: #f1f5f9;
                        color: #0f172a;
                    }

                    .history-thead {
                        background-color: #f8fafc;
                        color: #1e293b;
                        font-size: 0.74rem;
                        letter-spacing: 0.05em;
                        border-bottom: 1.5px solid #e2e8f0;
                    }
                    .history-thead th {
                        color: #1e293b !important;
                        font-weight: 700;
                    }
                    .history-row {
                        transition: background-color 0.15s ease;
                    }
                    .history-row:hover {
                        background-color: #f8fafc;
                    }

                    .invoice-link-pill {
                        background-color: #eff6ff;
                        color: #1d4ed8;
                        border: 1px solid #bfdbfe;
                        border-radius: 6px;
                        padding: 3px 8px;
                        font-weight: 700;
                        font-size: 0.82rem;
                    }
                    .badge-status-pill-table {
                        padding: 5px 12px;
                        border-radius: 9999px;
                        font-size: 0.76rem;
                        font-weight: 700;
                        display: inline-flex;
                        align-items: center;
                    }
                    .bg-paid-pill {
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1px solid #a7f3d0;
                    }
                    .bg-unpaid-pill {
                        background-color: #fffbeb;
                        color: #b45309;
                        border: 1px solid #fde68a;
                    }
                    .bg-expired-pill {
                        background-color: #fff1f2;
                        color: #be123c;
                        border: 1px solid #fca5a5;
                    }
                    .bg-cancelled-pill {
                        background-color: #f1f5f9;
                        color: #475569;
                        border: 1px solid #cbd5e1;
                    }

                    .btn-detail-action {
                        background-color: #eff6ff;
                        color: #1d4ed8;
                        border: 1.5px solid #bfdbfe;
                        transition: all 0.2s ease;
                    }
                    .btn-detail-action:hover {
                        background-color: #1d4ed8;
                        color: #ffffff;
                        border-color: #1d4ed8;
                        transform: translateY(-1px);
                    }
                `}</style>
            </LayoutAccount>
        </>
    );
}