import logger from "redux-logger"

import createSagaMiddleware from "redux-saga"

import { applyMiddleware, compose, createStore } from "redux"
import { connectRouter, routerMiddleware } from "connected-react-router"
import { composeWithDevTools } from "redux-devtools-extension"

import { history } from "./history"
import { reducers } from "./reducers"

import { homeSaga } from "@/home/sagas"

const sagaMiddleware = createSagaMiddleware()

const initialState = {}
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
