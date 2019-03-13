const {credit, debit} = require("../../src/liskov_substitution/bank_account");

describe('bank account', () => {

    it('credit account', () => {
        const account = {id: 1, balance: 0};
        const credited = credit(account, 50);
        expect(credited.balance).toBe(50);
    })

    it('debit account with sufficient funds', () => {
        const account = {id: 1, balance: 50};
        const debited = debit(account, 50);
        expect(debited.balance).toBe(0);
    })

    it('debit account with insufficient funds', () => {
        const account = {id: 1, balance: 50};
        expect(() => debit(account, 51)).toThrow('Insufficient funds error');
    })
})