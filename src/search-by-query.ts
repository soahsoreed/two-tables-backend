import { IRecord } from "./IRecord.js";

export function searchByQuery(items: IRecord[], query: string) {
  const queryNormalized = normalizeText(query);

  const result = items.filter(item => {
    const nameNormalized = normalizeText(String(item.id));
    return nameNormalized.includes(queryNormalized);
  });

  return result;
}

export function normalizeText(text: string) {
  return (text ?? '').trim().toLowerCase();
}
