// TODO: あとで色々変更する

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationListTemplate from '../templates/NotificationListTemplate/index.js';

/** Actions */
import * as NotificationListPageAction from '../../actions/NotificationListPageActions';


class NotificationListPage extends Component {
  constructor(props) {
    super(props);
    /** ActionBinds */
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClickDeleteNotification = this.handleOnClickDeleteNotification.bind(this);
  }

  handleOnChange(e) {
    const { NotificationListPageActionBind } = this.props;
    // 検索ボックス内の値を引数に渡す
    NotificationListPageActionBind.change();
  }

  handleOnClickDeleteNotification(e, notification) {
    const { NotificationListPageActionBind } = this.props;
    NotificationListPageActionBind.deleteNotification(notification.id);
  }

  render() {
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
    notifications: PropTypes.any,
    navigations: PropTypes.any,
    breadcrumb: PropTypes.any,
  };

  function mapStateToProps(state) {
    const {
      notifications,
      navigations,
      breadcrumb,
    } = state.NotificationListPageReducer;
    return {
      notifications,
      navigations,
      breadcrumb,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      NotificationListPageActionBind: bindActionCreators(NotificationListPageAction, dispatch),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NotificationListPage);