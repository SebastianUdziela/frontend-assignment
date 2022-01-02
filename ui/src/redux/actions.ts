import { ArticleModel } from '../utils/interface';

export enum Actions {
  UPDATE_ARTICLES = 'UPDATE_ARTICLES',
}

export interface UpdateArticles {
  type: Actions.UPDATE_ARTICLES;
  payload: ArticleModel[];
}

export type ActionsTypes = UpdateArticles;
