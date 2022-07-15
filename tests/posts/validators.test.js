const jest = require('jest');

describe('Validator functions', () => {
    describe('validatePostID', () => {
        it('returns false when the post id is less than zero', () => {
            let result = validatePost(-2);
            expect(result).toBe(false);
        });
    });
});