import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "위치",
    content: "부산광역시 해운대구 센텀중앙로 78",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "전화",
    content: "051-1234-5678",
    link: "tel:051-1234-5678",
  },
  {
    icon: Mail,
    title: "이메일",
    content: "info@busanai.academy",
    link: "mailto:info@busanai.academy",
  },
  {
    icon: Clock,
    title: "운영시간",
    content: "평일 09:00 - 18:00",
    link: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="text-primary">지금 바로</span> 시작하세요
          </h2>
          <p className="text-lg text-muted-foreground">
            AI 전문가로의 여정, 부산 AI 아카데미와 함께하세요.
            무료 상담을 통해 여러분에게 맞는 최적의 교육 과정을 안내해드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="shadow-soft hover:shadow-glow transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-xl mx-auto text-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => window.location.href = 'tel:051-1234-5678'}
            className="w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            무료 상담 신청하기
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            상담 가능 시간: 평일 09:00 - 18:00
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
