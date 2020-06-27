import React from 'react';
import s from './Friends.module.scss';

const Friends = (props) => {
  
  let friendElement = props.sidedar.friends.map((el) => {
    return (
      <li key={el.id}>
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