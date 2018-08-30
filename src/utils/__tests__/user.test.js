import { getToken } from "../user"

describe("Tests for user utils", () => {

    it("Smoke tests", () => {
        expect(getToken).toBeDefined()
    })

})
