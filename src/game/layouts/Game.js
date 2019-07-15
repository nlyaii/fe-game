import React  from 'react';

class InitGameView extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            hidden: "hidden",
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: ""});
        }, this.props.wait );
    }

    render(){
        return (
            <div className={"game " + this.state.hidden}>
                <div className="squares">
                    <div className="square"/>
                    <div className="square"/>
                    <div className="square"/>
                </div>
            </div>
        );
    }

}


export default InitGameView;
