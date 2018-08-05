import React from 'react';
import { Update, NeverUpdate, ShouldUpdate, PureUpdate, PureFunctionalUpdate } from './index.js';
import withPerf from 'react-perf-container';

const actions = {
  '意味がない更新': function (end) {
    const { something } = this.state;
    this.setState({ something }, end);
  },
  '意味がある更新': function (end) {
    const something = this.state.something ? '' : this.props.something;
    this.setState({ something }, end);
  },
};

export default stories => stories
  .add('毎回更新される例', () => {
    return withPerf({
      props: { something: '毎回更新される例' },
      actions,
      defaultPrintTypes: { printInclusive: true },
    })(({ something }) => <Update something={ something } />);
  })
  .add('絶対更新されない例', () => {
    return withPerf({
      props: { something: '絶対更新されない例' },
      actions,
      defaultPrintTypes: { printInclusive: true },
    })(({ something }) => <NeverUpdate something={ something } />);
  })
  .add('shouldComponentUpdate() を使った例', () => {
    return withPerf({
      props: { something: 'shouldComponentUpdate() を使った例' },
      actions,
      defaultPrintTypes: { printInclusive: true },
    })(({ something }) => <ShouldUpdate something={ something } />);
  })
  .add('PureComponent を使った例', () => {
    return withPerf({
      props: { something: 'PureComponent を使った例' },
      actions,
      defaultPrintTypes: { printInclusive: true },
    })(({ something }) => <PureUpdate something={ something } />);
  })
  .add('recompose pure を使った例', () => {
    return withPerf({
      props: { something: 'recompose pure を使った例' },
      actions,
      defaultPrintTypes: { printInclusive: true },
    })(({ something }) => <PureFunctionalUpdate something={ something } />);
  });
