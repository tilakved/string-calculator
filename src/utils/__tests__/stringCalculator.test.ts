import { describe, it, expect } from 'vitest';
import { add } from '../stringCalculator';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    expect(add('1')).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    expect(add('1,5')).toBe(6);
  });

  it('should return the sum of multiple numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
  });

  it('should handle new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  it('should handle different combinations of delimiters', () => {
    expect(add('1\n2\n3,4')).toBe(10);
  });

  it('should support custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  it('should support custom delimiters with new lines', () => {
    expect(add('//;\n1;2\n3')).toBe(6);
  });

  it('should throw an error for a single negative number', () => {
    expect(() => add('-1')).toThrow('negative numbers not allowed: -1');
  });

  it('should throw an error listing all negative numbers', () => {
    expect(() => add('1,-2,3,-4,5,-6')).toThrow('negative numbers not allowed: -2,-4,-6');
  });
});
