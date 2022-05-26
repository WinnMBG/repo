import React from 'react'
import './Services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What can I do for You ?</h5>
      <h2>Services</h2>

      <div className="services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Developpement</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEV*/}

        <article className='service'>
          <div className="service__head">
            <h3>Creation content</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/*END OF Content creation*/}


        <article className='service'>
          <div className="service__head">
            <h3>Typing Mode</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEV*/}
      </div>
    </section>
  )
}

export default Services