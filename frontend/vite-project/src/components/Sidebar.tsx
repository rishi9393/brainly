import { LogoIcon } from "../icons/logoIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r border-gray-200 w-72 fixed left-0 top-0 p-6">
      <div className="flex text-2xl items-center gap-2 font-bold  ">
        <LogoIcon/>Brianly
      </div>
      <div className="pt-8 animate-fade-in">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
}
