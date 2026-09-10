import{u as j,r as b,R as e,H as z,L as f,d as u}from"./app.ddddb40a.js";import{L as K,h as i}from"./Account.a176e3ba.js";import{P as B}from"./Pagination.31af18d6.js";import{S}from"./sweetalert2.all.346ccb21.js";import"./Dropdown.e4086b66.js";function M(){var k;const{wilayah:t}=j().props,[d,h]=b.exports.useState("grid"),[c,x]=b.exports.useState(""),[g,m]=b.exports.useState(!1),A=a=>{a.preventDefault(),m(!0),u.Inertia.get("/account/areadpc",{q:c},{preserveState:!0,onFinish:()=>m(!1)})},E=()=>{x(""),m(!0),u.Inertia.get("/account/areadpc",{},{onFinish:()=>m(!1)})},N=(a,l)=>{S.fire({title:"Hapus Wilayah DPC?",text:`Data wilayah ${l||""} akan dihapus permanen dari sistem!`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc2626",cancelButtonColor:"#64748b",confirmButtonText:"Ya, Hapus!",cancelButtonText:"Batal"}).then(r=>{r.isConfirmed&&u.Inertia.delete(`/account/areadpc/${a}`,{onSuccess:()=>{S.fire({title:"Terhapus!",text:"Data Wilayah DPC berhasil dihapus.",icon:"success",showConfirmButton:!1,timer:2e3})}})})},w=a=>{if(!a)return null;let l=a.replace(/[^0-9]/g,"");return l.startsWith("0")&&(l="62"+l.slice(1)),l},y=a=>!a||a==="-"?null:a.startsWith("http")?a:`https://instagram.com/${a.replace("@","").trim()}`,T=(t==null?void 0:t.total)||((k=t==null?void 0:t.data)==null?void 0:k.length)||0;return e.createElement(e.Fragment,null,e.createElement(z,null,e.createElement("title",null,"Manajemen Wilayah DPC - IKATWI")),e.createElement(K,null,e.createElement("div",{className:"container-fluid py-4 wilayah-admin-container"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm border-0 header-banner-box"},e.createElement("div",{className:"d-flex align-items-center mb-3 mb-md-0"},e.createElement("div",{className:"header-icon-square-dpc me-3 shadow"},e.createElement("i",{className:"fa fa-map-signs fa-2x text-white"})),e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center gap-2 mb-1"},e.createElement("h4",{className:"mb-0 fw-bold text-dark-title",style:{letterSpacing:"-0.02em"}},"Wilayah DPC IKATWI"),e.createElement("span",{className:"badge-level-pill-dpc"},"Tingkat Kota / Kabupaten")),e.createElement("p",{className:"mb-0 text-slate-muted small"},"Kelola seluruh data sekretariat, link peta lokasi, kontak, dan ketua Dewan Pengurus Cabang (DPC)."))),e.createElement("div",{className:"d-flex flex-wrap align-items-center gap-2"},e.createElement(f,{href:"/account/wilayah",className:"btn btn-outline-switch rounded-pill px-3 py-2 fw-semibold small shadow-sm"},e.createElement("i",{className:"fa fa-map-marked-alt me-1.5 text-emerald-600"}),"Buka Wilayah DPW"),i(["wilayah.create"])&&e.createElement(f,{href:"/account/areadpc/create",className:"btn btn-add-dpc rounded-pill px-4 py-2 fw-bold shadow"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Tambah Wilayah DPC"))),e.createElement("div",{className:"card border-0 rounded-4 shadow-sm mb-4 bg-white p-3 p-md-4 toolbar-card"},e.createElement("div",{className:"row g-3 align-items-center justify-content-between"},e.createElement("div",{className:"col-12 col-md-6 col-lg-5"},e.createElement("form",{onSubmit:A,className:"position-relative"},e.createElement("div",{className:"input-group search-input-group"},e.createElement("span",{className:"input-group-text bg-transparent border-end-0 text-slate-400 ps-3"},e.createElement("i",{className:"fa fa-search"})),e.createElement("input",{type:"text",className:"form-control border-start-0 ps-1",placeholder:"Cari nama kota / wilayah DPC...",value:c,onChange:a=>x(a.target.value)}),c&&e.createElement("button",{type:"button",onClick:E,className:"btn btn-link text-slate-400 border-0 text-decoration-none",title:"Hapus pencarian"},e.createElement("i",{className:"fa fa-times-circle"})),e.createElement("button",{type:"submit",disabled:g,className:"btn btn-primary px-3 fw-semibold"},g?e.createElement("span",{className:"spinner-border spinner-border-sm"}):"Cari")))),e.createElement("div",{className:"col-12 col-md-6 col-lg-6 d-flex justify-content-md-end align-items-center gap-3"},e.createElement("span",{className:"badge-count-pill"},e.createElement("i",{className:"fa fa-city me-1.5 text-blue-600"}),"Total ",e.createElement("strong",null,T)," Wilayah DPC"),e.createElement("div",{className:"btn-group view-switcher-group shadow-sm p-1 rounded-pill bg-slate-100",role:"group"},e.createElement("button",{type:"button",onClick:()=>h("grid"),className:`btn btn-sm rounded-pill px-3 py-1.5 fw-semibold ${d==="grid"?"btn-white text-blue-700 shadow-sm active-view":"text-slate-600 border-0 bg-transparent"}`},e.createElement("i",{className:"fa fa-th-large me-1.5"})," Kartu Portal"),e.createElement("button",{type:"button",onClick:()=>h("table"),className:`btn btn-sm rounded-pill px-3 py-1.5 fw-semibold ${d==="table"?"btn-white text-blue-700 shadow-sm active-view":"text-slate-600 border-0 bg-transparent"}`},e.createElement("i",{className:"fa fa-list me-1.5"})," Tabel Data"))))),d==="grid"&&e.createElement("div",{className:"row g-4 mb-4"},t.data&&t.data.length>0?t.data.map((a,l)=>{var v,C,P,D,W;const r=a.phone?a.phone.trim():"",s=w(r),o=y(a.instagram);let n=a.link;(!n||!n.startsWith("http"))&&(n=`https://maps.google.com/maps?q=${encodeURIComponent((((v=a.city)==null?void 0:v.name)||"Indonesia")+" Indonesia")}&hl=id&output=embed`);const p=a.link&&a.link.includes("q=")?a.link.replace("&output=embed","").replace("output=embed",""):`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((((C=a.city)==null?void 0:C.name)||"")+" "+(a.alamat||""))}`;return e.createElement("div",{key:l,className:"col-12 col-md-6 col-xl-4"},e.createElement("div",{className:"card h-100 border-0 rounded-4 shadow-sm overflow-hidden portal-wilayah-card-dpc"},e.createElement("div",{className:"card-header border-0 py-3 px-4 d-flex justify-content-between align-items-center portal-card-header-dpc"},e.createElement("div",{className:"d-flex align-items-center gap-2.5 overflow-hidden"},e.createElement("span",{className:"dpc-badge-icon shadow-sm"},e.createElement("i",{className:"fa fa-city text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-extrabold text-slate-900 fs-6 text-truncate",title:(P=a.city)==null?void 0:P.name},((D=a.city)==null?void 0:D.name)||"Wilayah DPC"),e.createElement("span",{className:"text-slate-500 font-monospace",style:{fontSize:"0.72rem"}},"ID: DPC-",a.city_id||a.id))),e.createElement("span",{className:"badge-active-pill-dpc"},e.createElement("i",{className:"fa fa-check-circle me-1 text-blue-600"})," Aktif")),e.createElement("div",{className:"map-frame-wrapper position-relative"},e.createElement("iframe",{src:n,className:"portal-map-iframe",title:`Peta ${(W=a.city)==null?void 0:W.name}`,loading:"lazy"}),e.createElement("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-light btn-open-map shadow-sm rounded-pill",title:"Buka Peta Google Maps Lengkap"},e.createElement("i",{className:"fa fa-external-link-alt text-primary me-1"}),e.createElement("span",null,"Buka Maps"))),e.createElement("div",{className:"card-body p-4 d-flex flex-column justify-content-between"},e.createElement("div",null,e.createElement("div",{className:"p-3 rounded-3 mb-3 ketua-info-box-dpc d-flex align-items-center gap-3"},e.createElement("div",{className:"ketua-avatar-circle-dpc shadow-sm"},e.createElement("i",{className:"fa fa-user-tie text-blue-800"})),e.createElement("div",{className:"overflow-hidden"},e.createElement("span",{className:"text-slate-500 text-uppercase fw-bold d-block",style:{fontSize:"0.68rem",letterSpacing:"0.05em"}},"KETUA DPC"),e.createElement("strong",{className:"text-slate-900 fs-6 text-truncate d-block",title:a.name_ketua},a.name_ketua||"-"))),e.createElement("div",{className:"mb-3 d-flex align-items-start gap-2 text-slate-700 small"},e.createElement("i",{className:"fa fa-map-marker-alt text-rose-500 mt-1 flex-shrink-0"}),e.createElement("span",{className:"lh-sm text-slate-600"},a.alamat||"Alamat sekretariat belum diatur.")),e.createElement("div",{className:"d-flex flex-wrap gap-2 mb-2"},s&&e.createElement("a",{href:`https://wa.me/${s}`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-contact-chip btn-whatsapp",title:"Hubungi via WhatsApp"},e.createElement("i",{className:"fa fa-phone-alt me-1.5 text-emerald-600"}),e.createElement("span",null,r)),a.email&&e.createElement("a",{href:`mailto:${a.email}`,className:"btn btn-contact-chip btn-email",title:"Kirim Email"},e.createElement("i",{className:"fa fa-envelope me-1.5 text-blue-600"}),e.createElement("span",{className:"text-truncate",style:{maxWidth:"160px"}},a.email)),o&&e.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"btn btn-contact-chip btn-instagram",title:"Kunjungi Instagram"},e.createElement("i",{className:"fab fa-instagram me-1.5 text-pink-600"}),e.createElement("span",null,"Instagram")))),e.createElement("div",{className:"pt-3 mt-3 border-top d-flex justify-content-between align-items-center"},e.createElement("span",{className:"text-slate-400 small",style:{fontSize:"0.72rem"}},e.createElement("i",{className:"fa fa-calendar-check me-1"})," Cabang Resmi IKATWI"),e.createElement("div",{className:"d-flex gap-1.5"},i(["wilayah.edit"])&&e.createElement(f,{href:`/account/areadpc/${a.id}/edit`,className:"btn btn-sm btn-edit-action rounded-pill px-3 py-1 fw-semibold shadow-sm",title:"Edit Data Wilayah DPC"},e.createElement("i",{className:"fa fa-pencil-alt me-1"})," Edit"),i(["wilayah.delete"])&&e.createElement("button",{onClick:()=>{var I;return N(a.id,(I=a.city)==null?void 0:I.name)},className:"btn btn-sm btn-delete-action rounded-pill px-3 py-1 fw-semibold shadow-sm",title:"Hapus Wilayah DPC"},e.createElement("i",{className:"fa fa-trash me-1"})," Hapus"))))))}):e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded-4 shadow-sm p-5 text-center bg-white empty-state-box"},e.createElement("i",{className:"fa fa-map-signs fa-3x mb-3 text-slate-300"}),e.createElement("h5",{className:"fw-bold text-slate-800 mb-1"},"Data Wilayah DPC Tidak Ditemukan"),e.createElement("p",{className:"text-slate-500 small mb-3"},c?`Tidak ada data wilayah DPC yang cocok dengan kata kunci "${c}".`:"Belum ada data wilayah DPC yang ditambahkan ke sistem."),c&&e.createElement("div",null,e.createElement("button",{onClick:E,className:"btn btn-sm btn-outline-secondary rounded-pill px-4"},"Reset Pencarian"))))),d==="table"&&e.createElement("div",{className:"card border-0 rounded-4 shadow-sm bg-white overflow-hidden mb-4 table-card-box"},e.createElement("div",{className:"card-body p-0"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-hover align-middle mb-0"},e.createElement("thead",{className:"table-thead-custom"},e.createElement("tr",null,e.createElement("th",{className:"ps-4 py-3",style:{width:"5%"}},"NO"),e.createElement("th",{className:"py-3",style:{width:"20%"}},"WILAYAH DPC"),e.createElement("th",{className:"py-3",style:{width:"18%"}},"KETUA DPC"),e.createElement("th",{className:"py-3",style:{width:"25%"}},"ALAMAT & SEKRETARIAT"),e.createElement("th",{className:"py-3",style:{width:"20%"}},"KONTAK & SOSMED"),e.createElement("th",{className:"pe-4 py-3 text-end",style:{width:"12%"}},"AKSI"))),e.createElement("tbody",null,t.data&&t.data.length>0?t.data.map((a,l)=>{var n;const r=a.phone?a.phone.trim():"",s=w(r),o=y(a.instagram);return e.createElement("tr",{key:l,className:"table-row-custom"},e.createElement("td",{className:"ps-4"},e.createElement("span",{className:"row-num-pill"},++l+(t.current_page-1)*t.per_page)),e.createElement("td",null,e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("div",{className:"table-dpc-icon"},e.createElement("i",{className:"fa fa-city text-primary"})),e.createElement("div",null,e.createElement("strong",{className:"text-slate-900 d-block fs-6"},((n=a.city)==null?void 0:n.name)||"-"),e.createElement("span",{className:"text-slate-400 font-monospace small",style:{fontSize:"0.72rem"}},"DPC-",a.city_id||a.id)))),e.createElement("td",null,e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("div",{className:"table-user-avatar"},e.createElement("i",{className:"fa fa-user text-slate-500"})),e.createElement("div",null,e.createElement("strong",{className:"text-slate-800 d-block"},a.name_ketua||"-"),e.createElement("span",{className:"text-blue-700 fw-semibold",style:{fontSize:"0.72rem"}},"Ketua Cabang")))),e.createElement("td",null,e.createElement("p",{className:"mb-0 text-slate-600 small lh-sm",style:{maxWidth:"260px"}},a.alamat||"-")),e.createElement("td",null,e.createElement("div",{className:"d-flex flex-column gap-1"},s&&e.createElement("a",{href:`https://wa.me/${s}`,target:"_blank",rel:"noopener noreferrer",className:"text-decoration-none text-slate-700 small d-flex align-items-center gap-1.5"},e.createElement("i",{className:"fa fa-phone-alt text-emerald-600"}),e.createElement("span",null,r)),a.email&&e.createElement("a",{href:`mailto:${a.email}`,className:"text-decoration-none text-slate-700 small d-flex align-items-center gap-1.5"},e.createElement("i",{className:"fa fa-envelope text-blue-600"}),e.createElement("span",{className:"text-truncate",style:{maxWidth:"160px"}},a.email)),o&&e.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"text-decoration-none text-slate-700 small d-flex align-items-center gap-1.5"},e.createElement("i",{className:"fab fa-instagram text-pink-600"}),e.createElement("span",null,"Instagram")))),e.createElement("td",{className:"text-end pe-4"},e.createElement("div",{className:"d-flex justify-content-end gap-1.5"},i(["wilayah.edit"])&&e.createElement(f,{href:`/account/areadpc/${a.id}/edit`,className:"btn btn-sm btn-edit-action rounded-circle d-flex align-items-center justify-content-center",style:{width:"32px",height:"32px"},title:"Edit Wilayah DPC"},e.createElement("i",{className:"fa fa-pencil-alt"})),i(["wilayah.delete"])&&e.createElement("button",{onClick:()=>{var p;return N(a.id,(p=a.city)==null?void 0:p.name)},className:"btn btn-sm btn-delete-action rounded-circle d-flex align-items-center justify-content-center",style:{width:"32px",height:"32px"},title:"Hapus Wilayah DPC"},e.createElement("i",{className:"fa fa-trash"})))))}):e.createElement("tr",null,e.createElement("td",{colSpan:"6",className:"text-center py-5 text-secondary"},e.createElement("i",{className:"fa fa-folder-open fa-3x mb-3 text-slate-300 d-block"}),e.createElement("span",{className:"fw-medium"},"Belum ada data wilayah DPC tercatat.")))))))),e.createElement("div",{className:"d-flex justify-content-center justify-content-md-end mt-4 mb-3"},e.createElement(B,{links:t.links,align:"end"}))),e.createElement("style",null,`
                    .wilayah-admin-container {
                        animation: fadeIn 0.25s ease-in-out;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(6px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    .text-slate-900 { color: #0f172a; }
                    .text-slate-800 { color: #1e293b; }
                    .text-slate-700 { color: #334155; }
                    .text-slate-600 { color: #475569; }
                    .text-slate-500 { color: #64748b; }
                    .text-slate-400 { color: #94a3b8; }
                    .text-slate-muted { color: #64748b; }
                    .text-dark-title { color: #0f172a; }

                    /* Header Banner */
                    .header-banner-box {
                        background: #ffffff;
                        border: 1.5px solid #cbd5e1 !important;
                    }
                    .header-icon-square-dpc {
                        width: 52px;
                        height: 52px;
                        border-radius: 14px;
                        background: linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
                    }
                    .badge-level-pill-dpc {
                        background-color: #eff6ff;
                        color: #1d4ed8;
                        border: 1px solid #bfdbfe;
                        padding: 3px 10px;
                        border-radius: 9999px;
                        font-weight: 700;
                        font-size: 0.74rem;
                    }
                    .btn-outline-switch {
                        background-color: #ffffff;
                        color: #334155;
                        border: 1.5px solid #cbd5e1;
                        transition: all 0.2s ease;
                    }
                    .btn-outline-switch:hover {
                        background-color: #f1f5f9;
                        color: #0f172a;
                    }
                    .btn-add-dpc {
                        background: linear-gradient(135deg, #0284c7 0%, #1d4ed8 100%);
                        color: #ffffff;
                        border: none;
                        transition: all 0.2s ease;
                    }
                    .btn-add-dpc:hover {
                        background: linear-gradient(135deg, #0369a1 0%, #1e40af 100%);
                        color: #ffffff;
                        transform: translateY(-2px);
                    }

                    /* Toolbar Card */
                    .toolbar-card {
                        border: 1.5px solid #e2e8f0 !important;
                    }
                    .search-input-group {
                        border-radius: 12px;
                        overflow: hidden;
                        border: 1.5px solid #cbd5e1;
                        background-color: #ffffff;
                    }
                    .search-input-group .form-control {
                        border: none;
                        font-size: 0.88rem;
                        box-shadow: none;
                    }
                    .badge-count-pill {
                        background-color: #f8fafc;
                        color: #334155;
                        border: 1.5px solid #e2e8f0;
                        padding: 6px 14px;
                        border-radius: 9999px;
                        font-size: 0.8rem;
                    }
                    .view-switcher-group {
                        border: 1px solid #cbd5e1;
                    }
                    .active-view {
                        background-color: #ffffff !important;
                        font-weight: 700 !important;
                    }

                    /* Portal Card View DPC */
                    .portal-wilayah-card-dpc {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #0284c7 !important;
                        transition: all 0.25s ease;
                        background-color: #ffffff;
                    }
                    .portal-wilayah-card-dpc:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08) !important;
                        border-color: #94a3b8 !important;
                    }
                    .portal-card-header-dpc {
                        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                        border-bottom: 1.5px solid #e2e8f0;
                    }
                    .dpc-badge-icon {
                        width: 38px;
                        height: 38px;
                        border-radius: 10px;
                        background: linear-gradient(135deg, #0284c7 0%, #1d4ed8 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 15px;
                        flex-shrink: 0;
                    }
                    .badge-active-pill-dpc {
                        background-color: #eff6ff;
                        color: #1d4ed8;
                        border: 1px solid #bfdbfe;
                        padding: 4px 10px;
                        border-radius: 9999px;
                        font-size: 0.72rem;
                        font-weight: 700;
                    }

                    /* Map Frame */
                    .map-frame-wrapper {
                        height: 180px;
                        width: 100%;
                        background-color: #f1f5f9;
                        overflow: hidden;
                    }
                    .portal-map-iframe {
                        width: 100%;
                        height: 100%;
                        border: 0;
                        filter: saturate(0.9);
                    }
                    .btn-open-map {
                        position: absolute;
                        bottom: 10px;
                        right: 10px;
                        font-size: 0.74rem;
                        font-weight: 700;
                        padding: 4px 12px;
                        background-color: rgba(255, 255, 255, 0.95);
                        backdrop-filter: blur(4px);
                        border: 1px solid #cbd5e1;
                    }

                    /* Ketua Box DPC */
                    .ketua-info-box-dpc {
                        background-color: #eff6ff;
                        border: 1.5px solid #bfdbfe;
                    }
                    .ketua-avatar-circle-dpc {
                        width: 38px;
                        height: 38px;
                        border-radius: 50%;
                        background-color: #dbeafe;
                        border: 1.5px solid #93c5fd;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 15px;
                        flex-shrink: 0;
                    }

                    /* Contact Chips */
                    .btn-contact-chip {
                        display: inline-flex;
                        align-items: center;
                        padding: 5px 12px;
                        border-radius: 9999px;
                        font-size: 0.76rem;
                        font-weight: 600;
                        text-decoration: none;
                        transition: all 0.2s ease;
                        border: 1px solid;
                    }
                    .btn-whatsapp {
                        background-color: #f0fdf4;
                        color: #166534;
                        border-color: #bbf7d0;
                    }
                    .btn-whatsapp:hover {
                        background-color: #dcfce7;
                        color: #14532d;
                    }
                    .btn-email {
                        background-color: #eff6ff;
                        color: #1e40af;
                        border-color: #bfdbfe;
                    }
                    .btn-email:hover {
                        background-color: #dbeafe;
                        color: #1e3a8a;
                    }
                    .btn-instagram {
                        background-color: #fdf2f8;
                        color: #9d174d;
                        border-color: #fbcfe8;
                    }
                    .btn-instagram:hover {
                        background-color: #fce7f3;
                        color: #831843;
                    }

                    /* Action Buttons */
                    .btn-edit-action {
                        background-color: #eff6ff;
                        color: #1d4ed8;
                        border: 1.5px solid #bfdbfe;
                        transition: all 0.2s ease;
                    }
                    .btn-edit-action:hover {
                        background-color: #1d4ed8;
                        color: #ffffff;
                        border-color: #1d4ed8;
                    }
                    .btn-delete-action {
                        background-color: #fef2f2;
                        color: #dc2626;
                        border: 1.5px solid #fecaca;
                        transition: all 0.2s ease;
                    }
                    .btn-delete-action:hover {
                        background-color: #dc2626;
                        color: #ffffff;
                        border-color: #dc2626;
                    }

                    /* Table View */
                    .table-card-box {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #334155 !important;
                    }
                    .table-thead-custom {
                        background-color: #f8fafc;
                        color: #1e293b;
                        font-size: 0.75rem;
                        letter-spacing: 0.04em;
                        border-bottom: 1.5px solid #e2e8f0;
                    }
                    .table-row-custom {
                        transition: background-color 0.15s ease;
                    }
                    .table-row-custom:hover {
                        background-color: #f8fafc;
                    }
                    .row-num-pill {
                        background-color: #f1f5f9;
                        color: #475569;
                        border: 1px solid #cbd5e1;
                        padding: 3px 8px;
                        border-radius: 6px;
                        font-weight: 700;
                        font-size: 0.75rem;
                    }
                    .table-dpc-icon {
                        width: 32px;
                        height: 32px;
                        border-radius: 8px;
                        background-color: #eff6ff;
                        border: 1px solid #bfdbfe;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 13px;
                    }
                    .table-user-avatar {
                        width: 28px;
                        height: 28px;
                        border-radius: 50%;
                        background-color: #f1f5f9;
                        border: 1px solid #cbd5e1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 11px;
                    }
                `)))}export{M as default};
