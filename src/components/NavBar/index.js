import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './imgs/logoPngsooB.png';
import './style.css';

function NavBar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a className='navbar-brand' href='#'>
                <img src={Logo} id="imgLogo"/>
                Bnout Tech
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
    )

}

export default NavBar;