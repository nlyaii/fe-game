import React from 'react';

class ChatLine extends React.Component{
    componentWillMount () {
        const that = this;
        setTimeout(function() {
            that.show();
        }, that.props.wait);
    }

    show () {
        this.setState({hidden : ""});
    }

    constructor(props) {
        super(props);
        this.state = {
            hidden : "hidden",
        };
    }

    render(){
        return (
            <div className={'chat-item ' + this.state.hidden}>
                <p className="chat-text" dangerouslySetInnerHTML={{__html: this.props.say}}/>
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: ""});
        }, this.props.wait );
    }
}

export default ChatLine;
