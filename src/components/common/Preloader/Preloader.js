import loadingImage from "../../../assets/img/loading.svg";
import React from "react";

const Preloader = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={loadingImage} alt={''} style={{height: '100px', width: '100px'}}/>
        </div>
    )
}

export default Preloader
