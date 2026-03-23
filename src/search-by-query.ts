import { IRecord } from "./IRecord.js";

export function searchByQuery(items: IRecord[], query: string) {
  const queryNormalized = normalizeText(query);

  const result = items.filter(item => {
    const normalizedId = normalizeText(String(item.id));
    const normalizedName = normalizeText(String(item.name));

    return normalizedId.includes(queryNormalized) || 
      normalizedName.includes(queryNormalized);
  });

  return result;
}

export function normalizeText(text: string) {
  return (text ?? '').trim().toLowerCase();
}
