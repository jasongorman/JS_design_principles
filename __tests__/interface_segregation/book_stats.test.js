const {rating, rate} = require("../../src/interface_segregation/book");
const booksWithRating = require("../../src/interface_segregation/book_stats");

test('get books with specific rating', () => {

    const ratedBook = rating => ({title: "", author: "", published: 1990, totalRating: rating, ratingCount: 1});

    const books= [
        ratedBook(5),
        ratedBook(5),
        ratedBook(1)
    ];

    expect(booksWithRating(5, books).length).toBe(2);
})