// 개인 프로젝트 데이터 — 라이브 링크 포함. 컴포넌트에서 map()으로 렌더.
const projects = [
  {
    id: "prive",
    name: "PRIVE",
    tagline: "FakeStoreAPI 기반 쇼핑몰",
    stack: ["React", "TypeScript", "Redux", "Sass"],
    desc: "메인 · 리스트 · 상세 · 장바구니 · 주문서 · 주문완료 · 로그인으로 구성한 쇼핑몰. 슬라이드 · 배너 · 상품 진열, 장바구니 담기, 상세 이동, 주문 흐름을 구현하고 반응형으로 작업.",
    thumb: "/img/prive_main.png",
    images: [
      "/img/prive_main.png",
      "/img/prive_cart.png",
      "/img/prive_order.png",
      "/img/prive_detail.png",
    ],
    link: "https://prive-shop.netlify.app/",
  },
  {
    id: "pokedex",
    name: "POKEDEX",
    tagline: "PokeAPI 기반 포켓몬 도감",
    stack: ["Next.js 15", "React Query", "Zustand"],
    desc: "Next.js 15로 만든 포켓몬 도감. PokeAPI로 데이터를 불러오고 React Query · Zustand로 상태를 관리. 검색 · 타입 분류 · 무한 스크롤을 적용해 기존 React 버전을 Next.js로 발전.",
    thumb: "/img/poke_dex_main.png",
    images: [
      "/img/poke_dex_main.png",
      "/img/poke_dex_search.png",
      "/img/poke_dex_type.png",
      "/img/poke_dex_detail.png",
    ],
    link: "https://poke-dex-next.vercel.app/",
  },
  {
    id: "moviedb",
    name: "MOVIE_DB",
    tagline: "TMDB API 기반 영화 · TV 정보",
    stack: ["React", "TMDB API"],
    desc: "영화와 TV 시리즈의 인기 목록 · 상영작 · 상세 정보를 보여주는 사이트. 트렌드 메인과 장르별 리스트, 상세 페이지에서 소개 · 개봉일 · 수익 · 상영시간 · 별점 정보를 확인.",
    thumb: "/img/mbdb.png",
    images: [
      "/img/mbdb.png",
      "/img/mbdb_detail.png",
      "/img/mbdb_movie.png",
      "/img/mbdb_tv.png",
    ],
    link: "https://movie-db-v1.netlify.app/",
  },
];

export default projects;
