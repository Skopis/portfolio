import "@lottiefiles/lottie-player";
import Typed from "react-typed";

const About = () => {
    return (
        <div id="about" className="about-container container">
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_i0dv6y4w.json" background="transparent" speed="1" style={{ width: '18.75rem', height: '18.75rem' }} loop autoplay></lottie-player>
            <div className="about-content">
                <p>A passionate Full Stack Developer,</p>
                <p>with experience in writing single-page-applications</p>
                <p>using the latest WEB technologies:</p>
                {/* <p>Node.js, Vue.js, Vuex, React, Redux, React Native and MongoDb.</p> */}
                <Typed className="typed-txt"
                    strings={["Node.js", "Vue.js", "Vuex", "React", "Redux", "React Native", "Mongo-Db"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <p className="par">A fast learner, super organized, with great attention to details</p>
                <p>Very positive with an everything-is-possible 😊 attitude</p>
            </div>
        </div>
    )
}

export default About