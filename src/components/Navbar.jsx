import React from 'react';

function Navbar() {
  return (
    <header>
      {/* <nav className='navbar-wrapper'>
        <ul className='navbar-items'>
          <a href='#about'>
            <li>About</li>
          </a>

          <a href='#skills'>
            <li>Skills</li>
          </a>
          <a href='#projects'>
            <li>Projects</li>
          </a>
          <a href='#experience'>
            <li>Experience</li>
          </a>

          <a href='#contact'>
            <li>Contact</li>
          </a>
        </ul>
      </nav> */}
      <nav className='navbar-section'>
        <div className='navbar-titles'>
          <a href='#about'>About</a>

          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#experience'>Experience</a>

          <a href='#contact'>Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
