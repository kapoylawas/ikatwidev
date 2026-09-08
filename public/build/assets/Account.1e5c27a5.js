import{r as b,u as w,R as e,L as s,d as T}from"./app.1cd068b7.js";import{S as L,N as R,d as D,u as U,m as z,j as v,B,a as C,c as S,A as O,D as x}from"./Dropdown.fcf9a9f0.js";const F=b.exports.createContext(null),H=["as","active","eventKey"];function V(i,a){if(i==null)return{};var l={},m=Object.keys(i),n,r;for(r=0;r<m.length;r++)n=m[r],!(a.indexOf(n)>=0)&&(l[n]=i[n]);return l}function K({key:i,onClick:a,active:l,id:m,role:n,disabled:r}){const f=b.exports.useContext(L),d=b.exports.useContext(R),g=b.exports.useContext(F);let p=l;const o={role:n};if(d){!n&&d.role==="tablist"&&(o.role="tab");const u=d.getControllerId(i!=null?i:null),c=d.getControlledId(i!=null?i:null);o[D("event-key")]=i,o.id=u||m,p=l==null&&i!=null?d.activeKey===i:l,(p||!(g!=null&&g.unmountOnExit)&&!(g!=null&&g.mountOnEnter))&&(o["aria-controls"]=c)}return o.role==="tab"&&(o["aria-selected"]=p,p||(o.tabIndex=-1),r&&(o.tabIndex=-1,o["aria-disabled"]=!0)),o.onClick=U(u=>{r||(a==null||a(u),i!=null&&f&&!u.isPropagationStopped()&&f(i,u))}),[o,{isActive:p}]}const G=b.exports.forwardRef((i,a)=>{let{as:l=B,active:m,eventKey:n}=i,r=V(i,H);const[f,d]=K(Object.assign({key:z(n,r.href),active:m},r));return f[D("active")]=d.isActive,v.exports.jsx(l,Object.assign({},r,f,{ref:a}))});G.displayName="NavItem";const W=b.exports.forwardRef(({bsPrefix:i,className:a,as:l=O,active:m,eventKey:n,disabled:r=!1,...f},d)=>{i=C(i,"nav-link");const[g,p]=K({key:z(n,f.href),active:m,disabled:r,...f});return v.exports.jsx(l,{...f,...g,ref:d,disabled:r,className:S(a,i,r&&"disabled",p.isActive&&"active")})});W.displayName="NavLink";const _=W,M=b.exports.forwardRef(({id:i,title:a,children:l,bsPrefix:m,className:n,rootCloseEvent:r,menuRole:f,disabled:d,active:g,renderMenuOnMount:p,menuVariant:o,...u},c)=>{const E=C(void 0,"nav-item");return v.exports.jsxs(x,{ref:c,...u,className:S(n,E),children:[v.exports.jsx(x.Toggle,{id:i,eventKey:null,active:g,disabled:d,childBsPrefix:m,as:_,children:a}),v.exports.jsx(x.Menu,{role:f,renderOnMount:p,rootCloseEvent:r,variant:o,children:l})]})});M.displayName="NavDropdown";const N=Object.assign(M,{Item:x.Item,ItemText:x.ItemText,Divider:x.Divider,Header:x.Header});function t(i){const{auth:a}=w().props;let l=a.permissions,m=!1;return i.forEach(function(n){l[n]&&(m=!0)}),m}function q(){var o,u;const{url:i,auth:a}=w(),l=async c=>{c.preventDefault(),T.Inertia.post("/logout")},m=c=>c==="/account/dashboard"?i==="/account/dashboard"||i==="/account":i.startsWith(c),n=c=>m(c)?"sidebar-item active":"sidebar-item",r=a==null?void 0:a.user,f=(a==null?void 0:a.roles)&&Array.isArray(a.roles)?a.roles:r!=null&&r.roles?r.roles.map(c=>typeof c=="string"?c:c.name):[],d=c=>c.some(E=>f.includes(E)),g=((u=(o=r==null?void 0:r.roles)==null?void 0:o[0])==null?void 0:u.name)||(r==null?void 0:r.status_anggota)||"Anggota",p=r!=null&&r.name?r.name.charAt(0).toUpperCase():"A";return e.createElement(e.Fragment,null,e.createElement("aside",{className:"ikatwi-sidebar"},e.createElement("div",{className:"sidebar-brand-box"},e.createElement(s,{href:"/account/dashboard",className:"brand-link"},e.createElement("div",{className:"brand-logo-frame"},e.createElement("img",{src:"/assets/images/logo.png",alt:"Logo IKATWI",className:"brand-logo-img"})),e.createElement("div",{className:"brand-meta"},e.createElement("div",{className:"brand-title-wrap"},e.createElement("span",{className:"brand-name"},"IKATWI"),e.createElement("span",{className:"brand-badge"},"PORTAL")),e.createElement("span",{className:"brand-tagline"},"Ikatan Terapis Wicara Indonesia")))),e.createElement("div",{className:"sidebar-user-card"},e.createElement("div",{className:"user-avatar-wrap"},e.createElement("div",{className:"user-avatar-circle"},p),e.createElement("span",{className:"user-status-dot",title:"Status Online"})),e.createElement("div",{className:"user-details"},e.createElement("span",{className:"user-fullname",title:(r==null?void 0:r.name)||"Anggota IKATWI"},(r==null?void 0:r.name)||"Anggota IKATWI"),e.createElement("div",{className:"user-meta-row"},e.createElement("span",{className:"user-role-label"},g),(r==null?void 0:r.no_anggota)&&e.createElement("span",{className:"user-id-badge"},r.no_anggota)))),e.createElement("nav",{className:"sidebar-nav-container"},e.createElement("div",{className:"nav-section"},e.createElement("div",{className:"nav-heading"},"MENU UTAMA"),e.createElement(s,{href:"/account/dashboard",className:n("/account/dashboard")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-th-large"})),e.createElement("span",{className:"item-label"},"Dashboard"))),(t(["categories.index"])||t(["dpw.index"])||t(["dpc.index"])||t(["wilayah.index"]))&&e.createElement("div",{className:"nav-section"},e.createElement("div",{className:"nav-heading"},"DATA MASTER"),t(["categories.index"])&&e.createElement(s,{href:"/account/categories",className:n("/account/categories")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-folder"})),e.createElement("span",{className:"item-label"},"Kategori")),t(["dpw.index"])&&e.createElement(s,{href:"/account/dpw",className:n("/account/dpw")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-landmark"})),e.createElement("span",{className:"item-label"},"Master DPW")),t(["dpc.index"])&&e.createElement(s,{href:"/account/dpc",className:n("/account/dpc")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-city"})),e.createElement("span",{className:"item-label"},"Master DPC")),t(["wilayah.index"])&&e.createElement(s,{href:"/account/wilayah",className:n("/account/wilayah")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-map-marked-alt"})),e.createElement("span",{className:"item-label"},"Wilayah DPW")),t(["wilayah.index"])&&e.createElement(s,{href:"/account/areadpc",className:n("/account/areadpc")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-map-signs"})),e.createElement("span",{className:"item-label"},"Wilayah DPC")),t(["videos.index"])&&e.createElement(s,{href:"/account/videos",className:n("/account/videos")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-play-circle"})),e.createElement("span",{className:"item-label"},"Video Manajemen"))),(t(["biodatas.index"])||t(["pengurus.index"])||t(["ekta.index"]))&&e.createElement("div",{className:"nav-section"},e.createElement("div",{className:"nav-heading"},"KEANGGOTAAN"),t(["biodatas.index"])&&e.createElement(s,{href:"/account/biodatas",className:n("/account/biodatas")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-id-card"})),e.createElement("span",{className:"item-label"},"Biodata Anggota")),t(["users.index"])&&e.createElement(s,{href:"/account/verifikasi-users",className:n("/account/verifikasi-users")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-user-check"})),e.createElement("span",{className:"item-label"},"Verifikasi Anggota Baru"),(a==null?void 0:a.pendingUsersCount)>0&&e.createElement("span",{className:"badge rounded-pill",style:{backgroundColor:"#ef4444",color:"#ffffff",fontSize:"0.65rem",fontWeight:700,padding:"0.15rem 0.45rem",boxShadow:"0 1px 2px rgba(239, 68, 68, 0.4)"}},a.pendingUsersCount)),t(["pengurus.index"])&&e.createElement(s,{href:"/account/pengurus",className:n("/account/pengurus")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-users-cog"})),e.createElement("span",{className:"item-label"},"Struktur Pengurus")),t(["ekta.index"])&&e.createElement(s,{href:"/account/ekta",className:n("/account/ekta")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-address-card"})),e.createElement("span",{className:"item-label"},"E-KTA Digital")),t(["ekta.index"])&&e.createElement(s,{href:"/account/sig",className:n("/account/sig")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-certificate"})),e.createElement("span",{className:"item-label"},"SIG Keanggotaan")),t(["videousers.index"])&&e.createElement(s,{href:"/account/materi",className:n("/account/materi")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-film"})),e.createElement("span",{className:"item-label"},"Materi Pembelajaran")),t(["videousers.index"])&&e.createElement(s,{href:"/account/donasi",className:n("/account/donasi")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-hand-holding-heart"})),e.createElement("span",{className:"item-label"},"Program Donasi"))),(t(["tagihan.index"])||t(["transactions.index"])||d(["admin","bendahara","admin wilayah","timver dpw","timver dpc"]))&&e.createElement("div",{className:"nav-section"},e.createElement("div",{className:"nav-heading"},"KEUANGAN & IURAN"),t(["tagihan.index"])&&e.createElement(s,{href:"/account/tagihan",className:n("/account/tagihan")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-receipt"})),e.createElement("span",{className:"item-label"},"Pusat Tagihan & Iuran"),e.createElement("span",{className:"item-badge-new"},"Iuran")),t(["transactions.index"])&&e.createElement(s,{href:"/account/transactions",className:n("/account/transactions")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-history"})),e.createElement("span",{className:"item-label"},"Riwayat Transaksi")),d(["admin","bendahara","admin wilayah","timver dpw","timver dpc"])&&e.createElement(s,{href:"/account/monitoring-iuran",className:n("/account/monitoring-iuran")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-chart-line"})),e.createElement("span",{className:"item-label"},"Monitoring Iuran Anggota"),e.createElement("span",{className:"badge rounded-pill",style:{backgroundColor:"#ecfdf5",color:"#059669",fontSize:"0.65rem",fontWeight:700,border:"1px solid #a7f3d0"}},"Tahunan"))),(t(["products.index"])||t(["kegiatan.index"]))&&e.createElement("div",{className:"nav-section"},e.createElement("div",{className:"nav-heading"},"KEGIATAN & EVENT"),t(["products.index"])&&e.createElement(s,{href:"/account/products",className:n("/account/products")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-calendar-alt"})),e.createElement("span",{className:"item-label"},"Daftar Kegiatan")),t(["kegiatan.index"])&&e.createElement(s,{href:"/account/kegiatan",className:n("/account/kegiatan")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-tasks"})),e.createElement("span",{className:"item-label"},"Agenda Kegiatan"))),(t(["documents.index"])||t(["ejurnal.index"])||t(["pengajuan.index"])||t(["verifPengajuan.index"])||t(["verifPengajuanDpw.index"])||t(["verifPengajuanDpc.index"])||t(["arsips.index"]))&&e.createElement("div",{className:"nav-section"},e.createElement("div",{className:"nav-heading"},"DOKUMEN & MUTASI"),t(["documents.index"])&&e.createElement(s,{href:"/account/documents",className:n("/account/documents")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-file-alt"})),e.createElement("span",{className:"item-label"},"Dokumen Kelengkapan")),t(["ejurnal.index"])&&e.createElement(s,{href:"/account/ejurnal",className:n("/account/ejurnal")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-book-open"})),e.createElement("span",{className:"item-label"},"E-Jurnal IKATWI")),t(["pengajuan.index"])&&e.createElement(e.Fragment,null,e.createElement(s,{href:"/account/pengajuan",className:n("/account/pengajuan")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-paper-plane"})),e.createElement("span",{className:"item-label"},"Pengajuan Mutasi")),e.createElement(s,{href:"/account/print",className:n("/account/print")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-print"})),e.createElement("span",{className:"item-label"},"Pengajuan Print"))),(t(["verifPengajuan.index"])||t(["verifPengajuanDpw.index"])||t(["verifPengajuanDpc.index"]))&&e.createElement("div",{className:"sub-section-box"},e.createElement("div",{className:"sub-heading"},"VERIFIKASI MUTASI"),t(["verifPengajuan.index"])&&e.createElement(s,{href:"/account/verifPengajuan",className:n("/account/verifPengajuan")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-check-circle"})),e.createElement("span",{className:"item-label"},"Verifikasi Utama")),t(["verifPengajuanDpw.index"])&&e.createElement(s,{href:"/account/verifPengajuanDpw",className:n("/account/verifPengajuanDpw")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-check-double"})),e.createElement("span",{className:"item-label"},"Verifikasi DPW")),t(["verifPengajuanDpc.index"])&&e.createElement(s,{href:"/account/verifPengajuanDpc",className:n("/account/verifPengajuanDpc")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-clipboard-check"})),e.createElement("span",{className:"item-label"},"Verifikasi DPC")),t(["verifPengajuan.index"])&&e.createElement(s,{href:"/account/arsips",className:n("/account/arsips")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-archive"})),e.createElement("span",{className:"item-label"},"Arsip Pengajuan")))),(t(["sliders.index"])||t(["roles.index"])||t(["permissions.index"])||t(["users.index"]))&&e.createElement("div",{className:"nav-section"},e.createElement("div",{className:"nav-heading"},"PENGATURAN SISTEM"),t(["sliders.index"])&&e.createElement(s,{href:"/account/sliders",className:n("/account/sliders")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-images"})),e.createElement("span",{className:"item-label"},"Banner Slider")),t(["roles.index"])&&e.createElement(s,{href:"/account/roles",className:n("/account/roles")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-shield-alt"})),e.createElement("span",{className:"item-label"},"Peran & Wewenang")),t(["permissions.index"])&&e.createElement(s,{href:"/account/permissions",className:n("/account/permissions")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-key"})),e.createElement("span",{className:"item-label"},"Hak Akses")),t(["users.index"])&&e.createElement(s,{href:"/account/users",className:n("/account/users")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-user-cog"})),e.createElement("span",{className:"item-label"},"Manajemen User"))),e.createElement("div",{className:"nav-section"},e.createElement("div",{className:"nav-heading"},"PORTAL & AKUN"),e.createElement(s,{href:"/",className:n("/")},e.createElement("div",{className:"item-icon-box"},e.createElement("i",{className:"fa fa-globe"})),e.createElement("span",{className:"item-label"},"Website Utama")))),e.createElement("div",{className:"sidebar-footer-box"},e.createElement("button",{onClick:l,className:"sidebar-logout-btn"},e.createElement("i",{className:"fa fa-sign-out-alt logout-icon"}),e.createElement("span",{className:"logout-text"},"Keluar Sistem")),e.createElement("div",{className:"sidebar-version-tag"},e.createElement("span",null,"IKATWI PORTAL"),e.createElement("span",null,"\u2022"),e.createElement("span",null,"v2.5")))),e.createElement("style",null,`
                .ikatwi-sidebar {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    background-color: #0c1322;
                    color: #94a3b8;
                    border-right: 1px solid #1e293b;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    position: sticky;
                    top: 0;
                    user-select: none;
                }

                /* Brand Header */
                .sidebar-brand-box {
                    padding: 1.1rem 1.15rem;
                    background: linear-gradient(180deg, #0f172a 0%, #0c1322 100%);
                    border-bottom: 1px solid #1e293b;
                }

                .brand-link {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                }

                .brand-logo-frame {
                    width: 40px;
                    height: 40px;
                    background: #ffffff;
                    border-radius: 10px;
                    padding: 3px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    flex-shrink: 0;
                }

                .brand-logo-img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .brand-meta {
                    display: flex;
                    flex-direction: column;
                    min-width: 0;
                }

                .brand-title-wrap {
                    display: flex;
                    align-items: center;
                    gap: 0.45rem;
                }

                .brand-name {
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: #ffffff;
                    letter-spacing: 0.05em;
                    line-height: 1.2;
                }

                .brand-badge {
                    font-size: 0.62rem;
                    font-weight: 700;
                    color: #059669;
                    background: #d1fae5;
                    padding: 0.1rem 0.4rem;
                    border-radius: 4px;
                    letter-spacing: 0.05em;
                }

                .brand-tagline {
                    font-size: 0.68rem;
                    color: #64748b;
                    font-weight: 500;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                /* Member Profile Card in Sidebar */
                .sidebar-user-card {
                    margin: 0.85rem 0.85rem 0.35rem 0.85rem;
                    padding: 0.75rem 0.85rem;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    gap: 0.7rem;
                }

                .user-avatar-wrap {
                    position: relative;
                    flex-shrink: 0;
                }

                .user-avatar-circle {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 0.88rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }

                .user-status-dot {
                    position: absolute;
                    bottom: -1px;
                    right: -1px;
                    width: 9px;
                    height: 9px;
                    background-color: #10b981;
                    border: 2px solid #0c1322;
                    border-radius: 50%;
                }

                .user-details {
                    min-width: 0;
                    flex: 1;
                }

                .user-fullname {
                    display: block;
                    font-size: 0.82rem;
                    font-weight: 600;
                    color: #f1f5f9;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 1.25;
                }

                .user-meta-row {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    margin-top: 0.15rem;
                }

                .user-role-label {
                    font-size: 0.68rem;
                    color: #10b981;
                    font-weight: 600;
                    text-transform: capitalize;
                }

                .user-id-badge {
                    font-size: 0.62rem;
                    color: #64748b;
                    font-family: monospace;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0 0.25rem;
                    border-radius: 3px;
                }

                /* Nav Container */
                .sidebar-nav-container {
                    flex: 1;
                    overflow-y: auto;
                    padding: 0.6rem 0.65rem 1.5rem 0.65rem;
                    scrollbar-width: thin;
                    scrollbar-color: #1e293b transparent;
                }

                .sidebar-nav-container::-webkit-scrollbar {
                    width: 4px;
                }

                .sidebar-nav-container::-webkit-scrollbar-track {
                    background: transparent;
                }

                .sidebar-nav-container::-webkit-scrollbar-thumb {
                    background: #1e293b;
                    border-radius: 4px;
                }

                .sidebar-nav-container::-webkit-scrollbar-thumb:hover {
                    background: #334155;
                }

                .nav-section {
                    margin-bottom: 1.1rem;
                }

                .nav-heading {
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    color: #64748b;
                    padding: 0.4rem 0.75rem 0.3rem 0.75rem;
                    text-transform: uppercase;
                }

                /* Sub section for verifikasi */
                .sub-section-box {
                    margin-top: 0.35rem;
                    padding-top: 0.35rem;
                    border-top: 1px dashed rgba(255, 255, 255, 0.08);
                }

                .sub-heading {
                    font-size: 0.62rem;
                    font-weight: 700;
                    letter-spacing: 0.06em;
                    color: #475569;
                    padding: 0.3rem 0.75rem 0.25rem 0.75rem;
                    text-transform: uppercase;
                }

                /* Sidebar Item Link */
                .sidebar-item {
                    display: flex;
                    align-items: center;
                    gap: 0.65rem;
                    padding: 0.52rem 0.75rem;
                    border-radius: 8px;
                    color: #94a3b8;
                    text-decoration: none;
                    font-size: 0.83rem;
                    font-weight: 500;
                    transition: all 0.15s ease-in-out;
                    margin-bottom: 2px;
                    position: relative;
                }

                .sidebar-item:hover {
                    color: #f8fafc;
                    background-color: rgba(255, 255, 255, 0.05);
                    text-decoration: none;
                }

                .sidebar-item.active {
                    color: #ffffff;
                    background: linear-gradient(90deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.03) 100%);
                    border-left: 3px solid #10b981;
                    font-weight: 600;
                }

                .item-icon-box {
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.9rem;
                    color: #64748b;
                    flex-shrink: 0;
                    transition: color 0.15s ease-in-out;
                }

                .sidebar-item:hover .item-icon-box {
                    color: #cbd5e1;
                }

                .sidebar-item.active .item-icon-box {
                    color: #10b981;
                }

                .item-label {
                    flex: 1;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .item-badge-new {
                    font-size: 0.62rem;
                    font-weight: 700;
                    padding: 0.1rem 0.35rem;
                    border-radius: 4px;
                    background-color: rgba(16, 185, 129, 0.2);
                    color: #10b981;
                    border: 1px solid rgba(16, 185, 129, 0.3);
                }

                /* Sidebar Footer Box */
                .sidebar-footer-box {
                    padding: 0.85rem 0.85rem;
                    border-top: 1px solid #1e293b;
                    background-color: #090e1a;
                }

                .sidebar-logout-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.55rem;
                    background: rgba(239, 68, 68, 0.08);
                    border: 1px solid rgba(239, 68, 68, 0.2);
                    border-radius: 8px;
                    color: #f87171;
                    font-size: 0.82rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.15s ease-in-out;
                }

                .sidebar-logout-btn:hover {
                    background: #dc2626;
                    border-color: #dc2626;
                    color: #ffffff;
                }

                .logout-icon {
                    font-size: 0.85rem;
                }

                .sidebar-version-tag {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.4rem;
                    margin-top: 0.55rem;
                    font-size: 0.65rem;
                    color: #475569;
                    font-weight: 500;
                    letter-spacing: 0.04em;
                }
            `))}function Q({children:i}){var p,o,u,c,E,k,y,A,I,j,P;const{auth:a}=w().props,[l,m]=b.exports.useState(!1),n=h=>{h.preventDefault(),l?(document.body.classList.remove("sb-sidenav-toggled"),m(!1)):(document.body.classList.add("sb-sidenav-toggled"),m(!0))},r=async h=>{h.preventDefault(),T.Inertia.post("/logout")},f=(p=a==null?void 0:a.user)!=null&&p.name?a.user.name.charAt(0).toUpperCase():"A",d=((c=(u=(o=a==null?void 0:a.user)==null?void 0:o.roles)==null?void 0:u[0])==null?void 0:c.name)||((E=a==null?void 0:a.user)==null?void 0:E.status_anggota)||"Anggota",g=new Intl.DateTimeFormat("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(new Date);return e.createElement(e.Fragment,null,e.createElement("div",{className:"d-flex",id:"wrapper"},l&&e.createElement("div",{className:"sidebar-mobile-backdrop d-md-none",onClick:n,title:"Tutup Menu"}),e.createElement("div",{id:"sidebar-wrapper",className:"sidebar-container-col"},e.createElement(q,null)),e.createElement("div",{id:"page-content-wrapper",className:"content-container-col"},e.createElement("header",{className:"top-header-bar"},e.createElement("div",{className:"container-fluid p-0 d-flex justify-content-between align-items-center"},e.createElement("div",{className:"d-flex align-items-center gap-3"},e.createElement("button",{className:"header-toggle-btn",onClick:n,title:"Buka/Tutup Menu Sidebar",type:"button"},e.createElement("i",{className:"fa fa-bars"})),e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("div",{className:"d-flex flex-column"},e.createElement("div",{className:"d-flex align-items-center gap-2"},e.createElement("span",{className:"header-brand-title"},"Portal IKATWI"),e.createElement("span",{className:"header-status-badge"},e.createElement("span",{className:"status-indicator-dot"}),"Sistem Aktif")),e.createElement("span",{className:"header-date-text d-none d-md-block"},e.createElement("i",{className:"fa fa-calendar-alt me-1 text-muted"}),g)))),e.createElement("div",{className:"d-flex align-items-center gap-2 gap-sm-3"},e.createElement(s,{href:"/account/tagihan",className:"btn-quick-tagihan d-none d-sm-inline-flex",title:"Pusat Tagihan & Iuran"},e.createElement("i",{className:"fa fa-receipt text-emerald-600"}),e.createElement("span",null,"Tagihan & Iuran")),e.createElement(s,{href:"/",className:"btn-website-link d-none d-md-inline-flex",title:"Kunjungi Website Utama"},e.createElement("i",{className:"fa fa-globe"}),e.createElement("span",null,"Web IKATWI")),e.createElement("div",{className:"header-divider d-none d-sm-block"}),e.createElement(N,{title:e.createElement("div",{className:"user-profile-pill"},e.createElement("div",{className:"profile-avatar-box"},f),e.createElement("div",{className:"profile-text-wrap d-none d-sm-block"},e.createElement("div",{className:"profile-name-text",title:((k=a==null?void 0:a.user)==null?void 0:k.name)||"Anggota"},((y=a==null?void 0:a.user)==null?void 0:y.name)||"Anggota"),e.createElement("small",{className:"profile-role-text"},d)),e.createElement("i",{className:"fa fa-chevron-down profile-arrow-icon d-none d-sm-inline-block"})),id:"account-user-dropdown",className:"custom-user-dropdown",align:"end"},e.createElement("div",{className:"dropdown-user-header"},e.createElement("div",{className:"text-uppercase dropdown-label"},"Login Sebagai"),e.createElement("strong",{className:"dropdown-username",title:((A=a==null?void 0:a.user)==null?void 0:A.name)||"Anggota"},((I=a==null?void 0:a.user)==null?void 0:I.name)||"Anggota"),e.createElement("div",{className:"dropdown-user-id"},e.createElement("div",{className:"d-inline-flex align-items-center gap-1 px-2 py-1 rounded",style:{backgroundColor:"#f1f5f9",color:"#334155",fontSize:"0.72rem",fontWeight:600,fontFamily:"monospace",border:"1px solid #e2e8f0",marginTop:"4px"}},e.createElement("i",{className:"fa fa-id-card text-emerald-600 me-1",style:{fontSize:"0.75rem"}}),e.createElement("span",null,((j=a==null?void 0:a.user)==null?void 0:j.no_anggota)||((P=a==null?void 0:a.user)==null?void 0:P.email)||"ID Anggota")))),e.createElement(N.Item,{as:s,href:"/account/biodatas",className:"dropdown-nav-item"},e.createElement("div",{className:"dropdown-icon-frame",style:{backgroundColor:"#eff6ff",color:"#2563eb"}},e.createElement("i",{className:"fa fa-user-circle"})),e.createElement("div",null,e.createElement("div",{className:"fw-semibold text-dark"},"Profil Biodata"),e.createElement("small",{className:"text-muted"},"Kelola identitas anggota"))),e.createElement(N.Item,{as:s,href:"/account/tagihan",className:"dropdown-nav-item"},e.createElement("div",{className:"dropdown-icon-frame",style:{backgroundColor:"#ecfdf5",color:"#059669"}},e.createElement("i",{className:"fa fa-receipt"})),e.createElement("div",null,e.createElement("div",{className:"fw-semibold text-dark"},"Tagihan & Iuran"),e.createElement("small",{className:"text-muted"},"Cek & bayar iuran tahunan"))),e.createElement(N.Item,{as:s,href:"/account/ekta",className:"dropdown-nav-item"},e.createElement("div",{className:"dropdown-icon-frame",style:{backgroundColor:"#fffbeb",color:"#d97706"}},e.createElement("i",{className:"fa fa-id-card"})),e.createElement("div",null,e.createElement("div",{className:"fw-semibold text-dark"},"E-KTA Digital"),e.createElement("small",{className:"text-muted"},"Kartu tanda anggota resmi"))),e.createElement(N.Divider,{className:"my-1"}),e.createElement(N.Item,{onClick:r,className:"dropdown-nav-item text-danger"},e.createElement("div",{className:"dropdown-icon-frame",style:{backgroundColor:"#fef2f2",color:"#dc2626"}},e.createElement("i",{className:"fa fa-sign-out-alt"})),e.createElement("div",null,e.createElement("div",{className:"fw-bold text-danger"},"Keluar Sistem"),e.createElement("small",{className:"text-muted"},"Akhiri sesi portal"))))))),e.createElement("main",{className:"main-portal-content"},i),e.createElement("footer",{className:"portal-footer"},e.createElement("div",{className:"container-fluid d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2"},e.createElement("span",null,"\xA9 ",new Date().getFullYear()," ",e.createElement("strong",null,"IKATWI")," (Ikatan Terapis Wicara Indonesia). All rights reserved."),e.createElement("span",{className:"text-muted",style:{fontSize:"0.75rem"}},"Sistem Informasi Keanggotaan Terpadu"))))),e.createElement("style",null,`
                /* Layout structural styles */
                .sidebar-container-col {
                    background-color: #0c1322;
                    width: 260px;
                    min-width: 260px;
                    z-index: 1050;
                    transition: all 0.25s ease-in-out;
                }

                .content-container-col {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    min-width: 0;
                }

                /* Mobile Backdrop */
                .sidebar-mobile-backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.6);
                    backdrop-filter: blur(2px);
                    z-index: 1040;
                }

                /* Top Navigation Bar */
                .top-header-bar {
                    background-color: #ffffff;
                    border-bottom: 1px solid #e2e8f0;
                    min-height: 64px;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    padding: 0.6rem 1.25rem;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.03);
                }

                .header-toggle-btn {
                    width: 38px;
                    height: 38px;
                    border-radius: 9px;
                    background-color: #f8fafc;
                    border: 1px solid #e2e8f0;
                    color: #334155;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: all 0.15s ease-in-out;
                }

                .header-toggle-btn:hover {
                    background-color: #f1f5f9;
                    color: #0f172a;
                    border-color: #cbd5e1;
                }

                .header-brand-title {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #0f172a;
                    letter-spacing: -0.01em;
                }

                .header-status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1px solid #a7f3d0;
                    border-radius: 9999px;
                    padding: 0.15rem 0.55rem;
                    font-size: 0.72rem;
                    font-weight: 600;
                }

                .status-indicator-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: #10b981;
                }

                .header-date-text {
                    font-size: 0.75rem;
                    color: #64748b;
                    font-weight: 500;
                    margin-top: 1px;
                }

                /* Quick Action Buttons */
                .btn-quick-tagihan {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.45rem;
                    background-color: #f0fdf4;
                    border: 1px solid #bbf7d0;
                    color: #15803d;
                    font-size: 0.82rem;
                    font-weight: 600;
                    padding: 0.4rem 0.85rem;
                    border-radius: 8px;
                    text-decoration: none;
                    transition: all 0.15s ease-in-out;
                }

                .btn-quick-tagihan:hover {
                    background-color: #dcfce7;
                    color: #166534;
                    border-color: #86efac;
                }

                .btn-website-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.45rem;
                    background-color: #f8fafc;
                    border: 1px solid #e2e8f0;
                    color: #475569;
                    font-size: 0.82rem;
                    font-weight: 500;
                    padding: 0.4rem 0.85rem;
                    border-radius: 8px;
                    text-decoration: none;
                    transition: all 0.15s ease-in-out;
                }

                .btn-website-link:hover {
                    background-color: #f1f5f9;
                    color: #0f172a;
                    border-color: #cbd5e1;
                }

                .header-divider {
                    width: 1px;
                    height: 24px;
                    background-color: #e2e8f0;
                }

                /* User Profile Pill */
                .user-profile-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.65rem;
                    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
                    border-radius: 30px;
                    border: 1px solid transparent;
                    transition: all 0.15s ease-in-out;
                    cursor: pointer;
                }

                .user-profile-pill:hover {
                    background-color: #f8fafc;
                    border-color: #e2e8f0;
                }

                .profile-avatar-box {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                    border: 2px solid #ffffff;
                }

                .profile-text-wrap {
                    text-align: left;
                    line-height: 1.2;
                }

                .profile-name-text {
                    font-size: 0.86rem;
                    font-weight: 600;
                    color: #0f172a;
                    max-width: 180px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .profile-role-text {
                    font-size: 0.72rem;
                    color: #64748b;
                    text-transform: capitalize;
                    display: block;
                }

                .profile-arrow-icon {
                    font-size: 0.68rem;
                    color: #64748b;
                    margin-left: 0.25rem;
                    transition: transform 0.2s ease;
                }

                /* Dropdown Custom Styling */
                .custom-user-dropdown .dropdown-toggle::after {
                    display: none !important;
                }

                .custom-user-dropdown .nav-link,
                .custom-user-dropdown .dropdown-toggle {
                    padding: 0 !important;
                    border: none !important;
                    background: transparent !important;
                    box-shadow: none !important;
                    text-decoration: none !important;
                }

                .custom-user-dropdown .dropdown-menu {
                    background-color: #ffffff !important;
                    border-radius: 12px;
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
                    border: 1px solid #e2e8f0;
                    padding: 0.5rem;
                    min-width: 260px;
                    margin-top: 0.5rem !important;
                }

                .dropdown-user-header {
                    padding: 0.65rem 0.75rem 0.75rem 0.75rem;
                    border-bottom: 1px solid #f1f5f9;
                    margin-bottom: 0.35rem;
                }

                .dropdown-label {
                    font-size: 0.65rem;
                    font-weight: 700;
                    color: #94a3b8;
                    letter-spacing: 0.05em;
                }

                .dropdown-username {
                    font-size: 0.9rem;
                    color: #0f172a;
                    display: block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .dropdown-user-id {
                    margin-top: 0.3rem;
                }

                .dropdown-nav-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.55rem 0.75rem;
                    border-radius: 8px;
                    font-size: 0.84rem;
                    transition: all 0.15s ease-in-out;
                    text-decoration: none;
                }

                .dropdown-nav-item:hover {
                    background-color: #f8fafc;
                }

                .dropdown-icon-frame {
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.9rem;
                    flex-shrink: 0;
                }

                .main-portal-content {
                    padding: 1.25rem 1.5rem;
                    flex-grow: 1;
                }

                .portal-footer {
                    padding: 1rem 1.5rem;
                    background-color: #ffffff;
                    border-top: 1px solid #e2e8f0;
                    font-size: 0.8rem;
                    color: #64748b;
                }
            `))}export{Q as L,t as h};
