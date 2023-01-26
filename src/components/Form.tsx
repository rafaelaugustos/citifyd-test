import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Label,
  SelectPicker,
  Picker,
  SelectPickerContainer,
  PickerContainer,
  PickerText,
  PickerButton,
  PickerButtonText,
  Row,
} from '../styles/Form';
import {useData} from '../actions';
import {formatDate} from '../utils/functions';

const Form: React.FC = () => {
  const {getData, dataState} = useData();
  const [openPicker, setOpenPicker] = useState(false);
  const [date, setDate] = useState(null);
  const formatedDate = formatDate(date || new Date(), {fullyear: true});

  return (
    <Container>
      <Label>SELECT OFFER AND TIME</Label>
      <SelectPickerContainer>
        <SelectPicker
          style={styles.inputIOS}
          onValueChange={value => console.log(value)}
          items={[dataState.offer]}
          itemKey="description"
        />
      </SelectPickerContainer>
      <Row>
        <PickerContainer onPress={() => setOpenPicker(true)}>
          <PickerText>
            {date
              ? `${formatedDate.month} ${formatedDate.day}, ${formatedDate.year}`
              : 'Select a date'}
          </PickerText>
        </PickerContainer>
        <PickerButton onPress={() => setOpenPicker(true)}>
          <PickerButtonText>DAY</PickerButtonText>
        </PickerButton>
      </Row>
      <Picker
        modal
        open={openPicker}
        maximumDate={new Date(new Date().setDate(new Date().getDate() - 1))}
        onConfirm={date => {
          setOpenPicker(false);
          setDate(date);
          const {year, month, day} = formatDate(date || new Date(), {
            fullyear: false,
          });

          getData(year, month, day);
        }}
        onCancel={() => {
          setOpenPicker(false);
        }}
        date={new Date()}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    color: '#333',
  },
});

export default Form;
