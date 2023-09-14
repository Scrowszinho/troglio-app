import { DefaultTextBrEnum } from '../enum/default-text.enum';
import { IDefaultArray } from '../interfaces/default.interface';

export function getTypeText(type: string): string {
  for (const [key, value] of Object.entries(DefaultTextBrEnum)) {
    if (type === key) return value;
  }
  return DefaultTextBrEnum.OTHERS;
}

export function getArrayTypeText(): IDefaultArray[] {
  const array: IDefaultArray[] = [];
  for (const [key, value] of Object.entries(DefaultTextBrEnum)) {
    array.push({ key, value });
  }
  return array;
}
