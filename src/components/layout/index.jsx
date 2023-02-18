import Navbar from './navbar';
import NavHeader from './navHeader';
import Footer from './footer';
import classes from './styles.module.scss';
import { useState } from 'react';

const Layout = ({ children }) => {
    const [toggle, setToggle] = useState(false);

    // toggle drawer
    const toggleHandler = (e) => {
        e.stopPropagation()
        setToggle(prev => !prev)
    }

    // close drawer
    window.addEventListener('click', () => {

        if (toggle) {

            setToggle(false)
        }
    })

    return (
        <div className={classes.layout__container}>

            <NavHeader onClick={toggleHandler} />

            <Navbar open={toggle} />

            <div className={classes.main}>
                {children}
            </div>

            <Footer />

        </div>
    )
}

export default Layout