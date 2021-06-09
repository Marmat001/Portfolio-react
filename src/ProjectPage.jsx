import React, { useEffect, useState } from 'react'
import projects from './projectDetails.jsx'

const ProjectPage = ({ match }) => {
  const [loading, setLoading] = useState(true)
  const project = projects.find((p) => p.slugName === match.params.project)
  // const images = project.imageGallery
  const imageDescription = project.imageDescription

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 700)
  }, [])

  return (
    <section
      className='s2'
      style={{ backgroundColor: '#111921', minHeight: '100vh' }}
    >
      {loading ? (
        <h1 style={{ textAlign: 'center' }}>Loading...</h1>
      ) : (
        <div className='project-page'>
          <h1>{project.name}</h1>
          <div className='img-container'>
            <img src={project.image} alt='project-hero' />
          </div>

          <div className='tech-gif'>
            {project.link !== '' && (
              <div className='gif-container'>
                <img
                  className='project-gif'
                  src={project.image2}
                  alt='project-gif'
                />
                <h3>Direct Link To Website</h3>
                <a target='/_blank' href={project.link}>
                  <h4>{project.link}</h4>
                </a>
              </div>
            )}
            <div className='tech-container'>
              <h2>Technologies used </h2>
              <div className='tech-stack'>
                {project.techStack.map((p) => (
                  <img key={p} src={p} alt='project-hero' />
                ))}
              </div>
            </div>
          </div>

          <div className='description'>
            <h2>Work Flow / Description</h2>
            <p>{project.description}</p>
            <ul>
              {project.functionality.map((functions) => (
                <li key={functions}>{functions}</li>
              ))}
            </ul>
          </div>

          <hr />

          <h2>Image Gallery</h2>
          <hr />

          <div className='img-gallery'>
            {project.imageGallery.map((image, i) => (
              <div className='img-container' key={image}>
                <h3>{imageDescription[i]}</h3>
                <img src={image} alt='description' />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectPage

// {project.imageGallery.map((image) => (
//   <div className='img-container'>
//     <img src={image} alt='description' />
//   </div>
// ))}
