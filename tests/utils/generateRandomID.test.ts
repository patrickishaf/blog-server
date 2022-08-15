import jest from 'jest';
import { generateRandomID } from '../../src/app/utils/generate-random-ID';

describe('generateRandomID', () => {
    it('should always generate a random ID', () => {
        const randomID = generateRandomID();
        expect(randomID).not.toBe(null);
    });
    it('will never return undefined', () => {
        const result = generateRandomID();
        expect(result).not.toBe(undefined);
    });
    it('will not return the same result twice', () => {
        const result1 = generateRandomID();
        const result2 = generateRandomID();
        expect(result1).not.toEqual(result2);
    });
});