export default class EventEmitter {
  constructor() {
    this.handlers = {};
  }

  on(type, handler) {
    if (typeof this.handlers[type] === 'undefined') {
      this.handlers[type] = [];
    }
    this.handlers[type].push(handler);
  }

  off(type, handler) {
    const idx = this.handlers.findIndex(h => h === handler);
    this.handlers.splice(idx, 1);
  }

  emit(type, data) {
    (this.handlers[type] || [])
      .forEach(handler => handler.call(this, data));
  }
}
