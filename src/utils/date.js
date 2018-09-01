import { formats } from 'constants/DateFormats'

import { getLanguage } from './browser'

const getFormatDate = (extense = false) => {
    if (extense) {
        return formats[getLanguage()].extense
    }
    return formats[getLanguage()].short
}

export { getFormatDate }
