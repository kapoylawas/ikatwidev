import{u as d,R as e,H as i,L as s}from"./app.99b9481c.js";import{L as E,h as l}from"./Account.4885455f.js";import{S as p}from"./Search.cc29f85d.js";import{P as h}from"./Pagination.d7c9d609.js";import{D as m}from"./Delete.2f04de55.js";import"./Dropdown.17cc50ab.js";import"./sweetalert2.all.860cd172.js";function v(){const{users:c,users2:o}=d().props;return e.createElement(e.Fragment,null,e.createElement(i,null,e.createElement("title",null,"User - IKATWI")),e.createElement(E,null,e.createElement("div",{className:"row mt-5"},l(["users.delete"])&&e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(s,{href:"/account/users/create",className:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add")),e.createElement("div",{className:"col-md-6 col-12 mb-2"},e.createElement(p,{URL:"/account/users"})),e.createElement("div",{class:"col-md-3 col-12 mb-2"},e.createElement("a",{href:"/account/export-users",target:"_blank",class:"btn btn-admin btn-md border-0 shadow w-100 text-white"},e.createElement("i",{class:"fa fa-file-excel"})," ","DOWNLOAD EXCEL"))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-users"})," Anggota Baru Daftar")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"3%"}},"No."),e.createElement("th",{scope:"col",style:{width:"10%"}},"Foto"),e.createElement("th",{scope:"col",style:{width:"10%"}},"No Anggota"),e.createElement("th",{scope:"col",style:{width:"3%"}},"Name"),e.createElement("th",{scope:"col",style:{width:"3%"}},"File Pakta Integritas"),e.createElement("th",{scope:"col",style:{width:"15%"}},"DPW"),e.createElement("th",{scope:"col",style:{width:"15%"}},"DPC"),e.createElement("th",{scope:"col",style:{width:"10%"}},"Role"),e.createElement("th",{scope:"col",style:{width:"30%"}},"Actions"))),e.createElement("tbody",null,o.data.map((t,r)=>e.createElement("tr",{className:`verif-${t.confirm=="true"}`,key:r},e.createElement("td",{className:"text-center"},++r+(c.current_page-1)*c.per_page),e.createElement("td",{className:"text-center"},e.createElement("img",{src:t.image,className:"rounded-3",width:"50",alt:"Deskripsi gambar",onError:a=>{a.target.onerror=null,a.target.src="/assets/images/user.png"}})),e.createElement("td",null,t.no_anggota),e.createElement("td",null,t.name),e.createElement("td",null,e.createElement("a",{href:t.filepakta,target:"_blank"},"Lihat File")),e.createElement("td",null,t.province.name),e.createElement("td",null,t.city_id===0?e.createElement("p",null,"DPC tidak ada"):t.city.name),e.createElement("td",null,t.roles.map((a,n)=>e.createElement("span",{className:"btn btn-success btn-sm shadow-sm border-0 ms-2 mb-2",key:n},a.name))),e.createElement("td",{className:"text-center"},l(["users.edit"])&&e.createElement(s,{href:`/account/users/${t.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),l(["users.edit"])&&e.createElement(s,{href:`/account/users/verifikasiAnggota/${t.id}`,className:"btn btn-primary btn-sm me-2"},"Verif"),l(["users.delete"])&&e.createElement(m,{URL:"/account/users",id:t.id}))))))))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-users"})," Users")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"3%"}},"No."),e.createElement("th",{scope:"col",style:{width:"10%"}},"Foto"),e.createElement("th",{scope:"col",style:{width:"10%"}},"No Anggota"),e.createElement("th",{scope:"col",style:{width:"3%"}},"Name"),e.createElement("th",{scope:"col",style:{width:"3%"}},"File Pakta Integritas"),e.createElement("th",{scope:"col",style:{width:"15%"}},"DPW"),e.createElement("th",{scope:"col",style:{width:"15%"}},"DPC"),e.createElement("th",{scope:"col",style:{width:"10%"}},"Role"),e.createElement("th",{scope:"col",style:{width:"30%"}},"Actions"))),e.createElement("tbody",null,c.data.map((t,r)=>e.createElement("tr",{className:`verif-${t.confirm=="true"}`,key:r},e.createElement("td",{className:"text-center"},++r+(c.current_page-1)*c.per_page),e.createElement("td",{className:"text-center"},e.createElement("img",{src:t.image,className:"rounded-3",width:"50",alt:"Deskripsi gambar",onError:a=>{a.target.onerror=null,a.target.src="/assets/images/user.png"}})),e.createElement("td",null,t.no_anggota),e.createElement("td",null,t.name),e.createElement("td",null,e.createElement("a",{href:t.filepakta,target:"_blank"},"Lihat File")),e.createElement("td",null,t.province.name),e.createElement("td",null,t.city_id===0?e.createElement("p",null,"DPC tidak ada"):t.city.name),e.createElement("td",null,t.roles.map((a,n)=>e.createElement("span",{className:"btn btn-success btn-sm shadow-sm border-0 ms-2 mb-2",key:n},a.name))),e.createElement("td",{className:"text-center"},l(["users.edit"])&&e.createElement(s,{href:`/account/users/${t.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),l(["users.edit"])&&e.createElement(s,{href:`/account/users/verifikasiAnggota/${t.id}`,className:"btn btn-primary btn-sm me-2"},"Verif"),l(["users.delete"])&&e.createElement(m,{URL:"/account/users",id:t.id}))))))),e.createElement(h,{links:c.links,align:"end"})))))))}export{v as default};
