<<<<<<<< HEAD:public/build/assets/Create.a7104ab4.js
import{u as I,r as t,R as e,H as A,d as K}from"./app.c8c6bc0a.js";import{L as M}from"./Account.cfa79397.js";import{S as R}from"./sweetalert2.all.1a5845b1.js";import"./Dropdown.def6e8bd.js";function q(){const{errors:l,transactions:p,statusAnggota:b,biodata:s,provinces:n,cities:m}=I().props,v=p.map(a=>a.status),[N]=t.exports.useState(b.status_anggota),f=v.toString().replace("[","").replace("]","").replace('"',"").replace('"',""),[h,L]=t.exports.useState(s.id),[c,y]=t.exports.useState(s.name),[r,S]=t.exports.useState(s.no_anggota),[o,w]=t.exports.useState(s.province_id),[u,k]=t.exports.useState(s.city_id),[i,x]=t.exports.useState(""),[j,C]=t.exports.useState(""),[d,_]=t.exports.useState(""),[E,D]=t.exports.useState(""),[g,P]=t.exports.useState(""),T=async a=>{a.preventDefault(),K.Inertia.post("/account/pengajuan",{user_id:h,name:c,kta:r,province_id:o,city_id:u,tgl_mutasi:i,document:j,keterangan:d,tujuan_mutasi:E,dpc_mutasi:g},{onSuccess:()=>{R.fire({title:"Success!",text:"Data Pengajuan Anda Sudah Terkirim!",icon:"success",showConfirmButton:!1,timer:2500})}})};return e.createElement(e.Fragment,null,e.createElement(A,null,e.createElement("title",null,"User Pengajuan Mutasi - IKATWI")),e.createElement(M,null,e.createElement("div",{className:"col-md-12 mt-2"},f==="PAID"||N==="Anggota Kehormatan"?e.createElement(e.Fragment,null,e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:T},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nama"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>y(a.target.value),disabled:!0})))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"KTA"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>S(a.target.value),disabled:!0})))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"DPW"),e.createElement("select",{className:"form-select",disabled:!0,value:o,onChange:a=>w(a.target.value)},e.createElement("option",{value:""},"-- Select DPW --"),n.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"DPC"),e.createElement("select",{className:"form-select",disabled:!0,value:u,onChange:a=>k(a.target.value)},e.createElement("option",{value:""},"-- Select DPC --"),m.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))))),e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tanggal Mutasi"),e.createElement("input",{type:"date",className:"form-control",value:i,onChange:a=>x(a.target.value),placeholder:"Enter Tanggal Lahir"})),l.tgl_mutasi&&e.createElement("div",{className:"alert alert-danger"},l.tgl_mutasi)),e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Document Mutasi"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>C(a.target.files[0])})),l.document&&e.createElement("div",{className:"alert alert-danger"},l.document)),e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-md-12"},e.createElement("label",{className:"form-label fw-bold"},"Keterangan"),e.createElement("div",{className:"input-group mb-3"},e.createElement("textarea",{type:"text",className:"form-control",value:d,onChange:a=>_(a.target.value),placeholder:"Keterangan Contoh : mutasi karena pindah tempat kerja"})),l.keterangan&&e.createElement("div",{className:"alert alert-danger"},l.keterangan))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"Tujuan Mutasi"),e.createElement("select",{className:"form-select",value:E,onChange:a=>D(a.target.value)},e.createElement("option",{value:""},"-- Pilih Tujuan Mutasi --"),n.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),l.tujuan_mutasi&&e.createElement("div",{className:"alert alert-danger mt-2"},l.tujuan_mutasi))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"Tujuan DPC"),e.createElement("select",{className:"form-select",value:g,onChange:a=>P(a.target.value)},e.createElement("option",{value:""},"-- Pilih Tujuan DPC --"),m.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),l.dpc_mutasi&&e.createElement("div",{className:"alert alert-danger mt-2"},l.dpc_mutasi))),e.createElement("div",{className:"form-check form-check-inline mt-3"},e.createElement("input",{className:"form-check-input",type:"checkbox",required:!0}),e.createElement("label",{className:"form-check-label"},"Saya yakin akan mengajukan mutasi sesuai dengan data diatas, dan data mutasi yang saya inputkan, telah sesuai")),e.createElement("div",{className:"mt-3 mb-5"},e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset"))))):e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-12 col-md-12 col-lg-12 mb-4"},e.createElement("div",{className:"alert text-center alert-danger border-0 shadow-sm mb-0"},e.createElement("h5",null,"Anda belum membayar tagihan IURAN.")))))))}export{q as default};
========
import{u as I,r as t,R as e,H as A,d as K}from"./app.f885a81d.js";import{L as M}from"./Account.8ff4b1ff.js";import{S as R}from"./sweetalert2.all.e84ab885.js";import"./Dropdown.0c92de7d.js";function q(){const{errors:l,transactions:p,statusAnggota:b,biodata:s,provinces:n,cities:m}=I().props,v=p.map(a=>a.status),[N]=t.exports.useState(b.status_anggota),f=v.toString().replace("[","").replace("]","").replace('"',"").replace('"',""),[h,L]=t.exports.useState(s.id),[c,y]=t.exports.useState(s.name),[r,S]=t.exports.useState(s.no_anggota),[o,w]=t.exports.useState(s.province_id),[u,k]=t.exports.useState(s.city_id),[i,x]=t.exports.useState(""),[j,C]=t.exports.useState(""),[d,_]=t.exports.useState(""),[E,D]=t.exports.useState(""),[g,P]=t.exports.useState(""),T=async a=>{a.preventDefault(),K.Inertia.post("/account/pengajuan",{user_id:h,name:c,kta:r,province_id:o,city_id:u,tgl_mutasi:i,document:j,keterangan:d,tujuan_mutasi:E,dpc_mutasi:g},{onSuccess:()=>{R.fire({title:"Success!",text:"Data Pengajuan Anda Sudah Terkirim!",icon:"success",showConfirmButton:!1,timer:2500})}})};return e.createElement(e.Fragment,null,e.createElement(A,null,e.createElement("title",null,"User Pengajuan Mutasi - IKATWI")),e.createElement(M,null,e.createElement("div",{className:"col-md-12 mt-2"},f==="PAID"||N==="Anggota Kehormatan"?e.createElement(e.Fragment,null,e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:T},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nama"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>y(a.target.value),disabled:!0})))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"KTA"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>S(a.target.value),disabled:!0})))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"DPW"),e.createElement("select",{className:"form-select",disabled:!0,value:o,onChange:a=>w(a.target.value)},e.createElement("option",{value:""},"-- Select DPW --"),n.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"DPC"),e.createElement("select",{className:"form-select",disabled:!0,value:u,onChange:a=>k(a.target.value)},e.createElement("option",{value:""},"-- Select DPC --"),m.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))))),e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tanggal Mutasi"),e.createElement("input",{type:"date",className:"form-control",value:i,onChange:a=>x(a.target.value),placeholder:"Enter Tanggal Lahir"})),l.tgl_mutasi&&e.createElement("div",{className:"alert alert-danger"},l.tgl_mutasi)),e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Document Mutasi"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>C(a.target.files[0])})),l.document&&e.createElement("div",{className:"alert alert-danger"},l.document)),e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-md-12"},e.createElement("label",{className:"form-label fw-bold"},"Keterangan"),e.createElement("div",{className:"input-group mb-3"},e.createElement("textarea",{type:"text",className:"form-control",value:d,onChange:a=>_(a.target.value),placeholder:"Keterangan Contoh : mutasi karena pindah tempat kerja"})),l.keterangan&&e.createElement("div",{className:"alert alert-danger"},l.keterangan))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"Tujuan Mutasi"),e.createElement("select",{className:"form-select",value:E,onChange:a=>D(a.target.value)},e.createElement("option",{value:""},"-- Pilih Tujuan Mutasi --"),n.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),l.tujuan_mutasi&&e.createElement("div",{className:"alert alert-danger mt-2"},l.tujuan_mutasi))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"Tujuan DPC"),e.createElement("select",{className:"form-select",value:g,onChange:a=>P(a.target.value)},e.createElement("option",{value:""},"-- Pilih Tujuan DPC --"),m.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),l.dpc_mutasi&&e.createElement("div",{className:"alert alert-danger mt-2"},l.dpc_mutasi))),e.createElement("div",{className:"form-check form-check-inline mt-3"},e.createElement("input",{className:"form-check-input",type:"checkbox",required:!0}),e.createElement("label",{className:"form-check-label"},"Saya yakin akan mengajukan mutasi sesuai dengan data diatas, dan data mutasi yang saya inputkan, telah sesuai")),e.createElement("div",{className:"mt-3 mb-5"},e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset"))))):e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-12 col-md-12 col-lg-12 mb-4"},e.createElement("div",{className:"alert text-center alert-danger border-0 shadow-sm mb-0"},e.createElement("h5",null,"Anda belum membayar tagihan IURAN.")))))))}export{q as default};
>>>>>>>> refs/remotes/origin/main:public/build/assets/Create.69cf11b9.js
