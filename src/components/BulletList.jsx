export function BulletList({ items, className = "mb-4" }) {
  return (
    <ul className={`mt-0 space-y-2 ${className}`}>
      {items.map((item, i) => (
        <li
          key={i}
          className="text-sm leading-7 text-gray-700 relative pl-[14px] ml-[10px] before:content-[''] before:absolute before:left-[1px] before:top-[12px] before:w-[3px] before:h-[3px] before:bg-black before:rounded-full"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
