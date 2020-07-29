import React from "react";
import classes from './header.module.css'
const Header = () => {
    return (
        <header className={classes.header}>
            <a href="#">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUy5SB6-UwbOVQKfvQouYO6PfYq7F-Hj67oZ8V0GDlDHqL_Il&s" alt='logo'
                ></img>
            </a>
        </header>
    )
}
export default Header;