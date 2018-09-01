import { combineReducers } from 'redux-immutable'

import { reducer as notificationsReducer } from 'react-notification-system-redux'

import { reducers as postsReducer } from '@/posts/reducers'

const reducers = combineReducers({
    notificationsReducer,
    postsReducer
})

export { reducers }
