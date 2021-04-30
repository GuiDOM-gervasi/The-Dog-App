import React from "react";
import { Link } from "react-router-dom";
import { StyledDog } from "./StyledDog";

const Dog = ({ id, name, temperament, img }) => {
  return (
    <StyledDog>
      <div className="dogBody">
        {id ? (
          <Link to={`/dog/${id}`}>
            <h5>{name}</h5>
          </Link>
        ) : (
          <Link
            onClick={() => {
              return window.location.reload();
            }}
          >
            <h5>{name}</h5>
          </Link>
        )}
      </div>
      <div className="lines">
        <img src={img} />
      </div>
      <div className="text">
        {id && (
          <>
            <h5>Temperament:</h5>
            <p>{temperament}</p>
          </>
        )}
      </div>
    </StyledDog>
  );
};

export default Dog;
