import React  from 'react';
import IntroScreenView from './IntroScreenView'
import InitGameView from './InitGameView'
import ResultView from './ResultView'
import logo from "../../assets/icons/frank-icon.svg"



class MainLayout extends React.Component{
    min = 1
    max = 3
    attempts = 3
    state = {
        nextScreen: false,
        step: 0,
        games: 0,
        name: '',
        gameScore: 0
    }

    triggerNextComponent = () => {
        this.setState(({step}) => ({step: step + 1}))
    }

    triggerPreviousComponent = () => {
        this.setState(({step}) => ({step: step - 1}))
    }


    handleName = (newName) => {
        this.setState({name: newName})
    }

    handleGame = (score) => {
        this.setState({gameScore: score})
        this.triggerNextComponent()
    }

    handleNewGame = () => {
        this.setState({games: this.state.games + 1})
        this.triggerPreviousComponent()
    }

    render(){
        const {name, step, gameScore, games} = this.state

        const rules = {
            min: this.min,
            max: this.max
        }

        const gameData = {
            score: gameScore,
            attempts: this.attempts,
            name: name
        }

        const initGameData = {
            name: name,
            games: games
        }

        return (
            <div className="main-layout">
                {step === 0 && <IntroScreenView onNameInput={this.handleName} onStoreAndMove={this.triggerNextComponent}/>}
                {step === 1 && <InitGameView initData={initGameData} name={name} rules={rules} onFinishGame={this.handleGame} />}
                {step === 2 && <ResultView onNewGame={this.handleNewGame} gameResult={gameData} onTryAgain={this.triggerPreviousComponent} />}
                <img src={logo} className="app-logo" alt="logo"/>
            </div>
        );
    }
}

export default MainLayout;
