const faqs = [
  {
    question: "AI를 처음 접해도 수강할 수 있나요?",
    answer:
      "가능합니다. ChatGPT와 생성형 AI의 기본 개념부터 프롬프트 작성법, 업무별 예제까지 실습 중심으로 안내합니다.",
  },
  {
    question: "부산 외 지역 기업 교육도 가능한가요?",
    answer:
      "부산을 중심으로 울산·경남 출강과 온라인 교육을 협의할 수 있습니다. 교육 인원과 목표에 따라 일정과 방식을 조정합니다.",
  },
  {
    question: "어떤 업무에 바로 적용할 수 있나요?",
    answer:
      "보고서·회의록·제안서 초안, 블로그·SNS 콘텐츠, 고객 안내문, 설문·매출 데이터 분석, 반복 업무 자동화 흐름에 적용할 수 있습니다.",
  },
  {
    question: "기업 맞춤 과정은 어떻게 준비하나요?",
    answer:
      "상담 단계에서 교육 대상, 보안 기준, 현재 업무 문제를 확인한 뒤 팀별 실습 예제와 산출물을 정리해 커리큘럼을 구성합니다.",
  },
];

const Faq = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30" aria-labelledby="faq-heading">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            자주 묻는 <span className="text-primary">AI 교육 질문</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            부산 생성형 AI 교육을 검토할 때 가장 많이 확인하는 내용을 정리했습니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl bg-card p-6 shadow-soft open:shadow-glow transition-smooth">
              <summary className="cursor-pointer list-none text-lg font-semibold text-foreground flex items-center justify-between gap-4">
                <span>{faq.question}</span>
                <span className="text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
