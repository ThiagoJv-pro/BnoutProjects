import './App.css';
import logo from './imgs/logoPngsooB.png';
import engr from './imgs/lv3.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          </nav>

        <div class="logo">
          <img id="logoImg" src={logo} alt="logo"/>
        </div>

        <div class="animation">
          <img id="logoImg2" src={engr} alt="engrenagem"/>
        </div>

        <div class="text">
        <h1>...</h1>
        </div>

      </body>
    
  );
}

export default App;
