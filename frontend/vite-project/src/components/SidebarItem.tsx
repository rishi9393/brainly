import type { ReactElement } from "react";
import { NavLink } from "react-router-dom";

export function SidebarItem({
  text,
  icon,
  to,
}: {
  text: string;
  icon?: ReactElement;
  to: string;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 py-2.5 rounded-xl px-3 text-sm transition ${
          isActive
            ? "bg-white/10 text-white shadow-[0_10px_30px_rgba(124,77,255,0.25)]"
            : "text-white/70 hover:bg-white/5 hover:text-white"
        }`
      }
    >
      <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-white/80">
        {icon ?? <span className="h-2 w-2 rounded-full bg-white/60" />}
      </div>
      <span className="tracking-wide">{text}</span>
    </NavLink>
  );
}
