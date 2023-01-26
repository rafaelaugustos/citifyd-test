import React from 'react';
import {Container, Label, LabelValue} from '../styles/TableItem';
import {useData} from '../actions';

interface Props {
  item: {
    label: string;
    key: string;
    options?: {
      topBorder?: boolean;
      divider?: boolean;
      offer?: boolean;
    };
  };
}

const TableItem: React.FC<Props> = ({item}) => {
  const {dataState} = useData();

  return (
    <Container options={item.options}>
      <Label>{item.label}</Label>
      <LabelValue>
        {item?.options?.offer
          ? dataState.offer[item?.key]
          : dataState[item?.key]}
      </LabelValue>
    </Container>
  );
};

export default TableItem;
