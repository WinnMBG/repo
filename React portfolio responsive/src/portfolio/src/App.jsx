import React from 'react'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/Services/Services'
import Portfol from './components/Portfol/Portfol'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfol/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App