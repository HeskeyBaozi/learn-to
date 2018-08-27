export interface LayoutMenuDataItem {
  name: string;
  icon: string;
  key: string;
  authorities?: string[];
  onClick: () => any;
}
