import { describe, it, expect } from 'vitest';
import { littleChild } from '../littleChield';

describe("Es una función", () =>{
    it('test', () => {
        expect(typeof littleChild).toBe('function');
    })
});