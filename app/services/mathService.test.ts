const MathService = require('./math.service');
/* const { ServiceBroker } = require("moleculer");
 */ 

describe('Test MathService', () => {
    const broker = new ServiceBroker({ logger: false})
    broker.createService(MathService)

    beforeAll(() => {
        broker.start()
    })
    afterAll(() => {
        broker.stop()
    });

    it('Should add two number', async () => {
        const result = await broker.call('math.add', {a: 5, b: 3})
        expect(result).toBe(8)
    })

    it('Should handle negative numbers', async () => {
        const result = await broker.call('math.add', {a: -5, b: 3})
        expect(result).toBe(-2)
    })
})