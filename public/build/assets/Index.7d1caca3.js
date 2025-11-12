import{u as f,r as g,R as e,H as p,L as s}from"./app.c65f2c20.js";import{L as E}from"./Account.d0c104c0.js";import{P as N}from"./Pagination.055067fd.js";import{D as h}from"./Delete.6c5f5913.js";import"./Dropdown.9b46f973.js";import"./sweetalert2.all.133321d1.js";function j(){const{transactions:l,statusAnggota:n,pengajuans:a}=f().props,c=l.map(t=>t.status),[i]=g.exports.useState(n.status_anggota),r=c.toString().replace("[","").replace("]","").replace('"',"").replace('"',""),m=t=>{switch(t){case"selesai":return"status-completed";case"dikirim":return"status-sent";case"setujui":return"status-approved";case"ditunda":return"status-pending";case"revisi":return"status-revision";case"tolak":return"status-rejected";default:return"status-pending"}},d=t=>{switch(t){case"selesai":return"fa-check-double";case"dikirim":return"fa-paper-plane";case"setujui":return"fa-check-circle";case"ditunda":return"fa-pause-circle";case"revisi":return"fa-edit";case"tolak":return"fa-times-circle";default:return"fa-clock"}},o=t=>{switch(t){case"selesai":return"Mutasi Selesai";case"dikirim":return"Terkirim ke Tujuan";case"setujui":return"Disetujui Asal";case"ditunda":return"Ditunda Perbaikan";case"revisi":return"Perlu Revisi";case"tolak":return"Ditolak";default:return"Menunggu"}},u=t=>{switch(t){case"selesai":return"Pengajuan mutasi telah selesai dan diterima oleh DPW/DPC tujuan";case"dikirim":return"Pengajuan telah disetujui oleh DPW/DPC asal dan dikirim ke tujuan";case"setujui":return"Pengajuan telah disetujui oleh DPW/DPC asal";case"ditunda":return"Pengajuan ditunda menunggu perbaikan dokumen";case"revisi":return"Pengajuan perlu direvisi sebelum dapat diproses";case"tolak":return"Pengajuan mutasi ditolak";default:return"Pengajuan sedang menunggu proses verifikasi"}};return e.createElement(e.Fragment,null,e.createElement(p,null,e.createElement("title",null,"User Pengajuan Mutasi - IKATWI")),e.createElement(E,null,e.createElement("div",{className:"row align-items-center mb-4"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"flex-grow-1"},e.createElement("h1",{className:"h3 mb-0 text-gray-800"},"Pengajuan Mutasi"),e.createElement("p",{className:"mb-0 text-muted"},"Kelola pengajuan pindah Anda")))),e.createElement("div",{className:"col-md-4 text-end"},r==="PAID"?e.createElement(s,{href:"/account/pengajuan/create",className:"btn btn-primary btn-lg shadow-sm"},e.createElement("i",{className:"fas fa-plus-circle me-2"}),"Buat Pengajuan Baru"):e.createElement("button",{className:"btn btn-secondary btn-lg shadow-sm",disabled:!0,title:"Hanya anggota dengan status PAID yang dapat membuat pengajuan"},e.createElement("i",{className:"fas fa-ban me-2"}),"Buat Pengajuan Baru"))),r!=="PAID"&&e.createElement("div",{className:"row mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"alert alert-warning d-flex align-items-center",role:"alert"},e.createElement("i",{className:"fas fa-exclamation-triangle me-3 fa-lg"}),e.createElement("div",null,e.createElement("h6",{className:"alert-heading mb-1"},"Status Anggota: ",i),e.createElement("p",{className:"mb-0"},"Saat ini Anda tidak dapat membuat pengajuan mutasi. Hanya anggota dengan status ",e.createElement("strong",null,"PAID")," yang diperbolehkan mengajukan mutasi. Silakan hubungi admin untuk informasi lebih lanjut."))))),e.createElement("div",{className:"row mb-4"},e.createElement("div",{className:"col-xl-2 col-md-4 mb-4"},e.createElement("div",{className:"card border-left-primary shadow h-100 py-2"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row no-gutters align-items-center"},e.createElement("div",{className:"col mr-2"},e.createElement("div",{className:"text-xs font-weight-bold text-primary text-uppercase mb-1"},"Total Pengajuan"),e.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},a.total)),e.createElement("div",{className:"col-auto"},e.createElement("i",{className:"fas fa-file-alt fa-2x text-gray-300"}))))))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card shadow-sm border-0"},e.createElement("div",{className:"card-header bg-white py-3"},e.createElement("div",{className:"d-flex justify-content-between align-items-center"},e.createElement("h5",{className:"mb-0"},e.createElement("i",{className:"fas fa-list-alt me-2 text-primary"}),"Daftar Pengajuan"),e.createElement("span",{className:"badge bg-primary"},a.total," items"))),e.createElement("div",{className:"card-body p-0"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-hover mb-0"},e.createElement("thead",{className:"bg-light"},e.createElement("tr",null,e.createElement("th",{className:"ps-4",style:{width:"5%"}},"No."),e.createElement("th",{style:{width:"20%"}},"Nama Pengaju"),e.createElement("th",{style:{width:"25%"}},"Keterangan"),e.createElement("th",{style:{width:"25%"}},"Status Mutasi"),e.createElement("th",{className:"text-center",style:{width:"15%"}},"Aksi"))),e.createElement("tbody",null,a.data.length>0?a.data.map((t,b)=>e.createElement("tr",{key:t.id,className:"align-middle"},e.createElement("td",{className:"ps-4 fw-bold text-muted"},++b+(a.current_page-1)*a.per_page),e.createElement("td",null,e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"avatar-sm bg-primary rounded-circle me-3 d-flex align-items-center justify-content-center"},e.createElement("span",{className:"text-white fw-bold"},t.name.charAt(0).toUpperCase())),e.createElement("div",null,e.createElement("h6",{className:"mb-0"},t.name),e.createElement("small",{className:"text-muted"},new Date(t.created_at).toLocaleDateString("id-ID"))))),e.createElement("td",null,e.createElement("span",{className:"text-muted"},t.keterangan||"-")),e.createElement("td",null,e.createElement("div",{className:"d-flex flex-column"},e.createElement("div",{className:"mb-2"},e.createElement("span",{className:`status-badge ${m(t.status)}`},e.createElement("i",{className:`fas ${d(t.status)} me-2`}),o(t.status))),e.createElement("div",{className:"status-description"},e.createElement("small",{className:"text-muted"},u(t.status))),(t.status==="revisi"||t.status==="tolak"||t.status==="ditunda")&&t.keterangan_revisi&&e.createElement("div",{className:"mt-2"},e.createElement("small",{className:"text-muted d-block mb-1"},"Catatan:"),e.createElement("div",{className:"alert alert-sm alert-warning p-2 mb-0"},e.createElement("i",{className:"fas fa-info-circle me-1"}),t.keterangan_revisi)))),e.createElement("td",{className:"text-center"},e.createElement("div",{className:"btn-group",role:"group"},(t.status==="revisi"||t.status==="ditunda")&&e.createElement(s,{href:`/account/pengajuan/${t.id}/edit`,className:"btn btn-outline-primary btn-sm me-1",title:"Edit Pengajuan"},e.createElement("i",{className:"fas fa-edit"})),(t.status==="setujui"||t.status==="dikirim"||t.status==="selesai")&&e.createElement(s,{href:`/account/pengajuan/${t.id}/edit`,className:"btn btn-outline-info btn-sm me-1",title:"Lihat Detail"},e.createElement("i",{className:"fas fa-eye"})),(t.status==="belum"||t.status==="revisi")&&e.createElement(h,{URL:"/account/pengajuan",id:t.id}))))):e.createElement("tr",null,e.createElement("td",{colSpan:"5",className:"text-center py-5"},e.createElement("div",{className:"text-muted"},e.createElement("i",{className:"fas fa-inbox fa-3x mb-3"}),e.createElement("h5",null,"Belum ada pengajuan"),e.createElement("p",null,r==="PAID"?"Mulai dengan membuat pengajuan mutasi pertama Anda":"Anda perlu memiliki status PAID untuk membuat pengajuan mutasi"),r==="PAID"?e.createElement(s,{href:"/account/pengajuan/create",className:"btn btn-primary"},"Buat Pengajuan Baru"):e.createElement("button",{className:"btn btn-secondary",disabled:!0},"Buat Pengajuan Baru"))))))),a.data.length>0&&e.createElement("div",{className:"card-footer bg-white"},e.createElement(N,{links:a.links,align:"center"})))))),e.createElement("style",{jsx:!0},`
                    .status-badge {
                        padding: 0.5rem 1rem;
                        border-radius: 50px;
                        font-size: 0.875rem;
                        font-weight: 600;
                        display: inline-flex;
                        align-items: center;
                        white-space: nowrap;
                    }
                    
                    .status-completed {
                        background-color: #d1fae5;
                        color: #065f46;
                        border: 1px solid #a7f3d0;
                    }
                    
                    .status-sent {
                        background-color: #e0f2fe;
                        color: #075985;
                        border: 1px solid #7dd3fc;
                    }
                    
                    .status-approved {
                        background-color: #dcfce7;
                        color: #166534;
                        border: 1px solid #86efac;
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
                    
                    .status-description {
                        font-size: 0.8rem;
                        line-height: 1.3;
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
                    
                    .btn-outline-info {
                        border-color: #36b9cc;
                        color: #36b9cc;
                    }
                    
                    .btn-outline-info:hover {
                        background-color: #36b9cc;
                        color: white;
                    }
                    
                    .border-left-primary {
                        border-left: 4px solid #4e73df;
                    }
                    
                    .border-left-success {
                        border-left: 4px solid #1cc88a;
                    }
                    
                    .border-left-info {
                        border-left: 4px solid #36b9cc;
                    }
                    
                    .border-left-warning {
                        border-left: 4px solid #f6c23e;
                    }
                    
                    .border-left-secondary {
                        border-left: 4px solid #858796;
                    }
                    
                    .border-left-danger {
                        border-left: 4px solid #e74a3b;
                    }
                    
                    .alert-warning {
                        background-color: #fff3cd;
                        border-color: #ffeaa7;
                        color: #856404;
                    }
                `)))}export{j as default};
