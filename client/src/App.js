import './App.css';
import { Route } from "react-router-dom";
import BtnStart from './components/BtnStart/BtnStart';
import Buscador from './components/Buscador/Buscador';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={BtnStart} />
      <Route exact path="/dogs" component={Buscador}/>
      <Route exact path="/add" component={Form}/>
    </div>
  );
}

export default App;
