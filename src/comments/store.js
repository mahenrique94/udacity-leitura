import { List, Map, Record } from 'immutable'

const store = Record({
    comment: Map(),
    list: List(),
    loading: false
})()

export { store }
