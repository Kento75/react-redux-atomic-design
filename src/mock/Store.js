import EventEmitter from './EventEmitter.js';

export default class Store extends EventEmitter {
  constructor(dispatcher) {
    super();
    this.notifications = [];
    this.navigations = [];
    this.breadcrumb = [];
    dispatcher.on('data', ::this.onChange);
    dispatcher.on('deleteNotification', ::this.onDeleteNotification);
  }

  get() {
    const { notifications, navigations, breadcrumb } = this;
    return {
      notifications,
      navigations,
      breadcrumb,
    };
  }

  onChange({ notifications, navigations, breadcrumb }) {
    notifications && (this.notifications = notifications);
    navigations && (this.navigations = navigations);
    breadcrumb && (this.breadcrumb = breadcrumb);
    this.emit('change', this.get());
  }

  onDeleteNotification(id) {
    const idx = this.notifications.findIndex(noti => noti.id === id);
    const notifications = [ ...this.notifications ];
    notifications.splice(idx, 1);
    this.notifications = notifications;
    this.emit('change', this.get());
  }
}
