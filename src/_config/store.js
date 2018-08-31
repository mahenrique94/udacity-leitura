import logger from 'redux-logger'

import createSagaMiddleware from 'redux-saga'

import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable'
import { composeWithDevTools } from 'redux-devtools-extension'

import { history } from './history'
import { reducers } from './reducers'

import { homeSaga } from '@/home/sagas'

import { Map } from 'immutable'

const sagaMiddleware = createSagaMiddleware()

const initialState = Map({})
const enhancers = []
const middleware = [
    logger,
    routerMiddleware(history),
    sagaMiddleware
]

const store = createStore(
    connectRouter(history)(reducers),
    initialState,
    compose(
        composeWithDevTools(applyMiddleware(...middleware), ...enhancers)
    )
)

sagaMiddleware.run(homeSaga)

export { store }
