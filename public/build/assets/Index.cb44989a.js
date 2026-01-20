import{u as N,r as f,b as y,R as e,H as k,L as S,d as v}from"./app.7c5fb403.js";import{L as C}from"./Account.df9f8251.js";import{S as Y}from"./Search.c370429e.js";import{P as V}from"./Pagination.3708abd6.js";import{S as d}from"./sweetalert2.all.cd9ed47e.js";import"./Dropdown.44fe49c9.js";function $(){const{videos:l,errors:n}=N().props,[x,i]=f.exports.useState(!1),[a,b]=f.exports.useState(!1),[s,u]=f.exports.useState(null),{data:r,setData:c,processing:B,reset:m}=y({name:"",status:"draft",tahun:new Date().getFullYear(),linkvideo:""}),h=t=>{t.preventDefault(),b(!0),v.Inertia.post("/account/videos",{name:r.name,status:r.status,tahun:r.tahun,linkvideo:r.linkvideo},{onStart:()=>{b(!0)},onSuccess:()=>{d.fire({title:"Success!",text:"Video saved successfully!",icon:"success",showConfirmButton:!1,timer:1500}),m(),i(!1)},onError:o=>{o&&d.fire({title:"Error!",text:"Please check the form for errors",icon:"error",showConfirmButton:!1,timer:2e3})},onFinish:()=>{b(!1)}})},E=t=>{d.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel",reverseButtons:!0,backdrop:!0,allowOutsideClick:()=>!d.isLoading(),customClass:{popup:"swal2-popup-custom",confirmButton:"swal2-confirm-custom",cancelButton:"swal2-cancel-custom"}}).then(o=>{o.isConfirmed&&(u(t),v.Inertia.delete(`/account/videos/${t}`,{onStart:()=>{u(t)},onSuccess:()=>{d.fire({title:"Deleted!",text:"Video has been deleted successfully.",icon:"success",showConfirmButton:!1,timer:1500})},onError:()=>{d.fire({title:"Error!",text:"Failed to delete video.",icon:"error",confirmButtonText:"OK"})},onFinish:()=>{u(null)}}))})},p=t=>{if(!t)return"";try{if(t.includes("youtu.be"))return`https://www.youtube.com/embed/${t.split("/").pop().split("?")[0]}`;if(t.includes("youtube.com/watch")){const g=new URL(t).searchParams.get("v");if(g)return`https://www.youtube.com/embed/${g}`}return t.includes("youtube.com/embed")?t:""}catch(o){return console.error("Error parsing YouTube URL:",o),""}},w=t=>/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(t);return e.createElement(e.Fragment,null,e.createElement(k,null,e.createElement("title",null,"Master Videos - IKATWI"),e.createElement("style",null,`
                        /* Global Styles */
                        .videos-page {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        }
                        
                        /* Card Styling */
                        .card-videos {
                            border: none;
                            border-radius: 12px;
                            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                            transition: transform 0.3s ease, box-shadow 0.3s ease;
                        }
                        
                        .card-videos:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                        }
                        
                        .card-header-videos {
                            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                            border-radius: 12px 12px 0 0 !important;
                            border: none;
                            padding: 1.25rem 1.5rem;
                        }
                        
                        .card-header-videos span {
                            color: white;
                            font-size: 1.1rem;
                            font-weight: 600;
                        }
                        
                        /* Table Styling */
                        .table-videos {
                            margin-bottom: 0;
                            border-collapse: separate;
                            border-spacing: 0;
                        }
                        
                        .table-videos thead th {
                            background-color: #f8f9fa;
                            border-bottom: 2px solid #dee2e6;
                            font-weight: 600;
                            color: #495057;
                            padding: 1rem;
                            vertical-align: middle;
                        }
                        
                        .table-videos tbody td {
                            padding: 1rem;
                            vertical-align: middle;
                            border-top: 1px solid #e9ecef;
                        }
                        
                        .table-videos tbody tr {
                            transition: background-color 0.2s ease;
                        }
                        
                        .table-videos tbody tr:hover {
                            background-color: #f8fff9;
                        }
                        
                        /* Button Styling */
                        .btn-back {
                            background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
                            border: none;
                            border-radius: 8px;
                            padding: 0.625rem 1.25rem;
                            font-weight: 500;
                            transition: all 0.3s ease;
                        }
                        
                        .btn-back:hover {
                            transform: translateY(-1px);
                            box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);
                        }
                        
                        .btn-add-video {
                            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                            border: none;
                            border-radius: 8px;
                            padding: 0.625rem 1.25rem;
                            font-weight: 500;
                            transition: all 0.3s ease;
                            position: relative;
                            overflow: hidden;
                        }
                        
                        .btn-add-video:hover:not(:disabled) {
                            transform: translateY(-1px);
                            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.4);
                        }
                        
                        .btn-add-video:disabled {
                            opacity: 0.7;
                            cursor: not-allowed;
                            transform: none !important;
                            box-shadow: none !important;
                        }
                        
                        .btn-add-video-loading {
                            position: relative;
                            padding-left: 2.5rem !important;
                        }
                        
                        .btn-add-video-loading::before {
                            content: '';
                            position: absolute;
                            left: 1rem;
                            top: 50%;
                            width: 18px;
                            height: 18px;
                            margin-top: -9px;
                            border: 2px solid rgba(255, 255, 255, 0.3);
                            border-top-color: white;
                            border-radius: 50%;
                            animation: button-spinner 0.8s linear infinite;
                        }
                        
                        @keyframes button-spinner {
                            to {
                                transform: rotate(360deg);
                            }
                        }
                        
                        /* Badge Styling */
                        .badge-video {
                            padding: 0.5em 0.8em;
                            border-radius: 6px;
                            font-weight: 500;
                            font-size: 0.85em;
                        }
                        
                        .badge-published {
                            background: linear-gradient(135deg, #28a745 0%, #218838 100%);
                        }
                        
                        .badge-draft {
                            background: linear-gradient(135deg, #ffc107 0%, #e0a800 100%);
                            color: #212529;
                        }
                        
                        .badge-archived {
                            background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
                        }
                        
                        /* Video Preview in Table */
                        .video-preview-table {
                            max-width: 200px;
                            border-radius: 8px;
                            overflow: hidden;
                            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                        }
                        
                        .video-preview-table iframe {
                            display: block;
                            border: none;
                        }
                        
                        /* Action Buttons */
                        .btn-action {
                            width: 36px;
                            height: 36px;
                            border-radius: 8px;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            transition: all 0.3s ease;
                        }
                        
                        .btn-action:hover {
                            transform: translateY(-2px);
                        }
                        
                        /* Delete Button Styling */
                        .btn-delete {
                            background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
                            border: none;
                            color: white;
                        }
                        
                        .btn-delete:hover:not(:disabled) {
                            background: linear-gradient(135deg, #c82333 0%, #bd2130 100%);
                            transform: translateY(-2px);
                            box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
                        }
                        
                        .btn-delete:disabled {
                            opacity: 0.7;
                            cursor: not-allowed;
                        }
                        
                        .btn-delete-loading {
                            position: relative;
                        }
                        
                        .btn-delete-loading i {
                            animation: fa-spin 1s linear infinite;
                        }
                        
                        @keyframes fa-spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                        
                        /* View Button Styling */
                        .btn-view {
                            background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);
                            border: none;
                            color: white;
                        }
                        
                        .btn-view:hover {
                            background: linear-gradient(135deg, #138496 0%, #117a8b 100%);
                            transform: translateY(-2px);
                            box-shadow: 0 4px 12px rgba(23, 162, 184, 0.3);
                        }
                        
                        /* Edit Button Styling */
                        .btn-edit {
                            background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
                            border: none;
                            color: white;
                        }
                        
                        .btn-edit:hover {
                            background: linear-gradient(135deg, #0056b3 0%, #004085 100%);
                            transform: translateY(-2px);
                            box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
                        }
                        
                        /* Empty State */
                        .empty-state {
                            padding: 3rem 1rem;
                            text-align: center;
                            background: linear-gradient(135deg, #f8fff9 0%, #f0f9ff 100%);
                            border-radius: 12px;
                        }
                        
                        .empty-state-icon {
                            font-size: 3rem;
                            color: #20c997;
                            margin-bottom: 1rem;
                        }
                        
                        /* Modal Styling */
                        .modal-backdrop-videos {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, 0.5);
                            backdrop-filter: blur(4px);
                            z-index: 1040;
                            animation: fadeIn 0.3s ease;
                        }
                        
                        .modal-videos {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 1050;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 20px;
                            animation: slideIn 0.3s ease;
                        }
                        
                        .modal-content-videos {
                            background: white;
                            border-radius: 16px;
                            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                            max-width: 800px;
                            width: 90%;
                            max-height: 90vh;
                            overflow-y: auto;
                            position: relative;
                        }
                        
                        .modal-header-videos {
                            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                            border-radius: 16px 16px 0 0;
                            padding: 1.5rem 2rem;
                            border: none;
                        }
                        
                        .modal-body-videos {
                            padding: 2rem;
                            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%);
                        }
                        
                        .modal-footer-videos {
                            padding: 1.5rem 2rem;
                            background: #f8f9fa;
                            border-top: 1px solid #e9ecef;
                            border-radius: 0 0 16px 16px;
                        }
                        
                        /* Form Controls */
                        .form-control-videos {
                            border: 2px solid #e9ecef;
                            border-radius: 8px;
                            padding: 0.75rem 1rem;
                            transition: all 0.3s ease;
                            background-color: white;
                        }
                        
                        .form-control-videos:focus {
                            border-color: #28a745;
                            box-shadow: 0 0 0 0.25rem rgba(40, 167, 69, 0.2);
                            background-color: white;
                        }
                        
                        .form-control-videos:disabled {
                            background-color: #f8f9fa;
                            cursor: not-allowed;
                            opacity: 0.7;
                        }
                        
                        .form-label-videos {
                            font-weight: 600;
                            color: #495057;
                            margin-bottom: 0.5rem;
                        }
                        
                        /* Video Preview Container */
                        .video-preview-container-modal {
                            background: linear-gradient(135deg, #f8fff9 0%, #f0f9ff 100%);
                            border: 2px dashed #28a745;
                            border-radius: 12px;
                            padding: 1.5rem;
                            margin-top: 1rem;
                        }
                        
                        /* Loading Overlay untuk Modal */
                        .modal-loading-overlay {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: rgba(255, 255, 255, 0.9);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 10;
                            border-radius: 16px;
                            backdrop-filter: blur(3px);
                        }
                        
                        .loading-content {
                            text-align: center;
                            padding: 2rem;
                            background: white;
                            border-radius: 12px;
                            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                            border: 1px solid #e9ecef;
                            max-width: 300px;
                        }
                        
                        .loading-spinner-large {
                            width: 50px;
                            height: 50px;
                            border: 3px solid #f3f3f3;
                            border-top: 3px solid #28a745;
                            border-radius: 50%;
                            animation: modal-spinner 1s linear infinite;
                            margin: 0 auto 1.5rem;
                        }
                        
                        .loading-text {
                            font-size: 1.1rem;
                            font-weight: 600;
                            color: #28a745;
                            margin-bottom: 0.5rem;
                        }
                        
                        .loading-subtext {
                            color: #6c757d;
                            font-size: 0.9rem;
                        }
                        
                        @keyframes modal-spinner {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                        
                        /* Loading Text Styling */
                        .btn-loading-text {
                            display: inline-flex;
                            align-items: center;
                            gap: 0.5rem;
                        }
                        
                        /* SweetAlert Custom Styling */
                        .swal2-popup-custom {
                            border-radius: 12px !important;
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        }
                        
                        .swal2-confirm-custom {
                            border-radius: 8px !important;
                            padding: 0.625rem 1.5rem !important;
                            font-weight: 500 !important;
                            background: linear-gradient(135deg, #dc3545 0%, #c82333 100%) !important;
                            border: none !important;
                        }
                        
                        .swal2-cancel-custom {
                            border-radius: 8px !important;
                            padding: 0.625rem 1.5rem !important;
                            font-weight: 500 !important;
                            background: linear-gradient(135deg, #6c757d 0%, #495057 100%) !important;
                            border: none !important;
                        }
                        
                        /* Animations */
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        
                        @keyframes slideIn {
                            from {
                                opacity: 0;
                                transform: translateY(-20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        
                        /* Pulse Animation untuk Loading */
                        @keyframes pulse {
                            0% { opacity: 1; }
                            50% { opacity: 0.5; }
                            100% { opacity: 1; }
                        }
                        
                        .pulse-text {
                            animation: pulse 1.5s ease-in-out infinite;
                        }
                        
                        /* Responsive Design */
                        @media (max-width: 768px) {
                            .modal-videos {
                                padding: 10px;
                            }
                            
                            .modal-content-videos {
                                width: 95%;
                            }
                            
                            .modal-body-videos {
                                padding: 1.5rem;
                            }
                            
                            .table-videos thead th,
                            .table-videos tbody td {
                                padding: 0.75rem;
                            }
                            
                            .video-preview-table {
                                max-width: 150px;
                            }
                            
                            .btn-action {
                                width: 32px;
                                height: 32px;
                                margin: 2px;
                            }
                            
                            .loading-content {
                                padding: 1.5rem;
                                max-width: 250px;
                            }
                            
                            .loading-spinner-large {
                                width: 40px;
                                height: 40px;
                            }
                            
                            .action-buttons-group {
                                display: flex;
                                flex-wrap: wrap;
                                gap: 4px;
                            }
                        }
                        
                        @media (max-width: 576px) {
                            .card-header-videos {
                                padding: 1rem;
                            }
                            
                            .modal-header-videos {
                                padding: 1rem 1.5rem;
                            }
                            
                            .video-preview-table {
                                max-width: 120px;
                            }
                            
                            .action-buttons-group {
                                flex-direction: column;
                                align-items: center;
                            }
                        }
                    `)),e.createElement(C,null,e.createElement("div",{className:"container-fluid mb-5 mt-5 videos-page"},e.createElement("div",{className:"row mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3"},e.createElement("div",null,e.createElement("h1",{className:"h3 fw-bold text-dark mb-1"},e.createElement("i",{className:"fa fa-video me-2 text-success"}),"Master Videos"),e.createElement("p",{className:"text-muted mb-0"},"Manage your YouTube videos and content")),e.createElement("div",{className:"d-flex gap-2"},e.createElement(S,{href:"/account/videos",className:"btn btn-back text-white"},e.createElement("i",{className:"fa fa-arrow-left me-2"}),"Back"),e.createElement("button",{onClick:()=>i(!0),className:"btn btn-add-video text-white",disabled:a},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add Video"))))),e.createElement("div",{className:"row mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card card-videos"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row align-items-center"},e.createElement("div",{className:"col-md-8 mb-3 mb-md-0"},e.createElement(Y,{URL:"/account/videos",placeholder:"Search videos by name..."})),e.createElement("div",{className:"col-md-4 text-md-end"},e.createElement("span",{className:"text-muted"},"Total: ",l.total," videos"))))))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card card-videos"},e.createElement("div",{className:"card-header card-header-videos"},e.createElement("span",null,e.createElement("i",{className:"fa fa-list me-2"})," Videos List")),e.createElement("div",{className:"card-body p-0"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-videos mb-0"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{style:{width:"5%"}},"No"),e.createElement("th",{style:{width:"25%"}},"Video Name"),e.createElement("th",{style:{width:"10%"}},"Year"),e.createElement("th",{style:{width:"10%"}},"Status"),e.createElement("th",{style:{width:"30%"}},"Preview"),e.createElement("th",{style:{width:"20%"}},"Actions"))),e.createElement("tbody",null,l.data.length>0?l.data.map((t,o)=>e.createElement("tr",{key:t.id},e.createElement("td",{className:"text-center fw-semibold"},++o+(l.current_page-1)*l.per_page),e.createElement("td",null,e.createElement("div",{className:"fw-medium text-dark"},t.name),t.linkvideo&&e.createElement("small",{className:"text-muted"},e.createElement("i",{className:"fab fa-youtube text-danger me-1"}),"YouTube Link")),e.createElement("td",null,e.createElement("span",{className:"badge bg-secondary"},t.tahun)),e.createElement("td",null,e.createElement("span",{className:`badge badge-video ${t.status==="published"?"badge-published":t.status==="draft"?"badge-draft":"badge-archived"}`},t.status)),e.createElement("td",null,t.linkvideo&&p(t.linkvideo)?e.createElement("div",{className:"video-preview-table"},e.createElement("iframe",{width:"200",height:"113",src:p(t.linkvideo),title:t.name,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):e.createElement("span",{className:"text-muted"},"No preview available")),e.createElement("td",null,e.createElement("div",{className:"d-flex justify-content-center gap-2 action-buttons-group"},t.linkvideo&&e.createElement("button",{className:"btn btn-view btn-action",title:"View on YouTube",onClick:()=>window.open(t.linkvideo,"_blank"),disabled:s===t.id},e.createElement("i",{className:"fa fa-eye"})),e.createElement("button",{onClick:()=>E(t.id),className:`btn btn-delete btn-action ${s===t.id?"btn-delete-loading disabled":""}`,title:"Delete",disabled:s===t.id},s===t.id?e.createElement("i",{className:"fa fa-spinner fa-spin"}):e.createElement("i",{className:"fa fa-trash-alt"})))))):e.createElement("tr",null,e.createElement("td",{colSpan:6},e.createElement("div",{className:"empty-state"},e.createElement("div",{className:"empty-state-icon"},e.createElement("i",{className:"fa fa-film"})),e.createElement("h4",{className:"h5 fw-bold text-dark mb-2"},"No Videos Found"),e.createElement("p",{className:"text-muted mb-3"},"Start by adding your first video content"),e.createElement("button",{onClick:()=>i(!0),className:"btn btn-add-video text-white",disabled:a},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add First Video")))))))),l.data.length>0&&e.createElement("div",{className:"card-footer border-0 bg-white pt-3"},e.createElement("div",{className:"d-flex justify-content-end"},e.createElement(V,{links:l.links,align:"end"}))))))),x&&e.createElement(e.Fragment,null,e.createElement("div",{className:"modal-backdrop-videos",onClick:()=>{a||(i(!1),m())}}),e.createElement("div",{className:"modal-videos"},e.createElement("div",{className:"modal-content-videos"},a&&e.createElement("div",{className:"modal-loading-overlay"},e.createElement("div",{className:"loading-content"},e.createElement("div",{className:"loading-spinner-large"}),e.createElement("div",{className:"loading-text pulse-text"},"Loading..."),e.createElement("p",{className:"loading-subtext"},"Please wait while we save your video"),e.createElement("div",{className:"mt-3"},e.createElement("small",{className:"text-muted"},e.createElement("i",{className:"fa fa-clock me-1"}),"This may take a few seconds")))),e.createElement("div",{className:"modal-header-videos"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"bg-white rounded-circle p-2 me-3"},e.createElement("i",{className:"fa fa-video text-success fa-lg"})),e.createElement("div",null,e.createElement("h5",{className:"modal-title text-white fw-bold mb-0"},"Add New Video"),e.createElement("small",{className:"text-white-50"},"Fill in the details below"))),e.createElement("button",{type:"button",className:"btn-close btn-close-white",onClick:()=>{a||(i(!1),m())},"aria-label":"Close",disabled:a})),e.createElement("form",{onSubmit:h},e.createElement("div",{className:"modal-body-videos"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12 mb-4"},e.createElement("label",{className:"form-label-videos"},e.createElement("i",{className:"fa fa-heading me-2 text-muted"}),"Video Name ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"text",className:`form-control form-control-videos ${n.name?"is-invalid":""}`,value:r.name,onChange:t=>c("name",t.target.value),placeholder:"Enter video title",required:!0,disabled:a}),n.name&&e.createElement("div",{className:"invalid-feedback d-block mt-2"},e.createElement("i",{className:"fa fa-exclamation-circle me-1"}),n.name))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6 mb-4"},e.createElement("label",{className:"form-label-videos"},e.createElement("i",{className:"fa fa-tag me-2 text-muted"}),"Status ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("select",{className:`form-control form-control-videos ${n.status?"is-invalid":""}`,value:r.status,onChange:t=>c("status",t.target.value),required:!0,disabled:a},e.createElement("option",{value:"draft"},"Draft"),e.createElement("option",{value:"published"},"Published"),e.createElement("option",{value:"archived"},"Archived")),n.status&&e.createElement("div",{className:"invalid-feedback d-block mt-2"},e.createElement("i",{className:"fa fa-exclamation-circle me-1"}),n.status)),e.createElement("div",{className:"col-md-6 mb-4"},e.createElement("label",{className:"form-label-videos"},e.createElement("i",{className:"fa fa-calendar me-2 text-muted"}),"Year ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"number",className:`form-control form-control-videos ${n.tahun?"is-invalid":""}`,value:r.tahun,onChange:t=>c("tahun",t.target.value),min:"1900",max:new Date().getFullYear(),required:!0,disabled:a}),n.tahun&&e.createElement("div",{className:"invalid-feedback d-block mt-2"},e.createElement("i",{className:"fa fa-exclamation-circle me-1"}),n.tahun))),e.createElement("div",{className:"mb-4"},e.createElement("label",{className:"form-label-videos"},e.createElement("i",{className:"fab fa-youtube me-2 text-danger"}),"YouTube Link ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"url",className:`form-control form-control-videos ${n.linkvideo?"is-invalid":""}`,value:r.linkvideo,onChange:t=>c("linkvideo",t.target.value),placeholder:"https://www.youtube.com/watch?v=...",required:!0,disabled:a}),n.linkvideo&&e.createElement("div",{className:"invalid-feedback d-block mt-2"},e.createElement("i",{className:"fa fa-exclamation-circle me-1"}),n.linkvideo),e.createElement("div",{className:"mt-2"},e.createElement("small",{className:"text-muted"},e.createElement("i",{className:"fa fa-info-circle me-1"}),"Supported formats: youtube.com/watch?v=... or youtu.be/..."))),r.linkvideo&&w(r.linkvideo)&&e.createElement("div",{className:"mb-4"},e.createElement("label",{className:"form-label-videos"},e.createElement("i",{className:"fa fa-eye me-2 text-success"}),"Video Preview"),e.createElement("div",{className:"video-preview-container-modal"},e.createElement("div",{className:"ratio ratio-16x9"},e.createElement("iframe",{src:p(r.linkvideo),title:"YouTube video preview",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),e.createElement("div",{className:"mt-3 text-center"},e.createElement("span",{className:"badge bg-success"},e.createElement("i",{className:"fa fa-check-circle me-1"}),"Valid YouTube Link"))))),e.createElement("div",{className:"modal-footer-videos"},e.createElement("div",{className:"d-flex justify-content-between w-100"},e.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:()=>{a||(i(!1),m())},disabled:a},"Cancel"),e.createElement("button",{type:"submit",className:`btn btn-add-video text-white px-4 ${a?"btn-add-video-loading":""}`,disabled:a},a?e.createElement("span",{className:"btn-loading-text"},e.createElement("i",{className:"fa fa-spinner fa-spin me-2"}),"Saving..."):e.createElement("span",{className:"btn-loading-text"},e.createElement("i",{className:"fa fa-save me-2"}),"Save Video"))))))))))}export{$ as default};
