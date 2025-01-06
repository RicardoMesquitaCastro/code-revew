import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Item from './components/Item';

function App() {

  const nome = "Ricardo M"
  return (
    <div className="App">      
      <SayMyName nome="Ricardo"/>
      <SayMyName nome={nome}/>
      <Frase/>
      <Pessoa 
      nome="Ricardo" 
      idade="28"
      profissao="Programador"
      foto="https://via.placeholder.com/150"
      />
        <List/>
        <Item marca="Nikee" lancamento={1964}/>
        <Item/>
    </div>
  );
}

export default App;
