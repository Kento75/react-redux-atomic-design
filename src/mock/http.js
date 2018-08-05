import {
  notifications,
  navigations,
  breadcrumb,
} from './data.js';

export default {
  async get(endPoint) {
    switch (endPoint) {
    case '/api/data':
      return {
        notifications,
        navigations,
        breadcrumb,
      };
    default:
      return {};
    }
  },

  async delete(endPoint) {
    switch (endPoint) {
    case '/api/data':
      return {};
    default:
      return {};
    }
  }
};
