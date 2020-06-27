import React from 'react';
import s from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

// {id : 1, photoUrl: 'https://img.icons8.com/color/48/000000/fashion-trend.png', followed : false, fullName : 'Dmitry', status : 'I am a boss', location : {city: 'Minsk', country : 'Belarus'} }

const Users = (props) => {

  if(props.users.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        props.setUsers(response.data.items)
      });
  }

  return (
    <div>
      {
        props.users.map(u => <div key ={u.id}>
          <div>
            <img className={s.user__img} src={u.photos.small != null ? u.photos.small : userPhoto} alt='avatar'/>
            <div>
              {u.followed 
                ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button> 
                : <button onClick={() => {props.follow(u.id)}}>follow</button>}
            </div>  
          </div>
          <div>
            <div>{u.name}</div>
            <div>{u.status}</div>
            <div>{'u.location.city'}</div>
            <div>{'u.location.country'}</div>
          </div>
        </div>)
      }
    </div>
  )
}

export default Users;
