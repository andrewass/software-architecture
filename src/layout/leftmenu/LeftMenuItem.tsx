import {
  LeftMenuSubMenuItemType,
  LeftMenuTopItemType,
} from "@/layout/leftmenu/LeftMenuItemType";

export function LeftMenuTopItem({
  summary,
  subMenuItems,
}: LeftMenuTopItemType) {
  return (
    <li>
      <details>
        <summary className="text-lg">{summary}</summary>
        <ul>
          {subMenuItems.map((item, index) => (
            <LeftMenuSubItem
              key={index}
              path={item.path}
              summary={item.summary}
            />
          ))}
        </ul>
      </details>
    </li>
  );
}

export function LeftMenuSubItem({ path, summary }: LeftMenuSubMenuItemType) {
  return (
    <li>
      <a className="link" href={path}>
        <span className="text-base"> {summary}</span>
      </a>
    </li>
  );
}
