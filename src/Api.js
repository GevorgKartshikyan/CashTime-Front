import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API_URL,
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, (error) => Promise.reject(error));

class Api {
  static jobListFromUsersFilter({
    filter,
    limit,
    page,
    city,
    order,
  }) {
    return api.post(`/jobs/jobs-list-filter?page=${page}&limit=${limit}&city=${city}&order=${order}`, filter);
  }

  static jobListFromUsersMap(city) {
    return api.get(`/jobs/jobs-list-map?city=${city}`);
  }

  static deleteJob(jobId) {
    return api.post('/jobs/job-delete', jobId);
  }

  static listFromAdmin(page, limit) {
    return api.get(`/jobs/list-admin?page=${page}&limit=${limit}`);
  }

  static activateJob(jobId) {
    return api.post('/jobs/job-activate', jobId);
  }

  static createJob(data) {
    return api.post('/jobs/job-create', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static login(email, password, type) {
    return api.post('/users/login', {
      email,
      password,
      type,
    });
  }

  static register(data) {
    return api.post('/users/register', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static list(page, limit, role, search) {
    return api.get(`/users/list?page=${page}&limit=${limit}&role=${role}&search=${search}`);
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

  static createCv(data) {
    // console.log(data);
    return api.post('/cvs/create-cv', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static singleCv(id) {
    // console.log(id);
    return api.get(`/cvs/singleCv/${id}`);
  }

  static status(id) {
    return api.put('/users/status', { id });
  }

  static report(data) {
    return api.post('/reports/report-message', { data });
  }

  static singleUserFromAdmin(id) {
    return api.get(`/users/singleUserFromAdmin?id=${id}`);
  }

  static singleJobInfo(id) {
    return api.get(`/jobs/job-singe-info?id=${id}`);
  }

  static changeRole() {
    return api.get('/users/change-role');
  }
}

export default Api;
