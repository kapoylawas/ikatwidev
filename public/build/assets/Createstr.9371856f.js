import{u as N,r as l,R as e,H as p,L as v,d as g}from"./app.d4dfcddc.js";import{L as S}from"./Account.8320a6c4.js";import{S as w}from"./sweetalert2.all.25faea06.js";import"./Dropdown.2f8d172a.js";function x(){const{errors:a,users:s}=N().props,[d,r]=l.exports.useState(""),[n,i]=l.exports.useState(""),[m,u]=l.exports.useState(""),[c,f]=l.exports.useState(""),[o,E]=l.exports.useState(""),b=async t=>{t.preventDefault(),g.Inertia.post("/account/documents/storestr",{image:d,no_str:n,date_start:m,date_end:c,no_sertifikat:o,user_id:s.id},{onSuccess:()=>{w.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500}),r(null)}})};return e.createElement(e.Fragment,null,e.createElement(p,null,e.createElement("title",null,"Creat STR - IKATWI")),e.createElement(S,null,e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(v,{href:`/account/documents/showstr/${s.id}`,className:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-arrow-left me-2"}),"KEMBALI"))))),e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-shopping-bag"})," ","Upload STR")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:b},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"No STR"),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:t=>i(t.target.value),placeholder:"NO STR"})),a.no_str&&e.createElement("div",{className:"alert alert-danger"},a.no_str),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tanggal Pengesahan STR"),e.createElement("input",{type:"date",className:"form-control",value:m,onChange:t=>u(t.target.value)})),a.date_start&&e.createElement("div",{className:"alert alert-danger"},a.date_start),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tanggal Berlaku STR"),e.createElement("input",{type:"date",className:"form-control",value:c,onChange:t=>f(t.target.value)})),a.date_end&&e.createElement("div",{className:"alert alert-danger"},a.date_end),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nomor sertifikat kompetensi"),e.createElement("input",{type:"text",className:"form-control",value:o,onChange:t=>E(t.target.value),placeholder:"Nomor sertifikat kompetensi"})),a.no_sertifikat&&e.createElement("div",{className:"alert alert-danger"},a.no_sertifikat),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"File STR ",e.createElement("li",{style:{color:"red"}},"(File Wajib PDF, max 4 mb)")),e.createElement("input",{type:"file",className:"form-control",onChange:t=>r(t.target.files[0])})),a.file&&e.createElement("div",{className:"alert alert-danger"},a.file),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{x as default};