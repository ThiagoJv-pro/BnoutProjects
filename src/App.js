import './App.css';
import engr from './imgs/lv3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/index.js';

function App() {
  return (
      <body>
      <NavBar/>
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
