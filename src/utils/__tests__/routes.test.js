import { combineLinkedRoutes, combineRoutes } from "../routes"

import Home from "@/home/pages/home"

describe("Tests for routes utils", () => {

    const homeRoutes = [ { component: Home, name: "home", path: "/" } ]
    const notFoundRoutes = [ { component: "NotFound" } ]

    it("Smoke tests", () => {
        expect(combineLinkedRoutes).toBeDefined()
        expect(combineRoutes).toBeDefined()
    })

    it("Should return home routes when just provide routes of the home component", () => {
        expect(combineRoutes(homeRoutes)).toEqual(homeRoutes)
    })

    it("Should return home and not found routes when just them was provided", () => {
        const [ homeRoute ] = homeRoutes
        const [ notFoundRoute ] = notFoundRoutes
        const combinedRoutes = [ homeRoute, notFoundRoute ]
        expect(combineRoutes(homeRoutes, notFoundRoutes)).toEqual(combinedRoutes)
    })

    it("Should return JSON routes when routes have path attribute", () => {
        const linkedRoutes = {
            home: "/"
        }
        expect(combineLinkedRoutes(homeRoutes, notFoundRoutes)).toEqual(linkedRoutes)
    })

    it("Should return a empty JSON routes when routes have no routes provided", () => {
        expect(combineLinkedRoutes(notFoundRoutes)).toEqual({})
    })

})
