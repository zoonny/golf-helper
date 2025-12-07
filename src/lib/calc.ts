export function sanitizeNumber(value: unknown, min = 0): number {
  const n = typeof value === 'number' ? value : Number(value);
  if (Number.isNaN(n)) return min;
  return Math.max(min, n);
}

export function computePuttingDistance(
  distance: number,
  greenSpeed: string,
  slope: string,
  slopeHeight: number
): number {
  const d = sanitizeNumber(distance, 0);
  const s = sanitizeNumber(slopeHeight, 0);
  const x = greenSpeed === 'VERY_FAST' ? 1.5 : 1.2;
  if (slope === 'UP') {
    return Number((d + s * computeUpX(greenSpeed)).toFixed(2));
  } else if (slope === 'DOWN') {
    return Number((d - s * computeDownX(greenSpeed)).toFixed(2));
  }
  return Number(d.toFixed(2));
}

export function computeDegree(distance: number, cup: number): number {
  const d = sanitizeNumber(distance, 0);
  const c = sanitizeNumber(cup, 0);
  return Number(((c / d) * 10).toFixed(2));
}

export function computePuttingSpeed(greenSpeed: string, puttingDistance: number): number {
  const d = sanitizeNumber(puttingDistance, 0);
  // 매우빠름
  // 3m  -> 2.4m/s
  // 5m  -> 2.8m/s
  // 7m  -> 3.4m/s
  // 10m -> 4.1m/s
  // 15m -> 4.8m/s
  // 20m -> 5.5m/s

  // 약간빠름
  // 3m  -> 2.4m/s
  // 5m  -> 3.1m/s
  // 7m  -> 4.0m/s
  // 10m -> 4.6m/s
  // 15m -> 5.6m/s
  // 20m -> 6.4m/s
  return 0;
}

function computeUpX(greenSpeed: string): number {
  switch (greenSpeed) {
    case 'VERY_FAST':
      return 15;
    case 'FAST':
      return 15;
    case 'SLIGHTLY_FAST':
      return 20;
    case 'NORMAL':
      return 20;
    case 'SLOW':
      return 20;
    default:
      return 10;
  }
}

function computeDownX(greenSpeed: string): number {
  switch (greenSpeed) {
    case 'VERY_FAST':
      return 15;
    case 'FAST':
      return 10;
    case 'SLIGHTLY_FAST':
      return 10;
    case 'NORMAL':
      return 10;
    case 'SLOW':
      return 10;
    default:
      return 10;
  }
}
