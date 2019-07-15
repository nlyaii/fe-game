import React  from 'react';
import ChatLine from '../components/ChatLine'
import logo from "../../assets/icons/frank-mustace.svg"


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
            hidden : "hidden",
            inputClass: '',
            name: ''
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: ""});
        }, formWait );
    }

    handleChange = (e) => {
        if(e.target.value.length) { this.setState({ inputClass: 'active' }); }
        this.setState({ name: e.target.value });
    }

    render(){
        return (
            <div className="intro-screen">
                <div className="chat-bot">
                    <img src={logo} className="mustace-logo" alt="logo"/>
                    <ChatLine wait={firstWait} say={this.state.talk.greeting}/>
                    <ChatLine wait={secondWait} say={this.state.talk.intro}/>
                </div>
                <div className={'form ' + this.state.hidden}>
                    <div className='group'>
                        <input className={this.state.inputClass} onChange={this.handleChange} value={this.state.name}
                               type="text" label='Name'/>
                        <label>Name</label>
                    </div>
                    <button disabled={!this.state.name} className="start-button" type="button"
                            onClick={this.props.storeAndMove}>Start</button>
                </div>
            </div>
        );
    }
}

export default IntroScreen;
