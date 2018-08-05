import React from 'react';

export function containPresenter(Container, Presenter) {
  return props => (
    <Container presenter={ presenterProps => <Presenter { ...presenterProps } /> } { ...props } />
  );
}
