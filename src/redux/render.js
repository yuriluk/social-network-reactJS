import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "../app/App";
import {addPost, updateNewPostText} from "./state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}