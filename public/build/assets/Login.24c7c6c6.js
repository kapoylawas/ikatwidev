import{u as h,r,d as f,R as e,H as w,L as c}from"./app.c65f2c20.js";function N(){const{errors:g}=h().props,[n,u]=r.exports.useState(""),[s,b]=r.exports.useState(""),[l,o]=r.exports.useState(!1),[p,m]=r.exports.useState(null),[t,i]=r.exports.useState({});r.exports.useEffect(()=>{g&&(i(g),o(!1))},[g]),r.exports.useEffect(()=>{const a=f.Inertia.on("finish",d=>{o(!1)});return()=>a()},[]),r.exports.useEffect(()=>{n.trim()&&t.no_anggota&&i(a=>({...a,no_anggota:null}))},[n,t.no_anggota]),r.exports.useEffect(()=>{s.trim()&&t.password&&i(a=>({...a,password:null}))},[s,t.password]);const x=async a=>{if(a.preventDefault(),i({}),!n.trim()||!s.trim()){i({no_anggota:n.trim()?null:"Nomor anggota harus diisi",password:s.trim()?null:"Password harus diisi"}),o(!1);return}o(!0);try{await f.Inertia.post("/loginAnggotaLama",{no_anggota:n,password:s},{onFinish:()=>{o(!1)},onError:d=>{o(!1),d&&i(d)},onSuccess:()=>{o(!1)}})}catch{o(!1),i({general:"Terjadi kesalahan saat login"})}};return e.createElement(e.Fragment,null,e.createElement(w,null,e.createElement("title",null,"Login Account - IKATWI")),e.createElement("div",{className:"login-container"},e.createElement("div",{className:"background-shapes"},e.createElement("div",{className:"shape shape-1"}),e.createElement("div",{className:"shape shape-2"}),e.createElement("div",{className:"shape shape-3"})),e.createElement("div",{className:"container-fluid"},e.createElement("div",{className:"row justify-content-center align-items-center min-vh-100"},e.createElement("div",{className:"col-11 col-sm-8 col-md-6 col-lg-4 col-xl-3"},e.createElement("div",{className:"login-card"},e.createElement("div",{className:"card-header-custom"},e.createElement("div",{className:"logo-container"},e.createElement(c,{href:"/",className:"logo-link"},e.createElement("img",{src:"/assets/images/logo.png",width:"70",className:"logo-img",alt:"IKATWI Logo",onError:a=>{a.target.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA3MCA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiMyOGE3NDUiLz4KPHRleHQgeD0iMzUiIHk9IjQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0Ij5JS0FUV0k8L3RleHQ+Cjwvc3ZnPgo="}}))),e.createElement("div",{className:"brand-text"},e.createElement("h4",{className:"brand-title"},"IKATWI"),e.createElement("p",{className:"brand-subtitle"},"Ikatan Terapis Wicara Indonesia"))),e.createElement("div",{className:"card-body-custom"},t.general&&e.createElement("div",{className:"global-error-message"},e.createElement("i",{className:"fas fa-exclamation-triangle"}),t.general),e.createElement("div",{className:"welcome-section"},e.createElement("h5",{className:"welcome-title"},"Selamat Datang"),e.createElement("p",{className:"welcome-subtitle"},"Masuk ke akun anggota Anda")),e.createElement("form",{onSubmit:x,className:"login-form"},e.createElement("div",{className:`form-group ${p==="noanggota"?"focused":""}`},e.createElement("label",{className:"form-label"},e.createElement("i",{className:"fas fa-id-card"}),"No Anggota"),e.createElement("input",{type:"text",className:`form-input ${t.no_anggota?"error":""}`,value:n,onChange:a=>u(a.target.value),onFocus:()=>m("noanggota"),onBlur:()=>m(null),placeholder:"Masukkan nomor anggota",disabled:l}),t.no_anggota&&e.createElement("div",{className:"error-message"},e.createElement("i",{className:"fas fa-exclamation-circle"}),t.no_anggota)),e.createElement("div",{className:`form-group ${p==="password"?"focused":""}`},e.createElement("div",{className:"password-header"},e.createElement("label",{className:"form-label"},e.createElement("i",{className:"fas fa-lock"}),"Password"),e.createElement(c,{href:"/reset-password",className:"forgot-password"},"Lupa Password?")),e.createElement("input",{type:"password",className:`form-input ${t.password?"error":""}`,value:s,onChange:a=>b(a.target.value),onFocus:()=>m("password"),onBlur:()=>m(null),placeholder:"Masukkan password",disabled:l}),t.password&&e.createElement("div",{className:"error-message"},e.createElement("i",{className:"fas fa-exclamation-circle"}),t.password)),e.createElement("button",{className:`login-button ${l?"loading":""}`,type:"submit",disabled:l||!n.trim()||!s.trim()},l?e.createElement(e.Fragment,null,e.createElement("div",{className:"button-spinner"}),"Memproses..."):e.createElement(e.Fragment,null,e.createElement("i",{className:"fas fa-sign-in-alt"}),"Masuk ke Akun")),e.createElement(c,{href:"/",className:"home-link"},e.createElement("button",{className:"home-button",type:"button",disabled:l},e.createElement("i",{className:"fas fa-arrow-left"}),"Kembali ke Beranda"))),e.createElement("div",{className:"register-section"},e.createElement("p",{className:"register-text"},"Belum menjadi anggota?"," ",e.createElement(c,{href:"/info",className:"register-link"},"Daftar sekarang"))))),e.createElement("div",{className:"login-footer"},e.createElement("p",{className:"footer-text"},"\xA9 ",new Date().getFullYear()," IKATWI. All rights reserved.")))))),e.createElement("style",{jsx:!0},`
                .login-container {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #1a5f23 0%, #2e7d32 25%, #4caf50 50%, #66bb6a 75%, #81c784 100%);
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .background-shapes {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: 1;
                }

                .shape {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    animation: float 6s ease-in-out infinite;
                }

                .shape-1 {
                    width: 200px;
                    height: 200px;
                    top: -50px;
                    left: -50px;
                    animation-delay: 0s;
                }

                .shape-2 {
                    width: 150px;
                    height: 150px;
                    top: 20%;
                    right: 10%;
                    animation-delay: 2s;
                }

                .shape-3 {
                    width: 100px;
                    height: 100px;
                    bottom: 10%;
                    left: 10%;
                    animation-delay: 4s;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }

                .login-card {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    border-radius: 20px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    overflow: hidden;
                    position: relative;
                    z-index: 2;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .login-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .card-header-custom {
                    background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
                    padding: 2.5rem 2rem 2rem;
                    text-align: center;
                    position: relative;
                }

                .logo-container {
                    margin-bottom: 1rem;
                }

                .logo-link {
                    display: inline-block;
                    transition: transform 0.3s ease;
                }

                .logo-link:hover {
                    transform: scale(1.05);
                }

                .logo-img {
                    border-radius: 50%;
                    background: white;
                    padding: 8px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }

                .brand-text {
                    color: white;
                }

                .brand-title {
                    font-weight: 700;
                    font-size: 1.75rem;
                    margin-bottom: 0.25rem;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                }

                .brand-subtitle {
                    font-size: 0.9rem;
                    opacity: 0.9;
                    margin: 0;
                    font-weight: 500;
                }

                .card-body-custom {
                    padding: 2.5rem 2rem;
                }

                .global-error-message {
                    background: rgba(211, 47, 47, 0.1);
                    border: 1px solid rgba(211, 47, 47, 0.2);
                    border-left: 4px solid #d32f2f;
                    color: #d32f2f;
                    padding: 1rem;
                    border-radius: 8px;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 500;
                }

                .welcome-section {
                    text-align: center;
                    margin-bottom: 2rem;
                }

                .welcome-title {
                    font-weight: 600;
                    color: #1b5e20;
                    margin-bottom: 0.5rem;
                    font-size: 1.25rem;
                }

                .welcome-subtitle {
                    color: #666;
                    margin: 0;
                    font-size: 0.9rem;
                }

                .login-form {
                    space-y: 1.5rem;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                    transition: all 0.3s ease;
                }

                .form-group.focused {
                    transform: translateX(5px);
                }

                .form-label {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 600;
                    color: #1b5e20;
                    margin-bottom: 0.5rem;
                    font-size: 0.9rem;
                }

                .form-label i {
                    width: 16px;
                    text-align: center;
                }

                .form-input {
                    width: 100%;
                    padding: 0.875rem 1rem;
                    border: 2px solid #e0e0e0;
                    border-radius: 12px;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                    background: #fafafa;
                }

                .form-input:focus {
                    outline: none;
                    border-color: #2e7d32;
                    background: white;
                    box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.1);
                    transform: translateY(-2px);
                }

                .form-input.error {
                    border-color: #d32f2f;
                    background: rgba(211, 47, 47, 0.02);
                }

                .form-input.error:focus {
                    border-color: #d32f2f;
                    box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);
                }

                .form-input:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .password-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .forgot-password {
                    color: #2e7d32;
                    text-decoration: none;
                    font-size: 0.85rem;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }

                .forgot-password:hover {
                    color: #1b5e20;
                    text-decoration: underline;
                }

                .error-message {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #d32f2f;
                    font-size: 0.85rem;
                    margin-top: 0.5rem;
                    padding: 0.5rem;
                    background: rgba(211, 47, 47, 0.05);
                    border-radius: 8px;
                    border-left: 3px solid #d32f2f;
                }

                .login-button {
                    width: 100%;
                    padding: 1rem;
                    background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .login-button:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(27, 94, 32, 0.3);
                }

                .login-button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                    background: #cccccc;
                }

                .login-button.loading {
                    background: linear-gradient(135deg, #388e3c 0%, #4caf50 100%);
                }

                .button-spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid transparent;
                    border-top: 2px solid white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .home-link {
                    text-decoration: none;
                    display: block;
                }

                .home-button {
                    width: 100%;
                    padding: 0.875rem;
                    background: transparent;
                    color: #2e7d32;
                    border: 2px solid #2e7d32;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .home-button:hover:not(:disabled) {
                    background: #2e7d32;
                    color: white;
                    transform: translateY(-2px);
                }

                .home-button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .register-section {
                    text-align: center;
                    margin-top: 2rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid #e0e0e0;
                }

                .register-text {
                    color: #666;
                    margin: 0;
                    font-size: 0.9rem;
                }

                .register-link {
                    color: #2e7d32;
                    text-decoration: none;
                    font-weight: 600;
                    transition: color 0.3s ease;
                }

                .register-link:hover {
                    color: #1b5e20;
                    text-decoration: underline;
                }

                .login-footer {
                    text-align: center;
                    margin-top: 2rem;
                    position: relative;
                    z-index: 2;
                }

                .footer-text {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.85rem;
                    margin: 0;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .login-container {
                        padding: 15px;
                    }

                    .card-body-custom {
                        padding: 2rem 1.5rem;
                    }

                    .card-header-custom {
                        padding: 2rem 1.5rem 1.5rem;
                    }

                    .brand-title {
                        font-size: 1.5rem;
                    }

                    .welcome-title {
                        font-size: 1.1rem;
                    }

                    .form-input {
                        padding: 0.75rem 0.875rem;
                    }

                    .login-button, .home-button {
                        padding: 0.875rem;
                    }
                }

                @media (max-width: 480px) {
                    .card-body-custom {
                        padding: 1.5rem 1rem;
                    }

                    .card-header-custom {
                        padding: 1.5rem 1rem 1rem;
                    }

                    .shape {
                        display: none;
                    }

                    .password-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.5rem;
                    }

                    .forgot-password {
                        align-self: flex-end;
                    }
                }
            `))}export{N as default};
