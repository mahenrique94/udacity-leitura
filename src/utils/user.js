import { generateRandomNum } from "./number"

const CODED_BASE = 64
const MAX_CHAR_CODE = 125
const MIN_CHAR_CODE = 31

const getToken = () => {
    const token = []
    for (let i = 1; i < CODED_BASE; i++) {
        const randomNum = generateRandomNum(MIN_CHAR_CODE, MAX_CHAR_CODE)
        token.push(String.fromCharCode(randomNum))
    }
    return token.join("")
}

export { getToken }
