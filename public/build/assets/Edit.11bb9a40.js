<<<<<<<< HEAD:public/build/assets/Edit.e9e55c81.js
import{u as y,r as l,R as e,H as D,L as _,d as C}from"./app.c8c6bc0a.js";import{L as I}from"./Account.cfa79397.js";import{S as P}from"./sweetalert2.all.1a5845b1.js";import"./Dropdown.def6e8bd.js";function A(){const{errors:t,document:s,cities:d,provinces:i}=y().props,[m,u]=l.exports.useState(s.name),[r,E]=l.exports.useState(s.email),[c,p]=l.exports.useState(s.province_id),[n,N]=l.exports.useState(s.city_id),[b,v]=l.exports.useState(null),[f,g]=l.exports.useState(null),[h,S]=l.exports.useState(null),[o,w]=l.exports.useState(s.date_exprd),x=async a=>{a.preventDefault(),C.Inertia.post(`/account/documents/${s.id}`,{name:m,email:r,ijazah:b,str:f,sip:h,date_exprd:o,province_id:c,city_id:n,_method:"PUT"},{onSuccess:()=>{P.fire({title:"Success!",text:"Data updated successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(D,null,e.createElement("title",null,"Upload Documents - IKATWI")),e.createElement(I,null,e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(_,{href:"/account/documents",className:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-arrow-left me-2"}),"KEMBALI"))))),e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-users"})," Upload Documents")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:x},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Name dan Gelar"),e.createElement("input",{type:"text",className:"form-control",value:m,onChange:a=>u(a.target.value),placeholder:"Enter Full Name",disabled:!0}))),e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Email Address"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>E(a.target.value),placeholder:"Enter Email Address",disabled:!0})))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"DPW"),e.createElement("select",{className:"form-select",value:c,onChange:a=>p(a.target.value)},e.createElement("option",{value:""},"-- Select DPW --"),i.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.province_id&&e.createElement("div",{className:"alert alert-danger mt-2"},t.province_id))),e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"DPC"),e.createElement("select",{className:"form-select",value:n,onChange:a=>N(a.target.value)},e.createElement("option",{value:""},"-- Select DPC --"),d.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.city_id&&e.createElement("div",{className:"alert alert-danger mt-2"},t.city_id))),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"File Ijazah"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>v(a.target.files[0])})),t.ijazah&&e.createElement("div",{className:"alert alert-danger mt-2"},t.ijazah),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"File SIP"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>S(a.target.files[0])})),t.sip&&e.createElement("div",{className:"alert alert-danger mt-2"},t.sip),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"File STR"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>g(a.target.files[0])})),t.str&&e.createElement("div",{className:"alert alert-danger mt-2"},t.str),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"Tanggal expired STR"),e.createElement("div",{className:"input-group mb-3"},e.createElement("input",{type:"date",className:"form-control",value:o,onChange:a=>w(a.target.value),placeholder:"Tanggal Expired STR"})),t.date_exprd&&e.createElement("div",{className:"alert alert-danger mt-2"},t.date_exprd))),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{A as default};
========
import{u as y,r as l,R as e,H as D,L as _,d as C}from"./app.f885a81d.js";import{L as I}from"./Account.8ff4b1ff.js";import{S as P}from"./sweetalert2.all.e84ab885.js";import"./Dropdown.0c92de7d.js";function A(){const{errors:t,document:s,cities:d,provinces:i}=y().props,[m,u]=l.exports.useState(s.name),[r,E]=l.exports.useState(s.email),[c,p]=l.exports.useState(s.province_id),[n,N]=l.exports.useState(s.city_id),[b,v]=l.exports.useState(null),[f,g]=l.exports.useState(null),[h,S]=l.exports.useState(null),[o,w]=l.exports.useState(s.date_exprd),x=async a=>{a.preventDefault(),C.Inertia.post(`/account/documents/${s.id}`,{name:m,email:r,ijazah:b,str:f,sip:h,date_exprd:o,province_id:c,city_id:n,_method:"PUT"},{onSuccess:()=>{P.fire({title:"Success!",text:"Data updated successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(D,null,e.createElement("title",null,"Upload Documents - IKATWI")),e.createElement(I,null,e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(_,{href:"/account/documents",className:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-arrow-left me-2"}),"KEMBALI"))))),e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-users"})," Upload Documents")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:x},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Name dan Gelar"),e.createElement("input",{type:"text",className:"form-control",value:m,onChange:a=>u(a.target.value),placeholder:"Enter Full Name",disabled:!0}))),e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Email Address"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>E(a.target.value),placeholder:"Enter Email Address",disabled:!0})))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"DPW"),e.createElement("select",{className:"form-select",value:c,onChange:a=>p(a.target.value)},e.createElement("option",{value:""},"-- Select DPW --"),i.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.province_id&&e.createElement("div",{className:"alert alert-danger mt-2"},t.province_id))),e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"DPC"),e.createElement("select",{className:"form-select",value:n,onChange:a=>N(a.target.value)},e.createElement("option",{value:""},"-- Select DPC --"),d.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.city_id&&e.createElement("div",{className:"alert alert-danger mt-2"},t.city_id))),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"File Ijazah"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>v(a.target.files[0])})),t.ijazah&&e.createElement("div",{className:"alert alert-danger mt-2"},t.ijazah),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"File SIP"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>S(a.target.files[0])})),t.sip&&e.createElement("div",{className:"alert alert-danger mt-2"},t.sip),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"File STR"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>g(a.target.files[0])})),t.str&&e.createElement("div",{className:"alert alert-danger mt-2"},t.str),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"Tanggal expired STR"),e.createElement("div",{className:"input-group mb-3"},e.createElement("input",{type:"date",className:"form-control",value:o,onChange:a=>w(a.target.value),placeholder:"Tanggal Expired STR"})),t.date_exprd&&e.createElement("div",{className:"alert alert-danger mt-2"},t.date_exprd))),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{A as default};
>>>>>>>> refs/remotes/origin/main:public/build/assets/Edit.11bb9a40.js
