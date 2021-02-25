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
        <div className="movie-detail movie-card">
            <div className="container">
                <h2>{props.dogDetails.name}</h2> 
                <p>{props.dogDetails.heigth}</p>
                <p>{props.dogDetails.weight}</p>
                <p>{props.dogDetails.temperaments}</p>
                <img src={props.dogDetails.img} alt="img-dog"/>
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