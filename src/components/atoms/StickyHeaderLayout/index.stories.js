import React from 'react';
import StickyHeaderLayout from './index.js';

export default stories => stories
  .add('デフォルト', () => (
    <StickyHeaderLayout style={{ zIndex: 1 }}>
      <div style={{ backgroundColor: 'black', color: 'white', height: '50px' }}>ヘッダー</div>
      <p style={{ background: 'linear-gradient(to bottom, #1e5799 0%,#7db9e8 100%)', height: '150vh' }}>本体</p>
    </StickyHeaderLayout>
  ));
