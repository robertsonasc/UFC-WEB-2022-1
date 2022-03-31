import logo from './logo.svg';
import './App.css';
import Questao01 from './components/Questao01';
import Questao02 from './components/Questao02';
import Pai from './components/Questao03/Pai';
import Questao04 from './components/Questao04';
import 'bootstrap/dist/css/bootstrap.min.css'
import Casa from './components/got/Casa';
import Personagem from "./components/got/Personagem"
import CalculaImc from './components/imc/CalculaImc';
import Cidades from './components/votacao-cidades-hooks/Cidades';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    //<Questao01/>
    //<Questao02/>
    //<Pai/>
    
    /*<div className='App'>
      <Casa titulo="Stark">
        <Personagem nome="Arya" casa="Stark" />
        <Personagem nome="Robert" casa="Stark" />
      </Casa>
    </div>*/

    //<CalculaImc/>

    <Cidades/>

  )
}

export default App;
