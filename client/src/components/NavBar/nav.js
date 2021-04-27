import React from 'react';
import { NavLink } from 'react-router-dom';
import Pic from "../../img/india.png"
import styles from './nav.module.css';

export default function NavBar() {
    return (
        <header className={styles.navbar}>
            <div>
                <img id="logoHenry" src={Pic} width="50" height="50" alt="" />
            </div>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.listitem}>
                        <NavLink to="/dogs" className={styles.listitema}>Home</NavLink>
                        <NavLink exact to="/dogs/add" className={styles.listitema}>Add Dog</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}