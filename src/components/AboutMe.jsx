import React from 'react'
import profilePic from '../img/me.PNG'

const AboutMe = () => {
  return (
    <section className='s2 second' id='about'>
      <div className='main-container'>
        <div className='about-wrapper'>
          <div className='about-me'>
            <h4>Const markus =</h4>
            <p>
              Hello! I'm Markus, a software engineer based in Stockholm, Sweden.
            </p>
            <p>
              I get a kick out of creating things that live on the internet,
              whether that would be applications, websites or anything in
              between.
            </p>
            <p>
              As a tenacious self-taught programmer, I use continuous iteration
              to produce results effectively and frequently improve products.
            </p>
            <hr />
            <h5>
              Here are a few technologies I've been working with recently:
            </h5>
            <div id='preview-shadow'>
              <div id='preview'>
                <div id='corner-tl' className='corner' />
                <div id='corner-tr' className='corner' />
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>MongoDB/Mongoose</li>
                </ul>
                <ul>
                  <li>HTML/(S)CSS</li>
                  <li>TypeScript</li>
                  <li>Google Maps API</li>
                  <li>Heroku/DigitalOcean</li>
                </ul>
                <div id='corner-br' className='corner' />
                <div id='corner-bl' className='corner' />
              </div>
            </div>
          </div>
          <div className='social-links'>
            <img id='profile_pic' src={profilePic} alt='profile-hero' />
            <p>
              <a
                target='_blank'
                href='resume.pdf'
                className='btn btn--white btn--animated btn-resume'
              >
                View Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
