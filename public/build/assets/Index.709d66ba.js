import{u as x,R as e,H as h,L as p}from"./app.495843f8.js";import{L as E}from"./Web.30f20c65.js";import{P as k}from"./Pagination.f5abf5f8.js";import{S as w}from"./Search.5314e60f.js";import"./Dropdown.30a41e0a.js";import"./index.d92c488e.js";function D(){const{wilayah:l}=x().props,f=a=>{if(!a)return null;let t=a.replace(/[^0-9]/g,"");return t.startsWith("0")&&(t="62"+t.slice(1)),t},b=a=>!a||a==="-"?null:a.startsWith("http")?a:`https://instagram.com/${a.replace("@","").trim()}`;return e.createElement(e.Fragment,null,e.createElement(h,null,e.createElement("title",null,"Wilayah DPW - Ikatan Terapis Wicara Indonesia (IKATWI)")),e.createElement(E,null,e.createElement("div",{className:"container py-5 web-portal-wilayah-page"},e.createElement("div",{className:"row justify-content-center mb-5"},e.createElement("div",{className:"col-12 col-lg-10 text-center"},e.createElement("span",{className:"badge-portal-category mb-2"},e.createElement("i",{className:"fa fa-map-marked-alt me-1.5"})," Dewan Pengurus Wilayah (DPW)"),e.createElement("h2",{className:"fw-extrabold text-slate-900 mb-3 display-6",style:{letterSpacing:"-0.03em"}},"Wilayah DPW IKATWI Seluruh Indonesia"),e.createElement("p",{className:"text-slate-600 mx-auto fs-6",style:{maxWidth:"680px"}},"Temukan informasi resmi sekretariat, pimpinan pengurus wilayah, kontak telepon/WhatsApp, dan lokasi kantor DPW di provinsi Anda."),e.createElement("div",{className:"d-inline-flex p-1.5 rounded-pill bg-slate-100 border mt-3 shadow-sm"},e.createElement(p,{href:"/wilayah",className:"btn btn-sm rounded-pill px-4 py-2 fw-bold btn-emerald-active text-white shadow-sm"},e.createElement("i",{className:"fa fa-landmark me-1.5"})," Wilayah DPW (Provinsi)"),e.createElement(p,{href:"/wilayahdpc",className:"btn btn-sm rounded-pill px-4 py-2 fw-semibold text-slate-600 bg-transparent border-0"},e.createElement("i",{className:"fa fa-city me-1.5 text-blue-600"})," Wilayah DPC (Kabupaten/Kota)")))),e.createElement("div",{className:"row justify-content-center mb-4"},e.createElement("div",{className:"col-12 col-md-8 col-lg-6"},e.createElement(w,{URL:"/wilayah"}))),e.createElement("div",{className:"row g-4 mb-5"},(l==null?void 0:l.data)&&l.data.length>0?l.data.map((a,t)=>{var s,c,i,m,d;const r=a.phone?a.phone.trim():"",n=f(r),o=b(a.instagram),u=a.lat&&a.long?`https://maps.google.com/maps?q=${a.lat},${a.long}&hl=id&output=embed`:`https://maps.google.com/maps?q=${encodeURIComponent((((s=a.province)==null?void 0:s.name)||"Indonesia")+" Indonesia")}&hl=id&output=embed`,g=a.lat&&a.long?`https://www.google.com/maps/search/?api=1&query=${a.lat},${a.long}`:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((((c=a.province)==null?void 0:c.name)||"")+" "+(a.alamat||""))}`;return e.createElement("div",{key:t,className:"col-12 col-md-6 col-lg-4"},e.createElement("div",{className:"card h-100 border-0 rounded-4 shadow-sm overflow-hidden portal-card-public"},e.createElement("div",{className:"card-header border-0 py-3 px-4 d-flex justify-content-between align-items-center portal-header-bg"},e.createElement("div",{className:"d-flex align-items-center gap-2.5 overflow-hidden"},e.createElement("span",{className:"portal-dpw-icon shadow-sm"},e.createElement("i",{className:"fa fa-landmark text-white"})),e.createElement("div",null,e.createElement("h5",{className:"mb-0 fw-extrabold text-slate-900 fs-6 text-truncate",title:(i=a.province)==null?void 0:i.name},((m=a.province)==null?void 0:m.name)||"Wilayah DPW"),e.createElement("span",{className:"text-emerald-700 fw-bold",style:{fontSize:"0.72rem"}},"Tingkat Provinsi"))),e.createElement("span",{className:"badge-public-official"},"Resmi")),e.createElement("div",{className:"portal-map-box position-relative"},e.createElement("iframe",{src:u,className:"portal-map-frame",title:`Peta ${(d=a.province)==null?void 0:d.name}`,loading:"lazy"}),e.createElement("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-light btn-open-maps-public shadow-sm rounded-pill"},e.createElement("i",{className:"fa fa-external-link-alt text-primary me-1"})," Buka Maps")),e.createElement("div",{className:"card-body p-4 d-flex flex-column justify-content-between"},e.createElement("div",null,e.createElement("div",{className:"p-3 rounded-3 mb-3 portal-ketua-box d-flex align-items-center gap-3"},e.createElement("div",{className:"portal-ketua-avatar shadow-sm"},e.createElement("i",{className:"fa fa-user-tie text-emerald-800"})),e.createElement("div",{className:"overflow-hidden"},e.createElement("span",{className:"text-slate-500 text-uppercase fw-bold d-block",style:{fontSize:"0.68rem",letterSpacing:"0.05em"}},"KETUA DPW"),e.createElement("strong",{className:"text-slate-900 fs-6 text-truncate d-block",title:a.name_ketua},a.name_ketua||"-"))),e.createElement("div",{className:"mb-3 d-flex align-items-start gap-2 text-slate-700 small"},e.createElement("i",{className:"fa fa-map-marker-alt text-rose-500 mt-1 flex-shrink-0"}),e.createElement("span",{className:"lh-sm text-slate-600"},a.alamat||"Alamat sekretariat belum diatur.")),e.createElement("div",{className:"d-flex flex-wrap gap-2"},n&&e.createElement("a",{href:`https://wa.me/${n}`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-contact-chip btn-whatsapp",title:"Hubungi via WhatsApp"},e.createElement("i",{className:"fa fa-phone-alt me-1.5 text-emerald-600"}),e.createElement("span",null,r)),a.email&&e.createElement("a",{href:`mailto:${a.email}`,className:"btn btn-contact-chip btn-email",title:"Kirim Email"},e.createElement("i",{className:"fa fa-envelope me-1.5 text-blue-600"}),e.createElement("span",{className:"text-truncate",style:{maxWidth:"160px"}},a.email)),o&&e.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"btn btn-contact-chip btn-instagram",title:"Kunjungi Instagram"},e.createElement("i",{className:"fab fa-instagram me-1.5 text-pink-600"}),e.createElement("span",null,"Instagram")))))))}):e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded-4 shadow-sm p-5 text-center bg-white"},e.createElement("i",{className:"fa fa-map-marked-alt fa-3x mb-3 text-slate-300"}),e.createElement("h5",{className:"fw-bold text-slate-800 mb-1"},"Data Wilayah DPW Tidak Ditemukan"),e.createElement("p",{className:"text-slate-500 small"},"Silakan gunakan kata kunci pencarian yang lain.")))),e.createElement("div",{className:"d-flex justify-content-center mb-5"},e.createElement(k,{links:l.links,align:"center"}))),e.createElement("style",null,`
                    .text-slate-900 { color: #0f172a; }
                    .text-slate-800 { color: #1e293b; }
                    .text-slate-700 { color: #334155; }
                    .text-slate-600 { color: #475569; }
                    .text-slate-500 { color: #64748b; }
                    .text-slate-400 { color: #94a3b8; }

                    .badge-portal-category {
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1px solid #a7f3d0;
                        padding: 5px 14px;
                        border-radius: 9999px;
                        font-weight: 700;
                        font-size: 0.8rem;
                        display: inline-flex;
                        align-items: center;
                    }
                    .btn-emerald-active {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        border: none;
                    }

                    .portal-card-public {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #059669 !important;
                        transition: all 0.25s ease;
                        background-color: #ffffff;
                    }
                    .portal-card-public:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 14px 28px rgba(15, 23, 42, 0.09) !important;
                        border-color: #94a3b8 !important;
                    }
                    .portal-header-bg {
                        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                        border-bottom: 1.5px solid #e2e8f0;
                    }
                    .portal-dpw-icon {
                        width: 38px;
                        height: 38px;
                        border-radius: 10px;
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 15px;
                        flex-shrink: 0;
                    }
                    .badge-public-official {
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1px solid #a7f3d0;
                        padding: 3px 10px;
                        border-radius: 9999px;
                        font-size: 0.72rem;
                        font-weight: 700;
                    }

                    .portal-map-box {
                        height: 190px;
                        width: 100%;
                        background-color: #f1f5f9;
                        overflow: hidden;
                    }
                    .portal-map-frame {
                        width: 100%;
                        height: 100%;
                        border: 0;
                        filter: saturate(0.9);
                    }
                    .btn-open-maps-public {
                        position: absolute;
                        bottom: 10px;
                        right: 10px;
                        font-size: 0.74rem;
                        font-weight: 700;
                        padding: 4px 12px;
                        background-color: rgba(255, 255, 255, 0.95);
                        backdrop-filter: blur(4px);
                        border: 1px solid #cbd5e1;
                    }

                    .portal-ketua-box {
                        background-color: #f0fdf4;
                        border: 1.5px solid #bbf7d0;
                    }
                    .portal-ketua-avatar {
                        width: 38px;
                        height: 38px;
                        border-radius: 50%;
                        background-color: #dcfce7;
                        border: 1.5px solid #86efac;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 15px;
                        flex-shrink: 0;
                    }

                    .btn-contact-chip {
                        display: inline-flex;
                        align-items: center;
                        padding: 5px 12px;
                        border-radius: 9999px;
                        font-size: 0.76rem;
                        font-weight: 600;
                        text-decoration: none;
                        transition: all 0.2s ease;
                        border: 1px solid;
                    }
                    .btn-whatsapp {
                        background-color: #f0fdf4;
                        color: #166534;
                        border-color: #bbf7d0;
                    }
                    .btn-whatsapp:hover {
                        background-color: #dcfce7;
                        color: #14532d;
                    }
                    .btn-email {
                        background-color: #eff6ff;
                        color: #1e40af;
                        border-color: #bfdbfe;
                    }
                    .btn-email:hover {
                        background-color: #dbeafe;
                        color: #1e3a8a;
                    }
                    .btn-instagram {
                        background-color: #fdf2f8;
                        color: #9d174d;
                        border-color: #fbcfe8;
                    }
                    .btn-instagram:hover {
                        background-color: #fce7f3;
                        color: #831843;
                    }
                `)))}export{D as default};
