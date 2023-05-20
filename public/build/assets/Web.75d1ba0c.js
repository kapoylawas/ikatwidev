import{r as p,R as e,L as a,u as N}from"./app.4786be27.js";import{p as t,b as y,j as d,D as n,e as k,f as j}from"./Dropdown.8a344a30.js";import{a as M}from"./index.348159a3.js";const L={id:t.exports.string,href:t.exports.string,onClick:t.exports.func,title:t.exports.node.isRequired,disabled:t.exports.bool,align:y,menuRole:t.exports.string,renderMenuOnMount:t.exports.bool,rootCloseEvent:t.exports.string,menuVariant:t.exports.oneOf(["dark"]),flip:t.exports.bool,bsPrefix:t.exports.string,variant:t.exports.string,size:t.exports.string},h=p.exports.forwardRef(({title:l,children:c,bsPrefix:o,rootCloseEvent:m,variant:i,size:r,menuRole:s,renderMenuOnMount:u,disabled:E,href:f,id:g,menuVariant:b,flip:v,...x},w)=>d.exports.jsxs(n,{ref:w,...x,children:[d.exports.jsx(k,{id:g,href:f,size:r,variant:i,disabled:E,childBsPrefix:o,children:l}),d.exports.jsx(j,{role:s,renderOnMount:u,rootCloseEvent:m,variant:b,flip:v,children:c})]}));h.displayName="DropdownButton";h.propTypes=L;const I=h;function z(){let l={marginLeft:"7px"};return e.createElement(e.Fragment,null,e.createElement("nav",{className:"navbar-expand-md navbar-dark fixed-top bg-navbar shadow"},e.createElement("div",{className:"container"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-7"},e.createElement("header",{className:"d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1"},e.createElement(a,{href:"/",className:"d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none"},e.createElement("img",{src:"/assets/images/logo.png",width:"50"})," ","  ",e.createElement("span",{style:l},e.createElement("h5",null," ",e.createElement("strong",null," ")," Ikatan Terapis Wicara Indonesia"," "))),e.createElement("div",{id:"page-content-wrapper"}))),e.createElement("div",{className:"col-md-1"},e.createElement("header",{className:"d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1"},e.createElement("div",{className:"d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none"},e.createElement(I,{id:"dropdown-basic-button",variant:"success",className:"mt-1"},e.createElement(a,{href:"/history"},e.createElement(n.Item,{href:"#/action-2"},"Sejarah & Pengurus")),e.createElement(a,{href:"/visimisi"},e.createElement(n.Item,{href:"#/action-2"},"Visi & Misi")),e.createElement(a,{href:"/kegiatan"},e.createElement(n.Item,{href:"#/action-3"},"Kegiatan")),e.createElement(a,{href:"/anggota"},e.createElement(n.Item,{href:"#/action-4"},"Anggota")),e.createElement(a,{href:"/wilayah"},e.createElement(n.Item,{href:"#/action-5"},"Wilayah DPW")),e.createElement(a,{href:"/wilayahdpc"},e.createElement(n.Item,{href:"#/action-6"},"Wilayah DPC")),e.createElement(n.Item,{href:"https://ikatwisiporlin-ktki.kemkes.go.id/",target:"_blank"},"Siporlin"),e.createElement(n.Item,{href:"https://siedunakes-ktki.kemkes.go.id/home/",target:"_blank"},"Siedunakes")))))))))}function C(){N().props;const[l,c]=p.exports.useState([]),[o,m]=p.exports.useState(!1),i=r=>{m(!0),c([]),M.post("/search",{q:r.target.value}).then(s=>{m(!1),c(s.data.products)})};return e.createElement(e.Fragment,null,e.createElement("nav",{className:"navbar navbar-dark bg-navbar shadow navbar-expand fixed-bottom p-0"},e.createElement("div",{className:"container"},e.createElement("ul",{className:"navbar-nav nav-justified justify-content-center justify-item-center w-100"},e.createElement("li",{className:"nav-item"},e.createElement(a,{href:"/",className:"nav-link text-white fw-bold"},e.createElement("svg",{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",className:"bi bi-house",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{fillRule:"evenodd",d:"M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"}),e.createElement("path",{fillRule:"evenodd",d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"})),e.createElement("span",{className:"small d-block"},"Home"))),e.createElement("li",{className:"nav-item"},e.createElement(a,{href:"#","data-bs-toggle":"modal","data-bs-target":"#search",className:"nav-link text-white fw-bold"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16"},e.createElement("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})),e.createElement("span",{className:"small d-block"},"Search"))),e.createElement("li",{className:"nav-item dropup"},e.createElement(a,{href:"/login",className:"nav-link text-white fw-bold"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",fill:"currentColor",className:"bi bi-person-circle",viewBox:"0 0 16 16"},e.createElement("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),e.createElement("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})),e.createElement("span",{className:"small d-block"},"Account")))))),e.createElement("div",{className:"modal fade",id:"search",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Search"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("div",{className:"input-group"},e.createElement("input",{type:"text",className:"form-control",onChange:r=>i(r),placeholder:"search product here..."}))),e.createElement("div",{className:"modal-body",style:{height:"300px",overflow:"auto"}},o&&e.createElement("div",{className:"justify-content-center mb-3 text-center"},e.createElement("div",{className:"spinner-border text-success",role:"status"},e.createElement("span",{className:"visually-hidden"},"Loading...")),e.createElement("h6",{className:"mt-2"},"Loading...")),l.map((r,s)=>e.createElement("a",{href:`/products/${r.slug}`,className:"text-decoration-none text-dark",key:s},e.createElement("div",{className:"card border-0 shadow-sm rounded-3 bg-light mb-3"},e.createElement("div",{className:"card-body"},r.title)))))))))}function B({children:l}){return e.createElement(e.Fragment,null,e.createElement(z,null),e.createElement("div",{className:"main"},l,e.createElement(C,null)))}export{B as L};
