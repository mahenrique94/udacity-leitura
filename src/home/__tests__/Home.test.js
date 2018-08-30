import React from "react"
import renderer from "react-test-renderer"

import Home from "../pages/Home"

describe("Tests for Home component", () => {

    it("Should rendering without crash", () => {
        const tree = renderer.create(
            <Home/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})
