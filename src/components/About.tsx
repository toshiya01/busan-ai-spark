import { BriefcaseBusiness, Building2, GraduationCap, Store } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "기업·기관 교육",
    description: "문서 작성, 회의록, 보고서, 고객 응대처럼 실제 업무 흐름에 맞춘 AI 활용 규칙과 실습을 설계합니다.",
  },
  {
    icon: Store,
    title: "소상공인·자영업자",
    description: "홍보 문구, 블로그·SNS 콘텐츠, 상세페이지 기획, 고객 안내문을 빠르게 만드는 실전 템플릿을 제공합니다.",
  },
  {
    icon: GraduationCap,
    title: "대학생·취업 준비생",
    description: "리서치, 포트폴리오, 자기소개서 초안, 데이터 분석 과제를 AI와 함께 완성하는 방법을 익힙니다.",
  },
  {
    icon: BriefcaseBusiness,
    title: "스타트업·실무팀",
    description: "반복 업무 자동화, 아이디어 검증, 제안서·IR 자료 초안 작성 등 팀 생산성을 높이는 워크플로우를 만듭니다.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            AI를 배우는 목적은
            <br />
            <span className="text-primary">업무 결과를 바꾸는 것</span>입니다
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Busan AI Spark는 부산·울산·경남 현장에서 필요한 생성형 AI 활용법을 대상별 과제와 함께 가르칩니다.
            수강생은 수업 안에서 본인 업무에 맞는 프롬프트, 자동화 흐름, 콘텐츠 결과물을 직접 만들어 봅니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <article
                key={audience.title}
                className="p-6 rounded-xl bg-card shadow-soft hover:shadow-glow transition-smooth"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gradient-primary mb-4">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{audience.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{audience.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
