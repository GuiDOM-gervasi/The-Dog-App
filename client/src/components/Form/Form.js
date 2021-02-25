import React from "react"
import { connect } from "react-redux";
import { addDogs, getTemperaments } from "../../actions";

const Form = (props) => {
  const [input, setInput] = React.useState({   
    name: "",
    heigth:"",
    weight: "",
    life_span:"",
    tempes:[]
 });
 
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
  }

  const handleSubmit = (e)=>{
     props.addDogs(input)
     console.log(input)
    e.preventDefault()
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input name="name" 
          onChange={handleInputChange}
          autoComplete="off"
          />
        </div> 
        <div>
          <label>Heigth</label>
          <input name="heigth" onChange={handleInputChange}
          autoComplete="off"
          />
        </div> 
        <div>
          <label>Weight</label>
          <input 
          name="weight" 
          onChange={handleInputChange}
          autoComplete="off"
          />
        </div> 
        <div>
          <label>Life span</label>
          <input name="life_span" 
          onChange={handleInputChange}
          autoComplete="off"
          />
        </div>
        <div>
          <label>Temperament</label>
          <select multiple name="temperament" onChange={select}>
            {
              props.tempes.map((element)=>{
                return <option>{element.name}</option>    
              })
            }
          </select>
        </div>
          <button type="submit">Create</button>
      </form>
      <div>
      </div>
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