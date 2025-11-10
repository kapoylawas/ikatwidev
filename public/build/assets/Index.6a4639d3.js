import{u as o,r as u,R as e,H as b,L as r}from"./app.e543b1d4.js";import{L as E}from"./Account.7e7d5505.js";import{P as g}from"./Pagination.b6b9581b.js";import{D as f}from"./Delete.17403596.js";import"./Dropdown.2a013175.js";import"./sweetalert2.all.10ba1f3f.js";function y(){const{transactions:l,statusAnggota:s,pengajuans:a}=o().props,c=l.map(t=>t.status);u.exports.useState(s.status_anggota),c.toString().replace("[","").replace("]","").replace('"',"").replace('"',"");const n=t=>{switch(t){case"setujui":return"status-approved";case"belum":return"status-pending";case"revisi":return"status-revision";case"tolak":return"status-rejected";default:return"status-pending"}},m=t=>{switch(t){case"setujui":return"fa-check-circle";case"belum":return"fa-clock";case"revisi":return"fa-edit";case"tolak":return"fa-times-circle";default:return"fa-clock"}},i=t=>{switch(t){case"setujui":return"Disetujui";case"belum":return"Menunggu";case"revisi":return"Revisi";case"tolak":return"Ditolak";default:return"Menunggu"}};return e.createElement(e.Fragment,null,e.createElement(b,null,e.createElement("title",null,"User Pengajuan Mutasi - IKATWI")),e.createElement(E,null,e.createElement("div",{className:"row align-items-center mb-4"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"flex-grow-1"},e.createElement("h1",{className:"h3 mb-0 text-gray-800"},"Pengajuan Mutasi"),e.createElement("p",{className:"mb-0 text-muted"},"Kelola pengajuan pindah Anda")))),e.createElement("div",{className:"col-md-4 text-end"},e.createElement(r,{href:"/account/pengajuan/create",className:"btn btn-primary btn-lg shadow-sm"},e.createElement("i",{className:"fas fa-plus-circle me-2"}),"Buat Pengajuan Baru"))),e.createElement("div",{className:"row mb-4"},e.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},e.createElement("div",{className:"card border-left-primary shadow h-100 py-2"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row no-gutters align-items-center"},e.createElement("div",{className:"col mr-2"},e.createElement("div",{className:"text-xs font-weight-bold text-primary text-uppercase mb-1"},"Total Pengajuan"),e.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},a.total)),e.createElement("div",{className:"col-auto"},e.createElement("i",{className:"fas fa-file-alt fa-2x text-gray-300"})))))),e.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},e.createElement("div",{className:"card border-left-success shadow h-100 py-2"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row no-gutters align-items-center"},e.createElement("div",{className:"col mr-2"},e.createElement("div",{className:"text-xs font-weight-bold text-success text-uppercase mb-1"},"Disetujui"),e.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},a.data.filter(t=>t.status==="setujui").length)),e.createElement("div",{className:"col-auto"},e.createElement("i",{className:"fas fa-check-circle fa-2x text-gray-300"})))))),e.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},e.createElement("div",{className:"card border-left-warning shadow h-100 py-2"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row no-gutters align-items-center"},e.createElement("div",{className:"col mr-2"},e.createElement("div",{className:"text-xs font-weight-bold text-warning text-uppercase mb-1"},"Menunggu"),e.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},a.data.filter(t=>t.status==="belum").length)),e.createElement("div",{className:"col-auto"},e.createElement("i",{className:"fas fa-clock fa-2x text-gray-300"})))))),e.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},e.createElement("div",{className:"card border-left-danger shadow h-100 py-2"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row no-gutters align-items-center"},e.createElement("div",{className:"col mr-2"},e.createElement("div",{className:"text-xs font-weight-bold text-danger text-uppercase mb-1"},"Perlu Revisi"),e.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},a.data.filter(t=>t.status==="revisi").length)),e.createElement("div",{className:"col-auto"},e.createElement("i",{className:"fas fa-edit fa-2x text-gray-300"}))))))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card shadow-sm border-0"},e.createElement("div",{className:"card-header bg-white py-3"},e.createElement("div",{className:"d-flex justify-content-between align-items-center"},e.createElement("h5",{className:"mb-0"},e.createElement("i",{className:"fas fa-list-alt me-2 text-primary"}),"Daftar Pengajuan"),e.createElement("span",{className:"badge bg-primary"},a.total," items"))),e.createElement("div",{className:"card-body p-0"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-hover mb-0"},e.createElement("thead",{className:"bg-light"},e.createElement("tr",null,e.createElement("th",{className:"ps-4",style:{width:"5%"}},"No."),e.createElement("th",{style:{width:"20%"}},"Nama Pengaju"),e.createElement("th",{style:{width:"25%"}},"Keterangan"),e.createElement("th",{style:{width:"20%"}},"Status"),e.createElement("th",{className:"text-center",style:{width:"15%"}},"Aksi"))),e.createElement("tbody",null,a.data.length>0?a.data.map((t,d)=>e.createElement("tr",{key:t.id,className:"align-middle"},e.createElement("td",{className:"ps-4 fw-bold text-muted"},++d+(a.current_page-1)*a.per_page),e.createElement("td",null,e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"avatar-sm bg-primary rounded-circle me-3 d-flex align-items-center justify-content-center"},e.createElement("span",{className:"text-white fw-bold"},t.name.charAt(0).toUpperCase())),e.createElement("div",null,e.createElement("h6",{className:"mb-0"},t.name)))),e.createElement("td",null,e.createElement("span",{className:"text-muted"},t.keterangan||"-")),e.createElement("td",null,e.createElement("div",{className:"d-flex align-items-center"},e.createElement("span",{className:`status-badge ${n(t.status)}`},e.createElement("i",{className:`fas ${m(t.status)} me-2`}),i(t.status)),(t.status==="revisi"||t.status==="tolak")&&t.keterangan_revisi&&e.createElement("div",{className:"mt-1 w-100"},e.createElement("small",{className:"text-muted d-block"},"Catatan:"),e.createElement("div",{className:"alert alert-sm alert-warning p-2 mb-0"},t.keterangan_revisi)))),e.createElement("td",{className:"text-center"},e.createElement("div",{className:"btn-group",role:"group"},e.createElement(r,{href:`/account/pengajuan/${t.id}/edit`,className:"btn btn-outline-primary btn-sm me-1",title:"Edit Pengajuan"},e.createElement("i",{className:"fas fa-edit"})),e.createElement(f,{URL:"/account/pengajuan",id:t.id}))))):e.createElement("tr",null,e.createElement("td",{colSpan:"5",className:"text-center py-5"},e.createElement("div",{className:"text-muted"},e.createElement("i",{className:"fas fa-inbox fa-3x mb-3"}),e.createElement("h5",null,"Belum ada pengajuan"),e.createElement("p",null,"Mulai dengan membuat pengajuan mutasi pertama Anda"),e.createElement(r,{href:"/account/pengajuan/create",className:"btn btn-primary"},"Buat Pengajuan Baru"))))))),a.data.length>0&&e.createElement("div",{className:"card-footer bg-white"},e.createElement(g,{links:a.links,align:"center"})))))),e.createElement("style",{jsx:!0},`
                    .status-badge {
                        padding: 0.5rem 1rem;
                        border-radius: 50px;
                        font-size: 0.875rem;
                        font-weight: 600;
                        display: inline-flex;
                        align-items: center;
                    }
                    
                    .status-approved {
                        background-color: #d1fae5;
                        color: #065f46;
                        border: 1px solid #a7f3d0;
                    }
                    
                    .status-pending {
                        background-color: #fef3c7;
                        color: #92400e;
                        border: 1px solid #fcd34d;
                    }
                    
                    .status-revision {
                        background-color: #dbeafe;
                        color: #1e40af;
                        border: 1px solid #93c5fd;
                    }
                    
                    .status-rejected {
                        background-color: #fee2e2;
                        color: #991b1b;
                        border: 1px solid #fca5a5;
                    }
                    
                    .avatar-sm {
                        width: 40px;
                        height: 40px;
                        font-size: 1rem;
                    }
                    
                    .card {
                        border: none;
                        border-radius: 12px;
                    }
                    
                    .card-header {
                        border-bottom: 1px solid #e3e6f0;
                        border-radius: 12px 12px 0 0 !important;
                    }
                    
                    .table > :not(caption) > * > * {
                        padding: 1rem 0.75rem;
                        border-bottom-color: #e3e6f0;
                    }
                    
                    .btn-outline-primary {
                        border-color: #4e73df;
                        color: #4e73df;
                    }
                    
                    .btn-outline-primary:hover {
                        background-color: #4e73df;
                        color: white;
                    }
                    
                    .border-left-primary {
                        border-left: 4px solid #4e73df;
                    }
                    
                    .border-left-success {
                        border-left: 4px solid #1cc88a;
                    }
                    
                    .border-left-warning {
                        border-left: 4px solid #f6c23e;
                    }
                    
                    .border-left-danger {
                        border-left: 4px solid #e74a3b;
                    }
                `)))}export{y as default};
