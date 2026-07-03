'use client';

import type {FormEvent} from 'react';
import {useState} from 'react';

const services = [
  ['01', '프로그램 기획', '기관 목적과 예산에 맞춰 교육 주제, 일정, 운영안을 정리합니다.'],
  ['02', '참가자 모집 관리', '신청 폼, 명단, 안내 문자, 출결 확인까지 운영합니다.'],
  ['03', '현장 운영', '접수대, 강사 응대, 장비, 안전, 동선, 스태프를 관리합니다.'],
  ['04', '결과보고', '사진, 만족도, 정산 자료, 운영 결과보고서까지 정리합니다.']
];

const regions = ['부산', '울산', '창원', '김해', '양산', '진주', '거제', '경남 전역'];
const targets = ['공공기관', '지자체', '교육청', '대학·센터', '재단·협회', '청년·창업기관'];
const inquiryEmail = 'starlab1999@gmail.com';
const faqs = [
  ['부산 울산 경남 외 지역도 가능한가요?', '가능합니다. 다만 현장 운영 인력과 이동 동선을 기준으로 일정과 견적을 먼저 확인합니다.'],
  ['공공기관 결과보고서까지 맡길 수 있나요?', '가능합니다. 사진 정리, 만족도 취합, 참석자 통계, 운영 개선점까지 보고서 형태로 정리합니다.'],
  ['교육 프로그램 기획만 의뢰할 수 있나요?', '가능합니다. 주제 설계, 커리큘럼, 강사 섭외, 운영 매뉴얼 중 필요한 범위만 맡길 수 있습니다.']
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: '스타랩',
      areaServed: ['부산', '울산', '경남'],
      description: '공공기관 교육 행사 프로그램 운영 관리 대행',
      url: 'https://ai.starlab.co.kr',
      telephone: '051-000-0000',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '부산광역시',
        addressCountry: 'KR'
      }
    },
    {
      '@type': 'Service',
      name: '부산 울산 경남 교육 행사 프로그램 운영 관리 대행',
      provider: {'@type': 'LocalBusiness', name: '스타랩'},
      areaServed: ['부산', '울산', '경남'],
      serviceType: '공공기관 행사 운영 대행'
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(([q, a]) => ({'@type': 'Question', name: q, acceptedAnswer: {'@type': 'Answer', text: a}}))
    }
  ]
};

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [org, setOrg] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedOrg = org.trim();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();

    if (!trimmedOrg || !trimmedName || !trimmedPhone || !trimmedMessage) {
      setStatus('기관명, 담당자, 연락처, 문의 내용을 모두 입력해 주세요.');
      return;
    }

    const subject = `[스타랩 상담 문의] ${trimmedOrg}`;
    const body = [
      '스타랩 교육 행사 운영 상담 문의',
      '',
      `기관명: ${trimmedOrg}`,
      `담당자: ${trimmedName}`,
      `연락처: ${trimmedPhone}`,
      '',
      '문의 내용:',
      trimmedMessage,
    ].join('\n');

    const mailtoUrl = `mailto:${inquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_self');
    setStatus('이메일 작성 화면이 열립니다. 받는 사람과 문의 내용을 확인한 뒤 전송해 주세요.');
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      
      <header className="nav">
        <a className="brand" href="#top" aria-label="스타랩 홈">StarLab</a>
        
        <button 
          className="menuToggle" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-expanded={menuOpen}
          aria-label="메뉴 열기/닫기"
        >
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
        </button>

        <nav className={`navLinks ${menuOpen ? 'open' : ''}`} aria-label="주요 메뉴">
          <a href="#service" onClick={() => setMenuOpen(false)}>서비스</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>프로세스</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a className="navCta" href="#contact" onClick={() => setMenuOpen(false)}>상담 문의</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="heroText">
          <p className="eyebrow">Busan · Ulsan · Gyeongnam</p>
          <h1>부산 울산 경남 교육 행사 프로그램 운영 관리 대행</h1>
          <p className="lead">공공기관·지자체·교육기관의 교육 행사와 프로그램을 기획부터 참가자 관리, 현장 운영, 결과보고까지 한 번에 맡깁니다.</p>
          <div className="heroActions">
            <a className="button primary" href="#contact">운영 상담하기</a>
            <a className="button ghost" href="#service">서비스 보기</a>
          </div>
        </div>
        <aside className="heroCard" aria-label="운영 범위 요약">
          <strong>One Stop Operation</strong>
          <ul>
            <li>교육 프로그램 기획</li>
            <li>참가자 모집·출결 관리</li>
            <li>강사·공간·현장 스태프 운영</li>
            <li>만족도 조사·결과보고</li>
          </ul>
        </aside>
      </section>

      <section className="strip" aria-label="대상 기관">
        {targets.map(item => <span key={item}>{item}</span>)}
      </section>

      <section id="service" className="section">
        <div className="sectionHead">
          <p className="eyebrow">Service</p>
          <h2>행사 목적만 알려주시면 운영안부터 정리합니다</h2>
          <p>공공기관 담당자가 가장 신경 쓰는 일정, 참여자, 현장 변수, 보고 자료를 중심으로 설계합니다.</p>
        </div>
        <div className="grid cards">
          {services.map(([num, title, desc]) => (
            <article className="card" key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Area</p>
          <h2>부산·울산·경남 현장 운영에 맞춘 지역형 대행</h2>
          <p>지역 기관 행사에 필요한 현장 대응 속도와 실무 커뮤니케이션을 기준으로 움직입니다.</p>
        </div>
        <div className="chips">{regions.map(region => <span key={region}>{region}</span>)}</div>
      </section>

      <section id="process" className="section dark">
        <p className="eyebrow">Process</p>
        <h2>진행 절차</h2>
        <ol className="steps">
          <li><b>상담</b><span>목적·예산·일정 확인</span></li>
          <li><b>운영안</b><span>프로그램·인력·동선 설계</span></li>
          <li><b>실행</b><span>모집·안내·현장 운영</span></li>
          <li><b>보고</b><span>결과보고·정산 자료 정리</span></li>
        </ol>
      </section>

      <section id="faq" className="section">
        <div className="sectionHead">
          <p className="eyebrow">FAQ</p>
          <h2>자주 묻는 질문</h2>
        </div>
        <div className="faq">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <svg className="chevron" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>공공기관 교육 행사 운영 상담</h2>
          <p>교육 행사 및 프로그램 운영과 관련하여 궁금하신 점을 남겨주시면 신속하고 상세하게 답변해 드리겠습니다.</p>
        </div>
        <form className="form" onSubmit={handleInquirySubmit}>
          <div className="formGroup">
            <label htmlFor="org">기관명</label>
            <input
              id="org"
              name="org"
              placeholder="예: 부산 ○○센터"
              value={org}
              onChange={event => setOrg(event.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="name">담당자</label>
            <input
              id="name"
              name="name"
              placeholder="성함"
              value={name}
              onChange={event => setName(event.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="phone">연락처</label>
            <input
              id="phone"
              name="phone"
              placeholder="010-0000-0000"
              value={phone}
              onChange={event => setPhone(event.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message">문의 내용</label>
            <textarea
              id="message"
              name="message"
              placeholder="행사 일정, 예상 인원, 필요한 운영 범위를 적어주세요."
              value={message}
              onChange={event => setMessage(event.target.value)}
              required
            />
          </div>
          <p className="formHint">받는 사람: {inquiryEmail}</p>
          <button id="submit-btn" type="submit">문의 내용 보내기</button>
          <p className="formStatus" aria-live="polite">{status}</p>
        </form>
      </section>
    </main>
  );
}
