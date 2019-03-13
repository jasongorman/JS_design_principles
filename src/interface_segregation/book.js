const rating = (book) => {
    return Math.ceil(book.totalRating / book.ratingCount);
}

const rate = (score, book) => {
    return {...book,
        totalRating: book.totalRating + score,
        ratingCount: book.ratingCount + 1
    };
}

const summarize = (book) => {
    return book.title + " by " + book.author + ", published " + book.published;
}

module.exports = {rating, rate, summarize};
