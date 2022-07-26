const jest = require('jest');
import generateHash from '../../src/modules/auth/services/generate-hash';

describe('hasher service', () => {
    it('hasher function generates a hash for a unique string', async () => {
        const hash = await generateHash('somerandomstringenteredbytheuser', 'somerandomsalt');
        expect(hash).not.toBe(null);
    })
})