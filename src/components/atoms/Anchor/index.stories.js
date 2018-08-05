import React from 'react';
import Anchor from './index.js';
import { LinkTxt } from '../Txt/index.js';

export default stories => stories
  .add('デフォルト', () => (
    <Anchor href="#">アンカー</Anchor>
  ))
  .add('LinkTxtとの組み合わせ', () => (
    <Anchor href="#"><LinkTxt>LinkTxtとの組み合わせ</LinkTxt></Anchor>
  ));
