import React from 'react';

function Projects() {
  return (
    <section id='projects' className='project-wrapper'>
      <h1>Projects</h1>
      <div className='projects-display-flex'>
        <div className='row-one'>
          <div className='project-card'>
            <div className='project-card-inner'>
              <div className='project-front'>
                <img
                  src='https://res.cloudinary.com/efoulds24/image/upload/v1652205515/Screenshot_2022-05-10_at_13.58.16_fea6kq.png'
                  alt='SpikeSquad'
                />
              </div>
              <div className='project-back'>
                <h2>SpikeSquad</h2>
                <h4 className='group-size'>Solo Project</h4>
                <h4 className='time-length'>Timeframe: 7days</h4>
                <div className='project-card-links'>
                  <a
                    href='https://google.com'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='fa-solid fa-link'></i>
                  </a>
                  <a
                    href='https://github.com/FouldsEJ/ga-project-4-frontend'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='fa-brands fa-github'></i>
                  </a>
                </div>
                <p>
                  A full-stack app with a backend routed in Python, Django and
                  PostgreSQL, connected to a frontend built using React and
                  Tailwind for styling. The app is designed to aid spike ball
                  players in connecting with fellow players to share spike ball
                  stories and organise meet ups. It features a news feed and in
                  app chat, as well as Login and Register functionality using
                  JWT.
                </p>
                <div className='project-card-skills'>
                  <i className='devicon-python-plain'></i>
                  <i className='devicon-django-plain'></i>
                  <i className='devicon-react-original'></i>
                  <i className='devicon-postgresql-plain'></i>
                  <i className='devicon-javascript-plain'></i>
                  <i className='devicon-sass-original'></i>
                  <i className='devicon-github-original'></i>
                  <i className='devicon-git-plain'></i>
                  <i className='devicon-heroku-original'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='project-card'>
            <div className='project-card-inner'>
              <div className='project-front'>
                <img
                  src='https://res.cloudinary.com/efoulds24/image/upload/v1652205802/Screenshot_2022-05-10_at_14.03.08_z9cwiq.png'
                  alt='Big Smoke'
                />
              </div>
              <div className='project-back'>
                <h2>Big Smoke</h2>
                <h4 className='group-size'>Group Project (3 People)</h4>
                <h4 className='time-length'>Timeframe: 7days</h4>
                <div className='project-card-links'>
                  <a
                    href='https://google.com'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='fa-solid fa-link'></i>
                  </a>
                  <a
                    href='https://github.com/FouldsEJ/ga-project-3'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='fa-brands fa-github'></i>
                  </a>
                </div>
                <p>
                  A full-stack MERN app with CRUD functionality. Focussed on
                  introducing new and popular locations in London to the user.
                  As a group we worked full-stack. I focussed on the
                  multi-search/filter tool on the site, as well as building
                  relationships between users with ‘like’ and ‘add to itinerary’
                  functionality.
                </p>
                <div className='project-card-skills'>
                  <i className='devicon-mongodb-plain-wordmark'></i>
                  <i className='devicon-express-original'></i>
                  <i className='devicon-react-original'></i>
                  <i className='devicon-nodejs-plain'></i>
                  <i className='devicon-javascript-plain'></i>
                  <i className='devicon-sass-original'></i>
                  <i className='devicon-github-original'></i>
                  <i className='devicon-git-plain'></i>
                  <i className='devicon-heroku-original'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row-two'>
          <div className='project-card'>
            <div className='project-card-inner'>
              <div className='project-front'>
                <img
                  src='https://res.cloudinary.com/efoulds24/image/upload/v1652204510/Screenshot_2022-05-10_at_13.41.25_k7rkz5.png'
                  alt='Great Night Out'
                />
              </div>
              <div className='project-back'>
                <h2>Great Night Out</h2>
                <h4 className='group-size'>Pair Project</h4>
                <h4 className='time-length'>Timeframe: 48hrs</h4>
                <div className='project-card-links'>
                  <a
                    href='https://ga-project-2-great-night-out.netlify.app/'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='fa-solid fa-link'></i>
                  </a>
                  <a
                    href='https://github.com/FouldsEJ/ga-project-2'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='fa-brands fa-github'></i>
                  </a>
                </div>
                <p>
                  In two days we built a React app which used an external API.
                  Functionality included searching for events and displaying
                  event locations on a map. The project was invaluable in terms
                  of learning to pair-code and using version control with
                  Git/Github.
                </p>
                <div className='project-card-skills'>
                  <i className='devicon-react-original'></i>
                  <i className='devicon-javascript-plain'></i>
                  <i className='devicon-html5-plain-wordmark'></i>
                  <i className='devicon-css3-plain-wordmark'></i>
                  <i className='devicon-sass-original'></i>
                  <i className='devicon-github-original'></i>
                  <i className='devicon-git-plain'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='project-card'>
            <div className='project-card-inner'>
              <div className='project-front'>
                <img
                  src='https://res.cloudinary.com/efoulds24/image/upload/v1652202574/Screenshot_2022-05-10_at_13.08.10_wmo6wy.png'
                  alt='Maze Madness'
                />
              </div>
              <div className='project-back'>
                <h2>Maze Madness</h2>
                <h4 className='group-size'>Solo Project</h4>
                <h4 className='time-length'>Timeframe: 5days</h4>
                <div className='project-card-links'>
                  <a
                    href='https://fouldsej.github.io/ga-project-1/'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='fa-solid fa-link'></i>
                  </a>
                  <a
                    href='https://github.com/FouldsEJ/ga-project-1'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='fa-brands fa-github'></i>
                  </a>
                </div>
                <p>
                  A grid-based game built with Vanilla JavaScript, HTML and CSS.
                  A dynamically generated maze game which gets progressively
                  harder each level.
                </p>
                <div className='project-card-skills'>
                  <i className='devicon-javascript-plain'></i>
                  <i className='devicon-html5-plain-wordmark'></i>
                  <i className='devicon-css3-plain-wordmark'></i>
                  <i className='devicon-github-original'></i>
                  <i className='devicon-git-plain'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
