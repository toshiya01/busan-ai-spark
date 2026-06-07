import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { CONSULTATION_URL } from "@/lib/site";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        role="img"
        aria-label="부산 생성형 AI 교육 워크숍 배경 이미지"
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">
              부산·울산·경남 AI 교육 전문 기업 스타랩
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: "#ffffff" }}
          >
            생성형 AI부터
            <br />
            바이브코딩까지
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            공공기관·대학교 교육 경험을 바탕으로 ChatGPT, AI 이미지·영상 제작, 바이브코딩 교육과 컨설팅을 제공합니다.
            <br className="hidden md:block" />
            부산·울산·경남 현장에서 바로 적용할 수 있는 실무 중심 과정으로 설계합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
            >
              교육 프로그램 보기
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20"
            >
              <a href={CONSULTATION_URL} target="_blank" rel="noreferrer">
                상담 신청하기
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
