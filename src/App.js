import './App.css';
import logo from './imgs/logoPngsooB.png';
import engr from './imgs/lv3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import navbar from './components/NavBar';

function App() {
  return (
      <body>
        <navbar/>
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
