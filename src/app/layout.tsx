import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "엄지 - 내 손안의 건물 파트너",
  description: "건물 관리의 새로운 기준, 엄지와 함께하세요. 민원 접수, 공지사항, 출퇴근 관리까지 한 번에.",
  keywords: ["건물관리", "아파트관리", "민원접수", "시설관리", "엄지"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "엄지 - 내 손안의 건물 파트너",
    description: "건물 관리의 새로운 기준, 엄지와 함께하세요.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
