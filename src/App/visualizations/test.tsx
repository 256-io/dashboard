import React from 'react';
import Visualizations from '.';
import { ShallowWrapper, shallow } from 'enzyme';

describe('Visualizations', () => {
  let wrapper:ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Visualizations/>);
  });
  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
