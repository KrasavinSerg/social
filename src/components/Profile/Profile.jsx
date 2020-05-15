import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPost/MyPosts';

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img src="https://images.pexels.com/photos/37403/bora-bora-french-polynesia-sunset-ocean.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="ocean"/>
      </div>
      <div>
        ava + disc
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;