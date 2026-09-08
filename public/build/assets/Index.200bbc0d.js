import{u as h,r as v,R as e,H as k,L as i}from"./app.04c73b92.js";import{L as w}from"./Account.ffbbc2d6.js";import{Q as y}from"./index.035523b0.js";import"./Dropdown.bbf09f67.js";function D(){var o,d,b,f,p,x;const{biodata:a,transactions:s,statusAnggota:l}=h().props,[n,c]=v.exports.useState(""),g=s&&s.some(t=>t.status==="PAID"),E=(l==null?void 0:l.status_anggota)==="Anggota Kehormatan",r=g||E,m=(t,u)=>{!t||t==="-"||(navigator.clipboard.writeText(t),c(u),setTimeout(()=>c(""),2e3))},N=t=>{if(!t)return"-";try{return new Date(t).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}catch{return t}};return e.createElement(e.Fragment,null,e.createElement(k,null,e.createElement("title",null,"Biodata Anggota - IKATWI")),e.createElement(w,null,e.createElement("div",{className:"container-fluid px-0 py-2"},e.createElement("div",{className:"bio-hero-card mb-4"},e.createElement("div",{className:"row align-items-center g-3"},e.createElement("div",{className:"col-auto"},e.createElement("div",{className:"bio-avatar-wrapper"},e.createElement("img",{src:a.image,className:"bio-avatar-img",alt:a.name,onError:t=>{t.target.onerror=null,t.target.src="/assets/images/user.png"}}),e.createElement("span",{className:"bio-status-badge",title:"Anggota Terdaftar"},e.createElement("i",{className:"fa fa-check"})))),e.createElement("div",{className:"col"},e.createElement("div",{className:"d-flex flex-wrap align-items-center gap-2 mb-1"},e.createElement("h3",{className:"bio-name mb-0"},a.name),e.createElement("span",{className:`badge ${a.status_anggota==="Anggota Biasa"?"bg-success":"bg-info"} text-white fw-semibold px-2.5 py-1`},a.status_anggota||"Anggota")),e.createElement("div",{className:"d-flex flex-wrap align-items-center gap-3 text-white-50 small mt-1"},e.createElement("div",{className:"d-inline-flex align-items-center gap-1.5 text-white"},e.createElement("i",{className:"fa fa-id-card text-warning"}),e.createElement("span",null,"No. KTA: ",e.createElement("strong",null,a.no_anggota||"-")),a.no_anggota&&e.createElement("button",{type:"button",className:"btn btn-link text-white-50 p-0 ms-1 bio-copy-btn",onClick:()=>m(a.no_anggota,"kta"),title:"Salin No. Anggota"},e.createElement("i",{className:`fa ${n==="kta"?"fa-check text-success":"fa-copy"}`}))),(((o=a.province)==null?void 0:o.name)||((d=a.city)==null?void 0:d.name))&&e.createElement("div",{className:"d-inline-flex align-items-center gap-1.5 text-white"},e.createElement("i",{className:"fa fa-map-marker-alt text-danger"}),e.createElement("span",null,(b=a.province)!=null&&b.name?`DPW ${a.province.name}`:"",(f=a.city)!=null&&f.name?` \u2022 DPC ${a.city.name}`:"")),e.createElement("div",{className:"d-inline-flex align-items-center gap-1.5 text-white"},e.createElement("i",{className:`fa fa-circle ${r?"text-success":"text-warning"}`,style:{fontSize:"9px"}}),e.createElement("span",null,"Iuran ",new Date().getFullYear(),": ",e.createElement("strong",null,r?"Lunas (Aktif)":"Belum Lunas"))))),e.createElement("div",{className:"col-12 col-lg-auto d-flex flex-wrap gap-2 pt-2 pt-lg-0"},e.createElement(i,{href:`/account/biodatas/${a.id}/edit`,className:"btn btn-warning text-dark fw-bold d-inline-flex align-items-center gap-2 px-3 py-2 shadow-sm rounded-3"},e.createElement("i",{className:"fa fa-edit"}),e.createElement("span",null,"Edit Biodata")),e.createElement(i,{href:"/account/ekta",className:"btn btn-light fw-semibold d-inline-flex align-items-center gap-2 px-3 py-2 shadow-sm rounded-3 text-dark"},e.createElement("i",{className:"fa fa-id-card text-success"}),e.createElement("span",null,"E-KTA"))))),e.createElement("div",{className:"row g-4"},e.createElement("div",{className:"col-12 col-lg-6"},e.createElement("div",{className:"card bio-info-card bio-card-emerald h-100"},e.createElement("div",{className:"card-header bio-header-emerald d-flex align-items-center gap-2.5 py-3"},e.createElement("div",{className:"bio-card-icon-wrap bg-emerald-main text-white shadow-sm"},e.createElement("i",{className:"fa fa-user"})),e.createElement("div",null,e.createElement("h6",{className:"mb-0 fw-bold text-emerald-dark"},"Data Pribadi & Kontak"),e.createElement("small",{className:"text-emerald-sub"},"Identitas kependudukan dan kontak anggota"))),e.createElement("div",{className:"card-body p-3.5"},e.createElement("div",{className:"row g-3"},e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box bio-field-emerald"},e.createElement("span",{className:"bio-label text-emerald-label"},e.createElement("i",{className:"fa fa-fingerprint me-1.5 text-success"}),"NIK"),e.createElement("div",{className:"d-flex align-items-center justify-content-between"},e.createElement("span",{className:"bio-value"},a.nik||"-"),a.nik&&e.createElement("button",{type:"button",className:"btn btn-sm btn-link p-0 text-muted bio-copy-btn",onClick:()=>m(a.nik,"nik"),title:"Salin NIK"},e.createElement("i",{className:`fa ${n==="nik"?"fa-check text-success":"fa-copy"}`}))))),e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box bio-field-emerald"},e.createElement("span",{className:"bio-label text-emerald-label"},e.createElement("i",{className:"fa fa-certificate me-1.5 text-success"}),"No. STR"),e.createElement("span",{className:"bio-value"},a.no_str||"-"))),e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box bio-field-emerald"},e.createElement("span",{className:"bio-label text-emerald-label"},e.createElement("i",{className:"fa fa-envelope me-1.5 text-success"}),"Email"),e.createElement("span",{className:"bio-value text-truncate d-block",title:a.email},a.email?e.createElement("a",{href:`mailto:${a.email}`,className:"text-decoration-none text-dark hover-emerald"},a.email):"-"))),e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box bio-field-emerald"},e.createElement("span",{className:"bio-label text-emerald-label"},e.createElement("i",{className:"fa fa-phone me-1.5 text-success"}),"No. Telepon / WhatsApp"),e.createElement("span",{className:"bio-value"},a.phone?e.createElement("a",{href:`https://wa.me/${a.phone.replace(/^0/,"62").replace(/\D/g,"")}`,target:"_blank",rel:"noreferrer",className:"text-decoration-none text-success fw-semibold"},e.createElement("i",{className:"fab fa-whatsapp me-1"}),a.phone):"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box bio-field-emerald"},e.createElement("span",{className:"bio-label text-emerald-label"},e.createElement("i",{className:"fa fa-birthday-cake me-1.5 text-success"}),"Tempat, Tanggal Lahir"),e.createElement("span",{className:"bio-value"},a.tempat_lahir||"-",", ",N(a.tgl_lahir)))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box bio-field-emerald"},e.createElement("span",{className:"bio-label text-emerald-label"},e.createElement("i",{className:"fa fa-map-marked-alt me-1.5 text-success"}),"Alamat Lengkap (KTP)"),e.createElement("span",{className:"bio-value"},a.alamat||"-"))))))),e.createElement("div",{className:"col-12 col-lg-6"},e.createElement("div",{className:"card bio-info-card bio-card-blue h-100"},e.createElement("div",{className:"card-header bio-header-blue d-flex align-items-center gap-2.5 py-3"},e.createElement("div",{className:"bio-card-icon-wrap bg-blue-main text-white shadow-sm"},e.createElement("i",{className:"fa fa-graduation-cap"})),e.createElement("div",null,e.createElement("h6",{className:"mb-0 fw-bold text-blue-dark"},"Riwayat Pendidikan"),e.createElement("small",{className:"text-blue-sub"},"Kualifikasi akademik dan almamater"))),e.createElement("div",{className:"card-body p-3.5"},e.createElement("div",{className:"row g-3"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box bio-field-blue"},e.createElement("span",{className:"bio-label text-blue-label"},e.createElement("i",{className:"fa fa-user-graduate me-1.5 text-primary"}),"Pendidikan Terapi Wicara"),e.createElement("span",{className:"bio-value fw-bold text-primary"},a.pendidikan||"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box bio-field-blue"},e.createElement("span",{className:"bio-label text-blue-label"},e.createElement("i",{className:"fa fa-university me-1.5 text-primary"}),"Institusi / Perguruan Tinggi"),e.createElement("span",{className:"bio-value"},a.istitusi||"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box bio-field-blue"},e.createElement("span",{className:"bio-label text-blue-label"},e.createElement("i",{className:"fa fa-map-pin me-1.5 text-primary"}),"Alamat Perguruan Tinggi"),e.createElement("span",{className:"bio-value"},a.almtistitusi||"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box bio-field-blue"},e.createElement("span",{className:"bio-label text-blue-label"},e.createElement("i",{className:"fa fa-award me-1.5 text-primary"}),"Pendidikan Non-Terapi Wicara"),e.createElement("span",{className:"bio-value"},a.nonlinear||"Tidak ada"))))))),e.createElement("div",{className:"col-12 col-lg-6"},e.createElement("div",{className:"card bio-info-card bio-card-purple h-100"},e.createElement("div",{className:"card-header bio-header-purple d-flex align-items-center gap-2.5 py-3"},e.createElement("div",{className:"bio-card-icon-wrap bg-purple-main text-white shadow-sm"},e.createElement("i",{className:"fa fa-briefcase"})),e.createElement("div",null,e.createElement("h6",{className:"mb-0 fw-bold text-purple-dark"},"Informasi Pekerjaan"),e.createElement("small",{className:"text-purple-sub"},"Status kepegawaian dan unit kerja faskes"))),e.createElement("div",{className:"card-body p-3.5"},e.createElement("div",{className:"row g-3"},e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box bio-field-purple"},e.createElement("span",{className:"bio-label text-purple-label"},e.createElement("i",{className:"fa fa-user-tag me-1.5 text-purple"}),"Status Kepegawaian"),e.createElement("span",{className:"bio-value"},a.kepegawaian||"-"))),e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box bio-field-purple"},e.createElement("span",{className:"bio-label text-purple-label"},e.createElement("i",{className:"fa fa-clinic-medical me-1.5 text-purple"}),"Tempat Bekerja"),e.createElement("span",{className:"bio-value"},a.bekerja||"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box bio-field-purple"},e.createElement("span",{className:"bio-label text-purple-label"},e.createElement("i",{className:"fa fa-hospital me-1.5 text-purple"}),"Nama Institusi / Faskes"),e.createElement("span",{className:"bio-value"},a.lokasi_pekerjaan||"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box bio-field-purple"},e.createElement("span",{className:"bio-label text-purple-label"},e.createElement("i",{className:"fa fa-building me-1.5 text-purple"}),"Alamat Tempat Bekerja"),e.createElement("span",{className:"bio-value"},a.alamat_tempat_bekerja||"-"))))))),e.createElement("div",{className:"col-12 col-lg-6"},e.createElement("div",{className:"card bio-info-card bio-card-amber h-100"},e.createElement("div",{className:"card-header bio-header-amber d-flex align-items-center gap-2.5 py-3"},e.createElement("div",{className:"bio-card-icon-wrap bg-amber-main text-white shadow-sm"},e.createElement("i",{className:"fa fa-id-badge"})),e.createElement("div",null,e.createElement("h6",{className:"mb-0 fw-bold text-amber-dark"},"Status Keanggotaan & QR Code"),e.createElement("small",{className:"text-amber-sub"},"Afiliasi wilayah dan verifikasi keabsahan"))),e.createElement("div",{className:"card-body p-3.5"},e.createElement("div",{className:"row g-3"},e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box bio-field-amber"},e.createElement("span",{className:"bio-label text-amber-label"},e.createElement("i",{className:"fa fa-map me-1.5 text-warning"}),"Dewan Pengurus Wilayah (DPW)"),e.createElement("span",{className:"bio-value fw-semibold"},((p=a.province)==null?void 0:p.name)||"-"))),e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box bio-field-amber"},e.createElement("span",{className:"bio-label text-amber-label"},e.createElement("i",{className:"fa fa-city me-1.5 text-warning"}),"Dewan Pengurus Cabang (DPC)"),e.createElement("span",{className:"bio-value fw-semibold"},((x=a.city)==null?void 0:x.name)||"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-qr-box p-3.5 rounded-3 text-center"},e.createElement("span",{className:"d-block small fw-bold mb-2 text-amber-dark"},e.createElement("i",{className:"fa fa-qrcode me-1 text-warning"})," QR Code E-KTA Resmi IKATWI"),r?e.createElement("div",{className:"d-flex flex-column align-items-center"},e.createElement("div",{className:"p-2.5 bg-white rounded-3 shadow-sm d-inline-block border border-warning border-opacity-25"},e.createElement(y,{value:`${window.location.origin}/sig/verify?user=${a.no_anggota||a.id}`,size:130,level:"M",includeMargin:!1})),e.createElement("span",{className:"badge bg-success bg-opacity-10 text-success fw-semibold mt-2.5 px-3 py-1.5 rounded-pill border border-success border-opacity-25"},e.createElement("i",{className:"fa fa-check-circle me-1"})," Keanggotaan Terverifikasi Aktif")):e.createElement("div",{className:"alert alert-warning border-0 mb-0 py-3 text-center rounded-3",style:{backgroundColor:"#fffbeb",border:"1px solid #fde68a"}},e.createElement("i",{className:"fa fa-exclamation-triangle fs-4 text-warning mb-2 d-block"}),e.createElement("strong",{className:"d-block mb-1 text-dark"},"Status Iuran Belum Lunas"),e.createElement("p",{className:"small text-muted mb-2"},"Selesaikan pembayaran iuran tahunan untuk mengaktifkan E-KTA dan QR Code verifikasi."),e.createElement(i,{href:"/account/tagihan",className:"btn btn-sm btn-success fw-bold px-3 shadow-sm"},e.createElement("i",{className:"fa fa-credit-card me-1"})," Bayar Iuran Sekarang"))))))))))),e.createElement("style",null,`
                .bio-hero-card {
                    background: linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%);
                    border-radius: 20px;
                    padding: 24px 28px;
                    box-shadow: 0 10px 30px -5px rgba(6, 78, 59, 0.25);
                    position: relative;
                    overflow: hidden;
                }
                .bio-hero-card::before {
                    content: '';
                    position: absolute;
                    top: -60px;
                    right: -60px;
                    width: 200px;
                    height: 200px;
                    background: rgba(255, 255, 255, 0.08);
                    border-radius: 50%;
                    pointer-events: none;
                }
                .bio-avatar-wrapper {
                    position: relative;
                    width: 96px;
                    height: 96px;
                }
                .bio-avatar-img {
                    width: 96px;
                    height: 96px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 3.5px solid #ffffff;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    background: #ffffff;
                }
                .bio-status-badge {
                    position: absolute;
                    bottom: 2px;
                    right: 2px;
                    width: 24px;
                    height: 24px;
                    background: #10b981;
                    color: #ffffff;
                    border: 2px solid #ffffff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 11px;
                }
                .bio-name {
                    color: #ffffff;
                    font-weight: 700;
                    letter-spacing: -0.01em;
                }
                .bio-copy-btn {
                    text-decoration: none;
                    transition: transform 0.15s;
                }
                .bio-copy-btn:hover {
                    transform: scale(1.15);
                    color: #059669 !important;
                }
                
                /* Base Card Styling */
                .bio-info-card {
                    border-radius: 16px;
                    overflow: hidden;
                    background: #ffffff;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .bio-info-card:hover {
                    transform: translateY(-3px);
                }

                .bio-card-icon-wrap {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    flex-shrink: 0;
                }

                /* 1. Theme Emerald (Data Pribadi) */
                .bio-card-emerald {
                    border: 1.5px solid #a7f3d0;
                    box-shadow: 0 4px 20px -2px rgba(5, 150, 105, 0.08);
                }
                .bio-card-emerald:hover {
                    box-shadow: 0 8px 25px -2px rgba(5, 150, 105, 0.15);
                }
                .bio-header-emerald {
                    background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
                    border-bottom: 1.5px solid #a7f3d0;
                }
                .bg-emerald-main { background: #059669; }
                .text-emerald-dark { color: #065f46; }
                .text-emerald-sub { color: #047857; font-size: 0.78rem; }
                .text-emerald-label { color: #047857; }
                .bio-field-emerald {
                    background: #f0fdf4;
                    border: 1px solid #bbf7d0;
                    border-left: 4px solid #059669;
                }
                .bio-field-emerald:hover {
                    background: #ecfdf5;
                    border-color: #86efac;
                }

                /* 2. Theme Blue (Pendidikan) */
                .bio-card-blue {
                    border: 1.5px solid #bfdbfe;
                    box-shadow: 0 4px 20px -2px rgba(37, 99, 235, 0.08);
                }
                .bio-card-blue:hover {
                    box-shadow: 0 8px 25px -2px rgba(37, 99, 235, 0.15);
                }
                .bio-header-blue {
                    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                    border-bottom: 1.5px solid #bfdbfe;
                }
                .bg-blue-main { background: #2563eb; }
                .text-blue-dark { color: #1e40af; }
                .text-blue-sub { color: #1d4ed8; font-size: 0.78rem; }
                .text-blue-label { color: #1d4ed8; }
                .bio-field-blue {
                    background: #f8faff;
                    border: 1px solid #dbeafe;
                    border-left: 4px solid #2563eb;
                }
                .bio-field-blue:hover {
                    background: #eff6ff;
                    border-color: #93c5fd;
                }

                /* 3. Theme Purple (Pekerjaan) */
                .bio-card-purple {
                    border: 1.5px solid #e9d5ff;
                    box-shadow: 0 4px 20px -2px rgba(124, 58, 237, 0.08);
                }
                .bio-card-purple:hover {
                    box-shadow: 0 8px 25px -2px rgba(124, 58, 237, 0.15);
                }
                .bio-header-purple {
                    background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
                    border-bottom: 1.5px solid #e9d5ff;
                }
                .bg-purple-main { background: #7c3aed; }
                .text-purple-dark { color: #6b21a8; }
                .text-purple-sub { color: #7e22ce; font-size: 0.78rem; }
                .text-purple-label { color: #7e22ce; }
                .text-purple { color: #7c3aed; }
                .bio-field-purple {
                    background: #fdfaff;
                    border: 1px solid #f3e8ff;
                    border-left: 4px solid #7c3aed;
                }
                .bio-field-purple:hover {
                    background: #faf5ff;
                    border-color: #d8b4fe;
                }

                /* 4. Theme Amber (Organisasi & QR) */
                .bio-card-amber {
                    border: 1.5px solid #fde68a;
                    box-shadow: 0 4px 20px -2px rgba(217, 119, 6, 0.08);
                }
                .bio-card-amber:hover {
                    box-shadow: 0 8px 25px -2px rgba(217, 119, 6, 0.15);
                }
                .bio-header-amber {
                    background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
                    border-bottom: 1.5px solid #fde68a;
                }
                .bg-amber-main { background: #d97706; }
                .text-amber-dark { color: #92400e; }
                .text-amber-sub { color: #b45309; font-size: 0.78rem; }
                .text-amber-label { color: #b45309; }
                .bio-field-amber {
                    background: #fffdf7;
                    border: 1px solid #fef3c7;
                    border-left: 4px solid #d97706;
                }
                .bio-field-amber:hover {
                    background: #fffbeb;
                    border-color: #fde68a;
                }
                .bio-qr-box {
                    background: linear-gradient(135deg, #fffdf5 0%, #fffbeb 100%);
                    border: 1.5px dashed #fde68a;
                }

                /* Common Field Box Styling */
                .bio-field-box {
                    padding: 11px 14px;
                    border-radius: 10px;
                    height: 100%;
                    transition: all 0.15s ease;
                }
                .bio-label {
                    display: block;
                    font-size: 0.72rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 4px;
                }
                .bio-value {
                    font-size: 0.92rem;
                    font-weight: 600;
                    color: #0f172a;
                    line-height: 1.4;
                }

                @media (max-width: 768px) {
                    .bio-hero-card {
                        padding: 18px 18px;
                    }
                    .bio-avatar-wrapper, .bio-avatar-img {
                        width: 76px;
                        height: 76px;
                    }
                    .bio-name {
                        font-size: 1.25rem;
                    }
                }
            `))}export{D as default};
