import { DataSources } from './enums';

export interface ArticleModel {
  category: DataSources;
  date: string;
  id: number;
  image: string;
  preamble: string;
  title: string;
}

export interface ArticlesModel {
  articles: ArticleModel[];
}
