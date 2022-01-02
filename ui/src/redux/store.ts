import { createStore } from 'redux';
import { ArticlesReducer } from './articlesReducer';

export const store = createStore(ArticlesReducer);
