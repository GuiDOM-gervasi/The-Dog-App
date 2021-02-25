import React from "react"
import parserArray from "../../utils";
import Dog from "../Dog/Dog";
import Pic from "../../dog.png"

const Dogs = ({doggys}) => {
    return (
        <div className='cards'>
          {doggys.map(d =>{
            if(d.id > 264){
              return (
              <Dog
              key={d.id}
              id={d.id}
              name={d.name}
              temperament={parserArray(d.temperaments)}
              img={Pic}
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

export default Dogs