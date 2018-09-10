import React from 'react'

import { ConnectedRouter } from 'connected-react-router/immutable'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'

import { combineLinkedRoutes, combineRoutes } from 'utils/routes'

import { routes as postsRoutes } from '@/posts/routes'
import { routes as notFoundRoutes } from 'components/notFound/routes'

import { history } from './history'
import { store } from './store'

const systemRoutes = combineRoutes(
    postsRoutes,
    notFoundRoutes
)

const routes = combineLinkedRoutes(systemRoutes)

const Routes = () => (
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Switch>
                { systemRoutes.map((route, index) => <Route { ...route } exact key={ index }/>) }
            </Switch>
        </ConnectedRouter>
    </Provider>
)

export { routes }
export default Routes
