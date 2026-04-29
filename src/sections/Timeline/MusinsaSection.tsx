import { BulletList } from "@/components/index";
import type { MusinsaProject, MusinsaYearGroup } from "@/types";

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-block px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">{skill}</span>
  );
}

function MusinsaProjectItem({ project }: { project: MusinsaProject }) {
  return (
    <article className="mb-10 pb-10 border-b border-gray-100 last:border-none last:mb-0 last:pb-0">
      <div className="flex flex-col gap-1 mb-4">
        <h3 className="mt-0 mb-0 text-lg font-bold leading-snug">📁 {project.title}</h3>
        <p className="mt-0 mb-0 text-sm text-gray-400">{project.period}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
      <div className="pl-4 border-l-2 border-gray-200">
        <p className="mt-0 mb-4 text-base font-bold">{project.heading}</p>
        <p className="mt-0 mb-1 text-sm font-semibold text-gray-500 uppercase tracking-wide">작업 내용</p>
        <p className="mt-0 mb-4 text-sm leading-7 text-gray-700 relative pl-[14px] ml-[10px] before:content-[''] before:absolute before:left-[1px] before:top-[14px] before:-translate-y-1/2 before:w-[3px] before:h-[3px] before:bg-black before:rounded-full">
          {project.role}
        </p>
        <p className="mt-0 mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">주요 성과</p>
        <BulletList items={project.results} className="mb-0" />
        <p className="mt-4 mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wide ">
          기여도: <span className="font-normal text-gray-700">{project.contributionRate}</span>
        </p>
      </div>
    </article>
  );
}

export function MusinsaYearSection({ yearGroup }: { yearGroup: MusinsaYearGroup }) {
  return (
    <section id={`musinsa-year-${yearGroup.year}`} className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="mt-0 mb-0 text-xl font-extrabold">{yearGroup.year}</h2>
        <span className="text-sm text-gray-400">{yearGroup.projects.length}개 프로젝트</span>
      </div>
      {yearGroup.projects.map((project) => (
        <MusinsaProjectItem key={project.title} project={project} />
      ))}
    </section>
  );
}
