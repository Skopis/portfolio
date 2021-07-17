import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//logos
import jsLogo from '../imgs/js.png'
import htmlLogo from '../imgs/html.png'
import cssLogo from '../imgs/css.png'
import vueLogo from '../imgs/vue.png'
import reactLogo from '../imgs/react.png'
import reactNativeLogo from '../imgs/reactnative.png'
import nodeLogo from '../imgs/node.png'
import mongoLogo from '../imgs/mongo.png'
import sassLogo from '../imgs/sass.png'
import bootstrapLogo from '../imgs/bootstrap.png'
import materialuiLogo from '../imgs/materialui.png'


const Specialties = () => {

    useEffect(() => {
        AOS.init({
            // duration : 5000
        });
    }, []);

    return (
        <div id="specialties" className="specialties-container container">

            <div className="specialties-section" >
                <div className="card" data-aos="fade-right" data-aos-duration="3000">
                    <img className="card-img-top" src={jsLogo} alt="javascript" />
                    <div className="card-body">
                        <p className="card-text">JavaScript</p>
                    </div>
                </div>
                <div className="card" data-aos="fade-right" data-aos-duration="3000">
                    <img className="card-img-top" src={htmlLogo} alt="html" />
                    <div className="card-body">
                        <p className="card-text">HTML</p>
                    </div>
                </div>
                <div className="card" data-aos="fade-right" data-aos-duration="3000">
                    <img className="card-img-top" src={cssLogo} alt="css" />
                    <div className="card-body">
                        <p className="card-text">CSS</p>
                    </div>
                </div>
            </div>

            <div className="specialties-section" >
                <div className="card" data-aos="fade-left" data-aos-duration="3000">
                    <img className="card-img-top" src={vueLogo} alt="vue" />
                    <div className="card-body">
                        <p className="card-text">Vue</p>
                    </div>
                </div>
                <div className="card" data-aos="fade-left" data-aos-duration="3000">
                    <img className="card-img-top" src={reactLogo} alt="react" />
                    <div className="card-body">
                        <p className="card-text">React</p>
                    </div>
                </div>
                <div className="card" data-aos="fade-left" data-aos-duration="3000">
                    <img className="card-img-top" src={reactNativeLogo} alt="react native" />
                    <div className="card-body">
                        <p className="card-text">React Native</p>
                    </div>
                </div>
            </div>

            <div className="specialties-section">
                <div className="card" data-aos="fade-right" data-aos-duration="3000">
                    <img className="card-img-top" src={nodeLogo} alt="node js" />
                    <div className="card-body">
                        <p className="card-text">Node JS</p>
                    </div>
                </div>
                <div className="card" data-aos="fade-right" data-aos-duration="3000">
                    <img className="card-img-top" src={mongoLogo} alt="mongo db" />
                    <div className="card-body">
                        <p className="card-text">Mongo-DB</p>
                    </div>
                </div>
            </div>

            <div className="specialties-section">
                <div className="card" data-aos="fade-left" data-aos-duration="3000">
                    <img className="card-img-top" src={sassLogo} alt="sass" />
                    <div className="card-body">
                        <p className="card-text">SASS</p>
                    </div>
                </div>
                <div className="card" data-aos="fade-left" data-aos-duration="3000">
                    <img className="card-img-top" src={bootstrapLogo} alt="bootstrap" />
                    <div className="card-body">
                        <p className="card-text">Bootstrap</p>
                    </div>
                </div>
                <div className="card" data-aos="fade-left" data-aos-duration="3000">
                    <img className="card-img-top" src={materialuiLogo} alt="matireal ui" />
                    <div className="card-body">
                        <p className="card-text">Material UI</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Specialties