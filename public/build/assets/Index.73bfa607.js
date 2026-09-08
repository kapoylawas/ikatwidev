import{u as K,r as d,R as e,H as L,L as _,d as A}from"./app.1680dc58.js";import{L as R}from"./Account.2d3a1373.js";import{P as Y}from"./Pagination.fe182a2d.js";import{f as b}from"./FormatPrice.72b07cf2.js";import"./Dropdown.edd758d4.js";function O(){const{users:n,stats:l,availableYears:z,provinces:I,cities:x,filters:t,roleScope:u}=K().props,[r,h]=d.exports.useState((t==null?void 0:t.tahun)||new Date().getFullYear()),[o,E]=d.exports.useState((t==null?void 0:t.status_bayar)||"all"),[m,N]=d.exports.useState((t==null?void 0:t.q)||""),[s,k]=d.exports.useState((t==null?void 0:t.province_id)||""),[p,g]=d.exports.useState((t==null?void 0:t.city_id)||""),P=s?(x||[]).filter(a=>String(a.province_id)===String(s)):x||[],i=(a={})=>{const c={tahun:a.tahun!==void 0?a.tahun:r,status_bayar:a.status_bayar!==void 0?a.status_bayar:o,q:a.q!==void 0?a.q:m,province_id:a.province_id!==void 0?a.province_id:s,city_id:a.city_id!==void 0?a.city_id:p};A.Inertia.get("/account/monitoring-iuran",c,{preserveState:!0,replace:!0})},C=a=>{const c=a.target.value;k(c),g(""),i({province_id:c,city_id:""})},D=a=>{const c=a.target.value;g(c),i({city_id:c})},f=a=>{E(a),i({status_bayar:a})},T=a=>{h(a),i({tahun:a})},B=a=>{a&&a.preventDefault(),i()},v=()=>{const a=new Date().getFullYear();h(a),E("all"),N(""),k(""),g(""),A.Inertia.get("/account/monitoring-iuran",{tahun:a},{preserveState:!0,replace:!0})},$=`/account/monitoring-iuran/export?tahun=${r}&status_bayar=${o}&q=${encodeURIComponent(m||"")}&province_id=${s||""}&city_id=${p||""}`;return e.createElement(R,null,e.createElement(L,{title:`Monitoring Iuran Tahun ${r} - IKATWI`}),e.createElement("div",{className:"monitoring-iuran-page"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4"},e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap"},e.createElement("h1",{className:"h4 text-dark fw-bold mb-0 d-flex align-items-center gap-2"},e.createElement("span",{className:"header-icon-box"},e.createElement("i",{className:"fa fa-chart-line text-white"})),e.createElement("span",null,"Monitoring Iuran Anggota")),e.createElement("span",{className:"badge-tahun-pill"},e.createElement("i",{className:"fa fa-calendar-alt me-1.5"})," Tahun ",r)),e.createElement("p",{className:"text-muted small mb-0 mt-1"},"Pantau status pelunasan iuran tahunan anggota IKATWI secara transparan, akurat, dan real-time.")),e.createElement("div",{className:"d-flex gap-2 align-items-center flex-wrap"},e.createElement("a",{href:$,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-export-excel"},e.createElement("i",{className:"fa fa-file-excel"}),e.createElement("span",null,"Export Excel")),e.createElement(_,{href:"/account/tagihan",className:"btn btn-sm btn-pusat-tagihan"},e.createElement("i",{className:"fa fa-receipt text-muted"}),e.createElement("span",null,"Pusat Tagihan")))),e.createElement("div",{className:"card border-0 shadow-sm mb-4 section-card year-selector-card"},e.createElement("div",{className:"card-body p-3 d-flex align-items-center justify-content-between flex-wrap gap-2"},e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap"},e.createElement("span",{className:"small fw-bold text-dark me-1 d-inline-flex align-items-center gap-1"},e.createElement("i",{className:"fa fa-history text-success"}),e.createElement("span",null,"Pilih Tahun:")),z.map(a=>e.createElement("button",{key:a,type:"button",onClick:()=>T(a),className:`btn btn-sm year-chip ${Number(r)===Number(a)?"active":""}`},Number(a)===new Date().getFullYear()?`${a} (Berjalan)`:a))),e.createElement("div",{className:"d-flex align-items-center gap-1.5 flex-wrap"},e.createElement("span",{className:"small fw-bold text-dark me-1"},"Status:"),e.createElement("button",{type:"button",onClick:()=>f("all"),className:`btn btn-sm status-chip chip-all ${o==="all"?"active":""}`},"Semua (",l.total_anggota,")"),e.createElement("button",{type:"button",onClick:()=>f("paid"),className:`btn btn-sm status-chip chip-paid ${o==="paid"?"active":""}`},e.createElement("i",{className:"fa fa-check-circle me-1"}),"Lunas (",l.total_lunas,")"),e.createElement("button",{type:"button",onClick:()=>f("unpaid"),className:`btn btn-sm status-chip chip-unpaid ${o==="unpaid"?"active":""}`},e.createElement("i",{className:"fa fa-times-circle me-1"}),"Belum Bayar (",l.total_belum_bayar,")")))),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-sm-6 col-xl-3"},e.createElement("div",{className:"card border-0 shadow-sm h-100 kpi-card kpi-blue"},e.createElement("div",{className:"card-body p-3.5 d-flex align-items-center justify-content-between"},e.createElement("div",null,e.createElement("span",{className:"kpi-label text-blue-label"},"Total Anggota"),e.createElement("h3",{className:"kpi-value text-blue-dark mb-0"},l.total_anggota.toLocaleString("id-ID")),e.createElement("small",{className:"kpi-subtext text-blue-muted"},"Anggota resmi terverifikasi")),e.createElement("div",{className:"kpi-icon-wrap bg-blue-icon text-white"},e.createElement("i",{className:"fa fa-users"}))))),e.createElement("div",{className:"col-12 col-sm-6 col-xl-3"},e.createElement("div",{className:"card border-0 shadow-sm h-100 kpi-card kpi-emerald"},e.createElement("div",{className:"card-body p-3.5"},e.createElement("div",{className:"d-flex align-items-center justify-content-between mb-2"},e.createElement("div",null,e.createElement("span",{className:"kpi-label text-emerald-label"},"Sudah Bayar (",r,")"),e.createElement("h3",{className:"kpi-value text-emerald-dark mb-0"},l.total_lunas.toLocaleString("id-ID"))),e.createElement("div",{className:"kpi-icon-wrap bg-emerald-icon text-white"},e.createElement("i",{className:"fa fa-check-double"}))),e.createElement("div",{className:"d-flex align-items-center justify-content-between"},e.createElement("div",{className:"progress flex-grow-1 me-2 kpi-progress-bg"},e.createElement("div",{className:"progress-bar bg-emerald-bar",role:"progressbar",style:{width:`${Math.min(100,l.persentase_lunas)}%`}})),e.createElement("span",{className:"badge kpi-rate-badge text-emerald-dark fw-bold"},l.persentase_lunas,"%"))))),e.createElement("div",{className:"col-12 col-sm-6 col-xl-3"},e.createElement("div",{className:"card border-0 shadow-sm h-100 kpi-card kpi-rose"},e.createElement("div",{className:"card-body p-3.5 d-flex align-items-center justify-content-between"},e.createElement("div",null,e.createElement("span",{className:"kpi-label text-rose-label"},"Belum Bayar (",r,")"),e.createElement("h3",{className:"kpi-value text-rose-dark mb-0"},l.total_belum_bayar.toLocaleString("id-ID")),e.createElement("small",{className:"kpi-subtext text-rose-muted"},l.total_anggota>0?`${(100-l.persentase_lunas).toFixed(1)}% belum lunas`:"0%")),e.createElement("div",{className:"kpi-icon-wrap bg-rose-icon text-white"},e.createElement("i",{className:"fa fa-exclamation-circle"}))))),e.createElement("div",{className:"col-12 col-sm-6 col-xl-3"},e.createElement("div",{className:"card border-0 shadow-sm h-100 kpi-card kpi-amber"},e.createElement("div",{className:"card-body p-3.5 d-flex align-items-center justify-content-between"},e.createElement("div",null,e.createElement("span",{className:"kpi-label text-amber-label"},"Dana Terkumpul (",r,")"),e.createElement("h4",{className:"kpi-value text-amber-dark mb-0",style:{fontSize:"1.25rem"}},b(l.total_nominal||0)),e.createElement("small",{className:"kpi-subtext text-amber-muted"},"Penerimaan iuran tahun ",r)),e.createElement("div",{className:"kpi-icon-wrap bg-amber-icon text-white"},e.createElement("i",{className:"fa fa-hand-holding-usd"})))))),e.createElement("div",{className:"card border-0 shadow-sm mb-4 filter-control-card"},e.createElement("div",{className:"card-header filter-card-header py-2.5 px-4 d-flex justify-content-between align-items-center"},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("i",{className:"fa fa-sliders-h text-primary"}),e.createElement("span",{className:"fw-bold text-dark",style:{fontSize:"0.88rem"}},"Filter & Pencarian Anggota")),(m||o!=="all"||s||p)&&e.createElement("button",{type:"button",onClick:v,className:"btn btn-sm btn-reset-filter",title:"Reset Semua Filter"},e.createElement("i",{className:"fa fa-undo me-1"}),e.createElement("span",null,"Reset Filter"))),e.createElement("div",{className:"card-body p-3.5"},e.createElement("form",{onSubmit:B,className:"row g-3 align-items-end"},e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label filter-label"},e.createElement("i",{className:"fa fa-search text-primary me-1"}),e.createElement("span",null,"Pencarian Anggota")),e.createElement("div",{className:"input-group input-group-sm"},e.createElement("input",{type:"text",className:"form-control filter-input",placeholder:"Ketik Nama, No. Anggota, NIK, Email...",value:m,onChange:a=>N(a.target.value)}),e.createElement("button",{type:"submit",className:"btn btn-search-submit px-3",title:"Cari Anggota"},e.createElement("i",{className:"fa fa-search"})))),e.createElement("div",{className:"col-12 col-sm-6 col-md-3 col-lg-2"},e.createElement("label",{className:"form-label filter-label"},e.createElement("i",{className:"fa fa-filter text-success me-1"}),e.createElement("span",null,"Status Iuran")),e.createElement("select",{className:"form-select form-select-sm filter-select",value:o,onChange:a=>f(a.target.value)},e.createElement("option",{value:"all"},"Semua Status"),e.createElement("option",{value:"paid"},"LUNAS (Sudah Bayar)"),e.createElement("option",{value:"unpaid"},"BELUM BAYAR"))),u.isSuperAdmin&&e.createElement("div",{className:"col-12 col-sm-6 col-md-3 col-lg-3"},e.createElement("label",{className:"form-label filter-label"},e.createElement("i",{className:"fa fa-landmark text-info me-1"}),e.createElement("span",null,"DPW (Provinsi)")),e.createElement("select",{className:"form-select form-select-sm filter-select",value:s,onChange:C},e.createElement("option",{value:""},"Semua DPW (Provinsi)"),I.map(a=>e.createElement("option",{key:a.id,value:a.id},a.name)))),(u.isSuperAdmin||u.isAdminWilayah)&&e.createElement("div",{className:"col-12 col-sm-6 col-md-3 col-lg-3"},e.createElement("label",{className:"form-label filter-label"},e.createElement("i",{className:"fa fa-city text-warning me-1"}),e.createElement("span",null,"DPC (Kota / Kab)")),e.createElement("select",{className:"form-select form-select-sm filter-select",value:p,onChange:D},e.createElement("option",{value:""},"Semua Cabang DPC"),P.map(a=>e.createElement("option",{key:a.id,value:a.id},a.name))))))),e.createElement("div",{className:"card border-0 shadow-sm mb-4 table-main-card"},e.createElement("div",{className:"card-header table-card-header py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2"},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("span",{className:"table-header-icon-wrap"},e.createElement("i",{className:"fa fa-table text-success"})),e.createElement("div",null,e.createElement("span",{className:"fw-bold text-dark",style:{fontSize:"0.96rem"}},"Daftar Pembayaran Iuran Anggota \u2014 Tahun ",r),e.createElement("small",{className:"text-muted d-block",style:{fontSize:"0.75rem"}},"Data diperbarui secara otomatis berdasarkan transaksi sistem"))),e.createElement("div",{className:"total-members-pill"},e.createElement("span",{className:"text-muted fw-normal"},"Total:")," ",e.createElement("strong",{className:"text-dark"},n.total)," anggota")),e.createElement("div",{className:"card-body p-0"},n.data.length>0?e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-custom align-middle mb-0"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{className:"ps-4 text-center",style:{width:"5%"}},"NO"),e.createElement("th",{className:"text-center",style:{width:"6%"}},"FOTO"),e.createElement("th",{style:{width:"14%"}},"NO. ANGGOTA"),e.createElement("th",{style:{width:"32%"}},"NAMA LENGKAP & KONTAK"),e.createElement("th",{style:{width:"23%"}},"WILAYAH (DPW / DPC)"),e.createElement("th",{style:{width:"14%"}},"STATUS IURAN ",r),e.createElement("th",{className:"pe-4 text-center",style:{width:"6%"}},"AKSI"))),e.createElement("tbody",null,n.data.map((a,c)=>{var w,y;const j=(n.from||1)+c;return e.createElement("tr",{key:a.id},e.createElement("td",{className:"ps-4 text-center"},e.createElement("span",{className:"table-num-pill"},j)),e.createElement("td",{className:"text-center"},e.createElement("img",{src:a.image?`/storage/users/${a.image}`:"/assets/images/user.png",alt:a.name,className:"rounded-circle table-avatar",onError:S=>{S.target.onerror=null,S.target.src="/assets/images/user.png"}})),e.createElement("td",null,e.createElement("span",{className:"badge-no-anggota"},e.createElement("i",{className:"fa fa-id-card me-1 text-primary"}),a.no_anggota||"-")),e.createElement("td",null,e.createElement("div",{className:"member-name-text"},a.name),a.email&&e.createElement("div",{className:"d-flex align-items-center gap-1.5 mt-0.5 member-email-text"},e.createElement("i",{className:"fa fa-envelope text-muted"}),e.createElement("span",null,a.email)),a.phone&&e.createElement("div",{className:"d-flex align-items-center gap-1 mt-0.5"},e.createElement("a",{href:`https://wa.me/${a.phone.replace(/^0/,"62").replace(/\D/g,"")}`,target:"_blank",rel:"noreferrer",className:"member-phone-link",title:"Chat WhatsApp"},e.createElement("i",{className:"fab fa-whatsapp"}),e.createElement("span",null,a.phone)))),e.createElement("td",null,e.createElement("div",{className:"dpw-badge"},e.createElement("i",{className:"fa fa-landmark text-success"}),e.createElement("span",null,(w=a.province)!=null&&w.name?`DPW ${a.province.name}`:"Belum diatur")),e.createElement("div",{className:"dpc-text"},e.createElement("i",{className:"fa fa-city text-secondary"}),e.createElement("span",null,(y=a.city)!=null&&y.name?`DPC ${a.city.name}`:"Belum diatur"))),e.createElement("td",null,a.is_paid?e.createElement("div",null,e.createElement("span",{className:"status-badge-paid"},e.createElement("i",{className:"fa fa-check-circle"}),e.createElement("span",null,"LUNAS")),e.createElement("div",{className:"paid-amount-text"},b(a.paid_amount||a.expected_amount)),a.paid_at&&e.createElement("div",{className:"paid-date-text"},a.paid_at)):a.payment_status==="UNPAID_PENDING"?e.createElement("div",null,e.createElement("span",{className:"status-badge-pending"},e.createElement("i",{className:"fa fa-hourglass-half"}),e.createElement("span",null,"Menunggu Bayar")),e.createElement("div",{className:"unpaid-tagihan-text"},"Tagihan: ",b(a.expected_amount))):e.createElement("div",null,e.createElement("span",{className:"status-badge-unpaid"},e.createElement("i",{className:"fa fa-times-circle"}),e.createElement("span",null,"BELUM BAYAR")),e.createElement("div",{className:"unpaid-tagihan-text"},"Tagihan: ",b(a.expected_amount)))),e.createElement("td",{className:"pe-4 text-center"},a.invoice?e.createElement(_,{href:`/account/transactions/${a.invoice}`,className:"btn btn-sm btn-view-invoice",title:"Lihat Invoice Transaksi"},e.createElement("i",{className:"fa fa-receipt"}),e.createElement("span",null,"Invoice")):e.createElement("span",{className:"text-muted small"},"-")))})))):e.createElement("div",{className:"p-5 text-center empty-state-box"},e.createElement("div",{className:"empty-icon-wrap mb-3"},e.createElement("i",{className:"fa fa-users"})),e.createElement("h5",{className:"fw-bold text-dark mb-1"},"Tidak Ada Data Ditemukan"),e.createElement("p",{className:"text-muted small mb-3"},"Tidak ada anggota yang sesuai dengan kriteria filter tahun ",r," atau kata kunci pencarian."),e.createElement("button",{type:"button",onClick:v,className:"btn btn-sm btn-outline-secondary rounded-pill px-3"},e.createElement("i",{className:"fa fa-redo me-1"})," Reset Semua Filter"))),n.data.length>0&&e.createElement("div",{className:"card-footer table-footer py-3 px-4 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2"},e.createElement("div",{className:"small text-muted"},"Menampilkan ",e.createElement("span",{className:"fw-bold text-dark"},n.from||0)," sampai ",e.createElement("span",{className:"fw-bold text-dark"},n.to||0)," dari ",e.createElement("span",{className:"fw-bold text-dark"},n.total)," anggota"),e.createElement(Y,{links:n.links,align:"end"})))),e.createElement("style",null,`
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
            `))}export{O as default};
