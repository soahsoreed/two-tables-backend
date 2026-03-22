interface IPaginationData {
  total: number;
  page: number;
  limit: number;
}

export class PaginationEntity<T> {
  constructor(
    public items: T[],
    public pagination: IPaginationData
  ) { }
}
