import React from "react"
import Dog from "../Dog/Dog";


const Dogs = ({doggys}) => {
    return (
        <div className='cards'>
          {doggys.map(d => <Dog
              id={d.id}
              name={d.name}
              temperament={d.temperament}
              img={d.img}
            /> )}
        </div>
      );
}

export default Dogs