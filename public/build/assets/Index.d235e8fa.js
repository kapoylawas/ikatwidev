import{u as q,r as d,R as e,H,L as $,d as R}from"./app.bc54160e.js";import{L as J}from"./Account.7b510b9c.js";import{P as Q}from"./Pagination.978794ce.js";import{f as x}from"./FormatPrice.72b07cf2.js";import"./Dropdown.fab11b48.js";function te(){var I,A;const{users:m,stats:c,availableYears:j,provinces:B,cities:v,filters:r,roleScope:E}=q().props,[l,w]=d.exports.useState((r==null?void 0:r.tahun)||new Date().getFullYear()),[f,S]=d.exports.useState((r==null?void 0:r.status_bayar)||"all"),[i,h]=d.exports.useState((r==null?void 0:r.q)||""),[u,_]=d.exports.useState((r==null?void 0:r.province_id)||""),[b,N]=d.exports.useState((r==null?void 0:r.city_id)||""),[t,y]=d.exports.useState(null),C=d.exports.useRef(!0),o=d.exports.useRef(null),W=u?(v||[]).filter(a=>String(a.province_id)===String(u)):v||[],p=(a={})=>{const s={tahun:a.tahun!==void 0?a.tahun:l,status_bayar:a.status_bayar!==void 0?a.status_bayar:f,q:a.q!==void 0?a.q:i,province_id:a.province_id!==void 0?a.province_id:u,city_id:a.city_id!==void 0?a.city_id:b};R.Inertia.get("/account/monitoring-iuran",s,{preserveState:!0,replace:!0})};d.exports.useEffect(()=>{if(C.current){C.current=!1;return}return o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{p({q:i})},450),()=>{o.current&&clearTimeout(o.current)}},[i]);const M=a=>{const s=a.target.value;_(s),N(""),p({province_id:s,city_id:""})},K=a=>{const s=a.target.value;N(s),p({city_id:s})},g=a=>{S(a),p({status_bayar:a})},z=a=>{w(a),p({tahun:a})},L=a=>{a&&a.preventDefault(),o.current&&clearTimeout(o.current),p({q:i})},F=()=>{o.current&&clearTimeout(o.current),h(""),p({q:""})},T=()=>{o.current&&clearTimeout(o.current);const a=new Date().getFullYear();w(a),S("all"),h(""),_(""),N(""),R.Inertia.get("/account/monitoring-iuran",{tahun:a},{preserveState:!0,replace:!0})},U=`/account/monitoring-iuran/export?tahun=${l}&status_bayar=${f}&q=${encodeURIComponent(i||"")}&province_id=${u||""}&city_id=${b||""}`;return e.createElement(J,null,e.createElement(H,{title:`Monitoring Iuran ${l==="all"?"Semua Tahun":`Tahun ${l}`} - IKATWI`}),e.createElement("div",{className:"monitoring-iuran-page"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4"},e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap"},e.createElement("h1",{className:"h4 text-dark fw-bold mb-0 d-flex align-items-center gap-2"},e.createElement("span",{className:"header-icon-box"},e.createElement("i",{className:"fa fa-chart-line text-white"})),e.createElement("span",null,"Monitoring Iuran Anggota")),e.createElement("span",{className:"badge-tahun-pill"},e.createElement("i",{className:"fa fa-calendar-alt me-1.5"}),l==="all"?"Semua Tahun (2024 - 2026)":`Tahun ${l}`)),e.createElement("p",{className:"text-muted small mb-0 mt-1"},"Pantau status pelunasan iuran tahunan anggota IKATWI secara transparan, akurat, dan real-time.")),e.createElement("div",{className:"d-flex gap-2 align-items-center flex-wrap"},e.createElement("a",{href:U,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-export-excel"},e.createElement("i",{className:"fa fa-file-excel"}),e.createElement("span",null,"Export Excel")),e.createElement($,{href:"/account/tagihan",className:"btn btn-sm btn-pusat-tagihan"},e.createElement("i",{className:"fa fa-receipt text-muted"}),e.createElement("span",null,"Pusat Tagihan")))),e.createElement("div",{className:"card border-0 shadow-sm mb-4 section-card year-selector-card"},e.createElement("div",{className:"card-body p-3 d-flex align-items-center justify-content-between flex-wrap gap-2"},e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap"},e.createElement("span",{className:"small fw-bold text-dark me-1 d-inline-flex align-items-center gap-1"},e.createElement("i",{className:"fa fa-history text-success"}),e.createElement("span",null,"Pilih Tahun:")),e.createElement("button",{type:"button",onClick:()=>z("all"),className:`btn btn-sm year-chip ${l==="all"?"active":""}`},e.createElement("i",{className:"fa fa-layer-group me-1"})," Semua Tahun"),j.map(a=>e.createElement("button",{key:a,type:"button",onClick:()=>z(a),className:`btn btn-sm year-chip ${String(l)===String(a)?"active":""}`},Number(a)===new Date().getFullYear()?`${a} (Berjalan)`:a))),e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap"},e.createElement("span",{className:"small fw-bold text-dark me-1"},"Status:"),e.createElement("button",{type:"button",onClick:()=>g("all"),className:`btn btn-sm status-chip chip-all ${f==="all"?"active":""}`},"Semua (",c.total_anggota,")"),e.createElement("button",{type:"button",onClick:()=>g("paid"),className:`btn btn-sm status-chip chip-paid ${f==="paid"?"active":""}`},e.createElement("i",{className:"fa fa-check-circle me-1"}),"Lunas (",c.total_lunas,")"),e.createElement("button",{type:"button",onClick:()=>g("unpaid"),className:`btn btn-sm status-chip chip-unpaid ${f==="unpaid"?"active":""}`},e.createElement("i",{className:"fa fa-times-circle me-1"}),"Belum Bayar (",c.total_belum_bayar,")")))),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-sm-6 col-xl-3"},e.createElement("div",{className:"card border-0 shadow-sm h-100 kpi-card kpi-blue"},e.createElement("div",{className:"card-body p-3.5 d-flex align-items-center justify-content-between"},e.createElement("div",null,e.createElement("span",{className:"kpi-label text-blue-label"},"Total Anggota"),e.createElement("h3",{className:"kpi-value text-blue-dark mb-0"},c.total_anggota.toLocaleString("id-ID")),e.createElement("small",{className:"kpi-subtext text-blue-muted"},"Anggota resmi terverifikasi")),e.createElement("div",{className:"kpi-icon-wrap bg-blue-icon text-white"},e.createElement("i",{className:"fa fa-users"}))))),e.createElement("div",{className:"col-12 col-sm-6 col-xl-3"},e.createElement("div",{className:"card border-0 shadow-sm h-100 kpi-card kpi-emerald"},e.createElement("div",{className:"card-body p-3.5"},e.createElement("div",{className:"d-flex align-items-center justify-content-between mb-2"},e.createElement("div",null,e.createElement("span",{className:"kpi-label text-emerald-label"},"Sudah Bayar (",l==="all"?new Date().getFullYear():l,")"),e.createElement("h3",{className:"kpi-value text-emerald-dark mb-0"},c.total_lunas.toLocaleString("id-ID"))),e.createElement("div",{className:"kpi-icon-wrap bg-emerald-icon text-white"},e.createElement("i",{className:"fa fa-check-double"}))),e.createElement("div",{className:"d-flex align-items-center justify-content-between"},e.createElement("div",{className:"progress flex-grow-1 me-2 kpi-progress-bg"},e.createElement("div",{className:"progress-bar bg-emerald-bar",role:"progressbar",style:{width:`${Math.min(100,c.persentase_lunas)}%`}})),e.createElement("span",{className:"badge kpi-rate-badge text-emerald-dark fw-bold"},c.persentase_lunas,"%"))))),e.createElement("div",{className:"col-12 col-sm-6 col-xl-3"},e.createElement("div",{className:"card border-0 shadow-sm h-100 kpi-card kpi-rose"},e.createElement("div",{className:"card-body p-3.5 d-flex align-items-center justify-content-between"},e.createElement("div",null,e.createElement("span",{className:"kpi-label text-rose-label"},"Belum Bayar (",l==="all"?new Date().getFullYear():l,")"),e.createElement("h3",{className:"kpi-value text-rose-dark mb-0"},c.total_belum_bayar.toLocaleString("id-ID")),e.createElement("small",{className:"kpi-subtext text-rose-muted"},c.total_anggota>0?`${(100-c.persentase_lunas).toFixed(1)}% belum lunas`:"0%")),e.createElement("div",{className:"kpi-icon-wrap bg-rose-icon text-white"},e.createElement("i",{className:"fa fa-exclamation-circle"}))))),e.createElement("div",{className:"col-12 col-sm-6 col-xl-3"},e.createElement("div",{className:"card border-0 shadow-sm h-100 kpi-card kpi-amber"},e.createElement("div",{className:"card-body p-3.5 d-flex align-items-center justify-content-between"},e.createElement("div",null,e.createElement("span",{className:"kpi-label text-amber-label"},"Dana Terkumpul ",l==="all"?"(Semua Tahun)":`(${l})`),e.createElement("h4",{className:"kpi-value text-amber-dark mb-0",style:{fontSize:"1.25rem"}},x(c.total_nominal||0)),e.createElement("small",{className:"kpi-subtext text-amber-muted"},"Total penerimaan kas iuran")),e.createElement("div",{className:"kpi-icon-wrap bg-amber-icon text-white"},e.createElement("i",{className:"fa fa-hand-holding-usd"})))))),e.createElement("div",{className:"alert border-0 shadow-sm mb-4 d-flex align-items-center gap-3 p-3",style:{backgroundColor:"#f0fdf4",borderLeft:"4px solid #10b981",borderRadius:"10px"}},e.createElement("div",{className:"d-flex align-items-center justify-content-center flex-shrink-0",style:{width:"38px",height:"38px",borderRadius:"10px",backgroundColor:"#d1fae5",color:"#059669",fontSize:"18px"}},e.createElement("i",{className:"fa fa-info-circle"})),e.createElement("div",{className:"flex-grow-1"},e.createElement("div",{className:"fw-bold text-dark d-flex align-items-center gap-2",style:{fontSize:"0.86rem"}},e.createElement("span",null,"Ketentuan Kewajiban Iuran Tahunan Anggota:"),e.createElement("span",{className:"badge rounded-pill",style:{backgroundColor:"#dcfce7",color:"#15803d",fontSize:"0.68rem",border:"1px solid #86efac"}},"Otomatis Sistem")),e.createElement("p",{className:"text-secondary small mb-0 mt-0.5",style:{fontSize:"0.78rem",lineHeight:"1.45"}},"Kewajiban pembayaran iuran tahunan dihitung otomatis berdasarkan ",e.createElement("strong",null,"tahun pendaftaran akun")," atau ",e.createElement("strong",null,"tahun awal pembayaran pertama")," anggota. Tahun sebelum resmi terdaftar otomatis berstatus ",e.createElement("strong",null,"Bebas Iuran (-)"),"."))),e.createElement("div",{className:"card border-0 shadow-sm mb-4 filter-control-card"},e.createElement("div",{className:"card-header filter-card-header py-2.5 px-4 d-flex justify-content-between align-items-center"},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("i",{className:"fa fa-sliders-h text-primary"}),e.createElement("span",{className:"fw-bold text-dark",style:{fontSize:"0.88rem"}},"Filter & Pencarian Anggota")),(i||f!=="all"||u||b)&&e.createElement("button",{type:"button",onClick:T,className:"btn btn-sm btn-reset-filter",title:"Reset Semua Filter"},e.createElement("i",{className:"fa fa-undo me-1"}),e.createElement("span",null,"Reset Filter"))),e.createElement("div",{className:"card-body p-3.5"},e.createElement("form",{onSubmit:L,className:"row g-3 align-items-start"},e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label filter-label"},e.createElement("i",{className:"fa fa-search text-primary me-1.5"}),e.createElement("span",null,"Pencarian Anggota")),e.createElement("div",{className:"input-group input-group-sm"},e.createElement("input",{type:"text",className:"form-control filter-input",placeholder:"Ketik Nama, No. Anggota, NIK, Email...",value:i,onChange:a=>h(a.target.value)}),i&&e.createElement("button",{type:"button",className:"btn btn-outline-secondary px-2.5",style:{backgroundColor:"#f8fafc",borderColor:"#cbd5e1",color:"#64748b"},onClick:F,title:"Hapus kata kunci pencarian"},e.createElement("i",{className:"fa fa-times"})),e.createElement("button",{type:"submit",className:"btn btn-search-submit px-3",title:"Cari Anggota (Enter)"},e.createElement("i",{className:"fa fa-search"})))),e.createElement("div",{className:"col-12 col-sm-6 col-md-3 col-lg-2"},e.createElement("label",{className:"form-label filter-label"},e.createElement("i",{className:"fa fa-filter text-success me-1.5"}),e.createElement("span",null,"Status Iuran")),e.createElement("select",{className:"form-select form-select-sm filter-select",value:f,onChange:a=>g(a.target.value)},e.createElement("option",{value:"all"},"Semua Status"),e.createElement("option",{value:"paid"},"LUNAS (Sudah Bayar)"),e.createElement("option",{value:"unpaid"},"BELUM BAYAR"))),E.isSuperAdmin&&e.createElement("div",{className:"col-12 col-sm-6 col-md-3 col-lg-3"},e.createElement("label",{className:"form-label filter-label"},e.createElement("i",{className:"fa fa-landmark text-info me-1.5"}),e.createElement("span",null,"DPW (Provinsi)")),e.createElement("select",{className:"form-select form-select-sm filter-select",value:u,onChange:M},e.createElement("option",{value:""},"Semua DPW (Provinsi)"),B.map(a=>e.createElement("option",{key:a.id,value:a.id},a.name)))),(E.isSuperAdmin||E.isAdminWilayah)&&e.createElement("div",{className:"col-12 col-sm-6 col-md-3 col-lg-3"},e.createElement("label",{className:"form-label filter-label"},e.createElement("i",{className:"fa fa-city text-warning me-1.5"}),e.createElement("span",null,"DPC (Kota / Kab)")),e.createElement("select",{className:"form-select form-select-sm filter-select",value:b,onChange:K},e.createElement("option",{value:""},"Semua Cabang DPC"),W.map(a=>e.createElement("option",{key:a.id,value:a.id},a.name))))),e.createElement("div",{className:"d-flex align-items-center justify-content-between mt-3 pt-2 border-top",style:{borderColor:"#e2e8f0"}},e.createElement("small",{className:"text-muted d-flex align-items-center gap-1.5",style:{fontSize:"0.74rem"}},e.createElement("i",{className:"fa fa-info-circle text-primary"}),e.createElement("span",null,"Pencarian otomatis saat mengetik (tanpa enter) atau tekan ",e.createElement("strong",null,"Enter"),". Filter status & wilayah langsung diterapkan.")),i&&e.createElement("small",{className:"text-secondary",style:{fontSize:"0.74rem"}},"Kata kunci: ",e.createElement("strong",{className:"text-dark font-monospace"},'"',i,'"'))))),e.createElement("div",{className:"card border-0 shadow-sm mb-4 table-main-card"},e.createElement("div",{className:"card-header table-card-header py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2"},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("span",{className:"table-header-icon-wrap"},e.createElement("i",{className:"fa fa-table text-success"})),e.createElement("div",null,e.createElement("span",{className:"fw-bold text-dark",style:{fontSize:"0.96rem"}},"Daftar Pembayaran Iuran Anggota \u2014 ",l==="all"?"Multi-Tahun (2024 - 2026)":`Tahun ${l}`),e.createElement("small",{className:"text-muted d-block",style:{fontSize:"0.75rem"}},"Menampilkan status pelunasan per tahun untuk setiap anggota terdaftar"))),e.createElement("div",{className:"total-members-pill"},e.createElement("span",{className:"text-muted fw-normal"},"Total:")," ",e.createElement("strong",{className:"text-dark"},m.total)," anggota")),e.createElement("div",{className:"card-body p-0"},m.data.length>0?e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-custom align-middle mb-0"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{className:"ps-4 text-center",style:{width:"4%"}},"NO"),e.createElement("th",{className:"text-center",style:{width:"5%"}},"FOTO"),e.createElement("th",{style:{width:"13%"}},"NO. ANGGOTA"),e.createElement("th",{style:{width:"27%"}},"NAMA LENGKAP & KONTAK"),e.createElement("th",{style:{width:"20%"}},"WILAYAH (DPW / DPC)"),e.createElement("th",{style:{width:"23%"}},"STATUS IURAN PER TAHUN"),e.createElement("th",{className:"pe-4 text-center",style:{width:"8%"}},"RINCIAN"))),e.createElement("tbody",null,m.data.map((a,s)=>{var P,D;const Y=(m.from||1)+s,G=a.unpaid_years&&a.unpaid_years.length>0;return e.createElement("tr",{key:a.id},e.createElement("td",{className:"ps-4 text-center"},e.createElement("span",{className:"table-num-pill"},Y)),e.createElement("td",{className:"text-center"},e.createElement("img",{src:a.image?`/storage/users/${a.image}`:"/assets/images/user.png",alt:a.name,className:"rounded-circle table-avatar",onError:n=>{n.target.onerror=null,n.target.src="/assets/images/user.png"}})),e.createElement("td",null,e.createElement("span",{className:"badge-no-anggota"},e.createElement("i",{className:"fa fa-id-card me-1 text-primary"}),a.no_anggota||"-"),e.createElement("div",{className:"mt-1 d-flex flex-column gap-0.5",style:{fontSize:"0.72rem"}},e.createElement("span",{className:"text-muted d-inline-flex align-items-center gap-1",title:`Tanggal Akun Dibuat: ${a.registered_date||"-"}`},e.createElement("i",{className:"fa fa-user-plus text-secondary",style:{fontSize:"10px"}}),e.createElement("span",null,"Daftar: ",e.createElement("strong",{className:"text-dark"},a.registered_date||a.registered_year))),e.createElement("span",{className:"text-secondary d-inline-flex align-items-center gap-1",title:`Mulai Kewajiban Iuran: Tahun ${a.start_year}`},e.createElement("i",{className:"fa fa-flag text-success",style:{fontSize:"10px"}}),e.createElement("span",null,"Mulai: ",e.createElement("strong",{className:"text-success"},"Thn ",a.start_year))))),e.createElement("td",null,e.createElement("div",{className:"member-name-text"},a.name),a.email&&e.createElement("div",{className:"d-flex align-items-center gap-1.5 mt-0.5 member-email-text"},e.createElement("i",{className:"fa fa-envelope text-muted"}),e.createElement("span",null,a.email)),a.phone&&e.createElement("div",{className:"d-flex align-items-center gap-1 mt-0.5"},e.createElement("a",{href:`https://wa.me/${a.phone.replace(/^0/,"62").replace(/\D/g,"")}`,target:"_blank",rel:"noreferrer",className:"member-phone-link",title:"Chat WhatsApp"},e.createElement("i",{className:"fab fa-whatsapp"}),e.createElement("span",null,a.phone)))),"                                                    ",e.createElement("td",null,e.createElement("div",{className:"dpw-badge"},e.createElement("i",{className:"fa fa-landmark text-success"}),e.createElement("span",null,(P=a.province)!=null&&P.name?a.province.name.startsWith("DPW")?a.province.name:`DPW ${a.province.name}`:"Belum diatur")),e.createElement("div",{className:"dpc-text"},e.createElement("i",{className:"fa fa-city text-secondary"}),e.createElement("span",null,(D=a.city)!=null&&D.name?a.city.name.startsWith("DPC")?a.city.name:`DPC ${a.city.name}`:"Belum diatur"))),e.createElement("td",null,e.createElement("div",{className:"yearly-badges-wrapper d-flex flex-wrap align-items-center",style:{gap:"8px 10px"}},a.yearly_status&&a.yearly_status.map(n=>{const O=String(l)===String(n.tahun),k=n.payment_status==="NOT_MEMBER"||n.is_exempt;return e.createElement("span",{key:n.tahun,className:`yearly-badge ${n.is_paid?"yearly-paid":k?"yearly-exempt":n.payment_status==="UNPAID_PENDING"?"yearly-pending":"yearly-unpaid"} ${O?"yearly-focus":""}`,style:{margin:"2px 4px 2px 0"},title:n.is_paid?`Tahun ${n.tahun}: Lunas (${x(n.amount)})`:k?`Tahun ${n.tahun}: Belum menjadi anggota`:`Tahun ${n.tahun}: Belum Bayar`},e.createElement("strong",{className:"me-1"},n.tahun,":"),n.is_paid?e.createElement("span",{className:"d-inline-flex align-items-center"},e.createElement("i",{className:"fa fa-check-circle me-1 text-success"})," Lunas"):k?e.createElement("span",{className:"d-inline-flex align-items-center text-muted"},e.createElement("i",{className:"fa fa-minus me-1 text-secondary"})," -"):n.payment_status==="UNPAID_PENDING"?e.createElement("span",{className:"d-inline-flex align-items-center"},e.createElement("i",{className:"fa fa-hourglass-half me-1 text-primary"})," Pending"):e.createElement("span",{className:"d-inline-flex align-items-center"},e.createElement("i",{className:"fa fa-times-circle me-1 text-danger"})," Belum"))})),e.createElement("div",{className:"mt-1 pt-0.5"},G?e.createElement("span",{className:"text-danger small fw-semibold d-inline-flex align-items-center gap-1.5",style:{fontSize:"0.74rem"}},e.createElement("i",{className:"fa fa-info-circle"}),e.createElement("span",null,"Tunggakan: Thn ",a.unpaid_years.join(", "))):e.createElement("span",{className:"text-success small fw-semibold d-inline-flex align-items-center gap-1.5",style:{fontSize:"0.74rem"}},e.createElement("i",{className:"fa fa-check-circle"}),e.createElement("span",null,"Lunas Semua Tahun")))),e.createElement("td",{className:"pe-4 text-center"},e.createElement("button",{type:"button",onClick:()=>y(a),className:"btn btn-sm btn-view-detail",title:"Lihat Rincian Multi-Tahun"},e.createElement("i",{className:"fa fa-list-alt me-1"}),e.createElement("span",null,"Rincian"))))})))):e.createElement("div",{className:"p-5 text-center empty-state-box"},e.createElement("div",{className:"empty-icon-wrap mb-3"},e.createElement("i",{className:"fa fa-users"})),e.createElement("h5",{className:"fw-bold text-dark mb-1"},"Tidak Ada Data Ditemukan"),e.createElement("p",{className:"text-muted small mb-3"},"Tidak ada anggota yang sesuai dengan kriteria filter ",l==="all"?"semua tahun":`tahun ${l}`," atau kata kunci pencarian."),e.createElement("button",{type:"button",onClick:T,className:"btn btn-sm btn-outline-secondary rounded-pill px-3"},e.createElement("i",{className:"fa fa-redo me-1"})," Reset Semua Filter"))),m.data.length>0&&e.createElement("div",{className:"card-footer table-footer py-3 px-4 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2"},e.createElement("div",{className:"small text-muted"},"Menampilkan ",e.createElement("span",{className:"fw-bold text-dark"},m.from||0)," sampai ",e.createElement("span",{className:"fw-bold text-dark"},m.to||0)," dari ",e.createElement("span",{className:"fw-bold text-dark"},m.total)," anggota"),e.createElement(Q,{links:m.links,align:"end"})))),t&&e.createElement("div",{className:"modal fade show d-block",tabIndex:"-1",style:{backgroundColor:"rgba(15, 23, 42, 0.65)",backdropFilter:"blur(4px)",zIndex:1050}},e.createElement("div",{className:"modal-dialog modal-dialog-centered modal-lg"},e.createElement("div",{className:"modal-content border-0 shadow-lg",style:{borderRadius:"16px",overflow:"hidden",backgroundColor:"#ffffff"}},e.createElement("div",{className:"modal-header py-3 px-4 d-flex justify-content-between align-items-center",style:{backgroundColor:"#ffffff",borderBottom:"1.5px solid #e2e8f0"}},e.createElement("div",{className:"d-flex align-items-center gap-2.5"},e.createElement("span",{style:{width:"38px",height:"38px",borderRadius:"10px",backgroundColor:"#ecfdf5",border:"1.5px solid #a7f3d0",display:"inline-flex",alignItems:"center",justifyContent:"center",color:"#059669",fontSize:"16px"}},e.createElement("i",{className:"fa fa-id-card"})),e.createElement("div",null,e.createElement("h6",{className:"fw-bold mb-0 text-dark",style:{fontSize:"1rem"}},"Rincian Riwayat Iuran Anggota"),e.createElement("small",{className:"text-muted",style:{fontSize:"0.78rem"}},t.name," \u2022 No. Anggota: ",e.createElement("strong",{className:"text-dark font-monospace"},t.no_anggota||"-")))),e.createElement("button",{type:"button",className:"btn-close",onClick:()=>y(null),"aria-label":"Close"})),e.createElement("div",{className:"modal-body p-4",style:{backgroundColor:"#ffffff"}},e.createElement("div",{className:"d-flex align-items-center gap-3 p-3 rounded-3 mb-4",style:{backgroundColor:"#f8fafc",border:"1.5px solid #e2e8f0"}},e.createElement("img",{src:t.image?`/storage/users/${t.image}`:"/assets/images/user.png",alt:t.name,className:"rounded-circle",style:{width:"50px",height:"50px",objectFit:"cover",border:"2px solid #cbd5e1"},onError:a=>{a.target.src="/assets/images/user.png"}}),e.createElement("div",{className:"flex-grow-1"},e.createElement("div",{className:"fw-bold text-dark",style:{fontSize:"0.98rem"}},t.name),e.createElement("div",{className:"d-flex align-items-center gap-3 small text-secondary mt-1 flex-wrap",style:{fontSize:"0.8rem"}},t.email&&e.createElement("span",{className:"d-inline-flex align-items-center gap-1"},e.createElement("i",{className:"fa fa-envelope text-muted"}),e.createElement("span",null,t.email)),t.phone&&e.createElement("a",{href:`https://wa.me/${t.phone.replace(/^0/,"62").replace(/\D/g,"")}`,target:"_blank",rel:"noreferrer",className:"d-inline-flex align-items-center gap-1 text-success fw-semibold text-decoration-none"},e.createElement("i",{className:"fab fa-whatsapp"}),e.createElement("span",null,t.phone)),((I=t.province)==null?void 0:I.name)&&e.createElement("span",{className:"d-inline-flex align-items-center gap-1"},e.createElement("i",{className:"fa fa-map-marker-alt text-danger"}),e.createElement("span",null,t.province.name.startsWith("DPW")?t.province.name:`DPW ${t.province.name}`,(A=t.city)!=null&&A.name?` \u2022 ${t.city.name.startsWith("DPC")?t.city.name:`DPC ${t.city.name}`}`:""))))),e.createElement("div",{className:"row g-2 mb-4"},e.createElement("div",{className:"col-12 col-md-6"},e.createElement("div",{className:"p-2.5 rounded-3 d-flex align-items-center gap-2.5",style:{backgroundColor:"#f8fafc",border:"1.5px solid #e2e8f0"}},e.createElement("div",{className:"d-flex align-items-center justify-content-center flex-shrink-0",style:{width:"34px",height:"34px",borderRadius:"8px",backgroundColor:"#e2e8f0",color:"#475569",fontSize:"14px"}},e.createElement("i",{className:"fa fa-calendar-plus"})),e.createElement("div",null,e.createElement("small",{className:"text-muted d-block",style:{fontSize:"0.72rem"}},"Tanggal Daftar Akun"),e.createElement("strong",{className:"text-dark",style:{fontSize:"0.84rem"}},t.registered_date||"-"," (Tahun ",t.registered_year,")")))),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("div",{className:"p-2.5 rounded-3 d-flex align-items-center gap-2.5",style:{backgroundColor:"#ecfdf5",border:"1.5px solid #a7f3d0"}},e.createElement("div",{className:"d-flex align-items-center justify-content-center flex-shrink-0",style:{width:"34px",height:"34px",borderRadius:"8px",backgroundColor:"#d1fae5",color:"#059669",fontSize:"14px"}},e.createElement("i",{className:"fa fa-shield-alt"})),e.createElement("div",null,e.createElement("small",{className:"text-muted d-block",style:{fontSize:"0.72rem"}},"Awal Kewajiban Iuran"),e.createElement("strong",{className:"text-success",style:{fontSize:"0.84rem"}},"Mulai Tahun ",t.start_year))))),e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-3"},e.createElement("h6",{className:"fw-bold text-dark mb-0 d-flex align-items-center gap-2",style:{fontSize:"0.92rem"}},e.createElement("i",{className:"fa fa-calendar-check text-success"}),e.createElement("span",null,"Status Iuran Multi-Tahun (2024 - 2026)")),e.createElement("small",{className:"text-muted",style:{fontSize:"0.75rem"}},"Standar: Rp 300.000 / tahun")),e.createElement("div",{className:"row g-3"},t.yearly_status&&t.yearly_status.map(a=>{const s=a.payment_status==="NOT_MEMBER"||a.is_exempt;return e.createElement("div",{key:a.tahun,className:"col-12 col-md-4"},e.createElement("div",{className:"p-3 rounded-3 h-100 d-flex flex-column justify-content-between",style:{backgroundColor:a.is_paid?"#f0fdf4":s?"#f8fafc":a.payment_status==="UNPAID_PENDING"?"#eff6ff":"#fef2f2",border:`1.5px solid ${a.is_paid?"#86efac":s?"#e2e8f0":a.payment_status==="UNPAID_PENDING"?"#93c5fd":"#fca5a5"}`}},e.createElement("div",null,e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2.5"},e.createElement("span",{className:"fw-bold text-dark",style:{fontSize:"0.92rem"}},"Tahun ",a.tahun),a.is_paid?e.createElement("span",{className:"badge",style:{backgroundColor:"#059669",color:"#ffffff",fontSize:"0.72rem",fontWeight:700,padding:"4px 8px",borderRadius:"6px"}},e.createElement("i",{className:"fa fa-check-circle me-1"})," LUNAS"):s?e.createElement("span",{className:"badge",style:{backgroundColor:"#64748b",color:"#ffffff",fontSize:"0.72rem",fontWeight:700,padding:"4px 8px",borderRadius:"6px"}},e.createElement("i",{className:"fa fa-minus me-1"})," BELUM ANGGOTA"):a.payment_status==="UNPAID_PENDING"?e.createElement("span",{className:"badge",style:{backgroundColor:"#2563eb",color:"#ffffff",fontSize:"0.72rem",fontWeight:700,padding:"4px 8px",borderRadius:"6px"}},e.createElement("i",{className:"fa fa-hourglass-half me-1"})," PENDING"):e.createElement("span",{className:"badge",style:{backgroundColor:"#dc2626",color:"#ffffff",fontSize:"0.72rem",fontWeight:700,padding:"4px 8px",borderRadius:"6px"}},e.createElement("i",{className:"fa fa-times-circle me-1"})," BELUM BAYAR")),e.createElement("div",{className:"small mb-2",style:{fontSize:"0.8rem"}},a.is_paid?e.createElement(e.Fragment,null,e.createElement("div",{className:"text-secondary mb-1"},"Nominal: ",e.createElement("strong",{className:"text-dark"},x(a.amount))),e.createElement("div",{className:"text-secondary"},"Tgl Bayar: ",e.createElement("strong",{className:"text-dark"},a.paid_at||"-"))):s?e.createElement(e.Fragment,null,e.createElement("div",{className:"text-muted mb-1",style:{fontSize:"0.78rem"}},"Keterangan: ",e.createElement("strong",{className:"text-secondary"},"Bebas Iuran")),e.createElement("div",{className:"text-muted",style:{fontSize:"0.74rem"}},e.createElement("i",{className:"fa fa-info-circle me-1"}),"Tahun sebelum resmi terdaftar")):e.createElement(e.Fragment,null,e.createElement("div",{className:"text-secondary mb-1"},"Tagihan: ",e.createElement("strong",{className:"text-danger"},x(a.amount))),e.createElement("div",{className:"text-danger",style:{fontSize:"0.74rem"}},e.createElement("i",{className:"fa fa-exclamation-circle me-1"}),"Belum ada pembayaran")))),a.invoice&&e.createElement($,{href:`/account/transactions/${a.invoice}`,className:"btn btn-sm d-inline-flex align-items-center justify-content-center gap-1.5 mt-2",style:{backgroundColor:"#ffffff",border:"1.5px solid #a7f3d0",color:"#047857",borderRadius:"6px",fontSize:"0.75rem",fontWeight:600,padding:"5px 10px",transition:"all 0.15s ease"}},e.createElement("i",{className:"fa fa-receipt text-success"}),e.createElement("span",null,"Invoice (",a.invoice,")"))))}))),e.createElement("div",{className:"modal-footer py-3 px-4 d-flex justify-content-between align-items-center",style:{backgroundColor:"#f8fafc",borderTop:"1.5px solid #e2e8f0"}},e.createElement("div",null,t.unpaid_years&&t.unpaid_years.length>0?e.createElement("span",{className:"d-inline-flex align-items-center gap-1.5",style:{backgroundColor:"#fee2e2",color:"#b91c1c",border:"1px solid #fca5a5",borderRadius:"6px",padding:"5px 12px",fontSize:"0.78rem",fontWeight:600}},e.createElement("i",{className:"fa fa-exclamation-triangle"}),e.createElement("span",null,"Tunggakan ",t.unpaid_years.length," Tahun (Thn ",t.unpaid_years.join(", "),")")):e.createElement("span",{className:"d-inline-flex align-items-center gap-1.5",style:{backgroundColor:"#dcfce7",color:"#15803d",border:"1px solid #86efac",borderRadius:"6px",padding:"5px 12px",fontSize:"0.78rem",fontWeight:600}},e.createElement("i",{className:"fa fa-check-circle"}),e.createElement("span",null,"Seluruh Iuran Lunas (2024 - 2026)"))),e.createElement("button",{type:"button",onClick:()=>y(null),className:"btn btn-sm px-4",style:{backgroundColor:"#0f172a",color:"#ffffff",borderRadius:"8px",fontWeight:600,fontSize:"0.82rem",padding:"7px 20px",border:"none"}},"Tutup"))))),e.createElement("style",null,`
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
                    margin-bottom: 6px;
                    display: flex;
                    align-items: center;
                    height: 22px;
                    line-height: 22px;
                    white-space: nowrap;
                }
                .filter-input, .filter-select {
                    height: 40px !important;
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
                    height: 40px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
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
                    padding: 14px 16px;
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

                /* Multi-Year Status Badges with comfortable spacing */
                .yearly-badges-wrapper {
                    display: flex !important;
                    flex-wrap: wrap !important;
                    gap: 8px 10px !important;
                    align-items: center !important;
                }

                .yearly-badge {
                    display: inline-flex !important;
                    align-items: center !important;
                    font-size: 0.76rem !important;
                    padding: 4px 10px !important;
                    border-radius: 6px !important;
                    font-weight: 600 !important;
                    line-height: 1.3 !important;
                    margin: 2px 4px 2px 0 !important;
                    transition: all 0.15s ease !important;
                    white-space: nowrap !important;
                }
                .yearly-paid {
                    background-color: #ecfdf5 !important;
                    color: #047857 !important;
                    border: 1.5px solid #86efac !important;
                }
                .yearly-unpaid {
                    background-color: #fef2f2 !important;
                    color: #b91c1c !important;
                    border: 1.5px solid #fca5a5 !important;
                }
                .yearly-pending {
                    background-color: #eff6ff !important;
                    color: #1d4ed8 !important;
                    border: 1.5px solid #93c5fd !important;
                }
                .yearly-exempt {
                    background-color: #f8fafc !important;
                    color: #64748b !important;
                    border: 1.5px solid #cbd5e1 !important;
                }
                .yearly-focus {
                    box-shadow: 0 0 0 2px #059669 !important;
                    border-color: #059669 !important;
                }

                .btn-view-detail {
                    background-color: #ffffff;
                    color: #0f172a;
                    border: 1.5px solid #cbd5e1;
                    font-size: 0.75rem;
                    font-weight: 600;
                    border-radius: 6px;
                    padding: 4px 10px;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    transition: all 0.15s ease;
                }
                .btn-view-detail:hover {
                    background-color: #0f172a;
                    color: #ffffff;
                    border-color: #0f172a;
                }

                .table-footer {
                    background-color: #f8fafc;
                    border-top: 1.5px solid #cbd5e1;
                }
            `))}export{te as default};
