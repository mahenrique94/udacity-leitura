import { types } from 'constants/Input'

const inputIs = (type, is) => type === is
const inputIsHidden = type => inputIs(type, types.HIDDEN)

export { inputIsHidden }
