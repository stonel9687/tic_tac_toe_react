import React from 'react'
import { Link } from 'react-router-dom'

function WinView() {
    return (
        <>
          <p>Player # Wins!!!!!!</p>
          <Link to='/game'>
          <button>Play Again</button>
          </Link>
          <Link to='/'>
          <button>Exit</button> 
          </Link>
        </>
    )
}

export default WinView
