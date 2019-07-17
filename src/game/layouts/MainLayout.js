import React  from 'react';
import IntroScreenView from './IntroScreenView'
import InitGameView from './InitGameView'
import ResultView from './ResultView'
import logo from "../../assets/icons/frank-icon.svg"



class MainLayout extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            step: 0,
            name: '',
            gameScore: 0
        }
    }

    triggerNextComponent = () => {
        this.setState(({step}) => ({step: step + 1}))
    }

    triggerPreviousComponent = () => {
        this.setState(({step}) => ({step: step - 1}))
    }


    handleStore = (newName) => {
        this.setState({name: newName})
        this.triggerNextComponent()
    }

    handleGame = (score) => {
        this.setState({gameScore: score})
        this.triggerNextComponent()
    }

    render(){
        const {name, step, gameScore} = this.state

        const rules = {
            min: this.props.gameState.min,
            max: this.props.gameState.max,
            attempts: this.props.gameState.attempts
        }

        const gameResultData = {
            score: gameScore,
            attempts: this.props.gameState.attempts,
            name: name
        }

        return (
            <div className="main-layout">
                {step === 0 && <IntroScreenView onStoreAndMove={this.handleStore}/>}
                {step === 1 && <InitGameView name={name} rules={rules} onFinishGame={this.handleGame} />}
                {step === 2 && <ResultView gameResult={gameResultData} onNewGame={this.triggerPreviousComponent} />}
                <img src={logo} className="app-logo" alt="logo"/>
            </div>
        );
    }
}

export default MainLayout;
