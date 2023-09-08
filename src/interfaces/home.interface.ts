export interface IValues {
  id: number;
  userId: number;
  month: number;
  year: number;
  value: number;
  type: string;
}

export interface ITreatValues extends IValues {
  icon: {
    icon: string;
    color: string;
  };
  title: string;
}

export interface IDebitData {
  debits: IValues[];
  total: number;
}
