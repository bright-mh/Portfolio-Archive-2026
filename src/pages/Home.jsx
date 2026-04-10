import Timeline from "../components/Timeline";
import { WORK_TIMELINE } from "../constants/work-timeline.constant";

export default function Home() {
  return (
    <section>
      <h1>Kim Myeong Hui Portfolio</h1>
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
// export default function Home() {
//   return (
//     <section>
//       <h1>Kim Myeong Hui Portfolio</h1>
//       <article>
//         <h2>소개</h2>
//         <strong>"기본에 충실한 퍼블리싱에서, 확장성 있는 프론트엔드 개발로"</strong>
//         <p>
//           10년 넘는 시간 동안 웹의 시작과 현재를 모두 경험했습니다.
//           <br />
//           퍼블리셔로 시작해 쌓아온 정교한 UI 구현 능력은 무신사의 복잡한 결제/주문 로직을 리액트로 설계하는 밑거름이
//           되었습니다.
//           <br />
//           단순히 화면을 그리는 것을 넘어, 성능과 협업 효율을 고려한 코드를 작성합니다.
//         </p>
//       </article>
//       {/* <div>
//         <h2>기술 스택</h2>
//         <ul>
//           <li>HTML5</li>
//           <li>CSS3</li>
//           <li>JavaScript</li>
//           <li>React</li>
//           <li>Node.js</li>
//         </ul>
//       </div> */}
//       <section>
//         <h2>참여 프로젝트</h2>
//         {/* <article>
//           <h3>2021 - 2025</h3>
//           <p>무신사 | 프론트엔드 개발</p>
//           <dl>
//             <dt>2025: 아키텍처 최신화 및 비즈니스 방어</dt>
//             <dd>
//               주문서 FE/BE 분리 및 React 전환
//               <ul>
//                 <li>Context: 백엔드 의존성이 높은 레거시 구조로 인한 개발 병목 및 유지보수 효율 저하.</li>
//                 <li>
//                   Action: 주문 로직을 React 기반 독립 애플리케이션으로 재구축. 신규 디자인 시스템(MDS)을 전면 도입하고
//                   모듈화된 컴포넌트 설계
//                 </li>
//                 <li>
//                   Result: 개발 리소스 50% 단축(4주→2주). 독립 배포 환경 구축으로 운영 안정성 확보 및 장애 리스크 최소화.
//                 </li>
//               </ul>
//             </dd>
//             <dd>
//               쿠폰 검증 시스템 고도화 및 비용 누수 차단
//               <ul>
//                 <li>Action: 복잡한 할인/회수 로직을 도메인 중심으로 추상화하여 리팩토링.</li>
//                 <li>
//                   Result: 코드 라인 수 획기적 감축 및 DX(개발자 경험) 개선. 하반기 약 1억 8,620만 원의 비용 누수 방어.
//                 </li>
//               </ul>
//             </dd>
//           </dl>
//           <dl>
//             <dt>2024: 플랫폼 확장 및 사용자 경험 최적화</dt>
//             <dd>
//               무신사 2.0 마이페이지 및 혜택 시스템 구축
//               <ul>
//                 <li>
//                   Action: 전사 등급제 개편에 따른 포인트/적립금 서비스 React 전환. 데이터 시각화(그래프)를 통한 사용자
//                   혜택 체감도 향상.
//                 </li>
//                 <li>Result: 마이페이지 내 혜택 전환율 310bps 상승(5.1%→8.2%). 방문자 수 37% 증가.</li>
//               </ul>
//             </dd>
//             <dd>
//               PC UI/UX 최적화 및 경량화
//               <ul>
//                 <li>Context: PC 채널 중단 후 발생하는 고레벨 고객 이탈 및 매출 하락 대응.</li>
//                 <li>Action: 1,500건의 VoC 분석 기반 PC 전용 레이아웃 설계 및 적응형 UI 구현.</li>
//                 <li>Result: PC 결제 금액 비중 157bps 상승. 하락하던 PC 매출 지표의 성공적인 반등 견인.</li>
//               </ul>
//             </dd>
//           </dl>
//         </article>
//         <article>
//           <h3>2020</h3>
//           <p>(주)제이니스 | UI 아키텍처 및 퍼블리싱</p>
//           <dl>
//             <dt>차세대 M.office 3.0 리뉴얼 및 UI 표준화</dt>
//             <dd>
//               전사 주력 솔루션의 UI/UX 전면 개편 및 고도화
//               <ul>
//                 <li>
//                   <strong>Context:</strong> 노후화된 레거시 UI 구조로 인한 일관성 결여 및 유지보수 비용 증가.
//                 </li>
//                 <li>
//                   <strong>Action:</strong> UI 에이전트와 긴밀히 협업하여 전사 공통 UI 컴포넌트 가이드라인 수립. 확장성을
//                   고려한 마크업 구조 설계 및 인터랙션 구현.
//                 </li>
//                 <li>
//                   <strong>Result:</strong> 주력 상품의 디자인 아이덴티티 통일. 재사용 가능한 컴포넌트 구조화를 통해 후속
//                   프로젝트 UI 개발 속도 30% 이상 향상.
//                 </li>
//               </ul>
//             </dd>
//           </dl>
//           <dl>
//             <dt>유연근무제 대응 엔터프라이즈 패키지 구축</dt>
//             <dd>
//               법정 근로시간 정책 기반의 복잡한 비즈니스 UI 구현
//               <ul>
//                 <li>
//                   <strong>Action:</strong> 백엔드 에이전트와 데이터 통신 규약을 협의하여 동적 대시보드 및 복잡한 설정
//                   화면 마크업 설계. 시차출퇴근/선택근무 등 가변적인 정책 데이터를 시각화하는 데이터 그리드 최적화.
//                 </li>
//                 <li>
//                   <strong>Result:</strong> 다양한 기업 환경에 즉각 대응 가능한 유연한 UI 구조 확보. 대규모 사용자 트래픽
//                   환경에서도 안정적인 화면 렌더링 성능 유지.
//                 </li>
//               </ul>
//             </dd>
//           </dl>
//         </article> */}
//       </section>
//     </section>
//   );
// }
