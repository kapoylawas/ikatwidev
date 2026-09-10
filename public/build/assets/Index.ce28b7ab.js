import{u as s,R as e,H as o,L as t}from"./app.495843f8.js";import{L as d}from"./Account.1665c6b2.js";import"./Dropdown.30a41e0a.js";function b(){var r,n;const{biodata:a,statusAnggota:l}=s().props;return e.createElement(d,null,e.createElement(o,{title:"Berkas Dokumen Profesi - IKATWI"}),e.createElement("div",{className:"container-fluid py-4 documents-page-container"},e.createElement("div",{className:"header-banner-box p-4 rounded-4 mb-4 shadow-sm"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"header-icon-wrap me-3 shadow"},e.createElement("i",{className:"fa fa-folder-open fa-2x text-white"})),e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap"},e.createElement("h4",{className:"mb-0 fw-bold header-main-title"},"Berkas & Dokumen Profesi"),e.createElement("span",{className:"badge-status-pill shadow-sm"},e.createElement("i",{className:"fa fa-user-check me-1 text-emerald-600"}),(a==null?void 0:a.status_anggota)||(l==null?void 0:l.status_anggota)||"Anggota Biasa")),e.createElement("p",{className:"header-subtitle mb-0 mt-1"},"Kelola kelengkapan berkas arsip legalitas profesi: Ijazah Pendidikan, Surat Izin Praktik (SIP), STR, dan Pakta Integritas."))),(a==null?void 0:a.no_anggota)&&e.createElement("div",{className:"badge-no-anggota-banner shadow-sm"},e.createElement("i",{className:"fa fa-id-badge text-primary me-2"}),e.createElement("span",null,"No. Anggota:")," ",e.createElement("strong",null,a.no_anggota)))),e.createElement("div",{className:"card member-strip-card rounded-4 shadow-sm mb-4"},e.createElement("div",{className:"card-body p-3 p-md-4"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"},e.createElement("div",{className:"d-flex align-items-center gap-3"},e.createElement("div",{className:"position-relative"},e.createElement("img",{src:(a==null?void 0:a.image)||"/assets/images/user.png",alt:a==null?void 0:a.name,className:"rounded-circle member-avatar-img shadow-sm",onError:c=>{c.target.onerror=null,c.target.src="/assets/images/user.png"}}),e.createElement("span",{className:"position-absolute bottom-0 end-0 bg-success border border-white rounded-circle avatar-online-dot"})),e.createElement("div",null,e.createElement("h5",{className:"mb-1 fw-bold text-slate-900",style:{letterSpacing:"-0.01em"}},a==null?void 0:a.name),e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap text-slate-600 small"},e.createElement("span",null,e.createElement("i",{className:"fa fa-envelope text-slate-400 me-1"}),a==null?void 0:a.email),(a==null?void 0:a.nik)&&e.createElement(e.Fragment,null,e.createElement("span",{className:"text-slate-300"},"\u2022"),e.createElement("span",{className:"font-monospace"},e.createElement("i",{className:"fa fa-fingerprint text-slate-400 me-1"}),"NIK: ",a.nik))))),e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap"},((r=a==null?void 0:a.province)==null?void 0:r.name)&&e.createElement("span",{className:"badge-region-dpw shadow-sm"},e.createElement("i",{className:"fa fa-landmark me-1 text-emerald-600"}),a.province.name),((n=a==null?void 0:a.city)==null?void 0:n.name)&&e.createElement("span",{className:"badge-region-dpc shadow-sm"},e.createElement("i",{className:"fa fa-city me-1 text-indigo-600"}),a.city.name))))),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-sm-6 col-xl-3"},e.createElement("div",{className:"card h-100 doc-grid-card doc-card-blue shadow-sm rounded-4"},e.createElement("div",{className:"card-body p-4 d-flex flex-column justify-content-between"},e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center justify-content-between mb-3"},e.createElement("div",{className:"doc-icon-wrap icon-wrap-blue shadow-sm"},e.createElement("i",{className:"fa fa-graduation-cap text-white"})),e.createElement("span",{className:"doc-type-pill pill-blue"},"Pendidikan")),e.createElement("h5",{className:"fw-bold text-slate-900 mb-1"},"Ijazah Terakhir"),e.createElement("p",{className:"text-slate-600 small mb-4 doc-desc"},"Arsip ijazah kelulusan dan riwayat pendidikan tinggi terapis wicara.")),e.createElement(t,{href:`/account/documents/showIjazah/${a.id}`,className:"btn btn-doc-action btn-action-blue shadow-sm"},e.createElement("span",null,"Lihat & Kelola Ijazah"),e.createElement("i",{className:"fa fa-arrow-right ms-1.5"}))))),e.createElement("div",{className:"col-12 col-sm-6 col-xl-3"},e.createElement("div",{className:"card h-100 doc-grid-card doc-card-teal shadow-sm rounded-4"},e.createElement("div",{className:"card-body p-4 d-flex flex-column justify-content-between"},e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center justify-content-between mb-3"},e.createElement("div",{className:"doc-icon-wrap icon-wrap-teal shadow-sm"},e.createElement("i",{className:"fa fa-file-medical text-white"})),e.createElement("span",{className:"doc-type-pill pill-teal"},"Izin Praktik")),e.createElement("h5",{className:"fw-bold text-slate-900 mb-1"},"Surat Izin Praktik (SIP)"),e.createElement("p",{className:"text-slate-600 small mb-4 doc-desc"},"Surat izin operasional praktik pelayanan terapi wicara di faskes.")),e.createElement(t,{href:`/account/documents/showsip/${a.id}`,className:"btn btn-doc-action btn-action-teal shadow-sm"},e.createElement("span",null,"Lihat & Kelola SIP"),e.createElement("i",{className:"fa fa-arrow-right ms-1.5"}))))),e.createElement("div",{className:"col-12 col-sm-6 col-xl-3"},e.createElement("div",{className:"card h-100 doc-grid-card doc-card-emerald shadow-sm rounded-4"},e.createElement("div",{className:"card-body p-4 d-flex flex-column justify-content-between"},e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center justify-content-between mb-3"},e.createElement("div",{className:"doc-icon-wrap icon-wrap-emerald shadow-sm"},e.createElement("i",{className:"fa fa-certificate text-white"})),e.createElement("span",{className:"doc-type-pill pill-emerald"},"Registrasi")),e.createElement("h5",{className:"fw-bold text-slate-900 mb-1"},"Surat Tanda Registrasi"),e.createElement("p",{className:"text-slate-600 small mb-4 doc-desc"},"Bukti tanda registrasi tenaga kesehatan terapis wicara resmi.")),e.createElement(t,{href:`/account/documents/showstr/${a.id}`,className:"btn btn-doc-action btn-action-emerald shadow-sm"},e.createElement("span",null,"Lihat & Kelola STR"),e.createElement("i",{className:"fa fa-arrow-right ms-1.5"}))))),e.createElement("div",{className:"col-12 col-sm-6 col-xl-3"},e.createElement("div",{className:"card h-100 doc-grid-card doc-card-rose shadow-sm rounded-4"},e.createElement("div",{className:"card-body p-4 d-flex flex-column justify-content-between"},e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center justify-content-between mb-3"},e.createElement("div",{className:"doc-icon-wrap icon-wrap-rose shadow-sm"},e.createElement("i",{className:"fa fa-file-signature text-white"})),e.createElement("span",{className:"doc-type-pill pill-rose"},"Format PDF")),e.createElement("h5",{className:"fw-bold text-slate-900 mb-1"},"Pakta Integritas"),e.createElement("p",{className:"text-slate-600 small mb-4 doc-desc"},"Surat pernyataan pakta integritas keanggotaan resmi IKATWI.")),a!=null&&a.filepakta?e.createElement("a",{href:a.filepakta,target:"_blank",rel:"noopener noreferrer",className:"btn btn-doc-action btn-action-rose shadow-sm"},e.createElement("span",null,"Buka Dokumen PDF"),e.createElement("i",{className:"fa fa-external-link-alt ms-1.5",style:{fontSize:"0.75rem"}})):e.createElement("button",{disabled:!0,className:"btn btn-doc-action btn-action-disabled"},e.createElement("i",{className:"fa fa-info-circle me-1"})," Belum Diunggah"))))),e.createElement("div",{className:"card main-table-card rounded-4 shadow-sm overflow-hidden mb-4"},e.createElement("div",{className:"card-header table-card-header py-3 px-4 d-flex justify-content-between align-items-center"},e.createElement("div",{className:"d-flex align-items-center gap-3"},e.createElement("span",{className:"card-icon-pill bg-emerald-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-list-check text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-bold table-header-title"},"Daftar Ringkasan Dokumen Anggota"),e.createElement("span",{className:"table-header-sub"},"Status kelengkapan dan tautan berkas resmi"))),e.createElement("span",{className:"badge-total-pill shadow-sm"},e.createElement("strong",null,"4")," Dokumen Pokok")),e.createElement("div",{className:"card-body p-0"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-hover align-middle mb-0 custom-doc-table"},e.createElement("thead",{className:"custom-thead"},e.createElement("tr",null,e.createElement("th",{className:"ps-4",style:{width:"5%",textAlign:"center"}},"NO"),e.createElement("th",{style:{width:"30%"}},"NAMA DOKUMEN"),e.createElement("th",{style:{width:"25%"}},"DESKRIPSI DOKUMEN"),e.createElement("th",{className:"text-center",style:{width:"20%"}},"TIPE / FORMAT"),e.createElement("th",{className:"pe-4 text-end",style:{width:"20%"}},"AKSI"))),e.createElement("tbody",{className:"custom-tbody"},e.createElement("tr",{className:"doc-row"},e.createElement("td",{className:"ps-4 text-center"},e.createElement("span",{className:"table-num-pill"},"1")),e.createElement("td",null,e.createElement("div",{className:"d-flex align-items-center gap-2.5"},e.createElement("div",{className:"table-doc-icon icon-blue"},e.createElement("i",{className:"fa fa-graduation-cap"})),e.createElement("div",null,e.createElement("div",{className:"fw-bold text-slate-900"},"Ijazah Pendidikan"),e.createElement("small",{className:"text-slate-600"},"Ijazah Terakhir Kelulusan Profesi")))),e.createElement("td",{className:"text-slate-600 small"},"Riwayat perguruan tinggi, jurusan, akreditasi & tahun kelulusan"),e.createElement("td",{className:"text-center"},e.createElement("span",{className:"badge-doc-type bg-blue-subtle text-primary border border-blue-subtle"},e.createElement("i",{className:"fa fa-file-alt me-1"})," Data & Scan PDF")),e.createElement("td",{className:"pe-4 text-end"},e.createElement(t,{href:`/account/documents/showIjazah/${a.id}`,className:"btn btn-sm btn-action-table btn-table-blue shadow-sm"},e.createElement("i",{className:"fa fa-eye me-1.5"}),e.createElement("span",null,"Lihat Detail")))),e.createElement("tr",{className:"doc-row"},e.createElement("td",{className:"ps-4 text-center"},e.createElement("span",{className:"table-num-pill"},"2")),e.createElement("td",null,e.createElement("div",{className:"d-flex align-items-center gap-2.5"},e.createElement("div",{className:"table-doc-icon icon-teal"},e.createElement("i",{className:"fa fa-file-medical"})),e.createElement("div",null,e.createElement("div",{className:"fw-bold text-slate-900"},"Surat Izin Praktik (SIP)"),e.createElement("small",{className:"text-slate-600"},"SIP Pelayanan Terapi Wicara")))),e.createElement("td",{className:"text-slate-600 small"},"Nomor SIP, tempat praktik faskes, masa berlaku & lampiran"),e.createElement("td",{className:"text-center"},e.createElement("span",{className:"badge-doc-type bg-teal-subtle text-teal border border-teal-subtle"},e.createElement("i",{className:"fa fa-file-medical me-1"})," Data & Scan PDF")),e.createElement("td",{className:"pe-4 text-end"},e.createElement(t,{href:`/account/documents/showsip/${a.id}`,className:"btn btn-sm btn-action-table btn-table-teal shadow-sm"},e.createElement("i",{className:"fa fa-eye me-1.5"}),e.createElement("span",null,"Lihat Detail")))),e.createElement("tr",{className:"doc-row"},e.createElement("td",{className:"ps-4 text-center"},e.createElement("span",{className:"table-num-pill"},"3")),e.createElement("td",null,e.createElement("div",{className:"d-flex align-items-center gap-2.5"},e.createElement("div",{className:"table-doc-icon icon-emerald"},e.createElement("i",{className:"fa fa-certificate"})),e.createElement("div",null,e.createElement("div",{className:"fw-bold text-slate-900"},"Surat Tanda Registrasi (STR)"),e.createElement("small",{className:"text-slate-600"},"STR Nakes Terapis Wicara")))),e.createElement("td",{className:"text-slate-600 small"},"Nomor registrasi resmi, masa berlaku STR & lampiran berkas"),e.createElement("td",{className:"text-center"},e.createElement("span",{className:"badge-doc-type bg-emerald-subtle text-success border border-emerald-subtle"},e.createElement("i",{className:"fa fa-certificate me-1"})," Data & Scan PDF")),e.createElement("td",{className:"pe-4 text-end"},e.createElement(t,{href:`/account/documents/showstr/${a.id}`,className:"btn btn-sm btn-action-table btn-table-emerald shadow-sm"},e.createElement("i",{className:"fa fa-eye me-1.5"}),e.createElement("span",null,"Lihat Detail")))),e.createElement("tr",{className:"doc-row"},e.createElement("td",{className:"ps-4 text-center"},e.createElement("span",{className:"table-num-pill"},"4")),e.createElement("td",null,e.createElement("div",{className:"d-flex align-items-center gap-2.5"},e.createElement("div",{className:"table-doc-icon icon-rose"},e.createElement("i",{className:"fa fa-file-signature"})),e.createElement("div",null,e.createElement("div",{className:"fw-bold text-slate-900"},"Pakta Integritas"),e.createElement("small",{className:"text-slate-600"},"Surat Pakta Keanggotaan IKATWI")))),e.createElement("td",{className:"text-slate-600 small"},"Surat pernyataan komitmen pakta integritas yang ditandatangani"),e.createElement("td",{className:"text-center"},e.createElement("span",{className:"badge-doc-type bg-rose-subtle text-danger border border-rose-subtle"},e.createElement("i",{className:"fa fa-file-pdf me-1"})," Dokumen PDF")),e.createElement("td",{className:"pe-4 text-end"},a!=null&&a.filepakta?e.createElement("a",{href:a.filepakta,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-action-table btn-table-rose shadow-sm"},e.createElement("i",{className:"fa fa-file-pdf me-1.5"}),e.createElement("span",null,"Buka PDF")):e.createElement("span",{className:"badge-unloaded small"},"Belum Upload"))))))))),e.createElement("style",null,`
                .documents-page-container {
                    color: #1e293b;
                }

                /* Header Banner */
                .header-banner-box {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-left: 6px solid #059669 !important;
                    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
                }
                .header-icon-wrap {
                    width: 54px;
                    height: 54px;
                    border-radius: 14px;
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
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
                .badge-status-pill {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
                    padding: 4px 12px;
                    border-radius: 9999px;
                    font-size: 0.76rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-no-anggota-banner {
                    background-color: #f8fafc;
                    border: 1.5px solid #cbd5e1;
                    color: #0f172a;
                    padding: 8px 18px;
                    border-radius: 12px;
                    font-size: 0.88rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                }

                /* Member Profile Strip */
                .member-strip-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                }
                .member-avatar-img {
                    width: 48px;
                    height: 48px;
                    object-fit: cover;
                    border: 2px solid #cbd5e1;
                }
                .avatar-online-dot {
                    width: 13px;
                    height: 13px;
                }
                .badge-region-dpw {
                    background-color: #ecfdf5;
                    color: #065f46;
                    border: 1px solid #a7f3d0;
                    border-radius: 8px;
                    padding: 6px 12px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-region-dpc {
                    background-color: #eef2ff;
                    color: #3730a3;
                    border: 1px solid #c7d2fe;
                    border-radius: 8px;
                    padding: 6px 12px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }

                /* Document Grid Cards */
                .doc-grid-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    transition: all 0.22s ease;
                }
                .doc-grid-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 24px -4px rgba(15, 23, 42, 0.12) !important;
                }
                .doc-card-blue {
                    border-top: 4px solid #2563eb !important;
                }
                .doc-card-teal {
                    border-top: 4px solid #0891b2 !important;
                }
                .doc-card-emerald {
                    border-top: 4px solid #059669 !important;
                }
                .doc-card-rose {
                    border-top: 4px solid #e11d48 !important;
                }
                .doc-icon-wrap {
                    width: 46px;
                    height: 46px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                }
                .icon-wrap-blue {
                    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                }
                .icon-wrap-teal {
                    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
                }
                .icon-wrap-emerald {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                }
                .icon-wrap-rose {
                    background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%);
                }
                .doc-type-pill {
                    font-size: 0.72rem;
                    font-weight: 700;
                    padding: 3px 10px;
                    border-radius: 9999px;
                    text-transform: uppercase;
                    letter-spacing: 0.03em;
                }
                .pill-blue {
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    border: 1px solid #bfdbfe;
                }
                .pill-teal {
                    background-color: #ecfeff;
                    color: #0e7490;
                    border: 1px solid #a5f3fc;
                }
                .pill-emerald {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1px solid #a7f3d0;
                }
                .pill-rose {
                    background-color: #fff1f2;
                    color: #be123c;
                    border: 1px solid #fecdd3;
                }
                .doc-desc {
                    line-height: 1.45;
                    min-height: 38px;
                }
                .btn-doc-action {
                    width: 100%;
                    border-radius: 10px;
                    padding: 9px 14px;
                    font-weight: 700;
                    font-size: 0.84rem;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .btn-action-blue {
                    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                    color: #ffffff;
                }
                .btn-action-blue:hover {
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
                }
                .btn-action-teal {
                    background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
                    color: #ffffff;
                }
                .btn-action-teal:hover {
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(8, 145, 178, 0.35);
                }
                .btn-action-emerald {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                }
                .btn-action-emerald:hover {
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(5, 150, 105, 0.35);
                }
                .btn-action-rose {
                    background: linear-gradient(135deg, #e11d48 0%, #be123c 100%);
                    color: #ffffff;
                }
                .btn-action-rose:hover {
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(225, 29, 72, 0.35);
                }
                .btn-action-disabled {
                    background-color: #f1f5f9;
                    border: 1.5px solid #cbd5e1;
                    color: #94a3b8;
                    cursor: not-allowed;
                }

                /* Main Table Card */
                .main-table-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-top: 4px solid #059669 !important;
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
                .bg-emerald-icon-pill {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
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
                    font-size: 0.76rem;
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
                    min-width: 24px;
                }
                .table-doc-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    flex-shrink: 0;
                }
                .table-doc-icon.icon-blue {
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    border: 1px solid #bfdbfe;
                }
                .table-doc-icon.icon-teal {
                    background-color: #ecfeff;
                    color: #0e7490;
                    border: 1px solid #a5f3fc;
                }
                .table-doc-icon.icon-emerald {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1px solid #a7f3d0;
                }
                .table-doc-icon.icon-rose {
                    background-color: #fff1f2;
                    color: #be123c;
                    border: 1px solid #fecdd3;
                }
                .badge-doc-type {
                    padding: 4px 10px;
                    border-radius: 6px;
                    font-size: 0.76rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .bg-blue-subtle { background-color: #eff6ff; }
                .border-blue-subtle { border-color: #bfdbfe !important; }
                .bg-teal-subtle { background-color: #ecfeff; }
                .text-teal { color: #0891b2 !important; }
                .border-teal-subtle { border-color: #a5f3fc !important; }
                .bg-emerald-subtle { background-color: #ecfdf5; }
                .border-emerald-subtle { border-color: #a7f3d0 !important; }
                .bg-rose-subtle { background-color: #fff1f2; }
                .border-rose-subtle { border-color: #fecdd3 !important; }

                .btn-action-table {
                    border-radius: 8px;
                    padding: 6px 14px;
                    font-weight: 700;
                    font-size: 0.8rem;
                    display: inline-flex;
                    align-items: center;
                    border: none;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .btn-table-blue {
                    background-color: #eff6ff;
                    border: 1.5px solid #93c5fd;
                    color: #1d4ed8;
                }
                .btn-table-blue:hover {
                    background-color: #2563eb;
                    color: #ffffff;
                    transform: translateY(-1px);
                }
                .btn-table-teal {
                    background-color: #ecfeff;
                    border: 1.5px solid #67e8f9;
                    color: #0e7490;
                }
                .btn-table-teal:hover {
                    background-color: #0891b2;
                    color: #ffffff;
                    transform: translateY(-1px);
                }
                .btn-table-emerald {
                    background-color: #ecfdf5;
                    border: 1.5px solid #a7f3d0;
                    color: #047857;
                }
                .btn-table-emerald:hover {
                    background-color: #059669;
                    color: #ffffff;
                    transform: translateY(-1px);
                }
                .btn-table-rose {
                    background-color: #fff1f2;
                    border: 1.5px solid #fecdd3;
                    color: #be123c;
                }
                .btn-table-rose:hover {
                    background-color: #e11d48;
                    color: #ffffff;
                    transform: translateY(-1px);
                }
                .badge-unloaded {
                    background-color: #f1f5f9;
                    color: #94a3b8;
                    border: 1px solid #cbd5e1;
                    border-radius: 6px;
                    padding: 4px 10px;
                    font-size: 0.76rem;
                    font-weight: 600;
                    display: inline-block;
                }
            `))}export{b as default};
