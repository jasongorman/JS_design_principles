const borrow = require('../../src/open_closed/video_library.js')

describe('borrow a video', () => {

    const customer = {
        id: 'jgorman',
        borrowedVideos: []
    }
    const video = {
        onLoan: false,
        borrower: undefined
    }

    const loan = borrow(customer, video);

    it('should add video to customer borrowed collection', () => {
        expect(loan.customer.borrowedVideos).toContainEqual(video);
    })

    it('should flag video as on loan', () => {
        expect(loan.video.onLoan).toBe(true);
    })

    it('should record who has borrowed the video', () => {
        expect(loan.video.borrower).toBe(customer.id);
    })
})