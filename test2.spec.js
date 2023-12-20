const unique = require('./array.helper');

describe('ArrayHelper2', () => {
    describe('unique2', () => {
        it('returns a empty array2', () => {
            const uniqueVal = unique([]);
            expect(uniqueVal).toStrictEqual([]);
        });
    });
});