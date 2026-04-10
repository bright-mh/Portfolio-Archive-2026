import { Link } from "react-router-dom";
import { MUSINSA_WORK } from "../constants/work-musinsa.constant";

function SkillBadge({ skill }) {
  return (
    <span className="inline-block px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
      {skill}
    </span>
  );
}

function ProjectItem({ project }) {
  return (
    <article className="mb-10 pb-10 border-b border-gray-100 last:border-none last:mb-0 last:pb-0">
      <div className="flex flex-col gap-1 mb-4">
        <h3 className="mt-0 mb-0 text-lg font-bold leading-snug">{project.title}</h3>
        <p className="mt-0 mb-0 text-sm text-gray-400">{project.period}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>

      <div className="pl-4 border-l-2 border-gray-200">
        <p className="mt-0 mb-1 text-sm font-semibold text-gray-500 uppercase tracking-wide">
          핵심 주제
        </p>
        <p className="mt-0 mb-4 text-base font-medium">{project.heading}</p>

        <p className="mt-0 mb-1 text-sm font-semibold text-gray-500 uppercase tracking-wide">
          핵심 역할
        </p>
        <p className="mt-0 mb-4 text-sm leading-7 text-gray-700">{project.role}</p>

        <p className="mt-0 mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
          주요 성과
        </p>
        <ul className="mt-0 pl-5 space-y-2">
          {project.results.map((result, i) => (
            <li key={i} className="text-sm leading-7 text-gray-700">
              {result}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function YearSection({ yearGroup }) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="mt-0 mb-0 text-3xl font-extrabold">{yearGroup.year}</h2>
        <span className="text-sm text-gray-400">
          {yearGroup.projects.length}개 프로젝트
        </span>
      </div>
      <div className="pl-0">
        {yearGroup.projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default function AboutMusinsaWork() {
  const totalProjects = MUSINSA_WORK.reduce((acc, y) => acc + y.projects.length, 0);

  return (
    <section className="max-w-3xl mx-auto">
      {/* 헤더 */}
      <header className="mb-14">
        <p className="mt-0 mb-2 text-sm font-semibold text-gray-400 uppercase tracking-widest">
          2021 – 2025
        </p>
        <h1 className="mt-0 mb-4 text-4xl font-extrabold leading-tight">MUSINSA</h1>
        <p className="mt-0 mb-0 text-base text-gray-500">
          퍼블리싱 및 프론트엔드 개발 · 총{" "}
          <strong className="text-gray-900">{totalProjects}개</strong> 프로젝트
        </p>
      </header>

      {/* 연도별 섹션 */}
      {MUSINSA_WORK.map((yearGroup) => (
        <YearSection key={yearGroup.year} yearGroup={yearGroup} />
      ))}
    </section>
  );
}
