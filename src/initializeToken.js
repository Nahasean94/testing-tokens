import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))

export function initializeToken() {
    localStorage.setItem('jwtToken', 'my-token-here')
}
export function returnStore() {
return store
}

