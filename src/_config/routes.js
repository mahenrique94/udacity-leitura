import React from "react"

import { Route, Router, Switch } from "react-router"

import { combineLinkedRoutes, combineRoutes } from "utils/routes"

import { routes as homeRoutes } from "@/home/routes"
import { routes as notFoundRoutes } from "components/notFound/routes"

import { history } from "./history"

const systemRoutes = combineRoutes(
    homeRoutes,
    notFoundRoutes
)

const routes = combineLinkedRoutes(systemRoutes)

const Routes = () => (
    <Router history={ history }>
        <Switch>
            { systemRoutes.map((route, index) => <Route { ...route } exact key={ index }/>) }
        </Switch>
    </Router>
)

export { routes }
export default Routes
