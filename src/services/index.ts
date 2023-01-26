import {HTTPClient} from '../utils/request';

interface loadDataProps {
  year: number | string;
  month: string;
  day: string;
}

export default {
  loadData: async ({year, month, day}: loadDataProps) =>
    await HTTPClient.get(`year/${year}/month/${month}/day/${day}/revenue`),
};
