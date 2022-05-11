import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

function Hero() {
  const texts = [
    '· General Assembly Graduate ·',
    '· 1st Class Honours Degree in Mechanical Engineering ·',
    '· 5 Years Manufacturing Engineering Experience ·',
    '· Loves to travel ·',
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className='hero-section'>
      <div className='contact-icons-hero'>
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
      <div className='image-and-title'>
        <img
          src='https://res.cloudinary.com/efoulds24/image/upload/v1652282582/EF_-_NYC-removebg_yl6keq.png'
          alt='Edward Foulds'
          className='profile-image'
        />
        <div className='hero-text'>
          <p className='hero-intro'>Hi, I&#39;m</p>
          <h1 className='name-title'>Edward Foulds</h1>
          <h2 className='role-title'>Junior Software Engineer</h2>
          <h3>
            <TextTransition
              text={texts[index % texts.length]}
              springConfig={presets.gentle}
            />
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Hero;
