import { Timeline, Skills, Career } from "@/sections/index";
import { WORK_TIMELINE } from "@/constants";

export default function Home() {
  return (
    <main>
      <header className="relative pb-7 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[3px] after:bg-black">
        <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold">Kim Myeong Hui Portfolio</h1>
        <a href="tel:010-2984-6115" className="block">
          📱 010-2984-6115
        </a>
        <a href="mailto:bright-mh@naver.com" className="block">
          📨 bright-mh@naver.com
        </a>
      </header>
      <section className="mt-12">
        <h2 className="blind">소개</h2>
        <strong className="text-[27px] font-bold">"기본에 충실한 퍼블리싱에서, 확장성 있는 프론트엔드 개발로"</strong>
        <p className="font-medium mt-4">
          10년 넘는 시간 동안 웹의 시작과 현재를 모두 경험했습니다.
          <br />
          퍼블리셔로 시작해 쌓아온 정교한 UI 구현 능력은 무신사 서비스를 리액트로 전환하고 고도화하는 과정에서 든든한
          밑거름이 되었습니다.
          <br />
          단순히 화면을 그리는 것을 넘어, 성능과 협업 효율을 고려한 코드를 작성하며 팀과 함께 성장하는 개발자가 되고자
          합니다.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-bold">📋 경력</h2>
        <Career />
      </section>
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold">👩🏻‍💻 참여 프로젝트</h2>
        <Timeline items={WORK_TIMELINE} />
      </section>
      <section className="mt-15">
        <h2 className="mb-4 text-xl font-bold">🛠 기술 스택</h2>
        <Skills />
      </section>
    </main>
  );
}
