import React from "react";
import "../styles/Nav.css"

function Nav(){


    return(
        <nav className="Nav-div">
            <div className="nav-section" id="nav-initials-section">
                <h1>Jared Becker</h1>
            </div>
            <div className="nav-section" id="nav-projects-section">
                <a>Home</a>
                <a>Projects</a>
                <a>Resume</a>
            </div>
            <div className="nav-section" id="nav-social-section">
                <a href="https://www.linkedin.com/in/jaredbeckerse/">
                    <i className="fa-brands fa-linkedin fa-inverse fa-3x"></i>
                </a>
                <a href="https://github.com/Jbecker9">
                    <i className="fa-brands fa-square-github fa-inverse fa-3x"></i>
                </a>
            </div>
            <div className="nav-section" id="nav-contact-section">
                <a className="nav-section-contact-button"> Contact </a>
            </div>
        </nav>
    )
}

export default Nav