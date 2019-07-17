import React  from 'react';
import ChatLine from '../components/ChatLine'
import logo from "../../assets/icons/frank-mustace.svg"
import messages from '../../messages/messages'
import {FIRST_TIMEOUT, SECOND_TIMEOUT, THIRD_TIMEOUT} from "../../constants/timeouts";

class IntroScreenView extends React.Component{

    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = {
            hidden : true,
            name: ''
        };
    }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({hidden: false});
        }, THIRD_TIMEOUT);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleChange = (e) => {
        this.props.onNameInput(e.target.value)
        this.setState({ name: e.target.value });
    }

    render(){
        const {hidden, name} = this.state
        const inputClass = name.length ? "active" : ""
        const formClass = hidden ? 'hidden' : ''

        return (
            <div className="intro-screen">
                <div className="chat-bot">
                    <img src={logo} className="mustace-logo" alt="logo"/>
                    <ChatLine wait={FIRST_TIMEOUT} say={messages.firstView.greeting}/>
                    <ChatLine wait={SECOND_TIMEOUT} say={messages.firstView.intro}/>
                </div>
                <div className={"form " + formClass}>
                    <div className='group'>
                        <input className={inputClass} onChange={this.handleChange} value={this.state.name}
                               type="text" label='Name'/>
                        <label>{messages.firstView.inputLabel}</label>
                    </div>
                    <button disabled={!this.state.name} className="start-button" type="button"
                            onClick={this.props.onStoreAndMove}>{messages.firstView.start}</button>
                </div>
            </div>
        );
    }
}

export default IntroScreenView;
