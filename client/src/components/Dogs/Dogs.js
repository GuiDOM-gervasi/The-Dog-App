import React from "react"
import { connect } from "react-redux";
//import { setFilter } from "../../actions";
import Dog from "../Dog/Dog";
import "./dogs.css"
import ReactPaginate from "react-paginate"

const Dogs = ({doggys, changeFilter}) => {
  const [pageNumber, setPageNumber] = React.useState(0)
  
  const dogsPP = 7;
  const pageVisited = pageNumber * dogsPP;
  
  const displayUsers = doggys.slice(pageVisited,pageVisited+dogsPP)
  
  if(!doggys.length){
    return (
      <div className="dogs">
      <Dog
      name="Dog not Found or Loading"
      />
      </div>
    )
  }
    const count = Math.ceil(doggys.length / dogsPP)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    return (
      <div className="container">
      <div>
      <select  className="select" size="1" id="orders" onChange={(e)=>{changeFilter(e)}} name="" defaultValue="A-Z">
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="weigth+">Weigth +</option>
        <option value="weigth-">Weigth -</option> 
        <option value="byYou">Created by You</option>
        <option value="Api">Api Dog</option> 
      </select>
      </div>
        <div className="dogs">
          {
          displayUsers.map(d =>{
            return( 
            <Dog
            key={d.id}
              id={d.id}
              name={d.name}
              temperament={d.temperament}
              img={d.img}
            />)
          })}
          <ReactPaginate 
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={count}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisable"}
          activeClassName={"paginationActive"}
          />
        </div>
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