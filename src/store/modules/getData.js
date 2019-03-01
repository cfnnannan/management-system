import actionCallback from '@/utils/action-util';
import getData from '@/api/getData';

const state = {};
const getters = {};
const actions = {
  async getDataList({ commit }, options) {
    const result = await getData.getDataList(options.data);
    actionCallback(options, result);
  },
  async getLoginData({ commit }, options) {
    const result = await getData.getLoginData(options.data);
    actionCallback(options, result);
  },
  async getDownload({commit}, options) {
    const result = await getData.getDownload(options.data);
    actionCallback(options, result);
  },
  async getTaskList({commit}, options) {
    const result = await getData.getTaskList();
    actionCallback(options, result);
  },
  async getTaskDownload({commit}, options) {
    const result = await getData.getTaskDownload(options.data);
    actionCallback(options, result);
  },
  async getUserCreateOrUpdate({commit}, options) {
    const result = await getData.getUserCreateOrUpdate(options.data);
    actionCallback(options, result);
  },
  async getUserList({commit}, options) {
    const result = await getData.getUserList(options.data);
    actionCallback(options, result);
  },
  async getCompanyList({commit}, options) {
    const result = await getData.getCompanyList(options.data);
    actionCallback(options, result);
  },
  async getDeptList({commit}, options) {
    const result = await getData.getDeptList(options.data);
    actionCallback(options, result);
  },
  async getCompanyCreateOrUpdate({commit}, options) {
    const result = await getData.getCompanyCreateOrUpdate(options.data);
    actionCallback(options, result);
  },
  async getDeptCreateOrUpdate({commit}, options) {
    const result = await getData.getDeptCreateOrUpdate(options.data);
    actionCallback(options, result);
  },
};
const mutations = {};
export default {
  state,
  getters,
  actions,
  mutations
};
