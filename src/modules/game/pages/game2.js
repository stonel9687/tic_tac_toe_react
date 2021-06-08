import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../store/appContex'

export const Game2 = () => {
    const { store } = useContext(Context)
    const [positions, setPositions] = useState([])
    const [positionsX, setPositionsX] = useState([])
    const [positionsO, setPositionsO] = useState([])
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
    const [winner, setWinner] = useState('')

    const combinaciones = ['a1', 'b1', 'c1']

    // se crea variable con ternario para saber si X va primero o O va primero
    // se crea funcion handleClick y dentro del parametro coloca una i de iteracion
    let xO = xIsNext ? 'X' : 'O'

    const isWinner = (clone) => {
        let isXWinner = combinaciones.reduce((acc, iter) => {
            let isX = clone.some((item) => {
                return iter === item
            })
            if (isX) {
                return acc + 1
            } else {
                return acc
            }
        }, 0)
        if (isXWinner === 3) {
            setWinner('Gano X')
        }

        let isOWinner = combinaciones.reduce((acc, iter) => {
            let isO = clone.some((item) => {
                return iter === item
            })
            if (isO) {
                return acc + 1
            } else {
                return acc
            }
        }, 0)
        if (isOWinner === 3) {
            setWinner('Gano O')
        }
    }

    const handleClick = () => {
        const position = 'a1'
        let cloneX = []
        let cloneO = []
        if (xO == 'X') {
            setBoton1(xO)
            setXIsNext(!xIsNext)
            cloneX = [...positionsX, position]
            setPositionsX([...positionsX, position])
        } else {
            setBoton1(xO)
            setXIsNext(!xIsNext)
            cloneO = [...positionsO, position]
            setPositionsO([...positionsO, position])
        }
        setPositions([...positions, position])
        isWinner(clone)
        console.log('X', positionsX)
        console.log('O', positionsO)
    }

    const handleClick2 = () => {
        const position = 'b1'
        let cloneX = []
        let cloneO = []
        if (xO == 'X') {
            setBoton2(xO)
            setXIsNext(!xIsNext)
            cloneX = [...positionsX, position]
            setPositionsX([...positionsX, position])
        } else {
            setBoton2(xO)
            setXIsNext(!xIsNext)
            cloneO = [...positionsO, position]
            setPositionsO([...positionsO, position])
        }
        setPositions([...positions, position])
        isWinner(clone)
        console.log('X', positionsX)
        console.log('O', positionsO)
    }

    const handleClick3 = () => {
        const position = 'c1'
        let cloneX = []
        let cloneO = []
        if (xO == 'X') {
            setBoton3(xO)
            setXIsNext(!xIsNext)
            cloneX = [...positionsX, position]
            setPositionsX([...positionsX, position])
        } else {
            setBoton3(xO)
            setXIsNext(!xIsNext)
            cloneO = [...positionsO, position]
            setPositionsO([...positionsO, position])
        }
        setPositions([...positions, position])
        isWinner(clone)
        console.log('X', positionsX)
        console.log('O', positionsO)
    }

    const handleClick4 = () => {
        const position = 'a2'
        let clone = []
        if (xO == 'X') {
            setBoton4(xO)
            setXIsNext(!xIsNext)
            clone = [...positionsX, position]
            setPositionsX([...positionsX, position])
        } else {
            setBoton4(xO)
            setXIsNext(!xIsNext)
            clone = [...positionsO, position]
            setPositionsO([...positionsO, position])
        }
        setPositions([...positions, position])
    }

    const handleClick5 = () => {
        const position = 'b2'
        let clone = []
        if (xO == 'X') {
            setBoton5(xO)
            setXIsNext(!xIsNext)
            clone = [...positionsX, position]
            setPositionsX([...positionsX, position])
        } else {
            setBoton5(xO)
            setXIsNext(!xIsNext)
            clone = [...positionsO, position]
            setPositionsO([...positionsO, position])
        }
        setPositions([...positions, position])
    }

    const handleClick6 = () => {
        const position = 'c2'
        let clone = []
        if (xO == 'X') {
            setBoton6(xO)
            setXIsNext(!xIsNext)
            clone = [...positionsX, position]
            setPositionsX([...positionsX, position])
        } else {
            setBoton6(xO)
            setXIsNext(!xIsNext)
            clone = [...positionsO, position]
            setPositionsO([...positionsO, position])
        }
        setPositions([...positions, position])
    }

    const handleClick7 = () => {
        const position = 'a3'
        let clone = []
        if (xO == 'X') {
            setBoton7(xO)
            setXIsNext(!xIsNext)
            clone = [...positionsX, position]
            setPositionsX([...positionsX, position])
        } else {
            setBoton7(xO)
            setXIsNext(!xIsNext)
            clone = [...positionsO, position]
            setPositionsO([...positionsO, position])
        }
        setPositions([...positions, position])
    }

    const handleClick8 = () => {
        const position = 'b3'
        let clone = []
        if (xO == 'X') {
            setBoton8(xO)
            setXIsNext(!xIsNext)
            clone = [...positionsX, position]
            setPositionsX([...positionsX, position])
        } else {
            setBoton8(xO)
            setXIsNext(!xIsNext)
            clone = [...positionsO, position]
            setPositionsO([...positionsO, position])
        }
        setPositions([...positions, position])
    }

    const handleClick9 = () => {
        const position = 'c3'
        let clone = []
        if (xO == 'X') {
            setBoton9(xO)
            setXIsNext(!xIsNext)
            clone = [...positionsX, position]
            setPositionsX([...positionsX, position])
        } else {
            setBoton9(xO)
            setXIsNext(!xIsNext)
            clone = [...positionsO, position]
            setPositionsO([...positionsO, position])
        }
        setPositions([...positions, position])
        console.log(winner)
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
            <p>{winner}</p>
            <div>

                <h6>Player 1</h6>
                <h6>{store.playerOne.name}</h6>
                <h6></h6>
                <p> 5 Wins</p>
                <hr />
                <h6>Player 2</h6>
                <h6>{store.playerTwo.name}</h6>
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

