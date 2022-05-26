import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/1634294951988.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour, Je suis</h5>
        <h1>Winn-Elie Mbouranga</h1>
        <h5 className="text-light">Developpeur en devenir...</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>  
    </header>
  )
}

export default Header