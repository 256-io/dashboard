import React from 'react';
import Visualizations from '.';
import { ShallowWrapper, shallow } from 'enzyme';
import GDP from './gdp';
import PerCapita from './per-capita';
import GDPGrowth from './gdp-growth';

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
  it('should render PerCapita', () => {
    expect(wrapper.find(PerCapita)).toHaveLength(1);
  });
  it('should render GDPGrowth', () => {
    expect(wrapper.find(GDPGrowth)).toHaveLength(1);
  });
});
