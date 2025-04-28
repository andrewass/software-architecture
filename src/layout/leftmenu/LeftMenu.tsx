import { LeftMenuTopItemType } from "@/layout/leftmenu/LeftMenuItemType";
import { LeftMenuTopItem } from "@/layout/leftmenu/LeftMenuItem";

const menuTopItems: LeftMenuTopItemType[] = [
  { summary: "Deployment", subMenuItems: [] },
  { summary: "Integration", subMenuItems: [] },
  { summary: "Performance", subMenuItems: [] },
  {
    summary: "Principles",
    subMenuItems: [
      { summary: "Domain Driven Design", path: "/principles/domaindriven" },
    ],
  },
  { summary: "Security", subMenuItems: [] },
  {
    summary: "Styles",
    subMenuItems: [{ summary: "Event Driven", path: "/styles/eventdriven" }],
  },
];

export default function LeftMenu() {
  return (
    <div className="max-w-1/5 min-w-1/5 bg-green-800 pt-9">
      <ul className="menu w-full">
        {menuTopItems.map((item, index) => (
          <LeftMenuTopItem
            key={index}
            summary={item.summary}
            subMenuItems={item.subMenuItems}
          />
        ))}
      </ul>
    </div>
  );
}
