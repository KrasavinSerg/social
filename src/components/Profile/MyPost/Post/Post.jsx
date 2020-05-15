import React from 'react';
import s from './Post.module.scss';

const Post = () => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQihpPg13UyFBVFKfGbZZRuvrtGtiuCPKS9Gh84AxMmmsItool2&usqp=CAU" alt='avatarka' />
        post 1
      </div>
    </div>
  );
}

export default Post;