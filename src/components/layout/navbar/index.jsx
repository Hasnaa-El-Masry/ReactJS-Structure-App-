import React from 'react'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import classes from './styles.module.scss';
import logo from '../../../assets/images/logo.png';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Testimonials', href: '/testimonials' },
  { title: 'Contact', href: '/contact' },
];

const Navbar = ({ open }) => {

  return (

    <nav className={open ? classes.open : ''}>
      <div className={`${classes.nav__container} container`}>

        <div className={classes.logo}>
          <figure>
            <img src={logo} alt="logo" width={100} />
          </figure>
        </div>

        <div className={classes.nav__menu}>
          <ul className={classes.nav__list} >
            {navItems.map((nav, indx) => (

              <li className={open ? classes.slider : ''} key={indx} style={{ '--i': (indx + 10) }}>
                {/* <Link to={nav.href} className={classes.nav__link}>
                  {nav.title}
                </Link> */}
                {nav.title}
              </li>

            ))}
          </ul>
        </div>

      </div>
      <div className={classes.nav__toggle}>
        <AiOutlineMenuUnfold />
      </div>
    </nav>

  )
}

export default Navbar