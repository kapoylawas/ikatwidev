<<<<<<<< HEAD:public/build/assets/Edit.7e126c64.js
import{u as m,r as c,R as e,H as o,d}from"./app.c8c6bc0a.js";import{L as i}from"./Account.cfa79397.js";import{S as u}from"./sweetalert2.all.1a5845b1.js";import"./Dropdown.def6e8bd.js";function N(){const{errors:a,dpw:s}=m().props,[l,r]=c.exports.useState(s.name),n=async t=>{t.preventDefault(),d.Inertia.put(`/account/dpw/${s.id}`,{name:l},{onSuccess:()=>{u.fire({title:"Success!",text:"Data updated successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(o,null,e.createElement("title",null,"Edit DPW - IKATWI")),e.createElement(i,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," edit DPW")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:n},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"DPW Name"),e.createElement("input",{type:"text",className:"form-control",value:l,onChange:t=>r(t.target.value),placeholder:"Enter DPW Name"})),a.name&&e.createElement("div",{className:"alert alert-danger"},a.name),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{N as default};
========
import{u as m,r as c,R as e,H as o,d}from"./app.f885a81d.js";import{L as i}from"./Account.8ff4b1ff.js";import{S as u}from"./sweetalert2.all.e84ab885.js";import"./Dropdown.0c92de7d.js";function N(){const{errors:a,dpw:s}=m().props,[l,r]=c.exports.useState(s.name),n=async t=>{t.preventDefault(),d.Inertia.put(`/account/dpw/${s.id}`,{name:l},{onSuccess:()=>{u.fire({title:"Success!",text:"Data updated successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(o,null,e.createElement("title",null,"Edit DPW - IKATWI")),e.createElement(i,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," edit DPW")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:n},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"DPW Name"),e.createElement("input",{type:"text",className:"form-control",value:l,onChange:t=>r(t.target.value),placeholder:"Enter DPW Name"})),a.name&&e.createElement("div",{className:"alert alert-danger"},a.name),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{N as default};
>>>>>>>> refs/remotes/origin/main:public/build/assets/Edit.153e7d7d.js
