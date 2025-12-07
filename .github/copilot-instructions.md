# Repo-specific Copilot Instructions

이 파일은 AI 코딩 에이전트가 이 레포지토리에서 빠르게 생산적이 되도록 프로젝트 고유 관례와 핵심 위치를 요약합니다.

- **프로젝트 유형:** Svelte 5 + TypeScript + Vite (경량 SPA 템플릿).
- **핵심 빌드/개발 명령:**

  - `npm run dev` — 개발용 Vite 서버(핫 리로드).
  - `npm run build` — 프로덕션 번들 생성.
  - `npm run preview` — 빌드 결과 로컬 프리뷰.
  - `npm run check` — `svelte-check` + `tsc`로 타입 검사 및 프로젝트 검증.

- **주요 파일 / 디렉토리 (참조용):**

  - `index.html` — 앱 진입점, mount 대상은 `id="app"`.
  - `src/main.ts` — 앱을 `mount(App, { target: document.getElementById('app')! })`로 시작합니다.
  - `src/App.svelte`, `src/lib/Counter.svelte` — 예제 컴포넌트; `src/lib`에 재사용 컴포넌트를 둡니다.
  - `svelte.config.js`, `vite.config.ts` — `vitePreprocess()` 및 `@sveltejs/vite-plugin-svelte` 사용 설정.
  - `tsconfig.app.json` — `@tsconfig/svelte` 확장, `allowJs: true`, `checkJs: true` (`.svelte`와 JS 타입검사 허용).

- **프로젝트 특이점 / 패턴(중요)**

  - Svelte 5 API 사용 가능성이 높음: `src/main.ts`의 `mount` 함수와 `src/lib/Counter.svelte`의 `$state(...)` 같은 문법이 사용됩니다. 에이전트는 Svelte 5 문서(로컬 코드와 일치하는지)와 호환되는 제안을 하십시오.
  - 컴포넌트는 `lang="ts"`를 사용합니다. 타입 추론을 유지하려면 변경 시 `npm run check`를 권장합니다.
  - `index.html`의 `#app`을 그대로 유지하는 변경이 많습니다. mount 타깃을 변경할 때는 `index.html`과 `src/main.ts`를 함께 수정하세요.

- **코드 변경/PR 가이드**

  - 새로운 Svelte 컴포넌트는 `src/lib`에 넣고 `App.svelte`에서 임포트 예시를 따르세요.
  - 타입 관련 변경을 할 때 `npm run check`를 실행하여 `svelte-check`와 `tsc` 오류를 확인합니다.
  - 빌드 관련 제안(예: Vite 플러그인 추가)은 `vite.config.ts`와 `svelte.config.js` 영향을 함께 검토하세요.

- **디버깅 / 런타임**

  - 개발 서버는 기본적으로 `http://localhost:5173`에서 동작합니다(Vite 기본 포트). 포트를 바꿀 경우 `vite` 실행 인자나 `vite.config.ts`를 확인하세요.

- **예시 스니펫(참조용)**

  - 마운트 지점 확인: `index.html` -> `div id="app"` 와 `src/main.ts`의 `mount` 호출을 함께 확인.
  - 로컬 상태 예: `src/lib/Counter.svelte`:
    - `let count: number = $state(0)` (로컬 상태 초기화)
    - `onclick={increment}` 이벤트 핸들러 패턴

- **무시할 내용**
  - 레포에는 테스트 러너 설정이 없습니다. 테스트 관련 제안은 명시적으로 요청받을 때만 추가하십시오.

빠르게 수정할 부분이나 더 자세히 문서화했으면 하는 영역(예: 스토어 구조, 라우터 계획 등)을 알려주세요. 수정 요청을 반영해 파일을 보강하겠습니다.
