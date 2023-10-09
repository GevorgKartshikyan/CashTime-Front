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

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

class Api {
  static friendTyping(data) {
    return api.put('/messages/typing', data);
  }

  static getJobsTitles() {
    return api.get('/jobs/jobs-title');
  }

  static sendNotice(data) {
    return api.post('/notice/send', data);
  }

  static deleteNotice(data) {
    return api.post('/notice/delete', { data });
  }

  static confirmNotice(data) {
    return api.post('/notice/confirm', { data });
  }

  static noticeList(page, limit) {
    return api.get(`/notice/list?page=${page}&limit=${limit}`);
  }

  static noticeListSingleJob(page, limit, jobId) {
    return api.get(`/notice/single-job-list?page=${page}&limit=${limit}&jobId=${jobId}`);
  }

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

  static resetPassword(data) {
    return api.post('/users/resetPassword', data);
  }

  static resetPasswordConfirm(data) {
    return api.post('/users/resetPasswordConfirm', data);
  }

  static list(page, limit, role, search, id, order) {
    return api.get(`/users/list?page=${page}&limit=${limit}&role=${role}&search=${search}&order=${order}`);
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
    return api.post('/cvs/create-cv', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static singleCv(id) {
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

  static userJobInfo(id) {
    return api.get(`/jobs/user-job-info?id=${id}`);
  }

  static changeRole() {
    return api.get('/users/change-role');
  }

  static getCountries() {
    return api.get('/app/get-countries');
  }

  static getSkills(q = '') {
    return api.get(`/app/get-skills?q=${q}`);
  }

  static getSkillsForAdmin({ page = '', limit = '', q = '' }) {
    return api.put(`/app/get-skills-admin?q=${q}&page=${page}&limit=${limit}`);
  }

  static addSkillForAdmin(skill) {
    return api.post('/app/add-skill', { skill });
  }

  static deleteSkillForAdmin(id) {
    return api.post('/app/delete-skill', { id });
  }

  static blockedUsers(page = '', limit = '') {
    return api.get(`/users/blocked-users?page=${page}&limit=${limit}`);
  }

  static allCountsForAdmin() {
    return api.get('/app/all-counts');
  }

  static sendMessage(data) {
    return api.post('/messages/send', data);
  }

  static getMessagesList(params) {
    return api.get('/messages/list', {
      params,
    });
  }

  static openMessage(id) {
    return api.put('/messages/open', {
      id,
    });
  }

  static newMessages() {
    return api.get('messages/newMessages');
  }

  static editProfile(data) {
    return api.put('users/edit-employee', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static editUserAbout(data) {
    return api.put('users/edit-employee-about', { data });
  }

  static getFilterUser(filteredData) {
    const {
      data,
      page,
      limit,
    } = filteredData;
    return api.post(`/cvs/usersData?page=${page}&limit=${limit}`, { data });
  }

  static deleteProfile(password) {
    return api.post('users/deleteProfile', { password });
  }

  static AdminLogin(data) {
    return api.post('/admin/login', data);
  }

  static getUsersListForMap(data) {
    const { city } = data;
    return api.post('cvs/usersDataForMap', { city });
  }

  static getChartForAdmin() {
    return api.get('/admin/chart');
  }

  static getRandomJobs() {
    return api.get('/jobs/random-jobs');
  }

  static getRandomUsers() {
    return api.get('/cvs/random-cvs');
  }
}

export default Api;
