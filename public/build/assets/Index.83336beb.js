import{R as e,u as W,r as b,H as R,L as x}from"./app.f41a7b80.js";import{L as G,h as T}from"./Account.11a7b2f0.js";import{P as U}from"./Pagination.3b013705.js";import"./Dropdown.2942ee5c.js";var F={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},D=e.createContext&&e.createContext(F),Z=["attr","size","title"];function q(t,r){if(t==null)return{};var l=J(t,r),n,s;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(s=0;s<d.length;s++)n=d[s],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(l[n]=t[n]))}return l}function J(t,r){if(t==null)return{};var l={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(r.indexOf(n)>=0)continue;l[n]=t[n]}return l}function w(){return w=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t},w.apply(this,arguments)}function I(t,r){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),l.push.apply(l,n)}return l}function k(t){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?I(Object(l),!0).forEach(function(n){Q(t,n,l[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):I(Object(l)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(l,n))})}return t}function Q(t,r,l){return r=X(r),r in t?Object.defineProperty(t,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[r]=l,t}function X(t){var r=ee(t,"string");return typeof r=="symbol"?r:r+""}function ee(t,r){if(typeof t!="object"||!t)return t;var l=t[Symbol.toPrimitive];if(l!==void 0){var n=l.call(t,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function _(t){return t&&t.map((r,l)=>e.createElement(r.tag,k({key:l},r.attr),_(r.child)))}function i(t){return r=>e.createElement(te,w({attr:k({},t.attr)},r),_(t.child))}function te(t){var r=l=>{var{attr:n,size:s,title:d}=t,E=q(t,Z),g=s||l.size||"1em",o;return l.className&&(o=l.className),t.className&&(o=(o?o+" ":"")+t.className),e.createElement("svg",w({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,n,E,{className:o,style:k(k({color:t.color||l.color},l.style),t.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),d&&e.createElement("title",null,d),t.children)};return D!==void 0?e.createElement(D.Consumer,null,l=>r(l)):r(F)}function M(t){return i({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(t)}function ae(t){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function re(t){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(t)}function B(t){return i({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(t)}function le(t){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(t)}function ne(t){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(t)}function N(t){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(t)}function ce(t){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"},child:[]}]})(t)}function $(t){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"},child:[]}]})(t)}function V(t){return i({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m17.66 9.53-7.07 7.07-4.24-4.24 1.41-1.41 2.83 2.83 5.66-5.66 1.41 1.41zM4 12c0-2.33 1.02-4.42 2.62-5.88L9 8.5v-6H3l2.2 2.2C3.24 6.52 2 9.11 2 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-.49-7-3.86-7-7.93zm18 0c0-5.19-3.95-9.45-9-9.95v2.02c3.94.49 7 3.86 7 7.93 0 2.33-1.02 4.42-2.62 5.88L15 15.5v6h6l-2.2-2.2c1.96-1.82 3.2-4.41 3.2-7.3z"},child:[]}]})(t)}function ie(t){return i({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24m0 24H0"},child:[]},{tag:"path",attr:{d:"M7 6h10l-5.01 6.3L7 6zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"},child:[]},{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]}]})(t)}function se(t){return i({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M13.05 9.79 10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.941 7.941 0 0 1 11 4.07zM5.69 7.1 4.26 5.68A9.949 9.949 0 0 0 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43A7.868 7.868 0 0 1 4.07 13zm1.61 6.74A9.981 9.981 0 0 0 11 21.95v-2.02a7.941 7.941 0 0 1-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"},child:[]}]})(t)}function oe(t){return i({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(t)}function he(){const{materiVideos:t,errors:r,transactions:l,statusAnggota:n}=W().props,s=(n==null?void 0:n.status_anggota)||"",d=l.length>0?l[0]:null,E=d?d.status:"",g=E==="PAID"||s==="Anggota Kehormatan",[o,f]=b.exports.useState("all"),[h,p]=b.exports.useState("all"),[u,H]=b.exports.useState(null),[z,P]=b.exports.useState("grid");b.exports.useState([]);const[O,Y]=b.exports.useState(!1),C=[...new Set(t.data.map(a=>a.tahun))].sort((a,c)=>c-a),y=t.data.filter(a=>{const c=o==="all"||a.tahun===o,m=h==="all"||a.status===h;return c&&m}),j=a=>{if(!a)return null;const c=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,m=a.match(c);return m&&m[2].length===11?m[2]:null},A=a=>new Date(a).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}),K=a=>{if(!a)return"--:--";const c=Math.floor(a/3600),m=Math.floor(a%3600/60),L=a%60;return c>0?`${c}:${m.toString().padStart(2,"0")}:${L.toString().padStart(2,"0")}`:`${m}:${L.toString().padStart(2,"0")}`},S=()=>{H(null),document.body.style.overflow="auto"},v=a=>{if(!g)return;const c=j(a.linkvideo);c&&(H({id:a.id,title:a.name,videoId:c,year:a.tahun,status:a.status}),document.body.style.overflow="hidden")};return b.exports.useEffect(()=>{const a=c=>{c.keyCode===27&&S()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]),e.createElement(e.Fragment,null,e.createElement(R,null,e.createElement("title",null,"Materi Video - IKATWI")),e.createElement(G,null,e.createElement("div",{className:"container-fluid py-4"},g?e.createElement(e.Fragment,null,e.createElement("div",{className:"row mb-5"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"d-flex flex-column"},e.createElement("div",{className:"d-flex align-items-center mb-3"},e.createElement("div",{className:"icon-wrapper me-3"},e.createElement(M,{className:"fs-1 text-white"})),e.createElement("div",null,e.createElement("h1",{className:"h1 fw-bold mb-1 text-dark"},"Materi Video"),e.createElement("p",{className:"text-muted mb-0"},"Koleksi video pembelajaran IKATWI yang inspiratif dan informatif"),e.createElement("div",{className:"mt-2"},e.createElement("span",{className:"badge bg-success"},e.createElement($,{className:"me-1"}),"Akses Diberikan"))))))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-lg-3 mb-4"},e.createElement("div",{className:"card border-0 shadow-sm sticky-top",style:{top:"20px"}},e.createElement("div",{className:"card-body p-4"},e.createElement("div",{className:"d-flex align-items-center justify-content-between mb-4"},e.createElement("h5",{className:"fw-bold mb-0 d-flex align-items-center"},e.createElement(ie,{className:"me-2 text-primary"}),"Filter Video"),e.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:()=>{f("all"),p("all")}},"Reset")),e.createElement("div",{className:"mb-4"},e.createElement("label",{className:"form-label fw-semibold text-muted mb-3"},e.createElement(ae,{className:"me-2"}),"Tahun"),e.createElement("div",{className:"d-flex flex-column gap-2"},e.createElement("button",{onClick:()=>f("all"),className:`filter-chip ${o==="all"?"active":""}`},"Semua Tahun"),C.map(a=>e.createElement("button",{key:a,onClick:()=>f(a),className:`filter-chip ${o===a?"active":""}`},a)))),e.createElement("div",{className:"mb-4"},e.createElement("label",{className:"form-label fw-semibold text-muted mb-3"},e.createElement(V,{className:"me-2"}),"Status"),e.createElement("div",{className:"d-flex flex-column gap-2"},e.createElement("button",{onClick:()=>p("all"),className:`filter-chip ${h==="all"?"active":""}`},"Semua Status"),e.createElement("button",{onClick:()=>p("published"),className:`filter-chip status-published ${h==="published"?"active":""}`},e.createElement("span",{className:"status-dot bg-success"}),"Published"),e.createElement("button",{onClick:()=>p("draft"),className:`filter-chip status-draft ${h==="draft"?"active":""}`},e.createElement("span",{className:"status-dot bg-warning"}),"Draft"))),e.createElement("div",{className:"mb-4"},e.createElement("label",{className:"form-label fw-semibold text-muted mb-3"},"Tampilan"),e.createElement("div",{className:"d-flex gap-2"},e.createElement("button",{onClick:()=>P("grid"),className:`view-toggle-btn ${z==="grid"?"active":""}`},e.createElement(ce,null)),e.createElement("button",{onClick:()=>P("list"),className:`view-toggle-btn ${z==="list"?"active":""}`},e.createElement(ne,null)))),e.createElement("div",{className:"border-top pt-4"},e.createElement("h6",{className:"fw-semibold mb-3"},"Statistik"),e.createElement("div",{className:"d-flex flex-column gap-3"},e.createElement("div",{className:"d-flex justify-content-between align-items-center"},e.createElement("span",{className:"text-muted"},"Total Video"),e.createElement("span",{className:"fw-bold"},t.total)),e.createElement("div",{className:"d-flex justify-content-between align-items-center"},e.createElement("span",{className:"text-muted"},"Tersedia"),e.createElement("span",{className:"fw-bold text-success"},t.data.filter(a=>a.status==="published").length)),e.createElement("div",{className:"d-flex justify-content-between align-items-center"},e.createElement("span",{className:"text-muted"},"Draft"),e.createElement("span",{className:"fw-bold text-warning"},t.data.filter(a=>a.status==="draft").length)),e.createElement("div",{className:"d-flex justify-content-between align-items-center"},e.createElement("span",{className:"text-muted"},"Tahun"),e.createElement("span",{className:"fw-bold text-info"},C.length))))))),e.createElement("div",{className:"col-lg-9"},e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-4"},e.createElement("div",null,e.createElement("h4",{className:"fw-bold mb-0 text-dark"},"Video Pembelajaran"),e.createElement("p",{className:"text-muted small mb-0"},y.length," video ditemukan")),e.createElement("button",{className:"btn btn-primary d-lg-none",onClick:()=>Y(!O)},e.createElement(le,{className:"me-2"}),"Filter")),O&&e.createElement("div",{className:"card mb-4 d-lg-none"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-6 mb-3"},e.createElement("label",{className:"form-label"},"Tahun"),e.createElement("select",{value:o,onChange:a=>f(a.target.value),className:"form-select"},e.createElement("option",{value:"all"},"Semua Tahun"),C.map(a=>e.createElement("option",{key:a,value:a},a)))),e.createElement("div",{className:"col-6 mb-3"},e.createElement("label",{className:"form-label"},"Status"),e.createElement("select",{value:h,onChange:a=>p(a.target.value),className:"form-select"},e.createElement("option",{value:"all"},"Semua Status"),e.createElement("option",{value:"published"},"Published"),e.createElement("option",{value:"draft"},"Draft")))))),y.length===0?e.createElement("div",{className:"empty-state"},e.createElement("div",{className:"empty-state-icon"},e.createElement(se,null)),e.createElement("h4",{className:"mt-4 text-danger"},"Tidak ada video ditemukan"),e.createElement("p",{className:"text-muted mb-4"},"Coba ubah filter pencarian Anda atau kembali nanti"),e.createElement("button",{onClick:()=>{f("all"),p("all")},className:"btn btn-primary"},"Tampilkan Semua Video")):z==="grid"?e.createElement("div",{className:"row g-4"},y.map(a=>{const c=j(a.linkvideo),m=c?`https://img.youtube.com/vi/${c}/maxresdefault.jpg`:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop";return e.createElement("div",{key:a.id,className:"col-xl-4 col-lg-6"},e.createElement("div",{className:"video-card"},e.createElement("div",{className:"video-thumbnail",onClick:()=>v(a)},e.createElement("img",{src:m,alt:a.name}),e.createElement("div",{className:"video-overlay"},e.createElement("div",{className:"play-button"},e.createElement(N,null)),e.createElement("div",{className:"video-duration"},K(a.duration)))),e.createElement("div",{className:"video-content"},e.createElement("div",{className:"d-flex justify-content-between align-items-start mb-2"},e.createElement("div",null,e.createElement("span",{className:`status-badge ${a.status==="published"?"published":"draft"}`},a.status==="published"?"Tersedia":"Draft"),e.createElement("span",{className:"year-badge ms-2"},a.tahun)),e.createElement("div",{className:"video-actions"},e.createElement("button",{className:"btn btn-sm btn-link text-muted"},e.createElement(oe,null)))),e.createElement("h6",{className:"video-title",onClick:()=>v(a)},a.name),e.createElement("div",{className:"video-meta"},e.createElement("div",{className:"d-flex align-items-center text-muted small"},e.createElement(V,{className:"me-2"}),A(a.created_at))),e.createElement("div",{className:"video-actions-bottom mt-3"},e.createElement("button",{onClick:()=>v(a),className:"btn btn-play"},e.createElement(N,{className:"me-2"}),"Tonton Sekarang"),T(["materi-videos.edit"])&&e.createElement(x,{href:`/account/materi/${a.id}/edit`,className:"btn btn-outline"},e.createElement(B,{className:"me-2"}),"Detail")))))})):e.createElement("div",{className:"card border-0 shadow-sm"},e.createElement("div",{className:"card-body p-0"},e.createElement("div",{className:"list-view"},y.map(a=>{const c=j(a.linkvideo);return e.createElement("div",{key:a.id,className:"list-item"},e.createElement("div",{className:"list-thumbnail",onClick:()=>v(a)},e.createElement("img",{src:`https://img.youtube.com/vi/${c}/hqdefault.jpg`,alt:a.name}),e.createElement("div",{className:"thumbnail-overlay"},e.createElement(N,null))),e.createElement("div",{className:"list-content"},e.createElement("div",{className:"d-flex justify-content-between align-items-start mb-2"},e.createElement("div",null,e.createElement("span",{className:`status-badge ${a.status==="published"?"published":"draft"}`},a.status==="published"?"Tersedia":"Draft"),e.createElement("span",{className:"year-badge ms-2"},a.tahun))),e.createElement("h6",{className:"mb-2",onClick:()=>v(a)},a.name),e.createElement("div",{className:"text-muted small mb-3"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement(V,{className:"me-2"}),"Dibuat"," ",A(a.created_at))),e.createElement("div",{className:"d-flex gap-2"},e.createElement("button",{onClick:()=>v(a),className:"btn btn-sm btn-play"},e.createElement(N,{className:"me-2"}),"Play"),T(["materi-videos.edit"])&&e.createElement(x,{href:`/account/materi/${a.id}/edit`,className:"btn btn-sm btn-outline"},e.createElement(B,{className:"me-2"}),"Detail"))))})))),t.links&&t.links.length>3&&e.createElement("div",{className:"mt-5"},e.createElement("div",{className:"card border-0 shadow-sm"},e.createElement("div",{className:"card-body"},e.createElement(U,{links:t.links})))))),u&&e.createElement("div",{className:"video-player-modal"},e.createElement("div",{className:"video-player-overlay",onClick:S}),e.createElement("div",{className:"video-player-container"},e.createElement("div",{className:"video-player-header"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:`status-indicator ${u.status==="published"?"published":"draft"}`}),e.createElement("div",{className:"ms-2"},e.createElement("h6",{className:"mb-0 text-truncate pe-4"},u.title),e.createElement("small",{className:"text-white-50"},u.year))),e.createElement("button",{className:"btn-close btn-close-white",onClick:S})),e.createElement("div",{className:"video-player-body"},e.createElement("div",{className:"ratio ratio-16x9"},e.createElement("iframe",{src:`https://www.youtube.com/embed/${u.videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`,title:u.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),e.createElement("div",{className:"mt-4 d-flex justify-content-between align-items-center"},e.createElement("div",null,e.createElement("small",{className:"text-muted"},e.createElement(M,{className:"text-danger me-1"}),"YouTube Video \u2022 Auto Play")),e.createElement("a",{href:`https://www.youtube.com/watch?v=${u.videoId}`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-danger"},e.createElement(re,{className:"me-1"}),"Buka di YouTube")))))):e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-lg-8"},e.createElement("div",{className:"card border-0 shadow-lg"},e.createElement("div",{className:"card-body text-center p-5"},e.createElement("div",{className:"mb-4"},e.createElement("div",{className:"access-denied-icon mb-4"},e.createElement(M,{className:"text-danger"})),e.createElement("h2",{className:"fw-bold text-danger mb-3"},"Akses Ditolak!"),e.createElement("p",{className:"text-muted mb-4"},"Anda tidak memiliki akses untuk melihat materi video.",e.createElement("br",null),"Akses hanya diberikan kepada anggota yang telah membayar iuran atau Anggota Kehormatan."),e.createElement("div",{className:"alert alert-info mb-4"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"me-3"},e.createElement($,{className:"fs-4 text-info"})),e.createElement("div",{className:"text-start"},e.createElement("h6",{className:"fw-bold mb-1"},"Status Keanggotaan Anda:"),e.createElement("p",{className:"mb-0"},e.createElement("strong",null,"Status Pembayaran:")," ",E||"Belum Bayar",e.createElement("br",null),e.createElement("strong",null,"Status Anggota:")," ",s||"Anggota Biasa")))),e.createElement("div",{className:"d-flex gap-3 justify-content-center"},e.createElement(x,{href:"/account/dashboard",className:"btn btn-primary"},"Kembali ke Dashboard"),e.createElement(x,{href:"/account/tagihan",className:"btn btn-success"},"Bayar Iuran")))))))),e.createElement("style",null,`
                    /* Global Variables */
                    :root {
                        --primary-color: #3b82f6;
                        --primary-light: #eff6ff;
                        --secondary-color: #64748b;
                        --success-color: #10b981;
                        --warning-color: #f59e0b;
                        --danger-color: #ef4444;
                        --dark-color: #1e293b;
                        --light-color: #f8fafc;
                        --border-radius: 12px;
                        --shadow-sm: 0 2px 4px rgba(0,0,0,0.05);
                        --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
                        --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
                    }

                    /* Icon Wrapper */
                    .icon-wrapper {
                        width: 70px;
                        height: 70px;
                        background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                        border-radius: var(--border-radius);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    /* Access Denied Icon */
                    .access-denied-icon {
                        width: 100px;
                        height: 100px;
                        background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto;
                    }

                    .access-denied-icon svg {
                        font-size: 48px;
                    }

                    /* Filter Chips */
                    .filter-chip {
                        padding: 0.5rem 1rem;
                        border: 2px solid #e5e7eb;
                        background: white;
                        border-radius: 50px;
                        font-size: 0.875rem;
                        font-weight: 500;
                        color: var(--secondary-color);
                        transition: all 0.2s ease;
                        text-align: left;
                    }

                    .filter-chip:hover {
                        border-color: var(--primary-color);
                        color: var(--primary-color);
                        background: var(--primary-light);
                    }

                    .filter-chip.active {
                        background: var(--primary-color);
                        color: white;
                        border-color: var(--primary-color);
                    }

                    .status-dot {
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        margin-right: 6px;
                        display: inline-block;
                    }

                    /* View Toggle */
                    .view-toggle-btn {
                        width: 40px;
                        height: 40px;
                        border: 2px solid #e5e7eb;
                        background: white;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--secondary-color);
                        transition: all 0.2s ease;
                    }

                    .view-toggle-btn:hover {
                        border-color: var(--primary-color);
                        color: var(--primary-color);
                    }

                    .view-toggle-btn.active {
                        background: var(--primary-color);
                        border-color: var(--primary-color);
                        color: white;
                    }

                    /* Video Card */
                    .video-card {
                        background: white;
                        border-radius: var(--border-radius);
                        overflow: hidden;
                        box-shadow: var(--shadow-sm);
                        transition: all 0.3s ease;
                        height: 100%;
                    }

                    .video-card:hover {
                        box-shadow: var(--shadow-lg);
                        transform: translateY(-4px);
                    }

                    .video-thumbnail {
                        position: relative;
                        height: 200px;
                        overflow: hidden;
                        cursor: pointer;
                    }

                    .video-thumbnail img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.3s ease;
                    }

                    .video-card:hover .video-thumbnail img {
                        transform: scale(1.05);
                    }

                    .video-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
                        opacity: 0;
                        transition: opacity 0.3s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .video-thumbnail:hover .video-overlay {
                        opacity: 1;
                    }

                    .play-button {
                        width: 50px;
                        height: 50px;
                        background: rgba(239, 68, 68, 0.9);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-size: 1.25rem;
                        transform: scale(0.9);
                        transition: transform 0.3s ease;
                    }

                    .video-thumbnail:hover .play-button {
                        transform: scale(1);
                    }

                    .video-duration {
                        position: absolute;
                        bottom: 10px;
                        right: 10px;
                        background: rgba(0,0,0,0.8);
                        color: white;
                        padding: 0.25rem 0.5rem;
                        border-radius: 4px;
                        font-size: 0.75rem;
                    }

                    .video-content {
                        padding: 1.25rem;
                    }

                    .status-badge {
                        display: inline-block;
                        padding: 0.25rem 0.75rem;
                        border-radius: 50px;
                        font-size: 0.75rem;
                        font-weight: 600;
                    }

                    .status-badge.published {
                        background: rgba(16, 185, 129, 0.1);
                        color: var(--success-color);
                    }

                    .status-badge.draft {
                        background: rgba(245, 158, 11, 0.1);
                        color: var(--warning-color);
                    }

                    .year-badge {
                        display: inline-block;
                        padding: 0.25rem 0.75rem;
                        background: rgba(59, 130, 246, 0.1);
                        color: var(--primary-color);
                        border-radius: 50px;
                        font-size: 0.75rem;
                        font-weight: 600;
                    }

                    .video-title {
                        font-weight: 600;
                        margin: 0.75rem 0;
                        cursor: pointer;
                        transition: color 0.2s ease;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    .video-title:hover {
                        color: var(--primary-color);
                    }

                    .btn-play {
                        background: var(--primary-color);
                        color: white;
                        border: none;
                        padding: 0.5rem 1.25rem;
                        border-radius: 8px;
                        font-weight: 500;
                        transition: all 0.2s ease;
                        flex: 1;
                    }

                    .btn-play:hover {
                        background: #2563eb;
                        color: white;
                    }

                    .btn-outline {
                        border: 2px solid #e5e7eb;
                        background: white;
                        color: var(--secondary-color);
                        padding: 0.5rem 1.25rem;
                        border-radius: 8px;
                        font-weight: 500;
                        transition: all 0.2s ease;
                        flex: 1;
                    }

                    .btn-outline:hover {
                        border-color: var(--primary-color);
                        color: var(--primary-color);
                    }

                    .video-actions-bottom {
                        display: flex;
                        gap: 0.75rem;
                    }

                    /* List View */
                    .list-item {
                        display: flex;
                        padding: 1.25rem;
                        border-bottom: 1px solid #e5e7eb;
                        transition: background 0.2s ease;
                    }

                    .list-item:hover {
                        background: var(--primary-light);
                    }

                    .list-thumbnail {
                        width: 120px;
                        height: 80px;
                        border-radius: 8px;
                        overflow: hidden;
                        position: relative;
                        flex-shrink: 0;
                        margin-right: 1.25rem;
                        cursor: pointer;
                    }

                    .list-thumbnail img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .thumbnail-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0,0,0,0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        opacity: 0;
                        transition: opacity 0.2s ease;
                    }

                    .list-thumbnail:hover .thumbnail-overlay {
                        opacity: 1;
                    }

                    .list-content {
                        flex: 1;
                    }

                    /* Empty State */
                    .empty-state {
                        text-align: center;
                        padding: 4rem 2rem;
                    }

                    .empty-state-icon {
                        width: 80px;
                        height: 80px;
                        background: linear-gradient(135deg, var(--primary-light) 0%, #c12f2fff 100%);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto;
                        color: var(--primary-color);
                        font-size: 2rem;
                    }

                    /* Video Player Modal */
                    .video-player-modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 1050;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .video-player-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.9);
                        backdrop-filter: blur(8px);
                    }

                    .video-player-container {
                        position: relative;
                        z-index: 1;
                        width: 90%;
                        max-width: 1000px;
                        background: white;
                        border-radius: var(--border-radius);
                        overflow: hidden;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                        animation: modalSlideIn 0.3s ease;
                    }

                    .video-player-header {
                        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                        color: white;
                        padding: 1.25rem 1.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }

                    .status-indicator {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                    }

                    .status-indicator.published {
                        background: var(--success-color);
                    }

                    .status-indicator.draft {
                        background: var(--warning-color);
                    }

                    .video-player-body {
                        padding: 2rem;
                    }

                    @keyframes modalSlideIn {
                        from {
                            opacity: 0;
                            transform: translateY(-30px) scale(0.95);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }

                    /* Responsive */
                    @media (max-width: 992px) {
                        .video-thumbnail {
                            height: 180px;
                        }
                    }

                    @media (max-width: 768px) {
                        .list-item {
                            flex-direction: column;
                        }
                        
                        .list-thumbnail {
                            width: 100%;
                            height: 160px;
                            margin-right: 0;
                            margin-bottom: 1rem;
                        }
                        
                        .video-player-container {
                            width: 95%;
                            margin: 1rem;
                        }
                    }
                `)))}export{he as default};
