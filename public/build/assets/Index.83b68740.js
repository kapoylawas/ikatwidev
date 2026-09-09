import{u as m,R as e,H as d,L as s}from"./app.20c9578f.js";import{L as i,h as l}from"./Account.153ed520.js";import{S as f}from"./Search.4983aef1.js";import{P as p}from"./Pagination.36d0e9e8.js";import{D as b}from"./Delete.714fc501.js";import"./Dropdown.82a09e0f.js";import"./sweetalert2.all.70431730.js";function k(){const{kegiatans:t}=m().props,o=(t==null?void 0:t.total)||(t!=null&&t.data?t.data.length:0);return e.createElement(e.Fragment,null,e.createElement(d,null,e.createElement("title",null,"Kelola Agenda Kegiatan - IKATWI")),e.createElement(i,null,e.createElement("div",{className:"container-fluid px-0 py-3"},e.createElement("div",{className:"card border-0 rounded-4 shadow-sm mb-4 bg-white p-4"},e.createElement("div",{className:"d-flex flex-wrap align-items-center justify-content-between gap-3"},e.createElement("div",{className:"d-flex align-items-center gap-3"},e.createElement("div",{className:"kegiatan-icon-square shadow-sm"},e.createElement("i",{className:"fa fa-calendar-alt text-white fs-4"})),e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center gap-2 mb-1"},e.createElement("h4",{className:"fw-extrabold text-slate-900 mb-0"},"Agenda Kegiatan IKATWI"),e.createElement("span",{className:"badge-official-pill"},"Manajemen Acara")),e.createElement("p",{className:"mb-0 text-slate-500 small"},"Kelola jadwal seminar, workshop, dan agenda kegiatan resmi organisasi."))),e.createElement("div",{className:"d-flex align-items-center gap-2"},l(["kegiatan.create"])&&e.createElement(s,{href:"/account/kegiatan/create",className:"btn btn-add-kegiatan rounded-2 px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-plus-circle me-1.5"}),"Tambah Kegiatan")))),e.createElement("div",{className:"card border-0 rounded-4 shadow-sm mb-4 bg-white p-3 p-md-4"},e.createElement("div",{className:"row g-3 align-items-center justify-content-between"},e.createElement("div",{className:"col-12 col-md-7 col-lg-6"},e.createElement(f,{URL:"/account/kegiatan"})),e.createElement("div",{className:"col-12 col-md-5 col-lg-5 d-flex justify-content-md-end align-items-center"},e.createElement("span",{className:"badge-count-pill"},e.createElement("i",{className:"fa fa-calendar-check me-1.5 text-emerald-600"}),"Total ",e.createElement("strong",null,o)," Agenda Tercatat")))),e.createElement("div",{className:"card border-0 rounded-4 shadow-sm bg-white overflow-hidden mb-4 table-card-box"},e.createElement("div",{className:"card-body p-0"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-hover align-middle mb-0"},e.createElement("thead",{className:"table-thead-custom"},e.createElement("tr",null,e.createElement("th",{className:"ps-4 py-3",style:{width:"6%"}},"NO"),e.createElement("th",{className:"py-3",style:{width:"12%"}},"BANNER"),e.createElement("th",{className:"py-3",style:{width:"35%"}},"NAMA KEGIATAN"),e.createElement("th",{className:"py-3",style:{width:"30%"}},"LINK PENDAFTARAN / INFO"),e.createElement("th",{className:"pe-4 py-3 text-end",style:{width:"17%"}},"AKSI"))),e.createElement("tbody",null,(t==null?void 0:t.data)&&t.data.length>0?t.data.map((a,r)=>{const n=a.link&&a.link.trim()!==""?a.link.startsWith("http")?a.link:`https://${a.link}`:null;return e.createElement("tr",{key:r,className:"table-row-custom"},e.createElement("td",{className:"ps-4"},e.createElement("span",{className:"row-num-pill"},++r+(t.current_page-1)*t.per_page)),e.createElement("td",null,e.createElement("img",{src:a.image,alt:a.name,className:"rounded-3 object-fit-cover shadow-sm border",style:{width:"70px",height:"45px"},onError:c=>{c.target.onerror=null,c.target.src="/assets/images/logo.png"}})),e.createElement("td",null,e.createElement("strong",{className:"text-slate-900 d-block fs-6"},a.name),e.createElement("span",{className:"text-slate-400 small",style:{fontSize:"0.74rem"}},"ID: EVT-",a.id)),e.createElement("td",null,n?e.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"text-primary small fw-semibold text-truncate d-inline-flex align-items-center gap-1.5 text-decoration-none",style:{maxWidth:"280px"}},e.createElement("i",{className:"fa fa-arrow-up-right-from-square"}),e.createElement("span",{className:"text-truncate"},a.link)):e.createElement("span",{className:"text-slate-400 small fst-italic"},"Tidak ada tautan")),e.createElement("td",{className:"text-end pe-4"},e.createElement("div",{className:"d-flex justify-content-end gap-1.5"},l(["kegiatan.edit"])&&e.createElement(s,{href:`/account/kegiatan/${a.id}/edit`,className:"btn btn-sm btn-edit-action rounded-circle d-flex align-items-center justify-content-center",style:{width:"32px",height:"32px"},title:"Edit Agenda"},e.createElement("i",{className:"fa fa-pencil-alt"})),l(["kegiatan.delete"])&&e.createElement(b,{URL:"/account/kegiatan",id:a.id}))))}):e.createElement("tr",null,e.createElement("td",{colSpan:"5",className:"text-center py-5 text-secondary"},e.createElement("i",{className:"fa fa-calendar-times fa-3x mb-3 text-slate-300 d-block"}),e.createElement("h6",{className:"fw-bold text-slate-700 mb-1"},"Belum Ada Data Agenda Kegiatan"),e.createElement("p",{className:"text-slate-500 small mb-0"},'Klik tombol "Tambah Kegiatan" di atas untuk menambahkan agenda baru.')))))))),(t==null?void 0:t.data)&&t.data.length>0&&e.createElement("div",{className:"d-flex justify-content-center justify-content-md-end mt-4 mb-3"},e.createElement(p,{links:t.links,align:"end"}))),e.createElement("style",null,`
                    .text-slate-900 { color: #0f172a; }
                    .text-slate-700 { color: #334155; }
                    .text-slate-500 { color: #64748b; }
                    .text-slate-400 { color: #94a3b8; }

                    .kegiatan-icon-square {
                        width: 52px;
                        height: 52px;
                        border-radius: 14px;
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                    }

                    .badge-official-pill {
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1px solid #a7f3d0;
                        padding: 3px 10px;
                        border-radius: 6px;
                        font-weight: 700;
                        font-size: 0.74rem;
                    }

                    .btn-add-kegiatan {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        color: #ffffff;
                        border: none;
                        transition: all 0.2s ease;
                    }
                    .btn-add-kegiatan:hover {
                        background: linear-gradient(135deg, #047857 0%, #064e3b 100%);
                        color: #ffffff;
                        transform: translateY(-1px);
                    }

                    .badge-count-pill {
                        background-color: #f8fafc;
                        color: #334155;
                        border: 1.5px solid #e2e8f0;
                        padding: 6px 14px;
                        border-radius: 6px;
                        font-size: 0.8rem;
                    }

                    .table-card-box {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #059669 !important;
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
                `)))}export{k as default};
