import type {Metadata} from 'next';
import './globals.css';

const siteUrl = 'https://ai.starlab.co.kr';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '부산 울산 경남 교육 행사 프로그램 운영 관리 대행｜스타랩',
  description: '공공기관·지자체·교육기관 대상 교육 행사, 프로그램 기획, 참가자 모집 관리, 현장 운영, 결과보고까지 부산 울산 경남에서 대행합니다.',
  keywords: ['부산 교육 행사 대행', '울산 프로그램 운영 대행', '경남 공공기관 행사 운영', '교육 프로그램 운영 관리 대행', '공공기관 행사 대행'],
  alternates: {canonical: '/'},
  openGraph: {
    title: '부산 울산 경남 교육 행사 프로그램 운영 관리 대행｜스타랩',
    description: '기획부터 참가자 관리, 현장 운영, 결과보고까지 공공기관 교육 행사 운영을 한 번에 맡깁니다.',
    url: siteUrl,
    siteName: '스타랩',
    locale: 'ko_KR',
    type: 'website'
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
