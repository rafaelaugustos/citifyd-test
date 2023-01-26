import {atom, RecoilState} from 'recoil';

interface Data {
  loading: boolean;
  net: number;
  gross: number;
  spent: number;
  offer: any;
  validations: any;
}

export const dataAtom: RecoilState<Data> = atom({
  key: 'data',
  default: {
    loading: false,
    net: 0,
    gross: 0,
    spent: 0,
    offer: {},
    validations: {},
  },
});
