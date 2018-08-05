import React from 'react';
import Card, { CardHeader } from './index.js';
import { wrapWithStyle } from '../../utils/decorators.js';
import { HeadingOutlined } from '../../atoms/Heading/index.js';

const withBackground = wrapWithStyle({ padding: '50px', backgroundColor: 'gray', height: '100vh' });

export default stories => stories
  .add('デフォルト', () => withBackground(
    <Card>カード</Card>
  ))
  .add('見出し付き', () => withBackground(
    <Card>
      <CardHeader><HeadingOutlined level="6">見出し</HeadingOutlined></CardHeader>
      カード
    </Card>
  ));
