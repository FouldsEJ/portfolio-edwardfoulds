import React from 'react';

function Hero() {
  const texts = [
    // Refined senior-focused lines
    '3+ years shipping production web apps',
    'Partner across product, design, and engineering to deliver at pace',
    'Product‑minded; focused on outcomes, UX quality, and maintainability',
    'Performance, reliability, and observability at scale',

    // Original lines (normalized: no decorative bullets)
    'General Assembly Graduate',
    '1st Class Honours Degree in Mechanical Engineering',
    '5 Years Manufacturing Engineering Experience',
    'Travel Enthusiast',
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return; // static for reduced motion users
    const id = setInterval(() => setIndex((i) => (i + 1) % texts.length), 3000);
    return () => clearInterval(id);
  }, [texts.length]);

  return (
    <section className='hero-section'>
      <div className='contact-icons-hero'>
        <a
          href='https://github.com/FouldsEJ'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub profile'
          title='GitHub'
        >
          <i className='fa-brands fa-3x fa-github'></i>
        </a>
        <a
          href='https://linkedin.com/in/edwardfoulds'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn profile'
          title='LinkedIn'
        >
          <i className='fa-brands fa-3x fa-linkedin'></i>
        </a>
        <a href='mailto:edward.j.foulds@gmail.com' aria-label='Send email' title='Email'>
          <i className='fa-solid  fa-3x fa-envelope'></i>
        </a>
      </div>
      <div className='image-and-title'>
        <img
          src='https://res.cloudinary.com/efoulds24/image/upload/v1652282582/EF_-_NYC-removebg_yl6keq.png'
          alt='Edward Foulds'
          className='profile-image'
        />
        <div className='hero-text'>
          <p className='hero-intro'>Hi, I&#39;m</p>
          <h1 className='name-title'>Edward Foulds</h1>
          <h2 className='role-title'>Senior Software Engineer</h2>
          <h3 className='hero-rotator'>
            <span className='rotator' aria-live='polite'>
              {texts.map((t, i) => (
                <span key={t} className={i === index ? 'active' : ''}>{t}</span>
              ))}
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Hero;

