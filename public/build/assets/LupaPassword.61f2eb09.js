import{u as m,r as i,d as s,R as e,H as b,L as x}from"./app.6057f289.js";import{S as f}from"./sweetalert2.all.36d68c93.js";function E(){const{errors:d}=m().props,[r,g]=i.exports.useState(""),[l,p]=i.exports.useState(""),[o,n]=i.exports.useState(!1),a=d||{},c=async t=>{t.preventDefault(),!(!r.trim()||!l.trim())&&(n(!0),s.Inertia.post("/resetPassword",{no_anggota:r.trim(),nik:l.trim()},{onSuccess:()=>{f.fire({title:"Reset Berhasil",text:"Password Anda berhasil direset menjadi 16 digit NIK Anda. Silakan login.",icon:"success",confirmButtonText:"Ke Halaman Login",confirmButtonColor:"#1b5e20"}).then(()=>{s.Inertia.visit("/login")}),n(!1)},onError:()=>{n(!1)}}))};return i.exports.useEffect(()=>{const t=s.Inertia.on("finish",()=>{n(!1)});return()=>t()},[]),e.createElement(e.Fragment,null,e.createElement(b,null,e.createElement("title",null,"Reset Password - IKATWI")),e.createElement("style",null,`
                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
                html, body { height: 100%; }

                @keyframes spin   { to { transform: rotate(360deg); } }
                @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
                @keyframes blob   { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-20px) scale(1.05)} 66%{transform:translate(-20px,20px) scale(0.97)} }

                .lg-page {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 24px 16px;
                    font-family: 'Segoe UI', system-ui, sans-serif;
                    background: linear-gradient(135deg, #0f3d15 0%, #1b5e20 40%, #2e7d32 70%, #43a047 100%);
                    position: relative;
                    overflow: hidden;
                }
                .lg-blob1, .lg-blob2, .lg-blob3 {
                    position: absolute; border-radius: 50%;
                    background: rgba(255,255,255,0.06);
                    pointer-events: none;
                    animation: blob 12s ease-in-out infinite;
                }
                .lg-blob1 { width:480px;height:480px; top:-180px;left:-150px; animation-delay:0s; }
                .lg-blob2 { width:360px;height:360px; bottom:-120px;right:-100px; animation-delay:4s; }
                .lg-blob3 { width:200px;height:200px; top:50%;left:60%; animation-delay:8s; }

                .lg-card {
                    position: relative; z-index: 1;
                    width: 100%; max-width: 440px;
                    background: #fff;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 25px 80px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.2);
                    animation: fadeUp .5s ease both;
                }

                /* card top bar */
                .lg-bar {
                    height: 5px;
                    background: linear-gradient(90deg, #1b5e20, #66bb6a, #1b5e20);
                }

                /* logo header inside card */
                .lg-head {
                    background: linear-gradient(135deg, #1b5e20, #2e7d32);
                    padding: 28px 24px 22px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .lg-head::before {
                    content:''; position:absolute; border-radius:50%;
                    width:160px;height:160px;
                    background:rgba(255,255,255,0.07);
                    top:-50px;right:-40px;
                }
                .lg-head::after {
                    content:''; position:absolute; border-radius:50%;
                    width:100px;height:100px;
                    background:rgba(255,255,255,0.05);
                    bottom:-30px;left:-25px;
                }
                .lg-logo {
                    width:68px;height:68px;border-radius:50%;object-fit:cover;
                    background:#fff;padding:6px;
                    border:3px solid rgba(255,255,255,0.35);
                    box-shadow:0 6px 20px rgba(0,0,0,0.25);
                    display:block;margin:0 auto 12px;
                    position:relative;z-index:1;
                }
                .lg-org  { color:#fff;font-size:1.45rem;font-weight:800;letter-spacing:.5px;position:relative;z-index:1;margin-bottom:3px; }
                .lg-orgsub { color:rgba(255,255,255,0.7);font-size:.78rem;position:relative;z-index:1; }

                /* body */
                .lg-body { padding: 32px 34px 28px; }

                .lg-fhead { text-align:center;margin-bottom:20px; }
                .lg-ftitle { font-size:1.4rem;font-weight:700;color:#162b17;margin:0 0 4px; }
                .lg-fsub   { color:#6b7280;font-size:.85rem;margin:0; }

                .lg-ealert {
                    background:#fef2f2;border:1px solid #fecaca;
                    border-left:4px solid #ef4444;color:#dc2626;
                    padding:10px 14px;border-radius:10px;
                    margin-bottom:18px;font-size:.84rem;font-weight:500;
                    display:flex;align-items:center;gap:8px;
                }

                .lg-ialert {
                    background:#f0fdf4;border:1px solid #bbf7d0;
                    border-left:4px solid #16a34a;color:#166534;
                    padding:10px 14px;border-radius:10px;
                    margin-bottom:18px;font-size:.83rem;line-height:1.4;
                    display:flex;align-items:flex-start;gap:10px;
                }
                .lg-ialert i { color:#16a34a;margin-top:2px;flex-shrink:0; }

                .lg-field { margin-bottom:18px; }
                .lg-label { display:block;margin-bottom:6px;font-size:.855rem;font-weight:600;color:#374151; }
                .lg-label i { color:#2e7d32;margin-right:6px; }

                .lg-iwrap { position:relative; }
                .lg-input {
                    width:100%;padding:11px 15px;
                    border:2px solid #e2e8f0;border-radius:11px;
                    font-size:.92rem;background:#f8fafb;color:#111;
                    outline:none;
                    transition:border-color .2s,box-shadow .2s,background .2s;
                }
                .lg-input:focus {
                    border-color:#2e7d32;background:#fff;
                    box-shadow:0 0 0 3px rgba(46,125,50,0.13);
                }
                .lg-input.err { border-color:#ef5350;background:#fff6f6; }
                .lg-input:disabled { opacity:.55;cursor:not-allowed; }
                .lg-etxt { display:block;margin-top:5px;font-size:.78rem;color:#ef4444; }
                .lg-etxt i { margin-right:3px; }

                .lg-btnlogin {
                    width:100%;padding:13px;
                    background:linear-gradient(135deg,#1b5e20,#2e7d32);
                    color:#fff;border:none;border-radius:11px;
                    font-size:.95rem;font-weight:600;cursor:pointer;
                    display:flex;align-items:center;justify-content:center;gap:8px;
                    box-shadow:0 4px 16px rgba(27,94,32,0.32);
                    transition:transform .2s,box-shadow .2s;
                    margin-bottom:11px;
                }
                .lg-btnlogin:hover:not(:disabled) {
                    transform:translateY(-2px);
                    box-shadow:0 8px 22px rgba(27,94,32,0.4);
                }
                .lg-btnlogin:disabled { background:#c8d8c9;box-shadow:none;cursor:not-allowed;transform:none; }

                .lg-btnback {
                    width:100%;padding:11px;
                    background:transparent;color:#2e7d32;
                    border:2px solid #2e7d32;border-radius:11px;
                    font-size:.9rem;font-weight:600;cursor:pointer;
                    display:flex;align-items:center;justify-content:center;gap:8px;
                    transition:background .2s,color .2s;
                    text-decoration:none;
                }
                .lg-btnback:hover { background:#f0faf0;color:#1b5e20;border-color:#1b5e20; }

                .lg-spinner {
                    display:inline-block;width:15px;height:15px;
                    border:2px solid rgba(255,255,255,0.3);
                    border-top-color:#fff;border-radius:50%;
                    animation:spin .75s linear infinite;
                }

                .lg-footer {
                    text-align:center;margin-top:20px;
                    color:rgba(255,255,255,0.45);font-size:.76rem;
                    position:relative;z-index:1;
                }

                @media (max-width: 480px) {
                    .lg-page {
                        padding: 20px 16px;
                        align-items: center;
                    }
                    .lg-card {
                        border-radius: 18px;
                        max-width: 100%;
                        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    }
                    .lg-head {
                        padding: 22px 20px 18px;
                    }
                    .lg-logo {
                        width: 58px;
                        height: 58px;
                        margin-bottom: 10px;
                    }
                    .lg-org { font-size: 1.25rem; }
                    .lg-body { padding: 24px 20px 22px; }
                    .lg-ftitle { font-size: 1.2rem; }
                    .lg-btnlogin, .lg-btnback { padding: 13px; font-size: .9rem; }
                    .lg-footer { margin-top: 14px; }
                    .lg-blob1, .lg-blob2, .lg-blob3 { display: none; }
                }
                @media (max-width: 360px) {
                    .lg-body  { padding: 20px 16px 18px; }
                    .lg-head  { padding: 18px 16px 14px; }
                }
            `),e.createElement("div",{className:"lg-page"},e.createElement("div",{className:"lg-blob1"}),e.createElement("div",{className:"lg-blob2"}),e.createElement("div",{className:"lg-blob3"}),e.createElement("div",{style:{position:"relative",zIndex:1,width:"100%",maxWidth:"440px"}},e.createElement("div",{className:"lg-card"},e.createElement("div",{className:"lg-bar"}),e.createElement("div",{className:"lg-head"},e.createElement("img",{src:"/assets/images/logo.png",className:"lg-logo",alt:"IKATWI",onError:t=>{t.target.style.display="none"}}),e.createElement("div",{className:"lg-org"},"IKATWI"),e.createElement("div",{className:"lg-orgsub"},"Ikatan Terapis Wicara Indonesia")),e.createElement("div",{className:"lg-body"},e.createElement("div",{className:"lg-fhead"},e.createElement("h2",{className:"lg-ftitle"},"Reset Password"),e.createElement("p",{className:"lg-fsub"},"Masukkan data identitas akun Anda")),e.createElement("div",{className:"lg-ialert"},e.createElement("i",{className:"fa fa-info-circle"}),e.createElement("div",null,"Setelah reset, password Anda otomatis berubah menjadi ",e.createElement("strong",null,"16 digit NIK")," Anda.")),(a.meta||a.no_anggota||a.nik)&&e.createElement("div",{className:"lg-ealert"},e.createElement("i",{className:"fa fa-exclamation-circle"}),e.createElement("div",null,a.meta||a.no_anggota||a.nik)),e.createElement("form",{onSubmit:c},e.createElement("div",{className:"lg-field"},e.createElement("label",{className:"lg-label"},e.createElement("i",{className:"fa fa-id-card"}),"No. Anggota atau Email"),e.createElement("div",{className:"lg-iwrap"},e.createElement("input",{type:"text",className:`lg-input${a.no_anggota?" err":""}`,value:r,onChange:t=>g(t.target.value),placeholder:"Contoh: 101007 atau email@domain.com",disabled:o,autoComplete:"username"})),a.no_anggota&&e.createElement("span",{className:"lg-etxt"},e.createElement("i",{className:"fa fa-times-circle"}),a.no_anggota)),e.createElement("div",{className:"lg-field"},e.createElement("label",{className:"lg-label"},e.createElement("i",{className:"fa fa-key"}),"NIK (16 Digit)"),e.createElement("div",{className:"lg-iwrap"},e.createElement("input",{type:"text",className:`lg-input${a.nik?" err":""}`,value:l,onChange:t=>p(t.target.value),placeholder:"Masukkan 16 digit NIK",maxLength:16,disabled:o})),a.nik&&e.createElement("span",{className:"lg-etxt"},e.createElement("i",{className:"fa fa-times-circle"}),a.nik)),e.createElement("button",{type:"submit",className:"lg-btnlogin",disabled:o||!r.trim()||!l.trim()},o?e.createElement(e.Fragment,null,e.createElement("span",{className:"lg-spinner"}),e.createElement("span",null,"Memproses...")):e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-redo-alt"}),e.createElement("span",null,"Reset Password"))),e.createElement(x,{href:"/login",className:"lg-btnback"},e.createElement("i",{className:"fa fa-arrow-left"})," Kembali ke Login")))),e.createElement("div",{className:"lg-footer"},"\xA9 ",new Date().getFullYear()," IKATWI. All rights reserved."))))}export{E as default};
