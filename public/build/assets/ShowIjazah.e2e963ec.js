import{u as c,R as e,H as s,L as r}from"./app.61f6e3d0.js";import{L as n}from"./Account.0f1de7bf.js";import{D as m}from"./Delete.ef07ffbd.js";import"./Dropdown.0d39e509.js";import"./sweetalert2.all.d88d8392.js";function u(){const{users:a}=c().props;return e.createElement(e.Fragment,null,e.createElement(s,null,e.createElement("title",null,"Detail Document Ijazah - IKATWI")),e.createElement(n,null,e.createElement("div",{className:"row mt-3"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(r,{href:`/account/documents/createIjazah/${a.id}`,className:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Tambah"))))),e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," SIP File")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"3%"}},"No."),e.createElement("th",{scope:"col",style:{width:"9%"}},"Ijzah Terakhir"),e.createElement("th",{scope:"col",style:{width:"7%"}},"Universitas"),e.createElement("th",{scope:"col",style:{width:"8%"}},"Fakultas"),e.createElement("th",{scope:"col",style:{width:"6%"}},"Jurusan"),e.createElement("th",{scope:"col",style:{width:"3%"}},"Akredetasi"),e.createElement("th",{scope:"col",style:{width:"8%"}},"Tahun lulus"),e.createElement("th",{scope:"col",style:{width:"10%"}},"No ijazah"),e.createElement("th",{scope:"col",style:{width:"8%"}},"Tanggal Ijazah"),e.createElement("th",{scope:"col",style:{width:"5%"}},"IPK"),e.createElement("th",{scope:"col",style:{width:"6%"}},"Transkip"),e.createElement("th",{scope:"col",style:{width:"5%"}},"Ijazah"),e.createElement("th",{scope:"col",style:{width:"5%"}},"Actions"))),e.createElement("tbody",null,a.dokumen_ijazah.data.map((t,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(a.dokumen_ijazah.current_page-1)*a.dokumen_ijazah.per_page),e.createElement("td",{className:"text-center"},t.ijazah_akhir),e.createElement("td",{className:"text-center"},t.name_universitas),e.createElement("td",{className:"text-center"},t.fakultas),e.createElement("td",{className:"text-center"},t.jurusan),e.createElement("td",null,t.akredetasi),e.createElement("td",{className:"text-center"},t.tahun_lulus),e.createElement("td",{className:"text-center"},t.no_ijazah),e.createElement("td",{className:"text-center"},t.date_ijazah),e.createElement("td",{className:"text-center"},t.ipk),e.createElement("td",{className:"text-center"},e.createElement("a",{className:"btn btn-admin",target:"_blank",href:t.transkip},e.createElement("i",{className:"fa fa-pdf"}," ","Lihat")," ")),e.createElement("td",{className:"text-center"},e.createElement("a",{className:"btn btn-admin",target:"_blank",href:t.ijazah},e.createElement("i",{className:"fa fa-pdf"}," ","Lihat")," ")),e.createElement("td",{className:"text-center"},e.createElement(m,{URL:"/account/documents/hapus_ijazah",id:t.id})))))))))))))}export{u as default};
