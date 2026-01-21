import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import Chess from './Chess'
import Footer from './Footer'

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Hero />
      <Projects />
      <Chess />
      <Footer />
    </div>
  )
}

export default App
