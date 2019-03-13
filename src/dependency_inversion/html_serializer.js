const toHtml = (customer) => {
    return "<html><head><title>Customer Details</title></head>" +
        "<body><table><tr><td>Customer</td><td>" + customer.name +
        "</td></tr></table></html>";
}

module.exports = toHtml;