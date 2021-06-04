import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className='navigation'>
      <input
        type='checkbox'
        className={` ${navOpen ? 'nav-active' : ''} navigation__checkbox`}
        id='navi-toggle'
        onClick={() => setNavOpen(!navOpen)}
      />
      <label htmlFor='navi-toggle' className='navigation__button'>
        <span className='navigation__icon'>&nbsp;</span>
      </label>
      <div className='navigation__background'>&nbsp;</div>
      <nav className='navigation__nav'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <Link
              to='about'
              spy={true}
              href='#about'
              className='navigation__link'
              onClick={() => setNavOpen(!navOpen)}
            >
              <span>01</span>About
            </Link>
          </li>

          <li className='navigation__item'>
            <Link
              to='projects'
              spy={true}
              href='#projects'
              className='navigation__link'
              onClick={() => setNavOpen(!navOpen)}
            >
              <span>02</span>Projects
            </Link>
          </li>

          <li className='navigation__item'>
            <Link
              to='contact-form'
              spy={true}
              href='#contact-form'
              className='navigation__link'
              onClick={() => setNavOpen(!navOpen)}
            >
              <span>03</span>Contact
            </Link>
          </li>
          <li className='navigation__item'>
            <a
              href='/#'
              className='navigation__link'
              onClick={() => setNavOpen(!navOpen)}
            >
              <span>04</span>Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
