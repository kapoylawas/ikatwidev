import{u as g,r,R as e,H as p,L as s,d as E}from"./app.328fbefb.js";function f(){const{errors:a}=g().props,[l,m]=r.exports.useState(""),[c,o]=r.exports.useState(""),[d,n]=r.exports.useState(!1),i=async t=>{t.preventDefault(),n(!0),E.Inertia.post("/loginAnggotaLama",{no_anggota:l,password:c}).then(u=>{n(!1)}).catch(u=>{n(!1)})};return e.createElement(e.Fragment,null,e.createElement(p,null,e.createElement("title",null,"Login Account - IKATWI")),e.createElement("div",{className:"container"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-4 mt-80"},e.createElement("div",{className:"text-center mb-4"},e.createElement(s,{href:"/"},e.createElement("img",{src:"/assets/images/logo.png",width:"60"})),e.createElement("h4",null,e.createElement("strong",{className:"text-black"},"IKATWI"))),e.createElement("div",{className:"card border-0 rounded-3 shadow-sm border-top-success"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"text-center"},e.createElement("h6",{className:"fw-bold"},"LOGIN ACCOUNT"),e.createElement("hr",null)),e.createElement("div",null,e.createElement("form",{onSubmit:i},e.createElement("label",{className:"mb-1"},"No Anggota"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-envelope"})),e.createElement("input",{type:"text",className:"form-control",value:l,onChange:t=>m(t.target.value),placeholder:"No anggota"})),a.no_anggota&&e.createElement("div",{className:"alert alert-danger"},a.no_anggota),e.createElement("label",{className:"mb-1"},"Password"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-lock"})),e.createElement("input",{type:"password",className:"form-control",value:c,onChange:t=>o(t.target.value),placeholder:"Password"})),a.password&&e.createElement("div",{className:"alert alert-danger"},a.password),e.createElement("button",{className:"btn btn-success shadow-sm rounded-sm px-4 w-100",type:"submit"},d?"LOADING...":"LOGIN"," "),e.createElement(s,{href:"/"},e.createElement("button",{className:"btn btn-success shadow-sm rounded-sm mt-3 px-4 w-100",type:"submit"},e.createElement("i",{className:"fa fa-arrow-left me-2"}),"Home")))))),e.createElement("div",{className:"register text-center mt-3"},"Belum Punya Akun?"," ",e.createElement(s,{href:"/info"},"Register!")),e.createElement("div",{className:"register text-center mt-3"},e.createElement(s,{href:"/reset-password"},"Lupa Password?"))))))}export{f as default};