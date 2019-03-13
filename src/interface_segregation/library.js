const {rating, rate, summarize} = require("./book");

const add = (library, book) => {
    return {...library, books: library.books.concat(book)};
}

const dump = (library) => {
    return library.books.reduce((contents, book) => contents + summarize(book) + "/n", "");
}

module.exports = {add, dump};