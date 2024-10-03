import { Context, ServiceSchema } from "moleculer";


const MathService: ServiceSchema = {
name: 'math',
actions: {
    add(ctx: Context<{a: number, b: number}>) {
            const {a, b} = ctx.params
            
        return a + b
        }
    }
}

export default MathService