import{u as x,r as l,R as e,H as y,d as C}from"./app.cea98bbe.js";import{L as P}from"./Account.f6dab92a.js";import{S as k}from"./sweetalert2.all.85660d2f.js";function A(){const{errors:s,provinces:n,cities:v,verifPengajuan:t}=x().props;console.log(t);const[b,D]=l.exports.useState(t.user_id),[m,g]=l.exports.useState(t.name),[r,N]=l.exports.useState(t.kta),[c,p]=l.exports.useState(t.province_id),[o,f]=l.exports.useState(t.city_id),[u,h]=l.exports.useState(t.tgl_mutasi),[i,w]=l.exports.useState(t.keterangan),[d,S]=l.exports.useState(t.tujuan_mutasi),[E,_]=l.exports.useState(t.status),j=async a=>{a.preventDefault(),C.Inertia.post(`/account/verifPengajuan/${t.id}`,{user_id:b,name:m,kta:r,province_id:c,city_id:o,tgl_mutasi:u,keterangan:i,tujuan_mutasi:d,status:E,_method:"PUT"},{onSuccess:()=>{k.fire({title:"Success!",text:"Data Pengajuan Anda Berhasil di Update!",icon:"success",showConfirmButton:!1,timer:2500})}})};return e.createElement(e.Fragment,null,e.createElement(y,null,e.createElement("title",null,"Edit Pengajuan - IKATWI")),e.createElement(P,null,e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:j},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nama"),e.createElement("input",{type:"text",className:"form-control",value:m,onChange:a=>g(a.target.value),disabled:!0})))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"KTA"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>N(a.target.value),disabled:!0})))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"DPW"),e.createElement("select",{className:"form-select",disabled:!0,value:c,onChange:a=>p(a.target.value)},e.createElement("option",{value:""},"-- Select DPW --"),n.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"DPC"),e.createElement("select",{className:"form-select",disabled:!0,value:o,onChange:a=>f(a.target.value)},e.createElement("option",{value:""},"-- Select DPC --"),v.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))))),e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tanggal Mutasi"),e.createElement("input",{type:"date",className:"form-control",value:u,onChange:a=>h(a.target.value),placeholder:"Enter Tanggal Lahir"})),s.tgl_mutasi&&e.createElement("div",{className:"alert alert-danger"},s.tgl_mutasi)),e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-md-12"},e.createElement("label",{className:"form-label fw-bold"},"Keterangan"),e.createElement("div",{className:"input-group mb-3"},e.createElement("textarea",{type:"text",className:"form-control",value:i,onChange:a=>w(a.target.value),placeholder:"Keterangan Contoh : mutasi karena pindah tempat kerja"})),s.keterangan&&e.createElement("div",{className:"alert alert-danger"},s.keterangan))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"Tujuan Mutasi"),e.createElement("select",{className:"form-select",value:d,onChange:a=>S(a.target.value)},e.createElement("option",{value:""},"-- Pilih Tujuan Mutasi --"),n.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),s.tujuan_mutasi&&e.createElement("div",{className:"alert alert-danger mt-2"},s.tujuan_mutasi))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label fw-bold"},"Verifikasi"),e.createElement("select",{className:"form-select",value:E,onChange:a=>_(a.target.value)},e.createElement("option",{value:""},"-- Pilih Verifikasi --"),e.createElement("option",{value:"belum"},"belum"),e.createElement("option",{value:"sudah"},"sudah")),s.tujuan_mutasi&&e.createElement("div",{className:"alert alert-danger mt-2"},s.tujuan_mutasi))),e.createElement("div",{className:"mt-3 mb-5"},e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset"))))))}export{A as default};
