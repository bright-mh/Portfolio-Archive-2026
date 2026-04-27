# Kim Myeong Hui — Portfolio 2026

> "기본에 충실한 퍼블리싱에서, 확장성 있는 프론트엔드 개발로"

10년 넘는 웹 퍼블리셔 경험을 바탕으로 UI 구현 능력과 프론트엔드 개발 역량을 함께 담은 포트폴리오 사이트입니다.

🔗 **배포 주소:** [https://bright-mh.github.io/Portfolio-Archive-2026](https://bright-mh.github.io/Portfolio-Archive-2026)

<br />

## 기술 스택

| 분류       | 사용 기술               |
| ---------- | ----------------------- |
| 프레임워크 | React 19                |
| 빌드 도구  | Vite 6                  |
| 스타일     | Tailwind CSS 4          |
| 라우팅     | React Router DOM 7      |
| 배포       | GitHub Pages (gh-pages) |
| 코드 품질  | ESLint, Prettier        |

<br />

## 주요 섹션

- **경력** — 회사별 재직 기간 및 담당 역할 정리
- **참여 프로젝트** — 프로젝트별 기여 내용, 역할, 결과를 타임라인 형식으로 구성
- **기술 스택** — 보유 기술 목록

<br />

## 프로젝트 구조

```
src/
├── pages/        # 페이지 컴포넌트 (Home)
├── sections/     # 섹션 단위 컴포넌트 (Career, Timeline, Skills)
├── components/   # 공통 컴포넌트 (BulletList, PopupModal 등)
├── constants/    # 콘텐츠 데이터 (경력, 프로젝트, 기술 스택)
├── App.jsx
├── main.jsx
└── index.css
```

<br />

## 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```
