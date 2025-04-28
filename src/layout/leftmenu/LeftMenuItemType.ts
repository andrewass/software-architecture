export type LeftMenuSubMenuItemType = {
  summary: string;
  path: string;
};

export type LeftMenuTopItemType = {
  summary: string;
  subMenuItems: LeftMenuSubMenuItemType[];
};
