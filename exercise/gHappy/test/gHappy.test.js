import { describe, it, expect } from 'vitest';
import { gHappy } from '../gHappy';

describe("Test sobre littleChield", () =>{
    
    it('should be a function', () => {
        expect(typeof gHappy).toBe('function');
    });

    it('should return true', () => {
        expect(gHappy('xyggxyz')).toBe(true);
    });
    
    it('should return false', () => {
        expect(gHappy('garage of eggs')).toBe(false);
    });

    it('should return true', () => {
        expect(gHappy('ggggg')).toBe(true);
    });

    it('should return false', () => {
        expect(gHappy('')).toBe(false);
    });
});