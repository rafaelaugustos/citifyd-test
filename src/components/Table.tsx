import React from 'react';
import {ActivityIndicator} from 'react-native';
import TableItem from './TableItem';
import {Container} from '../styles/Table';
import {useData} from '../actions';

const Table: React.FC = () => {
  const {dataState} = useData();
  const tableItems = [
    {
      label: 'Gross revenue',
      options: {topBorder: true},
      key: 'gross',
    },
    {label: 'Credits spent', key: 'spent'},
    {
      label: 'Validation',
      options: {divider: true, offer: true},
      key: 'validation',
    },
    {label: 'Item', options: {offer: true}, key: 'item'},
    {
      label: 'Unit cost',
      options: {offer: true},
      key: 'unitCost',
    },
    {label: 'Limit', options: {offer: true}, key: 'limit'},
    {
      label: 'Category',
      options: {offer: true},
      key: 'category',
    },
    {label: 'Impressions', options: {divider: true}},
    {label: 'Clicks'},
    {label: 'Validations'},
    {label: 'Offer rank by revenue'},
    {label: 'Offer rank by activity'},
  ];

  if (dataState.loading) return <ActivityIndicator style={{marginTop: 50}} />;

  return Object.keys(dataState.offer).length > 0 ? (
    <Container>
      {tableItems.map((item, index) => (
        <TableItem key={`table_item_${index}`} item={item} />
      ))}
    </Container>
  ) : null;
};

export default Table;
