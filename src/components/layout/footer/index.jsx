import React from 'react'
import classes from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`container${classes.footer__container}`}>
        <div className={classes.footer__item}></div>
        <div className={classes.footer__item}></div>
        <div className={classes.footer__item}></div>
        <div className={classes.footer__item}></div>
      </div>
      <div className={`text-center ${classes.copyrights}`}>
        <small >
          &copy; 2023 Hasna. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer