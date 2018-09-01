import 'normalize.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

import 'css/override.css'

const icons = Object.entries(faIcons)
    .map(([ , value ]) => value)
    .filter(({ icon }) => !!icon)

library.add(icons)
