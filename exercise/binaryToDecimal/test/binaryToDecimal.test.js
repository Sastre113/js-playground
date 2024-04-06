import { describe, it, test, expect } from 'vitest';
import { binaryToDecimal, binaryToDecimalManual } from '../binaryToDecimal';

describe("Test sobre binaryToDecimal", () =>{
    
    it('should be a function', () => {
        expect(typeof binaryToDecimal).toBe('function');
    });

    test('should be 0', () => {
        expect(binaryToDecimal('')).toBe(0);
    });

    test('should be 0', () => {
        expect(binaryToDecimal('00000000')).toBe(0);
    });

    test('should be 476', () => {
        expect(binaryToDecimal('0111011100')).toBe(476);
    });

    test('should be 102', () => {
        expect(binaryToDecimal('1100110')).toBe(102);
    });
  
});

describe("Test sobre binaryToDecimalManual", () =>{
    
    it('should be a function', () => {
        expect(typeof binaryToDecimalManual).toBe('function');
    });

    test('should be 0', () => {
        expect(binaryToDecimalManual('')).toBe(0);
    });

    test('should be 0', () => {
        expect(binaryToDecimalManual('00000000')).toBe(0);
    });

    test('should be 476', () => {
        expect(binaryToDecimalManual('0111011100')).toBe(476);
    });

    test('should be 102', () => {
        expect(binaryToDecimalManual('1100110')).toBe(102);
    });
  
});