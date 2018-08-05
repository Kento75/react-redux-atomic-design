import React from 'react';
import { InfoTxt } from '../../atoms/Txt/index.js';

const Copyright = ({ tag = 'p', children, ...props }) => (
  <InfoTxt tag={ tag } size="s" { ...props }>Copyright 息 { children } All Rights Reserved.</InfoTxt>
);
export default Copyright;
