import { LogoIcon } from "../icons/logoIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-[#0f1116] border-r border-white/5 p-6">
      <div className="flex items-center gap-3 text-xl font-semibold text-white">
        <div className="h-10 w-10 rounded-xl bg-[#1c1f27] flex items-center justify-center text-violet-300">
          <LogoIcon />
        </div>
        <div>
          <div className="font-display tracking-wide">Brainly</div>
          <div className="text-xs text-white/50">Second Brain</div>
        </div>
      </div>

      <div className="pt-10 space-y-2">
        <SidebarItem text="All Notes" to="/dashboard" />
        <SidebarItem text="YouTube" to="/youtube" icon={<YoutubeIcon />} />
        <SidebarItem text="Twitter" to="/twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Links" to="/links" />
        <SidebarItem text="Shared" to="/share/demo" />
      </div>

      <div className="absolute bottom-6 left-6 right-6 space-y-3 text-xs text-white/50">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span>Help</span>
        </div>
      </div>
    </aside>
  );
}
