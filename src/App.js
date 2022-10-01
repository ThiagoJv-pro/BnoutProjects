import './App.css';
import logo from './imgs/logoPngsooB.png';
import imgBody from './imgs/lv3.png';

function App() {
  return (
      <body>
        <div class="logo">
          <img id="logoImg" src={logo} alt="logo"/>
        </div>
        
        <div id='animation'>
          <img id="logoImg2" src={imgBody}/>
        </div>

        <div class="text">
        <h1>Under development...</h1>
        </div>
      </body>
    
  );
}

export default App;
