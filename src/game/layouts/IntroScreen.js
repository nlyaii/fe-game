import React  from 'react';
import ChatLine from '../components/ChatLine'
import logo from "../../assets/icons/frank-mustace.svg"
import UserForm from "./UserForm";

const firstWait = 1000;
const secondWait = 2000;
const formWait = 3000;

class IntroScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            talk: {
                greeting: 'Hello!',
                intro: 'To begin with <b>the Game</b>, fill in your name below!'
            },
        };
    }

    render(){
        return (
            <div className="intro-screen">
                <div className="chat-bot">
                    <img src={logo} className="mustace-logo" alt="logo"/>
                    <ChatLine wait={firstWait} say={this.state.talk.greeting}/>
                    <ChatLine wait={secondWait} say={this.state.talk.intro}/>
                </div>
                <UserForm className="user-form" wait={formWait}/>
            </div>
        );
    }
}

export default IntroScreen;
