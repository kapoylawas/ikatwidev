import{u as o,r as l,R as e,H as i,L as d,d as u}from"./app.328fbefb.js";function g(){const{errors:t}=o().props;console.log(t);const[s,r]=l.exports.useState(""),[n,c]=l.exports.useState(""),m=async a=>{a.preventDefault(),u.Inertia.post("/resetPassword",{no_anggota:n,nik:s},{onSuccess:()=>{Swal.fire({title:"Success!",text:"Register saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(i,null,e.createElement("title",null,"Forgot Password - IKATWI")),e.createElement("div",{className:"container"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-4 mt-80"},e.createElement("div",{className:"text-center mb-4"},e.createElement("img",{src:"/assets/images/logo.png",width:"60"}),e.createElement("h4",null,e.createElement("strong",{className:"text-black"},"IKATWI"))),e.createElement("div",{className:"alert alert-success"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"text-center"},e.createElement("div",null,e.createElement("ol",null,e.createElement("li",null,"Masukkan data nik dan no anggota/KTA dengan benar"),e.createElement("li",null,"PASSWORD akan di reset menjadi nik anda")))))),e.createElement("div",{className:"card border-0 rounded-3 shadow-sm border-top-success"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"text-center"},e.createElement("h6",{className:"fw-bold"},"RESET PASSWORD ANGGOTA")),t.meta&&e.createElement("div",{className:"alert alert-danger mt-2"},t.meta),e.createElement("form",{onSubmit:m},e.createElement("div",{className:"row"},e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"NIK"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-user"})),e.createElement("input",{type:"text",className:"form-control",value:s,onChange:a=>r(a.target.value),placeholder:"No Induk Kependudukan",maxLength:16})),t.nik&&e.createElement("div",{className:"alert alert-danger mt-2"},t.nik)),e.createElement("div",{className:"mb-1"},e.createElement("label",{className:"form-label"},"No Anggota"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-user"})),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:a=>c(a.target.value),placeholder:"No Aggota / No KTA",maxLength:7})),t.no_anggota&&e.createElement("div",{className:"alert alert-danger mt-2"},t.no_anggota)),e.createElement("button",{className:"btn btn-success shadow-sm rounded-sm px-4 w-100",type:"submit"},"RESET PASSWORD")))))),e.createElement("div",{className:"register text-center mt-3"},e.createElement(d,{href:"/login"},"Login")))))}export{g as default};
