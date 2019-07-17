import React  from 'react';
import clap from "../../assets/icons/clap.svg";
import sunglasses from "../../assets/icons/sunglasses-smile.svg";
import messages from '../../messages/messages'

class ResultView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: `${messages.resultView.twoWins} ${props.gameResult.name}!`,
            logo: clap
        }
    }

    componentDidMount() {
        if(this.props.gameResult.score === 0) {
            this.setState({text:`${messages.resultView.zeroWins} ${this.props.gameResult.name}.`})
            this.setState({logo: sunglasses})
        }

        if(this.props.gameResult.score === 1) {
            this.setState({text: `${messages.resultView.oneWin} ${this.props.gameResult.name}!`})
        }

        if(this.props.gameResult.score === 2) {
            this.setState({text: `${messages.resultView.twoWins} ${this.props.gameResult.name}!`})
        }

        if(this.props.gameResult.score === 3) {
            this.setState({text: `${messages.resultView.threeWins} ${this.props.gameResult.name}!`})
        }
    }
    render(){
        const {text, logo} = this.state

        return (
            <div className="result-view">
                <img src={logo} className="success-logo" alt="logo"/>
               <div className="success-message">
                   {text}
               </div>
                <div className="score">
                    {this.props.gameResult.score} {messages.resultView.outOf} {this.props.gameResult.attempts}
                </div>
                <button className="start-button" type="button"
                        onClick={this.props.onNewGame}>{messages.resultView.startOver}</button>
            </div>
        );
    }
}


export default ResultView;
