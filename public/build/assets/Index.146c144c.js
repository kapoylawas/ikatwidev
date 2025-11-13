import{u as D,r as i,R as e,H as j,L as o}from"./app.a6fe9e4a.js";import{L as A}from"./Account.467473de.js";import{P as S}from"./Pagination.63dec631.js";import{D as I}from"./Delete.33f1d14b.js";import"./Dropdown.1d1c9b7a.js";import"./sweetalert2.all.cfe473ae.js";function _(){const{transactions:N,statusAnggota:p,pengajuans:r}=D().props,h=N.map(a=>a.status),[g]=i.exports.useState(p.status_anggota),s=h.toString().replace("[","").replace("]","").replace('"',"").replace('"',""),[f,c]=i.exports.useState(!1),[d,m]=i.exports.useState(""),l=()=>{const a=new Date().getMonth()+1;return a===4||a===8||a===11},u=()=>{const a=new Date().getMonth()+1,n=new Date().getFullYear();return r.data.filter(P=>{const E=new Date(P.created_at);return E.getMonth()+1===a&&E.getFullYear()===n}).length},v=()=>{if(s!=="PAID"){c(!1),m("Hanya anggota dengan status PAID yang dapat membuat pengajuan");return}if(!l()){c(!1);const n=new Date().toLocaleString("id-ID",{month:"long"});m(`Pengajuan mutasi hanya dapat dibuat pada bulan April, Agustus, dan Desember. Saat ini bulan ${n}`);return}if(u()>=3){c(!1),m("Anda telah mencapai batas maksimal 3 pengajuan dalam bulan ini");return}c(!0),m("")};i.exports.useEffect(()=>{v()},[r,s]);const b=()=>"April, Agustus, dan November",t=(()=>{const a=u(),n=Math.max(0,3-a);return{current:a,max:3,remaining:n}})(),x=a=>{switch(a){case"selesai":return"status-completed";case"dikirim":return"status-sent";case"setujui":return"status-approved";case"ditunda":return"status-pending";case"revisi":return"status-revision";case"tolak":return"status-rejected";default:return"status-pending"}},w=a=>{switch(a){case"selesai":return"fa-check-double";case"dikirim":return"fa-paper-plane";case"setujui":return"fa-check-circle";case"ditunda":return"fa-pause-circle";case"revisi":return"fa-edit";case"tolak":return"fa-times-circle";default:return"fa-clock"}},y=a=>{switch(a){case"selesai":return"Mutasi Selesai";case"dikirim":return"Terkirim ke Tujuan";case"setujui":return"Disetujui Asal";case"ditunda":return"Ditunda Perbaikan";case"revisi":return"Perlu Revisi";case"tolak":return"Ditolak";default:return"Menunggu"}},k=a=>{switch(a){case"selesai":return"Pengajuan mutasi telah selesai dan diterima oleh DPW/DPC tujuan";case"dikirim":return"Pengajuan telah disetujui oleh DPW/DPC asal dan dikirim ke tujuan";case"setujui":return"Pengajuan telah disetujui oleh DPW/DPC asal";case"ditunda":return"Pengajuan ditunda menunggu perbaikan dokumen";case"revisi":return"Pengajuan perlu direvisi sebelum dapat diproses";case"tolak":return"Pengajuan mutasi ditolak";default:return"Pengajuan sedang menunggu proses verifikasi"}};return e.createElement(e.Fragment,null,e.createElement(j,null,e.createElement("title",null,"User Pengajuan Mutasi - IKATWI")),e.createElement(A,null,e.createElement("div",{className:"row align-items-center mb-4 mt-4"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"flex-grow-1"},e.createElement("h1",{className:"h3 mb-0 text-gray-800"},"Pengajuan Mutasi"),e.createElement("p",{className:"mb-0 text-muted"},"Kelola pengajuan pindah Anda")))),e.createElement("div",{className:"col-md-4 text-end"},f?e.createElement(o,{href:"/account/pengajuan/create",className:"btn btn-primary btn-lg shadow-sm"},e.createElement("i",{className:"fas fa-plus-circle me-2"}),"Buat Pengajuan Baru"):e.createElement("button",{className:"btn btn-secondary btn-lg shadow-sm",disabled:!0,title:d},e.createElement("i",{className:"fas fa-ban me-2"}),"Buat Pengajuan Baru"))),e.createElement("div",{className:"row mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-info mb-4"},e.createElement("div",{className:"card-header bg-info text-white d-flex justify-content-between align-items-center"},e.createElement("h6",{className:"mb-0"},e.createElement("i",{className:"fas fa-info-circle me-2"}),"Informasi Pembatasan Pengajuan"),e.createElement("span",{className:`badge ${l()?"bg-success":"bg-warning"}`},l()?"PERIODE BUKA":"PERIODE TUTUP")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"d-flex align-items-center mb-3"},e.createElement("div",{className:"bg-primary rounded-circle p-2 me-3"},e.createElement("i",{className:"fas fa-calendar-alt text-white"})),e.createElement("div",null,e.createElement("h6",{className:"mb-1"},"Periode Pengajuan"),e.createElement("p",{className:"mb-0 text-muted"},"Hanya bulan: ",e.createElement("strong",null,b()))))),e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"d-flex align-items-center mb-3"},e.createElement("div",{className:"bg-warning rounded-circle p-2 me-3"},e.createElement("i",{className:"fas fa-chart-bar text-white"})),e.createElement("div",null,e.createElement("h6",{className:"mb-1"},"Batas Pengajuan"),e.createElement("p",{className:"mb-0 text-muted"},"Maksimal ",e.createElement("strong",null,"3 pengajuan")," per bulan"))))),l()&&s==="PAID"&&e.createElement("div",{className:"mt-3"},e.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2"},e.createElement("small",{className:"text-muted"},"Pengajuan bulan ini: ",t.current," dari ",t.max),e.createElement("small",{className:`fw-bold ${t.remaining===0?"text-danger":"text-success"}`},"Sisa: ",t.remaining)),e.createElement("div",{className:"progress",style:{height:"8px"}},e.createElement("div",{className:`progress-bar ${t.current>=t.max?"bg-danger":"bg-success"}`,role:"progressbar",style:{width:`${t.current/t.max*100}%`},"aria-valuenow":t.current,"aria-valuemin":"0","aria-valuemax":t.max}))))))),s!=="PAID"&&e.createElement("div",{className:"row mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"alert alert-warning d-flex align-items-center",role:"alert"},e.createElement("i",{className:"fas fa-exclamation-triangle me-3 fa-lg"}),e.createElement("div",null,e.createElement("h6",{className:"alert-heading mb-1"},"Status Anggota: ",g),e.createElement("p",{className:"mb-0"},"Saat ini Anda tidak dapat membuat pengajuan mutasi. Hanya anggota dengan status ",e.createElement("strong",null,"PAID")," yang diperbolehkan mengajukan mutasi. Silakan hubungi admin untuk informasi lebih lanjut."))))),s==="PAID"&&!l()&&e.createElement("div",{className:"row mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"alert alert-info d-flex align-items-center",role:"alert"},e.createElement("i",{className:"fas fa-calendar-times me-3 fa-lg"}),e.createElement("div",null,e.createElement("h6",{className:"alert-heading mb-1"},"Periode Pengajuan Ditutup"),e.createElement("p",{className:"mb-0"},d,". Pengajuan mutasi hanya dapat dibuat pada bulan ",b(),"."))))),s==="PAID"&&l()&&t.remaining===0&&e.createElement("div",{className:"row mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"alert alert-warning d-flex align-items-center",role:"alert"},e.createElement("i",{className:"fas fa-exclamation-circle me-3 fa-lg"}),e.createElement("div",null,e.createElement("h6",{className:"alert-heading mb-1"},"Batas Pengajuan Tercapai"),e.createElement("p",{className:"mb-0"},d,". Anda dapat membuat pengajuan lagi pada bulan ",b()," di periode berikutnya."))))),e.createElement("div",{className:"row mb-4"},e.createElement("div",{className:"col-xl-2 col-md-4 mb-4"},e.createElement("div",{className:"card border-left-primary shadow h-100 py-2"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row no-gutters align-items-center"},e.createElement("div",{className:"col mr-2"},e.createElement("div",{className:"text-xs font-weight-bold text-primary text-uppercase mb-1"},"Total Pengajuan"),e.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},r.total)),e.createElement("div",{className:"col-auto"},e.createElement("i",{className:"fas fa-file-alt fa-2x text-gray-300"})))))),e.createElement("div",{className:"col-xl-2 col-md-4 mb-4"},e.createElement("div",{className:"card border-left-success shadow h-100 py-2"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row no-gutters align-items-center"},e.createElement("div",{className:"col mr-2"},e.createElement("div",{className:"text-xs font-weight-bold text-success text-uppercase mb-1"},"Pengajuan Bulan Ini"),e.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},u())),e.createElement("div",{className:"col-auto"},e.createElement("i",{className:"fas fa-calendar-check fa-2x text-gray-300"})))))),e.createElement("div",{className:"col-xl-2 col-md-4 mb-4"},e.createElement("div",{className:"card border-left-info shadow h-100 py-2"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row no-gutters align-items-center"},e.createElement("div",{className:"col mr-2"},e.createElement("div",{className:"text-xs font-weight-bold text-info text-uppercase mb-1"},"Sisa Kuota"),e.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},l()&&s==="PAID"?t.remaining:0)),e.createElement("div",{className:"col-auto"},e.createElement("i",{className:"fas fa-tachometer-alt fa-2x text-gray-300"})))))),e.createElement("div",{className:"col-xl-2 col-md-4 mb-4"},e.createElement("div",{className:"card border-left-warning shadow h-100 py-2"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row no-gutters align-items-center"},e.createElement("div",{className:"col mr-2"},e.createElement("div",{className:"text-xs font-weight-bold text-warning text-uppercase mb-1"},"Status Periode"),e.createElement("div",{className:"h6 mb-0 font-weight-bold text-gray-800"},l()?e.createElement("span",{className:"text-success"},"Buka"):e.createElement("span",{className:"text-danger"},"Tutup"))),e.createElement("div",{className:"col-auto"},e.createElement("i",{className:`fas ${l()?"fa-lock-open":"fa-lock"} fa-2x text-gray-300`})))))),e.createElement("div",{className:"col-xl-2 col-md-4 mb-4"},e.createElement("div",{className:"card border-left-secondary shadow h-100 py-2"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row no-gutters align-items-center"},e.createElement("div",{className:"col mr-2"},e.createElement("div",{className:"text-xs font-weight-bold text-secondary text-uppercase mb-1"},"Status Anggota"),e.createElement("div",{className:"h6 mb-0 font-weight-bold text-gray-800"},s==="PAID"?e.createElement("span",{className:"text-success"},"Aktif"):e.createElement("span",{className:"text-warning"},g))),e.createElement("div",{className:"col-auto"},e.createElement("i",{className:`fas ${s==="PAID"?"fa-user-check":"fa-user-clock"} fa-2x text-gray-300`}))))))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card shadow-sm border-0"},e.createElement("div",{className:"card-header bg-white py-3"},e.createElement("div",{className:"d-flex justify-content-between align-items-center"},e.createElement("h5",{className:"mb-0"},e.createElement("i",{className:"fas fa-list-alt me-2 text-primary"}),"Daftar Pengajuan"),e.createElement("span",{className:"badge bg-primary"},r.total," items"))),e.createElement("div",{className:"card-body p-0"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-hover mb-0"},e.createElement("thead",{className:"bg-light"},e.createElement("tr",null,e.createElement("th",{className:"ps-4",style:{width:"5%"}},"No."),e.createElement("th",{style:{width:"20%"}},"Nama Pengaju"),e.createElement("th",{style:{width:"25%"}},"Keterangan"),e.createElement("th",{style:{width:"25%"}},"Status Mutasi"),e.createElement("th",{className:"text-center",style:{width:"15%"}},"Aksi"))),e.createElement("tbody",null,r.data.length>0?r.data.map((a,n)=>e.createElement("tr",{key:a.id,className:"align-middle"},e.createElement("td",{className:"ps-4 fw-bold text-muted"},++n+(r.current_page-1)*r.per_page),e.createElement("td",null,e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"avatar-sm bg-primary rounded-circle me-3 d-flex align-items-center justify-content-center"},e.createElement("span",{className:"text-white fw-bold"},a.name.charAt(0).toUpperCase())),e.createElement("div",null,e.createElement("h6",{className:"mb-0"},a.name),e.createElement("small",{className:"text-muted"},new Date(a.created_at).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}))))),e.createElement("td",null,e.createElement("span",{className:"text-muted"},a.keterangan||"-")),e.createElement("td",null,e.createElement("div",{className:"d-flex flex-column"},e.createElement("div",{className:"mb-2"},e.createElement("span",{className:`status-badge ${x(a.status)}`},e.createElement("i",{className:`fas ${w(a.status)} me-2`}),y(a.status))),e.createElement("div",{className:"status-description"},e.createElement("small",{className:"text-muted"},k(a.status))),(a.status==="revisi"||a.status==="tolak"||a.status==="ditunda")&&a.keterangan_revisi&&e.createElement("div",{className:"mt-2"},e.createElement("small",{className:"text-muted d-block mb-1"},"Catatan:"),e.createElement("div",{className:"alert alert-sm alert-warning p-2 mb-0"},e.createElement("i",{className:"fas fa-info-circle me-1"}),a.keterangan_revisi)))),e.createElement("td",{className:"text-center"},e.createElement("div",{className:"btn-group",role:"group"},(a.status==="revisi"||a.status==="ditunda")&&e.createElement(o,{href:`/account/pengajuan/${a.id}/edit`,className:"btn btn-outline-primary btn-sm me-1",title:"Edit Pengajuan"},e.createElement("i",{className:"fas fa-edit"})),(a.status==="setujui"||a.status==="dikirim"||a.status==="selesai")&&e.createElement(o,{href:`/account/pengajuan/${a.id}/edit`,className:"btn btn-outline-info btn-sm me-1",title:"Lihat Detail"},e.createElement("i",{className:"fas fa-eye"})),(a.status==="belum"||a.status==="revisi")&&e.createElement(I,{URL:"/account/pengajuan",id:a.id}))))):e.createElement("tr",null,e.createElement("td",{colSpan:"5",className:"text-center py-5"},e.createElement("div",{className:"text-muted"},e.createElement("i",{className:"fas fa-inbox fa-3x mb-3"}),e.createElement("h5",null,"Belum ada pengajuan"),e.createElement("p",null,s==="PAID"&&l()?"Mulai dengan membuat pengajuan mutasi pertama Anda":s!=="PAID"?"Anda perlu memiliki status PAID untuk membuat pengajuan mutasi":"Saat ini bukan periode pengajuan. Tunggu bulan April, Agustus, atau Desember"),f?e.createElement(o,{href:"/account/pengajuan/create",className:"btn btn-primary"},"Buat Pengajuan Baru"):e.createElement("button",{className:"btn btn-secondary",disabled:!0},"Buat Pengajuan Baru"))))))),r.data.length>0&&e.createElement("div",{className:"card-footer bg-white"},e.createElement(S,{links:r.links,align:"center"})))))),e.createElement("style",{jsx:!0},`
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
                    
                    .progress {
                        background-color: #e9ecef;
                        border-radius: 4px;
                        overflow: hidden;
                    }
                    
                    .progress-bar {
                        transition: width 0.6s ease;
                    }
                `)))}export{_ as default};
