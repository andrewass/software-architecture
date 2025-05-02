import LogoIcon from "@/layout/LogoIcon";
import {
  ArrowRightEndOnRectangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function TopMenu() {
  return (
    <nav className="fixed z-50 flex h-20 w-full items-center bg-gray-800 text-white">
      <div className="mx-auto flex w-400 justify-between">
        <LogoIcon />
        <div className="flex gap-8">
          <SunIcon className="size-8" />
          <ArrowRightEndOnRectangleIcon className="size-8" />
        </div>
      </div>
    </nav>
  );
}
