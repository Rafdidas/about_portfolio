// AI 활용 영역 데이터. 실무 활용 + 검증 기준 + AI 기반 개인 프로젝트.
const ai = {
  intro:
    "결과물을 그대로 받아 쓰는 것이 아니라, 검증 기준을 두고 AI를 실무와 개인 프로젝트에 활용합니다.",
  items: [
    {
      id: "work",
      title: "실무에 활용",
      desc: "Figma · MCP 연동과 Codex · Claude Code 등 AI 도구로 코드 구조 파악, 구현 방향 탐색, 오류 원인 조사, 컴포넌트 · 레이아웃 초안 작성 시간을 줄여 퍼블리싱 생산성을 높입니다.",
      tags: ["Figma · MCP", "Codex", "Claude Code"],
    },
    {
      id: "verify",
      title: "검증 기준",
      desc: "AI 산출물은 그대로 반영하지 않고 디자인 시스템 기준, 기존 코드 구조, 반응형 동작, 컴포넌트 재사용성, QA 재수정 여부를 기준으로 검증한 뒤 적용합니다.",
      tags: ["Design System", "반응형", "재사용성", "QA"],
    },
    {
      id: "tmdb",
      title: "TMDB AI RECO",
      desc: "OpenAI로 사용자가 고른 영화의 취향을 분석해 무드 키워드와 맞춤 추천을 생성하는 서비스. Route Handler로 TMDB · OpenAI 연동과 스키마 검증을 처리.",
      tags: ["OpenAI", "Next.js"],
      link: "https://tmdb-ai-reco.vercel.app/",
    },
    {
      id: "monibuk-ai",
      title: "머니북 가계부",
      desc: "AI 협업으로 직접 구축한 개인 재무 관리 서비스. Claude Code 등 AI 도구를 활용해 Supabase 연동과 차트 · 맞춤형 SVG 시각화까지 직접 설계 · 구현.",
      tags: ["AI 협업 구축", "Supabase"],
      link: "https://monibuk.com/",
    },
  ],
};

export default ai;
