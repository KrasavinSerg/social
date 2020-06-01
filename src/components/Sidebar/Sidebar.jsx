import React from 'react';
import s from './Sidebar.module.scss';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';

const Sidebar = (props) => {
  
  return (
    <div className={s.sidebar_wrap}>
      <nav className={s.nav}>
        <ul>
          <li>
            <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
          </li>
          <li>
            <NavLink to='/Diologs' activeClassName={s.active}>Diologs</NavLink>
          </li>
          <li>
            <NavLink to='/News' activeClassName={s.active}>News</NavLink>
          </li>
          <li>
            <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
          </li>
          <li>
            <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
          </li>
        </ul>
      </nav>
      <Friends friendsData={props.state.friends} />
    </div>
  );
}

export default Sidebar;