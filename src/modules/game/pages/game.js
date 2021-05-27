import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../store/appContex'

function Game() {

    const { store } = useContext(Context)
    return (
        <>
            <div className='container'>
                <div className="border-row">
                    <button type="button" className="btn btn-outline-danger">{store.player}</button>
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

            <div>
                <h6>Player 1</h6>
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
