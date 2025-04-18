import LogoIcon from "@/layout/LogoIcon";
import {
  ArrowRightEndOnRectangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function TopMenu() {
  return (
    <nav className="flex justify-center bg-gray-800 p-4 text-white">
      <div className="flex w-4/6 justify-between">
        <LogoIcon />
        <div className="flex gap-8">
          <SunIcon className="size-8" />
          <ArrowRightEndOnRectangleIcon className="size-8" />
        </div>
      </div>
    </nav>
  );
}
