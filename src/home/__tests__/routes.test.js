import { routes } from "../routes"

import Home from "../pages/Home"

describe("Tests for routes of the Home component", () => {

    it("Should each match routes with your respective value", () => {
        const expectedRoutes = [
            { component: Home, name: "home", path: "/" }
        ]
        expect(routes).toEqual(expectedRoutes)
    })

})
