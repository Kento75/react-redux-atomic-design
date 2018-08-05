import React, { PureComponent } from 'react';
import styles from './styles.css';

export default class LayoutThrashing extends PureComponent {
  componentDidMount() {
    this.resizeItems();
  }

  componentDidUpdate() {
    this.resizeItems();
  }

  render() {
    const { items } = this.props;
    return (
      <ul ref="list">
        { items.map((item, idx) => (
          <li key={ idx } ref={ `item_${ idx }` } className={ styles.item }> { item.value * 100 }%</li>
        )) }
      </ul>
    );
  }

  resizeItems() {
    if (!this.refs.list) return;
    const { items } = this.props;
    const width = this.refs.list.offsetWidth;
    items.forEach((item, idx) => {
      const itemEl = this.refs[`item_${ idx }`];
      if (itemEl) {
        itemEl.style.width = `${ width * item.value }px`;
      }
    });
  }
}
