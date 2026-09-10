import{u as C,r as n,R as e,H as S,L as g,d as P}from"./app.495843f8.js";import{L as D}from"./Account.1665c6b2.js";import{S as L}from"./sweetalert2.all.3e758498.js";import"./Dropdown.30a41e0a.js";function M(){var f;const{errors:a,areadpc:l,city:s}=C().props,[r,E]=n.exports.useState(l.city_id||""),[m,x]=n.exports.useState(l.alamat||""),[o,h]=n.exports.useState(l.link||""),[c,N]=n.exports.useState(l.phone||""),[i,v]=n.exports.useState(l.email||""),[d,k]=n.exports.useState(l.instagram||""),[p,y]=n.exports.useState(l.name_ketua||""),[u,b]=n.exports.useState(!1),w=async t=>{t.preventDefault(),b(!0),P.Inertia.put(`/account/areadpc/${l.id}`,{city_id:r,alamat:m,link:o,phone:c,email:i,instagram:d,name_ketua:p},{onSuccess:()=>{L.fire({title:"Perubahan Disimpan!",text:"Data Wilayah DPC berhasil diperbarui.",icon:"success",showConfirmButton:!1,timer:2e3})},onFinish:()=>b(!1)})};return e.createElement(e.Fragment,null,e.createElement(S,null,e.createElement("title",null,"Edit Wilayah DPC - IKATWI")),e.createElement(D,null,e.createElement("div",{className:"container-fluid py-4 form-page-container"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm border-0 header-banner-box"},e.createElement("div",{className:"d-flex align-items-center mb-3 mb-md-0"},e.createElement("div",{className:"header-icon-square-dpc me-3 shadow"},e.createElement("i",{className:"fa fa-pencil-alt fa-2x text-white"})),e.createElement("div",null,e.createElement("h4",{className:"mb-1 fw-bold text-dark-title",style:{letterSpacing:"-0.02em"}},"Edit Data Wilayah DPC"),e.createElement("p",{className:"mb-0 text-slate-muted small"},"Perbarui data cabang kota/kabupaten, ketua pengurus, kontak, dan link peta Google Maps."))),e.createElement("div",null,e.createElement(g,{href:"/account/areadpc",className:"btn btn-outline-secondary rounded-pill px-4 py-2 fw-semibold shadow-sm"},e.createElement("i",{className:"fa fa-arrow-left me-2"}),"Kembali ke Daftar"))),e.createElement("div",{className:"card border-0 rounded-4 shadow-sm bg-white overflow-hidden form-card-box-dpc"},e.createElement("div",{className:"card-header bg-white py-3 px-4 border-bottom d-flex align-items-center gap-2"},e.createElement("span",{className:"form-icon-pill-dpc shadow-sm"},e.createElement("i",{className:"fa fa-city text-blue-700"})),e.createElement("h5",{className:"mb-0 fw-bold text-slate-900 fs-6"},"Edit Wilayah DPC: ",((f=l.city)==null?void 0:f.name)||"Wilayah DPC")),e.createElement("div",{className:"card-body p-4 p-md-5"},e.createElement("form",{onSubmit:w},e.createElement("div",{className:"row g-4"},e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Cabang DPC (Kota / Kabupaten) ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("select",{className:`form-select form-select-custom ${a.city_id?"is-invalid":""}`,value:r,onChange:t=>E(t.target.value)},e.createElement("option",{value:""},"-- Pilih Kota / Kabupaten DPC --"),s&&s.map(t=>e.createElement("option",{value:t.id,key:t.id},t.name))),a.city_id&&e.createElement("div",{className:"invalid-feedback"},a.city_id)),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Nama Ketua DPC ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"text",className:`form-control form-control-custom ${a.name_ketua?"is-invalid":""}`,value:p,onChange:t=>y(t.target.value),placeholder:"Contoh: Mutiaradewi Kusumawardani, AMd.TW"}),a.name_ketua&&e.createElement("div",{className:"invalid-feedback"},a.name_ketua)),e.createElement("div",{className:"col-12"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Alamat Lengkap Sekretariat ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("textarea",{rows:"3",className:`form-control form-control-custom ${a.alamat?"is-invalid":""}`,value:m,onChange:t=>x(t.target.value),placeholder:"Masukkan alamat lengkap sekretariat kantor DPC..."}),a.alamat&&e.createElement("div",{className:"invalid-feedback"},a.alamat)),e.createElement("div",{className:"col-12"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Link Embed / URL Google Maps ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"text",className:`form-control form-control-custom ${a.link?"is-invalid":""}`,value:o,onChange:t=>h(t.target.value),placeholder:"Contoh: https://maps.google.com/maps?q=-6.760282,111.014769&hl=id&output=embed"}),e.createElement("small",{className:"text-slate-500 d-block mt-1"},"Tips: Masukkan URL embed Google Maps atau link share koordinat lokasi."),a.link&&e.createElement("div",{className:"invalid-feedback"},a.link)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"No. Telepon / WhatsApp ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("div",{className:"input-group"},e.createElement("span",{className:"input-group-text bg-light text-slate-500 border-end-0"},e.createElement("i",{className:"fa fa-phone"})),e.createElement("input",{type:"text",className:`form-control form-control-custom border-start-0 ${a.phone?"is-invalid":""}`,value:c,onChange:t=>N(t.target.value),placeholder:"Contoh: 081234567890"})),a.phone&&e.createElement("div",{className:"text-danger small mt-1"},a.phone)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Email Resmi DPC ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("div",{className:"input-group"},e.createElement("span",{className:"input-group-text bg-light text-slate-500 border-end-0"},e.createElement("i",{className:"fa fa-envelope"})),e.createElement("input",{type:"email",className:`form-control form-control-custom border-start-0 ${a.email?"is-invalid":""}`,value:i,onChange:t=>v(t.target.value),placeholder:"Contoh: ikatwi.pati@gmail.com"})),a.email&&e.createElement("div",{className:"text-danger small mt-1"},a.email)),e.createElement("div",{className:"col-12 col-md-4"},e.createElement("label",{className:"form-label fw-bold text-slate-800 small mb-1"},"Akun Instagram ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("div",{className:"input-group"},e.createElement("span",{className:"input-group-text bg-light text-slate-500 border-end-0"},e.createElement("i",{className:"fab fa-instagram"})),e.createElement("input",{type:"text",className:`form-control form-control-custom border-start-0 ${a.instagram?"is-invalid":""}`,value:d,onChange:t=>k(t.target.value),placeholder:"Contoh: @ikatwipati atau link URL"})),a.instagram&&e.createElement("div",{className:"text-danger small mt-1"},a.instagram))),e.createElement("div",{className:"d-flex justify-content-end gap-2 mt-5 pt-3 border-top"},e.createElement(g,{href:"/account/areadpc",className:"btn btn-light rounded-pill px-4 py-2 fw-semibold"},"Batal"),e.createElement("button",{type:"submit",disabled:u,className:"btn btn-save-action-dpc rounded-pill px-5 py-2 fw-bold text-white shadow"},u?e.createElement(e.Fragment,null,e.createElement("span",{className:"spinner-border spinner-border-sm me-2"}),"Menyimpan..."):e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-save me-2"}),"Simpan Perubahan"))))))),e.createElement("style",null,`
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
                    .header-icon-square-dpc {
                        width: 52px;
                        height: 52px;
                        border-radius: 14px;
                        background: linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
                    }
                    .form-card-box-dpc {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #0284c7 !important;
                    }
                    .form-icon-pill-dpc {
                        width: 32px;
                        height: 32px;
                        border-radius: 8px;
                        background-color: #eff6ff;
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
                        border-color: #0284c7;
                        box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
                    }
                    .btn-save-action-dpc {
                        background: linear-gradient(135deg, #0284c7 0%, #1d4ed8 100%);
                        border: none;
                        transition: all 0.2s ease;
                    }
                    .btn-save-action-dpc:hover {
                        background: linear-gradient(135deg, #0369a1 0%, #1e40af 100%);
                        transform: translateY(-2px);
                    }
                `)))}export{M as default};
