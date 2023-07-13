import { expect } from '@open-wc/testing';
import Stepper from './stepper.js';

describe('Stepper', () => {
  it('<app-stepper> is an instance of Stepper', async () => {
    const element = document.createElement('app-stepper');
    expect(element).to.be.instanceOf(Stepper);
  });
});
