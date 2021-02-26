import './App.css';
import React from "react"
import { Route } from "react-router-dom";
import BtnStart from './components/BtnStart/BtnStart';
import Buscador from './components/Buscador/Buscador';
import Form from './components/Form/Form';
import Details from './components/Details/Details';
import NavBar from './components/NavBar/nav';
import Dogs from './components/Dogs/Dogs';
import { spliter } from './utils';
import { connect } from 'react-redux';
import { setFilter } from './actions';
const d = document;

function App({doggys, setFilter}) {
  
  
  const changeFilter = (e) => {
    const select = d.querySelector("#orders").value
    const array = [...doggys]
   switch(select){
    case "A-Z":
      const asc =  array.sort((a, b) => a.name.localeCompare(b.name));
      return setFilter(asc)
    case "Z-A":
      const desc =  array.sort((a, b) => b.name.localeCompare(a.name));
      return setFilter(desc)
    case "weigth+":
      const pesados =  array.sort((a, b) => Number(spliter(a.weight)) > Number(spliter(b.weight)) ? -1 : 1  );
      return setFilter(pesados)
    case "weigth-":
      const livianos =   array.sort((a, b) => Number(spliter(a.weight)) > Number(spliter(b.weight)) ? 1 : -1  );
      return setFilter(livianos)
    case "byYou":
      const byYou = array.filter((e)=>{return e.id > 264})
      return setFilter(byYou)
    case "Api":
      const api = array.filter((e)=>{return e.id < 264})
      return setFilter(api)
    default:
        return doggys
   }
  }

  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={BtnStart} />
      <Route exact path="/dogs" component={Buscador}/>
      <Route exact path="/dogs">
        <Dogs
        changeFilter={changeFilter}
        />
      </Route>
      <Route exact path="/add" component={Form}/>
      <Route exact path="/dogs/:id" component={Details}/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    doggys: state.dogsName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: filter => dispatch(setFilter(filter)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
