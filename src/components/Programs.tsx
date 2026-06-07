import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, BarChart, BookOpen } from "lucide-react";
import aiEducationIcon from "@/assets/ai-education-icon.jpg";
import dataScienceIcon from "@/assets/data-science-icon.jpg";
import deepLearningIcon from "@/assets/deep-learning-icon.jpg";
import contentCreationIcon from "@/assets/content-creation-icon.jpg";

const programs = [
  {
    icon: aiEducationIcon,
    title: "ChatGPT 업무 자동화 입문",
    description: "문서 작성, 회의록 정리, 이메일·제안서 초안 등 매일 반복되는 사무 업무를 AI와 함께 처리합니다.",
    duration: "1일-4주",
    level: "입문-실무",
    topics: ["프롬프트 기본기", "업무별 템플릿", "문서·보고서 초안", "반복 업무 자동화"],
  },
  {
    icon: dataScienceIcon,
    title: "AI 데이터 분석 실무",
    description: "엑셀, CSV, 설문 결과를 AI로 분석하고 의사결정에 필요한 인사이트와 리포트로 정리합니다.",
    duration: "2-6주",
    level: "초급-중급",
    topics: ["데이터 정리", "AI 분석 질문법", "시각화 기획", "리포트 작성"],
  },
  {
    icon: contentCreationIcon,
    title: "생성형 AI 콘텐츠 제작",
    description: "블로그, SNS, 상세페이지, 이미지·영상 아이디어를 더 빠르게 기획하고 제작하는 과정을 실습합니다.",
    duration: "1일-6주",
    level: "입문-중급",
    topics: ["콘텐츠 기획", "이미지 생성", "숏폼·영상 스토리보드", "브랜드 톤 프롬프트"],
  },
  {
    icon: deepLearningIcon,
    title: "기업 맞춤 AI 도입 워크숍",
    description: "조직의 업무, 보안 기준, 교육 대상에 맞춰 AI 활용 가이드와 팀별 실습 과제를 설계합니다.",
    duration: "협의",
    level: "맞춤형",
    topics: ["업무 진단", "팀별 활용 시나리오", "보안·저작권 기준", "사내 확산 가이드"],
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            목표별 <span className="text-primary">AI 교육 프로그램</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            하루 특강부터 팀 맞춤 워크숍까지, 부산·울산·경남 현장에서 바로 적용 가능한 커리큘럼으로 구성합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {programs.map((program) => (
            <Card key={program.title} className="shadow-soft hover:shadow-glow transition-smooth border-border/50">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={program.icon}
                    alt={`${program.title} - 부산 생성형 AI 교육 프로그램`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="400"
                    height="192"
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
                      {program.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full mt-4"
                    variant="default"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    상담으로 과정 설계하기
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
