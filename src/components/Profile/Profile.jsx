import React from 'react';
import MyPosts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.profileMessage}
                newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
        </div>
    )
}

export default Profile;