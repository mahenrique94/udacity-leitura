import { combineReducers } from "redux"

import { reducers as homeReducer } from "@/home/reducers"

const reducers = combineReducers({
    homeReducer
})

export { reducers }
