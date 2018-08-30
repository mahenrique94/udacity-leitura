const routeHasNameAndPath = route => !!route && !!route.name && !!route.path

const combineLinkedRoutes = routesToCombine =>
    routesToCombine
        .filter(routeHasNameAndPath)
        .reduce((links, { name, path }) => {
            links[name] = path
            return links
        }, {})

const combineRoutes = (...routesToCombine) => routesToCombine.reduce((routes, route) => routes.concat(route), [])

export { combineLinkedRoutes, combineRoutes }
