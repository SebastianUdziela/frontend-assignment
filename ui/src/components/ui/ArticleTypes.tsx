import { Col, Row } from 'antd';
import React from 'react';
import { CustomParagraph, ColFlexContainerRowToColumns, StyledCheckbox } from '../../styles/emotion-components';
import { DataSources } from '../../utils/enums';

interface Props {
  onChange: (value: boolean, name: DataSources) => void;
}

export const ArticleTypes = ({ onChange }: Props) => {
  return (
    <Row>
      <Col span={24}>
        <CustomParagraph size="14">Data sources</CustomParagraph>
      </Col>
      <Col span={24}>
        <ColFlexContainerRowToColumns>
          <StyledCheckbox onChange={(value) => onChange(value.target.checked, DataSources.FASHION)}>
            Fashion
          </StyledCheckbox>
          <StyledCheckbox onChange={(value) => onChange(value.target.checked, DataSources.SPORT)}>
            Sports
          </StyledCheckbox>
        </ColFlexContainerRowToColumns>
      </Col>
    </Row>
  );
};
