import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API_URL,
});

class Api {
  static listFromAdmin(page, limit) {
    return api.get(`/jobs/list-admin?page=${page}&limit=${limit}`);
  }

  static createJob(data) {
    return api.post('/jobs/job-create', data, {
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
    return api.get('/users/list', {
      params: {
        page,
        limit,
      },
    });
  }
}

export default Api;
