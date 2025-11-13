import{u as F,r as l,R as e,H as L,L as b,d as _}from"./app.809e6923.js";import{S as T}from"./sweetalert2.all.ce49ca05.js";import{a as j}from"./index.3898a24e.js";function H(){const{errors:t,provinces:u}=F().props,[c,E]=l.exports.useState(""),[m,v]=l.exports.useState(""),[o,k]=l.exports.useState(""),[d,N]=l.exports.useState(""),[f,h]=l.exports.useState(""),[p,w]=l.exports.useState(""),[g,x]=l.exports.useState(""),[y,C]=l.exports.useState(""),[S,A]=l.exports.useState(""),[I,P]=l.exports.useState([]),[s,z]=l.exports.useState(!1),[r,n]=l.exports.useState(!1),D="https://wa.me/6285752145518",K=()=>{z(!s)},R=async a=>{x(a),j.get(`/register/cities?province_id=${a}`).then(i=>{P(i.data)})},M=a=>{C(a)},$=async a=>{a.preventDefault(),n(!0),_.Inertia.post("/register",{name:c,nik:m,province_id:g,city_id:y,email:o,alamat:d,filepakta:S,password:f,password_confirmation:p},{onSuccess:()=>{T.fire({title:"Success!",text:"Register saved successfully!",icon:"success",showConfirmButton:!1,timer:1500}),n(!1)},onError:()=>{n(!1)}})};return e.createElement(e.Fragment,null,e.createElement(L,null,e.createElement("title",null,"Register Akun - IKATWI")),e.createElement("div",{className:"min-vh-100 d-flex align-items-center justify-content-center background-ikatwi"},e.createElement("div",{className:"container"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-8 col-lg-6"},e.createElement("div",{className:"text-center mb-4"},e.createElement(b,{href:"/",className:"text-decoration-none"},e.createElement("div",{className:"d-flex align-items-center justify-content-center mb-3"},e.createElement("img",{src:"/assets/images/logo.png",width:"70",alt:"IKATWI Logo",className:"img-fluid"})),e.createElement("h2",{className:"text-white fw-bold"},"IKATWI")),e.createElement("p",{className:"text-white-50"},"Daftar Akun Anggota Baru")),e.createElement("div",{className:"card shadow-lg border-0 rounded-3 glass-effect"},e.createElement("div",{className:"card-header ikatwi-header text-white text-center py-3 border-0 rounded-top-3"},e.createElement("h5",{className:"mb-0 fw-bold"},"\u{1F4DD} REGISTER AKUN ANGGOTA")),e.createElement("div",{className:"card-body p-4"},e.createElement("div",{className:"alert alert-info border-0 shadow-sm mb-4"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"flex-shrink-0"},e.createElement("i",{className:"fas fa-info-circle fa-lg"})),e.createElement("div",{className:"flex-grow-1 ms-3"},e.createElement("small",null,"Setelah Register silahkan menghubungi"," ",e.createElement("a",{target:"_blank",href:D,className:"alert-link fw-bold"},"Admin (085752145518)")," ","untuk verifikasi akun")))),e.createElement("form",{onSubmit:$},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-semibold text-dark"},e.createElement("i",{className:"fas fa-id-card me-2"}),"NIK (Nomor Induk Kependudukan)"),e.createElement("input",{type:"text",className:`form-control form-control-lg ${t.nik?"is-invalid":""}`,value:m,onChange:a=>v(a.target.value),placeholder:"Masukkan 16 digit NIK",maxLength:16}),t.nik&&e.createElement("div",{className:"invalid-feedback"},t.nik)),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6 mb-3"},e.createElement("label",{className:"form-label fw-semibold text-dark"},e.createElement("i",{className:"fas fa-user me-2"}),"Nama Lengkap"),e.createElement("input",{type:"text",className:`form-control ${t.name?"is-invalid":""}`,value:c,onChange:a=>E(a.target.value),placeholder:"Nama lengkap sesuai KTP"}),t.name&&e.createElement("div",{className:"invalid-feedback"},t.name)),e.createElement("div",{className:"col-md-6 mb-3"},e.createElement("label",{className:"form-label fw-semibold text-dark"},e.createElement("i",{className:"fas fa-envelope me-2"}),"Alamat Email"),e.createElement("input",{type:"email",className:`form-control ${t.email?"is-invalid":""}`,value:o,onChange:a=>k(a.target.value),placeholder:"email@example.com"}),t.email&&e.createElement("div",{className:"invalid-feedback"},t.email))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6 mb-3"},e.createElement("label",{className:"form-label fw-semibold text-dark"},e.createElement("i",{className:"fas fa-map-marker-alt me-2"}),"DPW (Provinsi)"),e.createElement("select",{className:`form-select ${t.province_id?"is-invalid":""}`,value:g,onChange:a=>R(a.target.value)},e.createElement("option",{value:""},"-- Pilih DPW --"),u.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.province_id&&e.createElement("div",{className:"invalid-feedback"},t.province_id)),e.createElement("div",{className:"col-md-6 mb-3"},e.createElement("label",{className:"form-label fw-semibold text-dark"},e.createElement("i",{className:"fas fa-map-marker me-2"}),"DPC (Kota/Kabupaten)"),e.createElement("select",{className:`form-select ${t.city_id?"is-invalid":""}`,onChange:a=>M(a.target.value)},e.createElement("option",{value:""},"-- Pilih DPC --"),I.map((a,i)=>e.createElement("option",{key:i,value:a.id},a.name))),t.city_id&&e.createElement("div",{className:"invalid-feedback"},t.city_id))),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-semibold text-dark"},e.createElement("i",{className:"fas fa-home me-2"}),"Alamat Lengkap"),e.createElement("textarea",{className:`form-control ${t.alamat?"is-invalid":""}`,value:d,onChange:a=>N(a.target.value),placeholder:"Alamat lengkap tempat tinggal",rows:"3"}),t.alamat&&e.createElement("div",{className:"invalid-feedback"},t.alamat)),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-semibold text-dark"},e.createElement("i",{className:"fas fa-file-pdf me-2"}),"Upload Pakta Integritas"),e.createElement("div",{className:"file-upload-wrapper"},e.createElement("input",{type:"file",className:`form-control ${t.filepakta?"is-invalid":""}`,accept:".pdf",onChange:a=>A(a.target.files[0])}),e.createElement("small",{className:"form-text text-muted"},"Format: PDF | Maksimal: 2MB")),t.filepakta&&e.createElement("div",{className:"invalid-feedback d-block"},t.filepakta)),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6 mb-3"},e.createElement("label",{className:"form-label fw-semibold text-dark"},e.createElement("i",{className:"fas fa-lock me-2"}),"Password"),e.createElement("input",{type:"password",className:`form-control ${t.password?"is-invalid":""}`,value:f,onChange:a=>h(a.target.value),placeholder:"Minimal 8 karakter"}),t.password&&e.createElement("div",{className:"invalid-feedback"},t.password)),e.createElement("div",{className:"col-md-6 mb-3"},e.createElement("label",{className:"form-label fw-semibold text-dark"},e.createElement("i",{className:"fas fa-lock me-2"}),"Konfirmasi Password"),e.createElement("input",{type:"password",className:"form-control",value:p,onChange:a=>w(a.target.value),placeholder:"Ulangi password"}))),e.createElement("div",{className:"mb-4"},e.createElement("div",{className:"form-check"},e.createElement("input",{className:"form-check-input",type:"checkbox",checked:s,onChange:K,id:"agreementCheck"}),e.createElement("label",{className:"form-check-label text-muted",htmlFor:"agreementCheck"},"Saya menyatakan bahwa data yang diisi adalah benar dan siap bertanggung jawab atas keabsahan data tersebut"))),e.createElement("button",{className:`btn btn-ikatwi btn-lg rounded-2 px-5 w-100 fw-semibold shadow-sm ${s?"":"disabled"} ${r?"loading":""}`,type:"submit",disabled:!s||r},r?e.createElement(e.Fragment,null,e.createElement("div",{className:"spinner-border spinner-border-sm me-2",role:"status"},e.createElement("span",{className:"visually-hidden"},"Loading...")),"PROSES DAFTAR..."):e.createElement(e.Fragment,null,e.createElement("i",{className:"fas fa-user-plus me-2"}),"DAFTAR SEKARANG"))),e.createElement("div",{className:"text-center mt-4"},e.createElement("p",{className:"text-muted mb-0"},"Sudah punya akun?"," ",e.createElement(b,{href:"/login",className:"text-ikatwi fw-semibold text-decoration-none"},"Login di sini!"))))))))),e.createElement("style",{jsx:!0},`
                .background-ikatwi {
                    background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
                    position: relative;
                    overflow: hidden;
                    padding: 2rem 0;
                }
                
                .background-ikatwi::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
                }
                
                .glass-effect {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                .ikatwi-header {
                    background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
                }
                
                .btn-ikatwi {
                    background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
                    border: none;
                    color: white;
                    transition: all 0.3s ease;
                    padding: 12px 24px;
                    position: relative;
                    overflow: hidden;
                }
                
                .btn-ikatwi:hover:not(:disabled) {
                    background: linear-gradient(135deg, #234325 0%, #3d6a4a 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(44, 85, 48, 0.4);
                    color: white;
                }
                
                .btn-ikatwi:disabled {
                    background: #6c757d;
                    cursor: not-allowed;
                    transform: none;
                }
                
                .btn-ikatwi.loading {
                    background: linear-gradient(135deg, #234325 0%, #3d6a4a 100%);
                    cursor: wait;
                }
                
                .text-ikatwi {
                    color: #2c5530 !important;
                }
                
                .text-ikatwi:hover {
                    color: #234325 !important;
                }
                
                .form-control, .form-select {
                    border: 1px solid #e2e8f0;
                    padding: 12px 16px;
                    transition: all 0.3s ease;
                }
                
                .form-control:focus, .form-select:focus {
                    border-color: #2c5530;
                    box-shadow: 0 0 0 0.2rem rgba(44, 85, 48, 0.25);
                }
                
                .form-control-lg {
                    padding: 16px;
                }
                
                .file-upload-wrapper {
                    position: relative;
                }
                
                .alert-info {
                    background: rgba(13, 202, 240, 0.1);
                    border: 1px solid rgba(13, 202, 240, 0.2);
                }
                
                .spinner-border-sm {
                    width: 1rem;
                    height: 1rem;
                }
            `))}export{H as default};
