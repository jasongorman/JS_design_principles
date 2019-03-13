const toXml = require("./xml_serializer");
const toHtml = require("./html_serializer");
const toString = require("./string_serializer");

const ResponseKind = {
    XML: 1,
    HTML: 2,
    STRING: 3
}

const write = (customer, responseKind) => {
    if(responseKind == ResponseKind.HTML) {
        return toHtml(customer);
    } else {
        if(responseKind == ResponseKind.XML){
            return toXml(customer);
        }
    }
    return toString(customer);
}

module.exports = {ResponseKind, write};