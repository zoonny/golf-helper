export type GreenSpeedId = 'SLOW' | 'NORMAL' | 'SLIGHTLY_FAST' | 'FAST' | 'VERY_FAST';
export type SlopeId = 'DOWN' | 'NORMAL' | 'UP';

export const GREEN_SPEEDS: { id: GreenSpeedId; label: string }[] = [
  { id: 'SLOW', label: '느림' },
  { id: 'NORMAL', label: '보통' },
  { id: 'SLIGHTLY_FAST', label: '약간빠름' },
  { id: 'FAST', label: '빠름' },
  { id: 'VERY_FAST', label: '매우빠름' },
];

export const SLOPES: { id: SlopeId; label: string }[] = [
  { id: 'DOWN', label: '내리막' },
  { id: 'NORMAL', label: '평지' },
  { id: 'UP', label: '오르막' },
];
