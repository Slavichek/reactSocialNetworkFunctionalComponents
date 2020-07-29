import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post__item}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhmXAr-Rf0uUV2TsTr8M-Kz3zRNzqIQUkTCQ&usqp=CAU" alt="user" className={classes.post__img} />
            </div>
            <div>
                <span className={classes.post__message}>{props.message}</span>
                <span className={classes.post__likes}>{props.likesCount}</span>
            </div>

        </div>

    )
}

export default Post;