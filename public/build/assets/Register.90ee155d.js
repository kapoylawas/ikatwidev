<<<<<<<< HEAD:public/build/assets/Register.90ee155d.js
import{u as L,r as l,R as e,H as _,L as K,d as T}from"./app.c8c6bc0a.js";import{S as B}from"./sweetalert2.all.1a5845b1.js";import{a as F}from"./index.c3e999de.js";function U(){const{errors:t,provinces:u}=L().props,[c,E]=l.exports.useState(""),[n,N]=l.exports.useState(""),[m,g]=l.exports.useState(""),[o,v]=l.exports.useState(""),[i,f]=l.exports.useState(""),[d,b]=l.exports.useState(""),[p,h]=l.exports.useState(""),[x,w]=l.exports.useState(""),[k,y]=l.exports.useState(""),[C,S]=l.exports.useState([]),[s,I]=l.exports.useState(!1),P=()=>{I(!s)},A=async a=>{h(a),F.get(`/register/cities?province_id=${a}`).then(r=>{S(r.data)})},D=a=>{w(a)},R=async a=>{a.preventDefault(),T.Inertia.post("/register",{name:c,nik:n,province_id:p,city_id:x,email:m,alamat:o,filepakta:k,password:i,password_confirmation:d},{onSuccess:()=>{B.fire({title:"Success!",text:"Register saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(_,null,e.createElement("title",null,"Register Akun - IKATWI")),e.createElement("div",{className:"container"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-6 mt-80"},e.createElement("div",{className:"text-center mb-2"},e.createElement("img",{src:"/assets/images/logo.png",width:"60"}),e.createElement("h4",null,e.createElement("strong",{className:"text-black"},"IKATWI"))),e.createElement("div",{className:"card border-0 rounded-3 shadow-sm border-top-success"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"text-center"},e.createElement("h6",{className:"fw-bold"},"REGISTER AKUN ANGGOTA"),e.createElement("hr",null)),e.createElement("form",{onSubmit:R},e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"NIK"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-user"})),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:a=>N(a.target.value),placeholder:"No Induk Kependudukan",maxLength:16})),t.nik&&e.createElement("div",{className:"alert alert-danger mt-2"},t.nik))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Nama Lengkap"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-user"})),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>E(a.target.value),placeholder:"Nama Lengkap"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name)),e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Alamat Email"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-envelope"})),e.createElement("input",{type:"email",className:"form-control",value:m,onChange:a=>g(a.target.value),placeholder:"Alamat Email"})),t.email&&e.createElement("div",{className:"alert alert-danger"},t.email))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"DPW"),e.createElement("select",{className:"form-select",value:p,onChange:a=>A(a.target.value)},e.createElement("option",{value:""},"-- Select DPW --"),u.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.province_id&&e.createElement("div",{className:"alert alert-danger mt-2"},t.province_id))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"DPC"),e.createElement("select",{className:"form-select",onChange:a=>D(a.target.value)},e.createElement("option",{value:""},"-- Select City --"),C.map((a,r)=>e.createElement("option",{key:r,value:a.id},a.name))),t.city_id&&e.createElement("div",{className:"alert alert-danger mt-2"},t.city_id))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("label",{className:"mb-1"},"Alamat"),e.createElement("div",{className:"input-group mb-2"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-folder"})),e.createElement("textarea",{type:"text",className:"form-control",value:o,onChange:a=>v(a.target.value),placeholder:"Alamat Lengkap Anda"})),t.alamat&&e.createElement("div",{className:"alert alert-danger"},t.alamat))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"Upload Pakta Integritas Format PDF Dan Ukuran 2mb"),e.createElement("input",{type:"file",className:"form-control",accept:".pdf",onChange:a=>y(a.target.files[0])})),t.filepakta&&e.createElement("div",{className:"alert alert-danger"},t.filepakta))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Password"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-lock"})),e.createElement("input",{type:"password",className:"form-control",value:i,onChange:a=>f(a.target.value),placeholder:"Password"})),t.password&&e.createElement("div",{className:"alert alert-danger"},t.password)),e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Password Confirmation"),e.createElement("div",{className:"input-group mb-2"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-lock"})),e.createElement("input",{type:"password",className:"form-control",value:d,onChange:a=>b(a.target.value),placeholder:"Password Confirmation"})))),e.createElement("div",{className:"text-center mb-2"},e.createElement("label",null,e.createElement("input",{type:"checkbox",checked:s,onChange:P}),"  "," Bahwa Saya Mengisi Dengan Benar")),e.createElement("button",{className:"btn btn-success shadow-sm rounded-sm px-4 w-100",type:"submit",disabled:!s},"REGISTER")))),e.createElement("div",{className:"register text-center mt-3"},"Sudah Punya Akun? ",e.createElement(K,{href:"/login"},"Login!"))))))}export{U as default};
========
import{u as L,r as l,R as e,H as _,L as K,d as T}from"./app.f885a81d.js";import{S as B}from"./sweetalert2.all.e84ab885.js";import{a as F}from"./index.2132653b.js";function U(){const{errors:t,provinces:u}=L().props,[c,E]=l.exports.useState(""),[n,N]=l.exports.useState(""),[m,g]=l.exports.useState(""),[o,v]=l.exports.useState(""),[i,f]=l.exports.useState(""),[d,b]=l.exports.useState(""),[p,h]=l.exports.useState(""),[x,w]=l.exports.useState(""),[k,y]=l.exports.useState(""),[C,S]=l.exports.useState([]),[s,I]=l.exports.useState(!1),P=()=>{I(!s)},A=async a=>{h(a),F.get(`/register/cities?province_id=${a}`).then(r=>{S(r.data)})},D=a=>{w(a)},R=async a=>{a.preventDefault(),T.Inertia.post("/register",{name:c,nik:n,province_id:p,city_id:x,email:m,alamat:o,filepakta:k,password:i,password_confirmation:d},{onSuccess:()=>{B.fire({title:"Success!",text:"Register saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(_,null,e.createElement("title",null,"Register Akun - IKATWI")),e.createElement("div",{className:"container"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-6 mt-80"},e.createElement("div",{className:"text-center mb-2"},e.createElement("img",{src:"/assets/images/logo.png",width:"60"}),e.createElement("h4",null,e.createElement("strong",{className:"text-black"},"IKATWI"))),e.createElement("div",{className:"card border-0 rounded-3 shadow-sm border-top-success"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"text-center"},e.createElement("h6",{className:"fw-bold"},"REGISTER AKUN ANGGOTA"),e.createElement("hr",null)),e.createElement("form",{onSubmit:R},e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"NIK"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-user"})),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:a=>N(a.target.value),placeholder:"No Induk Kependudukan",maxLength:16})),t.nik&&e.createElement("div",{className:"alert alert-danger mt-2"},t.nik))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Nama Lengkap"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-user"})),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>E(a.target.value),placeholder:"Nama Lengkap"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name)),e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Alamat Email"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-envelope"})),e.createElement("input",{type:"email",className:"form-control",value:m,onChange:a=>g(a.target.value),placeholder:"Alamat Email"})),t.email&&e.createElement("div",{className:"alert alert-danger"},t.email))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"DPW"),e.createElement("select",{className:"form-select",value:p,onChange:a=>A(a.target.value)},e.createElement("option",{value:""},"-- Select DPW --"),u.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.province_id&&e.createElement("div",{className:"alert alert-danger mt-2"},t.province_id))),e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"DPC"),e.createElement("select",{className:"form-select",onChange:a=>D(a.target.value)},e.createElement("option",{value:""},"-- Select City --"),C.map((a,r)=>e.createElement("option",{key:r,value:a.id},a.name))),t.city_id&&e.createElement("div",{className:"alert alert-danger mt-2"},t.city_id))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("label",{className:"mb-1"},"Alamat"),e.createElement("div",{className:"input-group mb-2"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-folder"})),e.createElement("textarea",{type:"text",className:"form-control",value:o,onChange:a=>v(a.target.value),placeholder:"Alamat Lengkap Anda"})),t.alamat&&e.createElement("div",{className:"alert alert-danger"},t.alamat))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"Upload Pakta Integritas Format PDF Dan Ukuran 2mb"),e.createElement("input",{type:"file",className:"form-control",accept:".pdf",onChange:a=>y(a.target.files[0])})),t.filepakta&&e.createElement("div",{className:"alert alert-danger"},t.filepakta))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Password"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-lock"})),e.createElement("input",{type:"password",className:"form-control",value:i,onChange:a=>f(a.target.value),placeholder:"Password"})),t.password&&e.createElement("div",{className:"alert alert-danger"},t.password)),e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Password Confirmation"),e.createElement("div",{className:"input-group mb-2"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-lock"})),e.createElement("input",{type:"password",className:"form-control",value:d,onChange:a=>b(a.target.value),placeholder:"Password Confirmation"})))),e.createElement("div",{className:"text-center mb-2"},e.createElement("label",null,e.createElement("input",{type:"checkbox",checked:s,onChange:P}),"  "," Bahwa Saya Mengisi Dengan Benar")),e.createElement("button",{className:"btn btn-success shadow-sm rounded-sm px-4 w-100",type:"submit",disabled:!s},"REGISTER")))),e.createElement("div",{className:"register text-center mt-3"},"Sudah Punya Akun? ",e.createElement(K,{href:"/login"},"Login!"))))))}export{U as default};
>>>>>>>> refs/remotes/origin/main:public/build/assets/Register.5195eb40.js
