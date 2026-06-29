import "./globals.css";

export const metadata = {
  title: "박현규 · Frontend Portfolio",
  description:
    "퍼블리셔 5년+ 에서 프론트엔드로 확장 중인 박현규의 포트폴리오. B2B 업무 시스템 · 디자인 시스템 경험과 개인 프로젝트를 소개합니다.",
  metadataBase: new URL("https://about-me-v1.netlify.app"),
  openGraph: {
    title: "박현규 · Frontend Portfolio",
    description:
      "퍼블리셔 5년+ 에서 프론트엔드로 확장 중인 박현규의 포트폴리오.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
