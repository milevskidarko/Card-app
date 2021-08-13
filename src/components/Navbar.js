import React from "react";

const Navbar = () => (
    <div className="navbar">
        <ul>
            <li>
                <a href={'http://google.com'}>Menu item</a>
            </li>
            <li>
                <a href={'http://google.com'}>Menu item</a>
            </li>
            <li>
                <a href={'http://google.com'}>Menu item</a>
            </li>
        </ul>
        <ul>
            <li>
                <a id='logo' href={'http://google.com'}>LOGO</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href={'http://google.com'}>Login</a>
            </li>
            <li>
                <a id='register' href={'http://google.com'}>Register</a>
            </li>
        </ul>
    </div>
);

export default Navbar;


