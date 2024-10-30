import {describe, expect, it, test} from '@jest/globals';
import {sum} from '../index';

describe('sum module', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('neagative test',()=>{
    expect(sum(-3,-4)).toBe(-7)
  })
});