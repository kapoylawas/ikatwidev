import{u as v,r as h,R as e,H as k,L as n}from"./app.750ecd65.js";import{L as w}from"./Account.0661102c.js";import{Q as y}from"./index.fd8ecacb.js";import"./Dropdown.0465fb98.js";function K(){var o,d,b,f,p,g;const{biodata:a,transactions:c,statusAnggota:l}=v().props,[i,m]=h.exports.useState(""),u=c&&c.some(t=>t.status==="PAID"),N=(l==null?void 0:l.status_anggota)==="Anggota Kehormatan",s=u||N,r=(t,E)=>{!t||t==="-"||(navigator.clipboard.writeText(t),m(E),setTimeout(()=>m(""),2e3))},x=t=>{if(!t)return"-";try{return new Date(t).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}catch{return t}};return e.createElement(e.Fragment,null,e.createElement(k,null,e.createElement("title",null,"Biodata Anggota - IKATWI")),e.createElement(w,null,e.createElement("div",{className:"container-fluid px-0 py-2"},e.createElement("div",{className:"bio-hero-card mb-4"},e.createElement("div",{className:"row align-items-center g-3"},e.createElement("div",{className:"col-auto"},e.createElement("div",{className:"bio-avatar-wrapper"},e.createElement("img",{src:a.image,className:"bio-avatar-img",alt:a.name,onError:t=>{t.target.onerror=null,t.target.src="/assets/images/user.png"}}),e.createElement("span",{className:"bio-status-badge",title:"Anggota Terdaftar"},e.createElement("i",{className:"fa fa-check"})))),e.createElement("div",{className:"col"},e.createElement("div",{className:"d-flex flex-wrap align-items-center gap-2 mb-1"},e.createElement("h3",{className:"bio-name mb-0"},a.name),e.createElement("span",{className:`badge ${a.status_anggota==="Anggota Biasa"?"bg-success":"bg-info"} text-white fw-semibold px-2.5 py-1`},a.status_anggota||"Anggota")),e.createElement("div",{className:"d-flex flex-wrap align-items-center gap-3 text-white-50 small mt-1"},e.createElement("div",{className:"d-inline-flex align-items-center gap-1.5 text-white"},e.createElement("i",{className:"fa fa-id-card text-warning"}),e.createElement("span",null,"No. KTA: ",e.createElement("strong",null,a.no_anggota||"-")),a.no_anggota&&e.createElement("button",{type:"button",className:"btn btn-link text-white-50 p-0 ms-1 bio-copy-btn",onClick:()=>r(a.no_anggota,"kta"),title:"Salin No. Anggota"},e.createElement("i",{className:`fa ${i==="kta"?"fa-check text-success":"fa-copy"}`}))),(((o=a.province)==null?void 0:o.name)||((d=a.city)==null?void 0:d.name))&&e.createElement("div",{className:"d-inline-flex align-items-center gap-1.5 text-white"},e.createElement("i",{className:"fa fa-map-marker-alt text-danger"}),e.createElement("span",null,(b=a.province)!=null&&b.name?`DPW ${a.province.name}`:"",(f=a.city)!=null&&f.name?` \u2022 DPC ${a.city.name}`:"")),e.createElement("div",{className:"d-inline-flex align-items-center gap-1.5 text-white"},e.createElement("i",{className:`fa fa-circle ${s?"text-success":"text-warning"}`,style:{fontSize:"9px"}}),e.createElement("span",null,"Iuran ",new Date().getFullYear(),": ",e.createElement("strong",null,s?"Lunas (Aktif)":"Belum Lunas"))))),e.createElement("div",{className:"col-12 col-lg-auto d-flex flex-wrap gap-2 pt-2 pt-lg-0"},e.createElement(n,{href:`/account/biodatas/${a.id}/edit`,className:"btn btn-warning text-dark fw-bold d-inline-flex align-items-center gap-2 px-3 py-2 shadow-sm rounded-3"},e.createElement("i",{className:"fa fa-edit"}),e.createElement("span",null,"Edit Biodata")),e.createElement(n,{href:"/account/ekta",className:"btn btn-light fw-semibold d-inline-flex align-items-center gap-2 px-3 py-2 shadow-sm rounded-3 text-dark"},e.createElement("i",{className:"fa fa-id-card text-success"}),e.createElement("span",null,"E-KTA"))))),e.createElement("div",{className:"row g-4"},e.createElement("div",{className:"col-12 col-lg-6"},e.createElement("div",{className:"card bio-info-card h-100"},e.createElement("div",{className:"card-header bg-white d-flex align-items-center gap-2.5 py-3 border-bottom"},e.createElement("div",{className:"bio-card-icon-wrap bg-emerald-light"},e.createElement("i",{className:"fa fa-user text-emerald"})),e.createElement("div",null,e.createElement("h6",{className:"mb-0 fw-bold text-dark"},"Data Pribadi & Kontak"),e.createElement("small",{className:"text-muted"},"Identitas kependudukan dan kontak anggota"))),e.createElement("div",{className:"card-body p-3.5"},e.createElement("div",{className:"row g-3"},e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-fingerprint me-1.5 text-muted"}),"NIK"),e.createElement("div",{className:"d-flex align-items-center justify-content-between"},e.createElement("span",{className:"bio-value"},a.nik||"-"),a.nik&&e.createElement("button",{type:"button",className:"btn btn-sm btn-link p-0 text-muted",onClick:()=>r(a.nik,"nik"),title:"Salin NIK"},e.createElement("i",{className:`fa ${i==="nik"?"fa-check text-success":"fa-copy"}`}))))),e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-certificate me-1.5 text-muted"}),"No. STR"),e.createElement("span",{className:"bio-value"},a.no_str||"-"))),e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-envelope me-1.5 text-muted"}),"Email"),e.createElement("span",{className:"bio-value text-truncate d-block",title:a.email},a.email?e.createElement("a",{href:`mailto:${a.email}`,className:"text-decoration-none text-dark"},a.email):"-"))),e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-phone me-1.5 text-muted"}),"No. Telepon / WhatsApp"),e.createElement("span",{className:"bio-value"},a.phone?e.createElement("a",{href:`https://wa.me/${a.phone.replace(/^0/,"62").replace(/\D/g,"")}`,target:"_blank",rel:"noreferrer",className:"text-decoration-none text-success fw-semibold"},e.createElement("i",{className:"fab fa-whatsapp me-1"}),a.phone):"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-birthday-cake me-1.5 text-muted"}),"Tempat, Tanggal Lahir"),e.createElement("span",{className:"bio-value"},a.tempat_lahir||"-",", ",x(a.tgl_lahir)))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-map-marked-alt me-1.5 text-muted"}),"Alamat Lengkap (KTP)"),e.createElement("span",{className:"bio-value"},a.alamat||"-"))))))),e.createElement("div",{className:"col-12 col-lg-6"},e.createElement("div",{className:"card bio-info-card h-100"},e.createElement("div",{className:"card-header bg-white d-flex align-items-center gap-2.5 py-3 border-bottom"},e.createElement("div",{className:"bio-card-icon-wrap bg-blue-light"},e.createElement("i",{className:"fa fa-graduation-cap text-primary"})),e.createElement("div",null,e.createElement("h6",{className:"mb-0 fw-bold text-dark"},"Riwayat Pendidikan"),e.createElement("small",{className:"text-muted"},"Kualifikasi akademik dan almamater"))),e.createElement("div",{className:"card-body p-3.5"},e.createElement("div",{className:"row g-3"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-user-graduate me-1.5 text-muted"}),"Pendidikan Terapi Wicara"),e.createElement("span",{className:"bio-value fw-bold text-emerald"},a.pendidikan||"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-university me-1.5 text-muted"}),"Institusi / Perguruan Tinggi"),e.createElement("span",{className:"bio-value"},a.istitusi||"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-map-pin me-1.5 text-muted"}),"Alamat Perguruan Tinggi"),e.createElement("span",{className:"bio-value"},a.almtistitusi||"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-award me-1.5 text-muted"}),"Pendidikan Non-Terapi Wicara"),e.createElement("span",{className:"bio-value"},a.nonlinear||"Tidak ada"))))))),e.createElement("div",{className:"col-12 col-lg-6"},e.createElement("div",{className:"card bio-info-card h-100"},e.createElement("div",{className:"card-header bg-white d-flex align-items-center gap-2.5 py-3 border-bottom"},e.createElement("div",{className:"bio-card-icon-wrap bg-purple-light"},e.createElement("i",{className:"fa fa-briefcase text-purple"})),e.createElement("div",null,e.createElement("h6",{className:"mb-0 fw-bold text-dark"},"Informasi Pekerjaan"),e.createElement("small",{className:"text-muted"},"Status kepegawaian dan unit kerja faskes"))),e.createElement("div",{className:"card-body p-3.5"},e.createElement("div",{className:"row g-3"},e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-user-tag me-1.5 text-muted"}),"Status Kepegawaian"),e.createElement("span",{className:"bio-value"},a.kepegawaian||"-"))),e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-clinic-medical me-1.5 text-muted"}),"Tempat Bekerja"),e.createElement("span",{className:"bio-value"},a.bekerja||"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-hospital me-1.5 text-muted"}),"Nama Institusi / Faskes"),e.createElement("span",{className:"bio-value"},a.lokasi_pekerjaan||"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-building me-1.5 text-muted"}),"Alamat Tempat Bekerja"),e.createElement("span",{className:"bio-value"},a.alamat_tempat_bekerja||"-"))))))),e.createElement("div",{className:"col-12 col-lg-6"},e.createElement("div",{className:"card bio-info-card h-100"},e.createElement("div",{className:"card-header bg-white d-flex align-items-center gap-2.5 py-3 border-bottom"},e.createElement("div",{className:"bio-card-icon-wrap bg-amber-light"},e.createElement("i",{className:"fa fa-id-badge text-warning"})),e.createElement("div",null,e.createElement("h6",{className:"mb-0 fw-bold text-dark"},"Status Keanggotaan & QR Code"),e.createElement("small",{className:"text-muted"},"Afiliasi wilayah dan verifikasi keabsahan"))),e.createElement("div",{className:"card-body p-3.5"},e.createElement("div",{className:"row g-3"},e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-map me-1.5 text-muted"}),"Dewan Pengurus Wilayah (DPW)"),e.createElement("span",{className:"bio-value fw-semibold"},((p=a.province)==null?void 0:p.name)||"-"))),e.createElement("div",{className:"col-sm-6"},e.createElement("div",{className:"bio-field-box"},e.createElement("span",{className:"bio-label"},e.createElement("i",{className:"fa fa-city me-1.5 text-muted"}),"Dewan Pengurus Cabang (DPC)"),e.createElement("span",{className:"bio-value fw-semibold"},((g=a.city)==null?void 0:g.name)||"-"))),e.createElement("div",{className:"col-12"},e.createElement("div",{className:"p-3 rounded-3 border text-center",style:{backgroundColor:"#f8fafc",borderColor:"#e2e8f0"}},e.createElement("span",{className:"d-block small fw-bold mb-2",style:{color:"#334155"}},"QR Code E-KTA Resmi IKATWI"),s?e.createElement("div",{className:"d-flex flex-column align-items-center"},e.createElement("div",{className:"p-2 bg-white rounded-3 shadow-sm d-inline-block border"},e.createElement(y,{value:`${window.location.origin}/sig/verify?user=${a.no_anggota||a.id}`,size:130,level:"M",includeMargin:!1})),e.createElement("span",{className:"badge bg-success bg-opacity-10 text-success fw-semibold mt-2.5 px-3 py-1.5 rounded-pill"},e.createElement("i",{className:"fa fa-check-circle me-1"})," Keanggotaan Terverifikasi Aktif")):e.createElement("div",{className:"alert alert-warning border-0 mb-0 py-3 text-center rounded-3"},e.createElement("i",{className:"fa fa-exclamation-triangle fs-4 text-warning mb-2 d-block"}),e.createElement("strong",{className:"d-block mb-1"},"Status Iuran Belum Lunas"),e.createElement("p",{className:"small text-muted mb-2"},"Selesaikan pembayaran iuran tahunan untuk mengaktifkan E-KTA dan QR Code verifikasi."),e.createElement(n,{href:"/account/tagihan",className:"btn btn-sm btn-success fw-bold px-3"},e.createElement("i",{className:"fa fa-credit-card me-1"})," Bayar Iuran Sekarang"))))))))))),e.createElement("style",null,`
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
                    color: #ffffff !important;
                }
                .bio-info-card {
                    border: none;
                    border-radius: 16px;
                    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                    background: #ffffff;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .bio-info-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px -2px rgba(0, 0, 0, 0.08);
                }
                .bio-card-icon-wrap {
                    width: 38px;
                    height: 38px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    flex-shrink: 0;
                }
                .bg-emerald-light { background: #ecfdf5; }
                .text-emerald { color: #059669; }
                .bg-blue-light { background: #eff6ff; }
                .bg-purple-light { background: #faf5ff; }
                .text-purple { color: #7c3aed; }
                .bg-amber-light { background: #fffbeb; }
                
                .bio-field-box {
                    padding: 10px 14px;
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    height: 100%;
                }
                .bio-label {
                    display: block;
                    font-size: 0.74rem;
                    font-weight: 600;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    margin-bottom: 3px;
                }
                .bio-value {
                    font-size: 0.92rem;
                    font-weight: 600;
                    color: #1e293b;
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
            `))}export{K as default};
