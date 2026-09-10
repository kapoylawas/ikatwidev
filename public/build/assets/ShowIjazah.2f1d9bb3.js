import{u as c,R as e,H as m,L as r}from"./app.ca209ed9.js";import{L as i}from"./Account.1954b82f.js";import{D as f}from"./Delete.06b3467e.js";import"./Dropdown.47a5bb9d.js";import"./sweetalert2.all.e56bc344.js";function g(){var l,n,s,o;const{users:t}=c().props;return e.createElement(i,null,e.createElement(m,{title:"Detail Dokumen Ijazah - IKATWI"}),e.createElement("div",{className:"container-fluid py-4 show-doc-container"},e.createElement("div",{className:"header-banner-box p-4 rounded-4 mb-4 shadow-sm"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"header-icon-wrap me-3 shadow"},e.createElement("i",{className:"fa fa-graduation-cap fa-2x text-white"})),e.createElement("div",null,e.createElement("h4",{className:"mb-0 fw-bold header-main-title"},"Dokumen Ijazah Pendidikan"),e.createElement("p",{className:"header-subtitle mb-0 mt-1"},"Daftar riwayat ijazah pendidikan tinggi dan transkrip nilai terapis wicara."))),e.createElement("div",{className:"d-flex gap-2 flex-wrap flex-shrink-0"},e.createElement(r,{href:`/account/documents/createIjazah/${t.id}`,className:"btn btn-add-doc rounded-pill px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-plus-circle me-1.5"}),e.createElement("span",null,"Tambah Ijazah Baru")),e.createElement(r,{href:"/account/documents",className:"btn btn-back-doc rounded-pill px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-arrow-left me-1.5 text-primary"}),e.createElement("span",null,"Kembali ke Dokumen"))))),e.createElement("div",{className:"card main-table-card rounded-4 shadow-sm overflow-hidden mb-4"},e.createElement("div",{className:"card-header table-card-header py-3 px-4 d-flex justify-content-between align-items-center"},e.createElement("div",{className:"d-flex align-items-center gap-3"},e.createElement("span",{className:"card-icon-pill bg-blue-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-university text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-bold table-header-title"},"Daftar Berkas Ijazah & Transkrip"),e.createElement("span",{className:"table-header-sub"},"Pendidikan Terakhir Anggota IKATWI"))),e.createElement("span",{className:"badge-total-pill shadow-sm"},"Total: ",e.createElement("strong",null,((n=(l=t.dokumen_ijazah)==null?void 0:l.data)==null?void 0:n.length)||0)," Data")),e.createElement("div",{className:"card-body p-0"},((o=(s=t.dokumen_ijazah)==null?void 0:s.data)==null?void 0:o.length)>0?e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-hover align-middle mb-0 custom-doc-table"},e.createElement("thead",{className:"custom-thead"},e.createElement("tr",null,e.createElement("th",{className:"ps-4 text-center",style:{width:"5%"}},"NO"),e.createElement("th",{style:{width:"12%"}},"JENJANG"),e.createElement("th",{style:{width:"18%"}},"UNIVERSITAS"),e.createElement("th",{style:{width:"15%"}},"JURUSAN"),e.createElement("th",{className:"text-center",style:{width:"8%"}},"AKREDITASI"),e.createElement("th",{className:"text-center",style:{width:"8%"}},"LULUS"),e.createElement("th",{style:{width:"12%"}},"NO. IJAZAH"),e.createElement("th",{className:"text-center",style:{width:"6%"}},"IPK"),e.createElement("th",{className:"text-center",style:{width:"8%"}},"TRANSKRIP"),e.createElement("th",{className:"text-center",style:{width:"8%"}},"IJAZAH"),e.createElement("th",{className:"pe-4 text-end",style:{width:"8%"}},"AKSI"))),e.createElement("tbody",{className:"custom-tbody"},t.dokumen_ijazah.data.map((a,d)=>e.createElement("tr",{key:a.id||d,className:"doc-row"},e.createElement("td",{className:"ps-4 text-center"},e.createElement("span",{className:"table-num-pill"},d+1+(t.dokumen_ijazah.current_page-1)*t.dokumen_ijazah.per_page)),e.createElement("td",null,e.createElement("span",{className:"badge-jenjang shadow-sm"},a.ijazah_akhir||"-")),e.createElement("td",{className:"fw-bold text-slate-900"},a.name_universitas||"-"),e.createElement("td",{className:"text-slate-700"},a.jurusan||"-"),e.createElement("td",{className:"text-center"},e.createElement("span",{className:"badge-akreditasi shadow-sm"},a.akredetasi||"-")),e.createElement("td",{className:"text-center font-monospace fw-bold text-slate-700"},a.tahun_lulus||"-"),e.createElement("td",{className:"font-monospace text-slate-800 small"},a.no_ijazah||"-"),e.createElement("td",{className:"text-center fw-bold text-primary"},a.ipk||"-"),e.createElement("td",{className:"text-center"},a.transkip?e.createElement("a",{className:"btn-doc-pdf shadow-sm",target:"_blank",rel:"noopener noreferrer",href:a.transkip},e.createElement("i",{className:"fa fa-file-pdf me-1"}),e.createElement("span",null,"PDF")):e.createElement("span",{className:"text-slate-400 small"},"-")),e.createElement("td",{className:"text-center"},a.ijazah?e.createElement("a",{className:"btn-doc-pdf shadow-sm",target:"_blank",rel:"noopener noreferrer",href:a.ijazah},e.createElement("i",{className:"fa fa-file-pdf me-1"}),e.createElement("span",null,"PDF")):e.createElement("span",{className:"text-slate-400 small"},"-")),e.createElement("td",{className:"pe-4 text-end"},e.createElement(f,{URL:"/account/documents/hapus_ijazah",id:a.id}))))))):e.createElement("div",{className:"p-5 text-center empty-state-box"},e.createElement("div",{className:"empty-icon-wrap mb-3 shadow"},e.createElement("i",{className:"fa fa-graduation-cap text-primary"})),e.createElement("h5",{className:"fw-bold text-slate-900 mb-2"},"Belum Ada Dokumen Ijazah"),e.createElement("p",{className:"text-slate-600 small mb-4"},"Silakan tambahkan data dan berkas ijazah kelulusan Anda untuk melengkapi arsip keanggotaan."),e.createElement(r,{href:`/account/documents/createIjazah/${t.id}`,className:"btn btn-add-doc rounded-pill px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-plus-circle me-1.5"}),e.createElement("span",null,"Tambah Ijazah Sekarang")))))),e.createElement("style",null,`
                .show-doc-container {
                    color: #1e293b;
                }

                /* Header Banner */
                .header-banner-box {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-left: 6px solid #2563eb !important;
                    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
                }
                .header-icon-wrap {
                    width: 54px;
                    height: 54px;
                    border-radius: 14px;
                    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
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
                .btn-add-doc {
                    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                    color: #ffffff;
                    border: none;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-add-doc:hover {
                    background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
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
                    border-top: 4px solid #2563eb !important;
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
                .bg-blue-icon-pill {
                    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
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
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    border: 1.5px solid #bfdbfe;
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
                .badge-jenjang {
                    background-color: #eff6ff;
                    color: #1e40af;
                    border: 1px solid #bfdbfe;
                    border-radius: 6px;
                    padding: 3px 8px;
                    font-weight: 700;
                    font-size: 0.78rem;
                }
                .badge-akreditasi {
                    background-color: #f0fdf4;
                    color: #166534;
                    border: 1px solid #bbf7d0;
                    border-radius: 6px;
                    padding: 3px 8px;
                    font-weight: 700;
                    font-size: 0.76rem;
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
                    background-color: #eff6ff;
                    border: 2px solid #bfdbfe;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 32px;
                }
            `))}export{g as default};
