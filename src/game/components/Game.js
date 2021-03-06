import React  from 'react';

class Game extends React.Component{
    constructor(props) {
        super(props)
        this.timeout = null;
        this.state = { hidden: true}
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.wait );
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleClick = (e) => {
        if(!this.props.disabled) {
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
    }


    render(){
        const {hidden} = this.state
        const gameClass =  hidden ? 'hidden' : ''

        const items = this.props.tiles.map((item, key) =>
            <div onClick={this.handleClick} className="square " key={key} id={item.id}/>
        );

        return (
            <div className={"game " + gameClass}>
                <div className="squares">
                   {items}
                </div>
            </div>
        );
    }
}


export default Game;
