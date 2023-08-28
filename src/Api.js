import axios from 'axios';

// const { REACT_APP_API_URL } = process.env;

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

class Api {
  static createJob(data) {
    return api.post('/jobs/create-job', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static login(email, password) {
    return api.post('/users/login', { email, password });
  }

  static register(data) {
    return api.post('/users/register', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static list(page, limit, role) {
    return api.get(`/users/list?page=${page}&limit=${limit}&role=${role}`);
  }

  static getUser(id) {
    return api.get(`/users/single/${id}`);
  }

  static getProfile() {
    return api.get('/users/profile');
  }

  static activate(data) {
    return api.post('/users/activate', data);
  }
}

export default Api;
