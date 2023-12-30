import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    // key:
    // ! remove X- when fix api
    // 'X-180b2b7d231444489c6b1082b24b70db',
    key: '75b1d4dafc514a21a789df3f8eafa45a',
  },
});
