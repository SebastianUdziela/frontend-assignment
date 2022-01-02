import { AxiosResponse } from 'axios';
import { articlesClient } from '../api/ApiClient';
import { RequestUrls } from '../utils/enums';
import { ArticlesModel } from '../utils/interface';

export class ArticlesService {
  public static async getSportArticles(pathname: RequestUrls): Promise<AxiosResponse<ArticlesModel>> {
    return await articlesClient.get(`/${pathname}`);
  }
}
