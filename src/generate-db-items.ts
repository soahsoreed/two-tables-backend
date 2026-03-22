import { IRecord } from "./IRecord.js";

export function generateDbItems(length: number): IRecord[] {
  const res = new Array(length)
    .fill(null)
    .map((_, index) => {
      return {
        "id": index,
        "name": `Item ${index}`,
        "isSelected": false,
        "sortId": index
      }
    });

    return res;
}
