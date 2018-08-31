import { combineReducers } from "redux-immutable"

import { reducers as homeReducer } from "@/home/reducers"

const reducers = combineReducers({
    homeReducer
})

export { reducers }
