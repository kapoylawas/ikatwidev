import{u as x,r as m,R as e,H as S,d as C}from"./app.61f6e3d0.js";import{L as W}from"./Account.0f1de7bf.js";import{S as L}from"./sweetalert2.all.d88d8392.js";import"./Dropdown.0d39e509.js";function P(){const{errors:t,wilayah:l,provinces:E}=x().props,[r,p]=m.exports.useState(l.province_id),[n,v]=m.exports.useState(l.alamat),[s,N]=m.exports.useState(l.phone),[c,b]=m.exports.useState(l.email),[o,f]=m.exports.useState(l.instagram),[i,g]=m.exports.useState(l.name_ketua),[d,h]=m.exports.useState(l.lat),[u,y]=m.exports.useState(l.long),w=async a=>{a.preventDefault(),C.Inertia.put(`/account/wilayah/${l.id}`,{province_id:r,alamat:n,phone:s,email:c,instagram:o,name_ketua:i,lat:d,long:u},{onSuccess:()=>{L.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(S,null,e.createElement("title",null,"Edit Wilayah - IKATWI")),e.createElement(W,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," Add New Wilayah DPW")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:w},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Wilayah DPW"),e.createElement("select",{className:"form-select",value:r,onChange:a=>p(a.target.value)},e.createElement("option",{value:""},"-- Select DPW --"),E.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name)))),t.province_id&&e.createElement("div",{className:"alert alert-danger"},t.province_id),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Name Ketua"),e.createElement("input",{type:"text",className:"form-control",value:i,onChange:a=>g(a.target.value),placeholder:"Enter Name Ketua"})),t.name_ketua&&e.createElement("div",{className:"alert alert-danger"},t.name_ketua),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Alamat"),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:a=>v(a.target.value),placeholder:"Enter Alamat"})),t.alamat&&e.createElement("div",{className:"alert alert-danger"},t.alamat),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"No Telepon"),e.createElement("input",{type:"number",className:"form-control",value:s,onChange:a=>N(a.target.value),placeholder:"Enter No Telepon"})),t.phone&&e.createElement("div",{className:"alert alert-danger"},t.phone),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Email"),e.createElement("input",{type:"email",className:"form-control",value:c,onChange:a=>b(a.target.value),placeholder:"Enter Email"})),t.email&&e.createElement("div",{className:"alert alert-danger"},t.email),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Instagram"),e.createElement("input",{type:"text",className:"form-control",value:o,onChange:a=>f(a.target.value),placeholder:"Enter Instagram"})),t.instagram&&e.createElement("div",{className:"alert alert-danger"},t.instagram),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Latittude"),e.createElement("input",{type:"text",className:"form-control",value:d,onChange:a=>h(a.target.value),placeholder:"Latittude"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Longtittude"),e.createElement("input",{type:"text",className:"form-control",value:u,onChange:a=>y(a.target.value),placeholder:"Longtittude"})))),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{P as default};
