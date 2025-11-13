import{r as p,u as N,R as e,L as r,d as E}from"./app.0dd58326.js";import{S as K,N as A,d as w,u as L,m as k,j as x,B as S,a as j,c as P,A as T,D as b}from"./Dropdown.1e34a32b.js";const O=p.exports.createContext(null),M=["as","active","eventKey"];function R(n,o){if(n==null)return{};var t={},s=Object.keys(n),c,i;for(i=0;i<s.length;i++)c=s[i],!(o.indexOf(c)>=0)&&(t[c]=n[c]);return t}function D({key:n,onClick:o,active:t,id:s,role:c,disabled:i}){const d=p.exports.useContext(K),l=p.exports.useContext(A),u=p.exports.useContext(O);let f=t;const m={role:c};if(l){!c&&l.role==="tablist"&&(m.role="tab");const g=l.getControllerId(n!=null?n:null),h=l.getControlledId(n!=null?n:null);m[w("event-key")]=n,m.id=g||s,f=t==null&&n!=null?l.activeKey===n:t,(f||!(u!=null&&u.unmountOnExit)&&!(u!=null&&u.mountOnEnter))&&(m["aria-controls"]=h)}return m.role==="tab"&&(m["aria-selected"]=f,f||(m.tabIndex=-1),i&&(m.tabIndex=-1,m["aria-disabled"]=!0)),m.onClick=L(g=>{i||(o==null||o(g),n!=null&&d&&!g.isPropagationStopped()&&d(n,g))}),[m,{isActive:f}]}const W=p.exports.forwardRef((n,o)=>{let{as:t=S,active:s,eventKey:c}=n,i=R(n,M);const[d,l]=D(Object.assign({key:k(c,i.href),active:s},i));return d[w("active")]=l.isActive,x.exports.jsx(t,Object.assign({},i,d,{ref:o}))});W.displayName="NavItem";const y=p.exports.forwardRef(({bsPrefix:n,className:o,as:t=T,active:s,eventKey:c,disabled:i=!1,...d},l)=>{n=j(n,"nav-link");const[u,f]=D({key:k(c,d.href),active:s,disabled:i,...d});return x.exports.jsx(t,{...d,...u,ref:l,disabled:i,className:P(o,n,i&&"disabled",f.isActive&&"active")})});y.displayName="NavLink";const B=y,C=p.exports.forwardRef(({id:n,title:o,children:t,bsPrefix:s,className:c,rootCloseEvent:i,menuRole:d,disabled:l,active:u,renderMenuOnMount:f,menuVariant:m,...g},h)=>{const I=j(void 0,"nav-item");return x.exports.jsxs(b,{ref:h,...g,className:P(c,I),children:[x.exports.jsx(b.Toggle,{id:n,eventKey:null,active:u,disabled:l,childBsPrefix:s,as:B,children:o}),x.exports.jsx(b.Menu,{role:d,renderOnMount:f,rootCloseEvent:i,variant:m,children:t})]})});C.displayName="NavDropdown";const v=Object.assign(C,{Item:b.Item,ItemText:b.ItemText,Divider:b.Divider,Header:b.Header});function a(n){const{auth:o}=N().props;let t=o.permissions,s=!1;return n.forEach(function(c){t[c]&&(s=!0)}),s}function H(){const{url:n}=N(),o=async s=>{s.preventDefault(),E.Inertia.post("/logout")},t=s=>n.startsWith(s)?"active list-group-item list-group-item-action p-3 fw-semibold":"list-group-item list-group-item-action p-3";return e.createElement(e.Fragment,null,e.createElement("div",{className:"list-group list-group-flush sidebar-container"},a(["dashboard.index"])&&e.createElement(r,{href:"/account/dashboard",className:t("/account/dashboard")},e.createElement("i",{className:"fa fa-tachometer-alt me-3"})," Dashboard"),(a(["categories.index"])||a(["dpw.index"])||a(["dpc.index"])||a(["wilayah.index"]))&&e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header p-3 text-uppercase small fw-bold"},e.createElement("i",{className:"fa fa-database me-2"})," Data Master"),a(["categories.index"])&&e.createElement(r,{href:"/account/categories",className:t("/account/categories")},e.createElement("i",{className:"fa fa-folder me-3"})," Kategori"),a(["dpw.index"])&&e.createElement(r,{href:"/account/dpw",className:t("/account/dpw")},e.createElement("i",{className:"fa fa-university me-3"})," Master DPW"),a(["dpc.index"])&&e.createElement(r,{href:"/account/dpc",className:t("/account/dpc")},e.createElement("i",{className:"fa fa-building me-3"})," Master DPC"),a(["wilayah.index"])&&e.createElement(r,{href:"/account/wilayah",className:t("/account/wilayah")},e.createElement("i",{className:"fa fa-map-marker me-3"})," Wilayah DPW"),a(["wilayah.index"])&&e.createElement(r,{href:"/account/areadpc",className:t("/account/areadpc")},e.createElement("i",{className:"fa fa-map me-3"})," Wilayah DPC")),(a(["biodatas.index"])||a(["pengurus.index"])||a(["ekta.index"]))&&e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header p-3 text-uppercase small fw-bold"},e.createElement("i",{className:"fa fa-users me-2"})," Keanggotaan"),a(["biodatas.index"])&&e.createElement(r,{href:"/account/biodatas",className:t("/account/biodatas")},e.createElement("i",{className:"fa fa-id-card me-3"})," Biodata"),a(["pengurus.index"])&&e.createElement(r,{href:"/account/pengurus",className:t("/account/pengurus")},e.createElement("i",{className:"fa fa-user-tie me-3"})," Pengurus"),a(["ekta.index"])&&e.createElement(r,{href:"/account/ekta",className:t("/account/ekta")},e.createElement("i",{className:"fa fa-address-card me-3"})," E-KTA")),(a(["tagihan.index"])||a(["transactions.index"]))&&e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header p-3 text-uppercase small fw-bold"},e.createElement("i",{className:"fa fa-wallet me-2"})," Keuangan"),a(["tagihan.index"])&&e.createElement(r,{href:"/account/tagihan",className:t("/account/tagihan")},e.createElement("i",{className:"fa fa-credit-card me-3"})," Tagihan Iuran"),a(["transactions.index"])&&e.createElement(r,{href:"/account/transactions",className:t("/account/transactions")},e.createElement("i",{className:"fa fa-exchange-alt me-3"})," Transaksi")),(a(["products.index"])||a(["kegiatan.index"]))&&e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header p-3 text-uppercase small fw-bold"},e.createElement("i",{className:"fa fa-calendar-alt me-2"})," Kegiatan"),a(["products.index"])&&e.createElement(r,{href:"/account/products",className:t("/account/products")},e.createElement("i",{className:"fa fa-tasks me-3"})," Kegiatan"),a(["kegiatan.index"])&&e.createElement(r,{href:"/account/kegiatan",className:t("/account/kegiatan")},e.createElement("i",{className:"fa fa-calendar-check me-3"})," Agenda Kegiatan")),(a(["documents.index"])||a(["ejurnal.index"])||a(["pengajuan.index"])||a(["verifPengajuan.index"])||a(["verifPengajuanDpw.index"])||a(["verifPengajuanDpc.index"])||a(["arsips.index"]))&&e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header p-3 text-uppercase small fw-bold"},e.createElement("i",{className:"fa fa-folder-open me-2"})," Dokumen & Mutasi"),a(["documents.index"])&&e.createElement(r,{href:"/account/documents",className:t("/account/documents")},e.createElement("i",{className:"fa fa-file-pdf me-3"})," Dokumen Kelengkapan"),a(["ejurnal.index"])&&e.createElement(r,{href:"/account/ejurnal",className:t("/account/ejurnal")},e.createElement("i",{className:"fa fa-book me-3"})," E-Jurnal"),a(["pengajuan.index"])&&e.createElement(e.Fragment,null,e.createElement(r,{href:"/account/pengajuan",className:t("/account/pengajuan")},e.createElement("i",{className:"fa fa-paper-plane me-3"})," Pengajuan Mutasi"),e.createElement(r,{href:"/account/print",className:t("/account/print")},e.createElement("i",{className:"fa fa-print me-3"})," Pengajuan Print")),(a(["verifPengajuan.index"])||a(["verifPengajuanDpw.index"])||a(["verifPengajuanDpc.index"]))&&e.createElement("div",{className:"verification-section"},e.createElement("div",{className:"sidebar-subheader px-3 py-2 small fw-semibold"},e.createElement("i",{className:"fa fa-check-double me-2"})," Verifikasi Mutasi"),a(["verifPengajuan.index"])&&e.createElement(r,{href:"/account/verifPengajuan",className:t("/account/verifPengajuan")},e.createElement("i",{className:"fa fa-check-circle me-3"})," Verifikasi Utama"),a(["verifPengajuanDpw.index"])&&e.createElement(r,{href:"/account/verifPengajuanDpw",className:t("/account/verifPengajuanDpw")},e.createElement("i",{className:"fa fa-check-circle me-3"})," Verifikasi DPW"),a(["verifPengajuanDpc.index"])&&e.createElement(r,{href:"/account/verifPengajuanDpc",className:t("/account/verifPengajuanDpc")},e.createElement("i",{className:"fa fa-check-circle me-3"})," Verifikasi DPC"),a(["verifPengajuan.index"])&&e.createElement(r,{href:"/account/arsips",className:t("/account/arsips")},e.createElement("i",{className:"fa fa-archive me-3"})," Arsip Pengajuan"))),(a(["sliders.index"])||a(["roles.index"])||a(["permissions.index"])||a(["users.index"]))&&e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header p-3 text-uppercase small fw-bold"},e.createElement("i",{className:"fa fa-cogs me-2"})," Sistem"),a(["sliders.index"])&&e.createElement(r,{href:"/account/sliders",className:t("/account/sliders")},e.createElement("i",{className:"fa fa-images me-3"})," Sliders"),a(["roles.index"])&&e.createElement(r,{href:"/account/roles",className:t("/account/roles")},e.createElement("i",{className:"fa fa-user-shield me-3"})," Roles"),a(["permissions.index"])&&e.createElement(r,{href:"/account/permissions",className:t("/account/permissions")},e.createElement("i",{className:"fa fa-key me-3"})," Permissions"),a(["users.index"])&&e.createElement(r,{href:"/account/users",className:t("/account/users")},e.createElement("i",{className:"fa fa-user-cog me-3"})," Users")),e.createElement("div",{className:"sidebar-section"},e.createElement("div",{className:"sidebar-section-header p-3 text-uppercase small fw-bold"},e.createElement("i",{className:"fa fa-compass me-2"})," Navigasi"),e.createElement(r,{href:"/",className:t("/")},e.createElement("i",{className:"fa fa-home me-3"})," Beranda"),e.createElement(r,{onClick:o,className:t("/logout")},e.createElement("i",{className:"fa fa-sign-out-alt me-3"})," Logout"))),e.createElement("style",{jsx:!0},`
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
                    overflow: hidden;
                    border-right: 1px solid #e2e8f0;
                    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.04);
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

                .sidebar-section {
                    border-bottom: 1px solid #f1f5f9;
                    position: relative;
                    z-index: 1;
                }
                
                .sidebar-section:last-child {
                    border-bottom: none;
                }
                
                .sidebar-section-header {
                    background: linear-gradient(135deg, 
                        #f8fafc 0%, 
                        #f1f5f9 100%);
                    border-left: 4px solid #6366f1;
                    color: #475569;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    border-bottom: 1px solid #e2e8f0;
                    position: relative;
                    overflow: hidden;
                }

                .sidebar-section-header::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 0;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, #6366f1, transparent);
                    transition: width 0.3s ease;
                }

                .sidebar-section-header:hover::after {
                    width: 100%;
                }
                
                .sidebar-subheader {
                    background: linear-gradient(135deg, 
                        #f8fafc 0%, 
                        #f1f5f9 100%);
                    font-size: 0.75rem;
                    border-left: 3px solid #10b981;
                    margin: 0.5rem;
                    color: #64748b;
                    border-radius: 6px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
                }
                
                .verification-section {
                    background: #ffffff;
                    margin: 0.5rem;
                    border-radius: 8px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
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
                    box-shadow: inset 4px 0 0 #6366f1;
                }
                
                .list-group-item.active {
                    background: linear-gradient(135deg, 
                        rgba(99, 102, 241, 0.08) 0%, 
                        rgba(99, 102, 241, 0.12) 100%);
                    color: #6366f1;
                    border-left: 4px solid #6366f1;
                    font-weight: 600;
                    box-shadow: 
                        inset 4px 0 0 #6366f1,
                        0 4px 12px rgba(99, 102, 241, 0.1);
                }
                
                .list-group-item.active::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: 16px;
                    transform: translateY(-50%);
                    width: 6px;
                    height: 6px;
                    background: #6366f1;
                    border-radius: 50%;
                    box-shadow: 0 0 8px #6366f1;
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

                /* Icon colors for different sections */
                .sidebar-section-header i {
                    color: #6366f1;
                }

                .sidebar-subheader i {
                    color: #10b981;
                }

                /* Scrollbar styling */
                .sidebar-container::-webkit-scrollbar {
                    width: 4px;
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
                }
            `))}function V({children:n}){const{auth:o}=N().props,[t,s]=p.exports.useState(!1),c=l=>{l.preventDefault(),t?(document.body.classList.remove("sb-sidenav-toggled"),s(!1)):(document.body.classList.add("sb-sidenav-toggled"),s(!0))},i=async l=>{l.preventDefault(),E.Inertia.post("/logout")},d=async l=>{l.preventDefault(),E.Inertia.get("/")};return e.createElement(e.Fragment,null,e.createElement("div",{className:"d-flex sb-sidenav-toggled",id:"wrapper"},e.createElement("div",{className:"bg-dark",id:"sidebar-wrapper"},e.createElement("div",{className:"sidebar-heading bg-light text-center"},e.createElement("img",{src:"/assets/images/logo.png",width:"23"}),e.createElement("strong",null,"IKATWI")," ",e.createElement("small",null)),e.createElement(H,null)),e.createElement("div",{id:"page-content-wrapper"},e.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},e.createElement("div",{className:"container-fluid"},e.createElement("button",{className:"btn btn-success-dark",onClick:c},e.createElement("i",{className:"fa fa-list-ul"})),e.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},e.createElement("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0"},e.createElement(v,{title:o.user.name,className:"fw-bold",id:"basic-nav-dropdown"},e.createElement(v.Item,{onClick:i},e.createElement("i",{className:"fa fa-sign-out-alt me-2"})," Logout"),e.createElement(v.Item,{onClick:d},e.createElement("i",{className:"fa fa-sign-out-alt me-2"})," Home ")))))),e.createElement("div",{className:"container-fluid"},n))))}export{V as L,a as h};
