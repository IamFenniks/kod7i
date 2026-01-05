import React from 'react';
import css from './Nav.module.css'
import { Link } from 'react-router-dom';

// className={ `${css.one} ${css.two}` } - склеивание стилей

const Nav = () => {
    return (
        <nav className={css.appNav}>
            <div className={css.li}>
                <Link to="profile">
                    Кабинет
                </Link>
            </div>
            <div className={css.li}>
                <Link to="chat">
                    Общение
                </Link>
            </div>
            <div className={css.li}>
                <Link to="news">
                    Новости
                </Link>
            </div>
            <div className={css.li}>
                <Link to="settings">
                    Settings
                </Link>
            </div>

        </nav>
    );
}

export default Nav;