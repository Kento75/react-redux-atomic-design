import http from './http.js';

export default class ActionCreator {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  async fetch() {
    const data = await http.get('/api/data');
    this.dispatcher.emit('data', data);
  }

  async deleteNotification(id) {
    await http.delete('/api/data');
    this.dispatcher.emit('deleteNotification', id);
  }
}
