import React from "react";
import {Element, Link} from "react-scroll";

import "./header.css";


export const Header = () => {
    return (
        <Element name="home" className="header">
            <div className="header1">
                <p>I'm Elena Deligio <span className="highlight">Front-end</span> Developer</p>
            </div>
            <div className="header2">
                <p>And I am eager to contribute my enthusiasm and learn collaboratively on projects that prioritize a high standard of design and technical proficiency.</p>
            </div>

            <Link className="button" to="contacts" smooth={true} duration={500}>
                <p>CONTACT</p>
            </Link>

        </Element>
    );
};





