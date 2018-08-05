import React from 'react';
import { testA11y } from '../../utils/a11y.js';
import NotificationListTemplate from './index.js';
import {
  notifications,
  navigations,
  breadcrumb,
} from '../../../mock/data.js';

describe('NotificationListTemplate', () => {
  it('アクセシビリティに問題がない', () => {
    const config = {
      rules: {
        'color-contrast': { enabled: false },
      },
    };
    return expect(
      testA11y(
      <NotificationListTemplate
        notifications={ notifications }
        navigations={ navigations }
        breadcrumb={ breadcrumb }
        onClickDeleteNotification={ () => {} }
      />, config)
        .then(results => results.violations.length)
    ).resolves.toBe(0);
  });
});
