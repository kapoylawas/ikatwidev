import{u as E,r as s,R as e,H as b,L as N,d as p}from"./app.f885a81d.js";import{L as v}from"./Account.8ff4b1ff.js";import{S as g}from"./sweetalert2.all.e84ab885.js";import"./Dropdown.0c92de7d.js";function k(){const{errors:a,users:l}=E().props,[o,r]=s.exports.useState(""),[n,i]=s.exports.useState(""),[m,d]=s.exports.useState(""),[c,u]=s.exports.useState(""),f=async t=>{t.preventDefault(),p.Inertia.post("/account/documents/storestr",{image:o,no_str:n,date_start:m,no_sertifikat:c,user_id:l.id},{onSuccess:()=>{g.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500}),r(null)}})};return e.createElement(e.Fragment,null,e.createElement(b,null,e.createElement("title",null,"Creat STR - IKATWI")),e.createElement(v,null,e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(N,{href:`/account/documents/showstr/${l.id}`,className:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-arrow-left me-2"}),"KEMBALI"))))),e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-shopping-bag"})," ","Upload STR")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:f},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"No STR"),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:t=>i(t.target.value),placeholder:"NO STR"})),a.no_str&&e.createElement("div",{className:"alert alert-danger"},a.no_str),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tanggal Pengesahan STR"),e.createElement("input",{type:"date",className:"form-control",value:m,onChange:t=>d(t.target.value)})),a.date_start&&e.createElement("div",{className:"alert alert-danger"},a.date_start),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nomor sertifikat kompetensi"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:t=>u(t.target.value),placeholder:"Nomor sertifikat kompetensi"})),a.no_sertifikat&&e.createElement("div",{className:"alert alert-danger"},a.no_sertifikat),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"File STR"," ",e.createElement("li",{style:{color:"red"}},"(File Wajib PDF, max 4 mb)")),e.createElement("input",{type:"file",className:"form-control",onChange:t=>r(t.target.files[0])})),a.file&&e.createElement("div",{className:"alert alert-danger"},a.file),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{k as default};
