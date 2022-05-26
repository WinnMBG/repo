import React from 'react'
import './Nav.css'
import {BiHomeAlt, BiBook} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setactiveNav] = useState('#')

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>
      <a href="#about" onClick={() => setactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experiences" onClick={() => setactiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={() => setactiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav