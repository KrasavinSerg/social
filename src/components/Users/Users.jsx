import React from 'react';
import s from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {

  constructor(props) {
    super(props) 

    if(this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          this.props.setUsers(response.data.items)
        });
    }
  }
  
  render() {
    return (
      <div>
        {
          this.props.users.map(u => <div key ={u.id}>
            <div>
              <img className={s.user__img} src={u.photos.small != null ? u.photos.small : userPhoto} alt='avatar'/>
              <div>
                {u.followed 
                  ? <button onClick={() => {this.props.unfollow(u.id)}}>unfollow</button> 
                  : <button onClick={() => {this.props.follow(u.id)}}>follow</button>}
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
}

export default Users;
