const borrow = (customer, video) => {
    const borrowed = customer.borrowedVideos;
    return {
        customer: {...customer, borrowedVideos: borrowed.concat([video]) },
        video: {...video, onLoan: true, borrower: customer.id }
    }
}

module.exports = borrow;