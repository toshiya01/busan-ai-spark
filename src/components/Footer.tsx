import { BRAND_NAME, BRAND_NAME_KO, CONSULTATION_URL, SITE_URL } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="py-12 bg-muted/50 border-t border-border">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{BRAND_NAME_KO}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                부산·울산·경남을 기반으로 생성형 AI, ChatGPT, AI 이미지·영상, 바이브코딩 교육·컨설팅을 제공합니다.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">교육 프로그램</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#programs" className="hover:text-primary transition-smooth">ChatGPT 업무 자동화</a></li>
                <li><a href="#programs" className="hover:text-primary transition-smooth">AI 데이터 분석 실무</a></li>
                <li><a href="#programs" className="hover:text-primary transition-smooth">생성형 AI 콘텐츠 제작</a></li>
                <li><a href="#programs" className="hover:text-primary transition-smooth">기업 맞춤 AI 워크숍</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">문의하기</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>교육 지역: 부산 중심 · 울산·경남 협의</li>
                <li><a href={CONSULTATION_URL} target="_blank" rel="noreferrer" className="hover:text-primary transition-smooth">상담 신청 폼 열기</a></li>
                <li><a href={SITE_URL} className="hover:text-primary transition-smooth">starlab.ai.kr</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2026 {BRAND_NAME}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
