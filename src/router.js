import React from 'react'
import { Switch, Route } from "react-router-dom"
import Game from './modules/game/pages/game'
import Home from './modules/home/pages/home'
import WinView from './modules/winView.js/pages/winView'
import injectContext from './store/appContex'

const Router = () => {
    return (
        <>
            <div className='container div-app justify-content-center aling-item-center'>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/game'>
                        <Game />
                    </Route>
                    <Route path='/win-view'>
                        <WinView />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default injectContext(Router)
