<script lang="ts">
  import { GREEN_SPEEDS, SLOPES, type GreenSpeedId, type SlopeId } from './lib/constants';
  import {
    computePuttingDistance,
    computeDegree,
    sanitizeNumber,
    computePuttingSpeed,
  } from './lib/calc';
  import PrimaryButton from './components/PrimaryButton.svelte';
  import SecondaryButton from './components/SecondaryButton.svelte';

  export let title: string = '';

  let greenSpeed: GreenSpeedId = 'VERY_FAST';
  let slope: SlopeId = 'UP';
  let slopeHeight: number = 0.25;
  let distance: number = 9.83;
  let cup: number = 4;

  // derived values use utility functions for testability & clarity
  $: puttingDistance = computePuttingDistance(distance, greenSpeed, slope, slopeHeight);
  $: degree = computeDegree(distance, cup);
  $: selectedGreenSpeed = GREEN_SPEEDS.find((item) => item.id === greenSpeed);
  $: selectedSlope = SLOPES.find((item) => item.id === slope);
  $: puttingSpeed = computePuttingSpeed(
    selectedGreenSpeed ? selectedGreenSpeed.id : 'NORMAL',
    puttingDistance
  );

  // small state to indicate last calculation (accessible for screen readers)
  let lastCalculatedAt: string | null = null;

  function calculate() {
    // sanitize inputs before using them further
    // distance = sanitizeNumber(distance, 0);
    // slopeHeight = sanitizeNumber(slopeHeight, 0);
    // lastCalculatedAt = new Date().toISOString();
    alert('계산 기능은 현재 비활성화되어 있습니다.');
  }
</script>

<main>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 gap-4">
    <!-- title -->
    <h1>{title}</h1>
    <div class="flex justify-center items-center gap-2">
      <label for="greenSpeed" class="sr-only">그린스피드</label>
      <p class="mr-2">그린스피드 :</p>
      <select id="greenSpeed" bind:value={greenSpeed} aria-label="그린스피드 선택">
        {#each GREEN_SPEEDS as item}
          <option value={item.id}>{item.label}</option>
        {/each}
      </select>
    </div>
    <div class="flex justify-center items-center gap-2">
      <label for="distance" class="sr-only">홀까지 거리(m)</label>
      <p class="mr-2">홀까지거리(m) :</p>
      <input
        id="distance"
        type="number"
        step="0.01"
        bind:value={distance}
        on:input={(e) => (distance = sanitizeNumber((e.target as HTMLInputElement).value, 0))}
        aria-label="홀까지 거리(m)"
      />
    </div>
    <div class="flex justify-center items-center gap-2">
      <label for="slope" class="sr-only">경사도(m)</label>
      <p class="mr-2">경사도(m) :</p>
      <select id="slope" bind:value={slope} aria-label="경사도 선택">
        {#each SLOPES as item}
          <option value={item.id}>{item.label}</option>
        {/each}
      </select>
      <label for="slopeHeight" class="sr-only">경사 높이</label>
      <input
        id="slopeHeight"
        type="number"
        step="0.01"
        bind:value={slopeHeight}
        on:input={(e) => (slopeHeight = sanitizeNumber((e.target as HTMLInputElement).value, 0))}
        aria-label="경사 높이 (m)"
      />
    </div>
    <div class="flex justify-center items-center gap-2">
      <label for="cup" class="sr-only">좌우편차</label>
      <p class="mr-2">좌우편차(컵):</p>
      <input
        id="cup"
        type="number"
        step="0.01"
        bind:value={cup}
        on:input={(e) => (cup = sanitizeNumber((e.target as HTMLInputElement).value, 0))}
        aria-label="좌우편차(컵)"
      />
    </div>
    <PrimaryButton on:handleClick={calculate} ariaLabel="계산하기">계산하기</PrimaryButton>
    <div class="mt-2">
      <SecondaryButton ariaLabel="도움 버튼">도움</SecondaryButton>
    </div>
    <div class="bg-blue-500 text-white p-4 rounded-lg w-64 mt-2" role="status" aria-live="polite">
      <p>그린스피드: {selectedGreenSpeed ? selectedGreenSpeed.label : ''}</p>
      <p>실제 거리: {distance} m</p>
      <p>경사도: {selectedSlope ? selectedSlope.label : ''}, {slopeHeight} m</p>
      <p>퍼팅 거리: {puttingDistance} m</p>
      <p>퍼팅 스피드: {puttingSpeed} m/s</p>
      <p>계산된 각도: {degree} 도</p>
      {#if lastCalculatedAt}
        <p class="text-sm mt-2">마지막 계산: {new Date(lastCalculatedAt).toLocaleString()}</p>
      {/if}
    </div>
  </div>
  <!-- buttons are inlined above; legacy Components.svelte marked deprecated -->
</main>

<style>
</style>
