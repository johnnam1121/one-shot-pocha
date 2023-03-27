import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
import './Footer.css';

function EmailSubmit() {
  const [state, handleSubmit] = useForm("xrgvawda");
  if (state.succeeded) {
    return <p className='footerText'>Your email has been sent successfully!</p>;
  }
  return (
    <div>
      <h4 className='footerText'>Contact Us</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" >
        </label>
        <input
          required
          placeholder='Name'
          className='inputField'
          id="name"
          type="name"
          name="name"
        /><br />
        <label htmlFor="email" >
        </label>
        <input
          required
          placeholder='Email'
          className='inputField'
          id="email"
          type="email"
          name="email"
        /><br />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <textarea
          required
          placeholder='Comments'
          className='inputField'
          id="message"
          name="message"
          style={{ height: '150px' }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        /><br />
        <button className='mb-3 footerbutton' type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default EmailSubmit