import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const HomeNav = () => {
    return (
        <ul class="nav">
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
    );
};

export default HomeNav;
