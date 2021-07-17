import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return (
        <div className="footer-container">
            <footer className="text-center text-white">
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <div className="contact-details">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lian.skopis@gmail.com"
                        target="_blank" rel="noreferrer">lian.skopis@gmail.com</a>
                        <p>+972-(0)506-932-038</p>
                    </div>
                    <div>
                        <a
                            className="btn btn-primary m-1"
                            style={{ backgroundColor: '#0082ca' }}
                            href="https://www.linkedin.com/in/lian-skopis-057313135/"
                            target="_blank" rel="noreferrer"
                            role="button"
                        ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a
                            className="btn btn-primary m-1"
                            style={{ backgroundColor: '#333333' }}
                            href="https://github.com/Skopis"
                            target="_blank" rel="noreferrer"
                            role="button"
                        ><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer