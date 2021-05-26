import React from 'react'
import { Link } from "react-router-dom"

const Intro = () => {
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
                                <form>
                                    <div className='d-flex'>
                                        <div className='w-80 player-box'>
                                            <input required type="text" className="form-control " placeholder="PLAYER 1" aria-label="Recipient's username" />
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-outline-danger">X</button>
                                            <button type="button" class="btn btn-outline-dark">O</button>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='w-80 player-box'>
                                            <input required type="text" className="form-control " placeholder="PLAYER 2" aria-label="Recipient's username" />
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-outline-danger">X</button>
                                            <button type="button" class="btn btn-outline-dark">O</button>
                                        </div>
                                    </div>
                                </form>
                                <Link>
                                    <button type='submit' className="btn btn-primary btn-lg btn-block">START</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro
