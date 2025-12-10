import{r as p,R as e,L as a,u as k}from"./app.1d91d38e.js";import{p as t,b as N,j as d,D as r,e as y,f as j}from"./Dropdown.83098e85.js";import{a as z}from"./index.d4e6b187.js";const M={id:t.exports.string,href:t.exports.string,onClick:t.exports.func,title:t.exports.node.isRequired,disabled:t.exports.bool,align:N,menuRole:t.exports.string,renderMenuOnMount:t.exports.bool,rootCloseEvent:t.exports.string,menuVariant:t.exports.oneOf(["dark"]),flip:t.exports.bool,bsPrefix:t.exports.string,variant:t.exports.string,size:t.exports.string},g=p.exports.forwardRef(({title:o,children:i,bsPrefix:m,rootCloseEvent:l,variant:c,size:n,menuRole:s,renderMenuOnMount:b,disabled:u,href:h,id:f,menuVariant:x,flip:w,...v},E)=>d.exports.jsxs(r,{ref:E,...v,children:[d.exports.jsx(y,{id:f,href:h,size:n,variant:c,disabled:u,childBsPrefix:m,children:o}),d.exports.jsx(j,{role:s,renderOnMount:b,rootCloseEvent:l,variant:x,flip:w,children:i})]}));g.displayName="DropdownButton";g.propTypes=M;const I=g;function L(){let o={marginLeft:"7px"};return e.createElement(e.Fragment,null,e.createElement("nav",{className:"navbar-expand-md navbar-dark fixed-top shadow custom-green-header"},e.createElement("div",{className:"container"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-7"},e.createElement("header",{className:"d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1"},e.createElement(a,{href:"/",className:"d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none"},e.createElement("img",{src:"/assets/images/logo.png",width:"50",alt:"Logo Ikatan Terapis Wicara Indonesia",className:"header-logo"}),e.createElement("span",{style:o},e.createElement("h5",{className:"header-title"},e.createElement("strong",null,"Ikatan Terapis Wicara Indonesia")))),e.createElement("div",{id:"page-content-wrapper"}))),e.createElement("div",{className:"col-md-1"},e.createElement("header",{className:"d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1"},e.createElement("div",{className:"d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none"},e.createElement(I,{id:"dropdown-basic-button",title:"Menu",className:"custom-dropdown mt-1",variant:"success"},e.createElement(a,{href:"/history"},e.createElement(r.Item,{href:"#/action-2",className:"dropdown-item-custom"},"Sejarah & Pengurus")),e.createElement(a,{href:"/visimisi"},e.createElement(r.Item,{href:"#/action-2",className:"dropdown-item-custom"},"Visi & Misi")),e.createElement(a,{href:"/kegiatan"},e.createElement(r.Item,{href:"#/action-3",className:"dropdown-item-custom"},"Kegiatan")),e.createElement(a,{href:"/anggota"},e.createElement(r.Item,{href:"#/action-4",className:"dropdown-item-custom"},"Anggota")),e.createElement(a,{href:"/wilayah"},e.createElement(r.Item,{href:"#/action-5",className:"dropdown-item-custom"},"Wilayah DPW")),e.createElement(a,{href:"/wilayahdpc"},e.createElement(r.Item,{href:"#/action-6",className:"dropdown-item-custom"},"Wilayah DPC")),e.createElement(r.Item,{href:"https://ikatwisiporlin-ktki.kemkes.go.id/",target:"_blank",className:"dropdown-item-custom"},"Siporlin"),e.createElement(r.Item,{href:"https://siedunakes-ktki.kemkes.go.id/home/",target:"_blank",className:"dropdown-item-custom"},"Siedunakes")))))))),e.createElement("style",{jsx:!0},`
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
            `))}function C(){k().props;const[o,i]=p.exports.useState([]),[m,l]=p.exports.useState(!1),c=n=>{l(!0),i([]),z.post("/search",{q:n.target.value}).then(s=>{l(!1),i(s.data.products)})};return e.createElement(e.Fragment,null,e.createElement("nav",{className:"navbar navbar-dark shadow navbar-expand fixed-bottom p-0 custom-green-navbar"},e.createElement("div",{className:"container"},e.createElement("ul",{className:"navbar-nav nav-justified justify-content-center justify-item-center w-100"},e.createElement("li",{className:"nav-item"},e.createElement(a,{href:"/",className:"nav-link text-white fw-bold d-flex flex-column align-items-center position-relative"},e.createElement("div",{className:"menu-icon-wrapper"},e.createElement("svg",{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",className:"bi bi-house",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{fillRule:"evenodd",d:"M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"}),e.createElement("path",{fillRule:"evenodd",d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"}))),e.createElement("span",{className:"small mt-1"},"Home"))),e.createElement("li",{className:"nav-item"},e.createElement(a,{href:"#","data-bs-toggle":"modal","data-bs-target":"#search",className:"nav-link text-white fw-bold d-flex flex-column align-items-center position-relative"},e.createElement("div",{className:"menu-icon-wrapper"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16"},e.createElement("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}))),e.createElement("span",{className:"small mt-1"},"Search"))),e.createElement("li",{className:"nav-item dropup"},e.createElement(a,{href:"/login",className:"nav-link text-white fw-bold d-flex flex-column align-items-center position-relative"},e.createElement("div",{className:"menu-icon-wrapper"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",fill:"currentColor",className:"bi bi-person-circle",viewBox:"0 0 16 16"},e.createElement("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),e.createElement("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"}))),e.createElement("span",{className:"small mt-1"},"Account")))))),e.createElement("div",{className:"modal fade",id:"search",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Search"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("div",{className:"input-group"},e.createElement("input",{type:"text",className:"form-control",onChange:n=>c(n),placeholder:"search product here..."}))),e.createElement("div",{className:"modal-body",style:{height:"300px",overflow:"auto"}},m&&e.createElement("div",{className:"justify-content-center mb-3 text-center"},e.createElement("div",{className:"spinner-border text-success",role:"status"},e.createElement("span",{className:"visually-hidden"},"Loading...")),e.createElement("h6",{className:"mt-2"},"Loading...")),o.map((n,s)=>e.createElement("a",{href:`/products/${n.slug}`,className:"text-decoration-none text-dark",key:s},e.createElement("div",{className:"card border-0 shadow-sm rounded-3 bg-light mb-3"},e.createElement("div",{className:"card-body"},n.title)))))))),e.createElement("style",{jsx:!0},`
                .custom-green-navbar {
                    background: linear-gradient(135deg, #0d9669 0%, #0a7a5c 50%, #065f46 100%) !important;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .nav-link {
                    transition: all 0.3s ease;
                    padding: 0.6rem 0.75rem !important;
                    border-radius: 0.75rem;
                    margin: 0.25rem;
                    position: relative;
                    overflow: hidden;
                }
                
                .nav-link::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                    transition: left 0.5s;
                }
                
                .nav-link:hover::before {
                    left: 100%;
                }
                
                .nav-link:hover {
                    background-color: rgba(255, 255, 255, 0.15) !important;
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }
                
                .nav-link:active {
                    background-color: rgba(255, 255, 255, 0.25) !important;
                    transform: translateY(-1px);
                }
                
                .menu-icon-wrapper {
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 2.8rem;
                    height: 2.8rem;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                }
                
                .nav-link:hover .menu-icon-wrapper {
                    background: rgba(255, 255, 255, 0.2);
                    transform: scale(1.15);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }
                
                .nav-item {
                    flex: 1;
                    text-align: center;
                }
                
                .navbar-nav {
                    display: flex;
                    width: 100%;
                    gap: 0.25rem;
                }
                
                .small {
                    font-size: 0.7rem;
                    line-height: 1.2;
                    font-weight: 500;
                    margin-top: 0.3rem;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                }
                
                /* Memastikan posisi badge tetap */
                .position-relative {
                    position: relative;
                }
                
                /* Untuk badge di cart */
                .badge {
                    font-size: 0.6rem;
                    min-width: 1.2rem;
                    height: 1.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 0.25rem;
                    background: linear-gradient(135deg, #f59e0b, #d97706) !important;
                    border: 2px solid white;
                }
                
                /* Active state untuk menu yang sedang aktif */
                .nav-link.active {
                    background-color: rgba(255, 255, 255, 0.2) !important;
                }
                
                .nav-link.active .menu-icon-wrapper {
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(1.1);
                }
            `))}function B({children:o}){return e.createElement(e.Fragment,null,e.createElement(L,null),e.createElement("div",{className:"main"},o,e.createElement(C,null)))}export{B as L};
