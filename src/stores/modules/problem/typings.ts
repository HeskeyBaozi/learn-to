import { IProblemItem, IProblemListItem, ISubmitRecord } from '@/typings/problem.ts';

export interface State {
  problemItem: IProblemItem;
  problemSubmitRecord: ISubmitRecord[];
  submitRecord: string;
  activeTab: string;
  problemList: IProblemListItem[];
  problemIndex: number;
}
