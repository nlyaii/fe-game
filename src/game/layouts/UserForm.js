import React from 'react';

class UserForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hidden : "hidden",
            inputClass: '',
            name: ''
        };
    }

    componentWillMount () {
        const that = this;
        setTimeout(function() {
            that.show();
        }, that.props.wait);
    }

    show () {
        this.setState({hidden : ""});
    }

    handleChange = (e) => {
        if(e.target.value.length) { this.setState({ inputClass: 'active' }); }
        this.setState({ name: e.target.value });
    }

    render(){
        return (
            <div className={'form ' + this.state.hidden}>
                <div className='group'>
                    <input className={this.state.inputClass} onChange={this.handleChange} value={this.state.name}
                           type="text" label='Name'/>
                    <label>Name</label>
                </div>
                <button disabled={!this.state.name} className="start-button" type="button"
                        onClick={this.storeAndMove}>Start</button>
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: ""});
        }, this.props.wait );
    }

    storeAndMove() {
        return true
    }
}

export default UserForm;
