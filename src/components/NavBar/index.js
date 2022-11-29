import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from 'react';
import logo from './logoPngsooB.png';

function NavBar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto ">
                    <li class="nav-item">
                        <a class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Services</a>
                    </li>
                </ul>
            </div>
            <div class="logo">
                 <img id="logoImg" src={logo} alt="logo"/>
            </div>
        </nav>
    )

}

export default NavBar;