import React from 'react'
import AnimatedLayout from '../../animation';
import Layer from '../../UI/layer';
import classes from './styles.module.scss';

const Header = () => {
    return (
        <header className={classes.header}>

            <div className="container">

                <div className={classes.content}>
                    <h1>
                        Header for home page
                    </h1>
                </div>

            </div>

            <Layer />

            <AnimatedLayout />

        </header>
    )
}

export default Header