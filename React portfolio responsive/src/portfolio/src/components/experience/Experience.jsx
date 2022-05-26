import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experiences'>
      <h5>Mes Skills</h5>
      <h2>Experience</h2>
      <div className='experience__container'>
        <div className="experiences__frontend">
          <h3>Frontend Dev</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>HTML</h4>
                <small className='text-light'>Intermédiaire</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>CSS</h4>
                <small className='text-light'>Intermédiaire</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>JavaScript</h4>
                <small className='text-light'>Débutant</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Java</h4>
                <small className='text-light'>Intermédiaire</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>C</h4>
                <small className='text-light'>Avancé</small>
            </article>
          </div>
        </div>
        {/*FIN DU FRONTEND*/}
        <div className="experience__backend">
          <h3>Backend Dev</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Node Js</h4>
                <small className='text-light'>Débutant</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>MongoDB</h4>
                <small className='text-light'>Débutant</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>NeDB</h4>
                <small className='text-light'>Débutant</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>MySQL</h4>
                <small className='text-light'>Débutant</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Express</h4>
                <small className='text-light'>Débutant</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience