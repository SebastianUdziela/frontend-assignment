import { Dispatch } from 'redux';
import { Actions } from '../redux/actions';
import { ArticlesService } from '../Services/ArticlesService';
import { RequestUrls } from '../utils/enums';

export class ArticlesThunk {
  public static getArticles = async (dispatch: Dispatch, pathname: RequestUrls) => {
    try {
      const data = await ArticlesService.getSportArticles(pathname);
      if (data && data.data) {
        dispatch({
          type: Actions.UPDATE_ARTICLES,
          payload: data.data.articles,
        });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}
