import{u as N,r as l,R as e,H as p,L as v,d as g}from"./app.956a61b1.js";import{L as S}from"./Account.d9a822b1.js";import{S as w}from"./sweetalert2.all.f3eaef1e.js";function R(){const{errors:a,users:s}=N().props,[d,r]=l.exports.useState(""),[n,i]=l.exports.useState(""),[m,u]=l.exports.useState(""),[c,E]=l.exports.useState(""),[o,b]=l.exports.useState(""),f=async t=>{t.preventDefault(),g.Inertia.post("/account/documents/storestr",{image:d,no_str:n,date_str:m,date_start:c,date_end:o,user_id:s.id},{onSuccess:()=>{w.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500}),r(null)}})};return e.createElement(e.Fragment,null,e.createElement(p,null,e.createElement("title",null,"Creat STR - IKATWI")),e.createElement(S,null,e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(v,{href:`/account/documents/showstr/${s.id}`,className:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-arrow-left me-2"}),"KEMBALI"))))),e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-shopping-bag"})," ","Upload STR")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:f},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"No STR"),e.createElement("input",{type:"number",className:"form-control",value:n,onChange:t=>i(t.target.value),placeholder:"NO STR"})),a.no_str&&e.createElement("div",{className:"alert alert-danger"},a.no_str),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Date STR"),e.createElement("input",{type:"date",className:"form-control",value:m,onChange:t=>u(t.target.value)})),a.date_str&&e.createElement("div",{className:"alert alert-danger"},a.date_str),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tanggal Dibuat STR"),e.createElement("input",{type:"date",className:"form-control",value:c,onChange:t=>E(t.target.value)})),a.date_start&&e.createElement("div",{className:"alert alert-danger"},a.date_start),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tanggal Kaduluarsa STR"),e.createElement("input",{type:"date",className:"form-control",value:o,onChange:t=>b(t.target.value)})),a.date_end&&e.createElement("div",{className:"alert alert-danger"},a.date_end),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"File STR"),e.createElement("input",{type:"file",className:"form-control",onChange:t=>r(t.target.files[0])})),a.file&&e.createElement("div",{className:"alert alert-danger"},a.file),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{R as default};
