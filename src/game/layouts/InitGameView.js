import React  from 'react';
import ChatLine from '../components/ChatLine'
import Game from './Game'
import logo from "../../assets/icons/frank-mustace.svg"

// TODO: move to constants from each and every file

const firstWait = 1000;
const secondWait = 2000;
const gameWait = 3000;

class InitGameView extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            talk: {
                niceToMeetYou: 'Nice to meet you, {James!}',
                gameExplanation: 'Try to find the ball. Push the square to see if there is a ball underneath it. \n' +
                    'You have {3 attempts.}'
            },
            hidden: "hidden",
        }
    }

    render(){
        return (
            <div className="init-view">
                <div className="chat-bot">
                    <img src={logo} className="mustace-logo" alt="logo"/>
                    <ChatLine wait={firstWait} say={this.state.talk.niceToMeetYou}/>
                    <ChatLine wait={secondWait} say={this.state.talk.gameExplanation}/>
                </div>
                <Game wait={gameWait}/>
            </div>
        );
    }

}


export default InitGameView;
