import React from 'react';
import GDP from '.';
import { ShallowWrapper, shallow } from 'enzyme';

describe('GDP', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<GDP/>);
  });
  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
