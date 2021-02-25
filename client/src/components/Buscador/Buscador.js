import React from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs, getDogsByName } from "../../actions/index";
import Dogs from "../Dogs/Dogs";
import styles from "./Buscador.module.css"

const Buscador = (props) =>{
    const [state, setState] = React.useState({
      name:""
  })

  React.useEffect(() => {
    props.getDogs()
  },[]);

    function handleChange(e) {
      setState({ name: e.target.value});
    }
    function handleSubmit(e) {
      e.preventDefault();
    }
  
    
    
    
      const { name } = state;
      return (
        <div className={styles.container}>
          <h2>Buscador</h2>
          <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label className={styles.label} htmlFor="name">Nombre de la raza: </label>
              <input
                type="text"
                id="name"
                autoComplete="off"
                value={name}
                onChange={(e) => handleChange(e)}
                />
            </div>
            
            <button className={styles.button} type="submit" onClick={()=>props.getDogsByName(name)}>BUSCAR</button>
            
          </form>
          <div>
            {console.log(props.dogs)}
            <Dogs
            doggys={props.dogs}
            />
          </div>
        </div>
      );
    }
    
  
  
  function mapStateToProps(state) {
    return {
      dogs: state.dogs
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getDogsByName: name => dispatch(getDogsByName(name)),
      getDogs: () => dispatch(getDogs())
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Buscador);