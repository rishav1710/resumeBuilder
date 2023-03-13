import React from 'react';
import styles from './styles.module.css';
import resumeSvg from '../../images/undraw_resume_folder_re_e0bi.svg';

function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.heading}>
        A <span className={styles.mainText}>Resume</span> that stands out!{' '}
        <br />
        Make your own resume. <span className={styles.mainText}>It's free</span>
      </p>
      <img width={'400px'} src={resumeSvg} alt="resume" />
    </div>
  );
}

export default Header;
