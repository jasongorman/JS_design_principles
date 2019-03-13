const toString = require("../../src/dependency_inversion/string_serializer");

test('string serializer', () => {
    expect(toString({name: "xyz"})).toEqual("Customer: xyz");
})