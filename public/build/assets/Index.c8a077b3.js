import{u as c,R as e,H as s,L as m}from"./app.7b805294.js";import{L as o}from"./Account.0183b6a8.js";import{P as d}from"./Pagination.959d55fd.js";function p(){const{users:a,transactions:l}=c().props;console.log(l);const n=l.map(t=>t.status).toString().replace("[","").replace("]","").replace('"',"").replace('"',"");return console.log(n),e.createElement(e.Fragment,null,e.createElement(s,null,e.createElement("title",null,"User - IKATWI")),e.createElement(o,null,e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},n==="PAID"?e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-users"})," Users")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"10%"}},"Name"),e.createElement("th",{scope:"col",style:{width:"10%"}},"Ijazah"),e.createElement("th",{scope:"col",style:{width:"4%"}},"Actions"))),e.createElement("tbody",null,a.data.map((t,r)=>e.createElement("tr",{key:r},e.createElement("td",null,t.name),e.createElement("td",null,e.createElement("a",{target:"_blank",href:t.ijazah,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-link"}," ","Lihat"))),e.createElement("td",{className:"text-center"},e.createElement(m,{href:`/account/documents/${t.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-upload"})))))))),e.createElement(d,{links:a.links,align:"end"}))):e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-12 col-md-12 col-lg-12 mb-4"},e.createElement("div",{className:"alert text-center alert-danger border-0 shadow-sm mb-0"},e.createElement("h5",null,"Anda belum membayar tagihan IURAN."))))))))}export{p as default};