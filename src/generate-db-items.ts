import { IRecord } from "./IRecord.js";

export function generateDbItems(length: number): IRecord[] {
  const res = new Array(length)
    .fill(null)
    .map((_, index) => {
      const id = index + 1;

      return {
        "id": id,
        "name": `Item ${id}`,
        "isSelected": false,
        "sortIndex": null
      }
    });

    return res;
}
