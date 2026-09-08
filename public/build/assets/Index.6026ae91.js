import{u as y,r as E,R as e,H as k,L as r,d as v}from"./app.8d537c3c.js";import{L as A}from"./Account.c55ea660.js";import{f as s}from"./FormatPrice.72b07cf2.js";import"./Dropdown.ff6db546.js";function R(){var f,b,p,u,g,h,x;const{activeDue:a,carts:I,transactions:m=[],user:l}=y().props,[c,N]=E.exports.useState(((f=a==null?void 0:a.activeInvoice)==null?void 0:f.seconds_remaining)||0);E.exports.useEffect(()=>{if(!c||c<=0)return;const t=setInterval(()=>{N(n=>n<=1?(clearInterval(t),0):n-1)},1e3);return()=>clearInterval(t)},[c]);const w=t=>{if(t<=0)return"Waktu Habis (Kadaluarsa)";const n=Math.floor(t/3600),i=Math.floor(t%3600/60),d=t%60;return`${n} Jam ${i} Menit ${d} Detik`},o=t=>{v.Inertia.post("/account/tagihan/create-due-cart",{tahun:t})};return e.createElement(e.Fragment,null,e.createElement(k,{title:"Pusat Tagihan & Iuran - IKATWI"}),e.createElement(A,null,e.createElement("div",{className:"container-fluid py-4 tagihan-page-container"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm border-0 header-banner-box"},e.createElement("div",{className:"d-flex align-items-center mb-3 mb-md-0"},e.createElement("div",{className:"header-icon-square me-3 shadow"},e.createElement("i",{className:"fa fa-credit-card fa-2x text-white"})),e.createElement("div",null,e.createElement("h4",{className:"mb-1 fw-bold text-dark-title",style:{letterSpacing:"-0.02em"}},"Pusat Tagihan & Iuran Anggota"),e.createElement("p",{className:"mb-0 text-slate-muted small"},"Kelola pembayaran iuran tahunan dan pantau status keanggotaan IKATWI Anda secara resmi."))),e.createElement("div",null,e.createElement("span",{className:"periode-badge-pill shadow-sm"},e.createElement("i",{className:"fa fa-calendar-alt text-warning me-2"}),"Periode ",(a==null?void 0:a.tahun)||new Date().getFullYear()))),e.createElement("div",{className:"card border-0 rounded-4 shadow-sm mb-4 bg-white overflow-hidden roadmap-card"},e.createElement("div",{className:"card-body p-4"},e.createElement("div",{className:"d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mb-4 pb-2 border-bottom"},e.createElement("h6",{className:"fw-bold text-slate-800 text-uppercase mb-0 small d-flex align-items-center gap-2"},e.createElement("span",{className:"step-guide-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-route text-emerald-700"})),e.createElement("span",{style:{color:"#0f172a",fontWeight:800}},"ALUR PEMBAYARAN CEPAT & OTOMATIS")),e.createElement("span",{className:"badge-auto-verify shadow-sm"},e.createElement("i",{className:"fa fa-shield-alt text-emerald-600 me-2"}),e.createElement("span",null,"Verifikasi Otomatis 24 Jam via Payment Gateway"))),e.createElement("div",{className:"row g-3 text-center pt-1"},e.createElement("div",{className:"col-6 col-md-3"},e.createElement("div",{className:"rounded-4 h-100 position-relative step-card step-card-blue shadow-sm"},e.createElement("div",{className:"step-number-circle step-circle-blue mb-2"},"1"),e.createElement("h6",{className:"fw-bold mb-1 text-slate-900 fs-6"},"Tagihan Iuran"),e.createElement("small",{className:"text-slate-600 d-block",style:{fontSize:"0.78rem",fontWeight:500}},"Cek status tahun berjalan"))),e.createElement("div",{className:"col-6 col-md-3"},e.createElement("div",{className:"rounded-4 h-100 position-relative step-card step-card-amber shadow-sm"},e.createElement("div",{className:"step-number-circle step-circle-amber mb-2"},"2"),e.createElement("h6",{className:"fw-bold mb-1 text-slate-900 fs-6"},"Keranjang"),e.createElement("small",{className:"text-slate-600 d-block",style:{fontSize:"0.78rem",fontWeight:500}},"Review item & nominal"))),e.createElement("div",{className:"col-6 col-md-3"},e.createElement("div",{className:"rounded-4 h-100 position-relative step-card step-card-indigo shadow-sm"},e.createElement("div",{className:"step-number-circle step-circle-indigo mb-2"},"3"),e.createElement("h6",{className:"fw-bold mb-1 text-slate-900 fs-6"},"Checkout"),e.createElement("small",{className:"text-slate-600 d-block",style:{fontSize:"0.78rem",fontWeight:500}},"Konfirmasi data anggota"))),e.createElement("div",{className:"col-6 col-md-3"},e.createElement("div",{className:"rounded-4 h-100 position-relative step-card step-card-emerald shadow-sm"},e.createElement("div",{className:"step-number-circle step-circle-emerald mb-2"},"4"),e.createElement("h6",{className:"fw-bold mb-1 text-slate-900 fs-6"},"Bayar (Duitku)"),e.createElement("small",{className:"text-slate-600 d-block",style:{fontSize:"0.78rem",fontWeight:500}},"Pilih VA / QRIS / Bank")))))),(a==null?void 0:a.hasMultipleDues)&&e.createElement("div",{className:"card border-0 rounded-4 shadow-sm mb-4 bg-white overflow-hidden multi-year-card"},e.createElement("div",{className:"card-header bg-white border-0 py-3 ps-4 pe-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center"},e.createElement("div",{className:"mb-2 mb-md-0"},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("span",{className:"badge-warning-tunggakan"},e.createElement("i",{className:"fa fa-exclamation-triangle me-1"})," Perhatian"),e.createElement("h5",{className:"mb-0 fw-bold text-slate-900"},"Rincian Tagihan & Tunggakan Iuran (",(b=a.unpaidYearsList)==null?void 0:b.length," Tahun)")),e.createElement("small",{className:"text-slate-600 d-block mt-1"},"Anda memiliki akumulasi tagihan iuran yang belum lunas. Anda dapat membayar semua tahun sekaligus atau per tahun.")),e.createElement("button",{onClick:()=>o("all"),className:"btn btn-pay-all rounded-pill px-4 py-2 fw-bold shadow"},e.createElement("i",{className:"fa fa-bolt me-2 text-warning"}),"Bayar Semua Sekaligus (Rp ",s(a.totalArrears),")")),e.createElement("div",{className:"card-body p-4 pt-0"},e.createElement("div",{className:"row g-3"},(p=a.unpaidYearsList)==null?void 0:p.map((t,n)=>e.createElement("div",{key:n,className:"col-12 col-md-6"},e.createElement("div",{className:"p-3 rounded-3 border d-flex justify-content-between align-items-center arrear-item-box"},e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center gap-2 mb-2"},e.createElement("span",{className:"badge-tahun-dark"},"Tahun ",t.tahun),t.isCurrentYear?e.createElement("span",{className:"badge-status-current"},"Tahun Berjalan"):e.createElement("span",{className:"badge-status-tunggakan"},"Tunggakan")),e.createElement("strong",{className:"text-emerald-700 fs-5 fw-extrabold"},"Rp ",s(t.amount))),e.createElement("div",null,t.status==="IN_CART"?e.createElement(r,{href:"/carts",className:"btn btn-sm btn-outline-primary rounded-pill px-3 py-1 fw-semibold shadow-sm"},"Di Keranjang ",e.createElement("i",{className:"fa fa-arrow-right ms-1"})):t.status==="UNPAID_PENDING"?e.createElement(r,{href:`/account/transactions/${t.activeInvoice}`,className:"btn btn-sm btn-warning rounded-pill px-3 py-1 fw-bold shadow-sm text-dark"},"Bayar Invoice ",e.createElement("i",{className:"fa fa-external-link-alt ms-1"})):e.createElement("button",{onClick:()=>o(t.tahun),className:"btn btn-sm btn-primary rounded-pill px-3 py-1 fw-semibold shadow-sm"},"+ Keranjang")))))))),e.createElement("div",{className:"row g-4 mb-4"},e.createElement("div",{className:"col-12 col-lg-8"},(a==null?void 0:a.status)==="PAID"&&e.createElement("div",{className:"card border-0 rounded-4 shadow hero-due-card hero-card-paid h-100"},e.createElement("div",{className:"card-body p-4 p-md-5 d-flex flex-column justify-content-between position-relative z-1"},e.createElement("div",null,e.createElement("div",{className:"d-flex justify-content-between align-items-start mb-3"},e.createElement("span",{className:"hero-status-pill hero-status-paid shadow-sm"},e.createElement("i",{className:"fa fa-check-circle fs-6"}),e.createElement("span",null,"SUDAH LUNAS & AKTIF")),e.createElement("i",{className:"fa fa-shield-alt fa-3x text-white opacity-25"})),e.createElement("h3",{className:"fw-extrabold mb-2 text-white",style:{letterSpacing:"-0.02em"}},"Iuran Tahun ",a.tahun," Telah Lunas"),e.createElement("p",{className:"mb-4 hero-card-desc-paid"},"Terima kasih atas partisipasi aktif Anda. Hak keanggotaan dan akses fitur eksklusif IKATWI Anda aktif sampai 31 Desember ",a.tahun,".")),e.createElement("div",{className:"d-flex flex-wrap gap-2"},e.createElement(r,{href:"/account/ekta",className:"btn btn-light rounded-pill px-4 py-2 fw-bold text-emerald-800 shadow"},e.createElement("i",{className:"fa fa-id-card me-2 fs-6"})," Lihat E-KTA Digital"),e.createElement(r,{href:"/account/materi",className:"btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"},e.createElement("i",{className:"fa fa-play-circle me-2"})," Akses Materi Video")))),(a==null?void 0:a.status)==="UNPAID_PENDING"&&e.createElement("div",{className:"card border-0 rounded-4 shadow hero-due-card hero-card-pending h-100"},e.createElement("div",{className:"card-body p-4 p-md-5 d-flex flex-column justify-content-between position-relative z-1"},e.createElement("div",null,e.createElement("div",{className:"d-flex justify-content-between align-items-start mb-3"},e.createElement("span",{className:"hero-status-pill hero-status-pending shadow-sm"},e.createElement("i",{className:"fa fa-clock fs-6"}),e.createElement("span",null,"MENUNGGU PEMBAYARAN")),e.createElement("i",{className:"fa fa-receipt fa-3x text-white opacity-25"})),e.createElement("h3",{className:"fw-extrabold mb-1 text-white",style:{letterSpacing:"-0.02em"}},"Invoice: ",(u=a.activeInvoice)==null?void 0:u.invoice),e.createElement("p",{className:"mb-3 hero-card-desc-pending"},"Tagihan iuran Anda sedang menunggu pembayaran. Selesaikan pembayaran sebelum batas waktu 24 jam berakhir."),e.createElement("div",{className:"p-3 rounded-3 mb-4 d-inline-flex align-items-center hero-countdown-box"},e.createElement("i",{className:"fa fa-hourglass-half me-2 fs-5 text-warning"}),e.createElement("div",null,e.createElement("small",{className:"d-block text-amber-100 fw-medium"},"Sisa Waktu Pembayaran (1x24 Jam):"),e.createElement("strong",{className:"fs-6 font-monospace text-white"},w(c))))),e.createElement("div",{className:"d-flex flex-wrap gap-3 align-items-center"},e.createElement(r,{href:`/account/transactions/${(g=a.activeInvoice)==null?void 0:g.invoice}`,className:"btn btn-light btn-lg rounded-pill px-4 py-2 fw-bold shadow",style:{color:"#0f172a"}},e.createElement("i",{className:"fa fa-credit-card me-2 text-amber-600"}),"Bayar Sekarang (Rp ",s(((h=a.activeInvoice)==null?void 0:h.grand_total)||a.amount),")"),e.createElement(r,{href:`/account/transactions/${(x=a.activeInvoice)==null?void 0:x.invoice}`,className:"btn btn-outline-light rounded-pill px-3 py-2 fw-semibold small"},e.createElement("i",{className:"fa fa-receipt me-1"})," Detail & Batalkan")))),(a==null?void 0:a.status)==="IN_CART"&&e.createElement("div",{className:"card border-0 rounded-4 shadow hero-due-card hero-card-incart h-100"},e.createElement("div",{className:"card-body p-4 p-md-5 d-flex flex-column justify-content-between position-relative z-1"},e.createElement("div",null,e.createElement("div",{className:"d-flex justify-content-between align-items-start mb-3"},e.createElement("span",{className:"hero-status-pill hero-status-incart shadow-sm"},e.createElement("i",{className:"fa fa-shopping-cart fs-6"}),e.createElement("span",null,"SUDAH DI KERANJANG")),e.createElement("i",{className:"fa fa-shopping-bag fa-3x text-white opacity-25"})),e.createElement("h3",{className:"fw-extrabold mb-2 text-white",style:{letterSpacing:"-0.02em"}},"Tagihan Iuran ",a.tahun," Tersedia"),e.createElement("p",{className:"mb-4 hero-card-desc-blue"},"Tagihan iuran anggota Anda sudah berada di dalam keranjang belanja. Silakan lanjutkan ke checkout untuk menyelesaikan pembayaran via Duitku Gateway.")),e.createElement("div",null,e.createElement(r,{href:"/carts",className:"btn btn-cart-cta btn-lg rounded-pill px-5 py-3 fw-bold shadow"},e.createElement("span",null,"Buka Keranjang & Bayar (Rp ",s(a.amount),")"),e.createElement("i",{className:"fa fa-arrow-right ms-2.5"}))))),(a==null?void 0:a.status)==="UNPAID_NO_CART"&&e.createElement("div",{className:"card border-0 rounded-4 shadow hero-due-card hero-card-unpaid h-100"},e.createElement("div",{className:"card-body p-4 p-md-5 d-flex flex-column justify-content-between position-relative z-1"},e.createElement("div",null,e.createElement("div",{className:"d-flex justify-content-between align-items-start mb-3"},e.createElement("span",{className:"hero-status-pill hero-status-unpaid shadow-sm"},e.createElement("i",{className:"fa fa-exclamation-circle fs-6"}),e.createElement("span",null,"BELUM DIBAYAR")),e.createElement("i",{className:"fa fa-money-check-alt fa-3x text-white opacity-25"})),e.createElement("h3",{className:"fw-extrabold mb-2 text-white",style:{letterSpacing:"-0.02em"}},"Iuran Anggota Tahun ",a.tahun),e.createElement("p",{className:"mb-4 hero-card-desc-blue"},"Kewajiban iuran anggota sebesar ",e.createElement("strong",null,"Rp ",s(a.amount))," untuk periode tahun ",a.tahun,". Klik tombol di bawah untuk langsung memproses pembayaran secara otomatis.")),e.createElement("div",null,e.createElement("button",{onClick:()=>o(a.tahun),className:"btn btn-pay-now-cta btn-lg rounded-pill px-5 py-3 fw-bold shadow"},e.createElement("i",{className:"fa fa-bolt me-2"}),"Bayar Tagihan Sekarang")))),(a==null?void 0:a.status)==="EXPIRED"&&e.createElement("div",{className:"card border-0 rounded-4 shadow hero-due-card hero-card-expired h-100"},e.createElement("div",{className:"card-body p-4 p-md-5 d-flex flex-column justify-content-between position-relative z-1"},e.createElement("div",null,e.createElement("div",{className:"d-flex justify-content-between align-items-start mb-3"},e.createElement("span",{className:"hero-status-pill hero-status-expired shadow-sm"},e.createElement("i",{className:"fa fa-times-circle fs-6"}),e.createElement("span",null,"INVOICE KADALUARSA")),e.createElement("i",{className:"fa fa-history fa-3x text-white opacity-25"})),e.createElement("h3",{className:"fw-extrabold mb-2 text-white",style:{letterSpacing:"-0.02em"}},"Invoice Melewati Batas 24 Jam"),e.createElement("p",{className:"mb-4 hero-card-desc-rose"},"Invoice sebelumnya telah kadaluarsa karena tidak dibayar dalam 1x24 jam. Anda dapat langsung membuat tagihan baru sekarang.")),e.createElement("div",null,e.createElement("button",{onClick:()=>o(a.tahun),className:"btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold text-rose-700 shadow"},e.createElement("i",{className:"fa fa-redo me-2"}),"Buat Tagihan Baru & Bayar")))),(a==null?void 0:a.status)==="EXEMPT"&&e.createElement("div",{className:"card border-0 rounded-4 shadow hero-due-card hero-card-exempt h-100"},e.createElement("div",{className:"card-body p-4 p-md-5 d-flex flex-column justify-content-between position-relative z-1"},e.createElement("div",null,e.createElement("div",{className:"d-flex justify-content-between align-items-start mb-3"},e.createElement("span",{className:"hero-status-pill hero-status-exempt shadow-sm"},e.createElement("i",{className:"fa fa-crown text-amber-500 fs-6"}),e.createElement("span",null,"ANGGOTA KEHORMATAN")),e.createElement("i",{className:"fa fa-award fa-3x text-white opacity-25"})),e.createElement("h3",{className:"fw-extrabold mb-2 text-white",style:{letterSpacing:"-0.02em"}},"Bebas Biaya Iuran Tahunan"),e.createElement("p",{className:"mb-4 hero-card-desc-purple"},"Sebagai Anggota Kehormatan IKATWI, Anda dibebaskan dari kewajiban iuran tahunan dan seluruh akses fitur telah aktif.")),e.createElement("div",null,e.createElement(r,{href:"/account/ekta",className:"btn btn-light rounded-pill px-4 py-2 fw-bold text-purple-900 shadow"},e.createElement("i",{className:"fa fa-id-card me-2"})," Akses E-KTA"))))),e.createElement("div",{className:"col-12 col-lg-4"},e.createElement("div",{className:"card border-0 rounded-4 shadow-sm h-100 member-summary-card"},e.createElement("div",{className:"card-header member-summary-header py-3 px-4 d-flex align-items-center justify-content-between"},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("span",{className:"summary-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-info-circle text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-bold summary-header-title"},"Rincian Iuran Anggota"),e.createElement("span",{className:"summary-header-sub"},"Status & kewajiban resmi")))),e.createElement("div",{className:"card-body p-4 d-flex flex-column gap-3"},e.createElement("div",{className:"p-3 rounded-3 info-box-soft-blue"},e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2"},e.createElement("span",{className:"info-item-label"},"NAMA ANGGOTA:"),e.createElement("strong",{className:"text-slate-900 fs-6 text-uppercase"},(l==null?void 0:l.name)||"-")),e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2"},e.createElement("span",{className:"info-item-label"},"NO. ANGGOTA:"),e.createElement("span",{className:"badge-member-kta font-monospace"},(l==null?void 0:l.no_anggota)||"-")),e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-0"},e.createElement("span",{className:"info-item-label"},"KATEGORI:"),e.createElement("span",{className:"badge-member-kategori"},(l==null?void 0:l.status_anggota)||"Anggota Biasa"))),e.createElement("div",{className:"p-3 rounded-3 info-box-soft-emerald"},e.createElement("h6",{className:"kewajiban-box-title"},"KEWAJIBAN IURAN TAHUNAN"),e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2"},e.createElement("span",{className:"text-slate-700 small fw-semibold"},"Iuran Pokok Tahunan"),e.createElement("span",{className:"fw-extrabold text-emerald-800 fs-5"},"Rp ",s((a==null?void 0:a.amount)||3e5))),e.createElement("div",{className:"d-flex justify-content-between align-items-center text-muted small"},e.createElement("span",{className:"text-slate-600"},"Batas Waktu Bayar"),e.createElement("span",{className:"badge-expiry-pill font-monospace"},"1x24 Jam per invoice"))),e.createElement("div",{className:"p-3 rounded-3 duitku-notice-box small"},e.createElement("i",{className:"fa fa-shield-alt me-2 text-primary fs-6"}),e.createElement("span",null,"Pembayaran otomatis diverifikasi via ",e.createElement("strong",null,"Duitku Payment Gateway")," (BCA, Mandiri, BNI, BRI, QRIS).")))))),e.createElement("div",{className:"card border-0 rounded-4 shadow-sm bg-white overflow-hidden history-table-card"},e.createElement("div",{className:"card-header history-table-header py-3 px-4 d-flex justify-content-between align-items-center"},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("span",{className:"history-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-history text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-bold history-header-title"},"Riwayat Pembayaran Iuran"),e.createElement("span",{className:"text-slate-500 small",style:{fontSize:"0.74rem",fontWeight:600}},"Log transaksi iuran yang tercatat di sistem"))),e.createElement(r,{href:"/account/transactions",className:"btn btn-outline-slate-history btn-sm rounded-pill px-3 py-1 fw-semibold"},"Lihat Semua Transaksi ",e.createElement("i",{className:"fa fa-arrow-right ms-1"}))),e.createElement("div",{className:"card-body p-0"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-hover align-middle mb-0"},e.createElement("thead",{className:"history-thead"},e.createElement("tr",null,e.createElement("th",{className:"ps-4 py-3"},"INVOICE"),e.createElement("th",{className:"py-3"},"TAHUN IURAN"),e.createElement("th",{className:"py-3"},"NOMINAL"),e.createElement("th",{className:"py-3"},"TANGGAL"),e.createElement("th",{className:"py-3"},"STATUS"),e.createElement("th",{className:"pe-4 py-3 text-end"},"AKSI"))),e.createElement("tbody",{className:"history-tbody"},m&&m.length>0?m.map((t,n)=>{var i,d;return e.createElement("tr",{key:n,className:"history-row"},e.createElement("td",{className:"ps-4"},e.createElement(r,{href:`/account/transactions/${t.invoice}`,className:"fw-bold font-monospace text-primary text-decoration-none d-flex align-items-center gap-1"},e.createElement("i",{className:"fa fa-receipt text-slate-400"}),e.createElement("span",null,t.invoice))),e.createElement("td",null,e.createElement("span",{className:"badge-tahun-history"},((d=(i=t.cart_items)==null?void 0:i[0])==null?void 0:d.tahun)||(a==null?void 0:a.tahun)||"-")),e.createElement("td",null,e.createElement("span",{className:"fw-bold text-slate-800"},"Rp ",s(t.grand_total))),e.createElement("td",null,e.createElement("span",{className:"text-slate-600 small"},t.created_at?new Date(t.created_at).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"}):"-")),e.createElement("td",null,t.status==="UNPAID"&&e.createElement("span",{className:"badge-status-pill-table bg-pending-pill"},e.createElement("i",{className:"fa fa-clock me-1"})," MENUNGGU"),t.status==="PAID"&&e.createElement("span",{className:"badge-status-pill-table bg-paid-pill"},e.createElement("i",{className:"fa fa-check-circle me-1"})," LUNAS"),t.status==="EXPIRED"&&e.createElement("span",{className:"badge-status-pill-table bg-expired-pill"},e.createElement("i",{className:"fa fa-times-circle me-1"})," KADALUARSA"),t.status==="CANCELLED"&&e.createElement("span",{className:"badge-status-pill-table bg-cancelled-pill"},e.createElement("i",{className:"fa fa-ban me-1"})," DIBATALKAN")),e.createElement("td",{className:"text-end pe-4"},e.createElement(r,{href:`/account/transactions/${t.invoice}`,className:"btn btn-detail-action btn-sm rounded-pill px-3 py-1 fw-semibold shadow-sm"},e.createElement("i",{className:"fa fa-eye me-1"})," Detail")))}):e.createElement("tr",null,e.createElement("td",{colSpan:"6",className:"text-center py-5 text-secondary"},e.createElement("i",{className:"fa fa-folder-open fa-3x mb-3 text-slate-300 d-block"}),e.createElement("span",{className:"fw-medium"},"Belum ada riwayat pembayaran iuran tercatat."))))))))),e.createElement("style",null,`
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
                `)))}export{R as default};
