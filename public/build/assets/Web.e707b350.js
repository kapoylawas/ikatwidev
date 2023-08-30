import{r as f,R as e,L as n,u as T}from"./app.adec6002.js";import{j as u,D as l,b as R,e as j}from"./Dropdown.fd10bd60.js";import{a as P}from"./index.ff3e2b9d.js";var a={exports:{}},I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",S=I,L=S;function x(){}function b(){}b.resetWarningCache=x;var C=function(){function t(m,d,s,c,g,h){if(h!==L){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}t.isRequired=t;function r(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:b,resetWarningCache:x};return o.PropTypes=o,o};a.exports=C();const i=a.exports.oneOf(["start","end"]),M=a.exports.oneOfType([i,a.exports.shape({sm:i}),a.exports.shape({md:i}),a.exports.shape({lg:i}),a.exports.shape({xl:i}),a.exports.shape({xxl:i}),a.exports.object]),O={id:a.exports.string,href:a.exports.string,onClick:a.exports.func,title:a.exports.node.isRequired,disabled:a.exports.bool,align:M,menuRole:a.exports.string,renderMenuOnMount:a.exports.bool,rootCloseEvent:a.exports.string,menuVariant:a.exports.oneOf(["dark"]),flip:a.exports.bool,bsPrefix:a.exports.string,variant:a.exports.string,size:a.exports.string},E=f.exports.forwardRef(({title:t,children:r,bsPrefix:o,rootCloseEvent:m,variant:d,size:s,menuRole:c,renderMenuOnMount:g,disabled:h,href:p,id:v,menuVariant:y,flip:w,...N},k)=>u.exports.jsxs(l,{ref:k,...N,children:[u.exports.jsx(R,{id:v,href:p,size:s,variant:d,disabled:h,childBsPrefix:o,children:t}),u.exports.jsx(j,{role:c,renderOnMount:g,rootCloseEvent:m,variant:y,flip:w,children:r})]}));E.displayName="DropdownButton";E.propTypes=O;const D=E;function _(){let t={marginLeft:"7px"};return e.createElement(e.Fragment,null,e.createElement("nav",{className:"navbar-expand-md navbar-dark fixed-top bg-navbar shadow"},e.createElement("div",{className:"container"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-7"},e.createElement("header",{className:"d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1"},e.createElement(n,{href:"/",className:"d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none"},e.createElement("img",{src:"/assets/images/logo.png",width:"50",alt:"Deskripsi gambar"})," ","  ",e.createElement("span",{style:t},e.createElement("h5",null," ",e.createElement("strong",null," ")," Ikatan Terapis Wicara Indonesia"," "))),e.createElement("div",{id:"page-content-wrapper"}))),e.createElement("div",{className:"col-md-1"},e.createElement("header",{className:"d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1"},e.createElement("div",{className:"d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none"},e.createElement(D,{id:"dropdown-basic-button",variant:"success",className:"mt-1"},e.createElement(n,{href:"/history"},e.createElement(l.Item,{href:"#/action-2"},"Sejarah & Pengurus")),e.createElement(n,{href:"/visimisi"},e.createElement(l.Item,{href:"#/action-2"},"Visi & Misi")),e.createElement(n,{href:"/kegiatan"},e.createElement(l.Item,{href:"#/action-3"},"Kegiatan")),e.createElement(n,{href:"/anggota"},e.createElement(l.Item,{href:"#/action-4"},"Anggota")),e.createElement(n,{href:"/wilayah"},e.createElement(l.Item,{href:"#/action-5"},"Wilayah DPW")),e.createElement(n,{href:"/wilayahdpc"},e.createElement(l.Item,{href:"#/action-6"},"Wilayah DPC")),e.createElement(l.Item,{href:"https://ikatwisiporlin-ktki.kemkes.go.id/",target:"_blank"},"Siporlin"),e.createElement(l.Item,{href:"https://siedunakes-ktki.kemkes.go.id/home/",target:"_blank"},"Siedunakes")))))))))}function z(){T().props;const[t,r]=f.exports.useState([]),[o,m]=f.exports.useState(!1),d=s=>{m(!0),r([]),P.post("/search",{q:s.target.value}).then(c=>{m(!1),r(c.data.products)})};return e.createElement(e.Fragment,null,e.createElement("nav",{className:"navbar navbar-dark bg-navbar shadow navbar-expand fixed-bottom p-0"},e.createElement("div",{className:"container"},e.createElement("ul",{className:"navbar-nav nav-justified justify-content-center justify-item-center w-100"},e.createElement("li",{className:"nav-item"},e.createElement(n,{href:"/",className:"nav-link text-white fw-bold"},e.createElement("svg",{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",className:"bi bi-house",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{fillRule:"evenodd",d:"M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"}),e.createElement("path",{fillRule:"evenodd",d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"})),e.createElement("span",{className:"small d-block"},"Home"))),e.createElement("li",{className:"nav-item"},e.createElement(n,{href:"#","data-bs-toggle":"modal","data-bs-target":"#search",className:"nav-link text-white fw-bold"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16"},e.createElement("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})),e.createElement("span",{className:"small d-block"},"Search"))),e.createElement("li",{className:"nav-item dropup"},e.createElement(n,{href:"/login",className:"nav-link text-white fw-bold"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",fill:"currentColor",className:"bi bi-person-circle",viewBox:"0 0 16 16"},e.createElement("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),e.createElement("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})),e.createElement("span",{className:"small d-block"},"Account")))))),e.createElement("div",{className:"modal fade",id:"search",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Search"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("div",{className:"input-group"},e.createElement("input",{type:"text",className:"form-control",onChange:s=>d(s),placeholder:"search product here..."}))),e.createElement("div",{className:"modal-body",style:{height:"300px",overflow:"auto"}},o&&e.createElement("div",{className:"justify-content-center mb-3 text-center"},e.createElement("div",{className:"spinner-border text-success",role:"status"},e.createElement("span",{className:"visually-hidden"},"Loading...")),e.createElement("h6",{className:"mt-2"},"Loading...")),t.map((s,c)=>e.createElement("a",{href:`/products/${s.slug}`,className:"text-decoration-none text-dark",key:c},e.createElement("div",{className:"card border-0 shadow-sm rounded-3 bg-light mb-3"},e.createElement("div",{className:"card-body"},s.title)))))))))}function V({children:t}){return e.createElement(e.Fragment,null,e.createElement(_,null),e.createElement("div",{className:"main"},t,e.createElement(z,null)))}export{V as L};
