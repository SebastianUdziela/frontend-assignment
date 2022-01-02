import { Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { CaretDownOutlined, CaretUpOutlined, LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  CustomParagraph,
  ErrorText,
  FlexContainer,
  RowMainContainer,
  StyledColFlex,
} from '../../../styles/emotion-components';
import { ArticlesThunk } from '../../../thunks/ArticlesThunk';
import { ArticleTypes } from '../../ui/ArticleTypes';
import { Article } from '../../ui/Article';
import { RequestUrls } from '../../../utils/enums';
import { SortByDate } from '../../../utils/helpers';
import { ArticleModel, ArticlesModel } from '../../../utils/interface';

export const Articles = () => {
  const articles = useSelector<ArticlesModel, ArticlesModel['articles']>((state) => state.articles);
  const [isRespond, setIsRespond] = useState<boolean>(false);
  const [articlesDescending, setArticlesdescending] = useState<boolean>(false);
  const [sourceData, setSourceData] = useState({
    sport: false,
    fashion: false,
  });
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();

  const getAllCategories = async () => {
    setIsRespond(true);
    const fashion = await ArticlesThunk.getArticles(dispatch, RequestUrls.FASHION);
    const sports = await ArticlesThunk.getArticles(dispatch, RequestUrls.SPORT);

    if ((fashion && !sports) || (!fashion && sports)) {
      setIsRespond(false);
      return setError('Not all articles have been loaded. Try again');
    }

    if (!fashion && !sports) {
      setIsRespond(false);
      return setError('Something went wrong try again later');
    }
    setError('');
    setIsRespond(false);
  };
  useEffect(() => {
    getAllCategories();
  },[]);
  return (
    <RowMainContainer>
      <Col span={10} md={{ order: 2, span: 4 }}>
        <ArticleTypes
          onChange={(value, name) =>
            setSourceData({
              ...sourceData,
              [name]: value,
            })
          }
        />
      </Col>
      <StyledColFlex md={{ order: 1, span: 24 }} span={12} justify="flex-end">
        <CustomParagraph size="14">Sort by date </CustomParagraph>
        <FlexContainer
          style={{ cursor: 'pointer' }}
          onClick={() => setArticlesdescending(!articlesDescending)}
          padding="0 0 0 .5rem"
          direction="column"
        >
          <CaretUpOutlined />
          <CaretDownOutlined />
        </FlexContainer>
      </StyledColFlex>
      <Col span={24} md={20} order={3}>
        {error && <ErrorText>{error}</ErrorText>}
        {isRespond ? (
          <LoadingOutlined style={{ fontSize: 24 }} spin />
        ) : sourceData.sport || sourceData.fashion ? (
          SortByDate(articles, articlesDescending)
            .filter((element: ArticleModel) => sourceData[element.category] && element)
            .map((article) => (
              <Article
                key={article.id}
                title={article.title}
                src={article.image}
                preamble={article.preamble}
                date={article.date}
              />
            ))
        ) : (
          SortByDate(articles, articlesDescending).map((article) => (
            <Article
              key={article.id}
              title={article.title}
              src={article.image}
              preamble={article.preamble}
              date={article.date}
            />
          ))
        )}
      </Col>
    </RowMainContainer>
  );
};
