import{u as d,r,R as e,H as i,d as u}from"./app.d822ba20.js";import{L as E}from"./Account.c8186b90.js";import"./Dropdown.087076d9.js";function f(){const{errors:t,provinces:c}=d().props,[l,n]=r.exports.useState(""),[s,m]=r.exports.useState(""),o=async a=>{a.preventDefault(),u.Inertia.post("/account/dpc",{province_id:s,name:l},{onSuccess:()=>{Swal.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(i,null,e.createElement("title",null,"Master Create DPC - IKATWI")),e.createElement(E,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," Add New DPW")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:o},e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"DPW"),e.createElement("select",{className:"form-select",value:s,onChange:a=>m(a.target.value)},e.createElement("option",{value:""},"-- Select DPW --"),c.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name))),t.province_id&&e.createElement("div",{className:"alert alert-danger mt-2"},t.province_id))),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"DPC Name"),e.createElement("input",{type:"text",className:"form-control",value:l,onChange:a=>n(a.target.value),placeholder:"Enter DPW Name"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{f as default};