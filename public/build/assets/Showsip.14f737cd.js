import{u as m,R as e,H as f,L as r}from"./app.20c9578f.js";import{L as p}from"./Account.153ed520.js";import{D as b}from"./Delete.714fc501.js";import"./Dropdown.82a09e0f.js";import"./sweetalert2.all.70431730.js";function w(){var l,n,c,s;const{users:t}=m().props,d=new Date;return e.createElement(p,null,e.createElement(f,{title:"Detail Dokumen SIP - IKATWI"}),e.createElement("div",{className:"container-fluid py-4 show-doc-container"},e.createElement("div",{className:"header-banner-box p-4 rounded-4 mb-4 shadow-sm"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"header-icon-wrap me-3 shadow"},e.createElement("i",{className:"fa fa-file-medical fa-2x text-white"})),e.createElement("div",null,e.createElement("h4",{className:"mb-0 fw-bold header-main-title"},"Dokumen Surat Izin Praktik (SIP)"),e.createElement("p",{className:"header-subtitle mb-0 mt-1"},"Daftar izin operasional praktik pelayanan terapis wicara di fasilitas kesehatan."))),e.createElement("div",{className:"d-flex gap-2 flex-wrap flex-shrink-0"},e.createElement(r,{href:`/account/documents/createsip/${t.id}`,className:"btn btn-add-doc-teal rounded-pill px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-plus-circle me-1.5"}),e.createElement("span",null,"Tambah SIP Baru")),e.createElement(r,{href:"/account/documents",className:"btn btn-back-doc rounded-pill px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-arrow-left me-1.5 text-primary"}),e.createElement("span",null,"Kembali ke Dokumen"))))),e.createElement("div",{className:"card main-table-card rounded-4 shadow-sm overflow-hidden mb-4"},e.createElement("div",{className:"card-header table-card-header py-3 px-4 d-flex justify-content-between align-items-center"},e.createElement("div",{className:"d-flex align-items-center gap-3"},e.createElement("span",{className:"card-icon-pill bg-teal-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-hospital-user text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-bold table-header-title"},"Daftar Surat Izin Praktik (SIP)"),e.createElement("span",{className:"table-header-sub"},"Arsip Izin Praktik Terdaftar"))),e.createElement("span",{className:"badge-total-pill shadow-sm"},"Total: ",e.createElement("strong",null,((n=(l=t.surat_sip)==null?void 0:l.data)==null?void 0:n.length)||0)," Data")),e.createElement("div",{className:"card-body p-0"},((s=(c=t.surat_sip)==null?void 0:c.data)==null?void 0:s.length)>0?e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-hover align-middle mb-0 custom-doc-table"},e.createElement("thead",{className:"custom-thead"},e.createElement("tr",null,e.createElement("th",{className:"ps-4 text-center",style:{width:"5%"}},"NO"),e.createElement("th",{style:{width:"20%"}},"NO. SIP"),e.createElement("th",{className:"text-center",style:{width:"15%"}},"TGL PENGESAHAN"),e.createElement("th",{className:"text-center",style:{width:"15%"}},"MASA BERLAKU"),e.createElement("th",{style:{width:"20%"}},"KAB/KOTA PENERBIT"),e.createElement("th",{className:"text-center",style:{width:"10%"}},"STATUS"),e.createElement("th",{className:"text-center",style:{width:"8%"}},"BERKAS"),e.createElement("th",{className:"pe-4 text-end",style:{width:"7%"}},"AKSI"))),e.createElement("tbody",{className:"custom-tbody"},t.surat_sip.data.map((a,o)=>{const i=a.date_end?new Date(a.date_end)>=d:!1;return e.createElement("tr",{key:a.id||o,className:"doc-row"},e.createElement("td",{className:"ps-4 text-center"},e.createElement("span",{className:"table-num-pill"},o+1+(t.surat_sip.current_page-1)*t.surat_sip.per_page)),e.createElement("td",null,e.createElement("div",{className:"font-monospace fw-bold text-slate-900"},a.no_sip||"-")),e.createElement("td",{className:"text-center text-slate-700 small"},a.date_start?new Date(a.date_start).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"),e.createElement("td",{className:"text-center text-slate-700 small"},a.date_end?new Date(a.date_end).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"),e.createElement("td",{className:"text-slate-800 fw-semibold"},a.penerbit||"-"),e.createElement("td",{className:"text-center"},i?e.createElement("span",{className:"badge-status-active shadow-sm"},e.createElement("i",{className:"fa fa-check-circle me-1"})," Aktif"):e.createElement("span",{className:"badge-status-expired shadow-sm"},e.createElement("i",{className:"fa fa-times-circle me-1"})," Kedaluwarsa")),e.createElement("td",{className:"text-center"},a.image?e.createElement("a",{className:"btn-doc-pdf shadow-sm",target:"_blank",rel:"noopener noreferrer",href:a.image},e.createElement("i",{className:"fa fa-file-pdf me-1"}),e.createElement("span",null,"PDF")):e.createElement("span",{className:"text-slate-400 small"},"-")),e.createElement("td",{className:"pe-4 text-end"},e.createElement(b,{URL:"/account/documents/hapus_sip",id:a.id})))})))):e.createElement("div",{className:"p-5 text-center empty-state-box"},e.createElement("div",{className:"empty-icon-wrap icon-wrap-teal mb-3 shadow"},e.createElement("i",{className:"fa fa-file-medical text-teal"})),e.createElement("h5",{className:"fw-bold text-slate-900 mb-2"},"Belum Ada Dokumen SIP"),e.createElement("p",{className:"text-slate-600 small mb-4"},"Silakan tambahkan data dan berkas Surat Izin Praktik (SIP) Anda."),e.createElement(r,{href:`/account/documents/createsip/${t.id}`,className:"btn btn-add-doc-teal rounded-pill px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-plus-circle me-1.5"}),e.createElement("span",null,"Tambah SIP Sekarang")))))),e.createElement("style",null,`
                .show-doc-container {
                    color: #1e293b;
                }

                /* Header Banner */
                .header-banner-box {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-left: 6px solid #0891b2 !important;
                    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
                }
                .header-icon-wrap {
                    width: 54px;
                    height: 54px;
                    border-radius: 14px;
                    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 14px rgba(8, 145, 178, 0.35);
                    flex-shrink: 0;
                }
                .header-main-title {
                    color: #0f172a;
                    font-size: 1.35rem;
                    letter-spacing: -0.02em;
                }
                .header-subtitle {
                    color: #475569;
                    font-size: 0.88rem;
                    font-weight: 500;
                }
                .btn-add-doc-teal {
                    background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
                    color: #ffffff;
                    border: none;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-add-doc-teal:hover {
                    background: linear-gradient(135deg, #0e7490 0%, #155e75 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(8, 145, 178, 0.35);
                }
                .btn-back-doc {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    color: #1e293b;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-back-doc:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
                }

                /* Main Table Card */
                .main-table-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-top: 4px solid #0891b2 !important;
                    box-shadow: 0 6px 20px -2px rgba(15, 23, 42, 0.08);
                }
                .table-card-header {
                    background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
                    border-bottom: 1.5px solid #e2e8f0;
                }
                .card-icon-pill {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    flex-shrink: 0;
                }
                .bg-teal-icon-pill {
                    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
                }
                .table-header-title {
                    color: #0f172a;
                    font-size: 1.05rem;
                }
                .table-header-sub {
                    color: #475569;
                    font-size: 0.78rem;
                    font-weight: 600;
                    display: block;
                }
                .badge-total-pill {
                    background-color: #ecfeff;
                    color: #0e7490;
                    border: 1.5px solid #a5f3fc;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    font-size: 0.8rem;
                    font-weight: 700;
                }

                /* Table Styling */
                .custom-doc-table {
                    border-collapse: separate;
                    border-spacing: 0;
                }
                .custom-thead th {
                    background-color: #f1f5f9;
                    color: #1e293b;
                    font-size: 0.74rem;
                    font-weight: 800;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    border-bottom: 2px solid #cbd5e1;
                    padding-top: 14px;
                    padding-bottom: 14px;
                }
                .doc-row td {
                    padding: 16px 12px;
                    border-bottom: 1px solid #e2e8f0;
                    vertical-align: middle;
                    font-size: 0.86rem;
                }
                .doc-row:hover td {
                    background-color: #f8fafc;
                }
                .table-num-pill {
                    display: inline-block;
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    border: 1px solid #bfdbfe;
                    font-weight: 800;
                    font-size: 0.78rem;
                    padding: 3px 8px;
                    border-radius: 6px;
                }
                .badge-status-active {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1px solid #a7f3d0;
                    border-radius: 6px;
                    padding: 4px 10px;
                    font-weight: 700;
                    font-size: 0.76rem;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-status-expired {
                    background-color: #fef2f2;
                    color: #dc2626;
                    border: 1px solid #fecaca;
                    border-radius: 6px;
                    padding: 4px 10px;
                    font-weight: 700;
                    font-size: 0.76rem;
                    display: inline-flex;
                    align-items: center;
                }
                .btn-doc-pdf {
                    display: inline-flex;
                    align-items: center;
                    background-color: #fef2f2;
                    color: #dc2626;
                    border: 1.5px solid #fca5a5;
                    border-radius: 9999px;
                    padding: 4px 10px;
                    font-size: 0.76rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .btn-doc-pdf:hover {
                    background-color: #fee2e2;
                    color: #b91c1c;
                    transform: translateY(-1px);
                }

                /* Empty state */
                .empty-state-box {
                    padding: 60px 20px !important;
                }
                .empty-icon-wrap {
                    width: 72px;
                    height: 72px;
                    border-radius: 20px;
                    background-color: #ecfeff;
                    border: 2px solid #a5f3fc;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 32px;
                }
            `))}export{w as default};
