import React from 'react';

function Experience() {
  return (
    <section className='experience-wrapper' id='experience'>
      <h1>Experience</h1>

      <div className='experience-display-flex'>
        {/* 1. VML */}
        <div className='experience-card'>
          <div className='experience-card-header'>
            <img src='https://res.cloudinary.com/efoulds24/image/upload/v1759699957/logotipo-vml-agencia_fto3nt.jpg' alt='VML' />
            <h2>VML Enterprise Solutions</h2>
          </div>
          <h3>Sep 2022 - Present</h3>
          <h3>
            Designed and built full‑stack applications in agile teams, spanning
            frontend, backend, and authentication layers, for international
            clients and internal platforms.
          </h3>
          <ul>
            <li>
              Developed and maintained web applications using React, Next.js,
              Vue.js, TypeScript and Node, adapting quickly to new frameworks.
            </li>
            <li>
              Built a training platform from the ground up using an Nx
              Monorepo, MongoDB, Storybook and Contentful; implemented secure
              authentication and authorisation with OIDC.
            </li>
            <li>
              Architected and delivered a Backend‑for‑Frontend (BFF) layer,
              introducing flexible authentication flows and API orchestration to
              simplify integration with multiple backend services.
            </li>
            <li>
              Contributed to an AI‑powered Ad Editor platform focused on
              pixel‑perfect rendering, real‑time interactivity and WYSIWYG‑style
              editing features.
            </li>
            <li>
              Collaborated in agile, interdisciplinary teams on global‑scale
              projects, applying best practices in accessibility, performance
              optimisation and maintainable code design.
            </li>
          </ul>
        </div>

        {/* 2. GA – Teaching Assistant */}
        <div className='experience-card'>
          <div className='experience-card-header'>
            <img
              src='https://res.cloudinary.com/efoulds24/image/upload/v1652738832/ga-logo-3_bgmoxb.png'
              alt='General Assembly'
            />
            <h2>General Assembly – Teaching Assistant</h2>
          </div>
          <h3>Jul 2022 - Nov 2022</h3>
          <h3>
            Supported students on the Frontend Web Development course, covering
            HTML, CSS, JavaScript, and React.js.
          </h3>
          <ul>
            <li>
              Assisted with live coding sessions, debugging, and problem-solving
              during workshops and labs.
            </li>
            <li>
              Provided feedback and guidance on student projects, reinforcing
              best practices in frontend engineering.
            </li>
            <li>
              Collaborated with lead instructors to improve course delivery and
              ensure a positive learning experience for all participants.
            </li>
          </ul>
        </div>

        {/* 3. GA – Student */}
        <div className='experience-card'>
          <div className='experience-card-header'>
            <img
              src='https://res.cloudinary.com/efoulds24/image/upload/v1652738832/ga-logo-3_bgmoxb.png'
              alt='General Assembly'
            />
            <h2>General Assembly – Student</h2>
          </div>
          <h3>Jan 2022 - Apr 2022</h3>
          <h3>
            12-week course expanding full stack application development
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
            <li>
              Built four fully-functioning and user friendly web applications
              within time pressured environments.
            </li>
          </ul>
        </div>

        {/* 4. MyTutor */}
        <div className='experience-card'>
          <div className='experience-card-header'>
            <img
              src='https://res.cloudinary.com/efoulds24/image/upload/v1652191659/mytutor-logo_ztmoxx.jpg'
              alt='MyTutor'
            />
            <h2>MyTutor</h2>
          </div>
          <h3>Aug 2021 - Apr 2022</h3>

          <h3>
            A part-time role in which I taught over 200 online 1:1 and 3:1
            tuition lessons completed with KS3, GCSE and A Level pupils in
            Mathematics and Science (Chemistry/Physics/Biology)
          </h3>
          <ul>
            <li>Planned, organised and delivered tailored lessons.</li>
            <li>
              Provided feedback both written and oral on students performance
              with a view to build confidence and increase exam performance
            </li>
            <li>Quickly assessed students learning needs and weakness areas</li>
            <li>
              Received exceptional reviews from parents and students alike,
              praising my dedication to helping students improve and my ability
              to make complex subjects easier to understand
            </li>
          </ul>
        </div>

        {/* 5. Jaguar Land Rover */}
        <div className='experience-card'>
          <div className='experience-card-header'>
            <img
              src='https://res.cloudinary.com/efoulds24/image/upload/v1652719677/jaguar-land-rover-sports-png-logo-3_vp1znv.png'
              alt='Jaguar Land Rover'
            />
            <h2>Jaguar Land Rover</h2>
          </div>
          <h3>Sept 2017 - Aug 2021</h3>

          <h3>
            Coordinated and managed vehicle program delivery. Engaged with a
            wide range of business functions to successfully launch new
            vehicles, meeting all cost and quality standards.
          </h3>
          <ul>
            <li>
              Successfully coordinated the launch and introduction of a new
              electrical architecture and infotainment system, working closely
              with software development teams
            </li>
            {/* <li>
              Influenced engineering teams to collectively deliver all critical
              program milestones
            </li> */}
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
