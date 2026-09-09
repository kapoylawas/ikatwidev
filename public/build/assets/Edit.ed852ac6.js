import{u as S,r as n,R as e,H as C,L as x,d as D}from"./app.20c9578f.js";import{L}from"./Account.153ed520.js";import{S as _}from"./sweetalert2.all.70431730.js";import"./Dropdown.82a09e0f.js";function F(){var g;const{errors:t,wilayah:l,provinces:r}=S().props,[s,E]=n.exports.useState(l.province_id||""),[m,h]=n.exports.useState(l.alamat||""),[o,v]=n.exports.useState(l.phone||""),[c,N]=n.exports.useState(l.email||""),[i,w]=n.exports.useState(l.instagram||""),[d,y]=n.exports.useState(l.name_ketua||""),[p,k]=n.exports.useState(l.lat||""),[u,W]=n.exports.useState(l.long||""),[f,b]=n.exports.useState(!1),P=async a=>{a.preventDefault(),b(!0),D.Inertia.put(`/account/wilayah/${l.id}`,{province_id:s,alamat:m,phone:o,email:c,instagram:i,name_ketua:d,lat:p,long:u},{onSuccess:()=>{_.fire({title:"Perubahan Disimpan!",text:"Data Wilayah DPW berhasil diperbarui.",icon:"success",showConfirmButton:!1,timer:2e3})},onFinish:()=>b(!1)})};return e.createElement(e.Fragment,null,e.createElement(C,null,e.createElement("title",null,"Edit Wilayah DPW - IKATWI")),e.createElement(L,null,e.createElement("div",{className:"container-fluid py-4 form-page-container"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm border-0 header-banner-box"},e.createElement("div",{className:"d-flex align-items-center mb-3 mb-md-0"},e.createElement("div",{className:"header-icon-square me-3 shadow"},e.createElement("i",{className:"fa fa-pencil-alt fa-2x text-white"})),e.createElement("div",null,e.createElement("h4",{className:"mb-1 fw-bold text-dark-title",style:{letterSpacing:"-0.02em"}},"Edit Data Wilayah DPW"),e.createElement("p",{className:"mb-0 text-slate-muted small"},"Perbarui rincian sekretariat, kontak, ketua, dan titik lokasi koordinat peta."))),e.createElement("div",null,e.createElement(x,{href:"/account/wilayah",className:"btn btn-outline-secondary rounded-pill px-4 py-2 fw-semibold shadow-sm"},e.createElement("i",{className:"fa fa-arrow-left me-2"}),"Kembali ke Daftar"))),e.createElement("div",{className:"card border-0 rounded-4 shadow-sm bg-white overflow-hidden form-card-box"},e.createElement("div",{className:"card-header bg-white py-3 px-4 border-bottom d-flex align-items-center gap-2"},e.createElement("span",{className:"form-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-landmark text-emerald-700"})),e.createElement("h5",{className:"mb-0 fw-bold text-slate-900 fs-6"},"Edit Wilayah DPW: ",((g=l.province)==null?void 0:g.name)||"Wilayah")),e.createElement("div",{className:"card-body p-4 p-md-5"},e.createElement("form",{onSubmit:P},e.createElement("div",{className:"row g-4"},e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Wilayah DPW (Provinsi) ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("select",{className:`form-select form-select-custom ${t.province_id?"is-invalid":""}`,value:s,onChange:a=>E(a.target.value)},e.createElement("option",{value:""},"-- Pilih Provinsi DPW --"),r&&r.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.province_id&&e.createElement("div",{className:"invalid-feedback"},t.province_id)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Nama Ketua DPW ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"text",className:`form-control form-control-custom ${t.name_ketua?"is-invalid":""}`,value:d,onChange:a=>y(a.target.value),placeholder:"Contoh: Wasis Juni Ardhi, A.Md.TW"}),t.name_ketua&&e.createElement("div",{className:"invalid-feedback"},t.name_ketua)),e.createElement("div",{className:"col-12"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Alamat Lengkap Sekretariat ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("textarea",{rows:"3",className:`form-control form-control-custom ${t.alamat?"is-invalid":""}`,value:m,onChange:a=>h(a.target.value),placeholder:"Masukkan alamat lengkap sekretariat kantor DPW..."}),t.alamat&&e.createElement("div",{className:"invalid-feedback"},t.alamat)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"No. Telepon / WhatsApp ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("div",{className:"input-group"},e.createElement("span",{className:"input-group-text bg-light text-slate-500 border-end-0"},e.createElement("i",{className:"fa fa-phone"})),e.createElement("input",{type:"text",className:`form-control form-control-custom border-start-0 ${t.phone?"is-invalid":""}`,value:o,onChange:a=>v(a.target.value),placeholder:"Contoh: 081234567890"})),t.phone&&e.createElement("div",{className:"text-danger small mt-1"},t.phone)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Email Resmi DPW ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("div",{className:"input-group"},e.createElement("span",{className:"input-group-text bg-light text-slate-500 border-end-0"},e.createElement("i",{className:"fa fa-envelope"})),e.createElement("input",{type:"email",className:`form-control form-control-custom border-start-0 ${t.email?"is-invalid":""}`,value:c,onChange:a=>N(a.target.value),placeholder:"Contoh: ikatwidpwjatim@gmail.com"})),t.email&&e.createElement("div",{className:"text-danger small mt-1"},t.email)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Akun Instagram ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("div",{className:"input-group"},e.createElement("span",{className:"input-group-text bg-light text-slate-500 border-end-0"},e.createElement("i",{className:"fab fa-instagram"})),e.createElement("input",{type:"text",className:`form-control form-control-custom border-start-0 ${t.instagram?"is-invalid":""}`,value:i,onChange:a=>w(a.target.value),placeholder:"Contoh: @ikatwidpwjatim atau link URL"})),t.instagram&&e.createElement("div",{className:"text-danger small mt-1"},t.instagram)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Latitude (Garis Lintang)"),e.createElement("input",{type:"text",className:"form-control form-control-custom",value:p,onChange:a=>k(a.target.value),placeholder:"Contoh: -7.308627"})),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Longitude (Garis Bujur)"),e.createElement("input",{type:"text",className:"form-control form-control-custom",value:u,onChange:a=>W(a.target.value),placeholder:"Contoh: 112.739561"}))),e.createElement("div",{className:"d-flex justify-content-end gap-2 mt-5 pt-3 border-top"},e.createElement(x,{href:"/account/wilayah",className:"btn btn-light rounded-pill px-4 py-2 fw-semibold"},"Batal"),e.createElement("button",{type:"submit",disabled:f,className:"btn btn-save-action rounded-pill px-5 py-2 fw-bold text-white shadow"},f?e.createElement(e.Fragment,null,e.createElement("span",{className:"spinner-border spinner-border-sm me-2"}),"Menyimpan..."):e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-save me-2"}),"Simpan Perubahan"))))))),e.createElement("style",null,`
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
                `)))}export{F as default};
