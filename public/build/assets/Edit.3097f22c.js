import{u as _,r as l,R as e,H as j,d as C}from"./app.4d3edaa4.js";import{L as D}from"./Account.2c851b63.js";import{S as k}from"./sweetalert2.all.9102d521.js";function R(){const{errors:s,transactions:P,statusAnggota:T,biodata:I,provinces:n,cities:E,pengajuan:t}=_().props;console.log(t);const[g,K]=l.exports.useState(t.user_id),[m,b]=l.exports.useState(t.name),[r,v]=l.exports.useState(t.kta),[c,p]=l.exports.useState(t.province_id),[o,N]=l.exports.useState(t.city_id),[u,f]=l.exports.useState(t.tgl_mutasi),[i,h]=l.exports.useState(t.keterangan),[d,w]=l.exports.useState(t.tujuan_mutasi),[S,y]=l.exports.useState(null),x=async a=>{a.preventDefault(),C.Inertia.post(`/account/pengajuan/${t.id}`,{user_id:g,name:m,kta:r,province_id:c,city_id:o,tgl_mutasi:u,keterangan:i,tujuan_mutasi:d,document:S,_method:"PUT"},{onSuccess:()=>{k.fire({title:"Success!",text:"Data Pengajuan Anda Berhasil di Update!",icon:"success",showConfirmButton:!1,timer:2500})}})};return e.createElement(e.Fragment,null,e.createElement(j,null,e.createElement("title",null,"Edit Pengajuan - IKATWI")),e.createElement(D,null,e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:x},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nama"),e.createElement("input",{type:"text",className:"form-control",value:m,onChange:a=>b(a.target.value),disabled:!0})))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"KTA"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>v(a.target.value),disabled:!0})))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"DPW"),e.createElement("select",{className:"form-select",disabled:!0,value:c,onChange:a=>p(a.target.value)},e.createElement("option",{value:""},"-- Select DPW --"),n.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"DPC"),e.createElement("select",{className:"form-select",disabled:!0,value:o,onChange:a=>N(a.target.value)},e.createElement("option",{value:""},"-- Select DPC --"),E.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))))),e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tanggal Mutasi"),e.createElement("input",{type:"date",className:"form-control",value:u,onChange:a=>f(a.target.value),placeholder:"Enter Tanggal Lahir"})),s.tgl_mutasi&&e.createElement("div",{className:"alert alert-danger"},s.tgl_mutasi)),e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Document Mutasi"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>y(a.target.files[0])})),s.document&&e.createElement("div",{className:"alert alert-danger"},s.document)),e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-md-12"},e.createElement("label",{className:"form-label fw-bold"},"Keterangan"),e.createElement("div",{className:"input-group mb-3"},e.createElement("textarea",{type:"text",className:"form-control",value:i,onChange:a=>h(a.target.value),placeholder:"Keterangan Contoh : mutasi karena pindah tempat kerja"})),s.keterangan&&e.createElement("div",{className:"alert alert-danger"},s.keterangan))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"Tujuan Mutasi"),e.createElement("select",{className:"form-select",value:d,onChange:a=>w(a.target.value)},e.createElement("option",{value:""},"-- Pilih Tujuan Mutasi --"),n.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),s.tujuan_mutasi&&e.createElement("div",{className:"alert alert-danger mt-2"},s.tujuan_mutasi))),e.createElement("div",{className:"mt-3 mb-5"},e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset"))))))}export{R as default};