import React from 'react';
import ChannelList from './index.js';
import { channels } from '../../../mock/data.js';

export default stories => stories
  .add('デフォルト', () => <ChannelList channels={ channels } />);
