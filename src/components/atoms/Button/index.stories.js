import React from 'react';
import Button, { PrimaryButton, WarningButton } from './index.js';

export default stories => stories
  .add('デフォルト', () => <Button>デフォルト</Button>)
  .add('プライマリ', () => <PrimaryButton>プライマリ</PrimaryButton>)
  .add('警告', () => <WarningButton>警告</WarningButton>);
