import { handleActions } from 'redux-actions'

import { getAll, requestGetAll } from './actions'

import { store } from './store'

const reducers = handleActions({
    [getAll]: (state, { payload }) => state.merge({ list: payload, loading: false }),
    [requestGetAll]: state => state.set('loading', true)
}, store)

export { reducers }
