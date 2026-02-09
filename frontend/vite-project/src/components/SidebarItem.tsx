import type { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      {icon}
      {text}
    </div>
  );
}
