let rerenderEntireTree = () => {

}

let state = {
    dialogPage: {
        dialogUser: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Lola' },
            { id: 3, name: 'Andrew' },
            { id: 4, name: 'Chika' },
            { id: 5, name: 'Bob' },
        ],
        dialogMessage: [
            { id: 1, message: 'what the nice resource', likesCount: 12 },
            { id: 2, message: 'it is super site', likesCount: 5 },
            { id: 3, message: 'it is amazing', likesCount: 9 },
            { id: 4, message: 'i send the link to my friend', likesCount: 3 }
        ]
    },
    profilePage: {
        profileMessage: [
            { id: 1, message: 'Hi? how are you' },
            { id: 2, message: 'Hellou' },
            { id: 3, message: 'lslslsls' },
            { id: 4, message: 'jabibababdkidu' },
            { id: 5, message: 'bla-bla-vblbfl' },
        ],
        newPostText: 'enter your message',
    }
}


export default state;
window.state = state;

export const addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 222
    }
    state.profilePage.profileMessage.push(newPost);
    state.profilePage.newPostText = '';

    rerenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};


export const addDialogMessage = (postMessage) => {
    let newMessage = {
        id: 5,
        message: postMessage,
        likesCount: 222
    }
    state.dialogPage.dialogMessage.push(newMessage);
    rerenderEntireTree(state);
};
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
