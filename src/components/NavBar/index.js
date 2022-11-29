import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from 'react';
import logo from './imgs/logoPngsooB.png';

function NavBar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="logo">
                 <img id="logoImg" src={logo} alt="logo"/>
            </div>
        </nav>
    )

}

export default NavBar;