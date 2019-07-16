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
            winningNumber: null,
            min: 1,
            max: 3,
            attempts: 3,
            score: 0
        }
    }

    componentDidMount() {
        this.setState({winningNumber: createRandomWinningNumber(this.state.min, this.state.max)})
    }

    handleSelectBox = async (id) => {
        if (id === this.state.winningNumber) {
            this.setState({score: this.state.score + 1})
        }

        await this.setState({attempts: this.state.attempts - 1})
        this.setState({winningNumber: createRandomWinningNumber(this.state.min, this.state.max)})

        if (this.state.attempts === 0) {
            setTimeout(() => {
                this.props.onFinishGame()
            }, FIRST_TIMEOUT)
        }
    }

    render(){
        return (
            <div className="init-view">
                <div className="chat-bot">
                    <img src={logo} className="mustace-logo" alt="logo"/>
                    <ChatLine wait={FIRST_TIMEOUT} say={messages.secondView.niceToMeetYou + 'James'}/>
                    <ChatLine wait={SECOND_TIMEOUT} say={messages.secondView.gameExplanation + '3 attempts'}/>
                </div>
                <Game number={this.state.winningNumber} onSelectSquare={this.handleSelectBox} wait={THIRD_TIMEOUT}/>
            </div>
        );
    }
}


export default InitGameView;
