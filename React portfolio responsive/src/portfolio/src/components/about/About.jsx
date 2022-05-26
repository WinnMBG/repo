import React from 'react'
import './About.css';
import ME from '../../assets/FT.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Voulez-vous en savoir plus ?</h5>
      <h2>A propos de moi</h2>

      <div className="container_about__me">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>Nothing for the moment...</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Nothing for the moment...</small>
            </article>
            
            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projets</h5>
              <small>10+ Scolaire</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam hic earum iusto tempora. Laborum voluptate possimus vel neque assumenda! Debitis repudiandae facilis error harum dolores. Aut et inventore nam eos!
          </p>
          <a href='#contact' className='btn btn-primary'>Let's talk together!</a>
        </div>
      </div> 
    </section>
  )
}

export default About