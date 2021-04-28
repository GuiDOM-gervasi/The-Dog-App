import React from "react"
import {NavLink} from "react-router-dom"
import styles from "./start.module.css"
import foto from "../../img/india.png"
const BtnStart = () => {
    return (
        <div className={styles.start}>
            <h1>Welcome</h1>
            <NavLink exact to="/dogs" >
            <button className={styles.button}>
                Go to home
            </button>
            </NavLink>
            <img className={styles.img} src={foto} alt="mydog"/>
        </div>
    )
}

export default BtnStart