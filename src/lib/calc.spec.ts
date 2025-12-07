import { describe, it, expect } from 'vitest';
import { computePuttingDistance, computeDegree } from './calc';

describe('calc utils', () => {
  it('computes putting distance for positive inputs', () => {
    const d = computePuttingDistance(10, 0.25);
    // 10 + 0.25*10*1.5 = 10 + 3.75 = 13.75
    expect(d).toBeCloseTo(13.75, 2);
  });

  it('sanitizes negative slope and returns distance unchanged when slope < 0', () => {
    const d = computePuttingDistance(8, -1);
    // negative slope gets treated as min 0 in sanitize
    expect(d).toBeCloseTo(8.0, 2);
  });

  it('computes degree correctly', () => {
    expect(computeDegree(10, 0)).toBeCloseTo(15.0, 2);
    expect(computeDegree(0, 0)).toBeCloseTo(0, 2);
  });
});
