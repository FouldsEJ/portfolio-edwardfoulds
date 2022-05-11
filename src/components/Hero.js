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
      <p className='hero-intro'>Hi, I&#39;m</p>
      <h1 className='name-title'>Edward Foulds</h1>
      <h2 className='role-title'>Junior Software Engineer</h2>
      <h3>
        <TextTransition
          text={texts[index % texts.length]}
          springConfig={presets.gentle}
        />
      </h3>
    </section>
  );
}

export default Hero;
