import React  from 'react';
import IntroScreen from './IntroScreen'
import InitGameView from './InitGameView'

import logo from "../../assets/icons/frank-icon.svg"

class MainLayout extends React.Component{
    constructor(props) {
        super(props)
        this.state = { nextScreen: false }
    }

    render(){
        return (
            <div className="main-layout">
                {!this.state.nextScreen && <IntroScreen storeAndMove={this.triggerNextComponent.bind(this)}/>}

                {this.state.nextScreen && <InitGameView />}
                <img src={logo} className="app-logo" alt="logo"/>
            </div>
        );
    }

    triggerNextComponent = () => {
        this.setState({nextScreen: !this.state.nextScreen})
    }
}


export default MainLayout;
