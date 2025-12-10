import{r as f,u as k,R as e,L as n,d as N}from"./app.1d91d38e.js";import{S as T,N as C,d as w,u as K,m as j,j as x,B as L,a as y,c as P,A as M,D as b}from"./Dropdown.83098e85.js";const z=f.exports.createContext(null),O=["as","active","eventKey"];function R(r,s){if(r==null)return{};var l={},m=Object.keys(r),c,i;for(i=0;i<m.length;i++)c=m[i],!(s.indexOf(c)>=0)&&(l[c]=r[c]);return l}function D({key:r,onClick:s,active:l,id:m,role:c,disabled:i}){const d=f.exports.useContext(T),t=f.exports.useContext(C),p=f.exports.useContext(z);let u=l;const o={role:c};if(t){!c&&t.role==="tablist"&&(o.role="tab");const g=t.getControllerId(r!=null?r:null),h=t.getControlledId(r!=null?r:null);o[w("event-key")]=r,o.id=g||m,u=l==null&&r!=null?t.activeKey===r:l,(u||!(p!=null&&p.unmountOnExit)&&!(p!=null&&p.mountOnEnter))&&(o["aria-controls"]=h)}return o.role==="tab"&&(o["aria-selected"]=u,u||(o.tabIndex=-1),i&&(o.tabIndex=-1,o["aria-disabled"]=!0)),o.onClick=K(g=>{i||(s==null||s(g),r!=null&&d&&!g.isPropagationStopped()&&d(r,g))}),[o,{isActive:u}]}const H=f.exports.forwardRef((r,s)=>{let{as:l=L,active:m,eventKey:c}=r,i=R(r,O);const[d,t]=D(Object.assign({key:j(c,i.href),active:m},i));return d[w("active")]=t.isActive,x.exports.jsx(l,Object.assign({},i,d,{ref:s}))});H.displayName="NavItem";const I=f.exports.forwardRef(({bsPrefix:r,className:s,as:l=M,active:m,eventKey:c,disabled:i=!1,...d},t)=>{r=y(r,"nav-link");const[p,u]=D({key:j(c,d.href),active:m,disabled:i,...d});return x.exports.jsx(l,{...d,...p,ref:t,disabled:i,className:P(s,r,i&&"disabled",u.isActive&&"active")})});I.displayName="NavLink";const W=I,A=f.exports.forwardRef(({id:r,title:s,children:l,bsPrefix:m,className:c,rootCloseEvent:i,menuRole:d,disabled:t,active:p,renderMenuOnMount:u,menuVariant:o,...g},h)=>{const E=y(void 0,"nav-item");return x.exports.jsxs(b,{ref:h,...g,className:P(c,E),children:[x.exports.jsx(b.Toggle,{id:r,eventKey:null,active:p,disabled:t,childBsPrefix:m,as:W,children:s}),x.exports.jsx(b.Menu,{role:d,renderOnMount:u,rootCloseEvent:i,variant:o,children:l})]})});A.displayName="NavDropdown";const v=Object.assign(A,{Item:b.Item,ItemText:b.ItemText,Divider:b.Divider,Header:b.Header});function a(r){const{auth:s}=k().props;let l=s.permissions,m=!1;return r.forEach(function(c){l[c]&&(m=!0)}),m}function B(){const{url:r}=k(),s=f.exports.useRef(null),[l,m]=f.exports.useState(!1),[c,i]=f.exports.useState(!1),d=async o=>{o.preventDefault(),N.Inertia.post("/logout")},t=o=>r.startsWith(o)?"active list-group-item list-group-item-action p-3 fw-semibold":"list-group-item list-group-item-action p-3",p=()=>{s.current&&s.current.scrollTo({top:0,behavior:"smooth"})},u=()=>{s.current&&s.current.scrollTo({top:s.current.scrollHeight,behavior:"smooth"})};return f.exports.useEffect(()=>{const o=()=>{if(s.current){const{scrollTop:h,scrollHeight:E,clientHeight:S}=s.current;m(h>50),i(h+S<E-50)}},g=s.current;if(g)return g.addEventListener("scroll",o),o(),()=>{g.removeEventListener("scroll",o)}},[]),e.createElement(e.Fragment,null,e.createElement("div",{className:"list-group list-group-flush sidebar-container",ref:s},l&&e.createElement("button",{className:"scroll-btn scroll-top-btn",onClick:p,"aria-label":"Scroll ke atas"},e.createElement("i",{className:"fa fa-chevron-up"})),c&&e.createElement("button",{className:"scroll-btn scroll-bottom-btn",onClick:u,"aria-label":"Scroll ke bawah"},e.createElement("i",{className:"fa fa-chevron-down"})),e.createElement("div",{className:"sidebar-header"},e.createElement("div",{className:"katwi-logo"},e.createElement("div",{className:"logo-icon"},e.createElement("i",{className:"fa fa-users"})),e.createElement("div",{className:"logo-text"},e.createElement("span",{className:"katwi-title"},"KATWI"),e.createElement("span",{className:"katwi-subtitle"},"Management System")))),e.createElement(n,{href:"/account/dashboard",className:`dashboard-menu ${t("/account/dashboard")}`},e.createElement("i",{className:"fa fa-tachometer-alt me-3"})," Dashboard"),(a(["categories.index"])||a(["dpw.index"])||a(["dpc.index"])||a(["wilayah.index"]))&&e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header"},e.createElement("i",{className:"fa fa-database me-2"})," DATA MASTER"),e.createElement("div",{className:"menu-items"},a(["categories.index"])&&e.createElement(n,{href:"/account/categories",className:t("/account/categories")},e.createElement("i",{className:"fa fa-folder me-3"})," Kategori"),a(["dpw.index"])&&e.createElement(n,{href:"/account/dpw",className:t("/account/dpw")},e.createElement("i",{className:"fa fa-university me-3"})," Master DPW"),a(["dpc.index"])&&e.createElement(n,{href:"/account/dpc",className:t("/account/dpc")},e.createElement("i",{className:"fa fa-building me-3"})," Master DPC"),a(["wilayah.index"])&&e.createElement(n,{href:"/account/wilayah",className:t("/account/wilayah")},e.createElement("i",{className:"fa fa-map-marker me-3"})," Wilayah DPW"),a(["wilayah.index"])&&e.createElement(n,{href:"/account/areadpc",className:t("/account/areadpc")},e.createElement("i",{className:"fa fa-map me-3"})," Wilayah DPC"))),(a(["biodatas.index"])||a(["pengurus.index"])||a(["ekta.index"]))&&e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header"},e.createElement("i",{className:"fa fa-users me-2"})," KEANGGOTAAN"),e.createElement("div",{className:"menu-items"},a(["biodatas.index"])&&e.createElement(n,{href:"/account/biodatas",className:t("/account/biodatas")},e.createElement("i",{className:"fa fa-id-card me-3"})," Biodata"),a(["pengurus.index"])&&e.createElement(n,{href:"/account/pengurus",className:t("/account/pengurus")},e.createElement("i",{className:"fa fa-user-tie me-3"})," Pengurus"),a(["ekta.index"])&&e.createElement(n,{href:"/account/ekta",className:t("/account/ekta")},e.createElement("i",{className:"fa fa-address-card me-3"})," E-KTA"),a(["ekta.index"])&&e.createElement(n,{href:"/account/sig",className:t("/account/sig")},e.createElement("i",{className:"fa fa-address-card me-3"})," SIG"))),(a(["tagihan.index"])||a(["transactions.index"]))&&e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header"},e.createElement("i",{className:"fa fa-wallet me-2"})," KEUANGAN"),e.createElement("div",{className:"menu-items"},a(["tagihan.index"])&&e.createElement(n,{href:"/account/tagihan",className:t("/account/tagihan")},e.createElement("i",{className:"fa fa-credit-card me-3"})," Tagihan Iuran"),a(["transactions.index"])&&e.createElement(n,{href:"/account/transactions",className:t("/account/transactions")},e.createElement("i",{className:"fa fa-exchange-alt me-3"})," Transaksi"))),(a(["products.index"])||a(["kegiatan.index"]))&&e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header"},e.createElement("i",{className:"fa fa-calendar-alt me-2"})," KEGIATAN"),e.createElement("div",{className:"menu-items"},a(["products.index"])&&e.createElement(n,{href:"/account/products",className:t("/account/products")},e.createElement("i",{className:"fa fa-tasks me-3"})," Kegiatan"),a(["kegiatan.index"])&&e.createElement(n,{href:"/account/kegiatan",className:t("/account/kegiatan")},e.createElement("i",{className:"fa fa-calendar-check me-3"})," Agenda Kegiatan"))),(a(["documents.index"])||a(["ejurnal.index"])||a(["pengajuan.index"])||a(["verifPengajuan.index"])||a(["verifPengajuanDpw.index"])||a(["verifPengajuanDpc.index"])||a(["arsips.index"]))&&e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header"},e.createElement("i",{className:"fa fa-folder-open me-2"})," DOKUMEN & MUTASI"),e.createElement("div",{className:"menu-items"},a(["documents.index"])&&e.createElement(n,{href:"/account/documents",className:t("/account/documents")},e.createElement("i",{className:"fa fa-file-pdf me-3"})," Dokumen Kelengkapan"),a(["ejurnal.index"])&&e.createElement(n,{href:"/account/ejurnal",className:t("/account/ejurnal")},e.createElement("i",{className:"fa fa-book me-3"})," E-Jurnal"),a(["pengajuan.index"])&&e.createElement(e.Fragment,null,e.createElement(n,{href:"/account/pengajuan",className:t("/account/pengajuan")},e.createElement("i",{className:"fa fa-paper-plane me-3"})," Pengajuan Mutasi"),e.createElement(n,{href:"/account/print",className:t("/account/print")},e.createElement("i",{className:"fa fa-print me-3"})," Pengajuan Print")),(a(["verifPengajuan.index"])||a(["verifPengajuanDpw.index"])||a(["verifPengajuanDpc.index"]))&&e.createElement("div",{className:"verification-section"},e.createElement("div",{className:"sidebar-subheader"},e.createElement("i",{className:"fa fa-check-double me-2"})," Verifikasi Mutasi"),a(["verifPengajuan.index"])&&e.createElement(n,{href:"/account/verifPengajuan",className:t("/account/verifPengajuan")},e.createElement("i",{className:"fa fa-check-circle me-3"})," Verifikasi Utama"),a(["verifPengajuanDpw.index"])&&e.createElement(n,{href:"/account/verifPengajuanDpw",className:t("/account/verifPengajuanDpw")},e.createElement("i",{className:"fa fa-check-circle me-3"})," Verifikasi DPW"),a(["verifPengajuanDpc.index"])&&e.createElement(n,{href:"/account/verifPengajuanDpc",className:t("/account/verifPengajuanDpc")},e.createElement("i",{className:"fa fa-check-circle me-3"})," Verifikasi DPC"),a(["verifPengajuan.index"])&&e.createElement(n,{href:"/account/arsips",className:t("/account/arsips")},e.createElement("i",{className:"fa fa-archive me-3"})," Arsip Pengajuan")))),(a(["sliders.index"])||a(["roles.index"])||a(["permissions.index"])||a(["users.index"]))&&e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header"},e.createElement("i",{className:"fa fa-cogs me-2"})," SISTEM"),e.createElement("div",{className:"menu-items"},a(["sliders.index"])&&e.createElement(n,{href:"/account/sliders",className:t("/account/sliders")},e.createElement("i",{className:"fa fa-images me-3"})," Sliders"),a(["roles.index"])&&e.createElement(n,{href:"/account/roles",className:t("/account/roles")},e.createElement("i",{className:"fa fa-user-shield me-3"})," Roles"),a(["permissions.index"])&&e.createElement(n,{href:"/account/permissions",className:t("/account/permissions")},e.createElement("i",{className:"fa fa-key me-3"})," Permissions"),a(["users.index"])&&e.createElement(n,{href:"/account/users",className:t("/account/users")},e.createElement("i",{className:"fa fa-user-cog me-3"})," Users"))),e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header"},e.createElement("i",{className:"fa fa-compass me-2"})," NAVIGASI"),e.createElement("div",{className:"menu-items"},e.createElement(n,{href:"/",className:t("/")},e.createElement("i",{className:"fa fa-home me-3"})," Beranda"),e.createElement(n,{onClick:d,className:t("/logout")},e.createElement("i",{className:"fa fa-sign-out-alt me-3"})," Logout")))),e.createElement("style",{jsx:!0},`
                .sidebar-container {
                    background: linear-gradient(135deg, 
                        #ffffff 0%, 
                        #f8fafc 25%, 
                        #f1f5f9 50%, 
                        #e2e8f0 75%, 
                        #ffffff 100%);
                    background-size: 400% 400%;
                    animation: gentleFlow 25s ease infinite;
                    position: relative;
                    overflow-y: auto;
                    overflow-x: hidden;
                    border-right: 1px solid #e2e8f0;
                    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.04);
                    max-height: 100vh;
                    height: 100%;
                    scroll-behavior: smooth;
                }

                .sidebar-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.02) 0%, transparent 50%);
                }

                @keyframes gentleFlow {
                    0%, 100% { background-position: 0% 50% }
                    50% { background-position: 100% 50% }
                }

                /* Header KATWI */
                .sidebar-header {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    padding: 1.5rem 1rem;
                    border-bottom: 1px solid #e2e8f0;
                    margin-bottom: 0;
                }

                .katwi-logo {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .logo-icon {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(10px);
                }

                .logo-icon i {
                    color: white;
                    font-size: 1.2rem;
                }

                .logo-text {
                    display: flex;
                    flex-direction: column;
                }

                .katwi-title {
                    color: white;
                    font-size: 1.5rem;
                    font-weight: bold;
                    line-height: 1.2;
                }

                .katwi-subtitle {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.7rem;
                    font-weight: 500;
                }

                /* Dashboard Menu - FIXED DAN PASTI TAMPIL */
                .dashboard-menu {
                    display: flex !important;
                    align-items: center;
                    padding: 1rem 1.5rem !important;
                    background: linear-gradient(135deg, 
                        rgba(99, 102, 241, 0.05) 0%, 
                        rgba(99, 102, 241, 0.02) 100%) !important;
                    border-bottom: 1px solid #e2e8f0 !important;
                    margin: 0 !important;
                    position: relative;
                    z-index: 2;
                    font-weight: 600;
                    color: #475569 !important;
                    text-decoration: none !important;
                    transition: all 0.3s ease;
                    border-left: 4px solid transparent;
                    width: 100%;
                    box-sizing: border-box;
                }

                .dashboard-menu:hover {
                    background: linear-gradient(135deg, 
                        rgba(99, 102, 241, 0.08) 0%, 
                        rgba(99, 102, 241, 0.04) 100%) !important;
                    color: #6366f1 !important;
                    transform: translateX(5px);
                    border-left: 4px solid #6366f1;
                }

                .dashboard-menu.active {
                    background: linear-gradient(135deg, 
                        rgba(99, 102, 241, 0.1) 0%, 
                        rgba(99, 102, 241, 0.06) 100%) !important;
                    color: #6366f1 !important;
                    border-left: 4px solid #6366f1;
                }

                .dashboard-menu i {
                    width: 20px;
                    text-align: center;
                    transition: all 0.3s ease;
                    color: #64748b;
                }

                .dashboard-menu:hover i,
                .dashboard-menu.active i {
                    color: #6366f1;
                    transform: scale(1.1);
                }

                /* Section Styling */
                .sidebar-section {
                    border-bottom: 1px solid #f1f5f9;
                    position: relative;
                    z-index: 1;
                }
                
                .sidebar-section:first-of-type {
                    margin-top: 0;
                }
                
                .sidebar-section:last-child {
                    border-bottom: none;
                }
                
                .sidebar-section-header {
                    background: linear-gradient(135deg, 
                        #f8fafc 0%, 
                        #f1f5f9 100%);
                    padding: 0.75rem 1rem;
                    color: #475569;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    border-bottom: 1px solid #e2e8f0;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                }

                .sidebar-section-header i {
                    color: #6366f1;
                    width: 16px;
                    text-align: center;
                }
                
                .menu-items {
                    padding: 0.25rem 0;
                }
                
                .sidebar-subheader {
                    background: linear-gradient(135deg, 
                        #f8fafc 0%, 
                        #f1f5f9 100%);
                    font-size: 0.75rem;
                    border-left: 3px solid #10b981;
                    margin: 0.5rem;
                    padding: 0.5rem 0.75rem;
                    color: #64748b;
                    border-radius: 6px;
                    border: 1px solid #e2e8f0;
                    font-weight: 600;
                }
                
                .verification-section {
                    background: #ffffff;
                    margin: 0.5rem;
                    border-radius: 8px;
                    border: 1px solid #e2e8f0;
                    overflow: hidden;
                }
                
                .list-group-item {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: none;
                    color: #475569;
                    background: transparent;
                    border-radius: 0;
                    position: relative;
                    overflow: hidden;
                    font-weight: 500;
                    border-left: 3px solid transparent;
                    padding: 0.75rem 1rem;
                    display: block;
                    text-decoration: none;
                }
                
                .list-group-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, 
                        transparent, 
                        rgba(99, 102, 241, 0.05), 
                        transparent);
                    transition: left 0.6s ease;
                }
                
                .list-group-item:hover::before {
                    left: 100%;
                }
                
                .list-group-item:hover {
                    background: linear-gradient(135deg, #f8fafc, #f1f5f9);
                    transform: translateX(5px);
                    color: #6366f1;
                    border-left: 3px solid #6366f1;
                }
                
                .list-group-item.active {
                    background: linear-gradient(135deg, 
                        rgba(99, 102, 241, 0.08) 0%, 
                        rgba(99, 102, 241, 0.12) 100%);
                    color: #6366f1;
                    border-left: 4px solid #6366f1;
                    font-weight: 600;
                }
                
                .list-group-item i {
                    width: 20px;
                    text-align: center;
                    transition: all 0.3s ease;
                    color: #64748b;
                }
                
                .list-group-item:hover i {
                    transform: scale(1.1);
                    color: #6366f1;
                }
                
                .list-group-item.active i {
                    color: #6366f1;
                    transform: scale(1.1);
                }

                /* Tombol scroll styling */
                .scroll-btn {
                    position: absolute;
                    right: 10px;
                    z-index: 10;
                    background: rgba(99, 102, 241, 0.9);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                }

                .scroll-btn:hover {
                    background: #6366f1;
                    transform: scale(1.1);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                }

                .scroll-top-btn {
                    top: 80px;
                }

                .scroll-bottom-btn {
                    bottom: 10px;
                }

                /* Scrollbar styling */
                .sidebar-container::-webkit-scrollbar {
                    width: 6px;
                }

                .sidebar-container::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 10px;
                }

                .sidebar-container::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #6366f1, #8b5cf6);
                    border-radius: 10px;
                }

                .sidebar-container::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, #8b5cf6, #6366f1);
                }

                /* Responsive design */
                @media (max-width: 768px) {
                    .sidebar-container {
                        border-right: none;
                        border-bottom: 1px solid #e2e8f0;
                    }
                    
                    .scroll-btn {
                        width: 28px;
                        height: 28px;
                        right: 8px;
                    }
                    
                    .scroll-top-btn {
                        top: 70px;
                    }
                    
                    .scroll-bottom-btn {
                        bottom: 8px;
                    }

                    .sidebar-header {
                        padding: 1rem 0.75rem;
                    }

                    .katwi-title {
                        font-size: 1.3rem;
                    }

                    .logo-icon {
                        width: 35px;
                        height: 35px;
                    }

                    .dashboard-menu {
                        padding: 0.875rem 1.25rem !important;
                    }
                }
            `))}function U({children:r}){const{auth:s}=k().props,[l,m]=f.exports.useState(!1),c=t=>{t.preventDefault(),l?(document.body.classList.remove("sb-sidenav-toggled"),m(!1)):(document.body.classList.add("sb-sidenav-toggled"),m(!0))},i=async t=>{t.preventDefault(),N.Inertia.post("/logout")},d=async t=>{t.preventDefault(),N.Inertia.get("/")};return e.createElement(e.Fragment,null,e.createElement("div",{className:"d-flex sb-sidenav-toggled",id:"wrapper"},e.createElement("div",{className:"bg-dark",id:"sidebar-wrapper"},e.createElement("div",{className:"sidebar-heading bg-light text-center"},e.createElement("img",{src:"/assets/images/logo.png",width:"23"}),e.createElement("strong",null,"IKATWI")," ",e.createElement("small",null)),e.createElement(B,null)),e.createElement("div",{id:"page-content-wrapper"},e.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},e.createElement("div",{className:"container-fluid"},e.createElement("button",{className:"btn btn-success-dark",onClick:c},e.createElement("i",{className:"fa fa-list-ul"})),e.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},e.createElement("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0"},e.createElement(v,{title:s.user.name,className:"fw-bold",id:"basic-nav-dropdown"},e.createElement(v.Item,{onClick:i},e.createElement("i",{className:"fa fa-sign-out-alt me-2"})," Logout"),e.createElement(v.Item,{onClick:d},e.createElement("i",{className:"fa fa-sign-out-alt me-2"})," Home ")))))),e.createElement("div",{className:"container-fluid"},r))))}export{U as L,a as h};
