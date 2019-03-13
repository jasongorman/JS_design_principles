const {debit, credit} = require("./bank_account");

const transfer = (payer, payee, amount) => {
    return {
        payer: debit(payer, amount),
        payee: credit(payee, amount),
        amount: amount
    };
}

const toXml = (transferRecord)  => {
    return "<BankTransfer amount='" + transferRecord.amount + "'>" +
        "<Payer>" + transferRecord.payer.id + "</Payer>" +
        "<Payee>" + transferRecord.payee.id + "</Payee>" +
        "</BankTransfer>";
}

module.exports = {transfer, toXml};