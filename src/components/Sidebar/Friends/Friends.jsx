import React from 'react';
import s from './Friends.module.scss';

const Friends = (state) => {
  debugger

  let friendElement = state.sidedar.friends.map((el) => {
    return (
      <li>
        <img src={el.ava} alt='avatarka'/>
        <span>{el.name}</span>
      </li>
    );
  })

  return (
    <div className={s.friends}>
      <h2>Friends</h2>
      <ul>
        {friendElement}
      </ul>
    </div>
  );
}

export default Friends;