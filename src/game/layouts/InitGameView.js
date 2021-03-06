import React  from 'react';
import ChatLine from '../components/ChatLine'
import Game from '../components/Game'
import logo from '../../assets/icons/frank-mustace.svg'
import messages from '../../messages/messages'
import {FIRST_TIMEOUT, SECOND_TIMEOUT, THIRD_TIMEOUT} from "../../constants/timeouts";

const createRandomWinningNumber = (min, max) => {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

class InitGameView extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            localScore: 0,
            attempts: props.rules.attempts,
            winningNumber: createRandomWinningNumber(props.rules.min, props.rules.max)
        }
    }

    handleSelectBox = (id) => {
        if (id === this.state.winningNumber) {
            this.setState((state) => ({localScore: state.localScore + 1}))
        }

        this.setState((state, props) => ({
            attempts: state.attempts - 1,
            winningNumber: createRandomWinningNumber(props.rules.min, props.rules.max)
        }))
    }

    handleGameFinish = () => {
        this.props.onFinishGame(this.state.localScore)
    }

    render(){
        const {attempts} = this.state

        const showButtonClass = attempts !== 0 ? 'hidden' : ''
        const selectedText = attempts === 1 ? 'attempt' : 'attempts'

        let attemptsAmountText = `<b>${attempts} ${selectedText}.</b>`
        let greet = `${messages.secondView.niceToMeetYou} ${this.props.name}!`

        return (
            <div className="init-view">
                <div className="chat-bot">
                    <img src={logo} className="mustace-logo" alt="logo"/>
                    {attempts === 3 && <ChatLine wait={FIRST_TIMEOUT} say={greet}/>}
                    <ChatLine wait={SECOND_TIMEOUT} say={messages.secondView.gameExplanation + attemptsAmountText}/>
                </div>
                <Game tiles={this.props.rules.tiles} disabled={attempts === 0} number={this.state.winningNumber} onSelectSquare={this.handleSelectBox} wait={THIRD_TIMEOUT}/>
                <button className={"start-button " + showButtonClass} type="button"
                        onClick={this.handleGameFinish}>{messages.secondView.showScore}</button>
            </div>
        );
    }
}


export default InitGameView;
