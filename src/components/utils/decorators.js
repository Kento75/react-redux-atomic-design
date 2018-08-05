import React, { cloneElement } from 'react';

export const withStyle = style => component => cloneElement(component, { style });
export const wrapWithStyle = style => component => <div style={ style }>{ component }</div>;
