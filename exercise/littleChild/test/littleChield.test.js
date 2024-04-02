import { describe, it, expect } from 'vitest';

const littleChild = () => {
    
};

describe("test", () =>{
    it('test', () => {
        expect(typeof littleChild).toBe('function');
    })
});