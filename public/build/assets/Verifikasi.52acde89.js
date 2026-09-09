import{u as S,r as d,R as e,H as z,L as o,d as E}from"./app.c60229a1.js";import{L as A,h as m}from"./Account.8f567546.js";import{P as D}from"./Pagination.57b36012.js";import{D as T}from"./Delete.f1d19df4.js";import"./Dropdown.1eafdeeb.js";import"./sweetalert2.all.e8368195.js";function L(){const{users:t,provinces:N,cities:f,filters:r}=S().props,[n,p]=d.exports.useState((r==null?void 0:r.q)||""),[l,b]=d.exports.useState((r==null?void 0:r.province_id)||""),[s,i]=d.exports.useState((r==null?void 0:r.city_id)||""),w=l?(f||[]).filter(a=>String(a.province_id)===String(l)):f||[],k=a=>{const c=a.target.value;b(c),i("")},v=a=>{a.preventDefault(),E.Inertia.get("/account/verifikasi-users",{q:n,province_id:l,city_id:s},{preserveState:!0,replace:!0})},g=()=>{p(""),b(""),i(""),E.Inertia.get("/account/verifikasi-users",{},{preserveState:!0,replace:!0})};return e.createElement(A,null,e.createElement(z,{title:"Verifikasi Anggota Baru - IKATWI"}),e.createElement("div",{className:"container-fluid py-4 verifikasi-page-container"},e.createElement("div",{className:"header-banner-box p-4 rounded-4 mb-4 shadow-sm"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"header-icon-wrap me-3 shadow"},e.createElement("i",{className:"fa fa-user-check fa-2x text-white"})),e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap"},e.createElement("h4",{className:"mb-0 fw-bold header-main-title"},"Verifikasi Anggota Baru"),t.total>0?e.createElement("span",{className:"badge-pending-count shadow-sm"},e.createElement("i",{className:"fa fa-clock me-1"}),t.total," Menunggu Verifikasi"):e.createElement("span",{className:"badge-verified-all shadow-sm"},e.createElement("i",{className:"fa fa-check-circle me-1"}),"Semua Sudah Terverifikasi")),e.createElement("p",{className:"header-subtitle mb-0 mt-1"},"Kelola pendaftaran anggota baru IKATWI, periksa berkas pakta integritas, dan terbitkan Nomor Anggota resmi."))),e.createElement("div",{className:"d-flex gap-2 flex-wrap flex-shrink-0"},e.createElement(o,{href:"/account/users",className:"btn btn-all-users rounded-pill px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-users me-1.5 text-primary"}),e.createElement("span",null,"Semua User Terdaftar"))))),e.createElement("div",{className:"card filter-card rounded-4 shadow-sm mb-4"},e.createElement("div",{className:"card-header filter-card-header py-2.5 px-4 d-flex align-items-center justify-content-between"},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("i",{className:"fa fa-sliders-h text-primary"}),e.createElement("span",{className:"fw-bold small text-uppercase text-slate-800",style:{letterSpacing:"0.05em"}},"Filter & Pencarian Data")),(n||l||s)&&e.createElement("span",{className:"badge-active-filter shadow-sm"},e.createElement("i",{className:"fa fa-filter me-1"})," Filter Aktif")),e.createElement("div",{className:"card-body p-4"},e.createElement("form",{onSubmit:v,className:"row g-3 align-items-end"},e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-search me-1.5 text-primary"})," Cari Anggota"),e.createElement("input",{type:"text",className:"form-control form-control-custom",placeholder:"Ketik Nama, Email, NIK, atau No HP...",value:n,onChange:a=>p(a.target.value)})),e.createElement("div",{className:"col-12 col-sm-6 col-md-3"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-landmark me-1.5 text-emerald-600"})," Filter DPW (Provinsi)"),e.createElement("select",{className:"form-select form-control-custom",value:l,onChange:k},e.createElement("option",{value:""},"Semua Wilayah DPW"),(N||[]).map(a=>e.createElement("option",{key:a.id,value:a.id},a.name)))),e.createElement("div",{className:"col-12 col-sm-6 col-md-3"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-city me-1.5 text-indigo-600"})," Filter DPC (Kota/Kab)"),e.createElement("select",{className:"form-select form-control-custom",value:s,onChange:a=>i(a.target.value)},e.createElement("option",{value:""},"Semua Cabang DPC"),w.map(a=>e.createElement("option",{key:a.id,value:a.id},a.name)))),e.createElement("div",{className:"col-12 col-md-2 d-flex gap-2"},e.createElement("button",{type:"submit",className:"btn btn-filter-action flex-fill d-inline-flex align-items-center justify-content-center gap-2 shadow-sm"},e.createElement("i",{className:"fa fa-filter"}),e.createElement("span",null,"Terapkan")),(n||l||s)&&e.createElement("button",{type:"button",onClick:g,className:"btn btn-reset-action d-inline-flex align-items-center justify-content-center shadow-sm",title:"Reset Filter"},e.createElement("i",{className:"fa fa-undo"})))))),e.createElement("div",{className:"card main-table-card rounded-4 shadow-sm overflow-hidden mb-4"},e.createElement("div",{className:"card-header table-card-header py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2"},e.createElement("div",{className:"d-flex align-items-center gap-3"},e.createElement("span",{className:"card-icon-pill bg-emerald-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-user-clock text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-bold table-header-title"},"Daftar Pendaftar Baru Menunggu Persetujuan"),e.createElement("span",{className:"table-header-sub"},"Verifikasi berkas pakta integritas & terbitkan nomor anggota resmi IKATWI"))),e.createElement("div",{className:"badge-total-pill shadow-sm"},e.createElement("span",{className:"text-slate-600 fw-normal"},"Total:")," ",e.createElement("strong",null,t.total)," pendaftar")),e.createElement("div",{className:"card-body p-0"},t.data.length>0?e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-hover align-middle mb-0 custom-verif-table"},e.createElement("thead",{className:"custom-thead"},e.createElement("tr",null,e.createElement("th",{className:"ps-4 text-center",style:{width:"5%"}},"NO"),e.createElement("th",{className:"text-center",style:{width:"6%"}},"FOTO"),e.createElement("th",{style:{width:"28%"}},"NAMA & IDENTITAS"),e.createElement("th",{style:{width:"23%"}},"WILAYAH (DPW / DPC)"),e.createElement("th",{className:"text-center",style:{width:"13%"}},"PAKTA INTEGRITAS"),e.createElement("th",{style:{width:"13%"}},"TANGGAL DAFTAR"),e.createElement("th",{className:"pe-4 text-end",style:{width:"12%"}},"AKSI"))),e.createElement("tbody",{className:"custom-tbody"},t.data.map((a,c)=>{var x,u;const y=c+1+(t.current_page-1)*t.per_page;return e.createElement("tr",{key:a.id,className:"verif-row"},e.createElement("td",{className:"ps-4 text-center"},e.createElement("span",{className:"table-num-pill"},y)),e.createElement("td",{className:"text-center"},e.createElement("div",{className:"position-relative d-inline-block"},e.createElement("img",{src:a.image||"/assets/images/user.png",alt:a.name,className:"rounded-circle user-avatar-img shadow-sm",onError:h=>{h.target.onerror=null,h.target.src="/assets/images/user.png"}}),e.createElement("span",{className:"position-absolute bottom-0 end-0 bg-warning border border-white rounded-circle avatar-status-dot",title:"Menunggu Verifikasi"}))),e.createElement("td",null,e.createElement("div",{className:"fw-bold text-slate-900 fs-6",style:{letterSpacing:"-0.01em"}},a.name),a.email&&e.createElement("div",{className:"d-flex align-items-center gap-1.5 mt-1 text-slate-600 small",style:{fontSize:"0.8rem",fontWeight:500}},e.createElement("i",{className:"fa fa-envelope text-slate-400",style:{width:"14px",fontSize:"0.75rem"}}),e.createElement("span",null,a.email)),a.nik&&e.createElement("div",{className:"d-flex align-items-center gap-1.5 mt-1"},e.createElement("span",{className:"badge-nik-sub shadow-sm font-monospace"},e.createElement("i",{className:"fa fa-fingerprint me-1 text-slate-500"}),"NIK: ",a.nik)),a.phone&&e.createElement("div",{className:"d-flex align-items-center gap-1.5 mt-1 text-slate-600 small",style:{fontSize:"0.8rem",fontWeight:500}},e.createElement("i",{className:"fa fa-phone text-slate-400",style:{width:"14px",fontSize:"0.75rem"}}),e.createElement("span",null,a.phone))),e.createElement("td",null,e.createElement("div",null,e.createElement("span",{className:"badge-dpw-sub shadow-sm"},e.createElement("i",{className:"fa fa-landmark text-emerald-600 me-1"}),e.createElement("span",null,((x=a.province)==null?void 0:x.name)||"Belum diatur"))),e.createElement("div",{className:"mt-1.5"},e.createElement("span",{className:"badge-dpc-sub shadow-sm"},e.createElement("i",{className:"fa fa-city text-indigo-600 me-1"}),e.createElement("span",null,((u=a.city)==null?void 0:u.name)||"Belum diatur")))),e.createElement("td",{className:"text-center"},a.filepakta?e.createElement("a",{href:a.filepakta,target:"_blank",rel:"noopener noreferrer",className:"btn-pakta-pdf shadow-sm"},e.createElement("i",{className:"fa fa-file-pdf me-1"}),e.createElement("span",null,"Lihat PDF")):e.createElement("span",{className:"badge-no-pakta"},"Belum Upload")),e.createElement("td",null,e.createElement("div",{className:"fw-semibold text-slate-700 small"},e.createElement("i",{className:"fa fa-calendar-alt text-slate-400 me-1"}),a.created_at?new Date(a.created_at).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-")),e.createElement("td",{className:"pe-4 text-end"},e.createElement("div",{className:"d-flex justify-content-end gap-1.5"},m(["users.edit"])&&e.createElement(o,{href:`/account/users/verifikasiAnggota/${a.id}`,className:"btn btn-sm btn-verif-action shadow-sm",title:"Verifikasi & Terbitkan No Anggota"},e.createElement("i",{className:"fa fa-check-circle me-1"}),e.createElement("span",null,"Verifikasi")),m(["users.edit"])&&e.createElement(o,{href:`/account/users/${a.id}/edit`,className:"btn btn-sm btn-action-edit shadow-sm",title:"Edit Data User"},e.createElement("i",{className:"fa fa-pen"})),m(["users.delete"])&&e.createElement(T,{URL:"/account/users",id:a.id,className:"btn btn-sm btn-action-delete shadow-sm",title:"Hapus User"}))))})))):e.createElement("div",{className:"p-5 text-center empty-state-box"},e.createElement("div",{className:"empty-icon-wrap mb-3 shadow"},e.createElement("i",{className:"fa fa-shield-alt text-emerald-600"})),e.createElement("h4",{className:"fw-bold text-slate-900 mb-2"},"Tidak Ada Anggota Menunggu Verifikasi"),e.createElement("p",{className:"text-slate-600 mx-auto mb-4 empty-desc"},"Semua pendaftaran anggota baru telah selesai diverifikasi atau tidak ada data pendaftar yang cocok dengan kriteria filter saat ini."),e.createElement("div",{className:"d-flex justify-content-center gap-2 flex-wrap"},n||l||s?e.createElement("button",{onClick:g,className:"btn btn-outline-emerald rounded-pill px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-undo me-1.5"})," Reset Filter Pencarian"):e.createElement(o,{href:"/account/users",className:"btn btn-outline-emerald rounded-pill px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-users me-1.5"})," Lihat Semua Anggota Terdaftar")))),t.data.length>0&&e.createElement("div",{className:"card-footer table-card-footer py-3 px-4 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2"},e.createElement("div",{className:"text-slate-600 small"},"Menampilkan ",e.createElement("strong",null,t.data.length)," dari ",e.createElement("strong",null,t.total)," pendaftar baru"),e.createElement(D,{links:t.links,align:"end"})))),e.createElement("style",null,`
                .verifikasi-page-container {
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
                .badge-pending-count {
                    background-color: #fef2f2;
                    color: #dc2626;
                    border: 1.5px solid #fca5a5;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-verified-all {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .btn-all-users {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    color: #1e293b;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-all-users:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
                }

                /* Filter Card */
                .filter-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-top: 3.5px solid #3b82f6 !important;
                    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
                }
                .filter-card-header {
                    background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
                    border-bottom: 1.5px solid #e2e8f0;
                }
                .badge-active-filter {
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    border: 1px solid #bfdbfe;
                    padding: 3px 10px;
                    border-radius: 9999px;
                    font-size: 0.74rem;
                    font-weight: 700;
                }
                .form-control-custom {
                    height: 42px;
                    border-radius: 10px;
                    border: 1.5px solid #cbd5e1;
                    background-color: #ffffff;
                    font-size: 0.86rem;
                    color: #0f172a;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }
                .form-control-custom:focus {
                    background-color: #ffffff;
                    border-color: #059669;
                    box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);
                    color: #0f172a;
                }
                .btn-filter-action {
                    height: 42px;
                    border-radius: 10px;
                    font-weight: 700;
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border: none;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-filter-action:hover {
                    background: linear-gradient(135deg, #047857 0%, #065f46 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(5, 150, 105, 0.35);
                }
                .btn-reset-action {
                    height: 42px;
                    width: 42px;
                    border-radius: 10px;
                    border: 1.5px solid #cbd5e1;
                    background-color: #ffffff;
                    color: #475569;
                    transition: all 0.2s ease;
                }
                .btn-reset-action:hover {
                    background-color: #f1f5f9;
                    color: #0f172a;
                    border-color: #94a3b8;
                    transform: translateY(-1px);
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
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                }

                /* Table Styling */
                .custom-verif-table {
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
                .verif-row td {
                    padding: 16px 12px;
                    border-bottom: 1px solid #e2e8f0;
                    vertical-align: middle;
                }
                .verif-row:hover td {
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
                .user-avatar-img {
                    width: 42px;
                    height: 42px;
                    object-fit: cover;
                    border: 2px solid #cbd5e1;
                }
                .avatar-status-dot {
                    width: 12px;
                    height: 12px;
                }
                .badge-nik-sub {
                    background-color: #eff6ff;
                    color: #1e40af;
                    border: 1px solid #bfdbfe;
                    border-radius: 6px;
                    padding: 2px 8px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-dpw-sub {
                    background-color: #ecfdf5;
                    color: #065f46;
                    border: 1px solid #a7f3d0;
                    border-radius: 6px;
                    padding: 3px 10px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-dpc-sub {
                    background-color: #eef2ff;
                    color: #3730a3;
                    border: 1px solid #c7d2fe;
                    border-radius: 6px;
                    padding: 3px 10px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .btn-pakta-pdf {
                    display: inline-flex;
                    align-items: center;
                    background-color: #fef2f2;
                    color: #dc2626;
                    border: 1.5px solid #fca5a5;
                    border-radius: 9999px;
                    padding: 5px 12px;
                    font-size: 0.76rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .btn-pakta-pdf:hover {
                    background-color: #fee2e2;
                    color: #b91c1c;
                    transform: translateY(-1px);
                }
                .badge-no-pakta {
                    display: inline-flex;
                    align-items: center;
                    background-color: #f1f5f9;
                    color: #94a3b8;
                    border: 1px solid #cbd5e1;
                    border-radius: 6px;
                    padding: 3px 8px;
                    font-size: 0.74rem;
                    font-weight: 600;
                }

                /* Action buttons */
                .btn-verif-action {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border: none;
                    border-radius: 8px;
                    padding: 6px 14px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    transition: all 0.2s ease;
                }
                .btn-verif-action:hover {
                    background: linear-gradient(135deg, #047857 0%, #065f46 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 10px rgba(5, 150, 105, 0.35);
                }
                .btn-action-edit {
                    width: 34px;
                    height: 34px;
                    border-radius: 8px;
                    background-color: #eff6ff;
                    border: 1.5px solid #93c5fd;
                    color: #1d4ed8;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                    transition: all 0.2s ease;
                }
                .btn-action-edit:hover {
                    background-color: #dbeafe;
                    color: #1e40af;
                    transform: translateY(-1px);
                }
                .btn-action-delete {
                    width: 34px;
                    height: 34px;
                    border-radius: 8px;
                    background-color: #fef2f2;
                    border: 1.5px solid #fca5a5;
                    color: #dc2626;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                    transition: all 0.2s ease;
                }
                .btn-action-delete:hover {
                    background-color: #fee2e2;
                    color: #b91c1c;
                    transform: translateY(-1px);
                }

                /* Empty state */
                .empty-state-box {
                    padding: 65px 24px !important;
                    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
                }
                .empty-icon-wrap {
                    width: 76px;
                    height: 76px;
                    border-radius: 22px;
                    background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
                    border: 2px solid #6ee7b7;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 36px;
                    box-shadow: 0 8px 24px rgba(5, 150, 105, 0.2);
                }
                .empty-desc {
                    max-width: 520px;
                    font-size: 0.92rem;
                    font-weight: 500;
                    line-height: 1.5;
                }
                .btn-outline-emerald {
                    background-color: #ffffff;
                    border: 1.5px solid #059669;
                    color: #059669;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-outline-emerald:hover {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border-color: #059669;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);
                }

                /* Footer */
                .table-card-footer {
                    background-color: #f8fafc;
                    border-top: 1.5px solid #e2e8f0;
                }
            `))}export{L as default};
