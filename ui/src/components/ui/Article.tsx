import { Col } from 'antd';
import React from 'react';
import {
  ArticleDate,
  ArticleImage,
  ArticlePreamble,
  CustomHeading,
  FlexContainer,
  ImageWrapper,
  StyledRowFullWidth,
} from '../../styles/emotion-components';

interface Props {
  src: string;
  title: string;
  preamble: string;
  date: string;
}

export const Article = ({ src, title, preamble, date }: Props) => {
  return (
    <a href="#">
      <FlexContainer align="flex-start" style={{ margin: '1rem 0' }}>
        <ImageWrapper>
          <ArticleImage src={src} />
        </ImageWrapper>
        <StyledRowFullWidth>
          <Col span={24} lg={16}>
            <CustomHeading>{title}</CustomHeading>
          </Col>
          <Col span={24} lg={8}>
            <ArticleDate>{date}</ArticleDate>
          </Col>
          <Col span="24">
            <ArticlePreamble>{preamble}</ArticlePreamble>
          </Col>
        </StyledRowFullWidth>
      </FlexContainer>
    </a>
  );
};
