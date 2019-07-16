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
            inputClass: '',
            name: '',

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
        if(e.target.value.length) { this.setState({ inputClass: 'active' }); }
        this.setState({ name: e.target.value });
    }

    isHidden = () => {
        return this.state.hidden ? 'hidden' : ''
    }

    render(){
        return (
            <div className="intro-screen">
                <div className="chat-bot">
                    <img src={logo} className="mustace-logo" alt="logo"/>
                    <ChatLine wait={FIRST_TIMEOUT} say={messages.firstView.greeting}/>
                    <ChatLine wait={SECOND_TIMEOUT} say={messages.firstView.intro}/>
                </div>
                <div className={"form " + this.isHidden()}>
                    <div className='group'>
                        <input className={this.state.inputClass} onChange={this.handleChange} value={this.state.name}
                               type="text" label='Name'/>
                        <label>Name</label>
                    </div>
                    <button disabled={!this.state.name} className="start-button" type="button"
                            onClick={this.props.onStoreAndMove}>Start</button>
                </div>
            </div>
        );
    }
}

export default IntroScreenView;
