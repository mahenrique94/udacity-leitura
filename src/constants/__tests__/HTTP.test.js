import { CODES } from "../HTTP"

describe("Tests for HTTP constant", () => {

    it("Smoke tests", () => {
        expect(CODES.OK).toBeDefined()
    })

    it("Should match each constant with your respective value", () => {
        const HTTP_CODE_OK = 200
        expect(CODES.OK).toEqual(HTTP_CODE_OK)
    })

})
