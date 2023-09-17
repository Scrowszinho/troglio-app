import { DefaultTextBrEnum, DefaultTextIncomingsBrEnum } from '../enum/default-text.enum';
import { IDefaultArray } from '../interfaces/default.interface';

export function getTypeText(type: string): string {
  for (const [key, value] of Object.entries(DefaultTextBrEnum)) {
    if (type === key) return value;
  }
  return DefaultTextBrEnum.OTHERS;
}

export function getTypeTextIncoming(type: string): string {
  for (const [key, value] of Object.entries(DefaultTextIncomingsBrEnum)) {
    if (type === key) return value;
  }
  return DefaultTextIncomingsBrEnum.OTHERS;
}

export function getArrayTypeText(isIncoming: boolean = false): IDefaultArray[] {
  const array: IDefaultArray[] = [];
  if(isIncoming) {
    for (const [key, value] of Object.entries(DefaultTextIncomingsBrEnum)) {
      array.push({ key, value });
    }
    return array
  }
  for (const [key, value] of Object.entries(DefaultTextBrEnum)) {
    array.push({ key, value });
  }
  return array;
}
