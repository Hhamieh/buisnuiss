import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Works from './components/Works'
import Contact from './components/Contact'

function App() {
  return (
    <main className="bg-industrial-950 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Contact />
      
      <footer className="py-12 bg-industrial-950 border-t border-industrial-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-industrial-500 text-xs uppercase tracking-widest font-bold">
          <div>&copy; {new Date().getFullYear()} Elite Web Presence. All Rights Reserved.</div>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-industrial-100 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-industrial-100 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
