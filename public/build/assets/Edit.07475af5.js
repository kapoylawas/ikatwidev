import{u as ne,r,R as e,H as oe,L as ie,d as ce}from"./app.2a34b780.js";import{L as me}from"./Account.16e5e82b.js";import{S as d}from"./sweetalert2.all.cccc1fb8.js";import"./Dropdown.2290b6d2.js";function xe(){var Z;const{errors:t,roles:J,provinces:q,cities:Q,user:l,auth:E}=ne().props,[_,B]=r.exports.useState(l.name||""),[i,$]=r.exports.useState(l.nik||""),[z,A]=r.exports.useState(l.email||""),[K,I]=r.exports.useState(l.phone||""),[R,D]=r.exports.useState(l.alamat||""),[f,F]=r.exports.useState(l.province_id||""),[T,N]=r.exports.useState(l.city_id||""),[j,L]=r.exports.useState(l.status_anggota||""),[v,W]=r.exports.useState((l.roles||[]).map(a=>a.name)),[n,M]=r.exports.useState(""),[o,U]=r.exports.useState(""),[p,X]=r.exports.useState(!1),[b,ee]=r.exports.useState(!1),w=(a=>!a||typeof a!="string"||a.endsWith("/storage/users")||a.endsWith("/storage/users/")?null:a.startsWith("http://")||a.startsWith("https://")||a.startsWith("/storage/")?a:`/storage/users/${a}`)(l.image),[c,k]=r.exports.useState(""),[u,y]=r.exports.useState(w),[S,g]=r.exports.useState(!1),[H,G]=r.exports.useState(l.no_str||""),[P,Y]=r.exports.useState(l.date_exprd||""),[C,O]=r.exports.useState(!1),V=((Z=E==null?void 0:E.user)==null?void 0:Z.id)===l.id,x=(a=>{if(!a)return null;const s=new Date;s.setHours(0,0,0,0);const h=new Date(a);if(isNaN(h.getTime()))return null;const se=h.getTime()-s.getTime(),m=Math.ceil(se/(1e3*60*60*24));return m<0?{label:`Sudah Kedaluwarsa (${Math.abs(m)} hari lalu)`,className:"badge-str-expired",icon:"fa-exclamation-triangle"}:m<=90?{label:`Segera Berakhir (${m} hari lagi)`,className:"badge-str-warning",icon:"fa-clock"}:{label:`STR Masih Berlaku (${m} hari tersisa)`,className:"badge-str-active",icon:"fa-check-circle"}})(P),ae=a=>{let s=[...v];if(s.includes(a)){if(V&&(a==="admin"||a==="super-admin")&&s.length<=1){d.fire({title:"Peringatan Akses!",text:"Anda tidak dapat menghapus seluruh hak akses admin dari akun Anda sendiri agar tidak terkunci.",icon:"warning"});return}s=s.filter(h=>h!==a)}else s.push(a);W(s)},te=a=>{const s=a.target.files[0];if(!!s){if(s.size>2*1024*1024){d.fire({title:"Ukuran Terlalu Besar!",text:"Ukuran berkas foto maksimal 2MB.",icon:"warning"}),a.target.value="";return}k(s),y(URL.createObjectURL(s)),g(!1)}},le=()=>{k(""),y(w),g(!1);const a=document.getElementById("profile-image-input");a&&(a.value="")},re=async a=>{if(a.preventDefault(),!C){if(n&&n!==o){d.fire({title:"Password Tidak Cocok!",text:"Konfirmasi password baru tidak sesuai dengan password yang dimasukkan.",icon:"warning"});return}O(!0),ce.Inertia.post(`/account/users/${l.id}`,{name:_,email:z,phone:K,nik:i,province_id:f,city_id:T,alamat:R,image:c,status_anggota:j,no_str:H,date_exprd:P,password:n,password_confirmation:o,roles:v,_method:"PUT"},{onFinish:()=>O(!1),onSuccess:()=>{d.fire({title:"Berhasil!",text:"Data pengguna berhasil diperbarui.",icon:"success",showConfirmButton:!1,timer:1500})},onError:()=>{d.fire({title:"Gagal!",text:"Periksa kembali isian formulir Anda.",icon:"error"})}})}};return e.createElement(me,null,e.createElement(oe,{title:`Edit User: ${l.name} - IKATWI`}),e.createElement("div",{className:"container-fluid py-4 user-edit-container"},e.createElement("div",{className:"header-banner-box p-4 rounded-4 mb-4 shadow-sm"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"header-icon-wrap me-3 shadow"},e.createElement("i",{className:"fa fa-user-edit fa-2x text-white"})),e.createElement("div",null,e.createElement("h4",{className:"mb-0 fw-bold header-main-title"},"Edit Data Pengguna"),e.createElement("p",{className:"header-subtitle mb-0 mt-1"},"Perbarui informasi profil akun, data STR, kontak aktif, penempatan wilayah (DPW/DPC), dan hak akses sistem."))),e.createElement("div",null,e.createElement(ie,{href:"/account/users",className:"btn btn-back-users rounded-pill px-4 py-2 fw-bold shadow-sm"},e.createElement("i",{className:"fa fa-arrow-left me-1.5 text-primary"}),e.createElement("span",null,"Kembali ke Daftar"))))),V&&e.createElement("div",{className:"alert alert-info border-0 shadow-sm rounded-4 mb-4 d-flex align-items-center gap-3 p-3.5"},e.createElement("div",{className:"alert-icon-box bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0",style:{width:40,height:40}},e.createElement("i",{className:"fa fa-user-shield"})),e.createElement("div",{className:"small"},e.createElement("strong",null,"Perhatian:")," Anda saat ini sedang mengedit data akun Anda sendiri. Pastikan peran hak akses (*role*) administrator tetap dicentang agar Anda tidak kehilangan akses kepengurusan sistem.")),e.createElement("div",{className:"card edit-form-card rounded-4 shadow-sm overflow-hidden mb-4"},e.createElement("div",{className:"card-header form-card-header py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2"},e.createElement("div",{className:"d-flex align-items-center gap-3"},e.createElement("span",{className:"card-icon-pill bg-blue-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-id-card text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-bold form-header-title"},"Formulir Perubahan Data Pengguna"),e.createElement("span",{className:"form-header-sub"},l.name," ",l.email?`\u2022 (${l.email})`:""))),l.no_anggota&&e.createElement("span",{className:"badge-no-anggota-pill shadow-sm"},e.createElement("i",{className:"fa fa-award me-1 text-emerald-600"}),"No. Anggota: ",e.createElement("strong",null,l.no_anggota))),e.createElement("div",{className:"card-body p-4 p-lg-5"},e.createElement("form",{onSubmit:re},e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-primary"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"1. Data Identitas, STR & Foto Profil")),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-md-6"},e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-1.5"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-0 text-uppercase"},e.createElement("i",{className:"fa fa-fingerprint me-1.5 text-primary"})," Nomor Induk Kependudukan (NIK)"),e.createElement("span",{className:`badge ${(i==null?void 0:i.length)===16?"bg-success text-white":"bg-slate-100 text-slate-600 border"}`,style:{fontSize:"0.72rem"}},i?`${i.length}/16 digit`:"0/16 digit")),e.createElement("input",{type:"text",inputMode:"numeric",maxLength:16,className:`form-control form-control-custom ${t.nik?"is-invalid":""}`,value:i||"",onChange:a=>$(a.target.value.replace(/\D/g,"").slice(0,16)),placeholder:"Ketik 16 digit NIK..."}),t.nik&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.nik)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-certificate me-1.5 text-emerald-600"})," Nomor STR"),e.createElement("input",{type:"text",className:`form-control form-control-custom ${t.no_str?"is-invalid":""}`,value:H||"",onChange:a=>G(a.target.value),placeholder:"Nomor Surat Tanda Registrasi..."}),t.no_str&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.no_str)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-1.5"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-0 text-uppercase"},e.createElement("i",{className:"fa fa-calendar-alt me-1.5 text-amber-600"})," Tanggal Kedaluwarsa STR"),x&&e.createElement("span",{className:`badge ${x.className} d-inline-flex align-items-center gap-1`,style:{fontSize:"0.72rem"}},e.createElement("i",{className:`fa ${x.icon}`}),e.createElement("span",null,x.label))),e.createElement("input",{type:"date",className:`form-control form-control-custom ${t.date_exprd?"is-invalid":""}`,value:P||"",onChange:a=>Y(a.target.value)}),t.date_exprd&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.date_exprd)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-900 mb-1.5 text-uppercase",style:{letterSpacing:"0.03em"}},e.createElement("i",{className:"fa fa-image me-1.5 text-primary"})," Foto Profil Pengguna"),e.createElement("div",{className:"profile-upload-card p-3 rounded-3"},e.createElement("div",{className:"d-flex align-items-center gap-3"},e.createElement("div",{className:"position-relative flex-shrink-0"},e.createElement("div",{className:"profile-avatar-box rounded-3 overflow-hidden d-flex align-items-center justify-content-center"},u&&!S?e.createElement("img",{src:u,alt:"Foto Profil",className:"w-100 h-100 object-fit-cover",onError:()=>g(!0)}):e.createElement("div",{className:"profile-avatar-fallback w-100 h-100 d-flex align-items-center justify-content-center"},e.createElement("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z",fill:"#1d4ed8"})))),c&&e.createElement("span",{className:"position-absolute bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow",style:{top:-6,right:-6,width:22,height:22,fontSize:"0.7rem",border:"2px solid #ffffff"},title:"Foto baru siap disimpan"},e.createElement("i",{className:"fa fa-check"}))),e.createElement("div",{className:"flex-grow-1 min-w-0"},e.createElement("div",{className:"d-flex flex-wrap align-items-center gap-2 mb-1.5"},e.createElement("label",{htmlFor:"profile-image-input",className:"btn btn-sm btn-select-photo px-3.5 py-1.5 rounded-pill fw-bold d-inline-flex align-items-center gap-1.5 cursor-pointer shadow-sm mb-0"},e.createElement("i",{className:"fa fa-camera text-white"}),e.createElement("span",null,c?"Ganti Berkas...":u&&!S?"Ubah Foto Profil...":"Pilih Foto Baru...")),c&&e.createElement("button",{type:"button",onClick:le,className:"btn btn-sm btn-outline-danger px-3 py-1.5 rounded-pill fw-bold d-inline-flex align-items-center gap-1 shadow-sm",title:"Batalkan pilihan foto baru"},e.createElement("i",{className:"fa fa-times"}),e.createElement("span",null,"Batal"))),c?e.createElement("div",{className:"small fw-bold text-success text-truncate d-flex align-items-center gap-1.5 mt-1"},e.createElement("i",{className:"fa fa-check-circle flex-shrink-0"}),e.createElement("span",{className:"text-truncate"},c.name),e.createElement("span",{className:"text-muted fw-normal"},"(",(c.size/1024).toFixed(0)," KB)")):e.createElement("div",{className:"small fw-semibold text-slate-800 d-flex align-items-center gap-1.5 mt-1"},u&&!S?e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-check-circle text-success flex-shrink-0 fs-6"}),e.createElement("span",null,"Foto profil saat ini terpasang")):e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-info-circle text-primary flex-shrink-0 fs-6"}),e.createElement("span",null,"Belum ada foto profil terpasang"))),e.createElement("div",{className:"text-muted mt-1",style:{fontSize:"0.74rem",fontWeight:500}},"Format: ",e.createElement("strong",{className:"text-dark"},"JPG, PNG, WEBP")," \u2022 Maks. ",e.createElement("strong",{className:"text-dark"},"2MB")),e.createElement("input",{id:"profile-image-input",type:"file",accept:"image/png, image/jpeg, image/jpg, image/webp",className:"d-none",onChange:te}),t.image&&e.createElement("div",{className:"text-danger small mt-1.5 fw-bold d-flex align-items-center gap-1"},e.createElement("i",{className:"fa fa-exclamation-circle"}),e.createElement("span",null,t.image))))))),e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-emerald-500"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"2. Profil Pengguna & Kontak Komunikasi")),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-user me-1.5 text-primary"})," Nama Lengkap & Gelar ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"text",className:`form-control form-control-custom ${t.name?"is-invalid":""}`,value:_||"",onChange:a=>B(a.target.value),placeholder:"Nama lengkap beserta gelar..."}),t.name&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.name)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-envelope me-1.5 text-primary"})," Alamat Email ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"email",className:`form-control form-control-custom ${t.email?"is-invalid":""}`,value:z||"",onChange:a=>A(a.target.value),placeholder:"contoh@email.com"}),t.email&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.email)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fab fa-whatsapp me-1.5 text-success"})," Nomor WhatsApp / HP"),e.createElement("input",{type:"text",inputMode:"tel",className:`form-control form-control-custom ${t.phone?"is-invalid":""}`,value:K||"",onChange:a=>I(a.target.value.replace(/[^\d+]/g,"").slice(0,20)),placeholder:"Contoh: 081234567890..."}),t.phone&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.phone))),e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-indigo-500"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"3. Wilayah Organisasi & Status Keanggotaan")),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-landmark me-1.5 text-emerald-600"})," DPW (Provinsi) ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("select",{className:`form-select form-control-custom ${t.province_id?"is-invalid":""}`,value:f||"",onChange:a=>{F(a.target.value),N("")}},e.createElement("option",{value:""},"-- Pilih Wilayah DPW --"),(q||[]).map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.province_id&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.province_id)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-city me-1.5 text-indigo-600"})," DPC (Kota/Kab) ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("select",{className:`form-select form-control-custom ${t.city_id?"is-invalid":""}`,value:T||"",onChange:a=>N(a.target.value)},e.createElement("option",{value:""},"-- Pilih Cabang DPC --"),(Q||[]).filter(a=>!f||String(a.province_id)===String(f)).map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.city_id&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.city_id)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-user-tag me-1.5 text-primary"})," Status Keanggotaan"),e.createElement("select",{className:`form-select form-control-custom ${t.status_anggota?"is-invalid":""}`,value:j||"",onChange:a=>L(a.target.value)},e.createElement("option",{value:""},"-- Pilih Status --"),e.createElement("option",{value:"Anggota Biasa"},"Anggota Biasa"),e.createElement("option",{value:"Anggota Luar Biasa"},"Anggota Luar Biasa"),e.createElement("option",{value:"Anggota Kehormatan"},"Anggota Kehormatan")),t.status_anggota&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.status_anggota)),e.createElement("div",{className:"col-12"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-map-marker-alt me-1.5 text-danger"})," Alamat Lengkap Domisili"),e.createElement("textarea",{className:`form-control form-control-custom-textarea ${t.alamat?"is-invalid":""}`,rows:3,value:R||"",onChange:a=>D(a.target.value),placeholder:"Ketik alamat lengkap domisili / tempat tinggal..."}),t.alamat&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.alamat))),e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-amber-500"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"4. Keamanan Akun & Kata Sandi ",e.createElement("span",{className:"text-slate-500 fw-normal text-lowercase"},"(kosongkan jika tidak ingin mengubah password)"))),e.createElement("div",{className:"row g-3 mb-4"},e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-1.5 text-uppercase"},e.createElement("i",{className:"fa fa-key me-1.5 text-amber-600"})," Password Baru"),e.createElement("div",{className:"input-group"},e.createElement("input",{type:p?"text":"password",className:`form-control form-control-custom ${t.password?"is-invalid":""}`,value:n,onChange:a=>M(a.target.value),placeholder:"Ketik password baru jika ingin mengubah..."}),e.createElement("button",{type:"button",className:"btn btn-outline-secondary border-1 border-slate-300",style:{borderTopRightRadius:"10px",borderBottomRightRadius:"10px"},onClick:()=>X(!p),title:p?"Sembunyikan password":"Lihat password"},e.createElement("i",{className:`fa ${p?"fa-eye-slash":"fa-eye"}`})),t.password&&e.createElement("div",{className:"invalid-feedback small mt-1"},t.password))),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-1.5"},e.createElement("label",{className:"form-label small fw-bold text-slate-800 mb-0 text-uppercase"},e.createElement("i",{className:"fa fa-lock me-1.5 text-amber-600"})," Konfirmasi Password Baru"),n&&o&&e.createElement("span",{className:`badge ${n===o?"bg-success text-white":"bg-danger text-white"}`,style:{fontSize:"0.72rem"}},n===o?e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-check me-1"})," Cocok"):e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-times me-1"})," Belum Sama"))),e.createElement("div",{className:"input-group"},e.createElement("input",{type:b?"text":"password",className:`form-control form-control-custom ${n&&o&&n!==o?"is-invalid":""}`,value:o,onChange:a=>U(a.target.value),placeholder:"Ketik ulang password baru..."}),e.createElement("button",{type:"button",className:"btn btn-outline-secondary border-1 border-slate-300",style:{borderTopRightRadius:"10px",borderBottomRightRadius:"10px"},onClick:()=>ee(!b),title:b?"Sembunyikan password":"Lihat password"},e.createElement("i",{className:`fa ${b?"fa-eye-slash":"fa-eye"}`}))))),e.createElement("div",{className:"form-section-title d-flex align-items-center gap-2 mb-3 pb-2 border-bottom"},e.createElement("span",{className:"section-dot bg-violet-600"}),e.createElement("h6",{className:"fw-bold mb-0 text-slate-800 text-uppercase",style:{letterSpacing:"0.04em",fontSize:"0.85rem"}},"5. Hak Akses & Peran Sistem (Roles)")),e.createElement("div",{className:"mb-4"},e.createElement("div",{className:"p-3.5 rounded-4 role-selection-box"},e.createElement("div",{className:"row g-2.5"},(J||[]).map(a=>{const s=v.includes(a.name);return e.createElement("div",{className:"col-6 col-sm-4 col-md-3 col-lg-2",key:a.id},e.createElement("div",{onClick:()=>ae(a.name),className:`role-chip-card ${s?"role-chip-active":""} shadow-sm`},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("div",{className:`role-checkbox-circle ${s?"circle-active":""}`},s&&e.createElement("i",{className:"fa fa-check text-white"})),e.createElement("span",{className:"role-chip-label text-truncate"},a.name))))}))),t.roles&&e.createElement("div",{className:"text-danger small mt-2 fw-semibold"},e.createElement("i",{className:"fa fa-exclamation-circle me-1"}),t.roles)),e.createElement("div",{className:"d-flex align-items-center gap-2.5 pt-4 border-top"},e.createElement("button",{type:"submit",disabled:C,className:"btn btn-save-action shadow-sm"},C?e.createElement(e.Fragment,null,e.createElement("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),e.createElement("span",null,"Menyimpan...")):e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-save me-1.5"}),e.createElement("span",null,"Simpan Perubahan"))),e.createElement("button",{type:"reset",onClick:()=>{B(l.name||""),$(l.nik||""),A(l.email||""),I(l.phone||""),D(l.alamat||""),F(l.province_id||""),N(l.city_id||""),L(l.status_anggota||""),W((l.roles||[]).map(a=>a.name)),M(""),U(""),k(""),y(w),g(!1),G(l.no_str||""),Y(l.date_exprd||"")},className:"btn btn-reset-custom shadow-sm"},e.createElement("i",{className:"fa fa-undo me-1.5"}),e.createElement("span",null,"Reset Formulir"))))))),e.createElement("style",null,`
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

                /* Profile Photo Upload Card - Tajam & Kontras Tinggi */
                .profile-upload-card {
                    background: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    border-left: 4px solid #2563eb;
                    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
                    transition: all 0.2s ease;
                }
                .profile-upload-card:hover {
                    border-color: #94a3b8;
                    border-left-color: #1d4ed8;
                    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
                }
                .profile-avatar-box {
                    width: 74px;
                    height: 74px;
                    border-radius: 16px;
                    border: 2px solid #3b82f6;
                    background-color: #eff6ff;
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.12);
                }
                .profile-avatar-fallback {
                    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                }
                .btn-select-photo {
                    background: #2563eb;
                    border: 1px solid #1d4ed8;
                    color: #ffffff !important;
                    font-size: 0.82rem;
                    letter-spacing: 0.01em;
                    transition: all 0.2s ease;
                }
                .btn-select-photo:hover {
                    background: #1d4ed8;
                    border-color: #1e40af;
                    color: #ffffff !important;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 10px rgba(37, 99, 235, 0.35);
                }
                .cursor-pointer {
                    cursor: pointer;
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
            `))}export{xe as default};
