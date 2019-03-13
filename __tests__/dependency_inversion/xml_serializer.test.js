const toXml = require("../../src/dependency_inversion/xml_serializer");

test('xml serializer', () => {
    expect(toXml({name: "xyz"})).toEqual(
        "<customer>xyz</customer>"
    );
})