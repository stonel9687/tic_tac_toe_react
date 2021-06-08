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
    const [winX, setWinX] = useState('')
    const [winO, setWinO] = useState('')
    const [draw, setDraw] = useState('')
    const disableButonsWin = false

    const combinaciones = [
        ['a1', 'b1', 'c1'],
        ['a2', 'b2', 'c2'],
        ['a3', 'b3', 'c3'],
        ['a1', 'a2', 'a3'],
        ['b1', 'b2', 'b3'],
        ['c1', 'c2', 'c3'],
        ['a1', 'b2', 'c3'],
        ['a3', 'b2', 'c1'],
    ]
    // se crea variable con ternario para saber si X va primero o O va primero
    // se crea funcion handleClick y dentro del parametro coloca una i de iteracion
    let xO = xIsNext ? 'X' : 'O'

    const isWinner = (clone) => {
        if (xO === 'X') {
            combinaciones.forEach((index) => {
                const isXWinner = index.reduce((acc, iter) => {
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
                    setWinner(`El Ganador es ${store.playerOne.name}`)
                    setWinX(+1)
                }
            })
        } else {
            combinaciones.forEach((index) => {
                const isOWinner = index.reduce((acc, iter) => {
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
                    setWinner(`El Ganador es ${store.playerTwo.name}`)
                    setWinO(+1)
                }
            })
        }
    }

    const handleClick = () => {
        const position = 'a1'
        let clonex = []
        let cloneo = []
        if (xO == 'X') {
            setBoton1(xO)
            setXIsNext(!xIsNext)
            clonex = [...positionsX, position]
            setPositionsX([...positionsX, position])
            isWinner(clonex)
        } else {
            setBoton1(xO)
            setXIsNext(!xIsNext)
            cloneo = [...positionsO, position]
            setPositionsO([...positionsO, position])
            isWinner(cloneo)
        }
        setPositions([...positions, position])
    }

    const handleClick2 = () => {
        const position = 'b1'
        let cloneo = []
        let clonex = []
        if (xO == 'X') {
            setBoton2(xO)
            setXIsNext(!xIsNext)
            clonex = [...positionsX, position]
            setPositionsX([...positionsX, position])
            isWinner(clonex)
        } else {
            setBoton2(xO)
            setXIsNext(!xIsNext)
            cloneo = [...positionsO, position]
            setPositionsO([...positionsO, position])
            isWinner(cloneo)
        }
        setPositions([...positions, position])
    }

    const handleClick3 = () => {
        const position = 'c1'
        let cloneo = []
        let clonex = []
        if (xO == 'X') {
            setBoton3(xO)
            setXIsNext(!xIsNext)
            clonex = [...positionsX, position]
            setPositionsX([...positionsX, position])
            isWinner(clonex)
        } else {
            setBoton3(xO)
            setXIsNext(!xIsNext)
            cloneo = [...positionsO, position]
            setPositionsO([...positionsO, position])
            isWinner(cloneo)
        }
        //        setPositions([...positions, position])
    }

    const handleClick4 = () => {
        const position = 'a2'
        let cloneo = []
        let clonex = []
        if (xO == 'X') {
            setBoton4(xO)
            setXIsNext(!xIsNext)
            clonex = [...positionsX, position]
            setPositionsX([...positionsX, position])
            isWinner(clonex)
        } else {
            setBoton4(xO)
            setXIsNext(!xIsNext)
            cloneo = [...positionsO, position]
            setPositionsO([...positionsO, position])
            isWinner(cloneo)
        }
        //        setPositions([...positions, position])
    }

    const handleClick5 = () => {
        const position = 'b2'
        let cloneo = []
        let clonex = []
        if (xO == 'X') {
            setBoton5(xO)
            setXIsNext(!xIsNext)
            clonex = [...positionsX, position]
            setPositionsX([...positionsX, position])
            isWinner(clonex)
        } else {
            setBoton5(xO)
            setXIsNext(!xIsNext)
            cloneo = [...positionsO, position]
            setPositionsO([...positionsO, position])
            isWinner(cloneo)
        }
        //      setPositions([...positions, position])
    }

    const handleClick6 = () => {
        const position = 'c2'
        let cloneo = []
        let clonex = []
        if (xO == 'X') {
            setBoton6(xO)
            setXIsNext(!xIsNext)
            clonex = [...positionsX, position]
            setPositionsX([...positionsX, position])
            isWinner(clonex)
        } else {
            setBoton6(xO)
            setXIsNext(!xIsNext)
            cloneo = [...positionsO, position]
            setPositionsO([...positionsO, position])
            isWinner(cloneo)
        }
        //     setPositions([...positions, position])
    }

    const handleClick7 = () => {
        const position = 'a3'
        let cloneo = []
        let clonex = []
        if (xO == 'X') {
            setBoton7(xO)
            setXIsNext(!xIsNext)
            clonex = [...positionsX, position]
            setPositionsX([...positionsX, position])
            isWinner(clonex)
        } else {
            setBoton7(xO)
            setXIsNext(!xIsNext)
            cloneo = [...positionsO, position]
            setPositionsO([...positionsO, position])
            isWinner(cloneo)
        }
        //     setPositions([...positions, position])
    }

    const handleClick8 = () => {
        const position = 'b3'
        let cloneo = []
        let clonex = []
        if (xO == 'X') {
            setBoton8(xO)
            setXIsNext(!xIsNext)
            clonex = [...positionsX, position]
            setPositionsX([...positionsX, position])
            isWinner(clonex)
        } else {
            setBoton8(xO)
            setXIsNext(!xIsNext)
            cloneo = [...positionsO, position]
            setPositionsO([...positionsO, position])
            isWinner(cloneo)
        }
    }

    const handleClick9 = () => {
        const position = 'c3'
        let cloneo = []
        let clonex = []
        if (xO == 'X') {
            setBoton9(xO)
            setXIsNext(!xIsNext)
            clonex = [...positionsX, position]
            setPositionsX([...positionsX, position])
            isWinner(clonex)
        } else {
            setBoton9(xO)
            setXIsNext(!xIsNext)
            cloneo = [...positionsO, position]
            setPositionsO([...positionsO, position])
            isWinner(cloneo)
        }
    }

    const handleRetry=()=>{
                setPositionsX([])
        setPositionsO([])
        setBoton1('')
        setBoton2('')
        setBoton3('')
        setBoton4('')
        setBoton5('')
        setBoton6('')
        setBoton7('')
        setBoton8('')
        setBoton9('')
        setXIsNext(true)
        setWinner('')
    }

    return (
        <>
            <div className='container'>
                <div className="border-row">
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick} disabled={boton1.length !== 0 || winner}>{boton1}</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick2} disabled={boton2.length !== 0 || winner}>{boton2}</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick3} disabled={boton3.length !== 0 || winner}>{boton3}</button>
                </div>
                <div className="border-row">
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick4} disabled={boton4.length !== 0 || winner}>{boton4}</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick5} disabled={boton5.length !== 0 || winner}>{boton5}</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick6} disabled={boton6.length !== 0 || winner}>{boton6}</button>
                </div>
                <div className="border-row">
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick7} disabled={boton7.length !== 0 || winner}>{boton7}</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick8} disabled={boton8.length !== 0 || winner}>{boton8}</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleClick9} disabled={boton9.length !== 0 || winner}>{boton9}</button>
                </div>
            </div>

            <hr />
            <p>{winner}</p>
            <div>

                <h6>Player 1</h6>
                <h6>{store.playerOne.name}</h6>
                <h6></h6>
                <p> {winX} Wins</p>
                <hr />
                <h6>Player 2</h6>
                <h6>{store.playerTwo.name}</h6>
                <p>{winO} Wins</p>
                <hr />

                <p>2 deuce</p>
                <Link to='/'>
                    <button>Exit</button>
                </Link>
                <button onClick={handleRetry}>Play Again</button>
            </div>
        </>
    )
}