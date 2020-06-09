import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';


const MyPosts = (props) => {
  // debugger
  let postElement = props.postData.map((el) => <Post message={el.message} like={el.likeCount} />);
  
  let onAddPost = () => {
    props.addPost();
  } 
  
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.my_posts}>
      <h2>My posts</h2>
      <div>
        <textarea onChange={onPostChange} value={props.newPostText}/>
        <button onClick={onAddPost}>click me</button>
      </div>
      <div>
        {postElement}
      </div>  
    </div>
  );
}

export default MyPosts;
