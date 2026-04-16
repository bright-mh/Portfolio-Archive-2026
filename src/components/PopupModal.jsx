import { useEffect, useRef, useState } from "react";

/**
 * 범용 레이어 팝업 컴포넌트
 *
 * @param {string}   title       - 고정 헤더에 표시할 제목 (필수)
 * @param {string}   [subtitle]  - 제목 아래 작은 설명 텍스트
 * @param {{ href: string, label: string }} [link] - 헤더에 표시할 외부 링크
 * @param {{ label: string, id: string }[]} [tabs] - 연도별 탭 (클릭 시 해당 섹션으로 스크롤)
 * @param {string}   [ariaLabel] - 스크린리더용 다이얼로그 레이블 (기본값: title)
 * @param {Function} onClose     - 닫기 핸들러 (필수)
 * @param {boolean}  [wide]      - 넓은 팝업 여부 (기본값: false)
 * @param {React.ReactNode} children - 스크롤되는 본문 영역
 */
export default function PopupModal({ title, subtitle, link, tabs, ariaLabel, onClose, children, wide = false }) {
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id ?? null);
  const scrollContainerRef = useRef(null);
  const isScrollingRef = useRef(false);
  const scrollTimerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!tabs || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;

    // 마운트 시 1회만 읽어 캐싱 (Forced Reflow 1회 허용)
    const containerTop = container.getBoundingClientRect().top;
    const offsets = tabs.map((tab) => {
      const el = document.getElementById(tab.id);
      return { id: tab.id, top: el ? el.getBoundingClientRect().top - containerTop : 0 };
    });

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollTop = container.scrollTop;
      let currentId = tabs[0].id;

      for (const { id, top } of offsets) {
        if (top - scrollTop <= 8) currentId = id;
      }

      setActiveTab(currentId);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [tabs]);

  const scrollToSection = (id) => {
    const container = scrollContainerRef.current;
    const el = document.getElementById(id);
    if (!container || !el) return;

    isScrollingRef.current = true;
    clearTimeout(scrollTimerRef.current);

    const onScrollEnd = () => {
      isScrollingRef.current = false;
      clearTimeout(scrollTimerRef.current);
      container.removeEventListener("scrollend", onScrollEnd);
    };
    container.addEventListener("scrollend", onScrollEnd);

    // scrollend 미지원 브라우저 fallback
    scrollTimerRef.current = setTimeout(onScrollEnd, 1500);

    const offset = el.getBoundingClientRect().top - container.getBoundingClientRect().top;
    container.scrollBy({ top: offset, behavior: "smooth" });
    setActiveTab(id);
  };

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
      <div
        className={`bg-white rounded-xl w-[90%] max-h-[80vh] flex flex-col shadow-2xl overflow-hidden ${wide ? "max-w-3xl" : "max-w-2xl"}`}
      >
        {/* 고정 헤더 */}
        <div className="px-10 py-6 border-b border-gray-100 bg-white shrink-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="mt-0 mb-1 text-2xl font-bold">{title}</h3>
              {subtitle && <p className="mt-0 mb-0 text-sm text-gray-500">{subtitle}</p>}
              {link && (
                <a href={link.href} target="_blank" rel="noreferrer" className="inline-block mt-2 text-xs underline">
                  {link.label}
                </a>
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

          {tabs && tabs.length > 0 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-0.5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer border-1 text-gray-500 border-gray-300 ${
                    activeTab === tab.id
                      ? "bg-gray-900 text-white border-gray-900"
                      : "text-gray-500 border-gray-300 hover:text-gray-900 hover:border-gray-500"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 스크롤 본문 */}
        <div ref={scrollContainerRef} className="overflow-y-auto px-10 py-6">
          {children}
        </div>
      </div>
    </div>
  );
}
