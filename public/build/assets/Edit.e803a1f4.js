import{u as le,r as s,R as e,H as re,L as se,d as ne}from"./app.0208cb1f.js";import{L as oe}from"./Account.c9ac7f8d.js";import{S as m}from"./sweetalert2.all.25fa838b.js";import"./Dropdown.99f3eaf8.js";function pe(){var Y;const{errors:t,roles:O,provinces:J,cities:q,user:l,auth:g}=le().props,[y,S]=s.exports.useState(l.name||""),[i,P]=s.exports.useState(l.nik||""),[C,_]=s.exports.useState(l.email||""),[$,A]=s.exports.useState(l.phone||""),[R,D]=s.exports.useState(l.alamat||""),[d,K]=s.exports.useState(l.province_id||""),[z,x]=s.exports.useState(l.city_id||""),[B,I]=s.exports.useState(l.status_anggota||""),[h,T]=s.exports.useState((l.roles||[]).map(a=>a.name)),[n,j]=s.exports.useState(""),[o,F]=s.exports.useState(""),[f,Q]=s.exports.useState(!1),[p,V]=s.exports.useState(!1),[E,N]=s.exports.useState(""),[L,v]=s.exports.useState(l.image?`/storage/users/${l.image}`:null),[M,U]=s.exports.useState(l.no_str||""),[w,W]=s.exports.useState(l.date_exprd||""),[k,H]=s.exports.useState(!1),G=((Y=g==null?void 0:g.user)==null?void 0:Y.id)===l.id,b=(a=>{if(!a)return null;const r=new Date;r.setHours(0,0,0,0);const u=new Date(a);if(isNaN(u.getTime()))return null;const te=u.getTime()-r.getTime(),c=Math.ceil(te/(1e3*60*60*24));return c<0?{label:`Sudah Kedaluwarsa (${Math.abs(c)} hari lalu)`,className:"badge-str-expired",icon:"fa-exclamation-triangle"}:c<=90?{label:`Segera Berakhir (${c} hari lagi)`,className:"badge-str-warning",icon:"fa-clock"}:{label:`STR Masih Berlaku (${c} hari tersisa)`,className:"badge-str-active",icon:"fa-check-circle"}})(w),X=a=>{let r=[...h];if(r.includes(a)){if(G&&(a==="admin"||a==="super-admin")&&r.length<=1){m.fire({title:"Peringatan Akses!",text:"Anda tidak dapat menghapus seluruh hak akses admin dari akun Anda sendiri agar tidak terkunci.",icon:"warning"});return}r=r.filter(u=>u!==a)}else r.push(a);T(r)},Z=a=>{const r=a.target.files[0];if(!!r){if(r.size>2*1024*1024){m.fire({title:"Ukuran Terlalu Besar!",text:"Ukuran berkas foto maksimal 2MB.",icon:"warning"}),a.target.value="";return}N(r),v(URL.createObjectURL(r))}},ee=()=>{N(""),v(l.image?`/storage/users/${l.image}`:null);const a=document.getElementById("profile-image-input");a&&(a.value="")},ae=async a=>{if(a.preventDefault(),!k){if(n&&n!==o){m.fire({title:"Password Tidak Cocok!",text:"Konfirmasi password baru tidak sesuai dengan password yang dimasukkan.",icon:"warning"});return}H(!0),ne.Inertia.post(`/account/users/${l.id}`,{name:y,email:C,phone:$,nik:i,province_id:d,city_id:z,alamat:R,image:E,status_anggota:B,no_str:M,date_exprd:w,password:n,password_confirmation:o,roles:h,_method:"PUT"},{onFinish:()=>H(!1),onSuccess:()=>{m.fire({title:"Berhasil!",text:"Data pengguna berhasil diperbarui.",icon:"success",showConfirmButton:!1,timer:1500})},onError:()=>{m.fire({title:"Gagal!",text:"Periksa kembali isian formulir Anda.",icon:"error"})}})}};return e.createElement(oe,null,e.createElement(re,{title:`Edit User: ${l.name} - IKATWI`}),e.createElement("div",{className:"container-fluid py-4 user-edit-container"},e.createElement("div",{className:"header-banner-box p-4 rounded-4 mb-4 shadow-sm"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"header-icon-wrap me-3 shadow"},e.createElement("i",{className:"fa fa-user-edit fa-2x text-white"})),e.createElement("div",null,e.createElement("h4",{className:"mb-0 fw-bold header-main-title"},"Edit Data Pengguna"),e.createElement("p",{className:"header-subtitle mb-0 mt-1"},"Perbarui informasi profil akun, data STR, kontak aktif, penempatan wilayah (DPW/DPC), dan hak akses sistem."))),e.createElement("div",null,e.createElement(se,{href:"/account/users",className:"btn btn-back-users rounded-pill px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-arrow-left me-1.5 text-primary"}),e.createElement("span",null,"Kembali ke Daftar"))))),G&&e.createElement("div",{className:"alert alert-info border-0 shadow-sm rounded-4 mb-4 d-flex align-items-center gap-3 p-3.5"},e.createElement("div",{className:"alert-icon-box bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0",style:{width:40,height:40}},e.createElement("i",{className:"fa fa-user-shield"})),e.createElement("div",{className:"small"},e.createElement("strong",null,"Perhatian:")," Anda saat ini sedang mengedit data akun Anda sendiri. Pastikan peran hak akses (*role*) administrator tetap dicentang agar Anda tidak kehilangan akses kepengurusan sistem.")),e.createElement("div",{className:"card edit-form-card rounded-4 shadow-sm overflow-hidden mb-4"},e.createElement("div",{className:"card-header form-card-header py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2"},e.createElement("div",{className:"d-flex align-items-center gap-3"},e.createElement("span",{className:"card-icon-pill bg-blue-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-id-card text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-bold form-header-title"},"Formulir Perubahan Data Pengguna"),e.createElement("span",{className:"form-header-sub"},l.name," ",l.email?`\u2022 (${l.email})`:""))),l.no_anggota&&e.createElement("span",{className:"badge-no-anggota-pill shadow-sm"},e.createElement("i",{className:"fa fa-award me-1 text-emerald-600"}),"No. Anggota: ",e.createElement("strong",null,l.no_anggota))),e.createElement("div",{className:"card-body p-4 p-lg-5"},e.createElement("form",{onSubmit:ae},e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-primary"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"1. Data Identitas, STR & Foto Profil")),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-md-6"},e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-1.5"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-0 text-uppercase"},e.createElement("i",{className:"fa fa-fingerprint me-1.5 text-primary"})," Nomor Induk Kependudukan (NIK)"),e.createElement("span",{className:`badge ${(i==null?void 0:i.length)===16?"bg-success text-white":"bg-slate-100 text-slate-600 border"}`,style:{fontSize:"0.72rem"}},i?`${i.length}/16 digit`:"0/16 digit")),e.createElement("input",{type:"text",inputMode:"numeric",maxLength:16,className:`form-control form-control-custom ${t.nik?"is-invalid":""}`,value:i||"",onChange:a=>P(a.target.value.replace(/\D/g,"").slice(0,16)),placeholder:"Ketik 16 digit NIK..."}),t.nik&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.nik)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-certificate me-1.5 text-emerald-600"})," Nomor STR"),e.createElement("input",{type:"text",className:`form-control form-control-custom ${t.no_str?"is-invalid":""}`,value:M||"",onChange:a=>U(a.target.value),placeholder:"Nomor Surat Tanda Registrasi..."}),t.no_str&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.no_str)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-1.5"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-0 text-uppercase"},e.createElement("i",{className:"fa fa-calendar-alt me-1.5 text-amber-600"})," Tanggal Kedaluwarsa STR"),b&&e.createElement("span",{className:`badge ${b.className} d-inline-flex align-items-center gap-1`,style:{fontSize:"0.72rem"}},e.createElement("i",{className:`fa ${b.icon}`}),e.createElement("span",null,b.label))),e.createElement("input",{type:"date",className:`form-control form-control-custom ${t.date_exprd?"is-invalid":""}`,value:w||"",onChange:a=>W(a.target.value)}),t.date_exprd&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.date_exprd)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-image me-1.5 text-indigo-600"})," Foto Profil ",e.createElement("span",{className:"text-slate-500 fw-normal text-lowercase"},"(format JPG, PNG, WEBP maks 2MB)")),e.createElement("div",{className:"d-flex align-items-center gap-3 p-2.5 rounded-3 bg-slate-50 border"},e.createElement("div",{className:"image-preview-thumbnail-wrap shadow-sm flex-shrink-0"},L?e.createElement("img",{src:L,alt:"Preview Foto",className:"w-100 h-100 rounded-3 object-fit-cover"}):e.createElement("div",{className:"w-100 h-100 rounded-3 d-flex align-items-center justify-content-center bg-slate-200 text-slate-400"},e.createElement("i",{className:"fa fa-user fa-2x"}))),e.createElement("div",{className:"flex-grow-1"},e.createElement("input",{id:"profile-image-input",type:"file",accept:"image/png, image/jpeg, image/jpg, image/webp",className:`form-control form-control-sm ${t.image?"is-invalid":""}`,onChange:Z}),t.image&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.image),E&&e.createElement("div",{className:"d-flex align-items-center gap-2 mt-1.5"},e.createElement("small",{className:"text-emerald-600 fw-semibold"},e.createElement("i",{className:"fa fa-check-circle me-1"})," Foto baru dipilih: ",E.name),e.createElement("button",{type:"button",onClick:ee,className:"btn btn-link btn-sm text-danger p-0 small fw-bold text-decoration-none"},"Batal")))))),e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-emerald-500"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"2. Profil Pengguna & Kontak Komunikasi")),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-user me-1.5 text-primary"})," Nama Lengkap & Gelar ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"text",className:`form-control form-control-custom ${t.name?"is-invalid":""}`,value:y||"",onChange:a=>S(a.target.value),placeholder:"Nama lengkap beserta gelar..."}),t.name&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.name)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-envelope me-1.5 text-primary"})," Alamat Email ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"email",className:`form-control form-control-custom ${t.email?"is-invalid":""}`,value:C||"",onChange:a=>_(a.target.value),placeholder:"contoh@email.com"}),t.email&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.email)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fab fa-whatsapp me-1.5 text-success"})," Nomor WhatsApp / HP"),e.createElement("input",{type:"text",inputMode:"tel",className:`form-control form-control-custom ${t.phone?"is-invalid":""}`,value:$||"",onChange:a=>A(a.target.value.replace(/[^\d+]/g,"").slice(0,20)),placeholder:"Contoh: 081234567890..."}),t.phone&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.phone))),e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-indigo-500"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"3. Wilayah Organisasi & Status Keanggotaan")),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-landmark me-1.5 text-emerald-600"})," DPW (Provinsi) ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("select",{className:`form-select form-control-custom ${t.province_id?"is-invalid":""}`,value:d||"",onChange:a=>{K(a.target.value),x("")}},e.createElement("option",{value:""},"-- Pilih Wilayah DPW --"),(J||[]).map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.province_id&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.province_id)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-city me-1.5 text-indigo-600"})," DPC (Kota/Kab) ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("select",{className:`form-select form-control-custom ${t.city_id?"is-invalid":""}`,value:z||"",onChange:a=>x(a.target.value)},e.createElement("option",{value:""},"-- Pilih Cabang DPC --"),(q||[]).filter(a=>!d||String(a.province_id)===String(d)).map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.city_id&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.city_id)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-user-tag me-1.5 text-primary"})," Status Keanggotaan"),e.createElement("select",{className:`form-select form-control-custom ${t.status_anggota?"is-invalid":""}`,value:B||"",onChange:a=>I(a.target.value)},e.createElement("option",{value:""},"-- Pilih Status --"),e.createElement("option",{value:"Anggota Biasa"},"Anggota Biasa"),e.createElement("option",{value:"Anggota Luar Biasa"},"Anggota Luar Biasa"),e.createElement("option",{value:"Anggota Kehormatan"},"Anggota Kehormatan")),t.status_anggota&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.status_anggota)),e.createElement("div",{className:"col-12"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-map-marker-alt me-1.5 text-danger"})," Alamat Lengkap Domisili"),e.createElement("textarea",{className:`form-control form-control-custom-textarea ${t.alamat?"is-invalid":""}`,rows:3,value:R||"",onChange:a=>D(a.target.value),placeholder:"Ketik alamat lengkap domisili / tempat tinggal..."}),t.alamat&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.alamat))),e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-amber-500"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"4. Keamanan Akun & Kata Sandi ",e.createElement("span",{className:"text-slate-500 fw-normal text-lowercase"},"(kosongkan jika tidak ingin mengubah password)"))),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-key me-1.5 text-amber-600"})," Password Baru"),e.createElement("div",{className:"input-group"},e.createElement("input",{type:f?"text":"password",className:`form-control form-control-custom ${t.password?"is-invalid":""}`,value:n,onChange:a=>j(a.target.value),placeholder:"Ketik password baru jika ingin mengubah..."}),e.createElement("button",{type:"button",className:"btn btn-outline-secondary border-1 border-slate-300",style:{borderTopRightRadius:"10px",borderBottomRightRadius:"10px"},onClick:()=>Q(!f),title:f?"Sembunyikan password":"Lihat password"},e.createElement("i",{className:`fa ${f?"fa-eye-slash":"fa-eye"}`})),t.password&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.password))),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-1.5"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-0 text-uppercase"},e.createElement("i",{className:"fa fa-lock me-1.5 text-amber-600"})," Konfirmasi Password Baru"),n&&o&&e.createElement("span",{className:`badge ${n===o?"bg-success text-white":"bg-danger text-white"}`,style:{fontSize:"0.72rem"}},n===o?e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-check me-1"})," Cocok"):e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-times me-1"})," Belum Sama"))),e.createElement("div",{className:"input-group"},e.createElement("input",{type:p?"text":"password",className:`form-control form-control-custom ${n&&o&&n!==o?"is-invalid":""}`,value:o,onChange:a=>F(a.target.value),placeholder:"Ketik ulang password baru..."}),e.createElement("button",{type:"button",className:"btn btn-outline-secondary border-1 border-slate-300",style:{borderTopRightRadius:"10px",borderBottomRightRadius:"10px"},onClick:()=>V(!p),title:p?"Sembunyikan password":"Lihat password"},e.createElement("i",{className:`fa ${p?"fa-eye-slash":"fa-eye"}`}))))),e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-violet-600"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"5. Hak Akses & Peran Sistem (Roles)")),e.createElement("div",{className:"mb-4"},e.createElement("div",{className:"p-3.5 rounded-4 role-selection-box"},e.createElement("div",{className:"row g-2.5"},(O||[]).map(a=>{const r=h.includes(a.name);return e.createElement("div",{className:"col-6 col-sm-4 col-md-3 col-lg-2",key:a.id},e.createElement("div",{onClick:()=>X(a.name),className:`role-chip-card ${r?"role-chip-active":""} shadow-sm`},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("div",{className:`role-checkbox-circle ${r?"circle-active":""}`},r&&e.createElement("i",{className:"fa fa-check text-white"})),e.createElement("span",{className:"role-chip-label text-truncate"},a.name))))}))),t.roles&&e.createElement("div",{className:"text-danger small mt-2 fw-semibold"},e.createElement("i",{className:"fa fa-exclamation-circle me-1"}),t.roles)),e.createElement("div",{className:"d-flex align-items-center gap-2.5 pt-4 border-top"},e.createElement("button",{type:"submit",disabled:k,className:"btn btn-save-action shadow-sm"},k?e.createElement(e.Fragment,null,e.createElement("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),e.createElement("span",null,"Menyimpan...")):e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-save me-1.5"}),e.createElement("span",null,"Simpan Perubahan"))),e.createElement("button",{type:"reset",onClick:()=>{S(l.name||""),P(l.nik||""),_(l.email||""),A(l.phone||""),D(l.alamat||""),K(l.province_id||""),x(l.city_id||""),I(l.status_anggota||""),T((l.roles||[]).map(a=>a.name)),j(""),F(""),N(""),v(l.image?`/storage/users/${l.image}`:null),U(l.no_str||""),W(l.date_exprd||"")},className:"btn btn-reset-custom shadow-sm"},e.createElement("i",{className:"fa fa-undo me-1.5"}),e.createElement("span",null,"Reset Formulir"))))))),e.createElement("style",null,`
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

                /* Image Thumbnail Preview */
                .image-preview-thumbnail-wrap {
                    width: 60px;
                    height: 60px;
                    border-radius: 10px;
                    overflow: hidden;
                    border: 1.5px solid #cbd5e1;
                    background-color: #ffffff;
                }

                /* STR Status Badges */
                .badge-str-active {
                    background-color: #d1fae5;
                    color: #065f46;
                    border: 1px solid #a7f3d0;
                }
                .badge-str-warning {
                    background-color: #fef3c7;
                    color: #92400e;
                    border: 1px solid #fde68a;
                }
                .badge-str-expired {
                    background-color: #fee2e2;
                    color: #991b1b;
                    border: 1px solid #fecaca;
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
            `))}export{pe as default};
