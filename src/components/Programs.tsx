import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, BarChart, BookOpen } from "lucide-react";
import aiEducationIcon from "@/assets/ai-education-icon.jpg";
import dataScienceIcon from "@/assets/data-science-icon.jpg";
import deepLearningIcon from "@/assets/deep-learning-icon.jpg";

const programs = [
  {
    icon: aiEducationIcon,
    title: "AI 머신러닝 기초",
    description: "Python 기반의 머신러닝 핵심 개념과 알고리즘을 실습 중심으로 학습합니다.",
    duration: "8주",
    level: "초급-중급",
    topics: ["Python 프로그래밍", "데이터 전처리", "지도/비지도 학습", "모델 평가"],
  },
  {
    icon: dataScienceIcon,
    title: "데이터 사이언스",
    description: "빅데이터 분석과 시각화 기술을 익혀 데이터 기반 의사결정 전문가가 됩니다.",
    duration: "10주",
    level: "중급",
    topics: ["통계 분석", "데이터 시각화", "SQL & NoSQL", "비즈니스 인사이트"],
  },
  {
    icon: deepLearningIcon,
    title: "딥러닝 심화",
    description: "TensorFlow와 PyTorch를 활용한 신경망 구축과 최신 딥러닝 모델을 마스터합니다.",
    duration: "12주",
    level: "고급",
    topics: ["CNN & RNN", "자연어 처리", "컴퓨터 비전", "모델 최적화"],
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            맞춤형 <span className="text-primary">AI 교육 프로그램</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            초보자부터 전문가까지, 수준별 맞춤 커리큘럼으로 체계적인 학습이 가능합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="shadow-soft hover:shadow-glow transition-smooth border-border/50"
            >
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={program.icon} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart className="w-4 h-4 text-primary" />
                      <span>{program.level}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span>주요 학습 내용</span>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {program.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full mt-4" 
                    variant="default"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    자세히 알아보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
