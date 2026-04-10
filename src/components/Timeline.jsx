function ProjectCard({ project, titleTag: Tag }) {
  return (
    <div key={project.title}>
      <Tag>{project.title}</Tag>
      {project.subtitle && <p>{project.subtitle}</p>}
      <ul>
        {project.context && <li>Context: {project.context}</li>}
        {project.action && <li>Action: {project.action}</li>}
        {project.result && <li>Result: {project.result}</li>}
        {project.news && (
          <li>
            관련 소식:{" "}
            <a href={project.news} target="_blank" rel="noreferrer">
              링크
            </a>
          </li>
        )}
      </ul>
      {project.codingListHref && (
        <a href={project.codingListHref} target="_blank" rel="noreferrer">
          {project.codingListHref.startsWith("http") ? "관련 사이트 보기" : "퍼블리싱 파일 보기"}
        </a>
      )}
    </div>
  );
}

export default function Timeline({ items }) {
  return (
    <>
      {items.map((entry) => (
        <article key={`${entry.period}-${entry.company}`}>
          <h3>
            {entry.period} | {entry.company}
          </h3>
          <p>{entry.role}</p>

          {entry.groups
            ? entry.groups.map((group) => (
                <section key={group.yearLabel}>
                  <h4>{group.yearLabel}</h4>
                  {group.projects.map((project) => (
                    <ProjectCard key={project.title} project={project} titleTag="h5" />
                  ))}
                </section>
              ))
            : entry.projects.map((project) => (
                <ProjectCard key={project.title} project={project} titleTag="h4" />
              ))}
        </article>
      ))}
    </>
  );
}
