import React, { Component } from 'react';
import NotificationListTemplate from '../templates/NotificationListTemplate/index.js';
import Store from '../../mock/Store.js';
import ActionCreator from '../../mock/ActionCreator.js';
import EventEmitter from '../../mock/EventEmitter.js';

const dispatcher = new EventEmitter();
const actions = new ActionCreator(dispatcher);
const store = new Store(dispatcher);

export default class NotificationListPage extends Component {
  constructor() {
    super();
    this.onChange = ::this.onChange;
    this.state = store.get();
    store.on('change', this.onChange);
  }

  componentWillMount() {
    actions.fetch();
  }

  componentWillUnmount() {
    store.off('change', this.onChange);
  }

  render() {
    const { onClickDeleteNotification } = this;
    const { notifications, navigations, breadcrumb } = this.state;
    return (
      <NotificationListTemplate
        notifications={ notifications }
        navigations={ navigations }
        breadcrumb={ breadcrumb }
        onClickDeleteNotification={ onClickDeleteNotification }
      />
    );
  }

  onChange() {
    this.setState(store.get());
  }

  onClickDeleteNotification(e, notification) {
    actions.deleteNotification(notification.id);
  }
}
