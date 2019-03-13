const debit = (payer, amount) => {
    return {...payer, balance: payer.balance - amount};
}

const credit = (payee, amount) => {
    return {...payee, balance: payee.balance + amount};
}

module.exports = {debit, credit};