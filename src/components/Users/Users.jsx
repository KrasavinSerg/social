import React from 'react';
import s from './Users.module.scss';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

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
