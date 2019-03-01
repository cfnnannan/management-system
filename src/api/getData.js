import axios from '@/axios'
import cookieUtil from '@/utils/cookie'
export default {
  getDataList (data) {
    return axios.post('/order/list', data)
  },
  getLoginData(data) {
    return axios.post('/login', data)
  },
  getDownload(data) {
    return axios.post('/order/export', data)
  },
  getTaskList() {
    return axios.get('/task/list')
  },
  getTaskDownload(data) {
    return axios.post('/task/download', data)
  },
  getUserList(data) {
    return axios.post('/user/list', data)
  },
  getUserCreateOrUpdate(data) {
    return axios.post('/user/createOrUpdate', data)
  },
  getCompanyList(data) {
    return axios.post('/company/list', data)
  },
  getCompanyCreateOrUpdate(data) {
    return axios.post('/company/createOrUpdate', data)
  },
  getDeptList(data) {
    return axios.post('/dept/list', data)
  },
  getDeptCreateOrUpdate(data) {
    return axios.post('/dept/createOrUpdate', data)
  }
}