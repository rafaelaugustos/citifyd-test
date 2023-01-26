import React from 'react';
import {SafeAreaView} from 'react-native';
import {RecoilRoot} from 'recoil';
import Table from './components/Table';
import NetRevenue from './components/NetRevenue';
import Form from './components/Form';
import {Container} from './styles';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RecoilRoot>
        <Container>
          <Form />
          <NetRevenue />
          <Table />
        </Container>
      </RecoilRoot>
    </SafeAreaView>
  );
};

export default App;
