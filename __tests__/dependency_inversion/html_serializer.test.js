const toHtml = require( "../../src/dependency_inversion/html_serializer");

test('html serializer', () => {
    expect(toHtml({name: "xyz"})).toEqual(
        "<html><head><title>Customer Details</title></head>" +
        "<body><table><tr><td>Customer</td><td>xyz" +
        "</td></tr></table></html>"
    );
})