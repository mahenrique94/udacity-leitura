import axios from 'axios'

import { config } from './config'

import { getToken } from 'utils/user'
import { TIMES } from 'utils/time'

const API_URL = config.api.url

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
