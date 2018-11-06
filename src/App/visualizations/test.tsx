import React from 'react';
import Visualizations from '.';
import { mount, ReactWrapper } from 'enzyme';
import GDP from './gdp';
import PerCapita from './per-capita';
import GDPGrowth from './gdp-growth';
import PerCapitaGrowth from './per-capita-growth';
import TimeToMiddleIncome from './time-to-middle-income';
import MiddleIncome from './middle-income';

describe('Visualizations', () => {
  let wrapper:ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<Visualizations/>);
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
  it('should show PerCapitaGrowth', () => {
    expect(wrapper.find(PerCapitaGrowth)).toHaveLength(1);
  });
  it('should show TimeToMiddleIncome', () => {
    expect(wrapper.find(TimeToMiddleIncome)).toHaveLength(1);
  });
  it('should show MiddleIncome', () => {
    expect(wrapper.find(MiddleIncome)).toHaveLength(1);
  });
});
