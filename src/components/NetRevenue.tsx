import React from 'react';
import {Container, Label, Value} from '../styles/NetRevenue';
import {useData} from '../actions';

const NetRevenue: React.FC = () => {
  const {dataState} = useData();

  return Object.keys(dataState.offer).length > 0 ? (
    <Container>
      <Label>Net revenue</Label>
      <Value>
        {dataState.net.toLocaleString('en', {
          style: 'currency',
          currency: 'usd',
        })}
      </Value>
    </Container>
  ) : null;
};

export default NetRevenue;
