import { CAREER_LIST } from "@/constants";

export function Career() {
  return (
    <ol className="mt-3">
      {CAREER_LIST.map(({ company, period }) => (
        <li
          key={company}
          className="relative pl-[14px] ml-[10px] leading-[30px] before:content-[''] before:absolute before:left-[1px] before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[3px] before:bg-black before:rounded-full"
        >
          {company} | {period}
        </li>
      ))}
    </ol>
  );
}
