import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Titles from '.';

describe('Home', () => {
  let wrapper:ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Titles/>);
  });
  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
