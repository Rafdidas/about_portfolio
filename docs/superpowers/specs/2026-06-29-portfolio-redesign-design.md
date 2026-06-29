# 취업용 포트폴리오 웹 전면 재디자인 설계

> 작성일: 2026-06-29
> 대상: about_portfolio (CRA + CSS Modules, https://about-me-v1.netlify.app/)

## 1. 배경 / 목표

- 현재 포트폴리오의 Work experience가 **위사(WISA) 2019~2024**까지만 있고, "진행 중"으로 표기되어 outdated 상태.
- 이력의 핵심인 **㈜소프트자이온(2025.09~재직중)** 경력(WeSeed CRM, 롯데글로벌로지스 CRM, LH·SZ 레미콘, 현대 CSM, WeSeed Design System 등)이 **전혀 반영되지 않음**.
- 목표: **퍼블리셔 5년+ → 프론트엔드 전환** 포지셔닝으로, 현재 경력을 반영한 **전면 재디자인**.

## 2. 방향 결정 (확정)

| 항목 | 결정 |
|---|---|
| 범위 | 전면 재디자인 (구조 + 디자인 + 콘텐츠) |
| 비주얼 무드 | 미니멀·클린 라이트 (화이트/오프화이트, 포인트 컬러 1개) |
| 기술 토대 | CRA + CSS Modules 유지 + **콘텐츠 데이터 구조화** |
| 레이아웃 | 기존 좌측 고정 프로필 → **상단 스티키 네비 + 중앙 정렬 섹션** 전환 |
| 섹션 순서 | Hero → Career → Projects → Skills → About |

## 3. 비주얼 시스템

- **배경**: `#ffffff` / 섹션 교차 `#fafafa`
- **텍스트**: 본문 `#1a1a1a`, 보조 `#6b7280`
- **포인트 컬러**: 차분한 인디고/블루 계열 (구현 중 토큰으로 조정)
- **타이포**: 한글 가독성 위해 Pretendard 계열, 헤딩 큼/굵게, 넓은 여백
- CSS 변수(`:root`)로 컬러·간격·폰트 토큰 정의 → 일관성 + 추후 조정 용이
- 스크롤 진입 애니메이션(기존 `.animate/.active` 패턴) 유지·정돈

## 4. 섹션 설계

### 4-1. Header (상단 스티키 네비)
- 좌측 로고/이니셜, 우측 메뉴: Home / Career / Projects / Skills / About
- 스크롤 시 active 섹션 하이라이트 (기존 Intersection/scroll 로직 정돈)

### 4-2. Hero
- 이름(PARK HYEONGYU), 한 줄 포지셔닝: "퍼블리셔 5년+ · 프론트엔드로 확장 중"
- 보조 카피 1~2줄, CTA 버튼: View Projects / GitHub

### 4-3. Career (타임라인, 2개 회사)
- **㈜소프트자이온** (2025.09 ~ 재직중, 퍼블리셔/주임)
  - B2B 업무 시스템(CRM·CSM·레미콘 스마트관리) PC·모바일 퍼블리싱
  - WeSeed CRM(Angular), 롯데글로벌로지스 CRM, LH·SZ 레미콘(Next/React), 현대 CSM(Next/React)
  - WeSeed Design System 고도화(색상 변수 통합, 타이포그래피, 컴포넌트 정리, DS 문서화)
- **㈜위사** (2019.10 ~ 2024.11, 웹 퍼블리셔)
  - 이커머스 다수 신규 구축·운영·유지보수 (대현인사이드, 에스더몰, 지오다노, 차홍, 탠디몰 등)
  - 프론트 직군 없는 환경에서 JS 인터랙션까지 담당
- 표현: 회사 단위 카드 + 연도/역할/대표 프로젝트·성과 bullet. 라이브 링크 없음(업무 시스템 특성).

### 4-4. Projects (개인 프로젝트, 라이브 링크 O)
- 카드형: 썸네일 + 제목 + 스택 태그 + 설명 + View Page 링크
- PRIVE (React/TS/Redux/Scss, FakeStoreAPI 쇼핑몰)
- POKEDEX (Next.js 15, PokeAPI, React Query/Zustand)
- MOVIE_DB (React, TMDB API)

### 4-5. Skills
- 코어: HTML5 / CSS3 / JavaScript / TypeScript / React / Next.js / Sass
- Angular: 실무 경험 보유 (아이콘 에셋 없음 → 텍스트 태그 또는 아이콘 추가는 구현 중 결정)

### 4-6. About
- 자기소개 갱신: 이커머스 운영 경험 + 현재 B2B 업무 시스템·디자인 시스템 관점으로 역량 확장하는 서사
- 성격/태도 문장 유지하되 현재형으로 정돈

## 5. 기술 / 파일 구조

```
src/
  data/
    career.js      # 회사·연도·프로젝트·성과 배열
    projects.js    # 개인 프로젝트 배열 (썸네일, 스택, 링크)
    skills.js      # 스택 배열 (이름, 아이콘)
  Component/
    header.component.jsx
    hero.component.jsx       (신규)
    career.component.jsx     (신규)
    projects.component.jsx   (기존 portfolio 재구성)
    skills.component.jsx     (신규)
    about.component.jsx      (신규)
  CSS/
    *.module.css   # 섹션별, :root 토큰은 index.css 또는 별도 tokens.css
```

- 데이터는 배열로 분리하고 컴포넌트에서 `.map()` 렌더 → 내용 수정 용이.
- 기존 `profile.component..jsx`(좌측 고정 프로필)는 제거 또는 Hero/Header로 흡수.
- README도 현재 구성에 맞게 갱신.

## 6. 작업 방식

- 사용자 요청에 따라 **시각 시안 없이 바로 구현하며 리뷰**("하면서 보자") 진행.
- 포인트 컬러·Angular 표기·세부 카피는 구현 중 조정.

## 7. 범위 외 (YAGNI)

- Next.js 등 프레임워크 이전 (CRA 유지)
- 다국어, 다크모드, 백엔드/폼 전송 등 신규 기능
- 위사 경력의 무관한 상세 나열 (대표 사례 위주로 압축)
