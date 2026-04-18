import { Timeline } from "@/sections/index";
import { WORK_TIMELINE } from "@/constants/index";

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
          퍼블리셔로 시작해 쌓아온 정교한 UI 구현 능력은 무신사의 복잡한 결제/주문 로직을 리액트로 설계하는 밑거름이
          되었습니다.
          <br />
          단순히 화면을 그리는 것을 넘어, 성능과 협업 효율을 고려한 코드를 작성합니다.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-bold">📋 경력</h2>
        <ol className="mt-3">
          <li className="relative pl-[14px] ml-[10px] leading-[30px] before:content-[''] before:absolute before:left-[1px] before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[3px] before:bg-black before:rounded-full">
            (주)무신사 | 2021.03 ~ 2025.12
          </li>
          <li className="relative pl-[14px] ml-[10px] leading-[30px] before:content-[''] before:absolute before:left-[1px] before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[3px] before:bg-black before:rounded-full">
            (주)제이니스 | 2019.05 ~ 2020.02
          </li>
          <li className="relative pl-[14px] ml-[10px] leading-[30px] before:content-[''] before:absolute before:left-[1px] before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[3px] before:bg-black before:rounded-full">
            (주)라이트브레인 | 2013.08 ~ 2019.04
          </li>
          <li className="relative pl-[14px] ml-[10px] leading-[30px] before:content-[''] before:absolute before:left-[1px] before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[3px] before:bg-black before:rounded-full">
            (주)에스프리즘 | 2011.05 ~ 2013.08
          </li>
        </ol>
      </section>
      {/* <div>
        <h2>기술 스택</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </div> */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold">👩🏻‍💻 참여 프로젝트</h2>
        <Timeline items={WORK_TIMELINE} />
      </section>
    </main>
  );
}
