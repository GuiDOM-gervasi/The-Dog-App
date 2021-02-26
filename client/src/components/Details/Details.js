import React from "react"
import { connect } from "react-redux";
import { getDogDetails } from "../../actions";

const Details = (props) => {
    React.useEffect(()=>{
        const dogId = props.match.params.id;
        props.getDogDetails(dogId) 
        
    },[])
    
    
    console.log(props.dogDetails)  
    return ( 
        <div>
            <div>
                <h2>{props.dogDetails.name}</h2> 
                <img src={props.dogDetails.img} alt="img-dog"/>
                <p>Height: {props.dogDetails.height}</p>
                <p>Weight: {props.dogDetails.weight}</p>
                <p>life_span: {props.dogDetails.life_span}</p>
                <p>Temperaments: {props.dogDetails.temperament}</p>
            </div>
        </div>
    )

}

function mapStateToProps(state) {
    return {
      dogDetails: state.dogDetails
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getDogDetails: id => dispatch(getDogDetails(id))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Details);