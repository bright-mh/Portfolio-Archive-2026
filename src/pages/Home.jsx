import Timeline from "../components/Timeline";
import { WORK_TIMELINE } from "../constants/work-timeline.constant";

export default function Home() {
  return (
    <section>
      <header>
        <h1>Kim Myeong Hui Portfolio</h1>
      </header>
      <article>
        <h2>소개</h2>
        <strong>"기본에 충실한 퍼블리싱에서, 확장성 있는 프론트엔드 개발로"</strong>
        <p>
          10년 넘는 시간 동안 웹의 시작과 현재를 모두 경험했습니다.
          <br />
          퍼블리셔로 시작해 쌓아온 정교한 UI 구현 능력은 무신사의 복잡한 결제/주문 로직을 리액트로 설계하는 밑거름이
          되었습니다.
          <br />
          단순히 화면을 그리는 것을 넘어, 성능과 협업 효율을 고려한 코드를 작성합니다.
        </p>
      </article>
      <article>
        <h2>경력</h2>
        <ol>
          <li>(주)무신사 | 2021.03 ~ 2025.12</li>
          <li>(주)제이니스 | 2019.05 ~ 2020.02</li>
          <li>(주)라이트브레인 | 2013.08 ~ 2019.04</li>
          <li>(주)에스프리즘 | 2011.05 ~ 2013.08</li>
        </ol>
      </article>
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
      <section>
        <h2>참여 프로젝트</h2>
        <Timeline items={WORK_TIMELINE} />
      </section>
    </section>
  );
}
