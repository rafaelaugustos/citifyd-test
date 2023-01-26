import {useRecoilState} from 'recoil';
import {dataAtom} from '../stores/atoms';
import service from '../services';
import {formatDate} from '../utils/functions';

const useData = () => {
  const [dataState, setDataState] = useRecoilState(dataAtom);

  const date = new Date();
  const dateFormated = formatDate(date);

  const getData = async (
    year = dateFormated.year,
    month = dateFormated.month,
    day = dateFormated.day,
  ) => {
    setDataState(currVal => ({
      ...currVal,
      loading: true,
    }));
    try {
      const {data} = await service.loadData({year, month, day});
      setDataState({loading: false, ...data.revenue});
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getData,
    dataState,
  };
};

export {useData};
