import{u as x,r as s,R as e,H as D,d as P}from"./app.95b5dec4.js";import{L as k}from"./Account.3c9adce3.js";import{S as T}from"./sweetalert2.all.543bdec7.js";import"./Dropdown.a4422654.js";function R(){const{errors:t,provinces:m,cities:n,pengajuan:l}=x().props,[v,I]=s.exports.useState(l.user_id),[c,b]=s.exports.useState(l.name),[r,N]=s.exports.useState(l.kta),[o,g]=s.exports.useState(l.province_id),[u,f]=s.exports.useState(l.city_id),[i,h]=s.exports.useState(l.tgl_mutasi),[d,w]=s.exports.useState(l.keterangan),[E,_]=s.exports.useState(l.tujuan_mutasi),[p,j]=s.exports.useState(l.dpc_mutasi),[S,y]=s.exports.useState(null),C=async a=>{a.preventDefault(),P.Inertia.post(`/account/pengajuan/${l.id}`,{user_id:v,name:c,kta:r,province_id:o,city_id:u,tgl_mutasi:i,keterangan:d,tujuan_mutasi:E,dpc_mutasi:p,document:S,_method:"PUT"},{onSuccess:()=>{T.fire({title:"Success!",text:"Data Pengajuan Anda Berhasil di Update!",icon:"success",showConfirmButton:!1,timer:2500})}})};return e.createElement(e.Fragment,null,e.createElement(D,null,e.createElement("title",null,"Edit Pengajuan - IKATWI")),e.createElement(k,null,e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:C},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nama"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>b(a.target.value),disabled:!0})))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"KTA"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>N(a.target.value),disabled:!0})))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"DPW"),e.createElement("select",{className:"form-select",disabled:!0,value:o,onChange:a=>g(a.target.value)},e.createElement("option",{value:""},"-- Select DPW --"),m.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"DPC"),e.createElement("select",{className:"form-select",disabled:!0,value:u,onChange:a=>f(a.target.value)},e.createElement("option",{value:""},"-- Select DPC --"),n.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))))),e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tanggal Mutasi"),e.createElement("input",{type:"date",className:"form-control",value:i,onChange:a=>h(a.target.value),placeholder:"Enter Tanggal Lahir"})),t.tgl_mutasi&&e.createElement("div",{className:"alert alert-danger"},t.tgl_mutasi)),e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Document Mutasi"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>y(a.target.files[0])})),t.document&&e.createElement("div",{className:"alert alert-danger"},t.document)),e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-md-12"},e.createElement("label",{className:"form-label fw-bold"},"Keterangan"),e.createElement("div",{className:"input-group mb-3"},e.createElement("textarea",{type:"text",className:"form-control",value:d,onChange:a=>w(a.target.value),placeholder:"Keterangan Contoh : mutasi karena pindah tempat kerja"})),t.keterangan&&e.createElement("div",{className:"alert alert-danger"},t.keterangan))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"Tujuan Mutasi"),e.createElement("select",{className:"form-select",value:E,onChange:a=>_(a.target.value)},e.createElement("option",{value:""},"-- Pilih Tujuan Mutasi --"),m.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.tujuan_mutasi&&e.createElement("div",{className:"alert alert-danger mt-2"},t.tujuan_mutasi))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"Tujuan DPC"),e.createElement("select",{className:"form-select",value:p,onChange:a=>j(a.target.value)},e.createElement("option",{value:""},"-- Pilih Tujuan DPC --"),n.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.dpc_mutasi&&e.createElement("div",{className:"alert alert-danger mt-2"},t.dpc_mutasi))),e.createElement("div",{className:"mt-3 mb-5"},e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset"))))))}export{R as default};
