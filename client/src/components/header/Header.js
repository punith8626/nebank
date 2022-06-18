import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <NavLink className="nav-link text-left" aria-current="page" to="/dashboard">
                    <img src={logo} alt="logo" />
                </NavLink>
                <Nav className="navbar navbar-expand-md navbar-dark bgcolor" aria-label="Fourth navbar example">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/dashboard">Requests</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/dashboard">Vendor</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Logout</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Nav>
            </header>
        </React.Fragment>
    )
}

export default Header