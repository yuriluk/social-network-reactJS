import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "../app/App";
import {addPost, handleMessageChange} from "./state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     handleMessageChange={handleMessageChange}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}