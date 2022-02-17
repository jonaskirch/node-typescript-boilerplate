import { Model } from 'mongoose';

export interface IPaginateList {
  items: any[];
  limit: number;
  page: number;
  query_count: number;
  pages: number;
  has_more: boolean;
  total: number;
}

class PaginateService {
  public async execute(
    Entity: Model<any>,
    limit: number,
    page: number,
    filter: any = null,
    projection: any = null,
    sort: any = null,
  ): Promise<IPaginateList | null> {
    const data = await Entity.find(filter, projection, {
      sort,
      limit,
      skip: (page - 1) * limit,
    });

    const total = await Entity.countDocuments(filter);
    const pages = Math.round(total / limit);

    const list: IPaginateList = {
      items: data,
      limit,
      page,
      pages,
      has_more: page < pages,
      query_count: data.length,
      total,
    };

    return list;
  }
}

export default new PaginateService();
