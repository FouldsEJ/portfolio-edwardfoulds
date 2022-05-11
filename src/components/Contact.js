import React from 'react';

function Contact() {
  return (
    <section className='contact-wrapper'>
      <h2>Contact</h2>
      <p>
        Please feel free to check out my GitHub, LinkedIn or get in tough with
        me for more information!
      </p>
      <div className='contact-icons'>
        <a href='https://github.com/FouldsEJ'>
          <i className='fa-brands fa-3x fa-github'></i>
        </a>
        <a
          href='https://linkedin.com/in/edwardfoulds
'
        >
          <i className='fa-brands fa-3x fa-linkedin'></i>
        </a>
        <a href='mailto:edward.j.foulds@gmail.com'>
          <i className='fa-solid  fa-3x fa-envelope'></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
