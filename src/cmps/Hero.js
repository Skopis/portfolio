import React from "react"
import Typed from "react-typed"

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-wrapper">
                <div className="main-info container">
                    <p>Hi,</p>
                    <p>I'm <span>Lian</span></p>
                    <Typed className="typed-txt"
                        strings={["Full Stack Developer"]}
                        typeSpeed={60}
                        backSpeed={120}
                    // loop
                    />
                    {/* <button type="button" class="btn btn-dark">Learn More</button> */}

                    < link href='https://fonts.googleapis.com/css?family=Lato|Roboto:400,900' rel='stylesheet' type='text/css' />
                    <div class="hero-btn-container">
                        <a href="http://marcel-pirnay.be/" class="btn">
                            <svg width="277" height="62">
                                <defs>
                                    <linearGradient id="grad1">
                                        <stop offset="0%" stop-color="#ffcafe" />
                                        <stop offset="100%" stop-color="#212529" />
                                    </linearGradient>
                                </defs>
                                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                            </svg>
                            <span>Learn More</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero




