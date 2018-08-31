import { CODES } from '@/constants/HTTP'

const handleError = error => console.error(error)
const handleSuccess = ({ data }) => data
const responseWas = (responseCode, httpCode) => responseCode === httpCode
const responseWasOK = responseCode => responseWas(responseCode, CODES.OK)

export { handleError, handleSuccess, responseWasOK }
