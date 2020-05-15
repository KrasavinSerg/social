import React from 'react';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsTeysYuF6AaP-EvPfYx2z8HOkpCllEJkpxkXYCvvzgxKI9bWA&usqp=CAU' alt='logo' />
    </header>
  );
}

export default Header;