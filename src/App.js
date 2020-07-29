import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route, BrowserRouter } from 'react-router-dom';
import './app.css'




const App = (props) => {

    return (
        <div className="wrapper">
            <div className="container">
                <Header />
                <Navbar />

                <div className="contentWrapper">

                    {/* <Route  path='/dialogs' component={Dialogs} />
                        <Route path='/profile' component={Profile} /> */}
                    <Route path='/dialogs' render={() =>
                        <Dialogs dialogMessage={props.state.messagePage.messagePosts} dialogUser={props.state.messagePage.messageUser} />} />

                    <Route path='/profile' render={() =>
                        <Profile posts={props.state.profilePage.profileMessage} />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />

                </div>
            </div>
        </div>

    )
};

export default App;