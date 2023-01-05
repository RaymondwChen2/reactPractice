import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        }
    }



    renderSquare(i) {
        return <Square value={i}/>
    }

    render() {
        const status = "Next Player: X"

        return (
            <div>
                <div className='status'> {status}</div>
                <div className='board-row'>
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className='board-row'>
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div><div className='board-row'>
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
            </div>
        )
    }

}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }


    render() {
        return (
            <button className='square' onClick={() => this.setState({value: "X"})}>
                {this.state.value}
            </button>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board/>
                </div>
                <div className='game-info'>
                    <div>{/*status*/}</div>
                    <div>{/*TODO*/}</div>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game/>)