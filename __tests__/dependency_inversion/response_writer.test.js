const {ResponseKind, write} = require("../../src/dependency_inversion/response_writer");

describe('response writer outputs', () => {
    it('should output XML when selected', () => {
        expect(write({name:""}, ResponseKind.XML)).toMatch("<customer>");
    })

    it('should output HTML when selected', () => {
        expect(write({name:""}, ResponseKind.HTML)).toMatch("<html>");
    })

    it('should output as string when selected', () => {
        expect(write({name:""}, ResponseKind.STRING)).toMatch("Customer:");
    })
})