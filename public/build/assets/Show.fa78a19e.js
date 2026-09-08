import{u as A,r as f,R as e,H as I,L as s,d as p}from"./app.4e2bc322.js";import{L as b}from"./Account.d7b21155.js";import{f as g}from"./FormatPrice.72b07cf2.js";import{S as u}from"./sweetalert2.all.403e967b.js";import"./Dropdown.fc4d43dc.js";function B(x){var i,o,d,c,m;const h=A().props||{},a=x.transaction||h.transaction,[l,E]=f.exports.useState((a==null?void 0:a.seconds_remaining)||0);if(f.exports.useEffect(()=>{if(!a||a.status!=="UNPAID"||l<=0)return;const t=setInterval(()=>{E(r=>r<=1?(clearInterval(t),0):r-1)},1e3);return()=>clearInterval(t)},[a==null?void 0:a.status,l]),!a)return e.createElement(b,null,e.createElement("div",{className:"container-fluid py-5 text-center"},e.createElement("div",{className:"spinner-border text-primary",role:"status"},e.createElement("span",{className:"visually-hidden"},"Memuat..."))));const N=t=>{if(t<=0)return"00:00:00 (Batas Waktu Habis)";const r=Math.floor(t/3600),n=Math.floor(t%3600/60),v=t%60;return`${String(r).padStart(2,"0")} Jam ${String(n).padStart(2,"0")} Menit ${String(v).padStart(2,"0")} Detik`},w=()=>{u.fire({title:"Batalkan Transaksi?",text:"Transaksi ini akan dibatalkan dan Anda dapat membuat tagihan baru jika diperlukan.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc2626",cancelButtonColor:"#64748b",confirmButtonText:"Ya, Batalkan!",cancelButtonText:"Kembali"}).then(t=>{t.isConfirmed&&p.Inertia.post(`/account/transactions/${a.invoice}/cancel`,{},{onSuccess:()=>{u.fire({title:"Dibatalkan",text:"Transaksi berhasil dibatalkan.",icon:"success",timer:2e3,showConfirmButton:!1})}})})},k=()=>{p.Inertia.post(`/account/transactions/${a.invoice}/retry`)},y=t=>{switch(t){case"PAID":return e.createElement("span",{className:"badge-status-pill badge-status-paid"},e.createElement("i",{className:"fa fa-check-circle fs-6"}),e.createElement("span",null,"LUNAS & TERVERIFIKASI"));case"UNPAID":return e.createElement("span",{className:"badge-status-pill badge-status-unpaid"},e.createElement("i",{className:"fa fa-clock fs-6"}),e.createElement("span",null,"MENUNGGU PEMBAYARAN"));case"EXPIRED":return e.createElement("span",{className:"badge-status-pill badge-status-expired"},e.createElement("i",{className:"fa fa-hourglass-end fs-6"}),e.createElement("span",null,"KADALUARSA (LEBIH DARI 24 JAM)"));case"CANCELLED":return e.createElement("span",{className:"badge-status-pill badge-status-cancelled"},e.createElement("i",{className:"fa fa-times-circle fs-6"}),e.createElement("span",null,"DIBATALKAN"));default:return e.createElement("span",{className:"badge bg-secondary px-3 py-2 rounded-pill fs-6"},t||"UNKNOWN")}};return e.createElement(e.Fragment,null,e.createElement(I,{title:`Detail Transaksi ${a.invoice} - IKATWI`}),e.createElement(b,null,e.createElement("div",{className:"container-fluid py-4 transaction-detail-page"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm border-0 header-card"},e.createElement("div",{className:"d-flex align-items-center mb-3 mb-md-0"},e.createElement("div",{className:"header-icon-wrap me-3 shadow"},e.createElement("i",{className:"fa fa-receipt fa-2x text-white"})),e.createElement("div",null,e.createElement("h4",{className:"mb-1 fw-bold text-slate-900",style:{letterSpacing:"-0.02em"}},"Detail Transaksi"),e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap"},e.createElement("span",{className:"text-slate-muted small fw-medium"},"No. Invoice:"),e.createElement("span",{className:"invoice-pill font-monospace"},e.createElement("i",{className:"fa fa-hashtag me-1 text-primary"}),a.invoice)))),e.createElement("div",{className:"d-flex gap-2 flex-wrap"},e.createElement(s,{href:"/account/transactions",className:"btn btn-outline-slate rounded-pill px-3 py-2 fw-semibold",style:{fontSize:"0.84rem"}},e.createElement("i",{className:"fa fa-arrow-left me-1"})," Daftar Transaksi"),e.createElement(s,{href:"/account/tagihan",className:"btn btn-menu-tagihan rounded-pill px-4 py-2 fw-semibold shadow-sm",style:{fontSize:"0.84rem"}},e.createElement("i",{className:"fa fa-credit-card me-1"})," Menu Tagihan"))),e.createElement("div",{className:"row g-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:`card border-0 rounded-4 shadow-sm overflow-hidden status-hero-card ${a.status==="PAID"?"status-card-paid":a.status==="UNPAID"?"status-card-unpaid":"status-card-expired"}`},e.createElement("div",{className:"card-body p-4"},e.createElement("div",{className:"row align-items-center g-3"},e.createElement("div",{className:"col-12 col-md-6 d-flex align-items-center"},e.createElement("div",{className:`status-icon-wrap me-3 ${a.status==="PAID"?"bg-paid-icon":a.status==="UNPAID"?"bg-unpaid-icon":"bg-expired-icon"}`},e.createElement("i",{className:`fa fa-${a.status==="PAID"?"check":a.status==="UNPAID"?"clock":"times"} fa-2x text-white`})),e.createElement("div",null,e.createElement("span",{className:"status-label-sub d-block"},"STATUS PEMBAYARAN"),e.createElement("div",{className:"mt-2"},y(a.status)))),e.createElement("div",{className:"col-12 col-md-6 text-md-end"},a.status==="UNPAID"&&e.createElement("div",{className:"d-flex flex-column flex-sm-row justify-content-md-end gap-2 align-items-sm-center"},a.reference&&e.createElement("a",{href:`https://app-prod.duitku.com/redirect_checkout?reference=${a.reference}&lang=id`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-bayar-action btn-lg px-4 rounded-pill shadow fw-bold d-inline-flex align-items-center justify-content-center"},e.createElement("i",{className:"fa fa-external-link-alt me-2"}),"BAYAR SEKARANG"),e.createElement("button",{onClick:w,className:"btn btn-outline-danger rounded-pill px-3 py-2 small fw-semibold"},e.createElement("i",{className:"fa fa-ban me-1"})," Batalkan")),(a.status==="EXPIRED"||a.status==="CANCELLED")&&e.createElement("button",{onClick:k,className:"btn btn-retry-action btn-lg px-4 rounded-pill shadow fw-bold"},e.createElement("i",{className:"fa fa-redo me-2"}),"Buat Tagihan Baru / Bayar Ulang"),a.status==="PAID"&&e.createElement(s,{href:"/account/ekta",className:"btn btn-ekta-action btn-lg px-4 py-2 rounded-pill fw-bold d-inline-flex align-items-center justify-content-center shadow"},e.createElement("i",{className:"fa fa-id-card me-2 fs-5"}),"Lihat E-KTA Anggota"))),a.status==="UNPAID"&&e.createElement("div",{className:"mt-4 p-3 countdown-alert-box rounded-3 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center"},e.createElement("div",{className:"d-flex align-items-center mb-2 mb-sm-0"},e.createElement("div",{className:"countdown-icon-circle me-3"},e.createElement("i",{className:"fa fa-stopwatch text-amber-700 fa-lg"})),e.createElement("div",null,e.createElement("strong",{className:"text-dark d-block fw-bold"},"Batas Waktu Pembayaran (1x24 Jam)"),e.createElement("small",{className:"text-slate-600"},"Transaksi ini akan otomatis kadaluarsa jika tidak dibayar sebelum waktu habis."))),e.createElement("div",{className:"countdown-timer-pill font-monospace"},e.createElement("i",{className:"fa fa-hourglass-half me-1 text-amber-900"}),N(l))),a.status==="EXPIRED"&&e.createElement("div",{className:"mt-4 p-3 expired-alert-box rounded-3 d-flex align-items-center"},e.createElement("i",{className:"fa fa-exclamation-triangle fa-2x text-rose-600 me-3"}),e.createElement("div",null,e.createElement("strong",{className:"text-rose-700 d-block fw-bold"},"Transaksi Telah Kadaluarsa"),e.createElement("small",{className:"text-slate-600"},"Batas waktu 24 jam telah terlewati. Silakan klik tombol ",e.createElement("strong",null,'"Buat Tagihan Baru / Bayar Ulang"')," di atas untuk memproses ulang pembayaran.")))))),e.createElement("div",{className:"col-lg-6"},e.createElement("div",{className:"card border-0 rounded-4 shadow-sm h-100 detail-card card-member-info"},e.createElement("div",{className:"card-header detail-card-header member-card-header py-3 px-4 d-flex align-items-center justify-content-between"},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("span",{className:"card-icon-pill bg-blue-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-user-circle text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-bold member-header-title"},"Informasi Anggota"),e.createElement("span",{className:"text-slate-600 small",style:{fontSize:"0.75rem",fontWeight:600}},"Data pemegang tagihan iuran"))),e.createElement("span",{className:"badge-member-status-pill shadow-sm"},e.createElement("i",{className:"fa fa-check-circle me-1"})," Terdaftar Resmi")),e.createElement("div",{className:"card-body p-4 d-flex flex-column gap-3"},e.createElement("div",{className:"p-3 rounded-3 info-box-blue"},e.createElement("small",{className:"info-box-label d-block mb-1 text-blue-label"},"NAMA LENGKAP"),e.createElement("div",{className:"fw-bold fs-5 text-slate-900 d-flex align-items-center gap-2"},e.createElement("span",{className:"name-icon-avatar"},e.createElement("i",{className:"fa fa-user text-primary"})),e.createElement("span",{className:"text-uppercase",style:{letterSpacing:"0.01em"}},((i=a.user)==null?void 0:i.name)||"-"))),e.createElement("div",{className:"p-3 rounded-3 info-box-blue"},e.createElement("small",{className:"info-box-label d-block mb-2 text-blue-label"},"NOMOR ANGGOTA & NIK"),e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap"},e.createElement("span",{className:"badge-kta-pill shadow-sm"},e.createElement("i",{className:"fa fa-id-card me-1 text-primary"}),e.createElement("strong",null,"KTA:")," ",((o=a.user)==null?void 0:o.no_anggota)||"-"),((d=a.user)==null?void 0:d.nik)&&e.createElement("span",{className:"badge-nik-pill shadow-sm"},e.createElement("i",{className:"fa fa-fingerprint me-1 text-slate-500"}),e.createElement("strong",null,"NIK:")," ",a.user.nik))),e.createElement("div",{className:"p-3 rounded-3 info-box-blue"},e.createElement("small",{className:"info-box-label d-block mb-2 text-blue-label"},"WILAYAH PENGURUS (DPW & DPC)"),e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap"},((c=a.province)==null?void 0:c.name)&&e.createElement("span",{className:"badge-dpw-highlight shadow-sm"},e.createElement("i",{className:"fa fa-landmark me-1 text-emerald-600"}),a.province.name.startsWith("DPW")?a.province.name:`DPW ${a.province.name}`),((m=a.city)==null?void 0:m.name)&&e.createElement("span",{className:"badge-dpc-highlight shadow-sm"},e.createElement("i",{className:"fa fa-city me-1 text-indigo-600"}),a.city.name.startsWith("DPC")?a.city.name:`DPC ${a.city.name}`)))))),e.createElement("div",{className:"col-lg-6"},e.createElement("div",{className:"card border-0 rounded-4 shadow-sm h-100 detail-card card-payment-info"},e.createElement("div",{className:"card-header detail-card-header payment-card-header py-3 px-4 d-flex align-items-center justify-content-between"},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("span",{className:"card-icon-pill bg-emerald-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-money-bill-wave text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-bold payment-header-title"},"Rincian Pembayaran"),e.createElement("span",{className:"text-slate-600 small",style:{fontSize:"0.75rem",fontWeight:600}},"Detail waktu dan total transaksi"))),e.createElement("span",{className:"badge-iuran-status-pill shadow-sm"},e.createElement("i",{className:"fa fa-shield-alt me-1"})," Iuran Resmi")),e.createElement("div",{className:"card-body p-4 d-flex flex-column gap-3"},e.createElement("div",{className:"row g-3"},e.createElement("div",{className:"col-12 col-sm-6"},e.createElement("div",{className:"p-3 rounded-3 h-100 info-box-emerald"},e.createElement("small",{className:"info-box-label d-block mb-1 text-emerald-label"},"TAHUN IURAN / JENIS"),e.createElement("span",{className:"badge-tahun-hero shadow-sm"},e.createElement("i",{className:"fa fa-calendar-alt text-amber-300 me-1"}),a.tahun&&a.tahun!=="-"?`Tahun ${a.tahun}`:"Iuran / Donasi"))),e.createElement("div",{className:"col-12 col-sm-6"},e.createElement("div",{className:"p-3 rounded-3 h-100 info-box-emerald"},e.createElement("small",{className:"info-box-label d-block mb-1 text-emerald-label"},"TANGGAL TRANSAKSI"),e.createElement("div",{className:"fw-bold text-slate-800 small d-flex align-items-center gap-2"},e.createElement("span",{className:"time-icon-badge"},e.createElement("i",{className:"fa fa-clock text-emerald-700"})),e.createElement("span",{style:{fontSize:"0.86rem"}},a.created_at))))),e.createElement("div",{className:"p-4 rounded-4 total-tagihan-hero-card shadow"},e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-1"},e.createElement("span",{className:"text-uppercase fw-bold text-emerald-100 total-tagihan-title"},a.status==="PAID"?"TOTAL TELAH DIBAYAR":"TOTAL TAGIHAN"),e.createElement("span",{className:"total-idr-pill"},"IDR")),e.createElement("div",{className:"fw-extrabold total-tagihan-amount my-1"},"Rp ",g(a.grand_total)),e.createElement("div",{className:"d-flex align-items-center gap-2 mt-2 text-emerald-100 small",style:{fontSize:"0.78rem"}},e.createElement("i",{className:"fa fa-check-circle text-emerald-300 fs-6"}),e.createElement("span",null,"Pembayaran iuran tahunan resmi terverifikasi sistem pusat IKATWI")))))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded-4 shadow-sm detail-card card-items-info"},e.createElement("div",{className:"card-header detail-card-header items-card-header py-3 px-4 d-flex align-items-center justify-content-between"},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("span",{className:"card-icon-pill bg-slate-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-shopping-bag text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-bold items-header-title"},"Item Tagihan & Rincian Transaksi"),e.createElement("span",{className:"text-slate-600 small",style:{fontSize:"0.75rem",fontWeight:600}},"Daftar item tagihan iuran yang diproses"))),e.createElement("span",{className:"badge-items-count-pill shadow-sm"},(a.transaction_details||a.transactionDetails||[]).length," Item Terdaftar")),e.createElement("div",{className:"card-body p-4"},(a.transaction_details||a.transactionDetails||[]).map((t,r)=>{var n;return e.createElement("div",{key:r,className:"d-flex flex-column flex-sm-row align-items-sm-center justify-content-between p-3 mb-2 rounded-3 item-row-card gap-3"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"item-icon-circle p-3 rounded-3 me-3 shadow-sm"},e.createElement("i",{className:"fa fa-id-badge fa-2x text-emerald-600"})),e.createElement("div",null,e.createElement("h6",{className:"mb-1 fw-bold text-slate-900 fs-6"},((n=t.product)==null?void 0:n.title)||"Iuran Anggota IKATWI"),e.createElement("div",{className:"d-flex gap-2 align-items-center flex-wrap mt-1"},e.createElement("span",{className:"badge-item-tag shadow-sm"},e.createElement("i",{className:"fa fa-tag me-1 text-primary"}),t.size||"Iuran Anggota"),t.tahun&&e.createElement("span",{className:"badge-item-year shadow-sm"},e.createElement("i",{className:"fa fa-calendar-check me-1 text-warning"}),"Tahun ",t.tahun)))),e.createElement("div",{className:"text-sm-end ps-4 ps-sm-0"},e.createElement("div",{className:"fw-bold fs-4 text-emerald-700",style:{letterSpacing:"-0.02em"}},"Rp ",g(t.price)),e.createElement("span",{className:"badge-qty-pill shadow-sm mt-1"},e.createElement("i",{className:"fa fa-layer-group me-1.5 text-slate-500"}),e.createElement("span",null,t.qty,"x Item Tagihan"))))})))))),e.createElement("style",null,`
                    .transaction-detail-page {
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
                    .text-slate-muted {
                        color: #64748b;
                    }
                    .text-blue-label {
                        color: #1d4ed8;
                    }
                    .text-emerald-label {
                        color: #047857;
                    }

                    /* Header Card */
                    .header-card {
                        background: #ffffff;
                        border: 1.5px solid #cbd5e1 !important;
                    }
                    .header-icon-wrap {
                        width: 52px;
                        height: 52px;
                        border-radius: 14px;
                        background: linear-gradient(135deg, #064e3b 0%, #059669 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                    }
                    .invoice-pill {
                        background-color: #eff6ff;
                        color: #1d4ed8;
                        border: 1.5px solid #bfdbfe;
                        border-radius: 8px;
                        padding: 4px 12px;
                        font-weight: 700;
                        font-size: 0.88rem;
                    }
                    .btn-outline-slate {
                        background-color: #ffffff;
                        color: #334155;
                        border: 1.5px solid #cbd5e1;
                        transition: all 0.2s ease;
                    }
                    .btn-outline-slate:hover {
                        background-color: #f1f5f9;
                        color: #0f172a;
                        border-color: #94a3b8;
                    }
                    .btn-menu-tagihan {
                        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                        color: #ffffff;
                        border: 1.5px solid #0f172a;
                        transition: all 0.2s ease;
                    }
                    .btn-menu-tagihan:hover {
                        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                        color: #ffffff;
                        transform: translateY(-1px);
                    }

                    /* Status Hero Card */
                    .status-hero-card {
                        border-radius: 16px;
                        transition: all 0.2s ease;
                    }
                    .status-card-paid {
                        background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #ffffff 100%);
                        border: 1.5px solid #86efac !important;
                        border-left: 7px solid #059669 !important;
                    }
                    .status-card-unpaid {
                        background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #ffffff 100%);
                        border: 1.5px solid #fde68a !important;
                        border-left: 7px solid #d97706 !important;
                    }
                    .status-card-expired {
                        background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 50%, #ffffff 100%);
                        border: 1.5px solid #fca5a5 !important;
                        border-left: 7px solid #e11d48 !important;
                    }

                    .status-icon-wrap {
                        width: 56px;
                        height: 56px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 16px;
                    }
                    .bg-paid-icon {
                        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                        box-shadow: 0 4px 14px rgba(5, 150, 105, 0.4);
                    }
                    .bg-unpaid-icon {
                        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                        box-shadow: 0 4px 14px rgba(217, 119, 6, 0.4);
                    }
                    .bg-expired-icon {
                        background: linear-gradient(135deg, #ef4444 0%, #be123c 100%);
                        box-shadow: 0 4px 14px rgba(225, 29, 72, 0.4);
                    }

                    .status-label-sub {
                        color: #64748b;
                        text-transform: uppercase;
                        font-weight: 700;
                        font-size: 0.72rem;
                        letter-spacing: 0.06em;
                    }
                    .badge-status-pill {
                        padding: 7px 16px;
                        border-radius: 9999px;
                        font-size: 0.86rem;
                        font-weight: 700;
                        letter-spacing: 0.02em;
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                    }
                    .badge-status-paid {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        color: #ffffff;
                        box-shadow: 0 2px 8px rgba(5, 150, 105, 0.3);
                    }
                    .badge-status-unpaid {
                        background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
                        color: #ffffff;
                        box-shadow: 0 2px 8px rgba(217, 119, 6, 0.3);
                    }
                    .badge-status-expired {
                        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
                        color: #ffffff;
                        box-shadow: 0 2px 8px rgba(220, 38, 38, 0.3);
                    }
                    .badge-status-cancelled {
                        background: linear-gradient(135deg, #64748b 0%, #475569 100%);
                        color: #ffffff;
                    }

                    .btn-ekta-action {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        color: #ffffff;
                        border: none;
                        box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                        font-size: 0.95rem;
                        transition: all 0.2s ease;
                    }
                    .btn-ekta-action:hover {
                        background: linear-gradient(135deg, #047857 0%, #065f46 100%);
                        color: #ffffff;
                        transform: translateY(-1.5px);
                        box-shadow: 0 6px 18px rgba(5, 150, 105, 0.45);
                    }

                    .btn-bayar-action {
                        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                        color: #ffffff;
                        border: none;
                        box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
                        transition: all 0.2s ease;
                    }
                    .btn-bayar-action:hover {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        color: #ffffff;
                        transform: translateY(-1.5px);
                    }

                    .btn-retry-action {
                        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                        color: #ffffff;
                        border: none;
                        box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
                        transition: all 0.2s ease;
                    }
                    .btn-retry-action:hover {
                        background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
                        color: #ffffff;
                        transform: translateY(-1.5px);
                    }

                    .countdown-alert-box {
                        background-color: #fffbeb;
                        border: 1.5px solid #fde68a;
                    }
                    .countdown-icon-circle {
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        background-color: #fef3c7;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .countdown-timer-pill {
                        background-color: #f59e0b;
                        color: #ffffff;
                        font-weight: 700;
                        font-size: 0.88rem;
                        padding: 7px 14px;
                        border-radius: 9999px;
                        box-shadow: 0 2px 6px rgba(245, 158, 11, 0.3);
                    }
                    .expired-alert-box {
                        background-color: #fff1f2;
                        border: 1.5px solid #fecdd3;
                    }

                    /* Detail Cards */
                    .detail-card {
                        border-radius: 16px;
                        background-color: #ffffff;
                        overflow: hidden;
                    }
                    .detail-card-header {
                        border-bottom: 1.5px solid;
                        padding: 16px 20px !important;
                    }
                    .card-member-info {
                        border: 1.5px solid #bfdbfe !important;
                        border-top: 4px solid #2563eb !important;
                    }
                    .member-card-header {
                        background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                        border-color: #bfdbfe;
                    }
                    .member-header-title {
                        color: #1e3a8a;
                        font-size: 1.05rem;
                    }
                    .badge-member-status-pill {
                        background-color: #eff6ff;
                        color: #1d4ed8;
                        border: 1.5px solid #bfdbfe;
                        font-weight: 700;
                        font-size: 0.76rem;
                        padding: 6px 14px;
                        border-radius: 9999px;
                        display: inline-flex;
                        align-items: center;
                    }

                    .card-payment-info {
                        border: 1.5px solid #a7f3d0 !important;
                        border-top: 4px solid #059669 !important;
                    }
                    .payment-card-header {
                        background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
                        border-color: #a7f3d0;
                    }
                    .payment-header-title {
                        color: #064e3b;
                        font-size: 1.05rem;
                    }
                    .badge-iuran-status-pill {
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1.5px solid #a7f3d0;
                        font-weight: 700;
                        font-size: 0.76rem;
                        padding: 6px 14px;
                        border-radius: 9999px;
                        display: inline-flex;
                        align-items: center;
                    }

                    .card-items-info {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #334155 !important;
                    }
                    .items-card-header {
                        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                        border-color: #cbd5e1;
                    }
                    .items-header-title {
                        color: #0f172a;
                        font-size: 1.05rem;
                    }
                    .badge-items-count-pill {
                        background-color: #f1f5f9;
                        color: #334155;
                        border: 1.5px solid #cbd5e1;
                        font-weight: 700;
                        font-size: 0.76rem;
                        padding: 6px 14px;
                        border-radius: 9999px;
                        display: inline-flex;
                        align-items: center;
                    }

                    /* Icon Pills */
                    .card-icon-pill {
                        width: 38px;
                        height: 38px;
                        border-radius: 10px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 16px;
                        flex-shrink: 0;
                    }
                    .bg-blue-icon-pill {
                        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                    }
                    .bg-emerald-icon-pill {
                        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                    }
                    .bg-slate-icon-pill {
                        background: linear-gradient(135deg, #475569 0%, #1e293b 100%);
                    }

                    /* Info Boxes */
                    .info-box-blue {
                        background-color: #f8fbff;
                        border: 1.5px solid #dbeafe;
                        padding: 16px 18px !important;
                        border-radius: 12px;
                        transition: all 0.2s ease;
                    }
                    .info-box-blue:hover {
                        border-color: #bfdbfe;
                        background-color: #f0f7ff;
                    }
                    .info-box-emerald {
                        background-color: #f9fdfa;
                        border: 1.5px solid #d1fae5;
                        padding: 16px 18px !important;
                        border-radius: 12px;
                        transition: all 0.2s ease;
                    }
                    .info-box-emerald:hover {
                        border-color: #a7f3d0;
                        background-color: #ecfdf5;
                    }
                    .info-box-label {
                        font-weight: 700;
                        font-size: 0.72rem;
                        letter-spacing: 0.05em;
                        text-transform: uppercase;
                    }
                    .name-icon-avatar {
                        width: 28px;
                        height: 28px;
                        border-radius: 50%;
                        background-color: #eff6ff;
                        border: 1px solid #bfdbfe;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 13px;
                    }
                    .time-icon-badge {
                        width: 24px;
                        height: 24px;
                        border-radius: 6px;
                        background-color: #ecfdf5;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                    }

                    /* Badges */
                    .badge-kta-pill {
                        background-color: #eff6ff;
                        color: #1e40af;
                        border: 1.5px solid #bfdbfe;
                        border-radius: 8px;
                        padding: 6px 14px;
                        font-family: monospace;
                        font-weight: 700;
                        font-size: 0.86rem;
                    }
                    .badge-nik-pill {
                        background-color: #f8fafc;
                        color: #334155;
                        border: 1.5px solid #cbd5e1;
                        border-radius: 8px;
                        padding: 6px 14px;
                        font-family: monospace;
                        font-weight: 700;
                        font-size: 0.86rem;
                    }
                    .badge-dpw-highlight {
                        background-color: #ecfdf5;
                        color: #065f46;
                        border: 1.5px solid #a7f3d0;
                        border-radius: 8px;
                        padding: 6px 14px;
                        font-weight: 700;
                        font-size: 0.84rem;
                    }
                    .badge-dpc-highlight {
                        background-color: #eef2ff;
                        color: #3730a3;
                        border: 1.5px solid #c7d2fe;
                        border-radius: 8px;
                        padding: 6px 14px;
                        font-weight: 700;
                        font-size: 0.84rem;
                    }
                    .badge-tahun-hero {
                        display: inline-flex;
                        align-items: center;
                        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                        color: #ffffff;
                        padding: 6px 14px;
                        border-radius: 8px;
                        font-weight: 700;
                        font-size: 0.88rem;
                    }

                    /* Total Tagihan Hero Card */
                    .total-tagihan-hero-card {
                        background: linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%);
                        color: #ffffff;
                        border: 1.5px solid #059669;
                        padding: 24px 22px !important;
                    }
                    .total-tagihan-title {
                        font-size: 0.76rem;
                        letter-spacing: 0.06em;
                    }
                    .total-tagihan-amount {
                        font-size: 2.2rem;
                        color: #ffffff;
                        letter-spacing: -0.02em;
                        line-height: 1.15;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
                    }

                    /* Item Breakdown */
                    .item-row-card {
                        background-color: #f8fafc;
                        border: 1.5px solid #e2e8f0;
                        padding: 18px 20px !important;
                        border-radius: 14px;
                        transition: all 0.2s ease;
                    }
                    .item-row-card:hover {
                        background-color: #f1f5f9;
                        border-color: #cbd5e1;
                        transform: translateY(-1px);
                    }
                    .item-icon-circle {
                        background-color: #ecfdf5;
                        border: 1.5px solid #a7f3d0;
                    }
                    .badge-item-tag {
                        background-color: #eff6ff;
                        color: #1d4ed8;
                        border: 1px solid #bfdbfe;
                        border-radius: 6px;
                        padding: 4px 10px;
                        font-size: 0.78rem;
                        font-weight: 600;
                    }
                    .badge-item-year {
                        background-color: #0f172a;
                        color: #ffffff;
                        border-radius: 6px;
                        padding: 4px 10px;
                        font-size: 0.78rem;
                        font-weight: 600;
                    }
                    .badge-qty-pill {
                        background-color: #f1f5f9;
                        color: #0f172a !important;
                        border: 1.5px solid #cbd5e1;
                        border-radius: 9999px;
                        padding: 4px 12px;
                        font-size: 0.78rem;
                        font-weight: 700;
                        display: inline-flex;
                        align-items: center;
                    }
                    .total-idr-pill {
                        background-color: rgba(255, 255, 255, 0.2);
                        color: #ffffff !important;
                        border: 1px solid rgba(255, 255, 255, 0.4);
                        padding: 3px 10px;
                        border-radius: 9999px;
                        font-size: 0.75rem;
                        font-weight: 800;
                        letter-spacing: 0.05em;
                        display: inline-block;
                    }
                `)))}export{B as default};
