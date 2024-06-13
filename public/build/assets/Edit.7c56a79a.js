import{u,r as n,R as e,H as E,d as f}from"./app.e67ad230.js";import{L as g}from"./Account.847fd6ce.js";import{S as b}from"./sweetalert2.all.0182e138.js";import"./Dropdown.6357b9e9.js";function k(){const{errors:t,kegiatan:l}=u().props,[s,m]=n.exports.useState(l.name),[r,c]=n.exports.useState(l.link),[o,i]=n.exports.useState(null),d=async a=>{a.preventDefault(),f.Inertia.post(`/account/kegiatan/${l.id}`,{name:s,link:r,image:o,_method:"PUT"},{onSuccess:()=>{b.fire({title:"Success!",text:"Data updated successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(E,null,e.createElement("title",null,"Edit Kegiatan - IKATWI")),e.createElement(g,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," Edit Agenda Kegiatan")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:d},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Agenda Kegiatan Name"),e.createElement("input",{type:"text",className:"form-control",value:s,onChange:a=>m(a.target.value),placeholder:"Enter Agenda Kegiatan Name"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Link"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>c(a.target.value),placeholder:"Enter Link"})),t.link&&e.createElement("div",{className:"alert alert-danger"},t.link),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Image"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>i(a.target.files[0])})),t.image&&e.createElement("div",{className:"alert alert-danger"},t.image),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{k as default};