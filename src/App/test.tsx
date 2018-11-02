import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Titles from './titles';
import Dials from './dials';
import Visualizations from './visualizations';
import App from '.';

const data = { sample:'data' };

describe('App', () => {
  let wrapper : ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<App data={data}/>);
  });
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should render Titles', () => {
    expect(wrapper.find(Titles).exists()).toBeTruthy();
  });
  it('should render Visualizations', () => {
    expect(wrapper.find(Visualizations).exists()).toBeTruthy();
  });
  describe('Dials', () => {
    let dials:any;
    beforeEach(() => {
      dials = wrapper.find(Dials);
    });
    it('should should be rendered', () => {
      expect(dials.exists()).toBeTruthy();
    });
    it('should have prop value equal to data', () => {
      expect(dials.prop('value')).toEqual(wrapper.prop('data'));
      expect(dials.prop('value')).not.toBeUndefined();
    });
    it('shoud have an onChange that sets the data prop', () => {
      const newData = { example:'change' };
      dials.prop('onChange')(newData);
      wrapper.update();
      expect(wrapper.find(Dials).prop('value')).toBe(newData);
    });
  });
});
