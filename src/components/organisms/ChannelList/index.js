import React from 'react';
import Menu from '../../molecules/Menu/index.js';

const ChannelList = ({ heading="チャンネル一覧", channels, ...props }) => (
  <Menu heading={ heading } { ...props }>{ channels }</Menu>
);
export default ChannelList;
