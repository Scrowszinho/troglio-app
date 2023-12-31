export interface IHomeList {
  icon: string;
  value: number;
  title: string;
  type: 'DEBIT' | 'CREDIT';
  color?: string;
}

export interface IHomeListCalc {
  debits: number;
  credits: number;
}