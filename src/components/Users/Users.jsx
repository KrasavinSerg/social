import React from 'react';
import s from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {

  componentDidMount() {
    if(this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      });
  }
  
  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div className={s.pagination}>
          <ul>
            {pages.map(p => {
              return <li className={this.props.currentPage === p && s.active} onClick={() => {this.onPageChanged(p)}}>{p}</li>
            })}
          </ul>
        </div>
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
