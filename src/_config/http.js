import axios from 'axios'

import { getToken } from 'utils/user'
import { TIMES } from 'utils/time'

const API_URL = 'https://localhost:8080/'

const http = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: getToken(),
        'Content-Type': 'application/json'
    },
    timeout: TIMES.TEN_SECONDS
})

export default http
