import React from 'react';

function Experience() {
  return (
    <section className='experience-wrapper'>
      <h1>Experience</h1>

      <div className='experience-display-flex'>
        <div className='experience-card'>
          <div className='experience-card-header'>
            <img
              src='https://res.cloudinary.com/efoulds24/image/upload/v1652191717/ga-logo2_goy4mn.jpg'
              alt='General Assembly'
            />
            <h2>General Assembly</h2>
          </div>
          <h3>
            - 12-week course expanding full stack application development
            proficiency
          </h3>
          <ul>
            <li>Pair and group programming</li>
            <li>
              Consumed and integrated third-party application programming
              interfaces (APIs)
            </li>
            <li>Safely modelled and stored data in SQL and NoSQL databases</li>
            <li>
              Built secure full-stack applications by leveraging common design
              and architectural patterns like Representational State Transfer
              (REST)
            </li>
          </ul>
        </div>
        <div className='experience-card'>
          <div className='experience-card-header'>
            <img
              src='https://res.cloudinary.com/efoulds24/image/upload/v1652191659/mytutor-logo_ztmoxx.jpg'
              alt='MyTutor'
            />
            <h2>MyTutor</h2>
          </div>
          <h3>
            - A part-time role in which I taught over 200 online 1:1 and 3:1
            tuition lessons completed with KS3, GCSE and A Level pupils in
            Mathematics and Science (Chemistry/Physics/Biology)
          </h3>
          <ul>
            <li>Planned, organised and delivered tailored lessons.</li>
            <li>
              Provided feedback both written and oral on students performance
              with a view to build confidence and increase exam performance
            </li>
          </ul>
        </div>
        <div className='experience-card'>
          <div className='experience-card-header'>
            <img
              src='https://res.cloudinary.com/efoulds24/image/upload/v1652191630/jlr-logo_ga47nn.jpg'
              alt='Jaguar Land Rover'
            />
            <h2>Jaguar Land Rover</h2>
          </div>
          <h3>
            - Coordinated and managed vehicle program delivery. Engaged with a
            wide range of business functions to successfully launch new
            vehicles, meeting all cost and quality standards.
          </h3>
          <ul>
            <li>
              Successfully coordinated the launch and introduction of a new
              electrical architecture and infotainment system, working closely
              with software development teams
            </li>
            <li>
              Influenced engineering teams to collectively deliver all critical
              program milestones
            </li>
            <li>
              Timely resolution of issues, establishment of containments and
              determination of root cause through effective collaboration with
              cross-functional teams
            </li>
            <li>
              Constant assessment of build failure modes in the manufacturing
              process to improve product reliability and quality
            </li>
            <li>
              Presented workstream progress in weekly launch meetings to support
              senior decisions
            </li>
            <li>
              Continuous improvement using ‘lessons learnt’ and ‘best practice’
              to ‘prevent recurrence’
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
