import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="navbar-brand">NavBar</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active mx-3 h5 ">
                                <Link className="nav-link text-dark" to="/">Home
                                </Link>
                            </li>
                            <li className="nav-item mx-3 h5 ">
                                <Link className="nav-link text-dark" to="/dashboard">DashBoard</Link>
                            </li>


                        </ul>

                    </div>
                </div>

            </nav>
        </>
    )
}


export default Navbar;