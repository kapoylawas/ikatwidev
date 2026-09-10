import{u as D,r as o,R as e,H as U,L}from"./app.ddddb40a.js";import{L as W}from"./Account.a176e3ba.js";import{Q as $}from"./index.15eaae07.js";import{h as k}from"./html2canvas.esm.3d083717.js";import{S as I}from"./sweetalert2.all.346ccb21.js";import"./Dropdown.e4086b66.js";function z({children:a}){const s=o.exports.useRef(null),[c,x]=o.exports.useState(1);return o.exports.useEffect(()=>{const i=()=>{if(!s.current)return;const f=s.current.clientWidth;if(f>0){const t=Math.min(1,f/650);x(t)}};i(),window.addEventListener("resize",i);let l=null;return window.ResizeObserver&&s.current&&(l=new ResizeObserver(i),l.observe(s.current)),()=>{window.removeEventListener("resize",i),l&&l.disconnect()}},[]),e.createElement("div",{ref:s,className:"card-responsive-scaler",style:{width:"100%",maxWidth:"650px",height:`${Math.round(382*c)}px`,position:"relative",display:"flex",justifyContent:"center",alignItems:"flex-start",overflow:"hidden",margin:"0 auto"}},e.createElement("div",{style:{transform:`scale(${c})`,transformOrigin:"top center",width:"650px",height:"382px",flexShrink:0}},a))}function O(){const{biodata:a,transactions:s=[],statusAnggota:c,isPaid:x,unpaidYears:i=[],isAdminPreview:l=!1,targetUserId:f}=D().props,[t,C]=o.exports.useState(!1),[v,j]=o.exports.useState(""),b=o.exports.useRef(null),g=o.exports.useRef(null),R=o.exports.useRef(null),N=(c==null?void 0:c.status_anggota)||(a==null?void 0:a.status_anggota)||"Anggota Biasa",B=typeof x=="boolean"?x:l||N==="Anggota Kehormatan"||s.some(n=>n.status==="PAID"||n.status==="SUCCESS")&&(!i||i.length===0),K=new Date().getFullYear(),r=async(n="png",u="front")=>{try{C(!0),j(`${u}-${n}`);let d="",h="";const y=n==="jpeg"?"image/jpeg":"image/png",S=n==="jpeg"?"jpg":"png",w={scale:3,useCORS:!0,allowTaint:!0,backgroundColor:n==="jpeg"?"#ffffff":null,logging:!1};if(u==="front"){if(!b.current)throw new Error("Elemen kartu depan tidak ditemukan");h=`E-KTA-Depan-${(a==null?void 0:a.no_anggota)||(a==null?void 0:a.name)||"IKATWI"}`,d=(await k(b.current,w)).toDataURL(y,1)}else if(u==="back"){if(!g.current)throw new Error("Elemen kartu belakang tidak ditemukan");h=`E-KTA-Belakang-${(a==null?void 0:a.no_anggota)||(a==null?void 0:a.name)||"IKATWI"}`,d=(await k(g.current,w)).toDataURL(y,1)}else{if(!b.current||!g.current)throw new Error("Elemen kartu tidak ditemukan");h=`E-KTA-Lengkap-${(a==null?void 0:a.no_anggota)||(a==null?void 0:a.name)||"IKATWI"}`;const[m,P]=await Promise.all([k(b.current,w),k(g.current,w)]),T=30*3,p=document.createElement("canvas");p.width=m.width+P.width+T,p.height=Math.max(m.height,P.height);const E=p.getContext("2d");n==="jpeg"&&(E.fillStyle="#ffffff",E.fillRect(0,0,p.width,p.height)),E.drawImage(m,0,0),E.drawImage(P,m.width+T,0),d=p.toDataURL(y,1)}const A=document.createElement("a");A.download=`${h}.${S}`,A.href=d,A.click(),I.fire({title:"Berhasil!",text:`Kartu E-KTA (${u==="both"?"Lengkap":u==="front"?"Sisi Depan":"Sisi Belakang"}) berhasil diunduh murni format ${S.toUpperCase()}.`,icon:"success",timer:2e3,showConfirmButton:!1,toast:!0,position:"top-end"})}catch(d){console.error("Error generating E-KTA image:",d),I.fire({title:"Gagal Mengunduh",text:"Terjadi kesalahan saat memproses gambar E-KTA. Silakan coba kembali.",icon:"error"})}finally{C(!1),j("")}},G=()=>{l&&f?window.open(`/account/cetak/ekta?user_id=${f}`,"_blank"):window.print()};return e.createElement(W,null,e.createElement(U,{title:`E-KTA ${a!=null&&a.name?"- "+a.name:""} - IKATWI`}),e.createElement("div",{className:"container-fluid py-4 ekta-page-container"},l&&e.createElement("div",{className:"card border-0 shadow-sm rounded-4 mb-4 overflow-hidden",style:{backgroundColor:"#eff6ff",borderLeft:"5px solid #2563eb"}},e.createElement("div",{className:"card-body p-3.5 px-4 d-flex align-items-center justify-content-between flex-wrap gap-3"},e.createElement("div",{className:"d-flex align-items-center gap-3"},e.createElement("div",{style:{width:"42px",height:"42px",borderRadius:"12px",backgroundColor:"#dbeafe",display:"flex",alignItems:"center",justifyContent:"center",color:"#1d4ed8",fontSize:"18px",flexShrink:0}},e.createElement("i",{className:"fa fa-user-shield"})),e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap mb-0.5"},e.createElement("h6",{className:"fw-bold text-slate-900 mb-0",style:{fontSize:"0.94rem"}},"Mode Pratinjau Administrator / Pengurus"),e.createElement("span",{className:"badge bg-primary text-white px-2.5 py-0.5 rounded-pill small"},"Admin Verifikasi E-KTA")),e.createElement("small",{className:"text-slate-600"},"Anda sedang memvalidasi tampilan E-KTA resmi milik anggota: ",e.createElement("strong",null,a==null?void 0:a.name)," (No. Anggota: ",e.createElement("strong",null,(a==null?void 0:a.no_anggota)||"-"),")."))),e.createElement("button",{type:"button",onClick:()=>window.history.back(),className:"btn btn-sm btn-outline-primary rounded-pill px-3.5 py-1.5 fw-semibold shadow-sm"},e.createElement("i",{className:"fa fa-arrow-left me-1.5"})," Kembali"))),e.createElement("div",{className:"header-banner-box p-4 rounded-4 mb-4 shadow-sm"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"header-icon-wrap me-3 shadow"},e.createElement("i",{className:"fa fa-id-card fa-2x text-white"})),e.createElement("div",null,e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap"},e.createElement("h4",{className:"mb-0 fw-bold header-main-title"},"Kartu Tanda Anggota Elektronik (E-KTA)"),e.createElement("span",{className:"badge-status-pill shadow-sm"},e.createElement("i",{className:"fa fa-check-circle me-1 text-emerald-600"}),N)),e.createElement("p",{className:"header-subtitle mb-0 mt-1"},"Kartu identitas resmi profesi Ikatan Terapis Wicara Indonesia (IKATWI) yang dapat diunduh (JPG/PNG) & dicetak."))),e.createElement("div",{className:"d-flex gap-2 flex-wrap flex-shrink-0"},(a==null?void 0:a.no_anggota)&&e.createElement("div",{className:"badge-no-anggota-banner shadow-sm"},e.createElement("i",{className:"fa fa-award text-emerald-600 me-2"}),e.createElement("span",null,"No. Anggota:")," ",e.createElement("strong",null,a.no_anggota))))),B?e.createElement(e.Fragment,null,e.createElement("div",{className:"card control-card rounded-4 shadow-sm mb-4"},e.createElement("div",{className:"card-body p-3 p-md-4"},e.createElement("div",{className:"d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3"},e.createElement("div",{className:"d-flex align-items-center gap-2.5"},e.createElement("span",{className:"toolbar-icon-pill shadow-sm"},e.createElement("i",{className:"fa fa-download text-primary"})),e.createElement("div",null,e.createElement("h6",{className:"fw-bold text-slate-900 mb-0"},"Opsi Unduh & Cetak Kartu"),e.createElement("small",{className:"text-slate-600"},"Format gambar HD (PNG / JPG 300 DPI) kartu murni tanpa tombol"))),e.createElement("div",{className:"d-flex align-items-center gap-2 flex-wrap"},e.createElement("div",{className:"btn-group shadow-sm"},e.createElement("button",{type:"button",onClick:()=>r("png","front"),disabled:t,className:"btn btn-sm btn-primary-custom fw-semibold d-inline-flex align-items-center gap-1.5 px-3 py-2"},t&&v==="front-png"?e.createElement("span",{className:"spinner-border spinner-border-sm",role:"status"}):e.createElement("i",{className:"fa fa-image"}),e.createElement("span",null,"Unduh Depan (PNG)")),e.createElement("button",{type:"button",onClick:()=>r("jpeg","front"),disabled:t,className:"btn btn-sm btn-outline-primary-custom px-2.5 py-2 fw-bold",title:"Unduh format JPG"},"JPG")),e.createElement("div",{className:"btn-group shadow-sm"},e.createElement("button",{type:"button",onClick:()=>r("png","back"),disabled:t,className:"btn btn-sm btn-teal-custom fw-semibold d-inline-flex align-items-center gap-1.5 px-3 py-2"},t&&v==="back-png"?e.createElement("span",{className:"spinner-border spinner-border-sm",role:"status"}):e.createElement("i",{className:"fa fa-qrcode"}),e.createElement("span",null,"Unduh Belakang (PNG)")),e.createElement("button",{type:"button",onClick:()=>r("jpeg","back"),disabled:t,className:"btn btn-sm btn-outline-teal-custom px-2.5 py-2 fw-bold",title:"Unduh format JPG"},"JPG")),e.createElement("div",{className:"btn-group shadow-sm"},e.createElement("button",{type:"button",onClick:()=>r("png","both"),disabled:t,className:"btn btn-sm btn-emerald-custom fw-semibold d-inline-flex align-items-center gap-1.5 px-3 py-2"},t&&v==="both-png"?e.createElement("span",{className:"spinner-border spinner-border-sm",role:"status"}):e.createElement("i",{className:"fa fa-layer-group"}),e.createElement("span",null,"Unduh Lengkap (PNG)")),e.createElement("button",{type:"button",onClick:()=>r("jpeg","both"),disabled:t,className:"btn btn-sm btn-outline-emerald-custom px-2.5 py-2 fw-bold",title:"Unduh format JPG Lengkap"},"JPG")),e.createElement("button",{type:"button",onClick:G,className:"btn btn-sm btn-print-custom fw-semibold d-inline-flex align-items-center gap-1.5 px-3 py-2 shadow-sm"},e.createElement("i",{className:"fa fa-print"}),e.createElement("span",null,"Cetak E-KTA")))))),e.createElement("div",{ref:R,className:"printable-cards-wrapper"},e.createElement("div",{className:"row g-4 justify-content-center"},e.createElement("div",{className:"col-12 col-xl-6 d-flex justify-content-center"},e.createElement("div",{className:"card-preview-box"},e.createElement("div",{className:"preview-box-header d-flex align-items-center justify-content-between mb-3"},e.createElement("span",{className:"badge-side-pill pill-front shadow-sm"},e.createElement("i",{className:"fa fa-id-card me-1.5"})," Sisi Depan (Front Side)"),e.createElement("div",{className:"d-flex gap-1.5"},e.createElement("button",{onClick:()=>r("png","front"),className:"btn btn-badge-action shadow-sm",title:"Unduh PNG Depan"},e.createElement("i",{className:"fa fa-download text-primary"}),e.createElement("span",null,"PNG")),e.createElement("button",{onClick:()=>r("jpeg","front"),className:"btn btn-badge-action shadow-sm",title:"Unduh JPG Depan"},e.createElement("i",{className:"fa fa-download text-secondary"}),e.createElement("span",null,"JPG")))),e.createElement("div",{className:"card-display-stage"},e.createElement(z,null,e.createElement("div",{ref:b,className:"ekta-card-front shadow"},e.createElement("div",{className:"card-avatar-container"},e.createElement("div",{className:"avatar-frame shadow-sm"},e.createElement("img",{src:(a==null?void 0:a.image)||"/assets/images/user.png",alt:a==null?void 0:a.name,className:"avatar-photo",onError:n=>{n.target.onerror=null,n.target.src="/assets/images/user.png"}}))),e.createElement("div",{className:"card-validity-container text-center"},e.createElement("span",{className:"validity-label"},"Berlaku Sampai :"),e.createElement("span",{className:"validity-date"},"31 DESEMBER ",K)),e.createElement("div",{className:"card-info-container"},e.createElement("div",{className:"info-row"},e.createElement("span",{className:"info-label"},"Nama"),e.createElement("span",{className:"info-colon"},":"),e.createElement("span",{className:"info-value text-uppercase fw-bold"},(a==null?void 0:a.name)||"-")),e.createElement("div",{className:"info-row"},e.createElement("span",{className:"info-label"},"Alamat"),e.createElement("span",{className:"info-colon"},":"),e.createElement("span",{className:"info-value address-value"},(a==null?void 0:a.alamat)||"-")),e.createElement("div",{className:"info-row"},e.createElement("span",{className:"info-label"},"No"),e.createElement("span",{className:"info-colon"},":"),e.createElement("span",{className:"info-value font-monospace fw-bold"},(a==null?void 0:a.no_anggota)||"-")),e.createElement("div",{className:"info-row"},e.createElement("span",{className:"info-label"},"Status"),e.createElement("span",{className:"info-colon"},":"),e.createElement("span",{className:"info-value"},N)))))))),e.createElement("div",{className:"col-12 col-xl-6 d-flex justify-content-center"},e.createElement("div",{className:"card-preview-box"},e.createElement("div",{className:"preview-box-header d-flex align-items-center justify-content-between mb-3"},e.createElement("span",{className:"badge-side-pill pill-back shadow-sm"},e.createElement("i",{className:"fa fa-qrcode me-1.5"})," Sisi Belakang (Back Side)"),e.createElement("div",{className:"d-flex gap-1.5"},e.createElement("button",{onClick:()=>r("png","back"),className:"btn btn-badge-action shadow-sm",title:"Unduh PNG Belakang"},e.createElement("i",{className:"fa fa-download text-teal"}),e.createElement("span",null,"PNG")),e.createElement("button",{onClick:()=>r("jpeg","back"),className:"btn btn-badge-action shadow-sm",title:"Unduh JPG Belakang"},e.createElement("i",{className:"fa fa-download text-secondary"}),e.createElement("span",null,"JPG")))),e.createElement("div",{className:"card-display-stage"},e.createElement(z,null,e.createElement("div",{ref:g,className:"ekta-card-back shadow"},e.createElement("div",{className:"card-qr-container"},e.createElement("div",{className:"qr-wrapper"},e.createElement($,{value:a!=null&&a.no_anggota?`https://ikatwi.org/verify/${a.no_anggota}`:(a==null?void 0:a.name)||"IKATWI",size:120,renderAs:"canvas",level:"H"})))))))))),e.createElement("div",{className:"card notice-card rounded-4 shadow-sm mt-4"},e.createElement("div",{className:"card-body p-4"},e.createElement("div",{className:"d-flex align-items-start gap-3"},e.createElement("div",{className:"notice-icon-circle shadow-sm flex-shrink-0"},e.createElement("i",{className:"fa fa-shield-alt text-emerald-600"})),e.createElement("div",null,e.createElement("h6",{className:"fw-bold text-slate-900 mb-1"},"Informasi Keabsahan Kartu E-KTA"),e.createElement("p",{className:"text-slate-600 small mb-0",style:{lineHeight:1.6}},"E-KTA IKATWI ini adalah dokumen identitas keanggotaan profesi resmi terapis wicara Indonesia. QR Code pada bagian belakang kartu dapat dipindai langsung oleh instansi kesehatan atau masyarakat umum untuk memvalidasi keaslian status keanggotaan secara real-time di sistem pusat IKATWI.")))))):e.createElement("div",{className:"card unpaid-card rounded-4 shadow-sm mt-4 p-5 text-center"},e.createElement("div",{className:"unpaid-icon-wrap mb-3 shadow"},e.createElement("i",{className:"fa fa-credit-card text-amber-600"})),e.createElement("h4",{className:"fw-bold text-slate-900 mb-2"},"E-KTA Belum Dapat Diterbitkan"),e.createElement("p",{className:"text-slate-600 mx-auto mb-4",style:{maxWidth:"520px",fontSize:"0.92rem"}},"Untuk mengaktifkan dan mengunduh Kartu Tanda Anggota Elektronik (E-KTA) periode ",K,", silakan selesaikan pembayaran tagihan iuran tahunan Anda melalui Portal Pembayaran IKATWI."),e.createElement("div",{className:"d-flex justify-content-center gap-2"},e.createElement(L,{href:"/account/tagihan",className:"btn btn-pay-now rounded-pill px-4 py-2.5 fw-bold shadow"},e.createElement("i",{className:"fa fa-receipt me-1.5"}),e.createElement("span",null,"Buka Pusat Tagihan & Bayar Iuran"))))),e.createElement("style",null,`
                .ekta-page-container {
                    color: #1e293b;
                }

                /* Header Banner */
                .header-banner-box {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-left: 6px solid #059669 !important;
                    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
                }
                .header-icon-wrap {
                    width: 54px;
                    height: 54px;
                    border-radius: 14px;
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
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
                .badge-status-pill {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
                    padding: 4px 12px;
                    border-radius: 9999px;
                    font-size: 0.76rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-no-anggota-banner {
                    background-color: #f8fafc;
                    border: 1.5px solid #cbd5e1;
                    color: #0f172a;
                    padding: 8px 18px;
                    border-radius: 12px;
                    font-size: 0.88rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                }

                /* Control Card */
                .control-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-top: 3.5px solid #2563eb !important;
                }
                .toolbar-icon-pill {
                    width: 38px;
                    height: 38px;
                    border-radius: 10px;
                    background-color: #eff6ff;
                    border: 1px solid #bfdbfe;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    flex-shrink: 0;
                }
                .btn-primary-custom {
                    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                    color: #ffffff;
                    border: 1px solid #1d4ed8;
                    border-top-left-radius: 8px;
                    border-bottom-left-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-primary-custom:hover {
                    background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
                    color: #ffffff;
                }
                .btn-outline-primary-custom {
                    background-color: #eff6ff;
                    border: 1px solid #93c5fd;
                    color: #1d4ed8;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-outline-primary-custom:hover {
                    background-color: #2563eb;
                    color: #ffffff;
                }
                .btn-teal-custom {
                    background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
                    color: #ffffff;
                    border: 1px solid #0e7490;
                    border-top-left-radius: 8px;
                    border-bottom-left-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-teal-custom:hover {
                    background: linear-gradient(135deg, #0e7490 0%, #155e75 100%);
                    color: #ffffff;
                }
                .btn-outline-teal-custom {
                    background-color: #ecfeff;
                    border: 1px solid #a5f3fc;
                    color: #0e7490;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-outline-teal-custom:hover {
                    background-color: #0891b2;
                    color: #ffffff;
                }
                .btn-emerald-custom {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border: 1px solid #047857;
                    border-top-left-radius: 8px;
                    border-bottom-left-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-emerald-custom:hover {
                    background: linear-gradient(135deg, #047857 0%, #065f46 100%);
                    color: #ffffff;
                }
                .btn-outline-emerald-custom {
                    background-color: #ecfdf5;
                    border: 1px solid #a7f3d0;
                    color: #047857;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-outline-emerald-custom:hover {
                    background-color: #059669;
                    color: #ffffff;
                }
                .btn-print-custom {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    color: #1e293b;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-print-custom:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                    transform: translateY(-1px);
                }

                /* Preview Box & Badges */
                .card-preview-box {
                    background-color: #ffffff;
                    border: 1.5px solid #e2e8f0;
                    border-radius: 18px;
                    padding: 18px 18px 22px 18px;
                    box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.06);
                    max-width: 694px;
                    width: 100%;
                }
                .badge-side-pill {
                    font-size: 0.8rem;
                    font-weight: 700;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    display: inline-flex;
                    align-items: center;
                }
                .pill-front {
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    border: 1.5px solid #bfdbfe;
                }
                .pill-back {
                    background-color: #ecfeff;
                    color: #0e7490;
                    border: 1.5px solid #a5f3fc;
                }
                .btn-badge-action {
                    background-color: #ffffff;
                    border: 1px solid #cbd5e1;
                    color: #334155;
                    border-radius: 6px;
                    padding: 4px 10px;
                    font-size: 0.76rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    transition: all 0.2s ease;
                }
                .btn-badge-action:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.06);
                }

                /* Card Showcase Stage Backdrop */
                .card-display-stage {
                    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                    border: 1px solid #e2e8f0;
                    border-radius: 14px;
                    padding: 16px 12px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    width: 100%;
                    box-sizing: border-box;
                }

                /* Exact E-KTA Dimensions, Border & Backgrounds */
                .ekta-card-front {
                    width: 650px;
                    min-width: 650px;
                    height: 382px;
                    border-radius: 12px;
                    background-image: url('/assets/images/depan.jpeg');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    border: 1.5px solid #cbd5e1;
                    position: relative;
                    box-sizing: border-box;
                    box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.12), 0 4px 10px -2px rgba(15, 23, 42, 0.06);
                    overflow: hidden;
                }

                .ekta-card-back {
                    width: 650px;
                    min-width: 650px;
                    height: 382px;
                    border-radius: 12px;
                    background-image: url('/assets/images/belakang.jpeg');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    border: 1.5px solid #cbd5e1;
                    position: relative;
                    box-sizing: border-box;
                    box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.12), 0 4px 10px -2px rgba(15, 23, 42, 0.06);
                    overflow: hidden;
                }

                /* Front Card Positioned Elements */
                .card-avatar-container {
                    position: absolute;
                    top: 112px;
                    left: 36px;
                    width: 112px;
                    height: 136px;
                }
                .avatar-frame {
                    width: 112px;
                    height: 136px;
                    border-radius: 8px;
                    overflow: hidden;
                    border: 2.5px solid #ffffff;
                    background-color: #ffffff;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
                }
                .avatar-photo {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .card-validity-container {
                    position: absolute;
                    top: 258px;
                    left: 20px;
                    width: 144px;
                    text-align: center;
                }
                .validity-label {
                    display: block;
                    font-size: 0.68rem;
                    font-weight: 700;
                    color: #1e293b;
                    line-height: 1.1;
                }
                .validity-date {
                    display: block;
                    font-size: 0.74rem;
                    font-weight: 800;
                    color: #0f172a;
                    line-height: 1.2;
                    margin-top: 1px;
                }

                /* Front Member Info */
                .card-info-container {
                    position: absolute;
                    top: 110px;
                    left: 172px;
                    width: 450px;
                    display: flex;
                    flex-direction: column;
                    gap: 7px;
                }
                .info-row {
                    display: grid;
                    grid-template-columns: 56px 8px 1fr;
                    align-items: baseline;
                    font-size: 0.84rem;
                    color: #0f172a;
                    line-height: 1.3;
                }
                .info-label {
                    font-weight: 700;
                    color: #334155;
                    font-size: 0.82rem;
                }
                .info-colon {
                    font-weight: 700;
                    color: #334155;
                }
                .info-value {
                    font-weight: 600;
                    color: #0f172a;
                }
                .address-value {
                    max-width: 320px;
                    font-size: 0.76rem;
                    line-height: 1.25;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                /* Back Card Positioned QR Code */
                .card-qr-container {
                    position: absolute;
                    top: 124px;
                    left: 464px;
                    width: 130px;
                    height: 130px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .qr-wrapper {
                    background-color: #ffffff;
                    padding: 2px;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    line-height: 0;
                }

                /* Notice Card */
                .notice-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-left: 5px solid #059669 !important;
                }
                .notice-icon-circle {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    background-color: #ecfdf5;
                    border: 1px solid #a7f3d0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                }

                /* Unpaid State */
                .unpaid-card {
                    background-color: #ffffff;
                    border: 1.5px solid #fde68a !important;
                    border-top: 5px solid #d97706 !important;
                }
                .unpaid-icon-wrap {
                    width: 76px;
                    height: 76px;
                    border-radius: 22px;
                    background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
                    border: 2px solid #fde68a;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 34px;
                }
                .btn-pay-now {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border: none;
                    font-size: 0.92rem;
                    transition: all 0.2s ease;
                }
                .btn-pay-now:hover {
                    background: linear-gradient(135deg, #047857 0%, #065f46 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                /* Responsive Mobile Adjustments */
                @media (max-width: 768px) {
                    .card-preview-box {
                        padding: 14px 12px 18px 12px;
                        border-radius: 16px;
                    }
                    .card-display-stage {
                        padding: 12px 8px;
                        border-radius: 12px;
                    }
                }
                @media (max-width: 576px) {
                    .card-preview-box {
                        padding: 12px 8px 14px 8px;
                        border-radius: 14px;
                    }
                    .card-display-stage {
                        padding: 8px 4px;
                        border-radius: 10px;
                    }
                    .header-banner-box {
                        padding: 16px !important;
                    }
                }

                /* Print Media Styles */
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    .printable-cards-wrapper, .printable-cards-wrapper * {
                        visibility: visible;
                    }
                    .printable-cards-wrapper {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                    }
                    .preview-box-header, .header-banner-box, .control-card, .notice-card {
                        display: none !important;
                    }
                    .ekta-card-front, .ekta-card-back {
                        page-break-inside: avoid;
                        margin-bottom: 24px;
                        box-shadow: none !important;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                }
            `))}export{O as default};
