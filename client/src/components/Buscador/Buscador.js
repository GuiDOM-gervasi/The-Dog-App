import React from "react"
import { connect } from "react-redux";
import { getDogs, getDogsByName } from "../../actions/index";
import Dogs from "../Dogs/Dogs";
import styles from "./Buscador.module.css"

const Buscador = (props) =>{
    const [state, setState] = React.useState({
      name:"",
      checked:""
  })

  React.useEffect(() => {
    props.getDogsByName("")
  },[]);

  function handleChange(e) {
      setState({ 
        name: e.target.value
      });
    }
  function handleSubmit(e) {
      e.preventDefault();
    }
      const { name } = state;
      return (
        <div className={styles.container}>
          <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.search} >
              <label className={styles.label} htmlFor="name">Name of breed or temperament : </label>
              <input
                className={styles.input}
                type="text"
                id="name"
                autoComplete="off"
                value={name}
                onChange={(e) => handleChange(e)}
                />
            <button className={styles.button} type="submit" onClick={()=>props.getDogsByName(name)}>Search</button>   
            </div>
            
          </form>
        </div>
      );
    }
    
  
  
  
  function mapDispatchToProps(dispatch) {
    return {
      getDogsByName: name => dispatch(getDogsByName(name)),
    };
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(Buscador);