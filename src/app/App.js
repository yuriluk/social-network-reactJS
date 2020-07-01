import React from 'react';
import './App.css';
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import Footer from "../components/Footer/Footer";
import Dialogs from "../components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "../components/News/News";
import Music from "../components/Music/Music";
import Settings from "../components/Settings/Settings";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sideBar}/>

            <div className='app-wrapper-content'>
                <Route path='/profile' render={
                    () => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path='/dialogs' render={
                    () => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
