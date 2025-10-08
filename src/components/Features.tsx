import { Laptop, Users2, Award, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "실무 중심 프로젝트",
    description: "이론보다 실습! 실제 기업 프로젝트를 수행하며 포트폴리오를 완성합니다.",
  },
  {
    icon: Users2,
    title: "소규모 정예 수업",
    description: "최대 15명 소규모 클래스로 1:1 멘토링과 개인 맞춤 피드백을 제공합니다.",
  },
  {
    icon: Award,
    title: "취업 연계 프로그램",
    description: "50개 이상의 제휴 기업과 함께하는 취업 연계 및 경력 개발 지원.",
  },
  {
    icon: HeadphonesIcon,
    title: "평생 학습 지원",
    description: "수료 후에도 지속적인 커리큘럼 업데이트와 커뮤니티 지원을 받을 수 있습니다.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            왜 <span className="text-primary">우리를 선택</span>해야 할까요?
          </h2>
          <p className="text-lg text-muted-foreground">
            차별화된 교육 시스템과 체계적인 커리어 지원으로 여러분의 성공을 보장합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-xl bg-card shadow-soft hover:shadow-glow transition-smooth"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl gradient-secondary mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
