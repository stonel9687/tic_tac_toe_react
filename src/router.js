import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from './layout'
import injectContext from './store/appContex'

const Router = () => {
    return (
        <>
        <div className='container div-app justify-content-center aling-item-center'>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
            </Switch>
            </div>
        </>
    )
}

export default injectContext(Router)
