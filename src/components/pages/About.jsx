import React from 'react';
import styles from './styles/About.module.css';

function About () {
  return (
    <div className={styles.aboutPage}>
      <h1>About</h1>
      <div>
        <p className='about-par'>
          This is our project in Project Managment course 2023
        </p>
      </div>
      <div>
        <h1>Authors:</h1>
        <ul>
          <strong>
            <li> Stav Sharabi</li>
            <li> Adar Katzir</li>
            <li> Neoray Hagag</li>
            <li> Anthony Epshtein</li>
            <li> Ido Hazan</li>
            <li> Maor Hadad</li>
          </strong>
        </ul>
      </div>
    </div>
  );
}

export default About;
