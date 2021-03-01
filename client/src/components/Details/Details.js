import React from "react"
import { connect } from "react-redux";
import { getDogDetails } from "../../actions";
import styles from "./details.module.css"

const Details = (props) => {
    React.useEffect(()=>{
        const dogId = props.match.params.id;
        props.getDogDetails(dogId) 
        
    },[])
      
    return ( 
        <div className={styles.container}>
            <div className={styles.img}>
                <h2>{props.dogDetails.name}</h2> 
                <img className={styles.img} src={props.dogDetails.img} alt="img-dog"/>
            </div>
            <div className={styles.data}>
                <p>Height: {props.dogDetails.height}</p>
                <p>Weight: {props.dogDetails.weight}</p>
                <p>life_span: {props.dogDetails.life_span}</p>
                <p>Temperament: {props.dogDetails.temperament}</p>
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