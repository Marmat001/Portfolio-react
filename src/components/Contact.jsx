import React from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'

export const Contact = () => {
  const sendEmailHandler = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_z03iwzt',
        'template_dy075w9',
        e.target,
        `${process.env.REACT_APP_EMAILJS_USER_ID}`
      )
      .then(
        (result) => {
          toast.success('Email successfully sent!')
          e.target.reset()
        },
        (error) => {
          toast.error(error.text)
          toast.error('Unable to send email')
        }
      )
  }
  return (
    <section className='s2'>
      <div className='main-container'>
        <h3 style={{ textAlign: 'center' }}>Send Me A Message</h3>

        <div id='preview-2'>
          <div id='corner-tl' className='corner' />
          <div id='corner-tr' className='corner' />
          <form id='contact-form' onSubmit={sendEmailHandler}>
            <label>Your Name</label>
            <input
              className='input-field name'
              type='text'
              name='name'
              required
            />
            <label>Subject</label>
            <input
              className='input-field subject'
              type='text'
              name='subject'
              required
            />
            <label>Your Email</label>
            <input
              className='input-field email'
              type='email'
              name='email'
              required
            />
            <label>Your Message</label>
            <textarea
              className='input-field message'
              name='message'
              required
              defaultValue={''}
            />
            <input id='submit-btn' type='submit' value='Send Message' />
          </form>
          <div id='corner-br' className='corner' />
          <div id='corner-bl' className='corner' />
        </div>
      </div>
    </section>
  )
}
