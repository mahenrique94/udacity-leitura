import { generateRandomNum } from '../number'

describe('Tests for number utils', () => {

    const GENERATE_NUMBER = 1

    it('Smoke tests', () => {
        expect(generateRandomNum).toBeDefined()
    })

    it(`Should return ${GENERATE_NUMBER} with it was the min and max parameters`, () => {
        expect(generateRandomNum(GENERATE_NUMBER, GENERATE_NUMBER)).toEqual(GENERATE_NUMBER)
    })

})
