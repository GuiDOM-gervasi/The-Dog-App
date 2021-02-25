import './App.css';
import { Route } from "react-router-dom";
import BtnStart from './components/BtnStart/BtnStart';
import Buscador from './components/Buscador/Buscador';
import Form from './components/Form/Form';
import Details from './components/Details/Details';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={BtnStart} />
      <Route exact path="/dogs" component={Buscador}/>
      <Route exact path="/add" component={Form}/>
      <Route exact path="/dogs/:id" component={Details}/>
    </div>
  );
}

export default App;
