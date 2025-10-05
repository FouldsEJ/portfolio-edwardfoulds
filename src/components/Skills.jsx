import React from 'react';

function Skills() {
  return (
    <section className='skills-wrapper' id='skills'>
      <h1>Skills</h1>

      <div className='grid-container'>
        <div className='icon'>
          <i className='devicon-html5-plain'></i>
          <p>HTML5</p>
        </div>

        <div className='icon'>
          <i className='devicon-css3-plain'></i>
          <p>CSS</p>
        </div>
        <div className='icon'>
          <i className='devicon-sass-original'></i>
          <p>Sass</p>
        </div>
        <div className='icon'>
          <i className='devicon-bulma-plain'></i>
          <p>Bulma</p>
        </div>
        <div className='icon'>
          <i className='devicon-tailwindcss-original-wordmark'></i>
          <p>Tailwind</p>
        </div>
        <div className='icon'>
          <i className='devicon-javascript-plain'></i>
          <p>JavaScript</p>
        </div>
        <div className='icon'>
          <i className='devicon-react-original'></i>
          <p>React</p>
        </div>
        <div className='icon'>
          <i className='devicon-mongodb-plain-wordmark'></i>
          <p>MongoDB</p>
        </div>
        <div className='icon'>
          <i className='devicon-postgresql-plain'></i>
          <p>PostgreSQL</p>
        </div>
        <div className='icon'>
          <i className='devicon-git-plain'></i>
          <p>Git</p>
        </div>
        <div className='icon'>
          <i className='devicon-github-original'></i>
          <p>GitHub</p>
        </div>
        <div className='icon'>
          <i className='devicon-django-plain'></i>
          <p>Django</p>
        </div>
        <div className='icon'>
          <i className='devicon-express-original'></i>
          <p>Express</p>
        </div>
        <div className='icon'>
          <i className='devicon-nodejs-plain'></i>
          <p>Node.js</p>
        </div>
        <div className='icon'>
          <i className='devicon-python-plain'></i>
          <p>Python</p>
        </div>
        <div className='icon'>
          <i className='devicon-vscode-plain'></i>
          <p>VSCode</p>
        </div>
        <div className='icon' id='trello'>
          <i className='devicon-trello-plain'></i>
          <p>Trello</p>
        </div>
        <div className='icon' id='heroku'>
          <i className='devicon-heroku-original'></i>
          <p>Heroku</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
