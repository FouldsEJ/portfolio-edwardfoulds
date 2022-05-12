import React from 'react';

function About() {
  return (
    <section className='about-section' id='about'>
      <h1>About</h1>

      <div className='brand-statement'>
        <p>
          After graduating with first class honours in Mechanical Engineering, I
          worked at Jaguar Land Rover and developed my engineering experience
          within the manufacturing industry. During this time, I worked closely
          with the Software Development teams deploying new technology into new
          cars. This built on my previous experience of working with C++ at
          University.
        </p>
        <br />
        <p>
          Driven by my experiences with the Software Development teams at JLR, I
          enrolled in General Assembly’s Software Engineering Immersive course
          to develop my skills further. With an adaptable and reflective
          approach to learning, I excelled and loved the program, providing me
          with an excellent foundation for full stack development. Able to work
          under pressure, positively collaborate with people and armed with a
          keen sense of humour, I am now looking for opportunities to join a
          team as a Junior developer, eager to embrace responsibility and
          further develop my existing leadership skills.
        </p>
      </div>
      <div className='interests'>
        <div className='interest'>
          <i className='fa-solid fa-2xl fa-person-running'></i>
          <p>
            I love to play all sports, particularly team sports, and over the
            last few years have become an avid spike ball player. I have also
            competed at regional and national levels in both Hockey and Cricket.
          </p>
        </div>
        <div className='interest'>
          <i className='fa-solid fa-2xl fa-earth-americas'></i>
          <p>
            I love travelling and exploring new places. One of my adventures saw
            me complete the Camino, a 500 mile walk across Northern Spain
          </p>
        </div>
        <div className='interest'>
          <i className='fa-solid fa-2xl fa-music'></i>
          <p>
            I enjoy relaxing with music and play the Trumpet and Violin. I’ve
            also recently started teaching myself the drums
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
