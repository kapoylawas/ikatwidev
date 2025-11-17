//import React
import React, { useState } from "react";

//import link
import { Link, usePage } from '@inertiajs/inertia-react';

//import axios
import axios from "axios";

export default function Menu() {

    //destruct props "dataCarts"
    const { dataCarts } = usePage().props

    //define state
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //define method "searchhandler"
    const searchHandler = (e) => {

        //set isLoading to true
        setIsLoading(true);

        //set products to null
        setProducts([]);

        axios.post(`/search`, {
            q: e.target.value
        })
            .then(response => {

                //set isLoading to false
                setIsLoading(false);

                //set response to state
                setProducts(response.data.products);
            })
    }

    return (
        <>
            <nav className="navbar navbar-dark shadow navbar-expand fixed-bottom p-0 custom-green-navbar">
                <div className="container">
                    <ul className="navbar-nav nav-justified justify-content-center justify-item-center w-100">
                        <li className="nav-item">
                            <Link href="/" className="nav-link text-white fw-bold d-flex flex-column align-items-center position-relative">
                                <div className="menu-icon-wrapper">
                                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                    </svg>
                                </div>
                                <span className="small mt-1">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" data-bs-toggle="modal" data-bs-target="#search" className="nav-link text-white fw-bold d-flex flex-column align-items-center position-relative">
                                <div className="menu-icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                                <span className="small mt-1">Search</span>
                            </Link>
                        </li>
                        {/* <li className="nav-item dropup">
                            <Link href="/carts" className="nav-link text-white fw-bold d-flex flex-column align-items-center position-relative">
                                <div className="menu-icon-wrapper position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                    {dataCarts
                                        ? <span className='badge badge-warning rounded-pill shadow position-absolute top-0 start-100 translate-middle' id='count-cart'>{dataCarts.total}</span>
                                        : <span className='badge badge-warning rounded-pill shadow position-absolute top-0 start-100 translate-middle' id='count-cart'>0</span>
                                    }
                                </div>
                                <span className="small mt-1">Pembayaran</span>
                            </Link>
                        </li> */}
                        <li className="nav-item dropup">
                            <Link href="/login" className="nav-link text-white fw-bold d-flex flex-column align-items-center position-relative">
                                <div className="menu-icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                </div>
                                <span className="small mt-1">Account</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/** modal */}
            <div className="modal fade" id="search" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Search</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <input type="text" className="form-control" onChange={((e) => searchHandler(e))} placeholder="search product here..." />
                            </div>
                        </div>
                        <div className="modal-body" style={{ height: '300px', overflow: 'auto' }}>
                            {isLoading &&
                                <div className="justify-content-center mb-3 text-center">
                                    <div className="spinner-border text-success" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <h6 className="mt-2">Loading...</h6>
                                </div>
                            }

                            {
                                products.map((product, index) => (
                                    <a href={`/products/${product.slug}`} className="text-decoration-none text-dark" key={index}>
                                        <div className="card border-0 shadow-sm rounded-3 bg-light mb-3">
                                            <div className="card-body">
                                                {product.title}
                                            </div>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-green-navbar {
                    background: linear-gradient(135deg, #0d9669 0%, #0a7a5c 50%, #065f46 100%) !important;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .nav-link {
                    transition: all 0.3s ease;
                    padding: 0.6rem 0.75rem !important;
                    border-radius: 0.75rem;
                    margin: 0.25rem;
                    position: relative;
                    overflow: hidden;
                }
                
                .nav-link::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                    transition: left 0.5s;
                }
                
                .nav-link:hover::before {
                    left: 100%;
                }
                
                .nav-link:hover {
                    background-color: rgba(255, 255, 255, 0.15) !important;
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }
                
                .nav-link:active {
                    background-color: rgba(255, 255, 255, 0.25) !important;
                    transform: translateY(-1px);
                }
                
                .menu-icon-wrapper {
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 2.8rem;
                    height: 2.8rem;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                }
                
                .nav-link:hover .menu-icon-wrapper {
                    background: rgba(255, 255, 255, 0.2);
                    transform: scale(1.15);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }
                
                .nav-item {
                    flex: 1;
                    text-align: center;
                }
                
                .navbar-nav {
                    display: flex;
                    width: 100%;
                    gap: 0.25rem;
                }
                
                .small {
                    font-size: 0.7rem;
                    line-height: 1.2;
                    font-weight: 500;
                    margin-top: 0.3rem;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                }
                
                /* Memastikan posisi badge tetap */
                .position-relative {
                    position: relative;
                }
                
                /* Untuk badge di cart */
                .badge {
                    font-size: 0.6rem;
                    min-width: 1.2rem;
                    height: 1.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 0.25rem;
                    background: linear-gradient(135deg, #f59e0b, #d97706) !important;
                    border: 2px solid white;
                }
                
                /* Active state untuk menu yang sedang aktif */
                .nav-link.active {
                    background-color: rgba(255, 255, 255, 0.2) !important;
                }
                
                .nav-link.active .menu-icon-wrapper {
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(1.1);
                }
            `}</style>
        </>
    )
}