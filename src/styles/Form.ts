import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';

export const Container = styled.View`
  padding-left: 15px;
  margin-top: 30px;
  padding-right: 15px;
`;
export const Label = styled.Text`
  color: #ccc;
`;
export const SelectPickerContainer = styled.View`
  height: 35px;
  background: #fff;
  justify-content: center;
  padding-left: 5px;
  border-radius: 5px;
  margin-top: 3px;
`;
export const SelectPicker = styled(RNPickerSelect)`
  background-color: red;
  height: 500px;
`;
export const Picker = styled(DatePicker)``;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
export const PickerContainer = styled.TouchableOpacity`
  width: 60%;
  height: 35px;
  background: #fff;
  border-radius: 5px;
  justify-content: center;
  padding-left: 5px;
`;
export const PickerText = styled.Text``;
export const PickerButton = styled.TouchableOpacity`
  background-color: #ccc;
  height: 35px;
  width: 35%;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
export const PickerButtonText = styled.Text`
  font-weight: 600;
  color: #555;
`;
