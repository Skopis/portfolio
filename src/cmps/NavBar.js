import React from "react"
import Logo from "../imgs/logo.png"
import { NavHashLink } from 'react-router-hash-link';
import $ from "jquery";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavHashLink
                    className="nav-link navbar-brand"
                    exact to="/portfolio/#hero"
                    activeClassName="selected"
                    activeStyle={{ color: '#f7ab00' }}
                >
                    <img className="logo" src={Logo} alt="logo" onClick={() => setTimeout(function(){ $('.nav-link-home').css('color', "#f7ab00") }, 1000) }/>
                </NavHashLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active" onClick={() => {$('.navbar-toggler').attr("aria-expanded","false"); $('.navbar-collapse').removeClass('show'); setTimeout(function(){ $('.nav-link-home').css('color', "#f7ab00") }, 1000) }}>
                            <NavHashLink
                                className="nav-link nav-link-home"
                                exact to="/portfolio/#hero"
                                activeClassName="selected"
                                activeStyle={{ color: '#f7ab00' }}
                            >Home</NavHashLink>
                        </li>
                        <li className="nav-item" onClick={() => {$('.navbar-toggler').attr("aria-expanded","false"); $('.navbar-collapse').removeClass('show'); setTimeout(function(){ $('.nav-link-about').css('color', "#f7ab00") }, 1000)}}>
                            <NavHashLink
                                className="nav-link nav-link-about"
                                exact to="/portfolio/#about"
                                activeClassName="selected"
                                activeStyle={{ color: '#f7ab00' }}
                            >About</NavHashLink>
                        </li>
                        <li className="nav-item" onClick={() => {$('.navbar-toggler').attr("aria-expanded","false"); $('.navbar-collapse').removeClass('show'); setTimeout(function(){ $('.nav-link-specialties').css('color', "#f7ab00") }, 1000)}}>
                            <NavHashLink
                                className="nav-link nav-link-specialties"
                                exact to="/portfolio/#specialties"
                                activeClassName="selected"
                                activeStyle={{ color: '#f7ab00' }}
                            >Specialties</NavHashLink>
                        </li>
                        <li className="nav-item" onClick={() => {$('.navbar-toggler').attr("aria-expanded","false"); $('.navbar-collapse').removeClass('show'); setTimeout(function(){ $('.nav-link-projects').css('color', "#f7ab00") }, 1000)}}>
                            <NavHashLink
                                className="nav-link nav-link-projects"
                                to="/portfolio/#projects"
                                activeClassName="selected"
                                activeStyle={{ color: '#f7ab00' }}
                            >Projects</NavHashLink>
                        </li>
                        <li className="nav-item" onClick={() => {$('.navbar-toggler').attr("aria-expanded","false"); $('.navbar-collapse').removeClass('show'); setTimeout(function(){ $('.nav-link-contact').css('color', "#f7ab00") }, 1000)}}>
                            <NavHashLink
                                className="nav-link nav-link-contact"
                                to="/portfolio/#contact"
                                activeClassName="selected"
                                activeStyle={{ color: '#f7ab00' }}
                            >Contact</NavHashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
