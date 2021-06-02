import React, { useState, useEffect } from 'react'
import AboutMe from './components/AboutMe'
import { Contact } from './components/Contact'
import IntroSection from './components/IntroSection'
import Navigation from './components/Navigation'
import Projects from './components/Projects'

const HomePage = () => {
  const [colorTheme, setColorTheme] = useState('theme-red')

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color')

    if (currentThemeColor) {
      setColorTheme(currentThemeColor)
    }
  }, [])

  const handleClick = (theme) => {
    setColorTheme(theme)
    localStorage.setItem('theme-color', theme)
  }
  return (
    <div className={`${colorTheme}`}>
      <Navigation />
      <IntroSection handleClick={handleClick} colorTheme={colorTheme} />
      <AboutMe />
      <Projects />
      <Contact />
      <footer className='s1 footer'>
        <div className='main-container footer-container'>
          <h6 className='maker'>Designed &amp; built by Markus Matuszczak</h6>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
