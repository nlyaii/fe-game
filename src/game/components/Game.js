import React  from 'react';

class Game extends React.Component{
    constructor(props) {
        super(props)
        this.timeout = null;
        this.state = { hidden: true}
    }

    isHidden = () => { return this.state.hidden ? 'hidden' : '' }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.wait );
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleClick = (e) => {
        let id = parseFloat(e.target.id)
        let squareClicked = document.getElementById(e.target.id)

        if(id === this.props.number) {
            squareClicked.className += 'valid'
        } else {
            squareClicked.className += 'invalid'
        }

        setTimeout(() => {
            squareClicked.className = 'square '
        }, 1500);

        this.props.onSelectSquare(id)
    }


    render(){
        return (
            <div className={"game " + this.isHidden()}>
                <div className="squares">
                    <div id="1" onClick={this.handleClick} className="square "/>
                    <div id="2" onClick={this.handleClick} className="square "/>
                    <div id="3" onClick={this.handleClick} className="square "/>
                </div>
            </div>
        );
    }
}


export default Game;
