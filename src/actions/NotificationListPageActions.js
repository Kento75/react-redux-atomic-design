import request from 'axios';
import * as types from '../types/NotificationListPageTypes.js';

export function change() {
//  return {
//    type: types.CHANGE_SEARCH_WORD,
//    searchWord,
//  };
}

export function deleteNotification(id) {
//  return {
//    type: types.CHANGE_SEARCH_WORD,
//    searchWord,
//  };
}

/**
 * リクエストobject作成処理
 * @param {string} url APIのURL
 * @param {string} method REST区分(GET、POST、PUT、DELETE)
 * @param {object} data 送信データ
 */
function makeRequest(url, method, data) {
  return request({
    url,
    method,
    data,
  });
}