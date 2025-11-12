import{r as i,d as m,R as e}from"./app.ecd86cfc.js";function E({URL:o,initialData:w=!0,searchResults:l=null}){const[a,c]=i.exports.useState(""),[t,s]=i.exports.useState(!1),[u,h]=i.exports.useState(!1),[p,d]=i.exports.useState(!1);i.exports.useEffect(()=>{a===""&&p&&n()},[a]);const x=async r=>{if(r.preventDefault(),!a.trim()){n();return}s(!0),d(!0);try{await m.Inertia.get(`${o}?q=${a.trim()}`,{},{onFinish:()=>s(!1)})}catch(f){s(!1),console.error("Error pencarian:",f)}},n=()=>{c(""),d(!1),s(!0),m.Inertia.get(o,{},{onFinish:()=>s(!1)})},g=r=>{c(r.target.value),h(r.target.value.length>0)},b=r=>{r.key==="Escape"&&n()};return e.createElement("div",{className:"search-container"},e.createElement("form",{onSubmit:x},e.createElement("div",{className:"search-input-group"},e.createElement("input",{type:"text",value:a,onChange:g,onKeyDown:b,className:"search-input",placeholder:"Ketik kata kunci untuk mencari...",disabled:t}),e.createElement("div",{className:"search-buttons"},t&&e.createElement("div",{className:"search-loading"},e.createElement("div",{className:"loading-spinner"})),u&&!t&&e.createElement("button",{type:"button",className:"search-clear-btn",onClick:n,"aria-label":"Hapus pencarian",title:"Hapus pencarian (Esc)"},e.createElement("i",{className:"fa fa-times"})),e.createElement("button",{type:"submit",className:"search-submit-btn",disabled:t,"aria-label":t?"Sedang mencari...":"Cari"},t?e.createElement("div",{className:"button-loading"}):e.createElement(e.Fragment,null,e.createElement("i",{className:"fa fa-search"}),e.createElement("span",{className:"search-text"},"Cari"))))),e.createElement("div",{className:"search-tips"},e.createElement("small",null,"Tekan Enter untuk mencari \u2022 Tekan Esc untuk menghapus \u2022 Kosongkan untuk menampilkan semua data"))),p&&l&&e.createElement("div",{className:"search-results-info"},l.length===0?e.createElement("div",{className:"no-results"},e.createElement("i",{className:"fa fa-search-minus"}),e.createElement("span",null,'Tidak ditemukan hasil untuk "',e.createElement("strong",null,a),'"'),e.createElement("button",{onClick:n,className:"show-all-btn"},"Tampilkan Semua Data")):e.createElement("div",{className:"has-results"},e.createElement("i",{className:"fa fa-check-circle"}),e.createElement("span",null,"Ditemukan ",l.length,' hasil untuk "',e.createElement("strong",null,a),'"'),e.createElement("button",{onClick:n,className:"show-all-btn"},"Tampilkan Semua"))),e.createElement("style",{jsx:!0},`
                .search-container {
                    width: 100%;
                    margin-bottom: 20px;
                }
                
                .search-input-group {
                    position: relative;
                    display: flex;
                    align-items: center;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    overflow: hidden;
                    border: 1px solid #e0e0e0;
                    width: 100%;
                }
                
                .search-input-group:focus-within {
                    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.2);
                    border-color: #4285f4;
                }
                
                .search-input {
                    flex: 1;
                    padding: 16px 20px;
                    border: none;
                    outline: none;
                    font-size: 16px;
                    background: transparent;
                    color: #333;
                    min-height: 56px;
                    transition: all 0.3s ease;
                }
                
                .search-input:disabled {
                    background-color: #f8f9fa;
                    color: #6c757d;
                }
                
                .search-input::placeholder {
                    color: #9e9e9e;
                }
                
                .search-buttons {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 0 12px;
                }
                
                .search-loading {
                    display: flex;
                    align-items: center;
                    padding: 0 8px;
                }
                
                .loading-spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid #f3f3f3;
                    border-top: 2px solid #4285f4;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                
                .search-clear-btn, .search-submit-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    background: transparent;
                    cursor: pointer;
                    border-radius: 6px;
                    transition: all 0.2s ease;
                    color: #666;
                    padding: 10px;
                }
                
                .search-clear-btn {
                    width: 40px;
                    height: 40px;
                }
                
                .search-clear-btn:hover {
                    background: rgba(244, 67, 54, 0.1);
                    color: #f44336;
                    transform: scale(1.1);
                }
                
                .search-submit-btn {
                    background: linear-gradient(135deg, #4285f4, #34a853);
                    color: white;
                    padding: 12px 20px;
                    gap: 8px;
                    font-weight: 500;
                    min-width: 100px;
                    position: relative;
                }
                
                .search-submit-btn:hover:not(:disabled) {
                    background: linear-gradient(135deg, #3367d6, #2e8b57);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                
                .search-submit-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none;
                }
                
                .button-loading {
                    width: 16px;
                    height: 16px;
                    border: 2px solid transparent;
                    border-top: 2px solid white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                
                .search-text {
                    font-size: 14px;
                    font-weight: 500;
                }
                
                .search-tips {
                    margin-top: 8px;
                    text-align: center;
                    color: #6c757d;
                }
                
                .search-results-info {
                    margin-top: 16px;
                    padding: 16px;
                    border-radius: 8px;
                    animation: fadeIn 0.3s ease;
                }
                
                .no-results {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: #fff3cd;
                    border: 1px solid #ffeaa7;
                    color: #856404;
                    padding: 16px;
                    border-radius: 8px;
                    flex-wrap: wrap;
                }
                
                .has-results {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: #d1ecf1;
                    border: 1px solid #bee5eb;
                    color: #0c5460;
                    padding: 16px;
                    border-radius: 8px;
                    flex-wrap: wrap;
                }
                
                .show-all-btn {
                    background: #6c757d;
                    color: white;
                    border: none;
                    padding: 6px 12px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 12px;
                    transition: all 0.2s ease;
                    margin-left: auto;
                }
                
                .show-all-btn:hover {
                    background: #545b62;
                }
                
                /* Animations */
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                /* Responsive design */
                @media (max-width: 768px) {
                    .search-input {
                        padding: 14px 16px;
                        font-size: 14px;
                        min-height: 52px;
                    }
                    
                    .search-submit-btn {
                        padding: 10px 16px;
                        min-width: 80px;
                    }
                    
                    .search-text {
                        display: none;
                    }
                    
                    .search-clear-btn {
                        width: 36px;
                        height: 36px;
                    }
                    
                    .search-tips small {
                        font-size: 11px;
                        line-height: 1.3;
                        display: block;
                        text-align: left;
                        padding: 0 8px;
                        margin-top: 4px;
                        color: #8e8e8e;
                        font-style: italic;
                        line-height: 1.4;
                        max-width: 100%;
                        white-space: normal;
                        word-wrap: break-word;
                    }
                    
                    .no-results, .has-results {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 8px;
                    }
                    
                    .show-all-btn {
                        margin-left: 0;
                        align-self: flex-end;
                    }
                }
            `))}export{E as S};
