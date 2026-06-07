import { Laptop, Users2, ShieldCheck, ClipboardCheck } from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "업무 산출물 중심 실습",
    description: "수업 중에 보고서, 홍보 문안, 데이터 분석 리포트처럼 실제로 제출하거나 활용할 결과물을 직접 만듭니다.",
  },
  {
    icon: Users2,
    title: "대상별 맞춤 커리큘럼",
    description: "대학생, 소상공인, 기업 실무자의 목표가 다르기 때문에 예제와 과제를 교육 대상에 맞춰 조정합니다.",
  },
  {
    icon: ShieldCheck,
    title: "보안·저작권 기준 포함",
    description: "업무 데이터를 AI에 입력할 때의 주의점, 저작권·출처 표기, 사내 활용 가이드까지 함께 다룹니다.",
  },
  {
    icon: ClipboardCheck,
    title: "교육 후 적용 체크리스트",
    description: "수강 후 바로 다시 사용할 수 있는 프롬프트 템플릿, 업무 적용 체크리스트, 다음 단계 학습 방향을 정리합니다.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            강의가 아니라 <span className="text-primary">업무 적용 훈련</span>입니다
          </h2>
          <p className="text-lg text-muted-foreground">
            AI 도구 사용법을 나열하지 않고, 현장에서 반복되는 문제를 AI로 해결하는 순서를 함께 만듭니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="p-8 rounded-xl bg-card shadow-soft hover:shadow-glow transition-smooth">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl gradient-secondary mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
