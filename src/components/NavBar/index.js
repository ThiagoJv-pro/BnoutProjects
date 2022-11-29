import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from 'react';
import logo from './logoPngsooB.png';

function NavBar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div id="navbarText">
                <ul class="navbar-nav me-auto ">
                    <li class="nav-item c">
                        <p>Home</p>
                    </li>
                    <li class="nav-item c">
                        <p> About </p>
                    </li>
                    <li class="nav-item c">
                        <p> Contato </p>
                    </li>
                </ul>
            </div>

            <div class="logo">
                 <img id="logoImg" src={logo} alt="logo"/>
            </div>

            <div id="navbarText">
                <ul class="navbar-nav me-auto ">
                    <li class="nav-item c">
                        <p>Home</p>
                    </li>
                    <li class="nav-item c">
                        <p> About </p>
                    </li>
                    <li class="nav-item c">
                        <p> Contato </p>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;