import React from "react"
import { connect } from "react-redux";
import { addDogs, getTemperaments } from "../../actions";
import styles from "./form.module.css"
import { validate } from "../../utils";




const Form = (props) => {
  const [input, setInput] = React.useState({   
    name: "",
    height:"",
    weight: "",
    life_span:"",
    tempes:[]
  });

  const [errors, setErrors] = React.useState({});
 
  React.useEffect(() => {
  props.getTemperaments()
  },[]);

 
  const select = (e) => {
  const opciones = e.target.options;
  const seleccionadas = [];
  for (let i = 0; i < opciones.length; i++) {
    if (opciones[i].selected) {
      seleccionadas.push(opciones[i].value);
    }      
  }
  setInput({
    ...input,
    tempes: seleccionadas
  })    
  }

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e)=>{
    const {name,height,weight} = errors
    if(!name && !height && !weight){
      props.addDogs(input)
      console.log(props.newDog)
    }
    e.preventDefault()
  }
  
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input}>
          <label className={styles.label}>Name: </label>
          <input 
          name="name" 
          className={`${errors.name && styles.indanger}`}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="Ej: Akita"
          />
        </div> 
          {errors.name && (<p className={styles.pdanger}>{errors.name}</p>)}
        <div className={styles.input}>
          <label className={styles.label} >Height: </label>
          <input 
          name="height" 
          className={errors.height && styles.indanger}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="Ej: 20-22"
          />
        </div> 
          {errors.height && (<p className={styles.pdanger}>{errors.height}</p>)}
        <div className={styles.input}>
          <label className={styles.label}>Weight: </label>
          <input 
          name="weight" 
          className={errors.weight && styles.indanger}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="Ej: 20-22"
          />
        </div> 
          {errors.weight && (<p className={styles.pdanger}>{errors.weight}</p>)}
        <div className={styles.input}>
          <label className={styles.label}>Life span: </label>
          <input name="life_span" 
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="Ej: 20-22 years"
          />
        </div>
        <div className={styles.input}>
          <label className={styles.label}>Temperament: </label>
          <select size="3" multiple name="temperament" onChange={select} className={styles.formcontrol}>
            {
              props.tempes.map((element)=>{
                return <option>{element.name}</option>    
              })
            }
          </select>
        </div>
        <div className={styles.inputBtn}>
          <button type="submit" className={styles.button}>Create</button>       
      </div>
      </form>
    </div>
  )

}

function mapStateToProps(state) {
  return {
    newDog: state.newDogs,
    tempes: state.tempes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addDogs: dog => dispatch(addDogs(dog)),
    getTemperaments: ()=>dispatch(getTemperaments())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);