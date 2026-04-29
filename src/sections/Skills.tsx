import { SKILL_LIST } from "@/constants";

export function Skills() {
  return (
    <dl className="flex flex-col gap-4">
      {SKILL_LIST.map(({ category, items }) => (
        <div
          key={category}
          className="flex flex-col gap-2 sm:flex-row sm:items-start relative pl-[14px] ml-[10px] before:content-[''] before:absolute before:left-[1px] before:top-[12px] before:w-[3px] before:h-[3px] before:bg-black before:rounded-full"
        >
          <dt className="w-30 shrink-0 text-sm font-semibold text-gray-500 pt-1">{category}</dt>
          <dd className="flex flex-wrap gap-2 m-0">
            {items.map((item) => (
              <span key={item} className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
