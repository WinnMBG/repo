import React from 'react'
import CV from '../../assets/CVMASTERINFO.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Téléchargez mon CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk together!</a>
    </div>
  )
}

export default CTA