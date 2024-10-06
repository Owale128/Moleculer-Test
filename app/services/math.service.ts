
module.exports = {
name: 'math',
actions: {
    add(ctx: { params: { a: number; b: number; }}) {
            const {a, b} = ctx.params
            
        return a + b
        }
    }
}