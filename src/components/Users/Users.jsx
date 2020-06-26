import React from 'react';
// import s from './Users.module.scss';

const Users = (props) => {

  if(props.users.length === 0) {
    props.setUsers([
      {id : 1, photoUrl: 'https://img.icons8.com/color/48/000000/fashion-trend.png', followed : false, fullName : 'Dmitry', status : 'I am a boss', location : {city: 'Minsk', country : 'Belarus'} },
      {id : 2, photoUrl: 'https://img.icons8.com/color/48/000000/teenager-male.png',followed : true, fullName : 'Sasha', status : 'I am a boss too', location : {city: 'Moscow', country : 'Russia'} },
      {id : 3, photoUrl: 'https://img.icons8.com/color/48/000000/kim-kardashian-2.png',followed : false, fullName : 'Andrew', status : 'I am a boss too', location : {city: 'Ukrain', country : 'Kiev'} }
    ])
  }

  return (
    <div>
      {
        props.users.map(u => <div key ={u.id}>
          <div>
            <img src={u.photoUrl} alt='avatar'/>
            {u.followed 
              ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button> 
              : <button onClick={() => {props.follow(u.id)}}>follow</button>}
          </div>
          <div>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
            <div>{u.location.city}</div>
            <div>{u.location.country}</div>
          </div>
        </div>)
      }
    </div>
  )
}

export default Users;
