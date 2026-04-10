import { useState, useEffect } from "react";
import styles from "./Timeline.module.css";

function ProjectCard({ project }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h5 style={{ margin: "0 0 0.4rem" }}>{project.title}</h5>
      <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: 1.7 }}>
        {project.subtitle && <li>Summary: {project.subtitle}</li>}
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
        <a
          href={project.codingListHref}
          target="_blank"
          rel="noreferrer"
          style={{ display: "inline-block", marginTop: "0.5rem", fontSize: "0.85rem" }}
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
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "2rem 2.5rem",
          maxWidth: "680px",
          width: "90%",
          maxHeight: "80vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="닫기"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1.2rem",
            background: "none",
            border: "none",
            fontSize: "1.6rem",
            lineHeight: 1,
            cursor: "pointer",
            color: "#666",
          }}
        >
          ×
        </button>
        <h3 style={{ marginTop: 0, marginBottom: "0.3rem" }}>
          {entry.period} | {entry.company}
        </h3>
        <p style={{ margin: "0 0 0.6rem", color: "#666", fontSize: "0.9rem" }}>
          {entry.role}
        </p>
        {entry.codingListHref && (
          <a
            href={entry.codingListHref}
            target="_blank"
            rel="noreferrer"
            style={{ display: "inline-block", marginBottom: "1.5rem", fontSize: "0.85rem" }}
          >
            {entry.codingListHref.startsWith("http") ? "관련 사이트 보기" : "퍼블리싱 파일 보기"}
          </a>
        )}

        {entry.groups
          ? entry.groups.map((group) => (
              <section key={group.yearLabel} style={{ marginBottom: "1.8rem" }}>
                <h4
                  style={{
                    margin: "0 0 0.8rem",
                    paddingBottom: "0.4rem",
                    borderBottom: "1px solid #eee",
                  }}
                >
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
      <div className={styles.grid}>
        {items.map((entry) => {
          const isMusinsa = entry.company === "MUSINSA";
          return (
            <button
              key={`${entry.period}-${entry.company}`}
              onClick={() => setActiveEntry(entry)}
              className={isMusinsa ? styles.cardMusinsa : undefined}
              style={{
                padding: isMusinsa ? "2rem 2.5rem" : "1.2rem",
                border: isMusinsa ? "2px solid #222" : "1px solid #ddd",
                borderRadius: "10px",
                background: isMusinsa ? "#111" : "#fafafa",
                color: isMusinsa ? "#fff" : "inherit",
                cursor: "pointer",
                textAlign: "left",
                transition: "box-shadow 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = isMusinsa
                  ? "0 6px 24px rgba(0,0,0,0.25)"
                  : "0 4px 16px rgba(0,0,0,0.1)";
                e.currentTarget.style.borderColor = isMusinsa ? "#555" : "#aaa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = isMusinsa ? "#222" : "#ddd";
              }}
            >
              <strong style={{ display: "block", fontSize: isMusinsa ? "1.4rem" : "1.1rem" }}>
                {entry.period}
              </strong>
              <span
                style={{
                  display: "block",
                  marginTop: "0.3rem",
                  fontWeight: 600,
                  fontSize: isMusinsa ? "1.1rem" : "inherit",
                }}
              >
                {entry.company}
              </span>
              <small
                style={{
                  display: "block",
                  marginTop: "0.3rem",
                  color: isMusinsa ? "#aaa" : "#888",
                }}
              >
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
