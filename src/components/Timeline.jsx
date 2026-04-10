import { useState, useEffect } from "react";

function ProjectCard({ project }) {
  return (
    <div className="mb-6">
      <h5 className="mt-0 mb-1.5 text-base font-semibold">{project.title}</h5>
      <ul className="m-0 pl-5 leading-7 text-sm">
        {project.subtitle && <li>Summary: {project.subtitle}</li>}
        {project.context && <li>Context: {project.context}</li>}
        {project.action && <li>Action: {project.action}</li>}
        {project.result && <li>Result: {project.result}</li>}
        {project.news && (
          <li>
            관련 소식:{" "}
            <a href={project.news} target="_blank" rel="noreferrer" className="underline">
              링크
            </a>
          </li>
        )}
      </ul>
      {project.codingListHref && (
        <a
          href={project.codingListHref}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-2 text-xs underline"
        >
          {project.codingListHref.startsWith("http") ? "관련 사이트 보기" : "퍼블리싱 파일 보기"}
        </a>
      )}
    </div>
  );
}

function PopupModal({ entry, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${entry.company} 프로젝트 상세`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 bg-black/55 flex items-center justify-center z-[1000]"
    >
      <div className="bg-white rounded-xl px-10 py-8 w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto relative shadow-2xl">
        <button
          onClick={onClose}
          aria-label="닫기"
          className="absolute top-4 right-5 bg-transparent border-none text-2xl leading-none cursor-pointer text-gray-400 hover:text-gray-700"
        >
          ×
        </button>
        <h3 className="mt-0 mb-1 text-xl font-bold">
          {entry.period} | {entry.company}
        </h3>
        <p className="mt-0 mb-2 text-sm text-gray-500">{entry.role}</p>
        {entry.codingListHref && (
          <a
            href={entry.codingListHref}
            target="_blank"
            rel="noreferrer"
            className="inline-block mb-6 text-xs underline"
          >
            {entry.codingListHref.startsWith("http") ? "관련 사이트 보기" : "퍼블리싱 파일 보기"}
          </a>
        )}

        {entry.groups
          ? entry.groups.map((group) => (
              <section key={group.yearLabel} className="mb-7">
                <h4 className="mt-0 mb-3 pb-1.5 border-b border-gray-200 text-base font-semibold">
                  {group.yearLabel}
                </h4>
                {group.projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </section>
            ))
          : entry.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
      </div>
    </div>
  );
}

export default function Timeline({ items }) {
  const [activeEntry, setActiveEntry] = useState(null);

  return (
    <>
      <div className="grid grid-cols-4 auto-rows-[minmax(120px,auto)] gap-4 max-[1024px]:grid-cols-3 max-[640px]:grid-cols-2 max-[640px]:gap-3">
        {items.map((entry) => {
          const isMusinsa = entry.company === "MUSINSA";
          return (
            <button
              key={`${entry.period}-${entry.company}`}
              onClick={() => setActiveEntry(entry)}
              className={[
                "rounded-xl text-left cursor-pointer transition-shadow duration-200",
                isMusinsa
                  ? "col-span-2 row-span-2 px-10 py-8 bg-[#111] text-white border-2 border-[#222] hover:shadow-2xl hover:border-[#555] max-[640px]:col-span-full max-[640px]:row-span-1"
                  : "px-5 py-5 bg-[#fafafa] text-inherit border border-[#ddd] hover:shadow-lg hover:border-[#aaa]",
              ].join(" ")}
            >
              <strong className={`block font-bold ${isMusinsa ? "text-2xl" : "text-lg"}`}>
                {entry.period}
              </strong>
              <span className={`block mt-1 font-semibold ${isMusinsa ? "text-base" : "text-sm"}`}>
                {entry.company}
              </span>
              <small className={`block mt-1 text-xs ${isMusinsa ? "text-gray-400" : "text-gray-500"}`}>
                {entry.role}
              </small>
            </button>
          );
        })}
      </div>

      {activeEntry && (
        <PopupModal entry={activeEntry} onClose={() => setActiveEntry(null)} />
      )}
    </>
  );
}
