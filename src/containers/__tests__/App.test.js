import React from "react"
import renderer from "react-test-renderer"

import App from "../App"

describe("Tests for App container", () => {

    it("Should rendering without crash", () => {
        const tree = renderer.create(
            <App>
                <h1>App</h1>
            </App>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})
