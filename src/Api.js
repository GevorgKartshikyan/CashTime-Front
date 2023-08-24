import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API_URL,
});

class Api {
  static createJob(data) {
    return api.post('/jobs/create-job', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export default Api;
