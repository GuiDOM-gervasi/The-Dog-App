import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Pic from "../../img/india.png"
import { StyledNav } from './StyledNav';

export default function NavBar() {
    return (
        <StyledNav>
            <div>
                <Link to="/">
                <img src={Pic} width="50" height="50" alt="" />
                </Link>
            </div>
                <ul className="list">
                    <li className="listitem">
                        <NavLink to="/dogs" className="listitema">Home</NavLink>
                        <NavLink exact to="/dogs/add" className="listitema">Add Dog</NavLink>
                    </li>
                </ul>
        </StyledNav>
    )
}