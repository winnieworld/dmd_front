import type { Metadata } from "next";
import "@nextcss/reset";
import "./globals.css";

export const metadata: Metadata = {
  title: "DMD",
  description: "당신의 다이어리를 공유해보세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
