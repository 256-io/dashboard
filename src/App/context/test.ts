import React from 'react';
import { Provider, Consumer } from '.';
import { defaultContext } from './default';

jest.mock('react', () => {
  return {
    createContext: jest.fn(() => {
      return {
        Provider:'mockProvider',
        Consumer:'mockConsumer',
      };
    }),
  };
});
describe('Context', () => {
  it('should return the created context Provvider and Consumer', () => {
    expect(Provider).toBe('mockProvider');
    expect(Consumer).toBe('mockConsumer');
  });
  it('should call createContext with default Data', () => {
    expect(React.createContext).toHaveBeenCalledWith(defaultContext);
  });
});

describe('defaultContext', () => {
  it('should have an update function that does not crash when called', () => {
    defaultContext.update();
  });
});
