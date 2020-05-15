import React from 'react';
import s from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <a href="1">item1</a>  
        </li>
        <li>
          <a href="2">item2</a>
        </li>
        <li>
          <a href="3">item3</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;