import React from "react"
import Typed from "react-typed"
import { NavHashLink } from "react-router-hash-link";

const Hero = () => {
    return (
        <div id="hero" className="hero-container">
            <div className="hero-wrapper">
                <div className="main-info container">
                    <div>
                        <p>Hi,</p>
                        <p>I'm <span>Lian</span></p>
                        <Typed className="typed-txt"
                            strings={["Full Stack Developer"]}
                            typeSpeed={60}
                            backSpeed={120}
                        />

                    </div>
                    <div className="hero-btn-container">
                        <NavHashLink
                            className="nav-link btn"
                            exact to="/#about"
                            activeClassName="selected"
                            activeStyle={{ color: '#f7ab00' }}
                        >
                            <svg width="277" height="62">
                                <defs>
                                    <linearGradient id="grad1">
                                        <stop offset="0%" stopColor="#ffcafe" />
                                        <stop offset="100%" stopColor="#212529" />
                                    </linearGradient>
                                </defs>
                                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                            </svg>
                            <span>Learn More</span>
                        </NavHashLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero




