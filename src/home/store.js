import { List, Record } from "immutable"

const store = Record({
    loading: false,
    tasks: List()
})()

export { store }
