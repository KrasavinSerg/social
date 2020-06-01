import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postElement = props.postData.map((el) => <Post message={el.message} like={el.likeCount} />);

  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.addPost();
  } 
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.my_posts}>
      <h2>My posts</h2>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={addPost}>click me</button>
      </div>
      <div>
        {postElement}
      </div>  
    </div>
  );
}

export default MyPosts;