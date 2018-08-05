import React from 'react';
import { shallow } from 'enzyme';
import { TrashCanIcon } from './index.js';

describe('TrashCanIcon', () => {
  it('クリックをコールバックする', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<TrashCanIcon onClick={ onClick } />);
    wrapper.simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  });
});
