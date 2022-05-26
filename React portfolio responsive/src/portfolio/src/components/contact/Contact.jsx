import React from 'react'
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi'
import {} from 'react-icons/'
import {BsWhatsapp, BsLinkedin} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className="all">
    <section id='contact'>
      <h5>Restons en Contact</h5>
      <h2>Contact Me</h2>

      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>winn77.m@hotmail.com</h5> 
            <a href="mailto:winn77.m@hotmail.com" target='_blank'>Send Message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Winn-Elie MBOURANGA</h5> 
            <a href="https://www.linkedin.com/in/winn-elie-mbouranga/" target='_blank'>Send Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+33781975944</h5> 
            <a href="https://api.whatsapp.com/send?phone=+33781975944" target='_blank'>Send Message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form action="">
          <input type="text" name="name" placeholder='Your Name' required />
          <input type="email" name='email' placeholder='your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Send a Message</button>
        </form>
      </div>
    </section>
    </div>
  )
}

export default Contact