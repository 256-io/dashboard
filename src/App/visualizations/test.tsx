import React from 'react';
import Visualizations from '.';
import { ShallowWrapper, shallow } from 'enzyme';
import GDP from './gdp';

describe('Visualizations', () => {
  let wrapper:ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Visualizations/>);
  });
  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should  render GDP', () => {
    expect(wrapper.find(GDP)).toHaveLength(1);
  });
});
