import { messages } from "../en"

const { en: { translations } } = messages

describe("Tests for english messages", () => {

    it("Smoke tests", () => {
        expect(translations.titles.app).toBeDefined()
    })

    it("Should match all messages with your respect translation", () => {
        expect(translations.titles.app).toEqual("Reading")
    })

})
