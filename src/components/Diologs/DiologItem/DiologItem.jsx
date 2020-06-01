import React from 'react';
import s from './../Diologs.module.scss';
import { NavLink } from 'react-router-dom';

const DiologItem = (props) => {
  let path = `/Diologs/${props.id}`;

  return (
    <li>
      <img className={s.diologItem_ava} src={props.ava} alt='avatarka' />
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  );
}

export default DiologItem;
