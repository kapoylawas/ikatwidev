import{u as f,r as l,R as e,H as g,d as h}from"./app.b6feab62.js";import{L as y}from"./Account.f7abef64.js";import{S as w}from"./sweetalert2.all.afb89eea.js";function W(){const{wilayah:i,errors:t}=f().props,[r,d]=l.exports.useState(""),[m,u]=l.exports.useState(""),[s,E]=l.exports.useState(""),[n,p]=l.exports.useState(""),[c,N]=l.exports.useState(""),[o,b]=l.exports.useState(""),v=async a=>{a.preventDefault(),h.Inertia.post("/account/areadpc",{city_id:r,alamat:m,phone:s,email:n,instagram:c,name_ketua:o},{onSuccess:()=>{w.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement("title",null,"Create Wilayah - IKATWI")),e.createElement(y,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," Add New Wilayah DPC")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:v},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Wilayah DPW"),e.createElement("select",{className:"form-select",value:r,onChange:a=>d(a.target.value)},e.createElement("option",{value:""},"-- Select DPW --"),i.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name)))),t.province_id&&e.createElement("div",{className:"alert alert-danger"},t.province_id),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Name Ketua"),e.createElement("input",{type:"text",className:"form-control",value:o,onChange:a=>b(a.target.value),placeholder:"Enter Name Ketua"})),t.name_ketua&&e.createElement("div",{className:"alert alert-danger"},t.name_ketua),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Alamat"),e.createElement("input",{type:"text",className:"form-control",value:m,onChange:a=>u(a.target.value),placeholder:"Enter Alamat"})),t.alamat&&e.createElement("div",{className:"alert alert-danger"},t.alamat),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"No Telepon"),e.createElement("input",{type:"number",className:"form-control",value:s,onChange:a=>E(a.target.value),placeholder:"Enter No Telepon"})),t.phone&&e.createElement("div",{className:"alert alert-danger"},t.phone),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Email"),e.createElement("input",{type:"email",className:"form-control",value:n,onChange:a=>p(a.target.value),placeholder:"Enter Email"})),t.email&&e.createElement("div",{className:"alert alert-danger"},t.email),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Instagram"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>N(a.target.value),placeholder:"Enter Instagram"})),t.instagram&&e.createElement("div",{className:"alert alert-danger"},t.instagram))),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{W as default};
