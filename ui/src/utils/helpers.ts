import { ArticleModel } from './interface';

export const SortByDate = (data: ArticleModel[], articlesDescending: boolean) => {
  const articles = data;
  if (articlesDescending) {
    articles.sort(function (a, b) {
      const firstDate = new Date(a.date).getTime();
      const secondDate = new Date(b.date).getTime();
      return firstDate ? firstDate - secondDate : -1;
    });
  } else {
    articles.sort((a, b) => {
      const firstDate = new Date(a.date).getTime();
      const secondDate = new Date(b.date).getTime();
      return secondDate ? secondDate - firstDate : -1;
    });
  }
  return articles;
};
