import React from 'react';
import { action } from '@storybook/addon-actions'
import withPerf from 'react-perf-container';
import Notification from './index.js';
import { notifications } from '../../../mock/data.js';

const notification = notifications[0];

export default stories => stories
  .add('デフォルト', () => (
    <Notification program={ notification } onClickDelete={ action('削除ボタンがクリックされました') } />
  ))
  .add('性能確認：タイトル変更', () => {
    const actions = {
      'タイトル変更': function (end) {
        this.setState({ program: { ...this.state.program, ...{ title: 'a' } } }, end);
      },
    };
    return withPerf({
      props: {
        program: notification,
      },
      actions: {
        'タイトル変更': function (end) {
          this.setState({ program: { ...this.state.program, ...{ title: '【新】コンポーネント指向で UI を設計しよう！第1話' } } }, end);
        },
      }
    })(({ program }) => (
      <Notification program={ program } onClickDelete={ action('削除ボタンがクリックされました') } />
    ));
  });
