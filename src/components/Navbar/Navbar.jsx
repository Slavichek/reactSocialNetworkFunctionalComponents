import React from "react";
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.navList}>
                <li className={classes.navItem}>
                    {/* <a href="/profile" className={classes.navLink}>profile</a> */}
                    <NavLink to="/profile" className={classes.navLink} activeClassName={classes.active}>profile</NavLink>
                </li>
                <li className={classes.navItem}>
                    <NavLink to="/dialogs" className={classes.navLink} activeClassName={classes.active}>messages</NavLink>
                </li>
                <li className={classes.navItem}>
                    <NavLink to="/news" className={classes.navLink} activeClassName={classes.active}>news</NavLink>
                </li>
                <li className={classes.navItem}>
                    <NavLink to="/music" className={classes.navLink} activeClassName={classes.active}>music</NavLink>
                </li>
            </ul>
        </nav>

    )
}
export default Navbar;


