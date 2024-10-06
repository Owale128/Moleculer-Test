const LanguageService = require('./language.service')
const { ServiceBroker } = require("moleculer");


describe('Test LanguageService', () => {

    const broker = new ServiceBroker({logger: false})
    broker.createService(LanguageService)

    beforeAll(() => broker.start())
    afterAll(() => broker.stop())

    it('Should Switch languages To Swedish', async () => {
        const resultSV = await broker.call('language.getText', {language: 'sv'})
        expect(resultSV).toBe('Hej värld');
    })

    it('Should Switch Language To English', async () => {
        const resultEN = await broker.call('language.getText', {language: 'en'})
        expect(resultEN).toBe('Hello world')
    })

    it('Should Switch Language To French', async () => {
        const result = await broker.call('language.getText', {language: 'fr'})
        expect(result).toBe('Bonjour le mond');
    })


})