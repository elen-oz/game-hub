import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '180b2b7d231444489c6b1082b24b70db',
  },
});
