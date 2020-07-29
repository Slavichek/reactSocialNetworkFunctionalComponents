import React from 'react';
import Post from './MyPost/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {

    let postElement = props.posts.map((postItem) => <Post id={postItem.id} message={postItem.message} likesCount={postItem.likesCount} />)
    return (
        <div>
            <h3 className={classes.title}>my posts</h3>
            {postElement}
        </div>

    )
}

export default MyPosts;