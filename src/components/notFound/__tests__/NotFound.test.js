import React from "react"
import renderer from "react-test-renderer"

import NotFound from "../NotFound"

describe("Tests for NotFound component", () => {

    it("Should rendering without crash", () => {
        const tree = renderer.create(
            <NotFound/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})
