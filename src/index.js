import React from 'react';
import ReactDom from 'react-dom';

import App from './app';
import state from './redux/state';
import { BrowserRouter } from 'react-router-dom';


ReactDom.render(
    <BrowserRouter>
        <App state={state} />
    </BrowserRouter>, document.getElementById('root'))