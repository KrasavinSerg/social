import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.header__logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsTeysYuF6AaP-EvPfYx2z8HOkpCllEJkpxkXYCvvzgxKI9bWA&usqp=CAU' alt='logo' />
      <div className={s.login}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
