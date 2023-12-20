const unique = require('./array.helper');
describe('ArrayHelper', () => {
    describe('unique', () => {
        it('returns a unique array with string values', () => {
            const uniqueVal = unique(['A', 'B', 'C', 'D', 'D']);
            expect(uniqueVal).toStrictEqual(['A', 'B', 'C', 'D']);
        });
        

        it('returns a unique array with string values when it was unique before', () => {
            const uniqueVal = unique(['A', 'B', 'C', 'D']);

            expect(uniqueVal).toStrictEqual(['A', 'B', 'C', 'D']);
        });

        it('returns a unique array with options objects', () => {
            const uniqueVal = unique(
                [
                    { key: 'A', priority: 1 },
                    { key: 'B', priority: 2 },
                    { key: 'B', priority: 2 }
                ],
                'key'
            );

            expect(uniqueVal).toStrictEqual([
                { key: 'A', priority: 1 },
                { key: 'B', priority: 2 }
            ]);
        });

        it('throws an error when the compare key misses for object arrays', () => {
            let error;

            try {
                unique([
                    { key: 'A', priority: 1 },
                    { key: 'B', priority: 2 },
                    { key: 'B', priority: 2 }
                ]);
            } catch (err) {
                error = err;
            }

            expect(error).toBeTruthy();
        });
    });
});