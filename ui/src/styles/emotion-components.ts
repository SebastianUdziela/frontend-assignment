import styled from '@emotion/styled';
import { Checkbox, Col, Row, Typography } from 'antd';
import { COLORS } from '../utils/colors';

export const FlexContainer = styled.div<{ align?: string; justify?: string; direction?: string; padding?: string }>`
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.direction};
  padding: ${(props) => props.padding};
`;

export const ColFlexContainerRowToColumns = styled(Col)<{
  align?: string;
  justify?: string;
  direction?: string;
  padding?: string;
}>`
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  padding: ${(props) => props.padding};

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const CustomParagraph = styled.p<{ size: string; margin?: string }>`
  color: ${COLORS.PRIMARY};
  font-size: ${(props) => props.size}px;
  margin: ${(props) => props.margin};
`;

export const StyledCheckbox = styled(Checkbox)`
  color: ${COLORS.PRIMARY};
  font-size: 14px;
  margin-left: 0 !important;
  margin: 0.5rem 0;
`;

export const StyledColFlex = styled(Col)<{ align?: string; justify?: string }>`
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width: 100%;
`;

export const CustomHeading = styled.h3`
  color: ${COLORS.PRIMARY};
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const ArticlePreamble = styled(Typography.Paragraph)`
  color: ${COLORS.PRIMARY};
  font-size: 14px;
  display: none;
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const RowMainContainer = styled(Row)`
  margin: 1rem auto;
  max-width: 1280px;
`;

export const ImageWrapper = styled.div`
  margin-right: 1rem;
`;

export const ArticleImage = styled.img`
  width: 120px;
  height: 90px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 180px;
    height: 140px;
  }

  @media (min-width: 1200px) {
    width: 260px;
    height: 180px;
  }
`;
export const StyledRowFullWidth = styled(Row)`
  width: 100%;
`;

export const ArticleDate = styled.p`
  font-size: 12px;
  color: ${COLORS.LIGHT_GREY};

  @media (min-width: 992px) {
    text-align: right;
  }
`;

export const ErrorText = styled.p`
  color: ${COLORS.RED};
  text-align: 'center';
  font-size: 16px;
`;
