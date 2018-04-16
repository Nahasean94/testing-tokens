    import React from 'react'
    import ReactDOM from 'react-dom'
    import {Provider} from 'react-redux'
    import Router from './routes'
    import {returnStore} from "./initializeToken"
    // import {createStore, applyMiddleware, compose} from 'redux'
    // import thunk from 'redux-thunk'

    import registerServiceWorker from './registerServiceWorker';
    // import rootReducer from "./rootReducer"

    // const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))



    ReactDOM.render(
        <Provider store={ returnStore()}>
            <Router/>
        </Provider>, document.getElementById('root'))
    registerServiceWorker();