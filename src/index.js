import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDom from 'react-dom';
import './app.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, addDialogMessage, updateNewPostText } from './redux/state';

let rerenderEntireTree = (state) => { //это функция, которую мы будем вызывать в стейте и передавать в index.js
    ReactDom.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addDialogMessage={addDialogMessage} updateNewPostText={updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);