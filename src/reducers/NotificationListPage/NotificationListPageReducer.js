import * as types from '../../types/NotificationListPageTypes';

// TODO: あとで色々と変更する

const defaultState = {
      text: '行を選択',
      delete: '削除',
      deleteAria: '選択行を削除',
};

const NotificationListPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    // 検索文字列変更時
    case types.CHANGE_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.searchWord,
      };
    default:
      return state;
  }
};

export default NotificationListPageReducer;
