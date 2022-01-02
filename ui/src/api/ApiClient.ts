import axios from 'axios';

const ARTICLES_API_URL = process.env.REACT_APP_ARTICLES_API_URL;

export const articlesClient = axios.create({
  baseURL: ARTICLES_API_URL,
});
