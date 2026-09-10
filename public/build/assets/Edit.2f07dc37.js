import{u as W,r,R as e,H,L as U,d as Y}from"./app.495843f8.js";import{L as G}from"./Account.1665c6b2.js";import{S as A}from"./sweetalert2.all.3e758498.js";import"./Dropdown.30a41e0a.js";function Q(){const{errors:t,roles:$,provinces:I,cities:R,user:l}=W().props,[i,d]=r.exports.useState(l.name),[f,p]=r.exports.useState(l.nik),[b,u]=r.exports.useState(l.email),[g,x]=r.exports.useState(l.alamat),[o,E]=r.exports.useState(l.province_id),[v,n]=r.exports.useState(l.city_id),[h,N]=r.exports.useState(l.status_anggota),[c,w]=r.exports.useState(l.roles.map(a=>a.name)),[k,y]=r.exports.useState(""),[S,_]=r.exports.useState(""),[B,F]=r.exports.useState(""),[P,C]=r.exports.useState(l.no_str),[D,K]=r.exports.useState(l.date_exprd),[m,z]=r.exports.useState(!1),L=a=>{let s=[...c];s.includes(a)?s=s.filter(j=>j!==a):s.push(a),w(s)},T=async a=>{a.preventDefault(),!m&&(z(!0),Y.Inertia.post(`/account/users/${l.id}`,{name:i,email:b,nik:f,province_id:o,city_id:v,alamat:g,image:B,status_anggota:h,no_str:P,date_exprd:D,password:k,password_confirmation:S,roles:c,_method:"PUT"},{onFinish:()=>z(!1),onSuccess:()=>{A.fire({title:"Berhasil!",text:"Data pengguna berhasil diperbarui.",icon:"success",showConfirmButton:!1,timer:1500})},onError:()=>{A.fire({title:"Gagal!",text:"Periksa kembali isian formulir Anda.",icon:"error"})}}))};return e.createElement(G,null,e.createElement(H,{title:`Edit User: ${l.name} - IKATWI`}),e.createElement("div",{className:"container-fluid py-4 user-edit-container"},e.createElement("div",{className:"header-banner-box p-4 rounded-4 mb-4 shadow-sm"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"header-icon-wrap me-3 shadow"},e.createElement("i",{className:"fa fa-user-edit fa-2x text-white"})),e.createElement("div",null,e.createElement("h4",{className:"mb-0 fw-bold header-main-title"},"Edit Data Pengguna"),e.createElement("p",{className:"header-subtitle mb-0 mt-1"},"Perbarui informasi profil akun, data STR, penempatan wilayah (DPW/DPC), dan hak akses sistem."))),e.createElement("div",null,e.createElement(U,{href:"/account/users",className:"btn btn-back-users rounded-pill px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-arrow-left me-1.5 text-primary"}),e.createElement("span",null,"Kembali ke Daftar"))))),e.createElement("div",{className:"card edit-form-card rounded-4 shadow-sm overflow-hidden mb-4"},e.createElement("div",{className:"card-header form-card-header py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2"},e.createElement("div",{className:"d-flex align-items-center gap-3"},e.createElement("span",{className:"card-icon-pill bg-blue-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-id-card text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-bold form-header-title"},"Formulir Perubahan Data Pengguna"),e.createElement("span",{className:"form-header-sub"},l.name))),l.no_anggota&&e.createElement("span",{className:"badge-no-anggota-pill shadow-sm"},e.createElement("i",{className:"fa fa-award me-1 text-emerald-600"}),"No. Anggota: ",e.createElement("strong",null,l.no_anggota))),e.createElement("div",{className:"card-body p-4 p-lg-5"},e.createElement("form",{onSubmit:T},e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-primary"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"1. Data Identitas & STR")),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-fingerprint me-1.5 text-primary"})," Nomor Induk Kependudukan (NIK)"),e.createElement("input",{type:"number",className:`form-control form-control-custom ${t.nik?"is-invalid":""}`,value:f||"",onChange:a=>p(a.target.value),placeholder:"Ketik 16 digit NIK..."}),t.nik&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.nik)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-certificate me-1.5 text-emerald-600"})," Nomor STR"),e.createElement("input",{type:"text",className:`form-control form-control-custom ${t.no_str?"is-invalid":""}`,value:P||"",onChange:a=>C(a.target.value),placeholder:"Nomor Surat Tanda Registrasi..."}),t.no_str&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.no_str)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-calendar-alt me-1.5 text-amber-600"})," Tanggal Kedaluwarsa STR"),e.createElement("input",{type:"date",className:`form-control form-control-custom ${t.date_exprd?"is-invalid":""}`,value:D||"",onChange:a=>K(a.target.value)}),t.date_exprd&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.date_exprd)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-image me-1.5 text-indigo-600"})," Foto Profil Baru ",e.createElement("span",{className:"text-slate-500 fw-normal text-lowercase"},"(opsional)")),e.createElement("input",{type:"file",className:`form-control form-control-custom ${t.image?"is-invalid":""}`,onChange:a=>F(a.target.files[0])}),t.image&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.image))),e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-emerald-500"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"2. Profil Pengguna & Kontak")),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-user me-1.5 text-primary"})," Nama Lengkap & Gelar ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"text",className:`form-control form-control-custom ${t.name?"is-invalid":""}`,value:i||"",onChange:a=>d(a.target.value),placeholder:"Nama lengkap beserta gelar..."}),t.name&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.name)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-envelope me-1.5 text-primary"})," Alamat Email ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"email",className:`form-control form-control-custom ${t.email?"is-invalid":""}`,value:b||"",onChange:a=>u(a.target.value),placeholder:"contoh@email.com"}),t.email&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.email))),e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-indigo-500"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"3. Wilayah Organisasi & Status")),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-landmark me-1.5 text-emerald-600"})," DPW (Provinsi)"),e.createElement("select",{className:`form-select form-control-custom ${t.province_id?"is-invalid":""}`,value:o||"",onChange:a=>{E(a.target.value),n("")}},e.createElement("option",{value:""},"-- Pilih Wilayah DPW --"),(I||[]).map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.province_id&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.province_id)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-city me-1.5 text-indigo-600"})," DPC (Kota/Kab)"),e.createElement("select",{className:`form-select form-control-custom ${t.city_id?"is-invalid":""}`,value:v||"",onChange:a=>n(a.target.value)},e.createElement("option",{value:""},"-- Pilih Cabang DPC --"),(R||[]).filter(a=>!o||String(a.province_id)===String(o)).map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.city_id&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.city_id)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-user-tag me-1.5 text-primary"})," Status Keanggotaan"),e.createElement("select",{className:`form-select form-control-custom ${t.status_anggota?"is-invalid":""}`,value:h||"",onChange:a=>N(a.target.value)},e.createElement("option",{value:""},"-- Pilih Status --"),e.createElement("option",{value:"Anggota Biasa"},"Anggota Biasa"),e.createElement("option",{value:"Anggota Luar Biasa"},"Anggota Luar Biasa"),e.createElement("option",{value:"Anggota Kehormatan"},"Anggota Kehormatan")),t.status_anggota&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.status_anggota)),e.createElement("div",{className:"col-12"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-map-marker-alt me-1.5 text-danger"})," Alamat Lengkap"),e.createElement("textarea",{className:`form-control form-control-custom-textarea ${t.alamat?"is-invalid":""}`,rows:3,value:g||"",onChange:a=>x(a.target.value),placeholder:"Ketik alamat lengkap domisili / tempat tinggal..."}),t.alamat&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.alamat))),e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-amber-500"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"4. Keamanan Akun & Kata Sandi ",e.createElement("span",{className:"text-slate-500 fw-normal text-lowercase"},"(opsional)"))),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-key me-1.5 text-amber-600"})," Ganti Password ",e.createElement("span",{className:"text-slate-500 fw-normal text-lowercase"},"(kosongkan jika tidak diubah)")),e.createElement("input",{type:"password",className:`form-control form-control-custom ${t.password?"is-invalid":""}`,value:k,onChange:a=>y(a.target.value),placeholder:"Ketik password baru jika ingin mengubah..."}),t.password&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.password)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-lock me-1.5 text-amber-600"})," Konfirmasi Password Baru"),e.createElement("input",{type:"password",className:"form-control form-control-custom",value:S,onChange:a=>_(a.target.value),placeholder:"Ketik ulang password baru..."}))),e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-violet-600"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"5. Hak Akses & Peran Sistem (Roles)")),e.createElement("div",{className:"mb-4"},e.createElement("div",{className:"p-3.5 rounded-4 role-selection-box"},e.createElement("div",{className:"row g-2.5"},($||[]).map(a=>{const s=c.includes(a.name);return e.createElement("div",{className:"col-6 col-sm-4 col-md-3 col-lg-2",key:a.id},e.createElement("div",{onClick:()=>L(a.name),className:`role-chip-card ${s?"role-chip-active":""} shadow-sm`},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("div",{className:`role-checkbox-circle ${s?"circle-active":""}`},s&&e.createElement("i",{className:"fa fa-check text-white"})),e.createElement("span",{className:"role-chip-label text-truncate"},a.name))))}))),t.roles&&e.createElement("div",{className:"text-danger small mt-2 fw-semibold"},e.createElement("i",{className:"fa fa-exclamation-circle me-1"}),t.roles)),e.createElement("div",{className:"d-flex align-items-center gap-2.5 pt-4 border-top"},e.createElement("button",{type:"submit",disabled:m,className:"btn btn-save-action shadow-sm"},m?e.createElement(e.Fragment,null,e.createElement("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),e.createElement("span",null,"Menyimpan...")):e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-save me-1.5"}),e.createElement("span",null,"Simpan Perubahan"))),e.createElement("button",{type:"reset",onClick:()=>{d(l.name),p(l.nik),u(l.email),x(l.alamat),E(l.province_id),n(l.city_id),N(l.status_anggota),w(l.roles.map(a=>a.name)),y(""),_(""),C(l.no_str),K(l.date_exprd)},className:"btn btn-reset-custom shadow-sm"},e.createElement("i",{className:"fa fa-undo me-1.5"}),e.createElement("span",null,"Reset Formulir"))))))),e.createElement("style",null,`
                .user-edit-container {
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
                .btn-back-users {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    color: #1e293b;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-back-users:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
                }

                /* Main Form Card */
                .edit-form-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-top: 4px solid #2563eb !important;
                    box-shadow: 0 6px 20px -2px rgba(15, 23, 42, 0.08);
                }
                .form-card-header {
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
                .form-header-title {
                    color: #0f172a;
                    font-size: 1.05rem;
                }
                .form-header-sub {
                    color: #475569;
                    font-size: 0.78rem;
                    font-weight: 600;
                    display: block;
                }
                .badge-no-anggota-pill {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }

                /* Form Sections */
                .section-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    display: inline-block;
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
                    border-color: #2563eb;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
                    color: #0f172a;
                }
                .form-control-custom-textarea {
                    border-radius: 10px;
                    border: 1.5px solid #cbd5e1;
                    background-color: #ffffff;
                    font-size: 0.86rem;
                    color: #0f172a;
                    font-weight: 500;
                    padding: 10px 14px;
                    transition: all 0.2s ease;
                }
                .form-control-custom-textarea:focus {
                    background-color: #ffffff;
                    border-color: #2563eb;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
                    color: #0f172a;
                }

                /* Roles Selection Box */
                .role-selection-box {
                    background-color: #f8fafc;
                    border: 1.5px solid #e2e8f0;
                    padding: 16px;
                }
                .role-chip-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    border-radius: 10px;
                    padding: 10px 12px;
                    cursor: pointer;
                    user-select: none;
                    transition: all 0.18s ease;
                }
                .role-chip-card:hover {
                    border-color: #94a3b8;
                    background-color: #ffffff;
                    transform: translateY(-1px);
                }
                .role-chip-active {
                    background-color: #eff6ff !important;
                    border-color: #3b82f6 !important;
                    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15) !important;
                }
                .role-checkbox-circle {
                    width: 20px;
                    height: 20px;
                    border-radius: 6px;
                    border: 1.5px solid #cbd5e1;
                    background-color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 10px;
                    flex-shrink: 0;
                    transition: all 0.18s ease;
                }
                .circle-active {
                    background-color: #2563eb;
                    border-color: #2563eb;
                }
                .role-chip-label {
                    font-size: 0.82rem;
                    font-weight: 700;
                    color: #1e293b;
                }
                .role-chip-active .role-chip-label {
                    color: #1d4ed8;
                }

                /* Action buttons */
                .btn-save-action {
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    color: #ffffff;
                    border: none;
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 0.88rem;
                    padding: 10px 24px;
                    display: inline-flex;
                    align-items: center;
                    transition: all 0.2s ease;
                }
                .btn-save-action:hover {
                    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.25);
                }
                .btn-reset-custom {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    color: #475569;
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 0.88rem;
                    padding: 10px 20px;
                    display: inline-flex;
                    align-items: center;
                    transition: all 0.2s ease;
                }
                .btn-reset-custom:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                    transform: translateY(-1px);
                }
            `))}export{Q as default};
