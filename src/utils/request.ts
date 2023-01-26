import axios from 'axios';

const HTTPClient = axios.create({
  baseURL: 'https://70443nq7lb.execute-api.us-west-2.amazonaws.com/dev/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export {HTTPClient};
