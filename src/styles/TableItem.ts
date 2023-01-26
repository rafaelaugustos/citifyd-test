import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  border-bottom-width: 1px;
  border-top-width: ${({options}) =>
    options?.topBorder || options?.divider ? '1px' : 0};
  border-color: #4d5b6b;
  border-top-color: ${({options}) => (options?.divider ? '#fff' : '#4d5b6b')};
  margin-top: ${({options}) => (options?.divider ? '40px' : 0)};
`;
export const Label = styled.Text`
  color: #ccc;
`;
export const LabelValue = styled.Text`
  color: #fff;
`;
