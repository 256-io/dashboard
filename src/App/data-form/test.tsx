import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import PropTypes from 'prop-types';
import { defaultContext } from '../context/default';
import DataForm from '.';

jest.mock('@material-ui/core/TextField', () => () => <div />);
const context = { ...defaultContext };
const childContextTypes = {
  gdp: PropTypes.object,
  population: PropTypes.object,
  target: PropTypes.object,
  update: PropTypes.func,
};
describe('DataForm', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<DataForm data={defaultContext} setData={jest.fn()} />);
  });
  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  describe('#gdp-value-edit', () => {
    let gdpEdit: ReactWrapper;
    let onChange: Function;
    beforeEach(() => {
      gdpEdit = wrapper.find('#gdp-value-edit');
      onChange = gdpEdit.prop('onChange');
    });
    it('should be rendered', () => {
      expect(gdpEdit).toHaveLength(1);
    });
    it('should have the gdp value in billions as its value', () => {
      expect(gdpEdit.prop('value')).toEqual(defaultContext.gdp.value / 1e9);
    });
    it('should have an onChange that calls context update with an updated context', () => {
      const change = { target: { value: 999 } };
      onChange(change);
      expect(wrapper.prop('setData')).toHaveBeenCalledWith({
        ...context,
        gdp: {
          ...context.gdp,
          value: change.target.value * 1e9,
        },
      });
    });
  });
  describe('#gdp-growth-rate-edit', () => {
    let gdpGrowthRateEdit: ReactWrapper;
    beforeEach(() => {
      gdpGrowthRateEdit = wrapper.find('#gdp-growth-rate-edit');
    });
    it('should be rendered', () => {
      expect(gdpGrowthRateEdit).toHaveLength(1);
    });
    it('should have the gdp growth rate as its value', () => {
      expect(gdpGrowthRateEdit.prop('value')).toEqual(
        defaultContext.gdp.growthRate * 100,
      );
    });
  });
  describe('#population-value-edit', () => {
    let populationEdit: ReactWrapper;
    beforeEach(() => {
      populationEdit = wrapper.find('#population-value-edit');
    });
    it('should be rendered', () => {
      expect(populationEdit).toHaveLength(1);
    });
    it('should have the population value as its value', () => {
      expect(populationEdit.prop('value')).toEqual(
        defaultContext.population.value,
      );
    });
  });
  describe('#population-growth-rate-edit', () => {
    let populationGrowthRateEdit: ReactWrapper;
    beforeEach(() => {
      populationGrowthRateEdit = wrapper.find('#population-growth-rate-edit');
    });
    it('should be rendered', () => {
      expect(populationGrowthRateEdit).toHaveLength(1);
    });
    it('should have the population growth rate as its value', () => {
      expect(populationGrowthRateEdit.prop('value')).toEqual(
        Number((defaultContext.population.growthRate * 100).toPrecision(3)),
      );
    });
  });
});
