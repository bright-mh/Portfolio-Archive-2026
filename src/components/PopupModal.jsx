import { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * 범용 레이어 팝업 컴포넌트
 *
 * @param {string}   title       - 고정 헤더에 표시할 제목 (필수)
 * @param {string}   [subtitle]  - 제목 아래 작은 설명 텍스트
 * @param {{ href: string, label: string }} [link] - 헤더에 표시할 외부 링크
 * @param {string}   [detailHref] - 내부 상세 페이지 경로 (React Router Link)
 * @param {string}   [ariaLabel] - 스크린리더용 다이얼로그 레이블 (기본값: title)
 * @param {Function} onClose     - 닫기 핸들러 (필수)
 * @param {React.ReactNode} children - 스크롤되는 본문 영역
 */
export default function PopupModal({ title, subtitle, link, detailHref, ariaLabel, onClose, children }) {
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
      aria-label={ariaLabel ?? title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 bg-black/55 flex items-center justify-center z-[1000]"
    >
      <div className="bg-white rounded-xl w-[90%] max-w-2xl max-h-[80vh] flex flex-col shadow-2xl overflow-hidden">
        {/* 고정 헤더 */}
        <div className="flex items-start justify-between px-10 py-6 border-b border-gray-100 bg-white shrink-0">
          <div>
            <h3 className="mt-0 mb-1 text-xl font-bold">{title}</h3>
            {subtitle && <p className="mt-0 mb-0 text-sm text-gray-500">{subtitle}</p>}
            {link && (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 text-xs underline"
              >
                {link.label}
              </a>
            )}
            {detailHref && (
              <Link
                to={detailHref}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 ml-3 text-xs underline text-blue-600 hover:text-blue-800"
              >
                프로젝트 상세 내역 보기 →
              </Link>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="ml-4 shrink-0 bg-transparent border-none text-2xl leading-none cursor-pointer text-gray-400 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {/* 스크롤 본문 */}
        <div className="overflow-y-auto px-10 py-6">{children}</div>
      </div>
    </div>
  );
}
