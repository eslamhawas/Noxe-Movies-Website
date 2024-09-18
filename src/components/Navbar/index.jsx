import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="home">Noxe</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="movies">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="tv">TV</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="people">People</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="home">
                                <i className="fa-brands fa-facebook"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="home">
                                <i className="fa-brands fa-linkedin"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="home">
                                <i className="fa-brands fa-tiktok"></i></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="home">Logout</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;