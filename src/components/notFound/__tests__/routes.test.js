import { routes } from "../routes"

import NotFound from "../NotFound"

describe("Tests for routes of the NotFound component", () => {

    it("Should each match routes with your respective value", () => {
        const expectedRoutes = [
            { component: NotFound }
        ]
        expect(routes).toEqual(expectedRoutes)
    })

})
