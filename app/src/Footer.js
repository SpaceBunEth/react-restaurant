import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default function Footer(props) {
    console.log('FUNC',props.setPage)
    return(
    <>
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">© 2022 SpaceBun, Inc</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
                </a>

                <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a onClick={()=>{props.setPage('Home')}} className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a onClick={()=>{props.setPage('About')}} className="nav-link px-2 text-muted">About</a></li>
                <li className="nav-item"><a onClick={()=>{props.setPage('Hours')}} className="nav-link px-2 text-muted">Hours</a></li>
                <li className="nav-item"><a onClick={()=>{props.setPage('Contact')}} className="nav-link px-2 text-muted">Contact</a></li>
                </ul>
            </footer>
        </div>
    </>
    );
}