const quote = require("../../src/tell_dont_ask/carpet_quote");


test("quote for carpet without rounding up", () => {
    const room = {length: 2.5, width: 2.5};
    const carpet = {pricePerSqrMetre: 10.0, roundUp: false};
    expect(quote(room, carpet)).toBe(62.5);
})

test("quote for carpet with rounding up", () => {
    const room = {length: 2.5, width: 2.5};
    const carpet = {pricePerSqrMetre: 10.0, roundUp: true};
    expect(quote(room, carpet)).toBe(70.0);
})