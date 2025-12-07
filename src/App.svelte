<script lang="ts">
  import Compontents from './Components.svelte';

  export let title: string = '';

  const greenSpeeds = [
    { id: 'SLOW', label: '느림' },
    { id: 'NORMAL', label: '보통' },
    { id: 'SLIGHTLY_FAST', label: '약간빠름' },
    { id: 'FAST', label: '빠름' },
    { id: 'VERY_FAST', label: '매우빠름' },
  ];
  const slopes = [
    { id: 'DOWN', label: '내리막' },
    { id: 'NORMAL', label: '평지' },
    { id: 'UP', label: '오르막' },
  ];

  let greenSpeed: string = 'SLIGHTLY_FAST';
  let slope: string = 'UP';
  let slopeHeight: number = 0.25;
  let distance: number = 9.83;

  $: puttingDistance = distance + slopeHeight * 10 * 1.5;
  $: degree = distance * 1.5;
  $: selectedGreenSpeed = greenSpeeds.find((item) => item.id === greenSpeed);
  $: selectedSlope = slopes.find((item) => item.id === slope);

  function calculate() {
    console.log('결과');
  }
</script>

<main>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 gap-4">
    <!-- title -->
    <h1>{title}</h1>
    <div class="flex justify-center items-center gap-2">
      <p>그린스피드 :</p>
      <select bind:value={greenSpeed}>
        {#each greenSpeeds as item}
          <option value={item.id}>{item.label}</option>
        {/each}
      </select>
    </div>
    <div class="flex justify-center items-center gap-2">
      <p>경사도:</p>
      <select bind:value={slope}>
        {#each slopes as item}
          <option value={item.id}>{item.label}</option>
        {/each}
      </select>
      <input type="number" min="0" bind:value={slopeHeight} />
    </div>
    <div class="flex justify-center items-center gap-2">
      <p>홀까지 거리 :</p>
      <input type="number" min="0" bind:value={distance} />
    </div>
    <button class="bg-green-500 text-white" on:click={calculate}>계산하기</button>
    <div class="bg-blue-500 text-white p-4 rounded-lg w-64">
      <p>그린스피드: {selectedGreenSpeed ? selectedGreenSpeed.label : ''}</p>
      <p>경사도: {selectedSlope ? selectedSlope.label : ''}</p>
      <p>실제 거리: {distance} m</p>
      <p>퍼팅 거리: {puttingDistance} m</p>
      <p>계산된 각도: {degree} 도</p>
    </div>
  </div>
  <!-- <Compontents /> -->
</main>

<style>
</style>
