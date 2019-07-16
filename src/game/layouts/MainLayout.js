import React  from 'react';
import IntroScreenView from './IntroScreenView'
import InitGameView from './InitGameView'
import ResultView from './ResultView'

import logo from "../../assets/icons/frank-icon.svg"



class MainLayout extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            nextScreen: false,
            step: 0
        }
    }

    render(){
        return (
            <div className="main-layout">
                {this.state.step === 0 && <IntroScreenView onStoreAndMove={this.triggerNextComponent}/>}

                {this.state.step === 1 && <InitGameView onFinishGame={this.triggerNextComponent} />}
                {this.state.step === 2 && <ResultView onTryAgain={this.triggerNextComponent} />}
                <img src={logo} className="app-logo" alt="logo"/>
            </div>
        );
    }

    triggerNextComponent = () => {
        this.setState({step: this.state.step + 1})
    }

    triggerPreviousComponent = () => {
        this.setState({step: this.state.step - 1})
    }
}


export default MainLayout;
