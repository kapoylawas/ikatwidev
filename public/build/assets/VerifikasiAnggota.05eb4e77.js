import{u as x,r as s,R as e,H as k,L as C,d as D}from"./app.d822ba20.js";import{L as I}from"./Account.c8186b90.js";import{S as _}from"./sweetalert2.all.ebe8f3a7.js";import"./Dropdown.087076d9.js";function U(){const{errors:t,provinces:n,cities:c,user:l}=x().props,m=l.confirm,[r,o]=s.exports.useState(l.name),[i,d]=s.exports.useState(l.nik),[u,E]=s.exports.useState(l.email),[v,N]=s.exports.useState(l.alamat),[g,p]=s.exports.useState(l.province_id),[f,b]=s.exports.useState(l.city_id),[h,A]=s.exports.useState(l.status_anggota),[S,w]=s.exports.useState(l.confirm);s.exports.useEffect(()=>{w(m==="true")},[m]);const y=async a=>{a.preventDefault(),D.Inertia.post(`/account/users/verifNoAnggota/${l.id}`,{name:r,_method:"PUT"},{onSuccess:()=>{_.fire({title:"Success!",text:"Data updated successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(k,null,e.createElement("title",null,"Edit Users - IKATWI")),e.createElement(I,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(C,{href:"/account/users",className:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-arrow-left me-2"}),"KEMBALI"))))),e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-users"})," Verifikasi No Anggota User")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:y},e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"NIK"),e.createElement("div",{className:"input-group mb-3"},e.createElement("input",{type:"number",className:"form-control",value:i,onChange:a=>d(a.target.value),placeholder:"No Induk Kependudukan"})),t.nik&&e.createElement("div",{className:"alert alert-danger mt-2"},t.nik))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Full Name"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>o(a.target.value),placeholder:"Enter Full Name"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name)),e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Email Address"),e.createElement("input",{type:"text",className:"form-control",value:u,onChange:a=>E(a.target.value),placeholder:"Enter Email Address"})),t.email&&e.createElement("div",{className:"alert alert-danger"},t.email))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"DPW"),e.createElement("select",{className:"form-select",value:g,onChange:a=>p(a.target.value)},e.createElement("option",{value:""},"-- Select DPW --"),n.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.province_id&&e.createElement("div",{className:"alert alert-danger mt-2"},t.province_id))),e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"DPC"),e.createElement("select",{className:"form-select",value:f,onChange:a=>b(a.target.value)},e.createElement("option",{value:""},"-- Select DPC --"),c.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.city_id&&e.createElement("div",{className:"alert alert-danger mt-2"},t.city_id))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"Status Anggota"),e.createElement("select",{className:"form-select",value:h,onChange:a=>A(a.target.value)},e.createElement("option",{value:""},"-- Select Status Keanggotaan --"),e.createElement("option",{value:"Anggota Biasa"},"Anggota Biasa"),e.createElement("option",{value:"Anggota Luar Biasa"},"Anggota Luar Biasa"),e.createElement("option",{value:"Anggota Kehormatan"},"Anggota Kehormatan")),t.status_anggota&&e.createElement("div",{className:"alert alert-danger mt-2"},t.status_anggota))),e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-md-12"},e.createElement("label",{className:"mb-1"},"Alamat"),e.createElement("div",{className:"input-group mb-3"},e.createElement("textarea",{type:"text",className:"form-control",value:v,onChange:a=>N(a.target.value),placeholder:"Alamat Lengkap"})),t.alamat&&e.createElement("div",{className:"alert alert-danger"},t.alamat))),e.createElement("div",null,S?e.createElement("button",{type:"submit",disabled:!0,className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," ","Sudah Di Verif"):e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," ","Verifikasi No Anggota")))))))))}export{U as default};