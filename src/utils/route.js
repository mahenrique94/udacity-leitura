import _ from 'lodash'

import { not } from './functions'

const _getRouteId = match => match && match.params && match.params.id
const _getRoute = (match, param) => match && match.params && match.params[param]

const getRoute = (match, param) => _getRoute(match, param)
const getRouteId = match => _getRouteId(match)
const routeHasId = match => not(_.isUndefined(_getRouteId(match)))
const routeHas = (match, param) => not(_.isUndefined(_getRoute(match, param)))

export { getRoute, getRouteId, routeHas, routeHasId }
