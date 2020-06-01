import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
  
  return (
    <div>
      <div className={s.item}>
        <img src='https://img.icons8.com/color/48/000000/ninja-head.png' alt='avatarka' />
        <div>{props.message}</div>
        <div>Like: <span>{props.like}</span></div>
      </div>
    </div>
  );
}

export default Post;