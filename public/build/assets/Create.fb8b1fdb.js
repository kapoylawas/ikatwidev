import{u as o,r as l,R as e,H as i,d}from"./app.61f6e3d0.js";import{L as u}from"./Account.0f1de7bf.js";import{S as f}from"./sweetalert2.all.d88d8392.js";import"./Dropdown.0d39e509.js";function p(){const{errors:t}=o().props,[r,s]=l.exports.useState(""),[m,n]=l.exports.useState(null),c=async a=>{a.preventDefault(),d.Inertia.post("/account/categories",{name:r,image:m},{onSuccess:()=>{f.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(i,null,e.createElement("title",null,"Create Category - IKATWI")),e.createElement(u,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," Add New Category")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:c},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Image"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>n(a.target.files[0])})),t.image&&e.createElement("div",{className:"alert alert-danger"},t.image),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Category Name"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>s(a.target.value),placeholder:"Enter Category Name"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{p as default};
