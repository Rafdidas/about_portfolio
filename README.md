# about_me — Frontend Portfolio

박현규(Park HyeonGyu)의 취업용 포트폴리오 사이트입니다.
웹 퍼블리셔 경력과 프론트엔드로의 확장을 소개합니다.

## 1. 소개

- 퍼블리셔 5년+ → 프론트엔드로 역량을 넓혀가는 과정을 담은 개인 포트폴리오.
- 단일 페이지 구성: **Hero → Career → Projects → Skills → AI → About**.
- PC · 모바일 반응형.

## 2. 기술 스택

- **Next.js 15** (App Router)
- **React 18**
- **CSS Modules** + CSS 변수 기반 디자인 토큰
- 스킬 아이콘: [simple-icons](https://simpleicons.org)(CC0) SVG를 CSS mask로 단일 컬러 통일
- 폰트: Pretendard, Syne

## 3. 구조

```
app/
  layout.js        # 루트 레이아웃 · 메타데이터
  page.js          # 섹션 조합
  globals.css      # 디자인 토큰 · 리셋 · 스크롤 리빌
components/        # Header · Hero · Career · Projects · Skills · AiUsage · About · Footer · ScrollReveal
data/              # career.js · projects.js · skills.js · ai.js (콘텐츠 데이터)
public/img         # 이미지 에셋 (프로젝트 썸네일 등)
public/icons       # 스킬 SVG 아이콘 (simple-icons)
public/fonts       # Pretendard 폰트
```

콘텐츠는 `data/`에 배열로 분리되어 있어, 경력 · 프로젝트 · 스킬 · AI 활용 항목의 추가/수정이 쉽습니다.

## 4. 로컬 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드
```

## 5. 배포

- **Vercel** 에 GitHub 레포 연결 → push 시 자동 배포.
