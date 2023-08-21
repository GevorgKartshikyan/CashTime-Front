import axios from 'axios';

// const { REACT_APP_API_URL } = process.env;

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

class Api {
  static createJob(data) {
    console.log(data);
    return api.post('/jobs/create-job', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static register(data) {
    return api.post('/users/register', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static list(page, limit) {
    return api.post('/users/list', {
      params: {
        page,
        limit,
      },
    });
  }
}

export default Api;
