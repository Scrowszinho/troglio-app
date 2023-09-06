import { DefaultTextBrEnum } from "../enum/default-text.enum";

export function getTypeText(type: string): string {
    for (const [key, value] of Object.entries(DefaultTextBrEnum)) {
        if(type === key)return value
    }
      return DefaultTextBrEnum.OTHERS;
}