import './App.css';
import logo from './imgs/logoPngsooB.png';
import engr from './imgs/lv3.png';
import 'bootstrap/dist/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

function App() {
  return (
      <body>
        <Nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          </Nav>

        <div class="logo">
          <img id="logoImg" src={logo} alt="logo"/>
        </div>

        <div class="animation">
          <img id="logoImg2" src={engr} alt="engrenagem"/>
        </div>

        <div class="text">
        <h1>Under developmentss.s..</h1>
        </div>

      </body>
    
  );
}

export default App;
