import React from "react";
import styles from "./Dog.module.css";
import { Link } from "react-router-dom";

const Dog = ({ id, name, temperament, img }) => {
  return (
    <div className={styles.dog}>
      <div className={styles.dogBody}>
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
      <div>
        <img src={img} className={styles.dogImg} />
      </div>
      <div>{id && <p className={styles.p}>Temperament: {temperament}</p>}</div>
    </div>
  );
};

export default Dog;
