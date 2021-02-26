import React from "react"
import { connect } from "react-redux";
import { setFilter } from "../../actions";
import Dog from "../Dog/Dog";
import styles from "./dogs.module.css"


const Dogs = ({doggys, changeFilter}) => {
  if(!doggys.length){
    return (
      <div className={styles.dogs}>
      <Dog
      name="Dog not Found or Loading"
      />
      </div>
    )
  }
    return (
        <div className={styles.dogs}>
          <div>
          <select size="3" id="orders" onChange={(e)=>{changeFilter(e)}} name="" defaultValue="A-Z">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="weigth+">Weigth +</option>
            <option value="weigth-">Weigth -</option> 
            <option value="byYou">Created by You</option>
            <option value="Api">Api Dog</option> 
          </select>
          </div>
          {
          doggys.map(d =>{
            if(d.id > 264){
              return (
              <Dog
              key={d.id}
              id={d.id}
              name={d.name}
              temperament={d.temperament}
              img={d.img}
              />
              )
            }
            return( 
            <Dog
            key={d.id}
              id={d.id}
              name={d.name}
              temperament={d.temperament}
              img={d.img}
            />)
          })}
        </div>
      );
}

function mapStateToProps(state) {
  return {
    doggys: state.dogsName,
  };
}

 


export default connect(
  mapStateToProps
)(Dogs);