import { handleError, handleSuccess, responseWasOK } from '../http'

describe('Tests for http utils', () => {

    it('Smoke tests', () => {
        expect(handleError).toBeDefined()
        expect(handleSuccess).toBeDefined()
        expect(responseWasOK).toBeDefined()
    })

})
