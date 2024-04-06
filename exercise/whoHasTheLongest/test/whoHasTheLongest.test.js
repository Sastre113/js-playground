import { describe, it, test, expect } from 'vitest';
import { longest, longestWithArray } from '../whoHasTheLongest';

describe("Test sobre whoHasTheLongest", () =>{
    
    it('should be a function', () => {
        expect(typeof longest).toBe('function');
    });

    test('should be 0', () => {
        expect(longest('')).toBe(0);
    });

    test('should be 4', () => {
        expect(longest('aaBBBBcDDee')).toBe(4);
    });

    test('should be 8', () => {
        expect(longest('aaBBcDDDDDDeeFFFFFFFFg')).toBe(8);
    });
  
});
