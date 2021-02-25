import React from "react"
import { connect } from "react-redux";
import { addDogs } from "../../actions";

const Form = (props) => {
  const [input, setInput] = React.useState({   
    name: "",
    heigth:"",
    weight: "",
    life_span:""
 });

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e)=>{
     props.addDogs(input)
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
          <button type="submit">Create</button>
      </form>
      <div>
  
      </div>
    </div>
  )

}

function mapStateToProps(state) {
  return {
    newDog: state.newDogs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addDogs: dog => dispatch(addDogs(dog))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);