import React from 'react';
import LayoutThrashing from './index.js';
import withPerf from 'react-perf-container';

const addItems = createManyItems();

export default stories => stories
  .add('デフォルト', () => {
    return withPerf({
      props: {
        items: [],
      },
      actions: {
        'アイテム追加': function (end) {
          const items = this.state.items.concat(addItems);
          this.setState({ items }, end);
        }
      }
    })(({ items }) => (
      <LayoutThrashing items={ items } />
    ));
  })

function createManyItems() {
  var items = [];
  const baseItems = [
    { value: 0.76 },
    { value: 0.25 },
    { value: 0.98 },
    { value: 0.5 },
    { value: 0.88 },
    { value: 0.12 },
    { value: 1 },
    { value: 0.35 },
    { value: 0.3 },
    { value: 0.48 },
  ];
  for (let i = 0; i < 100; i++) {
    items = items.concat(baseItems);
  }
  return items;
}
