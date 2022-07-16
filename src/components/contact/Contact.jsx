import React from 'react';
import './Contact.css';

import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine, RiWhatsappFill} from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pbn9kp9', 'template_3e830qs', form.current, 'Klk2jP8UHYcJLKXJw')

    e.target.reset();
  };

  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>johnson.davideniola12@gmail.com</h5>
            <a href="mailto:johnson.davideniola12@gmail.com" target = '_blank' rel="noreferrer">Send a Message</a>  
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Johnson David</h5>
            <a href="https://web.facebook.com/" target = '_blank' rel="noreferrer">Send a Message</a>  
          </article>

          <article className="contact__option">
            <RiWhatsappFill className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+1234567890</h5>
            <a href="https://api.whatsapp.com/send?phone+2348078754215" target = '_blank' rel="noreferrer">Send a Message</a>  
          </article>  
        </div>  

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name = 'email' placeholder = 'Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Mesage</button>
        </form>
      </div>
    </section>
  )
}


export default Contact;