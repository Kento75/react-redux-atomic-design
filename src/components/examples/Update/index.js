import React, { Component, PureComponent } from 'react';
import { pure } from 'recompose';

export class Update extends Component {
  render() {
    return <p>{ this.props.something }</p>;
  }
}

export class NeverUpdate extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return <p>{ this.props.something }</p>;
  }
}

export class ShouldUpdate extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.something !== this.props.something;
  }
  render() {
    return <p>{ this.props.something }</p>
  }
}

export class PureUpdate extends PureComponent {
  render() {
    return <p>{ this.props.something }</p>;
  }
}

export const PureFunctionalUpdate = pure(
  props => <p>{ props.something }</p>
);
Object.assign(PureFunctionalUpdate, { displayName: 'PureFunctionalUpdate' });
