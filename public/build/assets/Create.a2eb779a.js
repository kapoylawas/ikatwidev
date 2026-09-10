import{u as W,r as l,R as e,H as S,L as b,d as C}from"./app.ca209ed9.js";import{L as D}from"./Account.1954b82f.js";import{S as P}from"./sweetalert2.all.e56bc344.js";import"./Dropdown.47a5bb9d.js";function j(){const{wilayah:n,errors:t}=W().props,[r,g]=l.exports.useState(""),[s,x]=l.exports.useState(""),[m,h]=l.exports.useState(""),[o,E]=l.exports.useState(""),[c,v]=l.exports.useState(""),[i,N]=l.exports.useState(""),[d,w]=l.exports.useState(""),[p,y]=l.exports.useState(""),[u,f]=l.exports.useState(!1),k=async a=>{a.preventDefault(),f(!0),C.Inertia.post("/account/wilayah",{province_id:r,alamat:s,phone:m,email:o,instagram:c,name_ketua:i,lat:d,long:p},{onSuccess:()=>{P.fire({title:"Berhasil Disimpan!",text:"Data Wilayah DPW berhasil ditambahkan ke sistem.",icon:"success",showConfirmButton:!1,timer:2e3})},onFinish:()=>f(!1)})};return e.createElement(e.Fragment,null,e.createElement(S,null,e.createElement("title",null,"Tambah Wilayah DPW - IKATWI")),e.createElement(D,null,e.createElement("div",{className:"container-fluid py-4 form-page-container"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm border-0 header-banner-box"},e.createElement("div",{className:"d-flex align-items-center mb-3 mb-md-0"},e.createElement("div",{className:"header-icon-square me-3 shadow"},e.createElement("i",{className:"fa fa-plus-circle fa-2x text-white"})),e.createElement("div",null,e.createElement("h4",{className:"mb-1 fw-bold text-dark-title",style:{letterSpacing:"-0.02em"}},"Tambah Wilayah DPW Baru"),e.createElement("p",{className:"mb-0 text-slate-muted small"},"Lengkapi data sekretariat, pimpinan pengurus wilayah, kontak, dan koordinat peta."))),e.createElement("div",null,e.createElement(b,{href:"/account/wilayah",className:"btn btn-outline-secondary rounded-pill px-4 py-2 fw-semibold shadow-sm"},e.createElement("i",{className:"fa fa-arrow-left me-2"}),"Kembali ke Daftar"))),e.createElement("div",{className:"card border-0 rounded-4 shadow-sm bg-white overflow-hidden form-card-box"},e.createElement("div",{className:"card-header bg-white py-3 px-4 border-bottom d-flex align-items-center gap-2"},e.createElement("span",{className:"form-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-landmark text-emerald-700"})),e.createElement("h5",{className:"mb-0 fw-bold text-slate-900 fs-6"},"Formulir Data Wilayah DPW")),e.createElement("div",{className:"card-body p-4 p-md-5"},e.createElement("form",{onSubmit:k},e.createElement("div",{className:"row g-4"},e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Wilayah DPW (Provinsi) ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("select",{className:`form-select form-select-custom ${t.province_id?"is-invalid":""}`,value:r,onChange:a=>g(a.target.value)},e.createElement("option",{value:""},"-- Pilih Provinsi DPW --"),n&&n.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.province_id&&e.createElement("div",{className:"invalid-feedback"},t.province_id)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Nama Ketua DPW ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"text",className:`form-control form-control-custom ${t.name_ketua?"is-invalid":""}`,value:i,onChange:a=>N(a.target.value),placeholder:"Contoh: Wasis Juni Ardhi, A.Md.TW"}),t.name_ketua&&e.createElement("div",{className:"invalid-feedback"},t.name_ketua)),e.createElement("div",{className:"col-12"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Alamat Lengkap Sekretariat ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("textarea",{rows:"3",className:`form-control form-control-custom ${t.alamat?"is-invalid":""}`,value:s,onChange:a=>x(a.target.value),placeholder:"Masukkan alamat lengkap sekretariat kantor DPW..."}),t.alamat&&e.createElement("div",{className:"invalid-feedback"},t.alamat)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"No. Telepon / WhatsApp ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("div",{className:"input-group"},e.createElement("span",{className:"input-group-text bg-light text-slate-500 border-end-0"},e.createElement("i",{className:"fa fa-phone"})),e.createElement("input",{type:"text",className:`form-control form-control-custom border-start-0 ${t.phone?"is-invalid":""}`,value:m,onChange:a=>h(a.target.value),placeholder:"Contoh: 081234567890"})),t.phone&&e.createElement("div",{className:"text-danger small mt-1"},t.phone)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Email Resmi DPW ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("div",{className:"input-group"},e.createElement("span",{className:"input-group-text bg-light text-slate-500 border-end-0"},e.createElement("i",{className:"fa fa-envelope"})),e.createElement("input",{type:"email",className:`form-control form-control-custom border-start-0 ${t.email?"is-invalid":""}`,value:o,onChange:a=>E(a.target.value),placeholder:"Contoh: ikatwidpwjatim@gmail.com"})),t.email&&e.createElement("div",{className:"text-danger small mt-1"},t.email)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Akun Instagram ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("div",{className:"input-group"},e.createElement("span",{className:"input-group-text bg-light text-slate-500 border-end-0"},e.createElement("i",{className:"fab fa-instagram"})),e.createElement("input",{type:"text",className:`form-control form-control-custom border-start-0 ${t.instagram?"is-invalid":""}`,value:c,onChange:a=>v(a.target.value),placeholder:"Contoh: @ikatwidpwjatim atau link URL"})),t.instagram&&e.createElement("div",{className:"text-danger small mt-1"},t.instagram)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Latitude (Garis Lintang)"),e.createElement("input",{type:"text",className:"form-control form-control-custom",value:d,onChange:a=>w(a.target.value),placeholder:"Contoh: -7.308627"})),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Longitude (Garis Bujur)"),e.createElement("input",{type:"text",className:"form-control form-control-custom",value:p,onChange:a=>y(a.target.value),placeholder:"Contoh: 112.739561"}))),e.createElement("div",{className:"d-flex justify-content-end gap-2 mt-5 pt-3 border-top"},e.createElement(b,{href:"/account/wilayah",className:"btn btn-light rounded-pill px-4 py-2 fw-semibold"},"Batal"),e.createElement("button",{type:"submit",disabled:u,className:"btn btn-save-action rounded-pill px-5 py-2 fw-bold text-white shadow"},u?e.createElement(e.Fragment,null,e.createElement("span",{className:"spinner-border spinner-border-sm me-2"}),"Menyimpan..."):e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-save me-2"}),"Simpan Data Wilayah"))))))),e.createElement("style",null,`
                    .form-page-container {
                        animation: fadeIn 0.25s ease-in-out;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(6px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

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
                    .form-card-box {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #059669 !important;
                    }
                    .form-icon-pill {
                        width: 32px;
                        height: 32px;
                        border-radius: 8px;
                        background-color: #ecfdf5;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                    }
                    .form-control-custom, .form-select-custom {
                        border-radius: 10px;
                        border: 1.5px solid #cbd5e1;
                        padding: 10px 14px;
                        font-size: 0.9rem;
                        color: #0f172a;
                    }
                    .form-control-custom:focus, .form-select-custom:focus {
                        border-color: #059669;
                        box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);
                    }
                    .btn-save-action {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        border: none;
                        transition: all 0.2s ease;
                    }
                    .btn-save-action:hover {
                        background: linear-gradient(135deg, #047857 0%, #064e3b 100%);
                        transform: translateY(-2px);
                    }
                `)))}export{j as default};
