import React from 'react';
import Post from './MyPost/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {

    let postElement = props.posts.map((postItem) => <Post message={postItem.message} likesCount={postItem.likesCount} />)

    let newPostElement = React.createRef(); //создание ссылки на элемент (типа аналог идентификатора в js)

    let addPost = () => {
        props.addPost(); // это та ыункция которую мы прокинули из State. Здесь в компоненете мы ее вызвали, а результат ее выполнения получит State
        props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h3 className={classes.title}>my posts</h3>
            <div >
                <textarea cols="30" rows="2" ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                <div>
                    <button onClick={addPost}>send message</button>
                </div>
            </div>
            {postElement}
        </div>

    )
}

export default MyPosts;