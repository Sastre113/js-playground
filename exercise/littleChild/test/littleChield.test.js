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
        expect(() => littleChild()).toThrow('parameters provided must be numbers');
    });
    
    test('should throw if not number is provided as parameter', () => {
        expect(() => littleChild(NaN,NaN)).toThrow('parameters provided must be numbers');
    });

    test('if child1 = 1 and child2 = 2, should return false', () => {
        expect(littleChild(1, 2)).toBe(false);
    });
    
    test('if child1 = 15 and child2 = -1, should return false', () => {
        expect(littleChild(15, -1)).toBe(false);
    });
    
    test('if child1 = 0 and child2 = 3, should return false', () => {
        expect(littleChild(0, 3)).toBe(false);
    });

    test('if child1 = -1 and child2 = 13, should return true', () => {
        expect(littleChild(-1, 13)).toBe(true);
    });

    test('if child1 = 5 and child2 = -1, should return true', () => {
        expect(littleChild(5, -1)).toBe(true);
    });

    test('if child1 = 0 and child2 = 14, should return false', () => {
        expect(littleChild(0, 14)).toBe(false);
    });

});