import{u as y,r as m,R as e,H as w,d as S}from"./app.95b5dec4.js";import{L as k}from"./Account.3c9adce3.js";import{S as x}from"./sweetalert2.all.543bdec7.js";import"./Dropdown.a4422654.js";function D(){const{errors:t,areadpc:l,city:u}=y().props,[r,E]=m.exports.useState(l.city_id),[n,p]=m.exports.useState(l.alamat),[s,N]=m.exports.useState(l.link),[c,b]=m.exports.useState(l.phone),[o,v]=m.exports.useState(l.email),[i,f]=m.exports.useState(l.instagram),[d,g]=m.exports.useState(l.name_ketua),h=async a=>{a.preventDefault(),S.Inertia.put(`/account/areadpc/${l.id}`,{city_id:r,alamat:n,link:s,phone:c,email:o,instagram:i,name_ketua:d},{onSuccess:()=>{x.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(w,null,e.createElement("title",null,"Edit Wilayah DPC - IKATWI")),e.createElement(k,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," Add New Wilayah DPW")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:h},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Wilayah DPW"),e.createElement("select",{className:"form-select",value:r,onChange:a=>E(a.target.value)},e.createElement("option",{value:""},"-- Select DPC --"),u.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name)))),t.city_id&&e.createElement("div",{className:"alert alert-danger"},t.city_id),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Name Ketua"),e.createElement("input",{type:"text",className:"form-control",value:d,onChange:a=>g(a.target.value),placeholder:"Enter Name Ketua"})),t.name_ketua&&e.createElement("div",{className:"alert alert-danger"},t.name_ketua),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Alamat"),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:a=>p(a.target.value),placeholder:"Enter Alamat"})),t.alamat&&e.createElement("div",{className:"alert alert-danger"},t.alamat),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Link"),e.createElement("input",{type:"text",className:"form-control",value:s,onChange:a=>N(a.target.value),placeholder:"Enter Alamat"})),t.link&&e.createElement("div",{className:"alert alert-danger"},t.link),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"No Telepon"),e.createElement("input",{type:"number",className:"form-control",value:c,onChange:a=>b(a.target.value),placeholder:"Enter No Telepon"})),t.phone&&e.createElement("div",{className:"alert alert-danger"},t.phone),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Email"),e.createElement("input",{type:"email",className:"form-control",value:o,onChange:a=>v(a.target.value),placeholder:"Enter Email"})),t.email&&e.createElement("div",{className:"alert alert-danger"},t.email),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Instagram"),e.createElement("input",{type:"text",className:"form-control",value:i,onChange:a=>f(a.target.value),placeholder:"Enter Instagram"})),t.instagram&&e.createElement("div",{className:"alert alert-danger"},t.instagram))),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{D as default};
