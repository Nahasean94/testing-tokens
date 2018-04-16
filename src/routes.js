import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Profile from "./components/Profile"
import {initializeToken} from "./initializeToken"

import App from "./components/App"

import Newsfeed from "./components/Newsfeed"

export default () =>{
    return(   <BrowserRouter>
            <div>
                <App>
                    <Switch>
                        <Route exact path="/" component={Newsfeed}/>
                        <Route exact path="/profile" component={Profile}/>

                    </Switch>
                </App>


            </div>
        </BrowserRouter>
   )
}