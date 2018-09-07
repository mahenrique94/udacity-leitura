import { List, Map, Record } from 'immutable'

const store = Record({
    list: List(),
    loading: false,
    post: Map()
})()

export { store }
