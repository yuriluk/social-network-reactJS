import React from 'react';
import './App.css';
import Footer from "../components/common/Footer/Footer";
import {Route} from "react-router-dom";
import News from "../components/News/News";
import Music from "../components/Music/Music";
import Settings from "../components/Settings/Settings";
import DialogsContainer from "../components/Dialogs/DialogsContainer";
import NavbarContainer from "../components/common/Navbar/NavbarContainer";
import UsersContainer from "../components/Users/UsersContainer";
import ProfileContainer from "../components/Profile/ProfileContainer";
import HeaderContainer from "../components/common/Header/HeaderContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>

            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/users' component={UsersContainer}/>
                <Route path='/settings' component={Settings}/>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
