import{u as o,r as n,R as e,d as i}from"./app.79bcb0e8.js";import{S as d}from"./sweetalert2.all.ffc985ca.js";function E(){const{errors:t}=o().props,[m,s]=n.exports.useState(""),[l,r]=n.exports.useState(""),c=async a=>{a.preventDefault(),i.Inertia.post("/account/sliders",{image:m,link:l},{onSuccess:()=>{d.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500}),s(null),r("")}})};return e.createElement(e.Fragment,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-images"})," Upload Image Slider")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:c},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Image"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>s(a.target.files[0])})),t.image&&e.createElement("div",{className:"alert alert-danger"},t.image),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Link"),e.createElement("input",{type:"text",className:"form-control",value:l,onChange:a=>r(a.target.value),placeholder:"Enter Link Slider"})),t.link&&e.createElement("div",{className:"alert alert-danger"},t.link),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset"))))))))}export{E as default};
