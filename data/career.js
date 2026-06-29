// 회사 경력 데이터 — 최신순. 컴포넌트에서 map()으로 렌더.
const career = [
  {
    id: "softzion",
    company: "㈜소프트자이온",
    role: "퍼블리셔 · 주임",
    period: "2025.09 — 재직중",
    current: true,
    summary:
      "CRM · CSM · 레미콘 스마트관리 등 B2B 업무 시스템의 PC · 모바일 화면 퍼블리싱과 디자인 시스템 고도화를 담당합니다.",
    stack: ["Angular", "Next.js", "React", "TypeScript", "Sass"],
    projects: [
      {
        name: "WeSeed CRM",
        env: "Angular",
        desc: "고객 · 영업 · 일정 · 게시판 · 마케팅 등 PC · 모바일 주요 화면 퍼블리싱. 버튼 · 액션바 · 테이블 · 모달 등 공통 UI 요소를 정리하고 app-base-button 구조로 개선.",
      },
      {
        name: "롯데글로벌로지스 CRM",
        env: "Angular",
        desc: "고객 · 영업관리 조회 화면, 탭 페이지, 등록폼, 보고서, 엑셀 · PDF 다운로드 등 업무 UI 구축. 오픈 이후 후속 요청 · 이슈 대응까지 수행.",
      },
      {
        name: "LH · SZ 레미콘 스마트관리시스템",
        env: "Next.js · React",
        desc: "타설관리 · 관제정보 · 대시보드 · 공장점검 화면과 GNB · LNB · 표준 목록/조회 · IBSheet · 페이지네이션 등 시스템 표준 화면 구축.",
      },
      {
        name: "현대 CSM",
        env: "Next.js · React",
        desc: "개발 환경 세팅, 헤더 · 사이드바 레이아웃, 현장 · 비용 · 기성관리 · 업체선정 화면과 팝업 · 모달 UI 구성.",
      },
      {
        name: "WeSeed Design System 고도화",
        env: "Design System",
        desc: "색상 변수 통합, 타이포그래피 적용, 모바일 스타일 통합, 컴포넌트 정리 및 DS 문서화를 통해 유지보수 가능한 UI 구조 개선.",
      },
    ],
  },
  {
    id: "wisa",
    company: "㈜위사 (WISA)",
    role: "웹 퍼블리셔",
    period: "2019.10 — 2024.11",
    current: false,
    summary:
      "웹에이전시 UX · GX 그룹에서 다양한 이커머스 쇼핑몰의 신규 구축 · 운영 · 유지보수를 담당했습니다. 별도 프론트엔드 직군이 없는 환경에서 JavaScript 기반 UI 인터랙션까지 함께 수행.",
    stack: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    projects: [
      {
        name: "신규 쇼핑몰 구축",
        env: "Build",
        desc: "메디플러스 세컨드닥터몰, 생활공작소, 대현인사이드, 에스더몰, 탠디몰, 차홍 등 브랜드별 디자인에 맞춘 PC · MO 화면 구축.",
      },
      {
        name: "장기 운영 · 유지보수",
        env: "Maintenance",
        desc: "지오다노, 안다르, IDF몰, 임블리 등 다수 브랜드 쇼핑몰의 장기 운영. 빠른 이슈 대응과 안정적인 수정 반영으로 UI 품질 관리.",
      },
      {
        name: "프론트 인터랙션 대응",
        env: "Front",
        desc: "HTML/CSS 화면 구현에 더해 JavaScript 기반 UI 동작, 배너 · 팝업 · 기획전 등 운영 요소를 직접 구현.",
      },
    ],
  },
];

export default career;
