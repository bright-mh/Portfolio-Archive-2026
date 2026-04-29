import { useState } from "react";
import { PopupModal } from "@/components/index";
import { WORK_TIMELINE } from "@/constants";
import type { WorkEntry } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { MusinsaYearSection } from "./MusinsaSection";

export function Timeline() {
  const items = WORK_TIMELINE;
  const [activeEntry, setActiveEntry] = useState<WorkEntry | null>(null);

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
              : (activeEntry.projects ?? []).map((project) => <ProjectCard key={project.title} project={project} />)}
        </PopupModal>
      )}
    </>
  );
}
