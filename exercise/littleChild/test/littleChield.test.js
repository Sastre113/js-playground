import { describe, it, test, expect } from 'vitest';
import { littleChild } from '../littleChield';

describe("Test sobre littleChield", () =>{
    
    it('should be a function', () => {
        expect(typeof littleChild).toBe('function');
    });

    test('should throw if not number is provided as parameter', () => {
        expect(() => littleChild()).toThrow();
    });

    test('should throw if not number is provided as parameter', () => {
        expect(() => littleChild()).toThrow();
    });
    
    test('', () => {

    });


});