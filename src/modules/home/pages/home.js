import { useContext, useState } from 'react'
import { useHistory } from "react-router-dom"
import { Context } from '../../../store/appContex'

const Home = () => {
    const history = useHistory()
    const { store, actions } = useContext(Context)
    const [errorMessage, setErrorMessage] = useState('')


    const symbolPlayerOneX = store.playerOne.simbolSelected === 'x' ? 'bg-button' : ''
    const symbolPlayerOneO = store.playerOne.simbolSelected === 'o' ? 'bg-button' : ''

    const handleSubmit = (e) => {
        e.preventDefault()
        const players = 
        store.playerOne.simbolSelected !== '' &&
            store.playerTwo.simbolSelected !== '' &&
            store.playerOne.name !== '' &&
            store.playerTwo.name !== ''

        players ? history.push('/game') : setErrorMessage('Debes completar los campos')
        console.log(players)
    }

    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center vh-100'>
                    <div className="table table-striped">
                        <div className='input-add container'>
                            <div>
                                <div className='text-center'>
                                    <h1 className='font-white'>TIC TAC TOE</h1>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className='d-flex'>
                                        <div className='w-80 player-box'>
                                            <input  type="text" className="form-control " placeholder="PLAYER 1" aria-label="Recipient's username" name='playerOne' value={store.playerOne.name} onChange={actions.handleChange} />
                                        </div>
                                        <div>
                                            <button type="button" onClick={() => { actions.handleSelect('X') }} className={`btn btn-outline-danger ${symbolPlayerOneX}`}>X</button>
                                            <button type="button" onClick={() => { actions.handleSelect('O') }} className={`btn btn-outline-dark ${symbolPlayerOneO}`}>O</button>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='w-80 player-box'>
                                            <input type="text" className="form-control " placeholder="PLAYER 2" aria-label="Recipient's username" name='playerTwo' value={store.playerTwo.name} onChange={actions.handleChange} />
                                        </div>
                                        <div>
                                            <button type="button" onClick={() => { actions.handleSelect('O') }} className={`btn btn-outline-danger ${symbolPlayerOneO}`}>X</button>
                                            <button type="button" onClick={() => { actions.handleSelect('X') }} className={`btn btn-outline-dark ${symbolPlayerOneX}`}>O</button>
                                        </div>
                                    </div>
                                    <button type='submit' className="btn btn-primary btn-lg btn-block" >START</button>
                                    <p>{errorMessage}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
