import React from "react";

function About() {
  return (
    <section className="about-section" id="about">
      <h1>About</h1>

      <div className="brand-statement">
        <p>
          I’m a full-stack Software Engineer who thrives on solving complex
          problems and turning ideas into working products — a passion that
          began in engineering and grew into software development. After
          graduating with First-Class Honours in Mechanical Engineering and
          working at Jaguar Land Rover, I retrained through General Assembly’s
          Software Engineering Immersive, where I discovered how much I enjoy
          the challenge and creativity of building software.
        </p>
        <br />
        <p>
          Since then, I’ve delivered complex applications for global
          enterprises, including building a secure backend-for-frontend (BFF)
          layer with flexible authentication flows and developing an AI-powered
          Ad Editor with pixel-perfect rendering and highly interactive WYSIWYG
          editing. I enjoy mastering new technologies quickly, thrive in agile,
          cross-disciplinary teams, and am motivated by creating scalable,
          user-focused solutions that combine technical rigour with creativity.
        </p>
      </div>
      <div className="interests">
        <div className="interest">
          <i className="fa-solid fa-2xl fa-person-running"></i>
          <p>
            I love to play all sports, particularly team sports, and over the
            last few years have become an avid spike ball player. I have also
            competed at regional and national levels in both Hockey and Cricket.
          </p>
        </div>
        <div className="interest">
          <i className="fa-solid fa-2xl fa-earth-americas"></i>
          <p>
            I love travelling and exploring new places. One of my adventures saw
            me complete the Camino de Santiago, a 500 mile walk across Northern
            Spain.
          </p>
        </div>
        <div className="interest">
          <i className="fa-solid fa-2xl fa-music"></i>
          <p>
            I enjoy relaxing with music and play the Trumpet and Violin. I’ve
            also recently started teaching myself the drums.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
