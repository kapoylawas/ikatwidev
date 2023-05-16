import{u as n,R as e,H as o,L as s}from"./app.61f6e3d0.js";import{L as d,h as c}from"./Account.0f1de7bf.js";import{S as i}from"./Search.ab6e21d7.js";import{P as E}from"./Pagination.308037c1.js";import{D as p}from"./Delete.ef07ffbd.js";import"./Dropdown.0d39e509.js";import"./sweetalert2.all.d88d8392.js";function f(){const{users:a}=n().props;return e.createElement(e.Fragment,null,e.createElement(o,null,e.createElement("title",null,"User - IKATWI")),e.createElement(d,null,e.createElement("div",{className:"row mt-5"},c(["users.delete"])&&e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(s,{href:"/account/users/create",className:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add")),e.createElement("div",{className:"col-md-9 col-12 mb-2"},e.createElement(i,{URL:"/account/users"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-users"})," Users")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"3%"}},"No."),e.createElement("th",{scope:"col",style:{width:"10%"}},"Foto"),e.createElement("th",{scope:"col",style:{width:"10%"}},"No Anggota"),e.createElement("th",{scope:"col",style:{width:"3%"}},"Name"),e.createElement("th",{scope:"col",style:{width:"15%"}},"DPW"),e.createElement("th",{scope:"col",style:{width:"15%"}},"DPC"),e.createElement("th",{scope:"col",style:{width:"10%"}},"Role"),e.createElement("th",{scope:"col",style:{width:"30%"}},"Actions"))),e.createElement("tbody",null,a.data.map((t,r)=>e.createElement("tr",{key:r},e.createElement("td",{className:"text-center"},++r+(a.current_page-1)*a.per_page),e.createElement("td",{className:"text-center"},e.createElement("img",{src:t.image,className:"rounded-3",width:"50",alt:"Deskripsi gambar",onError:l=>{l.target.onerror=null,l.target.src="/assets/images/user.png"}})),e.createElement("td",null,t.no_anggota),e.createElement("td",null,t.name),e.createElement("td",null,t.province.name),e.createElement("td",null,t.city_id===0?e.createElement("p",null,"DPC tidak ada"):t.city.name),e.createElement("td",null,t.roles.map((l,m)=>e.createElement("span",{className:"btn btn-success btn-sm shadow-sm border-0 ms-2 mb-2",key:m},l.name))),e.createElement("td",{className:"text-center"},c(["users.edit"])&&e.createElement(s,{href:`/account/users/${t.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),c(["users.delete"])&&e.createElement(p,{URL:"/account/users",id:t.id}))))))),e.createElement(E,{links:a.links,align:"end"})))))))}export{f as default};
