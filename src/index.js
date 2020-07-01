import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';



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


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
