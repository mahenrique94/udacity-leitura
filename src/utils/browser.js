import i18n from 'i18n'

import { history } from 'cfg/history'

const FIRST_INDEX = 0

const getLanguage = () => i18n.language.split('-')[FIRST_INDEX]
const navigateTo = path => history.push(path)

export { getLanguage, navigateTo }
