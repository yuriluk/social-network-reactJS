import React from 'react';
import './App.css';
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import Footer from "../components/Footer/Footer";
import Dialogs from "../components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "../components/News/News";
import Music from "../components/Music/Music";
import Settings from "../components/Settings/Settings";

const App = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Roma'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Ha-Ha'}
    ]

    let posts = [
        {id: 1, message: 'First post', likesCount: 15},
        {id: 2, message: 'Second post', likesCount: 17},
        {id: 3, message: 'Third post', likesCount: 3},
        {id: 4, message: 'Forth post', likesCount: 5},
        {id: 5, message: 'Fifth post', likesCount: 85},
        {id: 6, message: 'Sixth post', likesCount: 75},
    ]

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={posts}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
