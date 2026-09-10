import{u as $,r as b,R as e,H as j,L as f,d as u}from"./app.495843f8.js";import{L as z,h as c}from"./Account.1665c6b2.js";import{P as B}from"./Pagination.f5abf5f8.js";import{S as C}from"./sweetalert2.all.3e758498.js";import"./Dropdown.30a41e0a.js";function M(){var k;const{wilayah:t}=$().props,[i,h]=b.exports.useState("grid"),[n,x]=b.exports.useState(""),[g,d]=b.exports.useState(!1),T=a=>{a.preventDefault(),d(!0),u.Inertia.get("/account/wilayah",{q:n},{preserveState:!0,onFinish:()=>d(!1)})},E=()=>{x(""),d(!0),u.Inertia.get("/account/wilayah",{},{onFinish:()=>d(!1)})},w=(a,l)=>{C.fire({title:"Hapus Wilayah DPW?",text:`Data wilayah ${l||""} akan dihapus permanen dari sistem!`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc2626",cancelButtonColor:"#64748b",confirmButtonText:"Ya, Hapus!",cancelButtonText:"Batal"}).then(r=>{r.isConfirmed&&u.Inertia.delete(`/account/wilayah/${a}`,{onSuccess:()=>{C.fire({title:"Terhapus!",text:"Data Wilayah DPW berhasil dihapus.",icon:"success",showConfirmButton:!1,timer:2e3})}})})},N=a=>{if(!a)return null;let l=a.replace(/[^0-9]/g,"");return l.startsWith("0")&&(l="62"+l.slice(1)),l},y=a=>!a||a==="-"?null:a.startsWith("http")?a:`https://instagram.com/${a.replace("@","").trim()}`,A=(t==null?void 0:t.total)||((k=t==null?void 0:t.data)==null?void 0:k.length)||0;return e.createElement(e.Fragment,null,e.createElement(j,null,e.createElement("title",null,"Manajemen Wilayah DPW - IKATWI")),e.createElement(z,null,e.createElement("div",{className:"container-fluid py-4 wilayah-admin-container"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm border-0 header-banner-box"},e.createElement("div",{className:"d-flex align-items-center mb-3 mb-md-0"},e.createElement("div",{className:"header-icon-square me-3 shadow"},e.createElement("i",{className:"fa fa-map-marked-alt fa-2x text-white"})),e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center gap-2 mb-1"},e.createElement("h4",{className:"mb-0 fw-bold text-dark-title",style:{letterSpacing:"-0.02em"}},"Wilayah DPW IKATWI"),e.createElement("span",{className:"badge-level-pill"},"Tingkat Provinsi")),e.createElement("p",{className:"mb-0 text-slate-muted small"},"Kelola seluruh data sekretariat, pemetaan wilayah, kontak, dan ketua Dewan Pengurus Wilayah (DPW)."))),e.createElement("div",{className:"d-flex flex-wrap align-items-center gap-2"},e.createElement(f,{href:"/account/areadpc",className:"btn btn-outline-switch rounded-pill px-3 py-2 fw-semibold small shadow-sm"},e.createElement("i",{className:"fa fa-map-signs me-1.5 text-primary"}),"Buka Wilayah DPC"),c(["wilayah.create"])&&e.createElement(f,{href:"/account/wilayah/create",className:"btn btn-add-wilayah rounded-pill px-4 py-2 fw-bold shadow"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Tambah Wilayah DPW"))),e.createElement("div",{className:"card border-0 rounded-4 shadow-sm mb-4 bg-white p-3 p-md-4 toolbar-card"},e.createElement("div",{className:"row g-3 align-items-center justify-content-between"},e.createElement("div",{className:"col-12 col-md-6 col-lg-5"},e.createElement("form",{onSubmit:T,className:"position-relative"},e.createElement("div",{className:"input-group search-input-group"},e.createElement("span",{className:"input-group-text bg-transparent border-end-0 text-slate-400 ps-3"},e.createElement("i",{className:"fa fa-search"})),e.createElement("input",{type:"text",className:"form-control border-start-0 ps-1",placeholder:"Cari provinsi / wilayah DPW...",value:n,onChange:a=>x(a.target.value)}),n&&e.createElement("button",{type:"button",onClick:E,className:"btn btn-link text-slate-400 border-0 text-decoration-none",title:"Hapus pencarian"},e.createElement("i",{className:"fa fa-times-circle"})),e.createElement("button",{type:"submit",disabled:g,className:"btn btn-primary px-3 fw-semibold"},g?e.createElement("span",{className:"spinner-border spinner-border-sm"}):"Cari")))),e.createElement("div",{className:"col-12 col-md-6 col-lg-6 d-flex justify-content-md-end align-items-center gap-3"},e.createElement("span",{className:"badge-count-pill"},e.createElement("i",{className:"fa fa-layer-group me-1.5 text-emerald-600"}),"Total ",e.createElement("strong",null,A)," Wilayah DPW"),e.createElement("div",{className:"btn-group view-switcher-group shadow-sm p-1 rounded-pill bg-slate-100",role:"group"},e.createElement("button",{type:"button",onClick:()=>h("grid"),className:`btn btn-sm rounded-pill px-3 py-1.5 fw-semibold ${i==="grid"?"btn-white text-emerald-700 shadow-sm active-view":"text-slate-600 border-0 bg-transparent"}`},e.createElement("i",{className:"fa fa-th-large me-1.5"})," Kartu Portal"),e.createElement("button",{type:"button",onClick:()=>h("table"),className:`btn btn-sm rounded-pill px-3 py-1.5 fw-semibold ${i==="table"?"btn-white text-emerald-700 shadow-sm active-view":"text-slate-600 border-0 bg-transparent"}`},e.createElement("i",{className:"fa fa-list me-1.5"})," Tabel Data"))))),i==="grid"&&e.createElement("div",{className:"row g-4 mb-4"},t.data&&t.data.length>0?t.data.map((a,l)=>{var v,W,P,D,S;const r=a.phone?a.phone.trim():"",o=N(r),s=y(a.instagram),m=a.lat&&a.long?`https://maps.google.com/maps?q=${a.lat},${a.long}&hl=id&output=embed`:`https://maps.google.com/maps?q=${encodeURIComponent((((v=a.province)==null?void 0:v.name)||"Indonesia")+" Indonesia")}&hl=id&output=embed`,p=a.lat&&a.long?`https://www.google.com/maps/search/?api=1&query=${a.lat},${a.long}`:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((((W=a.province)==null?void 0:W.name)||"")+" "+(a.alamat||""))}`;return e.createElement("div",{key:l,className:"col-12 col-md-6 col-xl-4"},e.createElement("div",{className:"card h-100 border-0 rounded-4 shadow-sm overflow-hidden portal-wilayah-card"},e.createElement("div",{className:"card-header border-0 py-3 px-4 d-flex justify-content-between align-items-center portal-card-header"},e.createElement("div",{className:"d-flex align-items-center gap-2.5 overflow-hidden"},e.createElement("span",{className:"dpw-badge-icon shadow-sm"},e.createElement("i",{className:"fa fa-landmark text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-extrabold text-slate-900 fs-6 text-truncate",title:(P=a.province)==null?void 0:P.name},((D=a.province)==null?void 0:D.name)||"Wilayah DPW"),e.createElement("span",{className:"text-slate-500 font-monospace",style:{fontSize:"0.72rem"}},"ID: DPW-",a.province_id||a.id))),e.createElement("span",{className:"badge-active-pill"},e.createElement("i",{className:"fa fa-check-circle me-1 text-emerald-600"})," Aktif")),e.createElement("div",{className:"map-frame-wrapper position-relative"},e.createElement("iframe",{src:m,className:"portal-map-iframe",title:`Peta ${(S=a.province)==null?void 0:S.name}`,loading:"lazy"}),e.createElement("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-light btn-open-map shadow-sm rounded-pill",title:"Buka Peta Google Maps Lengkap"},e.createElement("i",{className:"fa fa-external-link-alt text-primary me-1"}),e.createElement("span",null,"Buka Maps"))),e.createElement("div",{className:"card-body p-4 d-flex flex-column justify-content-between"},e.createElement("div",null,e.createElement("div",{className:"p-3 rounded-3 mb-3 ketua-info-box d-flex align-items-center gap-3"},e.createElement("div",{className:"ketua-avatar-circle shadow-sm"},e.createElement("i",{className:"fa fa-user-tie text-emerald-800"})),e.createElement("div",{className:"overflow-hidden"},e.createElement("span",{className:"text-slate-500 text-uppercase fw-bold d-block",style:{fontSize:"0.68rem",letterSpacing:"0.05em"}},"KETUA DPW"),e.createElement("strong",{className:"text-slate-900 fs-6 text-truncate d-block",title:a.name_ketua},a.name_ketua||"-"))),e.createElement("div",{className:"mb-3 d-flex align-items-start gap-2 text-slate-700 small"},e.createElement("i",{className:"fa fa-map-marker-alt text-rose-500 mt-1 flex-shrink-0"}),e.createElement("span",{className:"lh-sm text-slate-600"},a.alamat||"Alamat sekretariat belum diatur.")),e.createElement("div",{className:"d-flex flex-wrap gap-2 mb-2"},o&&e.createElement("a",{href:`https://wa.me/${o}`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-contact-chip btn-whatsapp",title:"Hubungi via WhatsApp"},e.createElement("i",{className:"fa fa-phone-alt me-1.5 text-emerald-600"}),e.createElement("span",null,r)),a.email&&e.createElement("a",{href:`mailto:${a.email}`,className:"btn btn-contact-chip btn-email",title:"Kirim Email"},e.createElement("i",{className:"fa fa-envelope me-1.5 text-blue-600"}),e.createElement("span",{className:"text-truncate",style:{maxWidth:"160px"}},a.email)),s&&e.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"btn btn-contact-chip btn-instagram",title:"Kunjungi Instagram"},e.createElement("i",{className:"fab fa-instagram me-1.5 text-pink-600"}),e.createElement("span",null,"Instagram")))),e.createElement("div",{className:"pt-3 mt-3 border-top d-flex justify-content-between align-items-center"},e.createElement("span",{className:"text-slate-400 small",style:{fontSize:"0.72rem"}},e.createElement("i",{className:"fa fa-calendar-check me-1"})," Terdaftar Resmi"),e.createElement("div",{className:"d-flex gap-1.5"},c(["wilayah.edit"])&&e.createElement(f,{href:`/account/wilayah/${a.id}/edit`,className:"btn btn-sm btn-edit-action rounded-pill px-3 py-1 fw-semibold shadow-sm",title:"Edit Data Wilayah"},e.createElement("i",{className:"fa fa-pencil-alt me-1"})," Edit"),c(["wilayah.delete"])&&e.createElement("button",{onClick:()=>{var I;return w(a.id,(I=a.province)==null?void 0:I.name)},className:"btn btn-sm btn-delete-action rounded-pill px-3 py-1 fw-semibold shadow-sm",title:"Hapus Wilayah"},e.createElement("i",{className:"fa fa-trash me-1"})," Hapus"))))))}):e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded-4 shadow-sm p-5 text-center bg-white empty-state-box"},e.createElement("i",{className:"fa fa-map-marked-alt fa-3x mb-3 text-slate-300"}),e.createElement("h5",{className:"fw-bold text-slate-800 mb-1"},"Data Wilayah DPW Tidak Ditemukan"),e.createElement("p",{className:"text-slate-500 small mb-3"},n?`Tidak ada data wilayah DPW yang cocok dengan kata kunci "${n}".`:"Belum ada data wilayah DPW yang ditambahkan ke sistem."),n&&e.createElement("div",null,e.createElement("button",{onClick:E,className:"btn btn-sm btn-outline-secondary rounded-pill px-4"},"Reset Pencarian"))))),i==="table"&&e.createElement("div",{className:"card border-0 rounded-4 shadow-sm bg-white overflow-hidden mb-4 table-card-box"},e.createElement("div",{className:"card-body p-0"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-hover align-middle mb-0"},e.createElement("thead",{className:"table-thead-custom"},e.createElement("tr",null,e.createElement("th",{className:"ps-4 py-3",style:{width:"5%"}},"NO"),e.createElement("th",{className:"py-3",style:{width:"20%"}},"WILAYAH DPW"),e.createElement("th",{className:"py-3",style:{width:"18%"}},"KETUA DPW"),e.createElement("th",{className:"py-3",style:{width:"25%"}},"ALAMAT & SEKRETARIAT"),e.createElement("th",{className:"py-3",style:{width:"20%"}},"KONTAK & SOSMED"),e.createElement("th",{className:"pe-4 py-3 text-end",style:{width:"12%"}},"AKSI"))),e.createElement("tbody",null,t.data&&t.data.length>0?t.data.map((a,l)=>{var m;const r=a.phone?a.phone.trim():"",o=N(r),s=y(a.instagram);return e.createElement("tr",{key:l,className:"table-row-custom"},e.createElement("td",{className:"ps-4"},e.createElement("span",{className:"row-num-pill"},++l+(t.current_page-1)*t.per_page)),e.createElement("td",null,e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("div",{className:"table-dpw-icon"},e.createElement("i",{className:"fa fa-landmark text-primary"})),e.createElement("div",null,e.createElement("strong",{className:"text-slate-900 d-block fs-6"},((m=a.province)==null?void 0:m.name)||"-"),e.createElement("span",{className:"text-slate-400 font-monospace small",style:{fontSize:"0.72rem"}},"DPW-",a.province_id||a.id)))),e.createElement("td",null,e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("div",{className:"table-user-avatar"},e.createElement("i",{className:"fa fa-user text-slate-500"})),e.createElement("div",null,e.createElement("strong",{className:"text-slate-800 d-block"},a.name_ketua||"-"),e.createElement("span",{className:"text-emerald-700 fw-semibold",style:{fontSize:"0.72rem"}},"Ketua Wilayah")))),e.createElement("td",null,e.createElement("p",{className:"mb-0 text-slate-600 small lh-sm",style:{maxWidth:"260px"}},a.alamat||"-")),e.createElement("td",null,e.createElement("div",{className:"d-flex flex-column gap-1"},o&&e.createElement("a",{href:`https://wa.me/${o}`,target:"_blank",rel:"noopener noreferrer",className:"text-decoration-none text-slate-700 small d-flex align-items-center gap-1.5"},e.createElement("i",{className:"fa fa-phone-alt text-emerald-600"}),e.createElement("span",null,r)),a.email&&e.createElement("a",{href:`mailto:${a.email}`,className:"text-decoration-none text-slate-700 small d-flex align-items-center gap-1.5"},e.createElement("i",{className:"fa fa-envelope text-blue-600"}),e.createElement("span",{className:"text-truncate",style:{maxWidth:"160px"}},a.email)),s&&e.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"text-decoration-none text-slate-700 small d-flex align-items-center gap-1.5"},e.createElement("i",{className:"fab fa-instagram text-pink-600"}),e.createElement("span",null,"Instagram")))),e.createElement("td",{className:"text-end pe-4"},e.createElement("div",{className:"d-flex justify-content-end gap-1.5"},c(["wilayah.edit"])&&e.createElement(f,{href:`/account/wilayah/${a.id}/edit`,className:"btn btn-sm btn-edit-action rounded-circle d-flex align-items-center justify-content-center",style:{width:"32px",height:"32px"},title:"Edit Wilayah"},e.createElement("i",{className:"fa fa-pencil-alt"})),c(["wilayah.delete"])&&e.createElement("button",{onClick:()=>{var p;return w(a.id,(p=a.province)==null?void 0:p.name)},className:"btn btn-sm btn-delete-action rounded-circle d-flex align-items-center justify-content-center",style:{width:"32px",height:"32px"},title:"Hapus Wilayah"},e.createElement("i",{className:"fa fa-trash"})))))}):e.createElement("tr",null,e.createElement("td",{colSpan:"6",className:"text-center py-5 text-secondary"},e.createElement("i",{className:"fa fa-folder-open fa-3x mb-3 text-slate-300 d-block"}),e.createElement("span",{className:"fw-medium"},"Belum ada data wilayah DPW tercatat.")))))))),e.createElement("div",{className:"d-flex justify-content-center justify-content-md-end mt-4 mb-3"},e.createElement(B,{links:t.links,align:"end"}))),e.createElement("style",null,`
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
                    .header-icon-square {
                        width: 52px;
                        height: 52px;
                        border-radius: 14px;
                        background: linear-gradient(135deg, #065f46 0%, #059669 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                    }
                    .badge-level-pill {
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1px solid #a7f3d0;
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
                    .btn-add-wilayah {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        color: #ffffff;
                        border: none;
                        transition: all 0.2s ease;
                    }
                    .btn-add-wilayah:hover {
                        background: linear-gradient(135deg, #047857 0%, #064e3b 100%);
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

                    /* Portal Card View */
                    .portal-wilayah-card {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #059669 !important;
                        transition: all 0.25s ease;
                        background-color: #ffffff;
                    }
                    .portal-wilayah-card:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08) !important;
                        border-color: #94a3b8 !important;
                    }
                    .portal-card-header {
                        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                        border-bottom: 1.5px solid #e2e8f0;
                    }
                    .dpw-badge-icon {
                        width: 38px;
                        height: 38px;
                        border-radius: 10px;
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 15px;
                        flex-shrink: 0;
                    }
                    .badge-active-pill {
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1px solid #a7f3d0;
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

                    /* Ketua Box */
                    .ketua-info-box {
                        background-color: #f0fdf4;
                        border: 1.5px solid #bbf7d0;
                    }
                    .ketua-avatar-circle {
                        width: 38px;
                        height: 38px;
                        border-radius: 50%;
                        background-color: #dcfce7;
                        border: 1.5px solid #86efac;
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
                    .table-dpw-icon {
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
