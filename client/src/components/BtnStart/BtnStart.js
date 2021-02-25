import React from "react"
import {NavLink} from "react-router-dom"
const BtnStart = () => {
    return (
        <div>
            <h1>Welcome to Henry Dogs</h1>
            <NavLink exact to="/dogs" >
            <button>
                Go to home
            </button>
            </NavLink>
        </div>
    )
}

export default BtnStart