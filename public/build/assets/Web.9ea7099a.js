import{r as d,R as e,L as n,u as v}from"./app.9e55ebe1.js";import{p as r,b as k,j as x,D as s,e as N,f as S}from"./Dropdown.e4b41719.js";import{a as z}from"./index.7d9b4225.js";const j={id:r.exports.string,href:r.exports.string,onClick:r.exports.func,title:r.exports.node.isRequired,disabled:r.exports.bool,align:k,menuRole:r.exports.string,renderMenuOnMount:r.exports.bool,rootCloseEvent:r.exports.string,menuVariant:r.exports.oneOf(["dark"]),flip:r.exports.bool,bsPrefix:r.exports.string,variant:r.exports.string,size:r.exports.string},h=d.exports.forwardRef(({title:a,children:w,bsPrefix:m,rootCloseEvent:c,variant:p,size:i,menuRole:g,renderMenuOnMount:u,disabled:t,href:f,id:o,menuVariant:l,flip:b,...E},y)=>x.exports.jsxs(s,{ref:y,...E,children:[x.exports.jsx(N,{id:o,href:f,size:i,variant:p,disabled:t,childBsPrefix:m,children:a}),x.exports.jsx(S,{role:g,renderOnMount:u,rootCloseEvent:c,variant:l,flip:b,children:w})]}));h.displayName="DropdownButton";h.propTypes=j;const C=h;function I(){let a={marginLeft:"7px"};return e.createElement(e.Fragment,null,e.createElement("nav",{className:"navbar-expand-md navbar-dark fixed-top shadow custom-green-header"},e.createElement("div",{className:"container"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-7"},e.createElement("header",{className:"d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1"},e.createElement(n,{href:"/",className:"d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none"},e.createElement("img",{src:"/assets/images/logo.png",width:"50",alt:"Logo Ikatan Terapis Wicara Indonesia",className:"header-logo"}),e.createElement("span",{style:a},e.createElement("h5",{className:"header-title"},e.createElement("strong",null,"Ikatan Terapis Wicara Indonesia")))),e.createElement("div",{id:"page-content-wrapper"}))),e.createElement("div",{className:"col-md-1"},e.createElement("header",{className:"d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1"},e.createElement("div",{className:"d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none"},e.createElement(C,{id:"dropdown-basic-button",title:"Menu",className:"custom-dropdown mt-1",variant:"success"},e.createElement(n,{href:"/history"},e.createElement(s.Item,{href:"#/action-2",className:"dropdown-item-custom"},"Sejarah & Pengurus")),e.createElement(n,{href:"/visimisi"},e.createElement(s.Item,{href:"#/action-2",className:"dropdown-item-custom"},"Visi & Misi")),e.createElement(n,{href:"/kegiatan"},e.createElement(s.Item,{href:"#/action-3",className:"dropdown-item-custom"},"Kegiatan")),e.createElement(n,{href:"/anggota"},e.createElement(s.Item,{href:"#/action-4",className:"dropdown-item-custom"},"Anggota")),e.createElement(n,{href:"/wilayah"},e.createElement(s.Item,{href:"#/action-5",className:"dropdown-item-custom"},"Wilayah DPW")),e.createElement(n,{href:"/wilayahdpc"},e.createElement(s.Item,{href:"#/action-6",className:"dropdown-item-custom"},"Wilayah DPC")),e.createElement(s.Item,{href:"https://ikatwisiporlin-ktki.kemkes.go.id/",target:"_blank",className:"dropdown-item-custom"},"Siporlin"),e.createElement(s.Item,{href:"https://siedunakes-ktki.kemkes.go.id/home/",target:"_blank",className:"dropdown-item-custom"},"Siedunakes")))))))),e.createElement("style",{jsx:!0},`
                .custom-green-header {
                    background: linear-gradient(135deg, #0d966d 0%, #047852 50%, #036745 100%) !important;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                }
                
                .header-logo {
                    transition: all 0.3s ease;
                }
                
                .header-logo:hover {
                    transform: scale(1.05);
                }
                
                .header-title {
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                    font-weight: 500;
                    margin: 0;
                    color: rgba(255, 255, 255, 0.95);
                    letter-spacing: 0.5px;
                }
                
                .custom-dropdown .btn-success {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%) !important;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 0.6rem;
                    padding: 0.5rem 1rem;
                    font-weight: 500;
                    backdrop-filter: blur(8px);
                    transition: all 0.3s ease;
                    color: rgba(255, 255, 255, 0.95);
                    font-size: 0.9rem;
                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                }
                
                .custom-dropdown .btn-success:hover {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.12) 100%) !important;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: rgba(255, 255, 255, 0.98);
                }
                
                .custom-dropdown .btn-success:active,
                .custom-dropdown .btn-success:focus {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%) !important;
                    transform: translateY(0);
                    color: rgba(255, 255, 255, 0.95);
                }
                
                .custom-dropdown .dropdown-menu {
                    background: linear-gradient(135deg, #0d966d 0%, #047852 100%) !important;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 0.6rem;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
                    backdrop-filter: blur(10px);
                    overflow: hidden;
                }
                
                .dropdown-item-custom {
                    color: rgba(255, 255, 255, 0.9) !important;
                    padding: 0.7rem 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: block;
                    position: relative;
                    overflow: hidden;
                    font-size: 0.9rem;
                }
                
                .dropdown-item-custom::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
                    transition: left 0.5s;
                }
                
                .dropdown-item-custom:hover::before {
                    left: 100%;
                }
                
                .dropdown-item-custom:hover {
                    background-color: rgba(255, 255, 255, 0.12) !important;
                    color: rgba(255, 255, 255, 0.95) !important;
                    padding-left: 1.3rem;
                }
                
                .dropdown-item-custom:active {
                    background-color: rgba(255, 255, 255, 0.18) !important;
                    color: rgba(255, 255, 255, 0.95) !important;
                }
                
                /* Responsive design */
                @media (max-width: 768px) {
                    .header-title {
                        font-size: 0.95rem;
                    }
                    
                    .header-logo {
                        width: 40px;
                    }
                    
                    .custom-dropdown .btn-success {
                        padding: 0.4rem 0.8rem;
                        font-size: 0.85rem;
                    }
                }
                
                @media (max-width: 576px) {
                    .header-title {
                        font-size: 0.85rem;
                        margin-left: 5px !important;
                        line-height: 1.2;
                    }
                    
                    .custom-dropdown {
                        width: 100%;
                        text-align: center;
                    }
                    
                    .custom-dropdown .btn-success {
                        width: 100%;
                        margin-bottom: 0.5rem;
                        font-size: 0.8rem;
                    }
                }
            `))}function W(){const{auth:a,url:w}=v().props,[m,c]=d.exports.useState([]),[p,i]=d.exports.useState(!1),[g,u]=d.exports.useState(""),t=o=>!!(o==="/"&&(window.location.pathname==="/"||window.location.pathname==="")||o!=="/"&&window.location.pathname.startsWith(o)),f=o=>{const l=o.target.value;if(u(l),!l.trim()){c([]);return}i(!0),z.post("/search",{q:l}).then(b=>{i(!1),c(b.data.products||[])}).catch(()=>{i(!1)})};return e.createElement(e.Fragment,null,e.createElement("nav",{className:"fixed-bottom mx-auto p-1",style:{maxWidth:"460px",width:"calc(100% - 24px)",bottom:"14px",zIndex:1040}},e.createElement("div",{className:"d-flex align-items-center justify-content-around py-2 px-1 shadow-lg",style:{backgroundColor:"rgba(6, 78, 59, 0.94)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderRadius:"24px",border:"1px solid rgba(255, 255, 255, 0.18)",boxShadow:"0 16px 36px -6px rgba(6, 78, 59, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"}},e.createElement(n,{href:"/",className:"text-decoration-none text-center flex-fill d-flex flex-column align-items-center position-relative py-1 nav-dock-item",style:{color:t("/")?"#ffffff":"rgba(255, 255, 255, 0.7)",transition:"all 0.25s ease"}},e.createElement("div",{className:"rounded-circle d-flex align-items-center justify-content-center mb-1",style:{width:"38px",height:"38px",backgroundColor:t("/")?"rgba(255, 255, 255, 0.22)":"transparent",transform:t("/")?"scale(1.1) translateY(-2px)":"none",transition:"all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",boxShadow:t("/")?"0 4px 12px rgba(0, 0, 0, 0.25)":"none"}},e.createElement("i",{className:"fa fa-home",style:{fontSize:"1.15rem"}})),e.createElement("span",{style:{fontSize:"0.68rem",fontWeight:t("/")?700:500,letterSpacing:"0.02em"}},"Beranda")),e.createElement(n,{href:a&&a.user?"/account/tagihan":"/login",className:"text-decoration-none text-center flex-fill d-flex flex-column align-items-center position-relative py-1 nav-dock-item",style:{color:t("/account/tagihan")?"#ffffff":"rgba(255, 255, 255, 0.7)",transition:"all 0.25s ease"}},e.createElement("div",{className:"rounded-circle d-flex align-items-center justify-content-center mb-1",style:{width:"38px",height:"38px",backgroundColor:t("/account/tagihan")?"rgba(255, 255, 255, 0.22)":"transparent",transform:t("/account/tagihan")?"scale(1.1) translateY(-2px)":"none",transition:"all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",boxShadow:t("/account/tagihan")?"0 4px 12px rgba(0, 0, 0, 0.25)":"none"}},e.createElement("i",{className:"fa fa-receipt",style:{fontSize:"1.05rem"}})),e.createElement("span",{style:{fontSize:"0.68rem",fontWeight:t("/account/tagihan")?700:500,letterSpacing:"0.02em"}},"Tagihan")),e.createElement(n,{href:a&&a.user?"/account/ekta":"/login",className:"text-decoration-none text-center flex-fill d-flex flex-column align-items-center position-relative py-1 nav-dock-item",style:{color:t("/account/ekta")?"#ffffff":"rgba(255, 255, 255, 0.7)",transition:"all 0.25s ease"}},e.createElement("div",{className:"rounded-circle d-flex align-items-center justify-content-center mb-1",style:{width:"38px",height:"38px",backgroundColor:t("/account/ekta")?"rgba(255, 255, 255, 0.22)":"transparent",transform:t("/account/ekta")?"scale(1.1) translateY(-2px)":"none",transition:"all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",boxShadow:t("/account/ekta")?"0 4px 12px rgba(0, 0, 0, 0.25)":"none"}},e.createElement("i",{className:"fa fa-id-card",style:{fontSize:"1.05rem"}})),e.createElement("span",{style:{fontSize:"0.68rem",fontWeight:t("/account/ekta")?700:500,letterSpacing:"0.02em"}},"e-KTA")),e.createElement(n,{href:a&&a.user?"/account/dashboard":"/login",className:"text-decoration-none text-center flex-fill d-flex flex-column align-items-center position-relative py-1 nav-dock-item",style:{color:t("/account/dashboard")||t("/login")?"#ffffff":"rgba(255, 255, 255, 0.7)",transition:"all 0.25s ease"}},e.createElement("div",{className:"rounded-circle d-flex align-items-center justify-content-center mb-1",style:{width:"38px",height:"38px",backgroundColor:t("/account/dashboard")||t("/login")?"rgba(255, 255, 255, 0.22)":"transparent",transform:t("/account/dashboard")||t("/login")?"scale(1.1) translateY(-2px)":"none",transition:"all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",boxShadow:t("/account/dashboard")||t("/login")?"0 4px 12px rgba(0, 0, 0, 0.25)":"none"}},e.createElement("i",{className:"fa fa-user-circle",style:{fontSize:"1.15rem"}})),e.createElement("span",{style:{fontSize:"0.68rem",fontWeight:t("/account/dashboard")||t("/login")?700:500,letterSpacing:"0.02em"}},a&&a.user?"Akun":"Masuk")))),e.createElement("div",{className:"modal fade",id:"search",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog modal-dialog-centered"},e.createElement("div",{className:"modal-content border-0 rounded-4 shadow-lg overflow-hidden"},e.createElement("div",{className:"modal-header text-white",style:{backgroundColor:"#064e3b"}},e.createElement("h6",{className:"modal-title fw-bold",id:"exampleModalLabel"},e.createElement("i",{className:"fa fa-search me-2"})," Pencarian"),e.createElement("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body p-4"},e.createElement("div",{className:"position-relative mb-3"},e.createElement("input",{type:"text",className:"form-control rounded-3 py-2 ps-4",value:g,onChange:f,placeholder:"Cari layanan, kegiatan, produk...",style:{borderColor:"#cbd5e1"}})),p&&e.createElement("div",{className:"text-center py-4"},e.createElement("div",{className:"spinner-border text-success spinner-border-sm",role:"status"}),e.createElement("p",{className:"text-muted small mt-2 mb-0"},"Mencari data...")),e.createElement("div",{style:{maxHeight:"280px",overflowY:"auto"}},m.map((o,l)=>e.createElement("a",{href:`/products/${o.slug}`,className:"text-decoration-none text-dark d-block mb-2",key:l},e.createElement("div",{className:"p-2.5 rounded-3 bg-light border hover-bg-emerald transition-all"},e.createElement("div",{className:"fw-semibold small"},o.title))))))))),e.createElement("style",{jsx:!0},`
                .nav-dock-item:active {
                    transform: scale(0.92);
                }
                .hover-bg-emerald:hover {
                    background-color: #ecfdf5 !important;
                    border-color: #a7f3d0 !important;
                }
            `))}function P({children:a}){return e.createElement(e.Fragment,null,e.createElement(I,null),e.createElement("div",{className:"main"},a,e.createElement(W,null)))}export{P as L};
