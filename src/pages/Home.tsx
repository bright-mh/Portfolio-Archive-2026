import { Timeline, Skills, Career } from "@/sections/index";
import { IconPhoneCall, IconEnvelope, IconBuilding, IconDocumentSigned, IconSetting } from "@/images/index";

export default function Home() {
  return (
    <main>
      <header className="relative pb-7 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[3px] after:bg-black">
        <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold">Kim Myeong Hui Portfolio</h1>
        <a href="tel:010-2984-6115" className="block">
          <IconPhoneCall className="inline-block w-4 h-4 mr-2" />
          010-2984-6115
        </a>
        <a href="mailto:bright-mh@naver.com" className="block">
          <IconEnvelope className="inline-block w-4 h-4 mr-2" />
          bright-mh@naver.com
        </a>
      </header>
      <section className="mt-12">
        <h2 className="blind">소개</h2>
        <strong className="text-[27px] font-bold">
          "웹 표준의 기본기부터 모던 프레임워크까지, 화면의 완성도와 협업 효율을 함께 높이는 웹 퍼블리셔"
        </strong>
        <p className="font-medium mt-4">
          10년 넘는 시간 동안 웹 퍼블리셔로 활동하며 웹 표준을 기반으로 변화하는 웹 기술과 다양한 개발 환경을
          경험했습니다.
          <br />
          여러 분야의 웹 서비스를 구축하고 운영하며, 웹 접근성과 반응형 UI를 고려한 정교하고 안정적인 화면을 구현해
          왔습니다.
          <br />
          단순히 화면을 그리는 것을 넘어, 성능과 유지보수성, 협업 효율을 고려한 코드로 더 나은 결과물을 만드는 데
          집중합니다.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-bold">
          <IconBuilding className="inline-block w-5 h-5 mr-2 mt-0.5 align-text-top" />
          경력
        </h2>
        <Career />
      </section>
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold">
          <IconDocumentSigned className="inline-block w-5 h-5 mr-2 mt-0.5 align-text-top" />
          참여 프로젝트
        </h2>
        <Timeline />
      </section>
      <section className="mt-15">
        <h2 className="mb-4 text-xl font-bold">
          <IconSetting className="inline-block w-5 h-5 mr-2 mt-0.5 align-text-top" />
          기술 스택
        </h2>
        <Skills />
      </section>
    </main>
  );
}
