import { Target, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "1,000+", label: "교육 수료생" },
  { icon: Award, value: "95%", label: "취업 성공률" },
  { icon: Target, value: "50+", label: "기업 제휴" },
  { icon: TrendingUp, value: "4.9/5", label: "교육 만족도" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            부산에서 시작하는
            <br />
            <span className="text-primary">AI 전문가의 꿈</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            우리는 단순히 이론을 가르치는 것이 아닙니다.
            실제 현장에서 바로 적용 가능한 실무 중심 교육으로
            여러분을 AI 전문가로 성장시킵니다.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-card shadow-soft hover:shadow-glow transition-smooth"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gradient-primary mb-4">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
