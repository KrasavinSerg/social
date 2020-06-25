import React from 'react';
import s from './Sidebar.module.scss';
import {NavLink} from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';

const Sidebar = () => {
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
            <NavLink to='/Users' activeClassName={s.active}>Users</NavLink>
          </li>
        </ul>
      </nav>
      <FriendsContainer />
    </div>
  );
}

export default Sidebar;