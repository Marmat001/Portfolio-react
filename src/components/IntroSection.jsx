import React from 'react'
import { Link } from 'react-scroll'

const IntroSection = ({ handleClick, colorTheme }) => {
  return (
    <section className='s1 first'>
      <div className='main-container'>
        <div className='greeting-wrapper'>&nbsp;</div>
        <div className='intro-wrapper'>
          <div className='nav-wrapper'>
            <div className='dots-wrapper'>
              <div id='dot-1' className='browser-dot' />
              <div id='dot-2' className='browser-dot' />
              <div id='dot-3' className='browser-dot' />
            </div>
            <div id='theme-options-wrapper'>
              <div
                id='theme-red'
                className={`${
                  colorTheme === 'theme-red' ? 'active' : ''
                } theme-dot`}
                onClick={() => handleClick('theme-red')}
              />
              <div
                id='theme-blue'
                className={`${
                  colorTheme === 'theme-blue' ? 'active' : ''
                } theme-dot`}
                onClick={() => handleClick('theme-blue')}
              />
              <div
                id='theme-black'
                className={`${
                  colorTheme === 'theme-black' ? 'active' : ''
                } theme-dot`}
                onClick={() => handleClick('theme-black')}
              />
              <div
                id='theme-white'
                className={`${
                  colorTheme === 'theme-white' ? 'active' : ''
                } theme-dot`}
                onClick={() => handleClick('theme-white')}
              />
            </div>
          </div>
          <div className='intro-column'>
            <span className='heading-primary-main'>Markus Matuszczak</span>
            <span className='heading-primary-sub'>
              Front End Developer With Full Stack Experience
            </span>
            <Link
              to='contact-form'
              spy={true}
              className='btn btn--white btn--animated'
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
