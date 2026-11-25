import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Skill from './Skill.jsx'
import Project from './Project.jsx'
import Internship from './Internship.jsx'
import Education from './Education.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
    <Home />
    <About/>
    <Skill/>
    <Project />
    <Internship/>
    <Education/>
    <Contact/>
    <Footer />
  </StrictMode>,
)
