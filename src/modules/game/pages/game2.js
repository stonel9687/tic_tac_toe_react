import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../store/appContex'

export const Game2 = () => {
    const { store } = useContext(Context)
    //se crea arreglo de 9 espacios con valor nulo null
    // const [arrayGame, setArrayGame] = useState([Array(9).fill(null)])
    // se crea arreglo con el valor inicial del primer espacio
    //  const [stepNumbers, setStepNumbers] = useState([0])
    // se crea variable Xprimero para afirmar que X va a ser el primero
    const [positions, setPositions] = useState([])
    const [boton1, setBoton1] = useState('')
    const [boton2, setBoton2] = useState('')
    const [boton3, setBoton3] = useState('')
    const [boton4, setBoton4] = useState('')
    const [boton5, setBoton5] = useState('')
    const [boton6, setBoton6] = useState('')
    const [boton7, setBoton7] = useState('')
    const [boton8, setBoton8] = useState('')
    const [boton9, setBoton9] = useState('')
    const [xIsNext, setXIsNext] = useState(true)
    // se crea variable con ternario para saber si X va primero o O va primero
    // se crea funcion handleClick y dentro del parametro coloca una i de iteracion
    let xO = xIsNext ? 'X' : 'O'

    const handleClick = () => {
        if (xO == 'X') {
            setBoton1(xO)
            setXIsNext(!xIsNext)
        } else {
            setBoton1(xO)
            setXIsNext(!xIsNext)
        }
    }

    const handleClick2 = () => {
        if (xO == 'X') {
            setBoton2(xO)
            setXIsNext(!xIsNext)
        } else {
            setBoton2(xO)
            setXIsNext(!xIsNext)
        }
    }

    const handleClick3 = () => {
        if (xO == 'X') {
            setBoton3(xO)
            setXIsNext(!xIsNext)
        } else {
            setBoton3(xO)
            setXIsNext(!xIsNext)
        }
    }


    const handleClick4 = () => {
        if (xO == 'X') {
            setBoton4(xO)
            setXIsNext(!xIsNext)
        } else {
            setBoton4(xO)
            setXIsNext(!xIsNext)
        }
    }

    const handleClick5 = () => {
        if (xO == 'X') {
            setBoton5(xO)
            setXIsNext(!xIsNext)
        } else {
            setBoton5(xO)
            setXIsNext(!xIsNext)
        }
    }

    const handleClick6 = () => {
        if (xO == 'X') {
            setBoton6(xO)
            setXIsNext(!xIsNext)
        } else {
            setBoton6(xO)
            setXIsNext(!xIsNext)
        }
    }

    const handleClick7 = () => {
        if (xO == 'X') {
            setBoton7(xO)
            setXIsNext(!xIsNext)
        } else {
            setBoton7(xO)
            setXIsNext(!xIsNext)
        }
    }

    const handleClick8 = () => {
        if (xO == 'X') {
            setBoton8(xO)
            setXIsNext(!xIsNext)
        } else {
            setBoton8(xO)
            setXIsNext(!xIsNext)
        }
    }

    const handleClick9 = () => {
        if (xO == 'X') {
            setBoton9(xO)
            setXIsNext(!xIsNext)
        } else {
            setBoton9(xO)
            setXIsNext(!xIsNext)
        }
    }

    return (
        <>
            <div className='container'>
                <div className="border-row">
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick} disabled={boton1.length !== 0}>  {boton1}</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick2} disabled={boton2.length !== 0}>{boton2}</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick3} disabled={boton3.length !== 0}>{boton3}</button>
                </div>
                <div className="border-row">
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick4} disabled={boton4.length !== 0}>{boton4}</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick5} disabled={boton5.length !== 0}>{boton5}</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick6} disabled={boton6.length !== 0}>{boton6}</button>
                </div>
                <div className="border-row">
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick7} disabled={boton7.length !== 0}>{boton7}</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick8} disabled={boton8.length !== 0}>{boton8}</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick9} disabled={boton9.length !== 0}>{boton9}</button>
                </div>
            </div>

            <hr />

            <div>
                <h6>Player 1</h6>
                <h6>{store.playerOne.name}</h6>
                <p> 5 Wins</p>
                <hr />
                <h6>Player 2</h6>
                <p>3 Wins</p>
                <hr />
                <p>2 deuce</p>
                <Link to='/win-view'>
                    <button>Ganador</button>
                </Link>
            </div>
        </>
    )
}
