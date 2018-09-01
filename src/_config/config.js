import { environments } from 'constants/Environments'

import { config as developmentConfig } from 'environments/development'
import { config as productionConfig } from 'environments/production'

let config = developmentConfig

if (process.env.REACT_APP_ENVIRONMENT === environments.production) {
    config = productionConfig
}

export { config }
