export interface ISubmitRecord {
  submissionTime: string;
  state: string;
  code: string;
}

export interface IProblemItem {
  name: string;
  publish: string;
  submit: number;
  passNum: number;
  spaceLimit: number;
  timeLimit: number;
}
