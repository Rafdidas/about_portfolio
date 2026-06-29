// 개인 프로젝트 데이터 — 라이브 링크 포함. 컴포넌트에서 map()으로 렌더.
const projects = [
  {
    id: "monibuk",
    name: "머니북 가계부",
    tagline: "수입 · 지출 · 저축 · 투자 관리 웹 서비스",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Chart.js"],
    desc: "수입 · 지출 · 고정비 · 저축 목표 · 투자 흐름을 한곳에서 관리하는 가계부 서비스. Supabase로 데이터를 동기화하고, Chart.js와 맞춤형 SVG 시각화로 월별 소비 패턴과 자산 흐름을 보여줌. 앱 설치 없이 PC · 모바일 브라우저에서 동작.",
    thumb: "/img/monibuk.png",
    link: "https://monibuk.com/",
  },
  {
    id: "tmdb-ai-reco",
    name: "TMDB AI RECO",
    tagline: "AI가 취향을 분석해 추천하는 영화 서비스",
    stack: ["Next.js 16", "React 19", "TypeScript", "OpenAI"],
    desc: "TMDB로 영화를 탐색하고 좋아하는 작품 3~5개를 고르면, OpenAI가 취향을 분석해 무드 키워드와 맞춤 추천을 생성. App Router의 Route Handler로 TMDB · OpenAI 연동과 스키마 검증을 처리.",
    thumb: "/img/tmdb_ai.png",
    link: "https://tmdb-ai-reco.vercel.app/",
  },
  {
    id: "pokedex",
    name: "POKEDEX",
    tagline: "PokeAPI 기반 포켓몬 도감",
    stack: ["Next.js 15", "TypeScript", "React Query", "Zustand"],
    desc: "PokeAPI로 데이터를 불러오는 포켓몬 도감. 이름 검색 · 타입 분류 · 무한 스크롤을 적용하고, React Query · Zustand로 상태를 관리. 상세 페이지에서 능력치 · 특성 · 신체 정보를 확인.",
    thumb: "/img/poke_dex_main.png",
    link: "https://poke-dex-next.vercel.app/",
  },
];

export default projects;
