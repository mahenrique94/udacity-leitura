import { types } from 'constants/Input'

const inputIs = (type, is) => type === is
const inputIsHidden = type => inputIs(type, types.HIDDEN)
const isInput = type => inputIs(type, types.INPUT)

export { inputIsHidden, isInput }
