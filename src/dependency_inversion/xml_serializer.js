const toXml = (customer) => {
    return "<customer>" + customer.name + "</customer>";
}

module.exports = toXml;