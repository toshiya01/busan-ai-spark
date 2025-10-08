const Footer = () => {
  return (
    <footer className="py-12 bg-muted/50 border-t border-border">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">부산 AI 아카데미</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                부산 최고의 AI 교육 전문 기업으로
                실무 중심의 인공지능 교육을 제공합니다.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">교육 프로그램</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#programs" className="hover:text-primary transition-smooth">AI 머신러닝 기초</a></li>
                <li><a href="#programs" className="hover:text-primary transition-smooth">데이터 사이언스</a></li>
                <li><a href="#programs" className="hover:text-primary transition-smooth">딥러닝 심화</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">문의하기</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>부산광역시 해운대구 센텀중앙로 78</li>
                <li><a href="tel:051-1234-5678" className="hover:text-primary transition-smooth">051-1234-5678</a></li>
                <li><a href="mailto:info@busanai.academy" className="hover:text-primary transition-smooth">info@busanai.academy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 부산 AI 아카데미. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
