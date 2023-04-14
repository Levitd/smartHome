import React from 'react';
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div className="app">
            <header >
                <nav className="navbar app-header">
                    <ul className="nav nav-pills">
                        <li className="nav-item" key="main">
                            <Link className="nav-link" id="main" to="/"><h4><i className="bi bi-house-door"></i></h4></Link>
                        </li>
                        <li className="nav-item" key="devices" >
                            <Link className="nav-link" to="devices" id="devices"><div className='flex_row'><h4><i className="bi bi-device-ssd"></i></h4><span className='link_text'>Устройства</span></div></Link>
                        </li>
                    </ul>
                    <ul className="nav nav-pills">
                        <li className="nav-item" key="login" >
                            <Link className="nav-link" to="login" id="login"><div className='flex_row'><h4><i className="bi bi-box-arrow-in-right"></i></h4><span className='link_text'>Войти</span></div></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;