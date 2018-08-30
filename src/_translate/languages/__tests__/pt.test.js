import { messages } from "../pt"

const { pt: { translations } } = messages

describe("Tests for portuguese messages", () => {

    it("Smoke tests", () => {
        expect(translations.titles.app).toBeDefined()
    })

    it("Should match all messages with your respect translation", () => {
        expect(translations.titles.app).toEqual("Leitura")
    })

})
