import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/Home'
import Services from './components/Services'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import PrivacyPolicy from './components/PrivacyPolicy'
import RefundPolicy from './components/RefundPolicy'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/RefundPolicy" element={<RefundPolicy />} />
      </Routes>
    </Router>
  )
}

export default App