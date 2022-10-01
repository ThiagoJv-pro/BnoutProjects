import './App.css';
import logo from './imgs/logoPngsooB.png';
import engr from './imgs/lv3.png';

function App() {
  return (
      <body>
        <div class="logo">
          <img id="logoImg" src={logo} alt="logo"/>
        </div>

        <div class="animation">
          <img id="logoImg2" src={engr} alt="engrenagem"/>
        </div>

        <div class="text">
        <h1>Under development...</h1>
        </div>

      </body>
    
  );
}

export default App;
