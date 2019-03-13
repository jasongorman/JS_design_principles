function credit(account, amount) {
    return {...account, balance: account.balance + amount};
}

function debit(account, amount) {
    if (amount > account.balance) {
        throw "Insufficient funds error"
    }
    return {...account, balance: account.balance - amount};
}

module.exports = {credit, debit};