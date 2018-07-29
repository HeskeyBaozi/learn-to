export type ValidatorCallback = (error?: Error) => void;

export interface RuleDescription<T> {
  field: string;
  fullField: string;
  type: string;
  validator: (rule: RuleDescription<T>, value: T, callback: ValidatorCallback) => void;
}
