import { TIMES } from "../time"

describe("Tests for time utils", () => {

    it("Smoke tests", () => {
        expect(TIMES.HALF_SECOND).toBeDefined()
        expect(TIMES.TEN_SECONDS).toBeDefined()
    })

    it("Should match each time with your respective value", () => {
        const EXPECTED_HALF_SECOND = 500
        const EXPECTED_TEN_SECONDS = 10000
        expect(TIMES.HALF_SECOND).toEqual(EXPECTED_HALF_SECOND)
        expect(TIMES.TEN_SECONDS).toEqual(EXPECTED_TEN_SECONDS)
    })

})
