import React from 'react';
import { action } from '@storybook/addon-actions'
import NotificationList2Template from './index.js';
import {
  notifications,
  navigations,
  breadcrumb,
  channels,
} from '../../../mock/data.js';

export default stories => stories
  .add('デフォルト', () => {
    return (
      <NotificationList2Template
        notifications={ notifications }
        navigations={ navigations }
        breadcrumb={ breadcrumb }
        channels={ channels }
        onClickDeleteNotification={ action('削除ボタンがクリックされました') }
      />
    );
  });
