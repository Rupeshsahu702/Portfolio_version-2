import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Journey from '../components/Journey'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    
    <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home