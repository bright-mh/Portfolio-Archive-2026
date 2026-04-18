import { useState } from "react";
import { PopupModal, BulletList } from "@/components/index";

function ProjectCard({ project }) {
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

function SkillBadge({ skill }) {
  return (
    <span className="inline-block px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">{skill}</span>
  );
}

function MusinsaProjectItem({ project }) {
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
      </div>
    </article>
  );
}

function MusinsaYearSection({ yearGroup }) {
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

export function Timeline({ items }) {
  const [activeEntry, setActiveEntry] = useState(null);

  return (
    <>
      <div className="grid grid-cols-4 auto-rows-[minmax(120px,auto)] gap-4 max-[1024px]:grid-cols-3 max-[640px]:grid-cols-2 max-[640px]:gap-3">
        {items.map((entry) => {
          const isMusinsa = entry.company === "MUSINSA";

          if (isMusinsa) {
            return (
              <div
                key={`${entry.period}-${entry.company}`}
                className="col-span-2 row-span-2 flex flex-col rounded-xl bg-[#111] text-white border-2 border-[#222] transition-shadow duration-200 hover:shadow-2xl hover:border-[#555] max-[640px]:col-span-full max-[640px]:row-span-1"
              >
                <button
                  onClick={() => setActiveEntry(entry)}
                  className="flex-1 text-left px-10 py-8 bg-transparent border-none cursor-pointer"
                >
                  <strong className="block text-2xl font-bold">{entry.period}</strong>
                  <span className="block mt-1 text-base font-semibold">{entry.company}</span>
                  <small className="block mt-1 text-xs text-gray-400">{entry.role}</small>
                </button>
              </div>
            );
          }

          return (
            <button
              key={`${entry.period}-${entry.company}`}
              onClick={() => setActiveEntry(entry)}
              className="px-5 py-5 bg-[#fafafa] text-inherit border border-[#ddd] rounded-xl text-left cursor-pointer transition-shadow duration-200 hover:shadow-lg hover:border-[#aaa]"
            >
              <strong className="block text-lg font-bold">{entry.period}</strong>
              <span className="block mt-1 text-sm font-semibold">{entry.company}</span>
              <small className="block mt-1 text-xs text-gray-500">{entry.role}</small>
            </button>
          );
        })}
      </div>

      {activeEntry && (
        <PopupModal
          title={`${activeEntry.period} | ${activeEntry.company}`}
          subtitle={activeEntry.role}
          link={activeEntry.href ? { href: activeEntry.href, label: "사이트 보기" } : undefined}
          ariaLabel={`${activeEntry.company} 프로젝트 상세`}
          onClose={() => setActiveEntry(null)}
          wide={!!activeEntry.musinsaGroups}
          tabs={activeEntry.musinsaGroups?.map((g) => ({ label: g.year, id: `musinsa-year-${g.year}` }))}
        >
          {activeEntry.musinsaGroups
            ? activeEntry.musinsaGroups.map((yearGroup) => (
                <MusinsaYearSection key={yearGroup.year} yearGroup={yearGroup} />
              ))
            : activeEntry.groups
              ? activeEntry.groups.map((group) => (
                  <section key={group.yearLabel} className="mb-7">
                    <h4 className="mt-0 mb-3 pb-1.5 border-b border-gray-200 text-base font-semibold">
                      {group.yearLabel}
                    </h4>
                    {group.projects.map((project) => (
                      <ProjectCard key={project.title} project={project} />
                    ))}
                  </section>
                ))
              : activeEntry.projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </PopupModal>
      )}
    </>
  );
}
