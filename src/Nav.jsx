import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Nav() {
    return (
        <ul>
            <li>
                {" "}
                <NavLink className="nav-link" to="/products">
                    PRODUCTS
                </NavLink>
            </li>
            <li>
                {" "}
                <NavLink className="nav-link" to="/">
                    HONE
                </NavLink>
            </li>
        </ul>
    );
}
