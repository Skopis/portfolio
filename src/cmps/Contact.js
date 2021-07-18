import ProfilePic from "../imgs/profilepic.jpg";
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
    const [msg, setMsg] = useState('')
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_adgd1mg',
            'template_c2eygue',
            toSend,
            'user_Tjc2AmjzXOjBhNsdJuIut'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMsg(`Sent! I'll get back to you ASAP`)
                setTimeout(() => { setMsg('') }, 3000)
                setToSend({
                    from_name: '',
                    to_name: '',
                    message: '',
                    reply_to: '',
                })
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div id="contact" className="container">
            <h4>Talk to me</h4>
            <div className="contact-container">
                <div>
                    <img className="profile-pic" src={ProfilePic} alt="" />
                </div>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullname">Full name</label>
                        <input type="text"
                            name='from_name'
                            value={toSend.from_name}
                            onChange={handleChange}
                            className="form-control"
                            id="fullname"
                            placeholder="John Smith" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email"
                            name='reply_to'
                            value={toSend.reply_to}
                            onChange={handleChange}
                            className="form-control"
                            id="email"
                            placeholder="name@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Message</label>
                        <textarea className="form-control"
                            name='message'
                            value={toSend.message}
                            onChange={handleChange}
                            id="content"
                            rows="3"
                            placeholder="Write what's on your mind" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                    <p>{msg}</p>
                </form>
            </div>
        </div>
    )
}

export default Contact