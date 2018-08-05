// TODO: あとで色々変更する

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationListTemplate from '../templates/NotificationListTemplate/index.js';

/** Actions */
import * as NotificationListPageAction from '../../actions/NotificationListPage/NotificationListPageActions';


export default class NotificationListPage extends Component {
  constructor(props) {
    super(props);
    /** ActionBinds */
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClickDeleteNotification = this.handleOnClickDeleteNotification.bind(this);
  }

  handleOnChange(e) {
    const { NotificationListPageActionBind } = this.props;
    // 検索ボックス内の値を引数に渡す
    NotificationListPageActionBind.changeSearchWord(e.target.value);
  }

  handleOnClickDeleteNotification(e, notification) {
    const { NotificationListPageActionBind } = this.props;
    NotificationListPageActionBind.deleteNotification(notification.id);
  }

  render() {
    const { onClickDeleteNotification } = this.props;
    const { notifications, navigations, breadcrumb } = this.props;
    return (
      <NotificationListTemplate
        notifications={ notifications }
        navigations={ navigations }
        breadcrumb={ breadcrumb }
        onClickDeleteNotification={ this.onClickDeleteNotification }
      />
    );
  }


}
  NotificationListPage.propTypes = {
    isResultDialogOpen: PropTypes.bool.isRequired,
  };

  function mapStateToProps(state) {
    const {
      isResultDialogOpen,
    } = state.NotificationListPageReducer;
    return {
      isResultDialogOpen,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      NotificationListPageActionBind: bindActionCreators(NotificationListPageAction, dispatch),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NotificationListPage);