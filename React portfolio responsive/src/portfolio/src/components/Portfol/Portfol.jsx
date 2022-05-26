import React from 'react'
import './Portfol.css';
import IMG1 from '../../assets/images.jpg'
import IMG2 from '../../assets/snk.jpg'
import IMG3 from '../../assets/edz.jpg'
import IMG4 from '../../assets/yon.jpg'
import IMG5 from '../../assets/luffy.jpg'
import IMG6 from '../../assets/manga.jpg'

const Portfol = () => {
  return (
    <section id='portfolio'>
      <h5>My Hobbies</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>NARUTO</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn'>Github</a>
            <a href="https://github.com/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>SHINGEKI NO KYOJIN</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn'>Github</a>
            <a href="https://github.com/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>EDENS ZERO</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn'>Github</a>
            <a href="https://github.com/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>THE BLOODLINE</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn'>Github</a>
            <a href="https://github.com/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>LUFFY</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn'>Github</a>
            <a href="https://github.com/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>MANGA TIME!</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn'>Github</a>
            <a href="https://github.com/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfol