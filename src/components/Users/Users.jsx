import React from 'react';
import s from './Users.module.scss';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
    <div className={s.pagination}>
      <ul>
        {pages.map(p => {
          return <li className={props.currentPage === p && s.active} onClick={() => {props.onPageChanged(p)}}>{p}</li>
        })}
      </ul>
    </div>
    {
      props.users.map(u => <div key ={u.id}>
        <div>
          <NavLink to={'/profile/' + u.id}>
            <img className={s.user__img} src={u.photos.small != null ? u.photos.small : userPhoto} alt='avatar'/>
          </NavLink>
          <div>
            {u.followed 
              ? <button onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': 'cfbce4cf-eeea-4650-8beb-2254170799ce'
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                  });
                }
              }>unfollow</button> 

              : <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': 'cfbce4cf-eeea-4650-8beb-2254170799ce'
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id);    
                    }
                  });
                }
              }>follow</button>}
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
