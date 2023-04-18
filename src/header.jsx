import React from 'react';
import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="header">
            <div className="app">
                <header >
                    <nav className="navbar app-header">
                        <ul className="nav nav-pills">
                            <li className="nav-item" key="main">
                                <NavLink className=
                                    {
                                        ({ isActive }) =>
                                            isActive ? "nav-link active" : "nav-link"
                                    }
                                    id="main" to="/"><h4><i className="bi bi-house-door"></i></h4>
                                </NavLink>
                            </li>
                            <li className="nav-item" key="devices" >
                                <NavLink className=
                                    {
                                        ({ isActive }) =>
                                            isActive ? "nav-link active" : "nav-link"
                                    }
                                    to="devices" id="devices"><div className='flex_row'><h4><i className="bi bi-device-ssd"></i></h4><span className='link_text'>Устройства</span></div>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="nav nav-pills">
                            <li className="nav-item" key="login" >
                                <NavLink className=
                                    {
                                        ({ isActive }) =>
                                            isActive ? "nav-link active" : "nav-link"
                                    }
                                    to="login" id="login"><div className='flex_row'><h4><i className="bi bi-box-arrow-in-right"></i></h4><span className='link_text'>Войти</span></div>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div >
        </div>
    );
}

export default Header;