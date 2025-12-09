import{u as g,r,R as e,H as f,L as i,d as b}from"./app.19300427.js";import{S as u}from"./sweetalert2.all.1ecb69f7.js";function N(){const{errors:t}=g().props,[l,o]=r.exports.useState(""),[c,m]=r.exports.useState(""),[s,n]=r.exports.useState(!1),d=async a=>{a.preventDefault(),n(!0),b.Inertia.post("/resetPassword",{no_anggota:c,nik:l},{onSuccess:()=>{u.fire({title:"Success!",text:"Password berhasil direset!",icon:"success",showConfirmButton:!1,timer:1500}),n(!1)},onError:()=>{n(!1)}})};return e.createElement(e.Fragment,null,e.createElement(f,null,e.createElement("title",null,"Forgot Password - IKATWI")),e.createElement("div",{className:"min-vh-100 d-flex align-items-center justify-content-center background-ikatwi"},e.createElement("div",{className:"container"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-6 col-lg-5"},e.createElement("div",{className:"text-center mb-4"},e.createElement(i,{href:"/",className:"text-decoration-none"},e.createElement("div",{className:"d-flex align-items-center justify-content-center mb-3"},e.createElement("img",{src:"/assets/images/logo.png",width:"70",alt:"IKATWI Logo",className:"img-fluid"})),e.createElement("h2",{className:"text-white fw-bold"},"IKATWI")),e.createElement("p",{className:"text-white-50"},"Reset Password Anggota")),e.createElement("div",{className:"card border-0 rounded-3 shadow-sm mb-4 info-card"},e.createElement("div",{className:"card-body p-4"},e.createElement("div",{className:"text-center"},e.createElement("h6",{className:"fw-bold text-success mb-3"},e.createElement("i",{className:"fas fa-info-circle me-2"}),"INFORMASI RESET PASSWORD"),e.createElement("div",{className:"info-steps"},e.createElement("div",{className:"step-item d-flex align-items-start mb-3"},e.createElement("div",{className:"step-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"},e.createElement("span",{className:"fw-bold"},"1")),e.createElement("div",{className:"step-content text-start"},e.createElement("p",{className:"mb-0 text-muted"},"Masukkan data ",e.createElement("strong",null,"NIK")," dan ",e.createElement("strong",null,"No Anggota/KTA")," dengan benar"))),e.createElement("div",{className:"step-item d-flex align-items-start"},e.createElement("div",{className:"step-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"},e.createElement("span",{className:"fw-bold"},"2")),e.createElement("div",{className:"step-content text-start"},e.createElement("p",{className:"mb-0 text-muted"},"Password akan direset menjadi ",e.createElement("strong",null,"NIK Anda")))))))),e.createElement("div",{className:"card shadow-lg border-0 rounded-3 glass-effect"},e.createElement("div",{className:"card-header ikatwi-header text-white text-center py-3 border-0 rounded-top-3"},e.createElement("h5",{className:"mb-0 fw-bold"},"\u{1F510} RESET PASSWORD ANGGOTA")),e.createElement("div",{className:"card-body p-4"},t.meta&&e.createElement("div",{className:"alert alert-danger border-0 shadow-sm mb-4"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"flex-shrink-0"},e.createElement("i",{className:"fas fa-exclamation-triangle"})),e.createElement("div",{className:"flex-grow-1 ms-3"},e.createElement("small",{className:"fw-semibold"},t.meta)))),e.createElement("form",{onSubmit:d},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-semibold text-dark"},e.createElement("i",{className:"fas fa-id-card me-2"}),"NIK (Nomor Induk Kependudukan)"),e.createElement("input",{type:"text",className:`form-control ${t.nik?"is-invalid":""}`,value:l,onChange:a=>o(a.target.value),placeholder:"Masukkan 16 digit NIK",maxLength:16}),t.nik&&e.createElement("div",{className:"invalid-feedback"},t.nik)),e.createElement("div",{className:"mb-4"},e.createElement("label",{className:"form-label fw-semibold text-dark"},e.createElement("i",{className:"fas fa-address-card me-2"}),"No Anggota / No KTA"),e.createElement("input",{type:"text",className:`form-control ${t.no_anggota?"is-invalid":""}`,value:c,onChange:a=>m(a.target.value),placeholder:"Masukkan No Anggota/KTA",maxLength:7}),t.no_anggota&&e.createElement("div",{className:"invalid-feedback"},t.no_anggota)),e.createElement("button",{className:`btn btn-ikatwi btn-lg rounded-2 px-5 w-100 fw-semibold shadow-sm ${s?"loading":""}`,type:"submit",disabled:s},s?e.createElement(e.Fragment,null,e.createElement("div",{className:"spinner-border spinner-border-sm me-2",role:"status"},e.createElement("span",{className:"visually-hidden"},"Loading...")),"PROSES RESET..."):e.createElement(e.Fragment,null,e.createElement("i",{className:"fas fa-redo-alt me-2"}),"RESET PASSWORD"))),e.createElement("div",{className:"text-center mt-4"},e.createElement("p",{className:"text-muted mb-0"},"Ingat password?"," ",e.createElement(i,{href:"/login",className:"text-ikatwi fw-semibold text-decoration-none"},"Login di sini!"))))))))),e.createElement("style",{jsx:!0},`
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
                
                .info-card {
                    background: rgba(255, 255, 255, 0.9);
                    border-left: 4px solid #28a745;
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
                
                .form-control {
                    border: 1px solid #e2e8f0;
                    padding: 12px 16px;
                    transition: all 0.3s ease;
                }
                
                .form-control:focus {
                    border-color: #2c5530;
                    box-shadow: 0 0 0 0.2rem rgba(44, 85, 48, 0.25);
                }
                
                .step-icon {
                    width: 28px;
                    height: 28px;
                    font-size: 0.75rem;
                }
                
                .info-steps {
                    margin-left: 10px;
                }
                
                .spinner-border-sm {
                    width: 1rem;
                    height: 1rem;
                }
            `))}export{N as default};
