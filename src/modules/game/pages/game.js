import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../store/appContex'


function Game() {
    const { store } = useContext(Context)
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    // const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        // return if won or occupied
        // if (winner || squares[i]) return;
        // select square
        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const renderMoves = () =>
        history.map((_step, move) => {
            //           const destination = move ? `Go to move #${move}` : "Go to Start";
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}></button>
                </li>
            );
        });


    return (
        <>
            <div className='container'>
                <div className="border-row">
                    <button type="button" className="btn btn-outline-danger"></button>
                    <button type="button" className="btn btn-outline-danger">XO</button>
                    <button type="button" className="btn btn-outline-danger">XO</button>
                </div>
                <div className="border-row">
                    <button type="button" className="btn btn-outline-danger">XO</button>
                    <button type="button" className="btn btn-outline-danger">OX</button>
                    <button type="button" className="btn btn-outline-danger">XO</button>
                </div>
                <div className="border-row">
                    <button type="button" className="btn btn-outline-danger">XO</button>
                    <button type="button" className="btn btn-outline-danger">XO</button>
                    <button type="button" className="btn btn-outline-danger">XO</button>
                </div>
            </div>


























            <h1>React Tic Tac Toe - With Hooks</h1>
            <div className="info-wrapper">
                <div>
                    <h3>History</h3>
                    {renderMoves()}
                </div>

            </div>

            <div>
                <h6>Player 1</h6>
                <h6>{store.playerOne.name}</h6>
                <p> 5 Wins</p>
                <Link to='/win-view'>
                    <button>Ganador</button>
                </Link>
                <hr />
                <h6>Player 2</h6>
                <p>3 Wins</p>
                <hr />
                <p>2 deuce</p>
            </div>
        </>
    )
}

export default Game
