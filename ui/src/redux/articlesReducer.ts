import { ArticlesModel } from '../utils/interface';
import { Actions, ActionsTypes } from './actions';

const initialState = {
  articles: [],
};

export const ArticlesReducer = (state: ArticlesModel = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case Actions.UPDATE_ARTICLES: {
      return {
        ...state,
        articles: [...state.articles, ...action.payload],
      };
    }
    default:
      return state;
  }
};
