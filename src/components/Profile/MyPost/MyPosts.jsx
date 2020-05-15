import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.header}>
      My posts
      <div>
        <textarea></textarea>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
      </div>  
    </div>
  );
}

export default MyPosts;