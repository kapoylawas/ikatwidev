import{u as E,r as t,R as e,H as N,L as k,d as h}from"./app.50853f30.js";import{L as v}from"./Account.547e12e5.js";import{S as c}from"./sweetalert2.all.774f8f02.js";import"./Dropdown.79daa5c4.js";function j(){var i,m;const{errors:w,provinces:y,cities:S,user:a}=E().props,s=a.confirm,[o,A]=t.exports.useState(a.name),[d,z]=t.exports.useState(a.nik),[f,P]=t.exports.useState(a.email),[p,I]=t.exports.useState(a.alamat);t.exports.useState(a.province_id),t.exports.useState(a.city_id);const[b,K]=t.exports.useState(a.status_anggota),[n,u]=t.exports.useState(a.confirm),[l,r]=t.exports.useState(!1);t.exports.useEffect(()=>{u(s==="true")},[s]);const x=g=>{g.preventDefault(),!l&&(r(!0),h.Inertia.post(`/account/users/verifNoAnggota/${a.id}`,{name:o,_method:"PUT"},{onStart:()=>r(!0),onFinish:()=>r(!1),onSuccess:()=>{r(!1),c.fire({title:"Berhasil!",text:"Nomor Anggota berhasil diterbitkan dan anggota telah aktif!",icon:"success",showConfirmButton:!1,timer:1800})},onError:B=>{r(!1),c.fire({title:"Terjadi Kendala",text:"Gagal memproses verifikasi anggota. Silakan coba kembali.",icon:"error"})}}))};return e.createElement(v,null,e.createElement(N,{title:`Verifikasi Anggota: ${a.name} - IKATWI`}),e.createElement("div",{className:"container-fluid py-4 user-verifikasi-anggota-page"},e.createElement("div",{className:"header-banner-box p-4 rounded-4 mb-4 shadow-sm"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"header-icon-wrap me-3 shadow"},e.createElement("i",{className:"fa fa-user-check fa-2x text-white"})),e.createElement("div",null,e.createElement("h4",{className:"mb-0 fw-bold header-main-title"},"Verifikasi No. Anggota"),e.createElement("p",{className:"header-subtitle mb-0 mt-1"},"Konfirmasi pendaftaran pendaftar baru dan terbitkan Nomor Anggota resmi IKATWI."))),e.createElement("div",null,e.createElement(k,{href:"/account/verifikasi-users",className:"btn btn-all-users rounded-pill px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-arrow-left me-1.5 text-primary"}),e.createElement("span",null,"Kembali ke Daftar Verifikasi"))))),e.createElement("div",{className:"card form-verif-card rounded-4 shadow-sm overflow-hidden mb-4"},e.createElement("div",{className:"card-header form-card-header py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2"},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("i",{className:"fa fa-id-card text-emerald-600 fs-5"}),e.createElement("span",{className:"fw-bold text-slate-900",style:{fontSize:"1rem"}},"Data Pendaftar: ",a.name)),n?e.createElement("span",{className:"badge-verified-pill shadow-sm"},e.createElement("i",{className:"fa fa-check-circle me-1"})," Terverifikasi (No: ",a.no_anggota,")"):e.createElement("span",{className:"badge-waiting-pill shadow-sm"},e.createElement("i",{className:"fa fa-clock me-1"})," Menunggu Verifikasi & Penerbitan No. Anggota")),e.createElement("div",{className:"card-body p-4"},e.createElement("form",{onSubmit:x},e.createElement("div",{className:"row g-3"},e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-fingerprint me-1.5 text-primary"})," Nomor Induk Kependudukan (NIK)"),e.createElement("input",{type:"number",disabled:!0,className:"form-control form-control-custom-disabled",value:d||""})),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-user me-1.5 text-primary"})," Nama Lengkap"),e.createElement("input",{type:"text",disabled:!0,className:"form-control form-control-custom-disabled",value:o||""})),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-envelope me-1.5 text-primary"})," Alamat Email"),e.createElement("input",{type:"text",disabled:!0,className:"form-control form-control-custom-disabled",value:f||""})),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-landmark me-1.5 text-emerald-600"})," DPW (Provinsi)"),e.createElement("input",{type:"text",disabled:!0,className:"form-control form-control-custom-disabled",value:((i=a.province)==null?void 0:i.name)||"-"})),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-city me-1.5 text-indigo-600"})," DPC (Kota/Kab)"),e.createElement("input",{type:"text",disabled:!0,className:"form-control form-control-custom-disabled",value:((m=a.city)==null?void 0:m.name)||"-"})),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-user-tag me-1.5 text-primary"})," Status Anggota"),e.createElement("input",{type:"text",disabled:!0,className:"form-control form-control-custom-disabled",value:b||"Anggota Biasa"})),e.createElement("div",{className:"col-12"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-map-marker-alt me-1.5 text-danger"})," Alamat Lengkap"),e.createElement("textarea",{disabled:!0,rows:2,className:"form-control form-control-custom-disabled",value:p||"-"})),a.filepakta&&e.createElement("div",{className:"col-12"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase d-block"},e.createElement("i",{className:"fa fa-file-pdf me-1.5 text-danger"})," Berkas Pakta Integritas"),e.createElement("a",{href:a.filepakta,target:"_blank",rel:"noopener noreferrer",className:"btn btn-pakta-pdf shadow-sm"},e.createElement("i",{className:"fa fa-file-pdf me-1.5"}),e.createElement("span",null,"Buka & Periksa Berkas Pakta Integritas (PDF)"),e.createElement("i",{className:"fa fa-external-link-alt ms-2",style:{fontSize:"0.75rem"}})))),e.createElement("div",{className:"d-flex gap-2 mt-4 pt-3 border-top",style:{borderColor:"#cbd5e1"}},n?e.createElement("button",{type:"button",disabled:!0,className:"btn btn-already-verified shadow-sm"},e.createElement("i",{className:"fa fa-check-circle text-success"}),e.createElement("span",null,"Sudah Diverifikasi & Terbit No. Anggota")):e.createElement("button",{type:"submit",disabled:l,className:"btn btn-submit-verif shadow"},l?e.createElement(e.Fragment,null,e.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),e.createElement("span",null,"Sedang Memproses & Menerbitkan...")):e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-check-circle"}),e.createElement("span",null,"Setujui & Terbitkan No. Anggota")))))))),e.createElement("style",null,`
                .user-verifikasi-anggota-page {
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

                /* Form Card */
                .form-verif-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-top: 4px solid #059669 !important;
                    box-shadow: 0 6px 20px -2px rgba(15, 23, 42, 0.08);
                }
                .form-card-header {
                    background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
                    border-bottom: 1.5px solid #e2e8f0;
                }
                .badge-verified-pill {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    font-size: 0.78rem;
                    font-weight: 700;
                }
                .badge-waiting-pill {
                    background-color: #fffbeb;
                    color: #b45309;
                    border: 1.5px solid #fde68a;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    font-size: 0.78rem;
                    font-weight: 700;
                }
                .form-control-custom-disabled {
                    border-radius: 10px;
                    border: 1.5px solid #cbd5e1;
                    background-color: #f8fafc;
                    font-size: 0.86rem;
                    color: #1e293b !important;
                    font-weight: 600;
                    padding: 9px 14px;
                }
                .btn-pakta-pdf {
                    display: inline-flex;
                    align-items: center;
                    background-color: #fef2f2;
                    color: #dc2626;
                    border: 1.5px solid #fca5a5;
                    border-radius: 10px;
                    padding: 10px 18px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .btn-pakta-pdf:hover {
                    background-color: #fee2e2;
                    color: #b91c1c;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.15);
                }
                .btn-already-verified {
                    background-color: #f1f5f9;
                    border: 1.5px solid #cbd5e1;
                    color: #475569;
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 0.88rem;
                    padding: 10px 22px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }
                .btn-submit-verif {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border: none;
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 0.88rem;
                    padding: 10px 24px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.2s ease;
                }
                .btn-submit-verif:hover {
                    background: linear-gradient(135deg, #047857 0%, #065f46 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                }
            `))}export{j as default};
