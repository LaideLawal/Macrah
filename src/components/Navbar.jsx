import React from "react";



export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-custom fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="logo me-2" src={require('../logo.png')} alt="logo" />
                    Macrah</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white bolden" aria-current="page" href="#">Register As A Professional</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Login / Signup</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}