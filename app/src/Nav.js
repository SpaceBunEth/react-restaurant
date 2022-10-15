import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import NavButton from './NavButton';

export default function Nav(props) {
    // console.log(props.infoState)
    // console.log(props.page)
    // console.log(props.setPage)
    // console.log('props Nav', props)

    return(
    <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">
            <a className="navbar-brand" href="#">Menu</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

                <NavButton infoState={props.infoState} page={props.page} setPage={props.setPage} setpaginNum={props.setpaginNum}/>

                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">About</a></li>
                    <li><a className="dropdown-item" href="#">Hours</a></li>
                    <li><a className="dropdown-item" href="#">Reservations</a></li>
                    <li><a className="dropdown-item" href="#">Locations</a></li>
                    <li><a className="dropdown-item" href="#">Contact</a></li>
                </ul>
                </li>
            </ul>

            </div>
        </div>
        </nav>
    </>
    );
}