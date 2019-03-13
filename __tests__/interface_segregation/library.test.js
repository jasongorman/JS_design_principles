const {add, dump} = require("../../src/interface_segregation/library");

describe('add books to library', () =>
{
    let library = {books:[]};

    const jaws = {title: "Jaws", author: "Peter Benchley", published: 1974, totalRating: 0, ratingCount: 0};
    const foundation = {title: "Foundation", author: "Isaac Asimov", published: 1951, totalRating: 0, ratingCount: 0};

    library = add(library, jaws);
    library = add(library, foundation);

    it('should make added books available', () => {
        expect(library.books).toContain(jaws);
        expect(library.books).toContain(foundation);
    })

    it('should dump summaries of books in library', () => {
        expect(dump(library)).toEqual(
            "Jaws by Peter Benchley, published 1974/n" +
            "Foundation by Isaac Asimov, published 1951/n"
        );
    })
})