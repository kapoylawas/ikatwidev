import{u as n,r as c,R as e,H as m,L as o,d as i}from"./app.79bcb0e8.js";import{S as d}from"./sweetalert2.all.ffc985ca.js";function p(){const{errors:a}=n().props,[s,r]=c.exports.useState(""),l=async t=>{t.preventDefault(),i.Inertia.post("/forgot-password",{email:s},{onSuccess:()=>{d.fire({title:"Success!",text:"SILAHKAN CEK EMAIL ANDA!",icon:"success",showConfirmButton:!1,timer:3500})}})};return e.createElement(e.Fragment,null,e.createElement(m,null,e.createElement("title",null,"Forgot Password - IKATWI")),e.createElement("div",{className:"container"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-4 mt-80"},e.createElement("div",{className:"text-center mb-4"},e.createElement("img",{src:"/assets/images/logo.png",width:"60"}),e.createElement("h4",null,e.createElement("strong",null,"IKATWI"))),e.createElement("div",{className:"card border-0 rounded-3 shadow-sm border-top-success"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"text-center"},e.createElement("h6",{className:"fw-bold"},"FORGOT PASSWORD"),e.createElement("hr",null)),e.createElement("form",{onSubmit:l},e.createElement("label",{className:"mb-1"},"Email"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-envelope"})),e.createElement("input",{type:"text",className:"form-control",value:s,onChange:t=>r(t.target.value),placeholder:"Alamat Email Terdaftar"})),a.email&&e.createElement("div",{className:"alert alert-danger"},a.email),e.createElement("button",{className:"btn btn-success shadow-sm rounded-sm px-4 w-100",type:"submit"},"RESET PASSWORD")))),e.createElement("div",{className:"register text-center mt-3"},"Sudah Punya Akun? ",e.createElement(o,{href:"/login"},"Login!"))))))}export{p as default};
