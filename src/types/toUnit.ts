export interface IUnit {
  label: string;
  value: number;
}

export interface IUnitDict {
  1: IUnit[];
  2: IUnit[];
  3: IUnit[];
}

export interface IOption {
  fixedLen?: number;
  type?: number;
  placeholder?: string;
}
