const {rating, rate, summarize} = require("../../src/interface_segregation/book");

test('rate a book', () => {
    const book = {title: "", author: "", published: 1990, totalRating: 0, ratingCount: 0};
    let rated = rate(4, rate(3, book));
    expect(rated.totalRating).toBe(7);
    expect(rated.ratingCount).toBe(2);
})

test('summarize book', () => {
    const book = {
        title: "Jaws",
        author: "Peter Benchley",
        published: 1974,
        totalRating: 0,
        ratingCount: 0
    };

    expect(summarize(book)).toEqual("Jaws by Peter Benchley, published 1974");
})