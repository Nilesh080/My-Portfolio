import React, {useRef} from 'react';

import './css/contact_me.css';
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

import emailjs from 'emailjs-com';

class ContactMe extends React.Component {
    constructor()
    {
        super();
        this.form = React.createRef();
    }

    render() {
        const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, this.form.current, process.env.REACT_APP_USER_ID);
            e.target.reset();
        }

        return(
            <section id="contact">
                <h2>Get In Touch</h2>
                <h1>Contact Me</h1>

                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <MdOutlineEmail className="contact__option-icon" />
                            <h2>Email</h2>
                            <h3>nileshmishra080@gmail.com</h3>
                            <a className="btn" href="https://mail.google.com/mail/u/0/?source=mailto&to=nileshmishra080@gmail.com&fs=1&tf=cm" target="_blank">Send Email</a>
                        </article>
                        <article className="contact__option">
                            <BsLinkedin className="contact__option-icon" />
                            <h2>LinkedIn</h2>
                            <h3>nilesh-mishra-167b74234</h3>
                            <a className="btn" href="https://www.linkedin.com/in/nilesh-mishra-167b74234/" target="_blank">Connect With Me</a>
                        </article>
                        <article className="contact__option">
                            <BsWhatsapp className="contact__option-icon" />
                            <h2>Whatsapp</h2>
                            <h3>+91-9004742917</h3>
                            <a className="btn" href="https://api.whatsapp.com/send?phone=919004742917" target="_blank">Send Message</a>
                        </article>
                    </div>
                    <form ref={this.form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name="from_name" required />
                        <input type="text" placeholder="Email" name="from_email" required />
                        <textarea placeholder="Message" name="message" rows="7" required />
                        <input className="btn" type="submit" value="Send Message" />
                    </form>
                </div>
            </section>
        );
    }
}

export default ContactMe;