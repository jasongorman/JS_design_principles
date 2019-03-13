const {rating, rate, summarize} = require("./book");

const booksWithRating = (number, books) => {
    return books.filter((book) => rating(book) == number);
}

module.exports = booksWithRating;