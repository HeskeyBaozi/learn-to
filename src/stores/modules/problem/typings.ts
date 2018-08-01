import { ISubmitRecord } from '@/typings/problem.ts';
import { IProblemItem } from '@/typings/problem.ts';

export interface State {
  problemItem: IProblemItem;
  problemSubmitRecord: ISubmitRecord[];
  submitRecord: string;
  activeTab: string;
}
