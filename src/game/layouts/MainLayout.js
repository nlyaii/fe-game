import React  from 'react';
import IntroScreen from './IntroScreen'

import logo from "../../assets/icons/frank-icon.svg"

class MainLayout extends React.Component{
    render(){
        return (
            <div className="main-layout">
                <IntroScreen/>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
        );
    }
}

export default MainLayout;
