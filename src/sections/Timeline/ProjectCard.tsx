import { BulletList } from "@/components/index";
import type { ProjectItem } from "@/types";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="mb-10 pb-10 border-b border-gray-100 last:border-none last:mb-0 last:pb-0">
      <div className="flex flex-col gap-1 mb-4">
        <h3 className="mt-0 mb-0 text-lg font-bold leading-snug">📁 {project.title}</h3>
      </div>
      <div className="pl-4 border-l-2 border-gray-200">
        {project.heading && <p className="mt-0 mb-4 text-base font-bold">{project.heading}</p>}
        {project.context && (
          <>
            <p className="mt-0 mb-1 text-sm font-semibold text-gray-500 uppercase tracking-wide">작업 배경</p>
            <BulletList items={project.context} />
          </>
        )}
        {project.role && (
          <>
            <p className="mt-0 mb-1 text-sm font-semibold text-gray-500 uppercase tracking-wide">작업 내용</p>
            <BulletList items={project.role} />
          </>
        )}
        {project.results && (
          <>
            <p className="mt-0 mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">주요 성과</p>
            <BulletList items={project.results} className="mb-0" />
          </>
        )}
        {project.contributionRate && (
          <p className="mt-4 mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wide ">
            기여도: <span className="font-normal text-gray-700">{project.contributionRate}</span>
          </p>
        )}
        {project.news && (
          <p className="mt-4 text-sm font-semibold text-gray-500">
            관련 소식:{" "}
            <a href={project.news} target="_blank" rel="noreferrer" className="font-normal text-gray-700 underline">
              링크
            </a>
          </p>
        )}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-xs border text-gray-900 border-gray-500 py-1 px-2 rounded-sm hover:text-white hover:bg-gray-900 hover:border-gray-900"
          >
            {project.href.startsWith("http") ? "사이트 보기" : "퍼블리싱 파일 보기"}
          </a>
        )}
      </div>
    </article>
  );
}
