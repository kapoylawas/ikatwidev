import{u,R as e,H as E,L as c}from"./app.0715ed93.js";import{L as p,h as n}from"./Account.1e582ec6.js";import{S as h}from"./Search.9f9f0a3c.js";import{P as N}from"./Pagination.5ef5ff6b.js";import{D as w}from"./Delete.b66614d7.js";import"./Dropdown.32617443.js";import"./sweetalert2.all.a2bcf377.js";function T(){const{users:t,users2:r}=u().props;return e.createElement(e.Fragment,null,e.createElement(E,null,e.createElement("title",null,"Manajemen User - IKATWI"),e.createElement("style",null,`
                    .page-header {
                        border-bottom: 2px solid #e9ecef;
                        padding-bottom: 1rem;
                    }
                    
                    .action-card {
                        border: 1px solid #dee2e6;
                        border-radius: 0.5rem;
                        background: #f8f9fa;
                    }
                    
                    .avatar-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                    }
                    
                    .avatar-img {
                        object-fit: cover;
                        border: 2px solid #dee2e6;
                    }
                    
                    .border-top-admin {
                        border-top: 4px solid #007bff !important;
                    }
                    
                    .table > :not(caption) > * > * {
                        padding: 0.75rem 0.5rem;
                        vertical-align: middle;
                    }
                    
                    .user-table {
                        font-size: 0.9rem;
                    }
                    
                    .user-table th {
                        background-color: #f8f9fa;
                        font-weight: 600;
                        color: #495057;
                        border-bottom: 2px solid #dee2e6;
                    }
                    
                    .status-verified {
                        background-color: #d1e7dd !important;
                        border-left: 4px solid #198754;
                    }
                    
                    .status-pending {
                        background-color: #fff3cd !important;
                        border-left: 4px solid #ffc107;
                    }
                    
                    .table-hover tbody tr:hover {
                        background-color: rgba(0, 123, 255, 0.08) !important;
                        transform: translateY(-1px);
                        transition: all 0.2s ease;
                    }
                    
                    .badge-role {
                        font-size: 0.75em;
                        padding: 0.35em 0.65em;
                    }
                    
                    .badge-dpw {
                        background-color: #17a2b8;
                    }
                    
                    .badge-dpc {
                        background-color: #6c757d;
                    }
                    
                    .btn-action {
                        width: 32px;
                        height: 32px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 0.375rem;
                    }
                    
                    .section-title {
                        color: #2c3e50;
                        font-weight: 600;
                        margin-bottom: 1rem;
                    }
                    
                    .empty-state {
                        padding: 3rem 1rem;
                        text-align: center;
                        color: #6c757d;
                    }
                    
                    .empty-state i {
                        font-size: 4rem;
                        margin-bottom: 1rem;
                        opacity: 0.5;
                    }
                    
                    .card-header-custom {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        font-weight: 600;
                    }
                    
                    .card-header-warning {
                        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                        color: white;
                        font-weight: 600;
                    }
                    
                    .new-user-badge {
                        position: absolute;
                        top: -5px;
                        right: -5px;
                        width: 12px;
                        height: 12px;
                        background-color: #dc3545;
                        border: 2px solid white;
                        border-radius: 50%;
                    }
                    
                    .status-text-pending {
                        font-size: 0.75rem;
                        color: #856404;
                        font-weight: 500;
                    }
                    
                    .status-text-verified {
                        font-size: 0.75rem;
                        color: #155724;
                        font-weight: 500;
                    }
                    
                    @media (max-width: 768px) {
                        .table-responsive {
                            font-size: 0.8rem;
                            border: 1px solid #dee2e6;
                        }
                        
                        .btn-action {
                            width: 28px;
                            height: 28px;
                            font-size: 0.75rem;
                        }
                        
                        .badge-role {
                            font-size: 0.65em;
                            padding: 0.25em 0.5em;
                        }
                        
                        .new-user-badge {
                            width: 10px;
                            height: 10px;
                        }
                    }
                `)),e.createElement(p,null,e.createElement("div",{className:"row mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"page-header"},e.createElement("h1",{className:"h3 text-dark mb-2"},e.createElement("i",{className:"fas fa-users me-2"}),"Manajemen User"),e.createElement("p",{className:"text-muted mb-0"},"Kelola data anggota dan verifikasi user baru sistem IKATWI")))),n(["users.create"])&&e.createElement("div",{className:"row mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card action-card border-0 shadow-sm"},e.createElement("div",{className:"card-body py-3"},e.createElement("div",{className:"row g-3 align-items-center"},e.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6"},e.createElement(c,{href:"/account/users/create",className:"btn btn-primary w-100 d-flex align-items-center justify-content-center py-2"},e.createElement("i",{className:"fas fa-plus-circle me-2"}),"Tambah User Baru")),e.createElement("div",{className:"col-lg-5 col-md-8 col-sm-12"},e.createElement(h,{URL:"/account/users"})),e.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6"},e.createElement("a",{href:"/account/export-users",target:"_blank",className:"btn btn-success w-100 d-flex align-items-center justify-content-center py-2"},e.createElement("i",{className:"fas fa-file-excel me-2"}),"Export ke Excel"))))))),r.data.length>0&&e.createElement("div",{className:"row mb-5"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 shadow-sm mb-4"},e.createElement("div",{className:"card-header card-header-warning border-0 py-3"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("i",{className:"fas fa-user-clock me-2"}),e.createElement("h5",{className:"mb-0 fw-bold"},"Anggota Baru Menunggu Verifikasi"),e.createElement("span",{className:"badge bg-light text-white ms-2 fs-6"},r.data.length," user menunggu"))),e.createElement("div",{className:"card-body p-0"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-hover user-table mb-0"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{width:"5%",className:"ps-3"},"No"),e.createElement("th",{width:"10%"},"Foto"),e.createElement("th",{width:"12%"},"No Anggota"),e.createElement("th",{width:"15%"},"Nama Lengkap"),e.createElement("th",{width:"12%"},"Pakta Integritas"),e.createElement("th",{width:"12%"},"DPW"),e.createElement("th",{width:"12%"},"DPC"),e.createElement("th",{width:"12%"},"Hak Akses"),e.createElement("th",{width:"10%",className:"text-center pe-3"},"Aksi"))),e.createElement("tbody",null,r.data.map((a,l)=>e.createElement(d,{key:a.id,user:a,index:l,users:r,isNew:!0}))))))))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 shadow-sm"},e.createElement("div",{className:"card-header card-header-custom border-0 py-3"},e.createElement("div",{className:"d-flex align-items-center justify-content-between"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("i",{className:"fas fa-users me-2"}),e.createElement("h5",{className:"mb-0 fw-bold"},"Semua User Terdaftar")),e.createElement("span",{className:"badge bg-light text-white fs-6"},"Total: ",t.total," user"))),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-hover user-table"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{width:"5%",className:"ps-3"},"No"),e.createElement("th",{width:"10%"},"Foto"),e.createElement("th",{width:"12%"},"No Anggota"),e.createElement("th",{width:"15%"},"Nama Lengkap"),e.createElement("th",{width:"12%"},"Pakta Integritas"),e.createElement("th",{width:"12%"},"DPW"),e.createElement("th",{width:"12%"},"DPC"),e.createElement("th",{width:"12%"},"Hak Akses"),e.createElement("th",{width:"10%",className:"text-center pe-3"},"Aksi"))),e.createElement("tbody",null,t.data.map((a,l)=>e.createElement(d,{key:a.id,user:a,index:l,users:t,isNew:!1}))))),t.data.length>0&&e.createElement("div",{className:"d-flex justify-content-between align-items-center mt-4 pt-3 border-top"},e.createElement("div",{className:"text-muted"},"Menampilkan ",t.data.length," dari ",t.total," user"),e.createElement(N,{links:t.links,align:"end"})),t.data.length===0&&e.createElement("div",{className:"empty-state"},e.createElement("i",{className:"fas fa-users"}),e.createElement("h5",{className:"text-muted"},"Belum ada data user"),e.createElement("p",{className:"text-muted mb-4"},"Mulai dengan menambahkan user baru ke sistem"),n(["users.create"])&&e.createElement(c,{href:"/account/users/create",className:"btn btn-primary btn-lg"},e.createElement("i",{className:"fas fa-plus-circle me-2"}),"Tambah User Pertama"))))))))}function d({user:t,index:r,users:a,isNew:l}){var m,i;const o=t.confirm==="true"?"status-verified":"status-pending",g=t.confirm==="true"?"Terverifikasi":"Menunggu Verifikasi",b=t.confirm==="true"?"status-text-verified":"status-text-pending";return e.createElement("tr",{className:o},e.createElement("td",{className:"text-center fw-bold ps-3"},++r+(a.current_page-1)*a.per_page),e.createElement("td",{className:"text-center"},e.createElement("div",{className:"avatar-container"},e.createElement("img",{src:t.image,className:"avatar-img rounded-circle",width:"45",height:"45",alt:t.name,onError:s=>{s.target.onerror=null,s.target.src="/assets/images/user.png"}}),l&&t.confirm!=="true"&&e.createElement("div",{className:"new-user-badge",title:"User Baru"}))),e.createElement("td",null,e.createElement("span",{className:"badge bg-dark badge-role font-monospace"},t.no_anggota||"Belum ada")),e.createElement("td",null,e.createElement("div",{className:"fw-semibold text-dark"},t.name),t.email&&e.createElement("small",{className:"text-muted d-block"},t.email),e.createElement("div",{className:b},e.createElement("i",{className:`fas ${t.confirm==="true"?"fa-check-circle":"fa-clock"} me-1`}),g)),e.createElement("td",null,t.filepakta?e.createElement("a",{href:t.filepakta,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-primary btn-sm d-inline-flex align-items-center"},e.createElement("i",{className:"fas fa-file-pdf me-1"}),"Lihat"):e.createElement("span",{className:"badge bg-light text-muted badge-role"},"Tidak ada")),e.createElement("td",null,e.createElement("span",{className:"badge badge-dpw badge-role text-white"},((m=t.province)==null?void 0:m.name)||"Belum diatur")),e.createElement("td",null,t.city_id===0?e.createElement("span",{className:"badge bg-light text-muted badge-role"},"Tidak ada DPC"):e.createElement("span",{className:"badge badge-dpc badge-role text-white"},((i=t.city)==null?void 0:i.name)||"Belum diatur")),e.createElement("td",null,e.createElement("div",{className:"d-flex flex-wrap gap-1"},t.roles.map((s,f)=>e.createElement("span",{className:"badge bg-success badge-role",key:f},s.name)),t.roles.length===0&&e.createElement("span",{className:"badge bg-secondary badge-role"},"No Role"))),e.createElement("td",{className:"text-center pe-3"},e.createElement("div",{className:"d-flex gap-2 justify-content-center"},n(["users.edit"])&&e.createElement(c,{href:`/account/users/${t.id}/edit`,className:"btn btn-outline-primary btn-action",title:"Edit User"},e.createElement("i",{className:"fas fa-edit"})),n(["users.edit"])&&t.confirm!=="true"&&e.createElement(c,{href:`/account/users/verifikasiAnggota/${t.id}`,className:"btn btn-success btn-action",title:"Verifikasi User"},e.createElement("i",{className:"fas fa-check"})),n(["users.delete"])&&e.createElement(w,{URL:"/account/users",id:t.id,className:"btn-action btn-outline-danger",title:"Hapus User"}))))}export{T as default};
