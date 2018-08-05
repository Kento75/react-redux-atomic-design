import React from 'react';
import Img from './index.js';

export default stories => stories
  .add('デフォルト', () => <Img src="/mock/images/img01.jpg" width="128"
height="72" />)
  .add('適切なサイズ指定', () => <Img src="/mock/images/192/108/img01.jpg" width="192" height="108" />)
  .add('20倍の画像', () => <Img src="/mock/images/3840/2160/img01.jpg" width="192" height="108" />);
