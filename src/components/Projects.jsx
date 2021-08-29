import React from 'react'
import { Link } from 'react-router-dom'

import vroom from '../img/vroom.png'
import vroom2 from '../img/vroom2.png'
import gamedatabase from '../img/gamedatabase.png'
import gamedatabase2 from '../img/gamedatabase2.png'
import vacationeer from '../img/vacationeer.png'
import vacationeer2 from '../img/vacationeer2.png'
import noterJS from '../img/cli.png'
import noterJS2 from '../img/cli2.png'
import tourify from '../img/tourify.png'
import tourify2 from '../img/tourify2.png'
import amplified from '../img/amplified.png'
import amplified2 from '../img/amplified2.png'

const Projects = () => {
  return (
    <section className='s1' id='projects'>
      <div className='main-container'>
        <h3 style={{ textAlign: 'center' }}>Some of the things I've built</h3>
        <div className='post-wrapper'>
          <div className='post'>
            <div className='post__side post__side--front'>
              <img className='thumbnail' src={vroom} alt='car-preview' />
              <div className='post-preview'>
                <h6 className='post-title'>Vroom Car Shop</h6>
                <p className='post-intro'>
                  A fullstack ecommerce type website where you can inquire high
                  end cars.
                </p>
                <div>
                  <button className='tech-btn'>React</button>
                  <button className='tech-btn'>Node.js</button>
                  <button className='tech-btn'>Express</button>
                  <button className='tech-btn'>MongoDB</button>
                  <button className='tech-btn'>Framer Motion</button>
                  <button className='tech-btn'>EmailJS</button>
                  <button className='tech-btn'>Bootstrap</button>
                  <button className='tech-btn'>CSS</button>
                </div>
                <p className='read-more'>Hover for more info</p>
              </div>
            </div>
            <div className='post__side post__side--back post__side--back-1'>
              <img className='thumbnail-2' src={vroom2} alt='car-preview' />
              <Link to='/projects/vroom' className='btn--infopage'>
                Detailed Information
              </Link>

              <a
                target='/_blank'
                href='https://vroomshop.herokuapp.com'
                className='btn--infopage'
              >
                View Website Directly
              </a>
            </div>
          </div>
          <div className='post'>
            <div className='post__side post__side--front'>
              <img
                className='thumbnail'
                src={gamedatabase}
                alt='gamedatabase-preview'
              />
              <div className='post-preview'>
                <h6 className='post-title'>Game Database</h6>
                <p className='post-intro'>
                  Explore the latest, most popular and upcoming games from a
                  single website.
                </p>
                <div>
                  <button className='tech-btn'>React</button>
                  <button className='tech-btn'>RAWG Database API</button>
                  <button className='tech-btn'>Framer Motion</button>
                  <button className='tech-btn'>Styled Components</button>
                  <button className='tech-btn'>ParticleJS</button>
                </div>
                <p className='read-more'>Hover for more info</p>
              </div>
            </div>
            <div className='post__side post__side--back post__side--back-1'>
              <img
                className='thumbnail-2'
                src={gamedatabase2}
                alt='gamedatabase-preview'
              />
              <Link to='/projects/game-database' className='btn--infopage'>
                Detailed Information
              </Link>

              <a
                target='/_blank'
                href='https://gamedatabase.netlify.app'
                className='btn--infopage'
              >
                View Website Directly
              </a>
            </div>
          </div>
          <div className='post'>
            <div className='post__side post__side--front'>
              <img
                className='thumbnail'
                src={vacationeer}
                alt='vacationeer-preview'
              />
              <div className='post-preview'>
                <h6 className='post-title'>Vacationeer</h6>
                <p className='post-intro'>
                  Fullstack MERN marketplace hotel booking app with stripe
                  integration.
                </p>
                <div>
                  <button className='tech-btn'>React</button>
                  <button className='tech-btn'>Google Maps API</button>
                  <button className='tech-btn'>Node.js</button>
                  <button className='tech-btn'>Express</button>
                  <button className='tech-btn'>MongoDB</button>
                  <button className='tech-btn'>Bootstrap</button>
                  <button className='tech-btn'>Ant Design</button>
                  <button className='tech-btn'>CSS</button>
                </div>
                <p className='read-more'>Hover for more info</p>
              </div>
            </div>
            <div className='post__side post__side--back post__side--back-1'>
              <img
                className='thumbnail-2'
                src={vacationeer2}
                alt='vacationeer-preview'
              />
              <Link to='/projects/vacationeer' className='btn--infopage'>
                Detailed Information
              </Link>

              <a
                target='/_blank'
                href='https://vacationeer.herokuapp.com'
                className='btn--infopage'
              >
                View Website Directly
              </a>
            </div>
          </div>
          <div className='post'>
            <div className='post__side post__side--front'>
              <img className='thumbnail' src={noterJS} alt='noterjs-preview' />
              <div className='post-preview'>
                <h6 className='post-title'>NoterJS CLI</h6>
                <p className='post-intro'>
                  A CLI that allows for a development environment inside the
                  browser.
                </p>
                <div>
                  <button className='tech-btn'>React</button>
                  <button className='tech-btn'>Typescript</button>
                  <button className='tech-btn'>Bulma</button>
                  <button className='tech-btn'>CSS</button>
                  <button className='tech-btn'>ESBuild</button>
                  <button className='tech-btn'>ImmerJS</button>
                  <button className='tech-btn'>Lerna</button>
                </div>
                <p className='read-more'>Hover for more info</p>
              </div>
            </div>
            <div className='post__side post__side--back post__side--back-1'>
              <img
                className='thumbnail-2'
                src={noterJS2}
                alt='noterjs-preview'
              />
              <Link to='/projects/noterjs' className='btn--infopage'>
                Detailed Information
              </Link>
            </div>
          </div>
          <div className='post'>
            <div className='post__side post__side--front'>
              <img className='thumbnail' src={tourify} alt='tourify-preview' />
              <div className='post-preview'>
                <h6 className='post-title'>Tourify</h6>
                <p className='post-intro'>
                  Fullstack MERN w/ Firebase travel agency project offering
                  global tours.
                </p>
                <div>
                  <button className='tech-btn'>React</button>
                  <button className='tech-btn'>Firebase</button>
                  <button className='tech-btn'>Node.js</button>
                  <button className='tech-btn'>Express</button>
                  <button className='tech-btn'>MongoDB</button>
                  <button className='tech-btn'>Bootstrap</button>
                  <button className='tech-btn'>Ant Design</button>
                  <button className='tech-btn'>CSS</button>
                </div>
                <p className='read-more'>Hover for more info</p>
              </div>
            </div>
            <div className='post__side post__side--back post__side--back-1'>
              <img
                className='thumbnail-2'
                src={tourify2}
                alt='tourify-preview'
              />
              <Link to='/projects/tourify' className='btn--infopage'>
                Detailed Information
              </Link>

              <a
                target='/_blank'
                href='https://tourifyshop.herokuapp.com'
                className='btn--infopage'
              >
                View Website Directly
              </a>
            </div>
          </div>
          <div className='post'>
            <div className='post__side post__side--front'>
              <img
                className='thumbnail'
                src={amplified}
                alt='amplified-preview'
              />
              <div className='post-preview'>
                <h6 className='post-title'>Amplified Music Library</h6>
                <p className='post-intro-2'>
                  Amplified is a music app with the expected functionality:
                  Play/Pause, Skip/Back and a drag handler to change position in
                  song.
                </p>
                <div>
                  <button className='tech-btn'>React</button>
                  <button className='tech-btn'>SCSS</button>
                  <button className='tech-btn'>Font Awesome Icons</button>
                </div>
                <p className='read-more'>Hover for more info</p>
              </div>
            </div>
            <div className='post__side post__side--back post__side--back-1'>
              <img
                className='thumbnail-2'
                src={amplified2}
                alt='amplified-preview'
              />
              <Link
                to='/projects/amplified-music-player'
                className='btn--infopage'
              >
                Detailed Information
              </Link>

              <a
                target='/_blank'
                href='https://amplified-sound.netlify.app'
                className='btn--infopage'
              >
                View Website Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
