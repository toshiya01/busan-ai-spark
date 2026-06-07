import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, MessageCircle, MonitorPlay, Clock } from "lucide-react";
import { CONSULTATION_URL } from "@/lib/site";

const contactInfo = [
  {
    icon: MapPin,
    title: "교육 지역",
    content: "부산 중심 · 울산·경남 협의 가능",
  },
  {
    icon: MonitorPlay,
    title: "교육 방식",
    content: "오프라인 워크숍 · 온라인 코칭 · 기업 출강",
  },
  {
    icon: MessageCircle,
    title: "상담 접수",
    content: "교육 대상, 인원, 목표를 남겨주시면 과정 구성을 제안합니다.",
  },
  {
    icon: Clock,
    title: "운영 시간",
    content: "상담 폼 접수 후 순차 회신",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="text-primary">우리 조직에 맞는</span> AI 교육을 설계하세요
          </h2>
          <p className="text-lg text-muted-foreground">
            교육 대상, 인원, 현재 업무 고민을 알려주시면 ChatGPT·생성형 AI를 어떻게 적용할지 과정 방향을 함께 정리합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <Card key={info.title} className="shadow-soft hover:shadow-glow transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{info.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-xl mx-auto text-center">
          <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
            <a href={CONSULTATION_URL} target="_blank" rel="noreferrer">
              <MessageCircle className="w-5 h-5" />
              무료 상담 신청하기
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            상담 폼에서 교육 목적과 희망 일정을 남겨주세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
