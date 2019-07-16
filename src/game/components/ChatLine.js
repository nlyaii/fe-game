import React from 'react';

class ChatLine extends React.Component{
    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = {hidden : true};
    }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.wait );
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    isHidden = () => { return this.state.hidden ? 'hidden' : '' }

    render(){
        return (
            <div className={'chat-item ' + this.isHidden()}>
                <p className="chat-text" dangerouslySetInnerHTML={{__html: this.props.say}}/>
            </div>
        );
    }
}

export default ChatLine;
